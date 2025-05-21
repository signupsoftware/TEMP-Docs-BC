---
title: New Order Matching Experience
sidebar_position: 20
hide_title: true
custom_edit_url: null
---
## New Order Matching Experience

To use the new Order Matching Experience with the Order Matching Engine and all of its enhancements, the new Purchase Order Matching feature must be enabled in ExFlow Feature Management.

### ExFlow Feature Management

Go to: **ExFlow Feature Management** to enable the New Order Matching Feature.

![ExFlow Import Journal - Order No.](/img/media/FM-001.png)
 
Read more about this under section [**Get started**](https://docs.signupsoftware.com/business-central/docs/user-manual/welcome-to-exflow/get-started)



## Run the New Order Matching Wizard

This user manual is your go-to guide for setting up your order matching document process to effortlessly match documents to orders. Designed with simplicity in mind, the new Order Matching Wizard makes the process straightforward and user-friendly.

Search for ExFlow Order Matching Wizard.

![Order Matching Wizard - Search](/img/media/new-om-wizard-001.png)

### General

### Header- or Line Matching
The first step in setting up the Order Matching Wizard is to determine whether the matching of documents to purchase orders/return orders should be performed at a header level or line level.

![OM](/img/media/new-om-wizard-002.png)

**Header Level Matching:**
If you choose header level matching, the Order Matching will compare the overall invoice total with the available total value of the purchase order.

This method is suitable when the details of individual items or services on the invoice do not need to be matched with specific items on the purchase order, or if the invoice line information is too poor for accurate matching.


**Line Level Matching:**
If you choose line level matching, the Order Matching will compare each interpreted invoice line with corresponding line items on the purchase order.

This approach ensures that each individual item or service on the invoice is matched accurately to the corresponding item on the purchase order.

Line matching utilizes interpreted information such as invoice quantity, unit price, line total, and more – to get an accurate match to the corresponding purchase order line and to be able to identify any discrepancies.

### Match Documents To
The next step is to determine how invoices should be matched to purchase orders in relation to purchase receipts.
There are three options to consider:

#### **Receipt:**
Select this option if you want invoices to be matched only to purchase orders that have associated purchase receipts.

Ensuring that the items are received and recorded in the warehouse and align with the invoice, before matching the invoice and sending it for approval and final posting. 

#### **Order and Receipt:**
If you prefer a combination of Receipt and Order, select this option.

In this case, invoices can be matched to purchase orders with or without associated purchase receipts, providing maximum flexibility in matching scenarios.

Possible to match invoice lines to purchase orders with and without received item lines. Also makes it possible to match invoice lines to partially received item lines on the order and have them sent for approval and posting.

### Automatically Approve Matched Invoices

#### **Never:**
Select this option if you want all matched invoices to go through a manual approval process. In this case, no invoices will be automatically approved, regardless of any differences or thresholds.

(If Never is selected --> Next step in the wizard would be: Other and Automatic Difference)

#### **If Difference is within Tolerance:**
Choose this option if you want matched invoices to be automatically approved only when the difference between the invoice and the purchase order falls within the specified allowed threshold or tolerance for automatic approval.

This option allows for efficient processing of invoices with minor discrepancies, ensuring that only significant differences require manual approval.

(If this option is selected --> Next step in the wizard would be: Auto Approval and Tolerance for Auto-Approval)

#### **If Matched Order is Approved:**
This option adds an additional layer of approval by requiring that the matched order has been reviewed and approved through ExFlow, ensuring that invoices are automatically approved only when the necessary authorization is in place.

(If this option is selected --> Next step in the wizard would be: Auto Approval and Tolerance for Auto-Approval)

### Max Amount for Automatic Approval
If you have allowed for automatic approval of matched invoices, this is where you can specify the maximum amount for automatic approval. This parameter defines the threshold above which invoices will require manual approval, regardless of the matching results.

### Tolerance Violation Warning
Enable this setting if you’d like the accountants to receive a warning during the import of purchase matched invoices when there are discrepancies over your allowed tolerance for automatic approval. 
Either way if this setting is enabled or not, discrepancies higher than your allowed tolerance will always require the invoice line to be manually approved.

### Deviation Direct Unit Cost (%) and Deviation Direct Unit Cost (Amount LCY)
Define the deviation thresholds for the direct unit cost of invoice lines compared to the matched order lines. These thresholds determine the allowable differences between the invoice and the purchase order for automatic approval.

### Post Receipts & Shipment Automatically
The "Post Receipts & Shipment Automatically" feature allows for the automatic posting of purchase receipts in the matching process. However, please note that this feature can only be utilized when matching documents to *“Order and Receipt”*.

Matching documents using the logic *“Order and Receipt”*, allows ExFlow to fully match and send an invoice/credit for approval and posting. However, Business Central always requires that Purchase Receipts/Shipments are posted before the matched invoice/credit can be posted and for the Purchase Order/Return order to be invoiced/credited.

This setting allows ExFlow to Post and Invoice the approved quantity of the matched document lines automatically. It’s executed once the document has the status “Ready for Posting” in Approval Status. With this setting disabled, you’re required to post the purchase receipts/shipments manually.

![Order Matching Wizard - Search](/img/media/new-om-wizard-003.png)

### Automatic Difference Handling
The Automatic Difference Handling functionality allows ExFlow to automatically suggest a difference line if any additional or unexpected costs, such as freight or other charges are identified during the order matching. 
You can choose if ExFlow should suggest an invoice line of the line type Item Charge, or G/L Account.
Then specify which G/L Account, or what Item Charge to use for the suggested line.

### Max. Amount (LCY) and Max. Amount (%) 
Is where you can specify an allowed tolerance for the automatically suggested difference line for automatic approval.


### Complete the Wizard
Click "Finish" to close the Wizard and apply the settings.

![Order Matching Wizard – Complete the Wizard](/img/media/new-om-wizard-004.png)



## Order Matching Setup

Go to: **ExFlow Order Matching Setup**

For the *New Order Matching Experience*, all order matching settings have been lifted from ExFlow Setup and are now available in an own gathered page.

However, a link to this new ''Order Matching Setup'' will be provided in ExFlow Setup--> Order Matching Section.


| Order Matching Setup - Related |   | 
|:-|:-|
|Copy Header Values to Invoice/Credit Memo Setup| Read more about this [***here***](https://docs.signupsoftware.com/business-central/docs/user-manual/approval-workflow/new-order-matching#copy-header-values-to-invoicecredit-memo-setup)
|Auto Receiving Line Types| Read more about this [***here***](https://docs.signupsoftware.com//business-central/docs/user-manual/approval-workflow/new-order-matching#auto-receiving-line-types)
|Item No. Matching Priority| Read more about this [***here***](https://docs.signupsoftware.com/business-central/docs/user-manual/approval-workflow/new-order-matching#item-no-matching-priority)
|Order Matching Priority| Set an Order Matching Priority for your company. This is a setting for the new Order Matching feature only. Read more about this [***here***](https://docs.signupsoftware.com/business-central/docs/user-manual/approval-workflow/new-order-matching#order-matching-priority)

Above features can also be used on a vendor level in "ExFlow Vendor Setup".


### Order Matching Setup Sections

![OM Setup](/img/media/order-matching-setup-001.png)

### General
| General|   | 
|:-|:-|
|Enabled| Specifies if Order Matching is enabled for the company. This setting is used to enable or disable the Order Matching functionality for the company, after the feature has been enabled.
|Match Documents To| 	Specifies if ExFlow should match and retrieve lines from Posted Receipts/Shipments, or from both Orders and Receipts/Shipments.
|Post Receipt & Shipments Automatically|Specifies if Purchase Order Lines of each line type should be automatically received when the matched invoice is set to "Ready for posting". This option is only applicable if "Match Documents To" setting is configured as "Order and Receipt". <br/><br/>When running Verify Changes in Approval Status, the purchase order matched lines receipt will be posted on Invoice Document Date. <br/> VAT Date on purchase order header and Deferral Posting Dates on purchase order lines will automatically be updated if purchase order Posting date is different than Invoice Posting Date. <br/> If both purchase order and Invoice have the same posting date when running Verify Changes, there will be no updates on the purchase order. <br/>Purchase order´s Posting Date will also be updated if blank. (Purchase and Payable Setup - Default Posting Date = No Date)
|Retrieve Lines Automatically|Automatically retrieve all available lines from the Purchase Order or Posted Purchase Receipt when matching on header level.
|Copy Header values to Invoice/Credit Memo|Activate fields to transfer from Purchase Order to Invoice (Or Return Purchase Order to Credit Memo) in Import Journal when using order matching on header level. Selected values can be found and updated under Related --> Advanced --> PO Header values on Invoice Setup.

### Auto-Approval
| Auto-Approval|   | 
|:-|:-|
|Auto-Approve Documents|   Specifies if the invoice should be auto approved if the related order is approved
|User for Auto-Approval|Specifies the ExFlow user that should be used for auto approved invoices. If this setting is empty, then the id of the logged in BC user is used
|Max. Amount for Auto-Approval (LCY) |Specifies the max invoice amount allowed for automatic approvals. 0 = disabled
|Max. Misc. Charges (LCY) |   Tolerance for field "Auto Approve Invoices". The total amount of invoice lines not matched against PO lines. (For example, freight). When an invoice is generated, lines will not be automatically approved if you did exceed the maximum misc. amount.
|Maximum Deviation|
|Direct Unit Cost (LCY) |Specifies the max allowed price difference between the invoice unit cost and the purchase order unit cost (in LCY). 
|Direct Unit Cost %|Specifies the max allowed price difference between the invoice unit cost and the purchase order unit cost (in %)
|Send Unreceived Order Reminder For Approved Order|An Unreceived Order Reminder is sent when the document is approved and not all the Order Lines are fully received. For this to work "Match Documents To" should be set to "Receipt". <br/><br/> Read more about this under section [***Unreceived Order - Approved***](https://docs.signupsoftware.com/business-central/docs/user-manual/approval-workflow/email-reminders#unreceived-order---approved)

### Line Matching Logic
| Line Matching Logic|   | 
|:-|:-|
|Matching Tolerance|
|Unit Cost %|Specifies the matching tolerance (in %) when matching an invoice against a purchase order using the line unit cost. 0 = disabled i.e. exact match is needed
|Quantity %|Specifies the matching tolerance (in %) when matching an invoice against a purchase order using the line quantity. 0 = disabled i.e. exact match is needed
|Check Split Invoice Lines|If “Multiple Line Matching” is true, ExFlow will give action messages for each line that has been split which gives the user an option to manually confirm the suggested matching before creating the document. Turning this setting to false means that no action message will be displayed for matched split lines.
|Check Direct Unit Cost|Specifies that ExFlow should check the Unit Cost on the invoice line when matching invoices against purchase orders. The imported invoice needs to be line interpreted for this to work
|Check Line Discount %|Specifies that ExFlow should check the Line Discount % on the invoice line when matching invoices against purchase orders. The imported invoice needs to be line interpreted for this to work

### Discrepancy Handling & Adjustments
| Discrepancy Handling & Adjustments |   | 
|:-|:-|
|*Automatic Difference Line*|
|Enable| Specifies that ExFlow should create a new line containing the diff. amount, when there is a price difference between the purchase order total and the invoice total
|ExFlow Purchase Code|Specifies which purchase code ExFlow should use when creating the diff. line
|Max. Amount (LCY) |Specifies the max amount when creating the diff. line. If the diff. amount exceeds this setting, then no diff. line is created. 0 = disabled
|Max. Amount (%)|Specifies the max diff % when creating the diff. line. If the diff. % exceeds this setting, then no diff. line is created. 0 = disabled
|Automatic Item Charge Assignment|Specifies what type of item charge assignment that should be used when posting invoices. It can be done equally, by amount, by weight or by volume automatically. None = no automatic assignment is done. <br/><br/> Read more about this under section [***Item Charge Assignment***](https://docs.signupsoftware.com/business-central/docs/user-manual/approval-workflow/exflow-import-journals#item-charge-assignment)


### Additional Controls & Settings
|Additional Controls & Settings |   | 
|:-|:-|
|Matching Delay Doc. Date (Days) |Specifies that ExFlow should delay the matching against purchase orders until xx days after the invoice import date
|Matching Delay Due Date (Days) |Specifies that ExFlow should delay the matching against purchase orders until xx days before the invoice due date. <br/><br/> Read more about this under section [***PO Matching Delay Doc. Date and Due Date***](https://docs.signupsoftware.com/business-central/docs/user-manual/approval-workflow/purchase-order-matching-process#po-matching-delay-doc-date-and-due-date)
|Save Matched Lines to OCR Mapping|This option can be used to automatically save manually matched invoice lines from "Matching View" based on vendor, interpreted Item No. These lines will be saved in the ExFlow OCR Import Mapping table and can be re-used to suggest matching for future PO-invoices with same criteria
|Use Vendor No. from Matched Purchase Order|Specifies that the vendor number on the matched purchase order should be used instead of the imported invoice vendor information
|Disable Currency Filter in Get Receipt Lines|This can be set to improve performance when using Get Receipt Lines in Import Journal. No filter will then be set on Currency Code when opening the selection page (A check that correct Currency is selected is instead done on the insert of the Invoice line)
|Enable Warning Messages|When disabled, no warning messages will be presented in the Import Journal regarding order matching.


### Order Matching Setup - Related

### Copy Header Values to Invoice/Credit Memo Setup
Go to: **ExFlow Order Matching Setup --> Related --> Copy Header Values to Invoice/Credit Memo Setup**

For customers that interpret and order match on header level, some values on the order can now be copied from the order header to the document header.<br/>

Start by activating "Copy Header Values to Invoice/Credit Memo" and then choose fields to be copied.<br/>

![Copy Purchase Order Header – Setup](@site/static/img/media/po-header-value-on-invoice-setup-001.png)

For US and CA localization Tax Liable and Tax Area can also be copied from the Purchase Order /Return Order to Purchase Invoice/ Credit.

![Copy Purchase Order Header – Setup CA - US](@site/static/img/media/po-header-value-on-invoice-setup-002-ca-us.png)

This function can be used on a vendor level via ExFlow Vendor Setup.<br/>

Go to: ***ExFlow Vendor Setup --> ExFlow Vendor Setup Card*** --> Press “Show more” on Order Matching fast tab.

The fields to be copied will always use settings from ExFlow Setup.


### Auto Receiving Line Types

Go to: **ExFlow Order Matching Setup --> Related --> Auto Receiving Line Types**

By enabling “Auto Receiving Line Types” ExFlow will receive all lines that are matched to a Purchase Order or a Return Order. What ExFlow receives is based on allowed line types from "Auto Receiving Line Types Setup" (Setup automatically opens after setting “Auto Receiving Line Types” set as TRUE).


![ExFlow Receiving Line Types](/img/media/auto-receiving-line-types-001.png)

Click on ''Item'' to make additional settings if you would like to have Auto Receive on Service Items or Non- Inventory Items as well. 



### Item No. Matching Priority
Go to: **ExFlow Order Matching Setup --> Related --> Item No. Matching Priority** 

This feature helps to determine the order in which the system attempts to match imported invoices against items and order lines. 

This can be useful when, for instance, same item no exist in the standard item list as on the vendor item no. Or if importing invoice lines where most are vendor item references, consider giving higher priority to "Item Reference". Disable matching types that give false positive matches or are not used by unchecking them.


![Item No. Matching Priority](/img/media/exflow-setup-item-no-matching-prio-001.png)

| Item No. Matching Priority |  |
|:-|:-|
| **OCR Mapping**         |Match Item No. after what is specified in *OCR Import Mapping*
| **Default G/L Account/Dummy Item**  |Match Item No. after the *Predefined Account* (ExFlow Setup --> General) or *Dummy Item for OCR Line Mapping* (ExFlow Setup --> OCR Import). This will only be done if the imported Item No. is blank. <br/><br/> If there is no imported number and order no. (imported) is blank then it will automatically take dummy G/L Account. If there is Order No. (imported) then it will take dummy item.
| **Item**         |Match Item No. after the actual *Item No.* in Business Central
| **Item with Vendor No.**   |Match Item No. after what is added under Replenishment--> Purchase. If a *Vendor No.* is specified on the Item card, together with a specific *Vendor Item No.*, then this will be prioritized.
| **Item Vendor**         | Match Item No. after the *Vendor Item No.* set on the Item Card in Business Central
| **Item Reference**         |Match Item No. after the *Vendor Reference* set on the Item Card in Business Central
| **Purchase Order**         |Match Item No. after the purchase order lines where Purchase Line Vendor Item No. is equal to imported No.
| **First Run Original No.**  |ExFlow removes junk characters on interpreted Item No. (all characters which are not A...Z and 0..9) and tries again.
| **G/L Account**         |First check is to see if the interpreted order no. has a value. If it is blank, then ExFlow look for G/L Account with imported no. If that is found ExFlow will take that G/L account, otherwise ExFlow take Predefined G/L Account (if account exist under ExFlow Setup --> General). If the imported Order No. is not blank, ExFlow will provide the Dummy Item No. (if any exist in ExFlow setup --> OCR Import) <br/><br/>The difference in this option (vs above option ''Default G/L Account/Dummy Item'') is that ExFlow check if G/L Account exists before providing the Predefined G/L Account.

Set up an Item No. Matching Priority to choose in what order to match. These settings allows ExFlow to perform more advanced matching of items and order lines based on priority and matching type.

Use the "Move Up" and "Move Down" buttons to move matching types up or down the list.
The higher a matching type is placed, the higher priority it has in the matching process.


### Order Matching Priority 

Go to: **ExFlow Order Matching Setup --> Related --> Order Matching Priority**

Specify the order matching priorities to get a better hit on the valid data in Business, depending on the company order matching processes. 

Set an order on the relevant order matching methods. Uncheck the use checkbox on irrelevant matching method.

Order Matching Priority is applied when the incoming document has a related order number and ExFlow has found and matched a related purchase order. 

The matching priorities decide in what order the matching methods are applied to purchase lines.

![Item No. Matching Priority](/img/media/order-matching-prio-001.png)


|Order Matching Priority menu | |
|:-|:-|
| Move Up|Use Move Up option to set the priority of matching methods. If the highest priority fails to get a match, the next method will try to match on it’s conditions.
| Move Down|Use Move Down option to set the priority of matching methods. If the highest priority fails to get a match, the next method will try to match on it’s conditions.
|  Multiple Field Setup |Enable "Show Advanced Setup" to access Multiple Field matching methods. Read more under ''Multiple Field Matching''.


| Matching Methods||
|:-|:-|
| Item |Basic Item No matching.
| Item With Quantity and Unit Cost |Matches on Item No in combination with quantity and unit cost.
|  Quantity and Unit Cost |No item no matching, only matches to Quantity & Unit Cost.
|  Quantity: | Matches based only on quantity.
|  Line Amount: |Matches based on total Line Amount.

| Fields||
|:-|:-| 
|Use| Specify is the matching method should be used or not. 
|  Skip Tolerances| Specifies if the method should skip tolerances for unit cost and quantities.
|  Index Key |Optional to select an appropriate Index-key to increase matching performance. Example: When adding Index Key 8, faster queries on Item No. & Variants lookups. 



##### Multiple Field Matching 
Go to: **ExFlow Setup --> Related --> Order Matching Priority Setup --> Show Advanced Setup**

With Multiple Field matching, ExFlow can configure additional matching methods than listed in ExFlow Order Matching Setup. These settings are available on a Vendor specific level, too.

![Matching Priority](/img/media/multiple-field-002.png)

Multiple Field Matching feature can match on one or more specified fields from an incoming purchase invoice/credit line against the order/credit documents in Business Central. 

This matching method also lets the user match incoming documents against 3rd party ISV or customized fields on the Purchase Line (39) table.

Multiple field matching should not be used in conjunction with other matching methods. If you create multiple records for multi-field matching, consider configuring these methods at the vendor level rather than at a general level.

##### Examples of Multiple Field Matching field setup

1. Multiple field matching should not be used in combination with other matching methods and if you create multiple records of multi field matching, consider setting up the methods on a vendor level rather than a general level.
2. Activate “Multiple Field Matching” by enabling the toggle “Show Advanced Setup” 
3. Select the matching method “Multiple Field” and click “Multiple Field Setup”
4. Create a new code, give it a description and select “Multiple Field Setup” again.
5. Select which ExFlow field that you want to match with “Purchase Order Field”


Matching Import Invoice Line Description (ExFlow Field No: 12013662) to match the Purchase/Return Order line Description (BC Purchase Line Field No: 11, Related Table 39):

![Matching Priority](/img/media/matching-ex-001.png)

Matching Import Invoice Item No. Field (ExFlow field No: 6) and Variant Code field (ExFlow Field No: 12068803) to Purchase Line Item No: (6) and Variant Code: (5402):


![Matching Priority](/img/media/matching-ex-002.png)

Here, the (5401 Item Variant) is added as a related table as the Purchase Line Variant Field is fetched from this table. 

The Item Variant table (5401) is intrinsically linked to the Purchase Line table (39). To ensure comprehensive data integration and streamlined operations, it is essential to establish the Item Variant table as a related table. This relationship facilitates accurate tracking and management of item variants within purchase orders, enhancing overall efficiency and data consistency.




## Order Matching Workflow

We are pleased to announce the launch of a completely new Order Matching Engine, delivering a significant enhancement to accounts payable operations through improved accuracy, configurability, and process efficiency.

This update introduces a redesigned Order Matching Setup, an intuitive configuration Wizard, and an enhanced Manual Order Matching interface, all developed to provide a more streamlined and user-friendly experience.

Among the key improvements is the implementation of priority-based Order Matching Settings, allowing organizations to define and manage matching logic based on their specific business priorities. The engine also introduces support for Multi Field Matching, enabling customers to create highly customized matching configurations tailored to their operational needs.

In addition, the new engine supports Base Unit of Measure Conversion, addressing common challenges that arise from unit discrepancies between purchase orders and invoices, and ensuring more accurate and consistent reconciliation.

Together, these enhancements represent a major advancement in the automation and flexibility of the order matching process, empowering finance teams to manage both routine and complex scenarios with greater confidence and control.


### Import Journal
When AP has imported all documents to Import Journal, there often are a couple of order matched related errors. 

With the new Order Matching feature, AP can get a lot of help to ease their workload from responsible Purchasers to manage and correct their orders or giving other input on how to proceed with the document. 

Read more about this under [**Purchaser View**](https://docs.signupsoftware.com/business-central/docs/user-manual/approval-workflow/purchaser-view).


#### Filter Options 
With the new Order Matching Feature, the Import Journal User interface has changed in form of new filter options. 

On the Import Journal header, AP can filter on: 
* Documents With Exception Codes added by the Purchaser via ''Filter Documents With Order Exception'' Read more about this under [**Purchaser View**](https://docs.signupsoftware.com/business-central/docs/user-manual/approval-workflow/purchaser-view)
* Order matched Error Types via ''Error Filter''
* Document status via ''Document Filter''

![OM](/img/media/import-journal-filter-options-001.png)  

##### Filter Documents With Order Exception 

AP can enable ‘’Filter Documents with Order Exception’’ to filter the journal on Purchasers added Exception codes, to follow up purchasers added work, and to continue with handling the document. 

Read more about this under [**Correcting the document as AP in Import Journal**](https://docs.signupsoftware.com/business-central/docs/user-manual/approval-workflow/purchaser-view#correcting-the-document-as-ap-in-import-journal)


##### Error/Document Filter
AP can also utilize the Error/Document Filter to get a better overview of imported documents with error messages and filter on a Document Filter to get a better sorting of document statuses.

Filter on Error Type only, or combined with Document Filter. 

Document Filter Option ''All Documents Ready to Create'' cannot be filter together with an Error Type, since the document is completed and ready to be sent for approval.

![OM](/img/media/import-journal-filter-options-002.png) 

|Error Type Filter|   |
|:-|:-|
|Line not matched to order|Specifies the error /Action Message
|Order No is missing|Specifies the error /Action Message
|Line cannot be matched because of due date setting|Specifies the error /Action Message
|Line cannot be matched to receipt/return shipment|Specifies the error /Action Message
|Difference line is over maximum tolerance|Specifies the error /Action Message
|Unit cost difference between document and order|Specifies the error /Action Message
|Line discount % difference between document and order|Specifies the error /Action Message
|Check split line|Specifies the error /Action Message
|Line Type Mismatch|Specifies the error /Action Message
|Line No mismatch|Specifies the error /Action Message
|Quantity on line is greater than received/shipped|Specifies the error /Action Message
|Posted document exist for th line|Specifies the error /Action Message
|Same line is matched on another document|Specifies the error /Action Message
|Quantity cannot be higher than matched|Specifies the error /Action Message
|Multiple matching with same No and Quantity is not allowed|Specifies the error /Action Message
|Imported Unit of Measure does not exist|Specifies the error /Action Message
|Available quantity is not sufficient on the order line|Specifies the error /Action Message
|Order is not released|Specifies the error /Action Message
|Currency Code Mismatch|Specifies the error /Action Message
|Line Not matched due to missing No.|Specifies the error /Action Message


| Document Filter|   | 
|:-|:-|
|All Documents|	Shows all documents.
|All Documents Ready To Create	|Show all documents without error which are ready to be created.
|All Documents With Error	|Shows all documents which have error. In case of order related documents all error will be included.
|All Order Related Documents With Error Without Exception	|Shows all order related documents which have error, without exception. No handled errors are included.
|All Order Related Documents With Error With Exception	|Shows all order related documents which have error, with exception. No handled errors are included.
|All Order Related Documents With Handled Error|	Shows all order related documents which have handled errors.

### Import Journal - Import Lines

### Multiple Error List
When imported Order Matched document lines with errors are imported to the Import Journal, AP can view all issues in an gathered error list, called Multiple Error List, instead of handling one error, one by one and verifying the document to get the next error.

![OM](/img/media/mm-002.png) 

AP can click to inspect the errors. This line has only one error to be handled:

![OM](/img/media/multiple-error-list-001.png) 


### Manual Order Matching 
Go to: **ExFlow Import Journal -–> Actions -–> Order -–> Manual Order Matching (Alt+M)**

The Manual Order Matching page offers a simple process to match order lines to imported invoice/credit lines on a document level. 

The page presents the document lines of the left hand side and order lines on the right. With easy-to-read columns that displays the quantity matched and the remaining quantity to match.

Matched Order Lines will be bolded for clarity, so the AP can easily see which import line that is connected to which order line and can make the correct adjustments.

![OM](/img/media/mm-001.png) 

| Manual Order Matching |   | 
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


|Related Order Features| |
|:-|:-| 
| Lookup Possible Use by Words: |Display the number of occurrences words has been used in documents and transactions.
| Lookup Common Usage by Description: | Display the number of occurrences Description has been used in documents and transactions.
| Lookup Common usage by Item No: | Display the number of occurrences Item No. has been used in documents and transactions.


#### Exception Code 
Exception Code is used by Purchasers to give AP team guidance for handling order matched lines with error, enabling them to proceed with their work efficiently and accelerating the approval-to-posting process.


|Exceptions |   | 
|:-|:-|
|Action Message| The error message for the document line
|Exception Code| Error Code that purchaser can add, to signal to AP team on how to proceed to resolve/handle the line with error. This is the''Multi Error List'', edit the list to make changes. 
|Exception Description| Description of the Exception Code
|Exception Created By| Show the User that added the Exception Code
|Handled Time/Date| Show the User that resolved the error  


##### Transfer Exception Codes between environments

Exception Codes is available for data transfer in functions [Copy Setup](https://docs.signupsoftware.com/business-central/docs/user-manual/welcome-to-exflow/get-started#copy-setup-from-another-company) and [Import/Export](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/export-import-setup)


### FactBoxes
#### PDF Preview
View the document image.

#### Discussion Panel
Use Discussion Panel to communicate, as usual, with colleagues and web approvers.

#### Incoming Document Files
Download Incoming Document or attach other files. 


### Base Unit of Measure Conversion

ExFlow supports matching towards different Units of Measure, given that correct relations are set on the Item card --> Item unit of Measure and base UOM is set.

Users can interpret documents with one UoM and match it against another Order line UoM. ExFlow uses and post documents with order UOM in the end.

To facilitate precise inventory and order management when performing “Manual Order Matching” by enabling the 'Use Base Quantity' toggle. This functionality allows all quantities to be displayed in their base unit of measure, ensuring consistency and clarity across document and order lines.

Go to: **Import Journal --> Actions --> Order --> Manual Order Matching (Alt +M) --> Use Base Quantity**

By activating the toggle ''Use Base Quantity'', Accounts Payable (AP) can view all item lines in their base quantity, regardless of the unit of measure (UoM) used during import. For example, if a document is imported with a different UoM, such as 2 Boxes (KARTONG) at 500 SEK each, it can still be accurately matched to an order line specified as 20 PCS at 50 SEK.

In this example, we imported an invoice with 2 KARTONG (1 KARTONG=10 PCS) matched to an order with 20 PCS.

![OM](/img/media/manual-om-001.png) 




