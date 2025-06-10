---
title: Generic Blob Storage
sidebar_position: 4
hide_title: true
custom_edit_url: null
---
## Generic Blob Storage

### Introduction
ExFlow currently uses the Business Central database to store imported documents. Documents is mainly XML and PDF. It could potentially be other formats also, such as DOCX or PNG.

When using Business Central for storage, the allocated space tends to radically expand based on the number of invoices the customer is receiving. As imported documents may contain images, the space allocated in BC Online will expand radically.
There is a need to be able to store imported documents in alternative locations for cheaper or more efficient storage.

### General
Blobs are files in a more vintage sense of thinking. However, a blob is the content of something we think of as a file. A file is more related to the metadata such as Name, Creation Date, Modification Date, Content-Type and more. Blobs are binary sequences of data that the metadata describes. The metadata will tell us or the application using the blob how to use the content.

To handle blobs more efficiently, they must be abstracted from the application. So, when ExFlow asks for a blob, it will get metadata and the binary content. The actual source is unknown to the application.

This solution uses multiple layers to abstract and isolate functionality.

#### ExFlow Application
The application that will make use of the blobs by reading, writing, deleting and listing blobs, or files if you wish.<br/><br/>

#### Storage Management
Handles where, when and how a blob is stored. Cache management and storage is handled in this layer. Transfer blobs and fetching blobs is done in this layer.<br/><br/>

#### Storage Implementation (Storage Interface)
This is the implementation of a storage type. Functions to implement are the most primitive such as Get or Put.


### Architecture
The architecture for Blob Storage will isolate the application from the way blobs are accessed.<br/><br/>

#### ExFlow Application
In Business Central, blobs are stored in blob fields in tables. When a blob is read, streams are used to extract data from the blob. When a blob is written, streams are used to write data in a table.
Currently, blobs are used or referred to in the following areas:
* ExFlow PDF add-in
* Incoming Document Attachment
    - InStream
    - OutStream
* Ctrl+I shortcut in ExFlow to download the main attachment to the local computer
* Click a filename in Business Central to download any attachment to the local computer<br/><br/>

**Isolation:** Any request to read a blob will be sent through the Storage Management that will return the blob. The blob may be returned as a stream, or downloaded to the client.

Any request to save a blob will be sent through the Storage Management. Reference will be SystemId along with TableID and FieldID to make it possible to “store” two blobs in the same table and still use the external storage.

Blob functionality will mainly mimic standard blob methods if they make sense for usage.<br/><br/>

#### Storage Management
Storage Management (SM) will expose functions to read or write blobs either directly or through listening to events.

Business Central triggers events when blobs are read, before data is extracted from the primary most common storage, Incoming Document Attachment.

SM will maintain a cache of blobs in use. Blobs in use may be blobs related to Import Journal or Approval Status to name a few. Blobs can be used also in archived areas such as Posted Purchase Invoices or Vendor Ledger Entries.

When a blob is requested related to posted documents, the blob is fetched from blob storage and cached locally, then returned to the application. The blob will be retained in cache in a well-defined time based on setup.

Blobs requested for areas such as Import Journal will be retained in Incoming Document Attachment until the invoice has been posted. At that time, the Incoming Document Attachment is marked as invalid and will be removed on a scheduled basis by a Scheduled Task. If a request for a blob that is related to a newly posted entry and the cache entry still exist, the blob is not fetched again, and the cache is set as valid and will remain valid for the time set in setup.

Blob naming convention will be generic where blob details are stored in a separate table that will contain the name of the blob. The blob needs to follow a generic naming convention to not give issues with filename length as an example. A recommended name is GUID where parts of it may be used as path.<br/><br/>

#### Storage Implementation
The physical storage of blobs is made using an Interface in Business Central. An Interface is an abstraction with no code, it can be seen as a definition of an API. The Interface only contain function signatures. It is up to implementers to add the code to support the Interface.

The Interface defines one or more overloaded functions related to Get, Put, Exist, List and Delete. The Interface also defines overloaded functions related to Setup, functions such as GetFieldCaption, SetFieldValue and GetFieldValue.

![Blob Storage](@site/static/img/media/blob-storage-001.png)


### Blob Storage Setup
Go to: ***ExFlow Setup --> Actions --> Functions --> Blob Storage Mgmt*** (--> Storage Setup)

Setup for Blob Storage is based on the Interface defined towards the Storage Implementation. The Blob Storage Setup is generic and general. It contains a few generic text fields such as Code, Description and Blob Source.

The implementation will run its own setup against its own tables as needed. As the implementation may require OAuth or some other type of authentication, it is up to the implementation to implement that. An implementation of the interface may choose to save all configuration parameters within Isolated Storage.

Minimal Blob Storage Setup values are Code, Description, Blob Storage Type and if it is enabled or not.

There may be more than one Blob Storage Setup per Blob Storage Type, it depends on usage.

![Storage Setup](@site/static/img/media/storage-setup-001.png)

In the example, the chosen implementation is “Azure Container”

The Azure Container will present a setup that collects information needed for the implementation when pressing Setup.

It is up to the implementation to store parameters in a relevant way using physical tables, isolated storage or any other means.

All fields in Blob Storage Setup are irrelevant to ExFlow or Blob Storage Management and only make sense to the implementation. The implementation uses the Blob Storage Setup to know what setup to use and fetch from its own storage, table, or isolated storage. So, when a call is made to the Interface Get(Name, …), the implementation will make the needed setup and connections to make it possible to fetch the requested blob.

In this case, Storage Management is physical storage agnostic, it does not know how to get the file or blob, it will leave that to the implementation.

A Storage Management call to Get(Name, …) will behave the same and return the blob no matter if the implementation is Azure Container, Database, Azure Share, Local Filesystem, Amazon WS, Dropbox or any other way to technically handle blobs.

### Storage Management
Storage Management (SM) will expose general functionality for the application to use to get, set, list or delete blobs based on a key/name combination. SM will restore the blob to its original location when a request is made for it.

SM will store or cache blobs locally in a table within the Blob Storage functionality to make blob management fast for the application.

Cached blobs are saved only for a limited time as set in setup. Limitations may be, but not limited to, Days or Functional Area.<br/><br/>

#### Cache in Days
For areas that are not temporary in nature such as posted documents, the cache can be set to expire cached entries within set days. Once the number of days has been reached, the cache entries are invalidated. A scheduled job will remove invalid entries from the cache.<br/><br/>

#### Cache per Functional Area
Blob archiving will only be relevant to posted documents as documents related to Import Journal or Approval Status require immediate access.<br/><br/>

#### Cache in Number of Entries
For cache related to functional areas or in general, a cache storage philosophy may be to keep at most 1000 cached entries. Every time a blob is fetched from the cache, a Last Used timestamp is updated. Last Used can be used as reference when the number of entries exceeds the value set in setup. Those entries are deleted by a scheduled job. There may be a dynamic buffer when the number of cached entries are more than the set limit.

Cache in Number of Entries will most likely only apply to valid entries. Invalid entries will become deleted anyway by the scheduled job on a regular basis.<br/><br/>

#### ExFlow Storage Details

Displays the current storage details of incoming document attachment in Business Central. The details include the date when the document was stored in blob storage, the last accessed date, and the list of incoming documents that are still in Business Central with System Id as the identifier.

#### Additional Features
Storage Management may implement additional features to speed up blob handling or other functionality.<br/>

**Cache Cleanup Process**<br/>
Enable manual cleanup of cache.

**Cache Paradigm**<br/>

  - ***Pre-Fetch Entries***<br/>
      Pre-populate cache with entries in Incoming Document Attachment as that will speed up access to the blob as it will be available immediately.

  - ***On-Demand***<br/>
    Only fetch and populate the cache once the blob is requested. May not be a viable feature but a feature none-the-less.<br/>

**Document Migration**<br/>
Storage Management may implement moving documents from one Blob Storage Type to another, or from one Blob Storage Type of the same type as the destination storage. Migration can then be directly supported to read blobs from a temporary Azure Container (owned by partner or SignUp) into a permanent Azure Container (owned by customer)

**Storage Relocation**<br/>
Storage Management may implement a move from one Blob Storage Type to another. The customer is using Database Storage Type and wish to move to Azure Container. Thus the Storage Management is issuing one Get(Name, …) from Database Storage Type and then issue a Put(Name, …) to Azure Container, for each blob.<br/><br/>
It would be possible to stop using external storage by using a function to copy/move blobs from external storage into Incoming Document Attachment again.


