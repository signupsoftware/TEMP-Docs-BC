---
title: Vendor Setup
sidebar_position: 11
hide_title: true
custom_edit_url: null
---
## Vendor Setup

Go to: ***ExFlow Vendor Setup***

Add vendor specific prioritized settings by using ExFlow Vendor Setup. ExFlow Vendor Setup can be reached by searching, from standard Vendor card, ExFlow Setup and Import Journal.

Simply edit the ExFlow Vendor Setup list or click on ‘‘New‘‘ to open the specific Vendor Setup Card to add/change settings. 

The default settings are displayed in the ExFlow Vendor Setup list. Utilize Personalize to modify the list with more fields, if necessary.

![ExFlow Vendor Setup](@site/static/img/media/Vendor-setup-001.png)

| Vendor Setup menu|  |
|:-|:-|
|**New**	|Add a new Vendor Setup
|**Edit List**	|Edit the Vendor Setup list
|**Delete**	|Delete a current Vendor Setup 
|**Edit**	|Edit the current Vendor Setup Card
|**View**	|Open the current Vendor Setup Card
|*More options --> Related*	|
|**Related --> Auto Receiving Line Types**	|Edit or view Line Types that should be automatically received for a specific vendor.<br/><br/> Read more about this under section [***Match Invoice with Receipt-, Order- or both Receipt and Order lines***](https://docs.signupsoftware.com/business-central/docs/user-manual/approval-workflow/purchase-order-matching-process#match-invoice-with-receipt--order--or-both-receipt-and-order-lines)
|**Related --> Item No. Matching Priority**	|Determine the order in which the system attempts to match imported invoices against items and order lines. <br/><br/> Read more about this under section [***Item No. Matching Priority***](https://docs.signupsoftware.com/business-central/docs/user-manual/approval-workflow/purchase-order-matching-process#item-no-matching-priority)
|**Related --> ExFlow Setup**	|Opens [***ExFlow Setup***](https://docs.signupsoftware.com/business-central/docs/user-manual/technical/exflow-setup)
|**Related --> Audit Log --> Audit Log**	|Opens Audit Log Overview, if activated. <br/><br/> Read more about this under section [***Audit Log***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/audit-log#audit-log)

<br/> 

### Vendor Setup Card Sections

Open the ExFlow Vendor Setup card to view/edit ExFlow related settings per vendor. 

Click on the section or ''Show more'' to display all settings.  


![ExFlow Vendor Setup](@site/static/img/media/vendor-setup-card-sections-001.png)


### General

The option ''From ExFlow Setup'' is set per default in most settings on the ExFlow Vendor Setup Card, meaning that ExFlow will take the default setup (from [***ExFlow Setup***](https://docs.signupsoftware.com/business-central/docs/user-manual/technical/exflow-setup#exflow-setup)) if no other setup is selected on the Vendor Setup Card for the specific vendor.

|General|  |
|:-|:-|
|**Vendor No**	|Specifies the Vendor No
|**Vendor Name**	|Specifies the Vendor Name
|**Approval Rule**	|Specifies the default approval rule to be applied for a certain vendor
|**Predefined Account**	|ExFlow Predefined Account can be used to suggest only one G/L account for this Vendors Invoices/Credit Memos. This field cannot be used together with ExFlow Purchase Code.<br/> If "ExFlow Predefined Account" and "ExFlow Purchase Code" is empty the "Predefined Account" can be used from ExFlow Setup instead.
|**ExFlow Purchase Code**	|ExFlow Purchase Code is used when only one G/L account is not enough. This field cannot be used together with ExFlow Predefined Account. If "ExFlow Predefined Account" and "ExFlow Purchase Code" is empty the "ExFlow Purchase Code" can be used from ExFlow Setup instead.<br/><br/> Read more about this under section [***Purchase Codes***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/purchase-codes#purchase-codes)
|**Verify Changes Done Automatically**| 	If a document is approved, verify changes will then be run automatically. If there are no changes to the document that status will then be Ready for Posting.
|**Allow Duplicate Invoices**|When receiving invoices with the same invoice number from a vendor. E.g., Insurance and tax authority. This checkbox can be used to exempt control of this supplier's invoice number. It is now possible to post more than one invoice for this vendor with the same Vendor Document No.
|**Propose VAT Line**	|If a specific vendor have VAT lines that should be included in the approval flow, this setting can be set to Yes on a vendor level. Otherwise, general setting from ExFlow Setup is used per default.
|**Factoring Vendor**	|If the Vendor is only used for factoring, there is a checkbox that prevents creating Invoices/Credit Memos on this Vendor and it can only be used as Pay-to Vendor No. via Buy-from Vendor. <br/><br/>  Mark the checkbox Factoring Vendor on the "Pay-to Vendor No" and add this Vendor No. on the "Buy-From-Vendor" Card. <br/> <br/> If a document is interpreted on a Factoring Vendor, the ExFlow Import Journal will give an action message: "This invoice is flagged as Factoring and is thus not allowed to be created!".
|**Payment Validation** 	|Specifies if the payment validation process will be applied during the import and data interpretation process. <br/><br/> Read more about this under section [***Payment Validation Setup***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/payment-validation-and-payment-suggestion)
|**Suggest Recipient Bank Account** 	|Specifies if the Suggestion of Recipient Bank Account is activated. <br/><br/> Read more about this under section [***Suggest Recipient Bank Account***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/payment-validation-and-payment-suggestion#setup-payment-validation--suggest-recipient-bank-account)
|**Move Deferral Forward** 	|When posting date in Deferral Schedule is before allowed posting date for the user, that period will be posted on first allowed posting date in General Ledger Setup or User Setup. ExFlow will only move deferrals forward for closed periods. <br/><br/> Read more about this under section [***Move Deferral Forward***](https://docs.signupsoftware.com/business-central/docs/user-manual/approval-workflow/exflow-import-journals#move-deferral-forward)
|**Confidential Documents**|Specifies if documents should be handled as Confidential Documents.

<br/>

### Doc. Creation Checks

|Doc. Creation Checks|  |
|:-|:-|
|**Automatically Create Documents**| Enable this box if interpreted documents should be automatically created from the ExFlow Import Journal for a specific vendor. If the box is ticked on the vendor card, all interpreted documents with no errors or warning messages will be automatically created and send for approval. <br/><br/>This function can be used without any setup on ExFlow Import Journal. However, it is possible Personalize the ExFlow Import Journals list page and add the column "Automatically Create Documents" there, to have one dedicated journal for automatically create documents. <br/><br/>Read more about this under section [***Batch Import Documents from Interpretation***](https://docs.signupsoftware.com/business-central/docs/user-manual/approval-workflow/exflow-import-journals#batch-import-documents-from-interpretation) and under section [***Background Processing***](https://docs.signupsoftware.com/business-central/docs/user-manual/approval-workflow/exflow-approval-status#background-processing)
|**Check References** 	|When enabled it is required that the document contains an ExFlow Reference.
|**Match Vendor's Currency Code**	|Specifies if the currency code on the imported document must match the currency code on the vendor card. <br/><br/> Read more about this under section [***Match Vendor's Currency Code***](https://docs.signupsoftware.com/business-central/docs/user-manual/approval-workflow/exflow-import-journals#match-vendors-currency)
|**Block in Import Journal**| 	Specifies if documents should be blocked from creation
|**Exclude when Vendor Doc. No. starts with**| Specifies the exclusion of imported document from creation blockage, if the Vendor Doc. No. starts with… This setting will be shown when activating ‘’Block in Import Journal’’.
|**Check Dimensions**	|Specifies if the standard dimension settings in Business Central should be checked when the invoice is created
|**Auto. Assign of VAT Diff. for Creation** 	|Specifies if automatic assignment of VAT Difference should be done if the difference of VAT on lines and header is within Max. Allowed VAT Difference
|**Test Amounts** 	|Specifies if the Gross/Net/Vat amounts on the document should checked for variances (difference between sum of document lines and the corresponding amount in the document header) before the invoice is created.

<br/>

### Doc. Posting Checks

|Doc. Posting Checks|  |
|:-|:-|
|**Automatically Post Documents**| Enable "Automatically Post Documents" to automatically post documents for a specific Vendor in Approval Status when the document is Ready for Posting. ExFlow will only try to post once. If any error messages exist during posting, then the document will stay unposted in Approval Status together with an error message. Correct the error and post manually.
|**Block before Posting**| Specifies if documents should be blocked from posting.

<br/>

### Order Matching

|Order Matching|  |
|:-|:-|
|**Match Documents To**|  Specifies if ExFlow should match and retrieve lines from Purchase Orders or from Posted Receipts, or from both Orders and Receipts. <br/><br/> Read more about this under section [***Match Invoice with Receipt-, Order- or both Receipt and Order lines***](https://docs.signupsoftware.com/business-central/docs/user-manual/approval-workflow/purchase-order-matching-process#match-invoice-with-receipt--order--or-both-receipt-and-order-lines)
|**Automatically Receive Orders**|  	Specifies if Purchase Order Lines of each line type should be automatically received when the matched invoice is set to "Ready for posting". This option is only applicable if "Match Documents To" setting is configured as "Order" or "Order and Receipt". 
|**Specific Line Diff Unit Cost Setting**| The fields ''In LCY’’ and ‘’Percent %’’ will be visible when enabling this setting.
|**Specific Max Misc. Setting**| Enable to activate the Max. Misc. function.
|**Max Misc. Charges (LCY)**| Enter the max misc charges in LCY.
|**Diff.Line Purch. Code**| Select the ExFlow Purchase Code to be selected for the diff. line.
|**Specific Diff Setting**|Enable to activate the Specific Diff Setting.
|**Receipt No. Mandatory**|Activate if Receipt No. is Mandatory
|**Do Not Match Orders**|Activate if order matching should not occur for this vendor.
|**Approval Only for Variations**| Select if approval  should only be applied for variations with option: ExFlow setup,Yes or No.
|**Automatic Item Charge Assignment**|	Specifies what type of item charge assignment that should be used when posting invoices. It can be done equally, by amount, by weight or by volume automatically. None = no automatic assignment is done. <br/><br/> Read more about this under section [***Item Charge Assignment***](https://docs.signupsoftware.com/business-central/docs/user-manual/approval-workflow/exflow-import-journals#item-charge-assignment)
|**Save Matched Lines to OCR Mapping**|This option can be used to automatically save manually matched invoice lines from "Matching View" based on vendor, interpreted Item No. These lines will be saved in the ExFlow OCR Import Mapping table and can be re-used to suggest matching for future PO-invoices with same criteria
|**Multiple Line Matching**|  	This setting enables ExFlow to match one invoice line to multiple order lines or receipt lines. If the quantity of the invoice line is greater than the quantity of the order line, ExFlow will split the invoice line and proceed to partially match with other available order lines or receipt lines.
|**Check Split Invoice Lines**|  	If “Multiple Line Matching” is true, ExFlow will give action messages for each line that has been split which gives the user an option to manually confirm the suggested matching before creating the document. Turning this setting to false means that no action message will be displayed for matched split lines.
|**Copy Header Values to Invoice/Credit Memo**|  	Activate fields to transfer from Purchase Order to Invoice (Or Return Purchase Order to Credit Memo) in Import Journal when using order matching on header level. Selected values can be found and updated under Related --> Advanced --> PO Header values on Invoice Setup. <br/><br/> Read more about this under section [***Copy Purchase Order Header Values***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/copy-po-header#copy-purchase-order-header-values)
|**Auto-Approve Documents**|  	Specifies if the invoice should be auto approved if the related order is approved. <br/><br/> Read more about this under section [***Auto Approve Invoices***](https://docs.signupsoftware.com/business-central/docs/user-manual/approval-workflow/purchase-order-matching-process#auto-approve-purchase-order-matching-invoices)
|**Max. Amount for Auto-Approval (LCY)**| Specifies the max invoice amount allowed for automatic approvals. 0 = disabled
|**User for Auto-Approval**|  	Specifies the ExFlow user that should be used for auto approved invoices. If this setting is empty, then the id of the logged in BC user is used
|**Check Direct Unit Cost**| Specify if ExFlow should check the Unit Cost on the invoice line when matching invoices against purchase orders. The imported invoice needs to be line interpreted for this to work.

<br/>

### OCR Import

|OCR Import|  |
|:-|:-|
|**Set Due Date to (OCR)**| 	Specifies how the default due date should be set when importing an invoice
|**Ignore Imported Currency Code**| 	Specifies that ExFlow should always clear the imported currency code i.e. no currency is used when importing invoices
|**Ignore OCR Lines**| 	Specifies that ExFlow should always ignore imported invoice lines i.e. only invoice header information is ever used
|**Specific Misc Code Setting**| Enable to utilize misc. purchase code(s).
|**Misc. Purchase Codes**| 	Specifies the default purchase code when using the Misc code mapping. Click on the three dots to open the Purchase Code Setup List.
|**Automatic Quantity Assignment**| 	Specifies if quantity should be converted to 1 if imported quantity is 0.
|**Ignore Master Data Synchronization**| It is possible to disregard Master Data Synchronization on a vendor level. Simply enable the checkbox ''Ignore Master Data Synchronization'' on the chosen Vendor in its Vendor Setup Card to ensure that its master data will not be sent to ExFlow Data Capture.
|**Item No. Matching Priority**	|Determine the order in which the system attempts to match imported invoices against items and order lines. Current options are: ''From ExFlow Setup'', ''No Matching'' and ''From Vendor Setup''. <br/><br/> Read more about this under section [***Item No. Matching Priority***](https://docs.signupsoftware.com/business-central/docs/user-manual/approval-workflow/purchase-order-matching-process#item-no-matching-priority)

<br/>

### Approval

|Approval|  |
|:-|:-|
|**Approve VAT Lines**| 	Specifies if the VAT lines should be included in the approval flow. If using an ExFlow Purchase Code on the header, this setting will be ignored. <br/><br/> Read more about this under section [***Approve VAT Lines.***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/approve-vat-lines)

<br/>

### Auto Coding Suggestion

|Auto Coding Suggestion|  |
|:-|:-|
|**Suggest Auto Coding for Imported Document**|Specifies how the auto coding suggestion will be used for the vendor.
|**Calculate Auto Suggestions From Date**| 	Specifies the starting date of the document to be used in the auto coding suggestions for this vendor.
|**Suggest Auto Coding Amount from Coding Set ID**|	Specifies if the amount will be suggested automatically to the document line based on the usage percentage in the Coding Set ID, for this vendor. <br/><br/> Read more about this under section [***Auto Coding Suggestion Setup***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/auto-coding-suggestion-setup#auto-coding-suggestion-setup)

