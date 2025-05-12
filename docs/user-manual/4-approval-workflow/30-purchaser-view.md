---
title: Purchaser View 
sidebar_position: 30
hide_title: true
custom_edit_url: null
---
## Purchaser View

Previously, once all order-matched documents were imported into the journal, the burden for handling any errors fell largely on the AP team. 

Now, purchasers can step in earlier in the process, providing support to the AP team by managing or offering input on order-matched documents with errors within their own dedicated workspace, the **ExFlow Order Matching View for Purchaser.**<br/>

After purchasers address the (potential) issues with their orders, this function guides the AP team in resolving any errors in the order-matched lines within the Import Journal, allowing them to continue their work smoothly and accelerating the approval-to-posting process.

## Setup

### New Order Matching

The Purchaser view can only be used if the New Order Matching is enabled. 

Read more about this under [**Get Started**](https://docs.signupsoftware.com/business-central/docs/user-manual/welcome-to-exflow/get-started) and [**New Order Matching Experience**](https://docs.signupsoftware.com/business-central/docs/user-manual/approval-workflow/new-order-matching)

### User Setup

Go to: **User Setup**

The Business Central User ID need to be entered in User Setup to access the Purchaser View. <br/>

Also add the User’s Purchaser Code to get a filtered view on that Purchaser Code, this is not mandatory. However, if no Purchaser Code is set, the purchaser will see all existing order matched document lines with errors.

Adding the Purchaser Code to the Business Central User ID will populate the Purchaser Code to the order header, when the purchaser creates orders. This can be beneficial when working with the Purchaser View, if no default Purchaser Code is assigned to a specific vendor.

### Permission on the User

Go to: **User Card**<br/>

Permission Set EX PURCHASER can be used, but not a must.<br/>

Users with other ExFlow permission set can also access the view. Observe, combining Ex Admin/Ex Accountant with Ex Purchaser will cause access limitations. (If having one of these permissions sets, then Ex Purchaser is of course not needed.)

Additional permission for entering a journal can be provided to the Purchaser. Read more about this under 
[**Import Journal Permission for Purchaser**](https://docs.signupsoftware.com/business-central/docs/user-manual/approval-workflow/purchaser-view#import-journal-permission-for-purchaser)


## Purchasing Agent Role Center
From the Business Central Standard *Purchasing Agent* Role Center , the stack *ExFlow Purchaser View* can be found, and Purchaser can click to access their dedicated workspace. 

![Purchaser View](@site/static/img/media/purchaser-view-021.png)

## Purchaser view

Go to: **ExFlow Order Matching View for Purchaser**

Purchasers can also search for *ExFlow Order Matching View for Purchaser* in Business Central and enter the view. 

The Purchaser View display all document lines with error to be handled. From here Purchasers can manage their orders, receipts, shipments and price adjustments etc.

| Order Matching View for Purchaser |   | 
|:-|:-|
|Match Line|Use this function to match selected line.
|Un-Match Line|Use this function to release matching for selected line to rematched against other order line. Split lines will be reverted.
|Remove Order No.|Use this function to remove the order no from the selected line.
|Verify |Use this function to verify the document for selected line.
|Verify All|Verify all document lines.
|Auto Assign Receipt/Shipment|Use this functionality to automatically assign the receipt/shipment to the lines. 
|Order Card|View or edit detailed information about the order or return order on the purchase document line.
|Document Card|View the document card for the selected document. 
|*Action*|
|Order Line Related Documents|Shows where the selected order line is used on the chosen purchase document.
|Filter/Unfilter Same Import Line|Filter/Unfilter to show other documents or lines with the same Order No. and Order Line No.
|*Action – Email*|
|Send Receipt Reminders|Use this function to send receipt reminders for selected lines. (Only applicable if Match Documents = Receipts are set)
|See Email Log|Use this function to send receipt reminders for selected lines.
|Send Email to Vendor|Use this function to send email to vendor or other.
|Sent Emails|View a list of emails that have been sent regarding this document.
|*Related*|
|About ExFlow|Get current versions and convenient links
|*Related - Files*|
|Show Document Image (Ctrl+I)| Use this function to display the document image for the currently selected document.
|Show Import Details (OCR)|Use this function to display the OCR import data for the currently selected document.

## Import Lines and Order Lines
The imported document lines are displayed to the left, and corresponding order lines to the right.

Purchase invoices and purchase order lines are displayed in black, and credit memos and corresponding return order lines are displayed in red for clarity.

### Matched Lines
Matched Order Lines will be bolded for clarity, so the Purchaser can easily see which import line that is connected to which order line.

![Purchaser View](@site/static/img/media/purchaser-view-001.png)


### Exceptions 
Under the Exception Section, different action messages will be displayed. These are the same action messages as the AP team will see in Import Journals.<br/>

Purchaser can add an Exception Code whenever necessary. Exception Code is used whenever the Purchaser has done everything from their end, to correct an order matched issue. After adding the code, then the AP team will be informed on how to further handle the document. <br/>

Exception Code is not mandatory, if the Purchaser corrects, for instance, unit cost on the order, then the error will go away, and no Exception Code is needed since the document will be corrected.<br/>

|Exceptions |   | 
|:-|:-|
|Action Message| The error message for the document line
|Exception Code| Error Code that purchaser can add, to signal to AP team on how to proceed to resolve/handle the line with error
|Exception Description| Description of the Exception Code
|Exception Created By| Show the User that added the Exception Code
|Handled Time/Date| Show the User that resolved the error  


Read more about this under [**Workflow**](https://docs.signupsoftware.com/business-central/docs/user-manual/approval-workflow/purchaser-view#workflow)



### Error Type
The purchaser can filter the view on a specific error type for easier management of their order related error lines.
Currently, below Error Types are available:
 
![Purchaser View](@site/static/img/media/purchaser-view-002.png)

### Use Base Quantity 
Shows all quantities in the base unit of measure. 

If the purchaser toggle the checkbox ''Use Base Quantity'', the purchaser can view all item lines in their base quantity, regardless of the unit of measure (UoM) used during import. For example, if a document is imported with a different UoM, such as 2 Boxes at 500 SEK each, it can still be accurately matched to an order line specified as 20 PCS at 50 SEK.

Read more about this under [Base Unit of Measure Conversion](https://docs.exflow.cloud/business-central/docs/user-manual/approval-workflow/new-order-matching#base-unit-of-measure-conversion)

### Show Lines With Exception Code
Enable this checkbox to view document lines where Exception Codes have been added by the Purchaser.<br/>

The Lines will be in this view as long as the document exist in the Import Journal. When the document gets created and sent for approval, then the lines will not be visible. 

## FactBoxes
### PDF Preview
View the document image.

### Discussion Panel
Use Discussion Panel to communicate, as usual, with colleagues and web approvers.

### Incoming Document Files
Download Incoming Document or attach other files. 

## Workflow
AP will import order matched documents, and all of those have some kind of order matched error, it could for instance be price or quantity differences. <br/>

Then these error lines will be shown to the specific Purchaser in the Purchaser View, for them to handle the issue so the AP can make any potential adjustment and send the document for approval. <br/>

To illustrate this in an example, if an order matched invoice gets interpreted and imported to Import Journal with Unit Cost difference between the imported document line and order line, then ExFlow will list all issues in a gathered error list so provide a better overview and quicker handling and resolving process. <br/>

### Import Journal, as AP

When the document is interpreted on line level and imported with error, AP might need input on how to solve the order related issue. <br/>

In this example, AP have an order matched invoice with Action message on the line, indicating that an error exists. Errors will be displayed in the Multiple Error Lines list. <br/>

AP can click on the Action Message to inspect and view all existing errors in the Multiple Error List (instead of getting errors one by one as in the old order matching).<br/>

If the Purchaser Code is set for a specific vendor, it will follow to Import Journal, and all error lines will be visible for that purchaser, in his/hers Purchaser View to be handled. 

 
![Purchaser View](@site/static/img/media/purchaser-view-003.png)

 
![Purchaser View](@site/static/img/media/purchaser-view-004.png)

Documents with header matched order related errors can also be triggered manually on the line, to be sent to the Purchaser for management. 


### Purchaser View

#### Correcting an Order
According to the Action Messages in this example, the order is not released and cannot be matched to the imported document lines.

In this case, the Purchaser can enter the Order Card and receive the order, and of course, make other needed corrections. 

The Purchaser can also access the Document Card in read mode, but will not have the permission to edit the document card. 

![Purchaser View](@site/static/img/media/purchaser-view-005.png)

That order will disappear from the Purchasers View, since receiving it will also mark it as managed, and AP can now proceed to create the document in Import Journal, since it was a perfect match. 
 
![Purchaser View](@site/static/img/media/purchaser-view-006.png)



#### Send Receipt Reminder 
Go to: **Actions --> Email --> Send Receipt Reminders**

If the goods are not received, then the Purchaser can send a reminder to warehouse workers, purchase coordinator or other colleagues. <br/>

Read more about this under [***Email Reminders --> Unreceived Order***](https://docs.signupsoftware.com/business-central/docs/user-manual/approval-workflow/email-reminders)

![Purchaser View](@site/static/img/media/purchaser-view-007.png)

This only works for documents where setting Match to Documents = Receipts. <br/>
Email Log can also be found under the ‘’Send Receipt Reminders’’- function.<br/>

#### Send Email to Vendor
Go to: **Actions --> Email --> Send Email to Vendor**

Purchasers can send emails to vendor from this view. Purchasers can also see all sent emails under the ‘’Send Email to Vendor’’-function. <br/>

In below example, the Purchaser Sammy needs to contact the vendor due to incorrect unit cost on all items and request a credit and new invoice with the correct unit costs, as per their agreement. <br/>
 
![Purchaser View](@site/static/img/media/purchaser-view-008.png)
Information about the sent email will be set as a chat message in Discussion Panel. <br/>The email will also be attached as a pdf under Incoming Documents (Supporting Attachments). 

 
![Purchaser View](@site/static/img/media/purchaser-view-009.png)

The pdf will also follow to ExFlow Web as an attachment for the approvers to see, to keep all involved informed from start to end.<br/>
Next step for the purchaser is to add an Exception Code: Credit.<br/>

#### Adding an Exception Code 
To follow up on above scenario, Purchaser Sammy need to add an Exception Code, signaling to AP to proceed with handling and resolving the document issues.

 
![Purchaser View](@site/static/img/media/purchaser-view-010.png)

When adding an Exception Code, the field ‘’Exception Created By’’ will be automatically inserted with the User id who added the Exception Code. 
 
![Purchaser View](@site/static/img/media/purchaser-view-011.png)

Whenever a Purchaser add an Exception Code, then the Import Line and its corresponding order line will be filtered off this page, and accessible in the ‘’Show Lines With Exception Code’’ filtered view when enabled.
 
![Purchaser View](@site/static/img/media/purchaser-view-012.png)

The Purchaser is now done from their side, with email and exception code added, the purchaser has guided the AP to process with handling/ resolving the document in Import Journal.

#### Correcting the document as AP in Import Journal
AP can enable ‘’Filter Documents with Order Exception’’ to filter the journal on Purchasers added Exception codes (to follow up purchasers added work) and to continue with handling the document.
 
![Purchaser View](@site/static/img/media/purchaser-view-013.png)
AP can see that Purchaser have added Credit as Exception Code and now knows how to proceed with the document.
 
![Purchaser View](@site/static/img/media/purchaser-view-014.png)

When the AP has handled/ resolved the document, then the order matching error on the line will disappear. The ‘’Multiple Error Line Exist’’ will still be ticked so AP easily can click on the small line (-) to open the Multiple Error List to display the history. <br/>
AP can also Block Document for Posting, as in the below picture. 
 
![Purchaser View](@site/static/img/media/purchaser-view-015.png)

In the Multiple Error List page, a timestamp will be added to the handled line to give information about when the error was resolved. 
  
![Purchaser View](@site/static/img/media/purchaser-view-016.png)

When resolved, the error line will be in italic and non-editable. <br/>

AP staff can also use shortcut commando ‘’Alt+M’’ to enter the Manual Order Matching page for a better overview.<br/>
 
![Purchaser View](@site/static/img/media/purchaser-view-017.png)

The document can now be created. When created, the document will then be found in Approval Status as usual, but marked as: blocked for posting, until further adjustments are executed.

### Approval Status 
Go to: **Approval Status --> Document Lines --> Multiple Error Lines Exist**<br/>

In Approval Status, AP can see if a document contains Multiple Error Lines under the Document Lines. If the order matched document error lines have been handled and resolved, the Multiple Error Lines will follow to view the history. <br/>

By clicking on ‘’Multiple Error Lines Exist’’: ‘’Yes’’, then the Multiple Error List will open to display the resolved line(s) in Italic. 
 
![Purchaser View](@site/static/img/media/purchaser-view-018.png)


#### Send Email to Vendor in Approval Status
Go to: **Related --> Approval Status --> Send Email to Vendor/Sent Email** <br/>

If needed, AP can send email to vendor from Approval Status as well and also see the email log. Every email sent will be a saved attachment, together with a chat message to keep the approver updated.

Go to *Sent Email* to see the log.

### Approval Status History

The Multiple Error List information will, of course, also follow to the Posted Document Lines in Approval Status History.

## Import Journal Permission for Purchaser 

Go to: **ExFlow User Card --> Import Journal Permission for Purchaser**

Open the Purchasers ExFlow User card and enter ‘’Import Journal Permission for Purchaser’’ and mark which journal(s) that the Purchaser should have access to.<br/>

This will only be applicable for Business Central Users with the EX PURCHASER-permission set.<br/>
With given permission, the purchaser will have READ access the chosen journal, no modifications can be made.
  
![Purchaser View](@site/static/img/media/purchaser-view-019.png)

In this example, the Purchaser Sammy has only access to enter the EDC PO Import Journal, and not other journals. 
 
![Purchaser View](@site/static/img/media/purchaser-view-020.png)



