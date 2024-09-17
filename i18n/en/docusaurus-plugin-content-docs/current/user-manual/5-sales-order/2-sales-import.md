---
title: Sales Order Import
sidebar_position: 2
hide_title: true
---

### Sales Order Import Workflow


Go to: **ExFlow Sales Document Import List**

![Import Sales Document](@site/static/img/media/sales-document-import-list-001.png) <br/> 

| ExFlow Sales Document Import List      |   | 
|:-|:-|
| **Import Document No:**        | Specifies Import Document No.
| **Customer No.:**              | Specifies Customer No.
| **Customer Name:**            | Specifies Customer Name
| **Customer Order No.:**        | Specifies Order No. sent by the customer
| **Status:**                   | Specifies the current status of the document. The document can have status: Error, Processed and On Hold. <br/><br/> *Error:*  Indicated that the imported document contains errors. Related error messages on the document guides the user on how to resolve them. <br/><br/>*Processed:* The document contains no errors and is ready to be created and converted to a sales order. <br/><br/> *On Hold:* Indicates that the document is on hold. It will not be further processed by until it is manually released.
| **Has Error:**                 | Shows if the document has error

<br/>

| ExFlow Sales Batches    |   | 
|:-|:-|
| **Code:**                     | Specifies the code of the batch. Batches can be set up to i.e. automatically create and release documents for specific customers
| **Description:**              | Description of the batch code
| **Default:**                  | Determines if the batch is default. There can be only one default batch. Batches with Document Filter cannot be default
| **Document Filter:**               | Specifies the filter in which documents should be added to which batch
| **Default Location Code:**             | Specifies the default location code. All documents created in this batch will have location code assigned.
| **Document Create Type:**             | Specifies if the document belonging to the batch will be automatically created or created and released.
 **No. of Documents:**                 | Shows the number of sales orders per batch.


Interpret the sales orders in ExFlow Data Capture. 

Click on *Import Sales Document* to import the sales orders and then *Yes*.

![Import Sales Document](@site/static/img/media/sales-document-import-list-import-001.png) <br/>

Imported sales order without error will be created directly and can be found in the standard Sales order list. 


![Import Sales Document](@site/static/img/media/sales-document-import-list-import-002.png) <br/>

Find the newly created sales order in the selected sales batch, or by clicking on the No. of Documents on the Sales Batch line. 

![Import Sales Document](@site/static/img/media/sales-document-import-list-import-003.png) <br/>

Since this selected Default journal have *Document Create Type* set as ‘’Create’’ then all sales order will be created and get status Open.

![Import Sales Document](@site/static/img/media/sales-document-import-list-import-004.png) <br/>

If the Document Create Type was set to ‘’Create and Release’’, then the sales order would have been Released as well. 

![Import Sales Document](@site/static/img/media/sales-document-import-list-import-005.png) <br/>


### Handling Imported Sales Orders With Error
In following example, one Default Sales Batch exist, and another Sales Batch is created for Customer Adatum Corporation.

Imported documents with error will be stuck in the Sales Document Import list until the error is handled manually.

![Import Sales Document](@site/static/img/media/sales-document-import-list-error-001.png) <br/>

Click on Yes to open the Error Message.

![Import Sales Document](@site/static/img/media/sales-document-import-list-error-002.png) <br/>

Error message:

![Import Sales Document](@site/static/img/media/sales-document-import-list-error-003.png) <br/>

Its also possible to click on the Import Document No to see the error message among other information. If a document has an error, it will get Status ‘’Error’’ until the error is resolved.

![Import Sales Document](@site/static/img/media/sales-document-import-list-error-004.png) <br/>

From the card, you will get the opportunity to map an interpreted value to another value. For instance, interpreting an unknown and red marked Unit of Measure ‘’Styck’’ to Unit of measure that Business Central is familiar with, in this example ‘’PCS’’. 

![Import Sales Document](@site/static/img/media/sales-document-import-list-error-005.png) <br/>

Click on the three dots on the import lines to make a mapping, and the drill down pile:

![Import Sales Document](@site/static/img/media/sales-document-import-list-error-006.png) <br/>

Choose the correct Unit of Measure Code and click on OK.

![Import Sales Document](@site/static/img/media/sales-document-import-list-error-007.png) <br/>

The unit of measure (Import) will no longer be red marked and the new unit of measure is now entered on the lines. The document is no longer stuck, the document status will therefore change from Error to Processed.

![Import Sales Document](@site/static/img/media/sales-document-import-list-error-008.png) <br/>

It’s now doable to create the sales order, simply click on ‘’Batch Create Sales Orders’’. 

![Import Sales Document](@site/static/img/media/sales-document-import-list-error-009.png) <br/>

Add filter if needed or click on OK.

![Import Sales Document](@site/static/img/media/sales-document-import-list-error-010.png) <br/>

A sales order creation confirmation will be given. 

![Import Sales Document](@site/static/img/media/sales-document-import-list-error-011.png) <br/>

To see all created sales orders, click on the No. of Documents on the sales batch line, in this example three sales orders are created, but not released.

![Import Sales Document](@site/static/img/media/sales-document-import-list-error-012.png) <br/>

If the sales orders are supposed to be Created and Released straight away, edit the list, and make the change.

![Import Sales Document](@site/static/img/media/sales-document-import-list-error-013.png) <br/>

If a filter is added on, for instance ‘’Document Filter’’ is set to ‘’Bill to Customer’’, then all their documents will be imported to this specific ‘’Bill- to Customer No.’’ batch.

![Import Sales Document](@site/static/img/media/sales-document-import-list-error-014.png) <br/>


### Set an imported Sales Order On Hold 

Open the Sales Import DOcument card and then *Actions -> Hold/Release* 

![Import Sales Document](@site/static/img/media/sales-document-import-list-error-016.png) <br/>

The document will remain as on hold until it is manually processed and released.

![Import Sales Document](@site/static/img/media/sales-document-import-list-error-015.png) <br/>