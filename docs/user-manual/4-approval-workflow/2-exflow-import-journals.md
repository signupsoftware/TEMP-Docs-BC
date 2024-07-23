---
title: ExFlow Import Journals
sidebar_position: 2
hide_title: true
---
## ExFlow Import Journals

Go to: ***ExFlow Import Journals***

An "ExFlow Import Journal" is used for importing documents, applying coding, handling action messages, and creating Invoices/Credits Memos for approval. After scanning and interpreting the scanned documents,
files are created and ready to be imported.

From the ExFlow Import Journals list it is possible to search, create a new journal, edit current journal rows, and delete journals. Users can also Batch Import Documents, Batch Create Invoices and Credit Memos, Edit/View OCR Import Queue, send Email Receipt Reminders and Batch/Verify Journals.

![ExFlow Import Journals](@site/static/img/media/import-journals-003.png)

### Batch Import Documents from Interpretation
Go to: ***Home --> Batch Import Documents***<br/>
Document images and the interpreted data will be imported.

Depending on the journal settings the documents will be separated into the different journals.

A journal with the setup checkbox "Only Purchase Order Matched Documents" ticked, will get order matched documents and documents containing Order No. information. There can be other ways to separate the documents but a separation in Expense/Purchase Invoices matched is very common.

Same setting can be made for "Create Lines with Automatic Suggestion". Tick the "Create Lines with Automatic Suggestion" box if ExFlow Automatic Coding Suggestion should be applied for a specific journal.

Read more about this under Section **"ExFlow Auto Coding Suggestion".**

![ExFlow Import Journals](@site/static/img/media/import-journals-004.png)

In the journals there will be one document header record for each imported OCR document. "Import Lines" in the lower section is line details for each document.

![ExFlow Import Journal](@site/static/img/media/import-journal-010.png)

Moreover, it is possible to setup a specific journal dedicated for Automatically Create Documents. Use Personalize and add the column "Automatically Create Documents" to ExFlow Import Journals list page.

Tick this box if interpreted documents should be automatically created from the ExFlow Import Journal. With this function set, all interpreted imported documents (with no errors or warning messages) will be
automatically created and send out for approval.

![ExFlow Import Journal](@site/static/img/media/import-journals-005.png)

Import and a message will show how many received/imported documents, and the quantity of the automatically created document(s).

![ExFlow Import Journal - Import Status](@site/static/img/media/import-status-001.png)

This setting can also be applied on specific vendors only. Read more about this under section **Vendor Setup**.

### ExFlow Data Capture
Go to: ***Actions --> Import --> ExFlow Data Capture***

Click on "ExFlow Data Capture" to get to its website. This only works if the company is connected to an ExFlow Data Capture account.

![ExFlow Import Journals - ExFlow Data Capture](@site/static/img/media/import-journals-006.png)

### Delete Imported Document
Go to: ***Manage --> Delete***<br/>
When the document has been imported in to ExFlow Import Journal it can
be deleted. Then no Purchase Document will be created.

### Display the ExFlow Import Document Card
Go to: ***Manage --> Card***<br/>
Open the ExFlow Import Document card for the selected document.

### Document Statistics
Go to: ***Manage --> Statistics (F7)***<br/>
View statistical information about the selected document.

![ExFlow Import Journal - Manage](@site/static/img/media/import-journal-011-menu-manage.png)

### Import Documents
Go to: ***Home --> Import Documents***<br/>
To import Documents to one selected journal, open the journal and Import Documents.

![ExFlow Import Journal - Home](@site/static/img/media/import-journal-009-menu-home.png)

### Verify Document
Go to: ***Home --> Verify Document (Ctrl+R)***<br/>
Select one (or more) document(s) to verify via Verify Document. This function will verify that the document is ready to be created.

### Batch Verify Documents
Go to: ***Home--> Batch Verify Documents***<br/>
After correcting an error this will delete or create a new action message if a document still has an error.

### Auto Coding Suggestion -- Manual Choice
Go to: ***Home --> Auto Coding Suggestion - Manual Choice***<br/>
Opens the Auto Coding Suggestion list related to the selected document.

Manual Choice give the option to navigate through different Coding Set ID and manually choose a coding
suggestion.

#### ExFlow Coding Suggestion for Import Journal -- Manual Choice
This page will show the best match for coding for the invoice that was selected before pressing the button to manually choose coding suggestion. In the right-hand corner it's possible to see the coding
from the selected Coding Suggestion Lines for that specific Setup ID.

**Apply Coding Set ID:** This will apply the coding seen in the right-hand corner to the invoice.

**Show Document Lines**: Will open up ExFlow Coding Suggestion Document page. Read more under section **Coding Suggestion Document**.

**Show All:** This will show all the Setup ID's for the possibility to manually choose a suggested coding for i.e. another vendor.

**Show Initial Suggestion:** This will go back to the initial suggestion shown from when the page first opened.

![ExFlow Coding Suggestion for Import Journal](@site/static/img/media/auto-coding-suggestion-001.png)

#### ExFlow Coding Suggestion Document

On this page the coding is shown in more detail. It is also possible to compare the Suggested Lines to the Current lines on the invoice.

**Apply Suggested Coding:** This applies the suggested coding to the invoice.

**Suggest Latest Coding**: This applies the coding from the last posted document from that vendor.

**Suggest Preselected Coding**: This suggests the coding which originated as the selection on the previous window.

**Suggest Automatic Coding:** This will suggest the automatic coding based on the Automatic Suggestion Setup.

![ExFlow Coding Suggestion Document](@site/static/img/media/auto-coding-suggestion-002.png)

### Auto Coding Suggestion -- Automatic
Go to: ***Home --> Auto Coding Suggestion - Automatic***<br/>
Applies the line coding chosen by the suggestion algorithm.

This will enter a coding based on the information on the invoice. It will choose the coding based on the
Automatic Coding Setup.

![ExFlow Import Journal](@site/static/img/media/import-journal-012-menu-home.png)

### Update VAT Product Posting Group
Go to: ***Home --> Update VAT Product Posting Group***<br/>
This function can only be used together for customers that have SweBase installed.

Due to Swedish Tax Rules regarding IT VAT, it is possible to update all VAT Product Posting Groups on Invoice Lines.

Read more under section **SweBase** and **Update VAT Product Posting Group**.

### Open PDF-Viewer in New Tab
Go to: ***Home --> Open PDF-Viewer in New Tab***<br/>
Opens PDF in a new tab.

### Open Vendor Card
Go to: ***Home --> Vendor Card***<br/>
Opens the Vendor card for the specific document.

### Import or Replace Image
Go to: ***Home --> Import or Replace Image***<br/>
Import or replace current document image.

### Batch Create Invoices/Cr.Memos
Go to: ***Create --> Batch Create Invoices/Cr.Memos***<br/>
This will run both Batch Verify Documents and create Purchase Invoices and Credit Memos for all documents in this journal that do not have any action message.

![ExFlow Import Journal - Create](@site/static/img/media/import-journal-013-menu-create.png)

![Batch Create Purchase Documents](@site/static/img/media/batch-create-purchase-documents-001.png)

To update Posting Date on all documents, add a new date in field Posting Date and activate Replace Posting Date.

If VAT Date Usage is enabled and Default VAT Date is Posting Date in General Ledger Setup, Replace VAT Date will be activated automatically as a suggestion.
 

![Batch Create Purchase Documents](@site/static/img/media/batch-create-purchase-documents-002.png)

If one, or several documents, have Deferral Code when using Replace Posting Date, the following question will occur.

Choose **Yes** to update deferral starting date according to settings on Deferral Code for all document lines.<br/>
Choose **No** to keep deferral starting date as created on all document lines.

![Message when Batch Create Purchase Documents](@site/static/img/media/batch-create-post-message-001.png)

### Create Invoice/Cr.Memo
Go to: ***Create --> Create Invoice/Cr.Memo (F9)***<br/>
Stand on the selected document line and click on Create Invoice/Cr.Memo to create one document or use shortcut F9.

There is also an option to select multiple documents to be created. Use "Select More" to select the documents.

![ExFlow Import Journal - Select More](@site/static/img/media/import-journal-014.png)

And simply click on Create Invoice/Cr.Memo create the chosen documents.

![ExFlow Import Journal - Select and create multiple documents](@site/static/img/media/import-journal-015.png)

### Import Lines from Excel
Go to: ***Actions --> Import --> Download Import Line Excel Template / Import Line from Excel***<br/>
Sometimes it is easier to work in Excel when the invoice includes several rows.

Start by "Download Import Line Excel Template".

Modify, add, and/or delete rows in Excel, save and use function "Import Lines from Excel".

![ExFlow Import Journal](@site/static/img/media/import-journal-016-menu-actions-import.png)

#### Copy / Paste on Rows
It is possible to copy row from other document or from Excel and Paste in Import Journal. This function is working in the same way as in Business Central Standard.

### Get Latest Coding from Vendor
Go to: ***Actions --> Import --> Get Latest Coding from Vendor***<br/>
This function will find last posted invoice and copy rows with G/L Account.

### ExFlow Data Capture
Go to: ***Actions --> Import --> ExFlow Data Capture***<br/>
This function will open "ExFlow Data Capture" webpage (if the company is connected to ExFlow Data Capture).

### Save Coding to Vendor
Go to: ***Action --> Functions --> Save Coding to Vendor***<br/>
Use this function to save the current coding of invoice lines to an ExFlow Purchase Code that will be saved to the Vendor card.

![ExFlow Import Journal - Functions](@site/static/img/media/import-journal-017-menu-actions-function.png)

### Transfer Selected Documents to Another Company
Go to: ***Action --> Functions --> Transfer selected Document to another Company***<br/>
If the Business Central database includes more than one Company, a document can be moved to another Company before the document is created.

### Transfer Selected Documents to Another Batch
Go to: ***Action --> Functions --> Transfer selected Document to another batch***<br/>
If the Business Central company have more than one ExFlow Import Journal, a document can be moved to another journal before the document is created.

### Batch Update Posting Date
Go to: ***Action --> Functions --> Batch Update Posting Date***<br/>
Whith this function it is possible to update Posting Date for documents in selected Journal within the filter.

### Edit/View OCR Import Queue
Go to: ***Action --> Functions --> Batch Update Posting Date***<br/>
Use this function to view or edit the OCR Import Queue. Correct documents that contains incorrect information that prevents them from being imported. 

### Order -- Match OCR Lines
Go to: ***Actions --> Order --> Match OCR Lines***<br/>
Match document lines against purchase order(s).

![ExFlow Import Journal - Match OCR Lines](@site/static/img/media/import-journal-018-menu-actions-order.png)

When using this function ExFlow collects information from Order and Receipts, etc.

To make manual line matching easier, it is possible to Personalize the "Line Matching View" page and add fields like "Item Reference No" and "Vendor Item No.".

![Match OCR Lines - Line Matching View](@site/static/img/media/line-matching-view-001.png)

### Order -- Get Receipt/ Return Shpmt./Order Lines
Go to: ***Actions --> Order --> Get Receipt/ Return Shpmt./Order Lines***<br/>
With this button order/receipt lines are fetched and added to the selected document.

Read more under section **Order matching on Header-level**.

![ExFlow Import Journal](@site/static/img/media/import-journal-019-menu-actions-order.png)

### Batch Send Receipt Reminders
Go to: ***Actions --> Email --> Batch Send Receipt Reminders***<br/>
With this function emails will be sent to users regarding receipt reminders for any new documents. If the Purchaser Code value is blank in the Import Journal, a reminder will be sent to the Purchase Coordinator.
If a Purchaser Code exists, the reminder will be sent to the connected ExFlow user.

![ExFlow Send Receipt Reminders](@site/static/img/media/import-journal-020-menu-actions-email.png)

### Batch Send All Receipt Reminders
Go to: ***Actions --> Email --> Batch Send All Receipt Reminders***<br/>
This button sends emails regarding receipt reminders with no restrictions from timestamps from earlier sent reminders.

### Send Receipt Reminders For Selected Documents
Go to: ***Actions --> Email --> Send Receipt Reminders For Selected Documents***<br/>
This button sends receipt reminders only for selected documents. Reminders are sent at any time no matter when the last reminder for the document(s) was sent.

### See email log
Go to: ***Actions --> Email --> See email log***<br/>
This button will show an email log of sent receipt reminders.

![ExFlow Email Logs](@site/static/img/media/email-logs-001.png)

#### Delete Entries Older Than 30 Days
Go to: ***ExFlow Email Logs --> Action --> Delete Entries Older Than 30 Days***<br/>
This button clears the list of log entries older than 30 days.

#### Delete All Entries
Go to: ***ExFlow Email Logs --> Action --> Delete All Entries***<br/>
With this button all log entries of sent receipts can be cleared.

#### Show Error Message
Go to: ***ExFlow Email Logs --> Action --> Show Error Message***<br/>
This button shows if there are any error messages related to send receipt reminders.

#### Show All
Go to: ***ExFlow Email Logs --> Action --> Show All***<br/>
With this button all the records of email log are displayed. Records consists of an Email type, Document no, Sent to Address, Sent by, Created At and Error Message.

### Preview Preliminary Posting
Go to: ***Actions --> Preliminary Posting --> Preview Posting***<br/>
This can only be used if Preliminary Posting is activated. <br/>
Read more under section [***Premininary Posting***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/preliminary-posting)

### Create Contract
Go to: ***Actions --> Contract --> Create Contract***<br/>
If invoice is interpret and coding is added on the header for recurring invoices. Use this function to create a contract.
Fileds in Invoice Header that will be copied to the new created contract:
* Vendor No.
* Reference to External Contract No.
* ExFlow Purchanse Code
* First Approver
* Approval Rule
* Purchaser Code

To complete the setup on the contract, read more under section [***Contract***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/contract)

### Order Card
Go to: ***Related --> Document --> Order Card***<br/>
This button will open the connected purchase order card for the selected document.

### Show Contract
Go to: ***Related --> Document --> Show Contract***<br/>
Open the connected ExFlow contract for the selected document.

### Dimensions
Go to: ***Related --> Document --> Dimensions***<br/>
View dimensions set on the selected document.

### View Vendor Bank Account
Go to: ***Related --> Document --> Vendor Bank Account***<br/>
This button will show the preferred Bank Account of the Vendor. If it does not exist, it will show the list of Vendor Bank Account for the specific Vendor.

![Import Journal](@site/static/img/media/import-journal-021-menu-related-document.png)

### Show Import Details (OCR)
Go to: ***Related --> Files --> Show Import Details (OCR)***<br/>
To be able to see the interpreted data mark the correct document line, go to "Show Import Details (OCR)". The data cannot be modified.

![ExFlow Import Journal - Files](@site/static/img/media/import-journal-022-menu-related-files.png)

![ExFlow Imported Document](@site/static/img/media/imported-document-001.png)

### Show Document Image
Go to: ***Related --> Files --> Show Document Image***<br/>
To open PDF on full screen for a selected document or use shortcut (Ctrl+I).

### Display the ExFlow Import Document Card
Go to: ***Manage --> Card***<br/>
Open the ExFlow Import Document card for the selected document.

### View Vendor Card
Go to: ***Show more options --> Vendor Card***<br/>
This button will show the Vendor Card for the selected document.
Can also be found under ***Related --> Document --> Other --> Import or Replace Image***

### Import or Replace Image
Got to: ***Show more options --> Import or Replace Image***<br/>
Import a file or replace an image to the context menu on the invoice header through function \'\'Import or Replace Image\" in Import Journal.<br/>
Can also be found under ***Related --> Files --> Other --> Import or Replace Image***

![ExFlow Import Journal](@site/static/img/media/image200.png)

### Dimensions
Go to: ***Show more options --> Document --> Dimensions***<br/>
View dimensions set on the selected document.

### Show Import Details (OCR)
Go to: ***Show more options --> Show Import Details (OCR)***<br/>
To be able to see the interpreted data mark the correct document line, go to "Show Import Details (OCR)". The data cannot be modified.
Read more about show Import Details above

### Show Document Image
Go to: ***Show more options --> Show Document Image***<br/>
To open PDF on full screen for a selected document or use shortcut (Ctrl+I).

### ExFlow Import Journal -- Import Lines
#### New Line
Go to: ***Import Lines --> Manage --> New Line***<br/>
Add new line to create a new entry. 

#### Delete Line
Go to: ***Import Lines --> Manage --> Delete Line***<br/>
Delete the selected row. 

![ExFlow Import Journal -- Import Lines](@site/static/img/media/image201.png)

#### Purchase Order Card
If the document line is matched against a purchase order, click on Purchase Order Card to open the corresponding purchase order card.<br/>
Go to: ***Import Lines --\ Line --> Purchase Order Card***

![ExFlow Import Journal - Import Lines - Purchase Order Card](@site/static/img/media/image202.png)

#### Dimensions
Go to: ***Import Lines --> Line --> Dimensions***<br/>
Show all dimensions for current line.

![ExFlow Imported Document - Dimensions](@site/static/img/media/image209.png)

#### Show Approval Proposal
Displays the current approval proposal for the selected document line.<br/>
Go to: ***Import Lines --> Line --> Show Approval Proposal***

![ExFlow Import Journal - Import Lines - Show Approval Proposal](@site/static/img/media/image203.png)

#### Show Available Approval Rules
Go to: ***Import Lines --> Line --> Show Available Approval Rules***<br/>
This will display all available approval rules with the highest priority at the top.

#### Item Charge Assignment
When using Charge (Item), assignment can be done in three ways. From Import Journal, automatically or manually from Invoice Card.

Manually from Import Journal. <br/>
Go to: ***Import Lines --> Line --> Item Charge Assignment***<br/>

![ExFlow Import journal - Import Lines - Item Charge Assignment](@site/static/img/media/image204.png)

![Item Charge Assign. (ExFlow Purch)](@site/static/img/media/image205.png)

Let ExFlow automatically assign Item Charge. Add an option on how to calculate assignment "Equally, By Amount, By Weight or By Volume" in field "Automatic Item Charge Assignment" under PO Matching in ExFlow
Setup.

![ExFlow Setup - PO Matching](@site/static/img/media/exflow-setup-po-matching-003.png)

If Automatically Item Charge Assignment is used, Charge (Item) will be assigned when running Verify Changes in Approval Status and it is no longer possible to assign manually from Import Journal.

Automatically Item Charge Assignment can also be set per vendor. Go to ExFlow Vendor Setup to assign a specific item charge option for a specific vendor, or to exclude a specific vendor (if this function is enabled in ExFlow Setup) by choosing option "None".

![ExFlow Vendor Setup - Automatic Item Charge Assignment](@site/static/img/media/exflow-vendor-setup-card-automatically-item-charge-001.png)

#### Deferral Schedule
Go to: ***Import Lines --> Line --> Deferral Schedule***<br/>
If a deferral template code is specified, click on Deferral Schedule to view/edit the deferral schedule for the selected document line. In ExFlow, Deferral Schedule is used for ExFlow approval document and not
the purchase invoice.

![ExFlow Imported Document - Deferral Schedule](@site/static/img/media/image211.png)

#### Get Interpreted Lines
Go to: ***Import Lines --> Line --> Get Interpreted Lines***<br/>
Use this function to retrieve lost or deleted interpreted lines. ExFlow will populate the invoice with interpreted lines from the OCR Import details.

If a user accidentally deletes all lines, it is possible to use "Get Interpreted Lines" to reset all changes made after import.

![ExFlow Imported Document - Get interpreted Lines](@site/static/img/media/image208.png)

#### Show Available Approval Rules
Go to: ***Import Lines --> Line --> Show Available Approval Rules***<br/>
This function displays all available approval rules for the selected document line.

![ExFlow Imported Document - Available Approval Rules](@site/static/img/media/image210.png)

#### Show Current Dimension Owners
Go to: ***Import Lines --> Line --> Show Current Dimension Owners***<br/>
View the ExFlow Dimension Owners for the current list of suggested approvers.

![ExFlow Imported Document - Show Current Dimension Owners](@site/static/img/media/image212.png)

#### Show Budget
If G/L Budget Control is activated, it is possible to view calculated.
Read more under section [***G/L Budget Control***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/gl-budget-control)

### FactBoxes in Import Journal
To the right in Import Journal there is useful FactBoxes.

#### PDF Preview
Change size on PDF Preview Press - / + to decrease or increase size of PDF.

![ExFlow Import Journal](@site/static/img/media/image215.png)

Reset size of FactBox Click "Restore".

![ExFlow Import Journal - PDF Preview](@site/static/img/media/image216.png)

"Zoom Out", "Zoom In" and Reset Zoom

![ExFlow Import Journal - PDF Preview](@site/static/img/media/image217.png)

Change PDF page No. use "Record Buttons".

![ExFlow Import Journal - PDF Preview](@site/static/img/media/image218.png)

Open PDF file in full size.

Go to: ***Related --> Files --> Show Document Image (Ctrl+I)***

#### Discussion Panel (Message will be sent when document is created)
When a comment has been added and sent in Discussion Panel from a document in Import Journal, it can only be seen in FactBox to the right marked with creating Users ID, Date and Time.

If a ExFlow User that is a system user is mentioned by using @, notification will show in Business Central when logging in. An email message can also be sent, but not until the document is created due to that ExFlow Web Users cannot see documents or comments in Import Journal.

On ExFlow Web the message will display in Chat on Document after it is created.

Read more about settings and how to use Discussion Panel under section [***Discussion Panel / Chat and Line Comments***](https://docs.exflow.cloud/business-central/docs/user-manual/approval-workflow/notifications-in-business-central#discussion-panel--chat-and-line-comments)

#### Incoming Document Files
Go to: ***FactBox --> Incoming Document Files --> Attach File***<br/>
Add Attach File

Click "Choose", browse to the file to attach, and click "Open".

![ExFlow Import Journal](@site/static/img/media/image219.png)

#### Approval Proposal
View Approvers for current Document Line.
From: ***Approval Proposal --> Show Approval Proposal***<br/>
Approvers can be added manually. This is only to be used in special occasions.

![ExFlow Import Journal, Fac Box, Approval Proposal](@site/static/img/media/image220.png)

![Approval Proposal](@site/static/img/media/image221.png)

#### Document Details
If the amount in document header and total amount on document lines do not have the same value, then document Details can help to see difference amount and if it is due to Direct Unit Cost excl VAT, Direct Unit Cost incl VAT, VAT amount or Prepayment.

![ExFlow Import Journal, FactBox, Approval Proposal](@site/static/img/media/image222.png)

#### Show Document Image (Ctrl + I) / Export pdf

When a document is created for approval the Document Image (PDF) can be viewed by using short commando (Ctrl+I) in following places:

- Purchase Invoice<br/>
- Purchase Credit Memo<br/>
- Posted Purchase Invoice<br/>
- Posted Purchase Credit Memo<br/>
- Vendor Ledger Entries<br/>
- Posted G/L Entries<br/>
- Posted VAT Entries<br/>
- ExFlow Import Journal<br/>
- ExFlow Approval Status<br/>
- ExFlow Approval Status History


In the last three places, it is possible to select multiple documents before the usage of shortcut Ctrl+I:

![Select multiple documents](@site/static/img/media/image223.png)

If multiple files are selected, then there is an option to save a compressed file containing pdf files for all the selected documents at a specified location. This is a great way to export many pdf if needed.

"Show Document Image" can also be reached from menu under Related.

### Warning Messages
If Action Message displays "There are warning messages not yet accepted!" the message is viewed in FactBox "Warning messages". Make appropriate changes or "Accept all warnings" as picture below.

![ExFlow Import Journal](@site/static/img/media/image224.png)

![ExFlow Import Journal, FactBox, Warning messages](@site/static/img/media/image225.png)

### Match Vendor's Currency
If ExFlow is needed to check that the currency code on each imported invoice matches the vendors default currency code, then the setting "Match Vendor's Currency" should be activated. Find the setting under Doc. Creation Checks in ExFlow Setup.

![ExFlow Setup - Doc. Creation Checks](@site/static/img/media/exflow-setup-doc-creation-checks-001.png)

When this setting is active, ExFlow will give a warning for each document in the Import Journal where the document currency differs from the vendors' default currency.

![ExFlow Import Journal](@site/static/img/media/image227.png)

![ExFlow Import Journal - Warning messages](@site/static/img/media/image228.png)

ExFlow compares the contents of the Currency field on the document in the Import Journal with the default currency on the vendor (i.e., the contents of the Currency field on the vendor card).<br/>
If the vendor has a blank (empty) currency, then ExFlow does not perform any validation.

### Delete G/L Account Lines with Line Amount = Zero
Go to: ***ExFlow Setup --> Doc. Posting Checks --> Delete G/L Account Lines with Line Amount = Zero***<br/>
If account lines with 0 (zero) line amount needs to be added to a document before creating it but not keep it when posting, then it is suitable to activate "Delete G/L Account Lines with Line Amount = Zero" in ExFlow Setup.

When this setting is enabled, any document lines with zero amount will be deleted before posting the document.

![ExFlow Setup - Doc. Posting Checks](@site/static/img/media/exflow-setup-doc-posting-checks-003.png)

### Applies-to-Document
There is a possibility to apply payments to a document. E.g., to apply an Invoice to a Credit Memo in Vendor Ledger Entries when posting the Credit Memo.<br/>
To use these fields, they must first be added by using personalize.

**Applies-to-Doc. Type** specifies the type of the posted document that this document or journal line will be applied to when posting, for example to register payment.

**Applies-to-Doc. No.** specifies the number of the posted document that this document or journal line will be applied to when posting, for example to register payment.

![ExFlow Import Journal](@site/static/img/media/image214.png)

### Allow VAT Difference
If Allow VAT Difference is activated in Purchases & Payables Setup, VAT Rounding can be added in Statistics in Import Journal before creating the document.<br/>
Max VAT Difference will be handled by settings in General Ledger Setup or from current Currency Code.

![ExFlow Import Journal - Purchase Invoice Statistics](@site/static/img/media/image229.png)

Via settings, ExFlow can assign VAT Difference automatically. Then VAT Difference will be proportionately distributed to all lines.

Activate **"Auto. Assign of VAT Diff. for Creation"** in ExFlow Setup under section Doc. Creation Check for Import Journal.

Activate **"Auto. Assign of VAT Diff. for Posting** in ExFlow Setup under section Doc. Posting Checks for Approval Status under Doc. Posting
Checks.

**Recommended to use both.**
ExFlow will then add VAT Difference automatically if the VAT difference is within settings in General Ledger Setup or from current Currency Code.

If the amount is changed during the approval flow, Business Central will delete the VAT Difference on updated line. Then ExFlow can automatically reassign when running Verify Changes in Approval Status.

If VAT amount on lines is changed manually on Card after document creation, then ExFlow will ask:

*"Do you want to update VAT Amount in ExFlow Approval Status from the VAT Amount of lines?"*<br/>
Answer Yes, to update total VAT Amount in Approval Status.

![Purchase Invoice or Credit Memo Card - Update VAT Amount](@site/static/img/media/image230.png)

**Recommended settings:**
If working with Automatic Assign of VAT Difference and Rounding on Invoices/Credit Memos when posting. Add NO VAT on G/L Account used for rounding.

VAT difference is not allowed on document that include lines with ONLY VAT. Only if VAT is calculated on lines.

Automatically Assign will override manually added VAT Amount in Statistics.

### Move Deferral Forward
Move Deferral Forward will automatically move Deferrals within closed deferral periods to next open when posting for Purchase Invoices and Purchase Credit Memos even if the document is active for ExFlow Approval or not.

E.g.
Allow Deferral Posting from 2023-01-15.

Create an Invoice with Deferral Schedule for three months and Start Date on Posting Date.

2023-01-15 // 5 000,00<br/>
2023-02-01 // 10 000,00<br/>
2023-03-01 // 10 000,00<br/>
2023-04-15 // 5 000,00

After monthly closing update Allow Deferral Schedule to 2023-02-01

When posting, Business Central will ask if you want to update Deferral Starting Date and update Posting Date to 2023-02-01.

If yes, then Business Central will move all periods forward.

2023-02-01 // 10 000,00<br/>
2023-03-01 // 10 000,00<br/>
2023-04-01 // 10 000,00

But if instead answer No and let ExFlow Move Deferral Forward, January will be added to February this this is the first allow posting period for Deferrals.

2023-02-01 // 15 000,00<br/>
2023-03-01 // 10 000,00<br/>
2023-04-15 // 5 000,00



### Utilize the Description 2- field

It is possible to use personalize and add the Description 2- field to the Import Journal lines. 

For PO matched invoices, the value in Purchase Line Description 2- field will flow from the PO/Receipt line to the corresponding import journal invoice line. 

Same for Cost/Expense invoices, the Description 2- field will be available in the import journal for users to manually enter text. 

![Description 2](@site/static/img/media/import-journal-description-2.png)

Any text entered in the Description 2- field will be visible in ExFlow Web. 

To add the Description 2 Web Column, go to **ExFlow Setup --> Edit Web Columns** and then click on ''Add Column''.

![Description 2](@site/static/img/media/exflow-web-columns-add-description-2.png)

Read more about Web Columns under section [***ExFlow Web.***](https://docs.exflow.cloud/business-central/docs/user-manual/technical/exflow-web#exflow-web)

