---
title: First Approver
sidebar_position: 5
hide_title: true
custom_edit_url: null
---
## Copy First Approver to the Approval Flow

Go to: **ExFlow Setup --> General --> Copy First Approver to the Approval Flow**

![ExFlow Setup](@site/static/img/media/first-approver-001.png)
<br/>

| Copy First Approver to the Approval Flow    | 	|
|:-|:-|
| **Never:**                         | When adding a First Approver to a document this approver will not appear in the approval flow. <br/>Instead, it can be used as a filter to add an Approval Rule. <br/>If an Invoice or Credit Memo is interpreted with reference, the reference can apply a First Approver to trigger an Approval Rule. <br/><br/> **Example:** Cecilia have ordered a computer and invoice is interpret with reference Cecilia. <br/> ExFlow Reference is created with First Approver Cecilia. <br/>Now we can create an Approval Rule with filter on Cecilia and build the approval flow without adding Cecilia as an approver.
| **All Documents**| First Approver will be added to the approval flow before Approvers from Approval Rule for all documents. Quote, Order Invoice and Credit Memo. <br/>If working with Quote and Order Approval, it is not recommended to Set Current User as Default First Approver. Since the Purchaser creating and releasing the Quote/Order also needs to approve the document in ExFlow Approval. <br/><br/> **Example:** An Invoice is interpreted with reference Cecilia. <br/>ExFlow Reference is created with First Approver Cecilia. <br/>Now we can send the invoice to Cecilia and let her add coding to trigger an approval rule later in the approval process.
|**Invoices/Cr. Memo**| First approver will be added to the approval flow only for Invoices and Credit Memos. <br/>Not for Order and Quotes.  <br/><br/> **Example:** If Cecilia creates a Purchase Quote or Purchase Order ExFlow can add current user as First Approver. <br/>Now we can create an Approval Rule with filter on Cecilia and build the approval flow without adding Cecilia as an approver. <br/>When Cecilia releases the document, she do not need to approve it since she is the one creating and releasing.


<br/>

### Set Current User as Default First Approver for Order/Quote

Go to: **ExFlow Setup --> Order and Quote Approval --> Set Current User as Default First Approver for Order/Quote**

For Purchase Quote and Orders, First Approver can be added by ExFlow on a line level.<br/>

The ExFlow User then needs to be allocated to a System User for ExFlow to recognize which user to add as First Approver.<br/>

![ExFlow Setup](@site/static/img/media/first-approver-003.png)<br/>


### First Approver Filter in an ExFlow Approval Rule

Enable the function ''Copy First Approver to the Approval Flow'' if the "First Approver Filter" from the Approval Rule should be added as first approver to the approval proposal, for a specific document line. <br/>

![ExFlow Setup](@site/static/img/media/first-approver-002.png)

<br/>

### First Approver in Import Journal
First Approver can be added to document header in Import Journal via [***ExFlow Contract***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/contract#contract) and [***ExFlow Reference***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/reference-codes#reference-codes) copied down to document lines.


#### First Approver in ExFlow Contract
When interpret a reference connected to an ExFlow Contract  this can be used to add First Approver to Invoices in Import Journal. <br/> 

![ExFlow Setup](@site/static/img/media/first-approver-004.png)


#### First Approver in ExFlow Reference
When interpret an ExFlow Reference this can be used to add First Approver to Invoice or Credit Memo in Import Journal. <br/> 

![ExFlow Setup](@site/static/img/media/first-approver-005.png)





