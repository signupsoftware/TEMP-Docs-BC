---
title: Web Services - EXFID
sidebar_position: 3
hide_title: true
custom_edit_url: null
---
## Web Services - EXFID

### Introduction
ExFlow depends on the import of documents from a multitude of sources, Local File System, Azure Storage or Web Services. In this document, Web Services will be described; functionality, setup, usage, and sample code as a project in C#/.NET 4.8 and Visual Studio 2019 to integrate with it. Coding can be done in any language that support Web Services requests using the SOAP protocol. The listed sample code can be easily converted to VB.Net.<br/>
Using Web Services enables 3’rd party integrators or Business Central partners to send electronic invoices to ExFlow using a standardized protocol.

### General
Importing invoices into ExFlow usually requires two files, one XML that contains the invoice in a known structure and the PDF file containing a presentation of the invoice. The PDF file may be optional if there exist an XSL file that can generate an HTML convertible to PDF.

Using Web Services for import is initiated externally and not by ExFlow or any Job Queue Entries. External systems connect to Web Services in Business Central and invoke methods to upload documents into Incoming Documents and Incoming Document Attachments. When triggering import in ExFlow, documents are processed based on Incoming Documents imported by the Web Service.

### Business Central / ExFlow
Install ExFlow and run the Wizard to get a setup. Import a useful Data Exchange Definition (DED), either one from ExFlow or use an existing DED in Business Central.<br/><br/>

#### ExFlow Setup
In ExFlow Setup, set a value in field “Web Def. Data Exchange Type”, selecting from the list of Data Exchange Types. If there are none available, then run “Import Data Exchange Definitions” and import one or more Data Exchange Definitions.

![ExFlow Setup OCR Import](@site/static/img/media/exflow-setup-ocr-import-002.png)<br/><br/>


#### Import Journal
Create or configure an ExFlow Import Journal to process what is imported through the EXFID Web Service.
* Create a new ExFlow Import Journal
* Set a Name and Description
* Set Source Type to Web Service

![ExFlow Import Journals](@site/static/img/media/import-journals-002.png)

Process imported invoices through the Web Service by running “Import Documents” in the newly created ExFlow Import Journal or by running “Batch Import Documents”.
