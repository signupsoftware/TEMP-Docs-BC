---
title: Release Notes
sidebar_position: 5
hide_title: true
custom_edit_url: null
---
## Release Notes

### ExFlow 25.0.0.0 – Release Notes <br/> 

#### Type of Release:
Major Release

#### Release Date:
2025-04-17


#### Release Information:
Requires BC 25.0 or later <br/>


#### Corrections

| Version | Area | Description | 
| :----------- | :-------------- | :-------------- | 
| 25.0.246.7	| General		| SYSTEM user (system job) is changed to current user 
| 25.0.246.7	| License Provider v3	| Improvements have been added 
| 25.0.246.7	| License Provider v3	| Name change of SignUp to ExFlow 
| 25.0.246.7	| License Provider 	| Link to page has been added to ExFlow AP Setup overview 
| 25.0.246.7	| 4PS		| Import Journal - Diff Line creation has been resolved 
|25.0.246.14|4PS		|WIP Accounts were not visible in drop down list in ExFlow Web
|25.0.246.14|General		|Auto Receipt Events added 
|25.0.246.14|Upgrade Script		| Fixed language validation issue in the upgrade script 
|25.0.246.14|Feature Management | Data Update Status added and issue with Import Journal filter options was resolved 
|25.0.246.14|Setup |  Broken ''Read More'' links were fixed in both order matching wizards
|25.0.246.19| Vendor Setup |Resolved issue where Match Documents to: Order does not convert to Order and Receipt on current Vendor Setup Cards
|25.0.246.19| Setup |Posting PO with Item Charge Assignment - "No Item Ledger Entry Found" 
|25.0.246.19| Setup |Fixed issue for when Purchase Return Order Shipment are picked up but are missing quantities

#### New Features

| ID| Area | Description |
| :----------- | :-------------- | :-------------- | 
|24166, 46179 |New Order Matching |Completely new and enriched order matching functionality together with a dedicated workplace for Purchasers. 
|43932, 45416 |License Provider and Feature Mgt |A new License Provider to support future licensing models together with Feature Management to have more granular control over which features are enabled in different scenarios. 
|39209 |New Order Matching |A new, wizard driven, experience to setup ExFlow AP replacing many manual tasks in previous editions. 
|44723 |Setup |Improved functionality and tracking around the ExFlow Email logs. 
|34279 |Finnish localization |FI localization improvement: Finnish Reference No to Self Invoice. 
|43229 |Approval Status |Default Remit Address on Vendor Card - not showing on ExFlow invoices. 
|44384 |Web |Enable Coding changes for Confidential Documents. 
|44430 |Sales Order |Add new setting in ExFlow Sales Order Import Setup - Sales Order Mapping. 
|44877 |Technical |Events Required for Custom OCR Import Mapping Fields. 
|45879 |New Order Matching |Create Wizard for new PO (order) matching. 
|45901 |Setup |Get Started Wizard - Add option to cancel or run later. 
|46121 |Import Journal |Mapping of imported VAT % towards VAT product posting groups.

<br/>

#### Improvements/Enhancements

| ID| Area | Description |
| :----------- | :-------------- | :-------------- | 
|44781 |Approval Status |Verify documents when using re-invoicing in Swedish - Action message 
|45040 |Import Journal |VAT error on NA invoices with both taxable and nontaxable lines 
|45483 |Approval Status |Batch update posting date - Deferral posting date no activated - Updates deferral schedule 
|45599 |Import Journal |Item Charge Assignment not working correctly when assignment is performed before document is verified 
|45157 |Sales Order |ExFlow Sales Import - Create Sales Order - Creates order without customer no - No sales lines are created. 
|45573 |Import Journal |ExFlow File Import - Import - Import fails if there are PDFs without xml 
|45111 |Import Journal |Error Message: An error occurred and the transaction is stopped. Contact your administrator or partner for further assistance 
|45361 |Technical |Communication w. Services - GetUserAgent - Contains invalid characters due to ISV adding them 
|41731 |Web |ExFlow Web - Change Line Type - several issues 
|46254 |Import Journal |ExFlow Purchase Code and Misc 1 & 2 - Misc not excluded when creating lines 
|46025 |Import Journal |Open PDF-Viewer in new Tab - picture must be resize every time it opens and PDF moved to FactBox PDF Viewer 
|43262 |PGS |PGS Chargeable - PGS Chargeable stays unticked when G/L No. is changed 
|45437 |Web |ExFlow web - change line type - No. will be blank


<br/> 
Minor bug corrections are also handled in the release but not in the release notes.
<br/>


### ExFlow 24.1.0.0 – Release Notes <br/>  

#### Type of Release
Minor Release 

 
#### Release Date
2024-12-10 

**Release Information:** <br/> 
Requires BC 24.0 or later <br/> 

**Corrections** <br/> 

| Version | Area | Description | 
| :----------- | :-------------- | :-------------- | 
| 24.1.263.48	| General		| Change internal procedure CreateInvoicePeriod to external procedure 
| 24.1.263.48	| 4PS		| ExFlow Approval Group - Options missing in Dynamic Approval Type 
| 24.1.263.48	| 4PS		| Purchase Invoice - Amount not updated 
| 24.1.263.44	| 4PS		| Error when creating a new ExFlow User 
| 24.1.263.44	| Vendor Setup	| Wrong statement Always was set in Auto coding suggestion, when ExFlow vendor setup record didn't exist 
| 24.1.263.39	| 4PS		| New events for 4PS added 
| 24.1.263.32	| 4PS		| New events for 4PS added 
| 24.1.263.32| Pebblestone			| Issue when using Pebblestone and ExFlow web 
| 24.1.263.32| Import Journal		| Issue with Global Dimensions behaving incorrectly when selecting in the Import Journal 
| 24.1.263.28	| 4PS		| New events for 4PS and ExFlow Purchase codes added 
| 24.1.263.28	| Item Charge Assignment	| Issue related to Item Charge Assignment not working before document is verified 
| 24.1.263.22	| Approval Status	| The issue with deferral codes in some specific scenarios getting an incorrect posting date when running the function "Batch Update Posting Date" 
| 24.1.263.22	| Import Journal	| The issue related to importing only PDF-files through ExFlow File Import Setup 
| 24.1.263.22	| Sales Order		| The issue that Sales Orders could not be created in some scenarios 
| 24.1.263.18	| Re-Invoicing		| Issue where in some cases the VAT was incorrect on Sales Invoices generated from Re-invoicing 
| 24.1.263.18	| Upgrade		| Issue where ExFlow could not be upgraded to the latest version 
| 24.1.263.18	| Progressus		| Issue when running Progressus and ExFlow resulting in some times not being able to code the invoice  
| 24.1.263.9	| Events		| Two new events available for OCR Import Mapping - Added 
| 24.1.263.9	| Approval Status	| Re-Invoicing did not work with Swedish language  
| 24.1.263.9	| Progressus		| Issue when using ExFlow AP and Progressus where sometimes the "chargeable" field did not behave properly 
| 24.1.263.9	| Preliminary Posting	| Issue with the VAT Bus. Posting Group not having a rounding account when using Preliminary Posting is now working again as intended 

**24.1.0.0 - New Features** <br/>  

| ID| Area | Description | 
| :----------- | :-------------- | :-------------- |  
| 30556	| Import Journal	| Enhanced ExFlow to map up to 8 Misc. Charge fields to purchase codes 
| 44644	| Import Journal 	| New event added for item charge assignment in the Import Journal 
| 42817	| Approval Status 	| Added shortcut command for Preview Posting in Approval Status 
| 44220	| Import Journal 	| PDF-viewer in separate browser supported again 
| 32864	| Approval Status|FactBoxes of vendor statistics added in Approval Status and Approval Status History 
| 40207	| Import Journal 	| Better matching against currencies in Payment Validation 
| 43588	| Approval Status 	| Added function to revert all coding on documents done in the web in Approval Status 

 

<br/> 

 

**24.1.0 0 - Improvements/Enhancements**<br/>  

| ID| Area | Description | 
| :----------- | :-------------- | :-------------- |  
| 43997	| Web		| Resolved issue that sometimes the warning of having a minimum number of approvers did not warn 
| 44100	| Setup		| Updates made to EX BASE where some permissions where missing 
| 44288	| Import Journal	| Fixed issue that in some cases a receipt could not be matched when the same item was used in multiple lines 
| 42949	| Import Journal	| Fixed issue that sometimes when contract was matched, the dimensions and approval did not follow the settings 
| 42062	| Web		| Fixed issue when sometimes Item Charges were not possible to approve in the Web 

<br/>  

Minor bug corrections are also handled in the release but not in the release notes. 

<br/> 

### ExFlow 24.0.0.0 – Release Notes <br/> 
**Type of Release:** <br/>
Major Release

**Release Date:** <br/>
2024-09-13


**Release Information:** <br/>
Requires BC 23.0 or later <br/>

Authentication Email and Contact Email can now be edited on the ExFlow users, this is for customers that are not using office - changed in 24.0.310.36 <br/>

The admin search not being able to open documents in ExFlow web is resolved in 24.0.310.33 <br/>

Issue related to Auto Acc groups for BC 25 is resolved in 24.0.310.31 <br/>

Entra Groups not being updated correctly with ExFlow resolved in 24.0.310.31 <br/>

Dimension filter search in ExFlow Web improved in version 24.0.310.31 <br/>

Finnish customers can now again import lines and the calculation of Line Amount is correct - solved in 24.0.310.20<br/>

New event added to enable more customization of Re-Invoicing - added in 24.0.310.20<br/>

Multiple improvements to the search in ExFlow Web when using dimension filters on the ExFlow User - improved in 24.0.310.20<br/>

Negative line discounts can now be handled in the Import Journal in 24.0.309.15<br/>

In some specific cases the option "Minimum No. of Approvers" did not work as intended, this has been resolved in 24.0.309.15<br/>

Being able to change incorrect discounts is solved in 24.0.310.12<br/>

Minor fixes to Order matching where ExFlow sometimes could not identified the correct line is solved 24.0.310.12<br/>

ExFlow permission sets not containing enough permissions is solved in 24.0.310.12<br/>

<br/>

**New Features** 

| ID| Area | Description |
| :----------- | :-------------- | :-------------- | 
|31845|	Approval Status|	Added PDF FactBox in Verify Changes Page
|32005|	Email Reminders|	Added new E-mail Reminder for Documents On Hold
|36272|	Reports|	Improvements done in the Approval Status Report, now supporting different currencies in a better way when recalculating the lines 
|36766|	Email Reminders	|Added new E-mail Reminder, Users who create the Purchase Order/Quote is now able to get a reminder that the document has now been fully approved.
|38927|	Setup|	Added possibility to block the posting of documents outside of ExFlow, I.e creating a Purchase Invoice and then posting it bypassing the need for approval.
|40503|	Approval Status|	New bigger feature added, set filters on what is allowed values to be changed in the web, if set now there is no manual check needed for these values when running Verify changes.
|39935|	ExFlow Sales Orders|	Added support for Custom Shipping Address 
|41637|	ExFlow Sales Orders|	Added the option to use unique No. Series for Sales Orders created through ExFlow Sales Orders
|41640|	ExFlow Sales Orders|	Added staging possibility for documents that should not be automatically created and instead set on hold, creating more control for specific Customers. 

<br/>

**Improvements/Enhancements**<br/> 

| ID| Area | Description |
| :----------- | :-------------- | :-------------- | 
|40887| Preliminary Posting|	Fixed issue when working with preliminary posting and deferrals, now the reversing is done in the correct date.
|40197| Finnish localization|	Resolved issue in Finnish localization where you could in some cases create the document without a message.
|40465|	Setup|	Fixed an issue in Export/Import ExFlow Setup where the dimensions would be missing in the purchase codes.
|40419, 40422|	Spanish localization|	Fixed two issues on the technical side where IDs where missing and added ID type in Import Journal
|37501|	Setup|	Resolved issue where the Project Manager could not be retrieved in dynamic approval flows


<br/>


### ExFlow 23.2.0.0 – Release Notes <br/> 
**Type of Release:** <br/>
Minor Release

**Release Date:** <br/>
2024-05-24

**Release Information:** <br/>
Requires BC 23.0 or later <br/>

The issue with deferrals and preliminary posting has been fixed in 23.2.34.17

BC upgrades failing sometimes due to ExFlow data has been fixed in 23.2.34.17

The issue when ExFlow Approval Status report didn't create remaining periodic balance in specified account has been fixed in 23.2.34.20

Expose method ''AddDocumentFromBlobs'' that replaces obsolete method ''AddDocumentFromStreams'' has been added in 23.2.34.20

In NA environments ExFlow required Gen. Prod. Posting Group to be populated on G/L Account and Fixed Asset Lines in Import Journal. This issue has been resolved in 23.2.34.28    

Preliminary Posted documents cannot be reversed due to adjusted exchange rate on vendor ledger entry. The adjusted exchange rate posting will now be reversed om final posting date, resolved in 23.2.34.28

An issue where users with permission set EX ACCOUNTANT were denied access to ExFlow Import Journal Batches has been resolved in 23.2.34.28

Line discounts were calculated twice in Import Journal has been resolved in 23.2.34.28

Approving documents in Business Central with same functionality as ExFlow Web regarding setup in ExFlow Columns "Update VAT Product Posting Group" and "Update Gen. Prod. Posting Group" has been added in 23.2.34.28

Support for Prel.Posting without VAT has been added in 23.2.34.28


**Improvements/Enhancements**<br/> 

| ID| Area | Description |
| :----------- | :-------------- | :-------------- | 
|39085|	Import Journal|	Resolved issue regarding import of the OIOUBL format
|40104|	Import Journal|	Great improvement to the performance when working with the multi line matching
|39999|	Import Journal|	Resolved an issue where invoices with service items could in some cases not be created from the Import Journal
|39764|	Import Journal|	Now ExFlow will support the dimensions on the accounts as well in the background posting.
|39492|	Import Journal|	Resolved an issue with the payment method code when working with credit memos. It would previously not pick this up correctly.
|39085|	Import Journal|	Resolved issue regarding import of the OIOUBL format
|40104|	Import Journal|	Great improvement to the performance when working with the multi line matching


<br/> <br/>

### ExFlow 23.1.0.0 – Release Notes <br/> 
**Type of Release:** <br/>
Minor Release

**Release Date:** <br/>
2024-03-26


**Release Information:** <br/>
Requires BC 23.0 or later <br/>

Added back support for Re-Invoicing other line types towards G/L account. - Fixed in 23.1.282.13

Added new tables with read permission for EX BASE - Fixed in 23.1.282.13

Enhanced existing functionality “Matching Delay” in ExFlow Setup, now a different error message will show if the document date or due date is within the date formula. This will make it easier to use this functionality so the customers know what documents needs their attention. - Fixed in 23.1.282.13
<br/>

**New Features** 

| ID| Area | Description |
| :----------- | :-------------- | :-------------- | 
| 11392 | Web                   | Added support for Confidential Invoices in ExFlow Web and the Business Central
| 25408	| Web	                | Enhancing the existing functionality of Re-Invoicing with multiple new features
| 27791	| Technical             | Added support for ExFlow Tables in BC Data Search
| 28316	| Web                   | Added basic support for BC standard Inter Company in ExFlow
| 30635	| Web                   | Added reason code in ExFlow Web for Purchase Order matched Documents
| 32203	| Setup                 | Improvements to ExFlow Audit Log, possibility to generate PDF with the approval flow
| 35216	| Import Journal        | The Purchaser Code is now able to be shown through personalize in the Import Journal
| 35729	| ExFlow Data Capture   | Added possibility to not synchronize specific vendors to ExFlow Data Capture, this is done through ExFlow Vendor Setup
| 36300	| Setup                 | Added possibility to set default message type for Vendors, only available in FI localization
| 39171	| Technical             | Added new query to be able to handle Credit Memos and Invoices for Power BI



<br/> 

**Improvements/Enhancements**<br/> 

| ID| Area | Description |
| :----------- | :-------------- | :-------------- | 
| 36337  | Setup             | Fixed issue that the Unreceived Order Notification would some times stop working
| 38656  | Setup             | Fixed issue with preliminary posting that previously reversing was not possible when having a different pay-to vendor
| 38566  | Setup             | Fixed issue with the import job creating multiple job queue entries incorrectly
| 38346  | Setup             | The reference description on the contract not being moved to the reference card has been resolved
| 37306  | Import Journal    | The Payment Method Code not being set correctly on Credit Memos has been resolved. This issue was only in US & CA environment
| 37110  | OMNI              | Resolved the issue when some users could not access the contract to be able to fully approve them
| 36966  | Setup             | The issue that attachments in some cases would receive the type “Other” has been resolved
| 37654  | Setup             | Added support to use Job Task No. in the Data exchange for ExFlow


<br/> <br/>



### ExFlow 23.0.329.0 – Release Notes<br/> 
**Type of Release:** <br/>
Major Release

**Release Date:** <br/>
2024-01-11

**Release Information:** <br/>
Requires BC 23.0 or later <br/><br/>
The issue of Business Central upgrades occasionally encountering failures due to an ExFlow-related error has been resolved in version 23.0.329.3.  <br/>

Vendor Name not showing in in ExFlow Vendor Setup for has been resolved in version 23.0.329.14.  <br/>

Description 2 not supporting the same number of characters in Business Central as in ExFlow Web has been resolved in 23.0.329.14. <br/>


**New Features** 

| ID| Area | Description |
| :----------- | :-------------- | :-------------- | 
| 19664 | Setup | All previous ExFlow settings on the Vendor card as well as ExFlow Advanced Vendor Options have been moved to ExFlow Vendor Setup
 30367 | Setup| All previous ExFlow settings on the Vendor card as well as ExFlow Advanced Vendor Options have been moved to ExFlow Vendor Setup
30676|PO-matching|Additional fields added into ExFlow Approval Documents in Business Central making it easier to approve invoices that are matched to a PO
31319|Web|Added support for additional tax fields in ExFlow Web for US and CA localization
32226|Import Journal|Invoice Message will be populated with Vendor Invoice Number if the Invoice Message is empty - only in FI localization
34703|Setup|EDC Accounts, ExFlow BLOB Storage & ExFlow File Import Setups will automatically be disabled whenever a sandbox copy is created
34979|Setup|Imported lines with the value of 0.00 will be automatically removed when imported. Only applicable for the Item line type
36206|Technical|Added the option to import all PDF's to all companies when importing documents during upgrade from NAV to BC
36629|Setup|Added new setting in "Order and Quote Approval" - "Only receive Approved Order". When enabled, Purchase Orders will not be able to be received as long as the Purchase Order is not fully Approved in ExFlow. This setting is only applicable when Purchase Order Approval in ExFlow is enabled


<br/> 

**Improvements/Enhancements**<br/> 

| ID| Area | Description |
| :----------- | :-------------- | :-------------- | 
36410|Setup|Enhanced Email Translation for Unreceived Orders - Resolved issue related to E-mail translation for Unrecieved Order
32724|Reports|Improved Final Posting Accuracy for Bridging Accounts -Implemented fixes for situations where enabling "Exclude Periodic Lines with Start Date after Posting Date" and "Post Remaining Periodic Balance to Separate Account" in the Approval Status report could result in incorrect final postings for bridging accounts
34522, 36785, 37027|PO-matching|Optimized PO-Matching Functionality - Multiple improvements to PO-matching, including the ability to match the same item multiple times on different lines on the purchase order
34900|Setup|Streamlined Vendor Master Data Sync - Resolved an issue that occasionally prevented manual use of the Master Data sync for vendors to ExFlow Data Capture
35139|Setup|Enhanced ExFlow Get Started Wizard - Automatically created jobs have been removed from the ExFlow Get Started Wizard, empowering Delegated Admin users to run the wizard with greater control and ease.
35228|Approval|Improved Approval Flow Control - Approval flows will now only initiate once the Purchase Order/Quote is released, preventing unintended flows. Additionally, users can now modify approval flows when the status is Open, offering greater flexibility, especially when working with Auto Approval Groups
35323|Import Journal|Resolved Repetitive Job Queue Entry Issue - Job 881 continuously being added to the job queue entries is successfully resolved


 <br/> <br/>

### ExFlow 22.2.110.0 – Release Notes<br/> 
**Type of Release:** <br/>
Minor Release

**Release Date:** <br/>
2023-09-27

**Release Information:** <br/>
Requires BC 22.1 or later<br/><br/>
Fixed various issues related to working with multiple prepayments solved in 22.2.110.11.

Vendor Master Data sync not working with new EDC integration when using Swedish language solved in 22.2.110.11.
Purchase Invoices not being able to be posted solved in 22.2.110.14.

Not being able to approve in certain localizations from ExFlow Approval Documents page solved in 22.2.110.22.

Auto Coding Suggestion not being able to be created as well as minor improvements solved in 22.2.110.22.

Unit of measure being removed when creating documents when working with Progressus solved in 22.2.110.32.

New event added related to the imported purchase line added in 22.2.110.42.

Job queues removed when running ExFlow wizard, now partners with Delegated Admin will be able to run the wizard in 22.2.110.42.

Two new events added related to updating dimensions and order matching in 22.2.110.46.

Added new event for search in ExFlow web in 22.2.110.57.
​​​​​​​

**New Features** 

| ID| Area | Description |
| :----------- | :-------------- | :-------------- | 
|32727|	Contract Matching|	Reminder added for missing/expected invoices according to Contract lines (periods)
32727|	Contract Matching|	Quick create Contract from Invoice added to Actions in Import journal
32727|	Contract Matching|	Auto Acc. Group added to Contract Statistics and Approval Status History
32747|	General|	Additional ExFlow tables added to Export/Import setup
32823|	Invoice Storage|	Added native support for external storage in SharePoint
32920|	PO-matching|	Support for reminders on Orders with unreceived lines in Approval Status
32923|	PO-matching|	Order No. is no longer populated when processing additional invoice line charges
32817|	Sales Order Import|	Improved accuracy of matching customer ship-to location when importing Sales Orders
34604|	Sales Order Import|	Improved accuracy for matching customer contact when importing Sales Orders


<br/> 

**Improvements/Enhancements**<br/> 

| ID| Area | Description |
| :----------- | :-------------- | :-------------- | 
|34515  | Approval|	            Control on minimum No. of approvers causes issues if line is sent for approval on dummy account with only first approver
|32757  |Approval Status|   	Batch Posting resets any filters in page
|34112   |Import Journal|       Column headers are sometimes not responsive when horizontal scrolling 
|34358  |Import Journal|    	Error when creating invoice with item charge assignment from Import Journal
|34694 |Import Journal|     	[BE localization] Error message: 'Structured Message failed…' when controlling payment reference field 
|34698 |Invoice Storage|    	Additional setting to commit certain no. of invoice images in batches when enabling
|32315  |Job Queue|         	Job queue creates multiple unnecessary entries for CU 12057075
|33739  |PDF-viewer|        	PDF preview sometimes cuts text on invoices in Import journal and Approval status
|32386  |PO-matching|           Issue when creating documents where an item charge line is listed above the item lines it is assigned to
|32820  |PO-matching|       	Error Code: '...DB:recordExists' sometimes when importing documents for PO matching
|34206  |PO-matching|       	Invoice Line is connected to the wrong post. rec. no
|34547  |PO-matching|       	Final prepayment invoice not calculating correctly if other currency than LCY
|33248  |Search|            	Error message: 'The length of the string...' when applying filter on approver and vendor
|33150  |Wizards|	            Broken video links in PO-matching wizard
|34515  |Approval|          	Control on minimum No. of approvers causes issues if line is sent for approval on dummy account with only first approver
|32757  |Approval Status|	    Batch Posting resets any filters in page



 <br/> <br/>


### ExFlow 22.1.204.0 – Release Notes<br/> 
**Type of Release:** <br/>
Minor Release

**Release Date:** <br/>
2023-08-29


**Release Information:** <br/>
Requires BC 22.1 or later

Unable to import invoices if scheduled job for OCR Service has been deleted resolved in 22.1.204.5.

Amount calculated incorrectly for prepayment invoices when using other currency than LCY fixed in 22.1.204.8.

Unable to upgrade from older version of BC & NAV to BC Online has been fixed in 22.1.204.11.


**New Features** 

| ID| Area | Description |
| :----------- | :-------------- | :-------------- | 
|29378|	Approval|	Always check minimum number of approvers when the last user is approving
|30565|	Approval|	Restrict Printing/Sending Purchase Order that is enabled for ExFlow, if the document is not fully approved
|29382|	Approval| Status	Possibility to send back document line to any approver when rejecting changes
|31251|	General|	Support for Auto Acc. Group as a feature
|29364|	Import Journal|	Send chat notifications to BC users from Import journal
|28139|	Import Journal|	[US localization] IRS 1099-related fields added to Import Journal


<br/> 

**Improvements/Enhancements**<br/> 

| ID| Area | Description |
| :----------- | :-------------- | :-------------- | 
|32670|	Approval|	Auto Acc Group not modified when changing G/L account in ExFlow web
|33312|	Approval| Status	Document Status not updating in Approval Status when PO matched documents are fully approved
|28805|	General	|Unable to edit lines on unreleased Purchase Order, if it will be assigned an Approval Group 
|33306|	General	|Error when adding/modifying new lines on a  Purchase order, if Purchaser code is applied
|33272|	Import	|Error message: "You have modified Tax Area Code" when batch importing documents in some scenarios
|32474|	Import Journal	|Prepayment amount on final invoice incorrectly calculated if previous invoices are including VAT
|30913|	Import Journal	|Not possible to use Propose VAT line if a PO number has been applied 
|33055|	Import Journal	|Error when adding additional approvers manually in Approval Proposal, if Approval rule has already been applied
|33062|	Import Journal	|Error Message: Type must not be in ExFlow Purchase Document Line if Auto Coding Suggestions are enabled
|30145|	Import Journal	|Dimension values applied from OCR Import mapping not displayed on document lines until Dimension Set Entries page has been opened
|32113|	Import Journal	|All Import journal batches are processed, not only the selected one, when running Import Documents
|33244|	Import Journal	|[US & CA localization] Tax Area Code not populated correctly from Vendor/Location to document in some scenarios
|33724|	Import Journal	|[BE localization] Users with permission set EX ACCOUNTANT can experience permission errors when importing documents
|33269|	PO-matching	|If Match Document to is set to Receipt, invoice is still matched to Order line incorrectly
|26078|	Purchase Codes	|[US & CA localization] Tax Area Code and Tax Group Code added to ExFlow Purchase Code
|29827|	Search	|Slow searching in BC and time outs in ExFlow web when only filtering on line values 

 <br/> <br/>


### ExFlow 22.0.274.0 – Release Notes<br/> 
**Type of Release:** <br/>
Major Release

**Release Date:** <br/>
2023-06-19


**Release Information:** <br/>
Requires BC 22.1 or later.

Various issues with PO matching solved in 22.0.274.5

Purchaser and Purchase Coordinator missing in Email setup fixed in 22.0.274.5

Not possible to install latest version fixed in 22.0.274.12

Preliminary Invoice posted when PO matching fixed in 22.0.274.12

Error "Default Admin Role ID must have a value" when activating new license key fixed in 22.0.274.12

Issue updating document lines if a receipt has been posted after import fixed in 22.0.274.14

Preliminary Posting activated after upgrade to 22 fixed in 22.0.274.19

Document Status not updating in Approval Status when PO matched documents are fully approved fixed in 22.0.274.25

Approval proposal in import journal gives an error message when adding approvers fixed in 22.0.274.25


**New Features** 

| ID| Area | Description |
| :----------- | :-------------- | :-------------- | 
|11088|	Localization|	        Support for Belgium localization
|18732|	Audit Log|	            Detailed Audit log added as a new feature. View document changes in an overview based on invoice states and actions, or drill down to view detailed changes for each field.
|25219|	Invoice Storage|	    External Storage added as a new feature. It is now possible to store your invoice images in an external storage such as Azure Blob storage. At posting, the invoice image   will be removed from the database, and stored externally instead. The framework can also be extended to use with other storage services such as Sharepoint, AWS, local folder etc. 
|26367|	Budget Controls|    	G/L Budget Controls added as a new feature.  Activate by running the wizard for ExFlow Budget Controls. Controls are done against G/L budget on G/L account in combination of global dimensions. Approvers will receive warnings in Import journal or during Approval, and automatically a specific approver can automatically be added to the approval workflow if a budget post combination is exceeded.
|28612|	Wizards|            	The ExFlow installation wizard has been reworked and improved. It will now also include setup of users, user references, approval workflows, auto coding suggestions, scheduled jobs and OCR Service Setup. 
|28937|	Import|             	Get attachments from an external source based on reference in XML. Specifically requested for FINVOICE
|29354|	General|            	Support for Responsibility Center in ExFlow
|30199|	Auto Coding|        	Improved accuracy
|30262|	Wizards|            	New wizard for activating and configuring PO matching
|30290|	PO Matching|        	Restricting the possibility to match an invoice to an open Purchase Order, or a Purchase Order that has not been approved if activated for ExFlow Approval.
|30312|	PO Matching|        	Possibility to process additional line charges for a PO-matched invoice.
|30457|	General|            	Support for non-deductible and partly deductible VAT. We strongly advice not activating this feature in Business Central since there are critical issues for documents in other currencies than LCY.
|27288|	Contract Matching|  	ExFlow contracts has now been enhanced with Invoice periods, that can be created manually or from Periodicity. The invoicing periods can be set to generate Purchase invoices for the purpose of self-billing.
|27355|	Users|              	Select and create multiple ExFlow users from the BC user list.
|29858|	References|         	A new option to automatically create a reference for new ExFlow users has been added to ExFlow setup. From ExFlow user lists, you can also batch create references for all existing ExFlow users.
|30309|	PO Matching|        	Possibility to specify lines types that can be automatically received and invoiced by ExFlow, in ExFlow setup
|30666|	General|            	Tooltips from commonly used pages are now linked directly to relevant sections in User manual at docs.signupsoftware.com
|31703|	Contract Matching|     	Reason for manual approval of a contract-matched invoice added to the document in ExFlow web.
|27693|	Auto Coding|        	Vendor added to grouping for Auto coding Suggestions.
|29371|	Search|             	It is now possible to search for Vendor name AND Vendor no. by searching for 'Vendor' in ExFlow web.


<br/> 

**Improvements/Enhancements**<br/> 

| ID| Area | Description |
| :----------- | :-------------- | :-------------- | 
|30359|	Approval|	        Posting date is now correctly updated on the Purchase Order when posting a prepayment invoice, as well as VAT dates being incorrectly assigned from the order header.
|30642|	PO Matching|	    Get Receipt/Return Shpmt./Order Lines doesn’t display Qty. for documents in Approval status.
|29979|	Vendor|	            Business Central crashes when creating a new vendor and opening all posting groups, specifically when the ExFlow Setup "Auto Create Vendor ID" is set to "Ask".
|30300|	Import Journal|	    If not enabling 'Direct Posting' on the G/L account set for Prepayments in General Posting setup, an error message that "G/L account is not found" is received when creating a Prepayment invoice.
|30399|	Import Journal|	    Not possible to match invoice lines to PO lines in the import journal if there are already other invoices with lines matched to the same PO lines.
|30431|	General|	        Not possible to access ExFlow Setup if the default Base Role Id is blank.
|30448|	Approval|	        ExFlow Approval is not set to yes per default if copying a Purchase Order.
|30660|	Users|	            Not possible to create a new ExFlow user for delegated Admin if the email address used for authentication is invalid.
|30663|	Emails|	            Email notifications for new comments added to the Discussion Panel in Import journal not sent.
|30715|	Approval|	        Not possible to post a 100% prepayment invoice due to an error regarding Gross Amount.
|30725|	Approval|	         If quantities are manually adjusted on a credit memo that is connected to a Return order, the quantity used in item tracking will come from the Return Order instead of the Credit memo.
|30959|	Emails|         	Email notifications should be disabled in test companies
|30960|	PDF-viewer|     	Some information disappears from certain PDFs.
|30961|	Approval|	        Invoices are sometimes stuck in 'inactive' status if the amount is below 'Min. Doc Approval Amt. (LCY)'
|30968|	Approval|       	General Product Posting Group required on G/L account associated with FA Posting Group
|30971|	Setup|	            Lines are ignored for specific vendors if 'Ignore OCR lines' is set to Yes in ExFlow Setup but Never in Advanced Vendor options for a specific vendor.
|30972|	Import Journal|	    [IT localization] - Field 'Operation Occurred Date' missing on Ex document header.
|31059|	Emails|	            Unable to send reminders online matched document, if PO number is interpreted on header level.
|31143|	Approval|	        Auto-approval on Purchase Order not working when using user setup or purchaser code.
|31171|	Approval|	        Not possible to edit Deferral Schedule in Import journal
|31190|	Import Journal|	    [US localization] - Gen. Prod Posting group missing on invoice even if set as default in ExFlow Setup.
|31243|	Import Journal|	    Due date not calculated correctly for some scenarios
|31279|	Verify Changes|	    The procedure for automatically posting receipts sometimes fails and could result in receipts being posted again next run time.
|31341|	Import Journal|	    Document lines are deleted when changing document type.
|31443|	Approval|	        Document not visible in inbox if put 'On Hold' and forwarded to new approver.
|31793|	PO Matching|	    Possible to post an invoice without receipt if using 'Order and Receipt' as matching option.
|31990|	PO Matching|	    Receipt no. not added if getting receipts manually from actions in Import journal.
|31997|	PO Matching|	    Receipt lines added from PO no. in header are removed if getting receipts manually from actions in Import journal.
|31622|	PO Matching|	    Matching against multiple purchase receipts not working if 'Multi Line matching' is activated.