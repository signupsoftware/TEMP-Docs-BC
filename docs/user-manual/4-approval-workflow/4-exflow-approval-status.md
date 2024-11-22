---
title: ExFlow Approval Status
sidebar_position: 4
hide_title: true
custom_edit_url: null
---
## ExFlow Approval Status

Go to: ***ExFlow Approval Status***

As mentioned, when a document is created from the ExFlow Import Journal, the document can be found in Approval Status.

![ExFlow Approval Status](@site/static/img/media/menu-001.png)

Approval Status show all invoices that are out for approval and/or are approved and ready to be posted. An administrator can see information regarding status. Both for the Invoice as well as the next approver for this specific Invoice.

In this example Anders Andersson has approved all his lines and Bertil Boo is current approver.

![ExFlow Approval Status](@site/static/img/media/approval-status-003.png)

### Highlight rejected and overdue documents

To make it easier to see documents that have been rejected or are close to due date, there is a possibility to activate a setting in ExFlow Setup to highlight these documents in Approval Status with red font.

![ExFlow Approval Status](@site/static/img/media/approval-status-004.png)

### Setup Highlight rejected and overdue documents
Go to: ***ExFlow Setup - Escalation***

Enable *"Highlight Rejected and overdue documents"* to activate the setting.

Enter a number in *"No. of Overdue Days before highlight"* to specify how many days before the due date the documents should be highlighted.

This setting operates in relation with the due date of the document and the users work date "0" will highlight the document on the due date.

![ExFlow Setup - Escalation](@site/static/img/media/exflow-setup-escalation-001.png)

### Send email reminders for rejected documents
Go to: ***ExFlow Email Setup***

It is possible to send email reminders for rejected ExFlow approval documents if a quote, order, invoice, and/or credit memo gets rejected. To be able to send reminders for rejected approval documents, the document status needs to be "Rejected" in Approval Status.

Read more under section [***ExFlow Email Setup --> Rejected Order, Rejected Quote, and Rejected Invoice/Credit***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/exflow-email-setup#rejected-order,-rejected-quote,-and-rejected-invoice/credit)


### Verify Changes
When document is approved, status is updated to "Approved". But still the document needs to be verified. Click on "Verify Changes" to see if an approver on ExFlow Web have made any changes.

If no filter is set in the Approval Status view, then the function "Verify Changes" acts on all documents with a status of "Approved". If there is an active filter (for example, only documents for a specific vendor are shown) then "Verify Changes" will only be applied to the
documents in the filtered view. Any approved documents outside the filter will still have a status of Approved.

Using a filter on Document Type in Approval Status, set to exclude Order and Quote from being verified, can be beneficial if a system user wants to only verify other Document Types like Invoice or Credit Memo.

![Approval Status - Verify Changes](@site/static/img/media/image244.png)

ExFlow Verify Changes will show all lines that have been changed on ExFlow Web. Both Registered Value in red and Updated Value in Black on the document lines.

Lines without changes will get Change Status "No Change".

Use Update Document to update Document Card for a specific document or Update All. When all documents are updated, the page will close automatically.

"Document Approval Card" will open the final approved ExFlow card.

Open the "Card" to get into the original Business Central standard Purchase document card.

The PDF viewer (FactBox) shows the document image. There is also a possibility to utilize Ctrl+I to download the document image or go via Related --> Show Document Image.   

![Approval Status - Verify Changes](@site/static/img/media/image245.png)

If there are no changes done on ExFlow Web, status will automatically update to "Ready for posting" in Approval Status.

There is a possibility to skip the step "Verify Changes" in Approval Status page if no changes were made on the document which was approved. In such case "Verify Changes" action will be run automatically and the document status will be changed to "Ready for posting". 

This feature can be enabled in ExFlow Setup under **Background Processing** by activating **Verify Changes Done Automatically**.

![ExFlow Setup - Verify Changes Done Automatically](@site/static/img/media/exflow-setup-background-processing-001.png)

This feature can also be found (and setup per vendor) in **ExFlow Vendor Setup**.

Furthermore, another function called Bypass Verify Changes can be utilized by the AP staff. Read more about this under section [***Bypass Verify Changes***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/bypass-verify-changes) 

### Reject changes in Verify Changes
Approval process can be restarted from selected Approver on "ExFlow Verify Changes" page. This function is found on the Approvers FactBox.

![ExFlow Verify Changes](@site/static/img/media/verify-changes-001.png)

Restart Approval Process function has two options.

* **Restart from marked Approver** - restart the marked “Document Lines” from marked Approver.<br/>
* **Restart from marked Approver for all lines** - restart all “Document Lines” connected to marked Approver.

![Restart Approval Process](@site/static/img/media/restat-from-marked-approver-001.png)

After selecting one of the possible options Discussion Panel Dialog box is opened where a comment can be left for Approver.

![Discussion Panel Dialog](@site/static/img/media/discussion-panel-dialog-001.png)

The comment will be saved in Discussion Panel in Approval Status and approver can see comment in Chat on ExFlow Web. Also, if setup is done, the approver can receive an email.

![Approval Status](@site/static/img/media/approval-status-002.png)



### Post Batch

Go to: ***Post Batch***

After Verify Changes, the document is now ready for posting.

To Batch Post all documents that are Ready for Posting use Post Batch.

![Batch Post Purchase Documents](@site/static/img/media/image247.png)

To update Posting Date on all documents, add a new date in field Posting Date and activate Replace Posting Date.

![Batch Post Purchase Documents](@site/static/img/media/image248.png)

If one or several documents have Deferral Code when using Replace Posting Date, following question will occur:

![Message when Batch Post Purchase Documents](@site/static/img/media/batch-create-post-message-001.png)

**Yes:** To update Deferral Starting date according to settings on Deferral Code for all document lines.
**No:** To keep Deferral Starting date as created on all document lines.

### Post Document

Go to: ***Action \--\> Posting \--\> Post (F9)***

To post one document at a time, use Post (F9).

There is also an option to manually select multiple documents and Post Batch to post all marked documents. Use "Select More" to manually choose the documents to be posted.

![Select More](@site/static/img/media/image249.png)

Then click on Post Batch to proceed with posting.

![Select and post multiple documents](@site/static/img/media/image250.png)

### Preview Posting

Go to: ***Approval Status \--\>*** ***Actions \--\> Posting \--\>
Preview Posting***

Use "Preview Posting" to review entries that will be created from current data on Card before the actual posting. Preview Posting can be used for all document status, not only for documents with status \"Ready for posting\". To Preview Posting during approval flow use "Force Update on Purchase Document" to update Card.

### Preliminary Posting
If Preliminary Posting is activated, then Posting, Preview Posting, Reverse and Find Entries can be done from Approval Status.
Go to: ***Approval Status --> Actions --> Posting --> Preliminary Posting***
Read more under section [***Preliminary Posting***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/preliminary-posting) 

### Send Reminder

Send Reminder for this document to current approvers for all lines on one Purchase Document.

![ExFlow Approval Status- Send Reminder](@site/static/img/media/image251.png)

### Send Reminder for multiple documents
Use "Select More" to mark several documents and click on "Send Reminder". Reminders will then be sent to all current approvers for these chosen documents.

![ExFlow Approval Status - Send Reminder](@site/static/img/media/image252.png)

Following message will then pop up:

![ExFlow Approval Status- Send Reminder](@site/static/img/media/image253.png)

### Open PDF- Viewer in New Tab

It is possible to open the PDF in a new tab. The ExFlow web URL must be set in the ExFlow Email Setup (Email Type "Inbox Reminder") in the default company.

Read more under section [***ExFlow Email Setup***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/exflow-email-setup#inbox-reminder) 

![ExFlow Approval Status- Open PDF - Viewer in New Tab](@site/static/img/media/image254.png)

### Force Update on Purchase Document

If changes are needed during the approval process, user function "Force Update on Purchase Documents" to update Card. Now changes can be done in the Card without deleting changes done from ExFlow Web.

Use Update Document to update Document Card for the chosen document. When the document is updated, the page will close automatically.

![ExFlow Approval Status - Force Update of Purchase Document](@site/static/img/media/image255.png)

### Filter on approver

Filter on a specific approver (approval group) and Status in the Approval Status list.

![ExFlow Approval Status- Filter on approver](@site/static/img/media/image256.png)

### Show Document Image
To download or open PDF
Go to: ***Approval Status --> Related --> Files --> Show Document Image***


### Show Import Details
To show import details
Go to: ***Approval Status --> Related --> Files --> Show Import Details***


### Import or Replace Image
To import or replace PDF
Go to: ***Approval Status --> Related --> Files --> Show Document Image***


### Handle Rejected Invoice / Restart Approval Flow

This is to be used when the correct approval workflow has been selected but for some reason it needs to be restarted (for example a rejection).

If document is rejected on ExFlow Web the approver must add a comment that will be saved on the Approver Line, and the document needs to be
handled in Business Central.

When using automatic Approval Rules, the recommended option is instead to update the data on the invoice card. Then ExFlow will automatically
assign a new approval workflow based on the new data.

Another way is to restart the approval flow on the line by clicking "Restart route". Or insert a new Approver manually after Approver that have rejected the document. The new Approver will receive status Current and can then view the rejected Approver's comment.

This function is found on the section "Document Lines".<br/>
***Document Lines \--\> Line \--\> Restart route***

![ExFlow Approval Status - Document Lines](@site/static/img/media/image257.png)

Restarting the route from Document Lines has two options.

**Restart line** - restart the "Document Lines", all the connected "Doc.
Line Approvers" lines.

**Restart all lines** - restart all "Document Lines" and all connected
"Doc. Line Approvers" lines.

![Restart Route](@site/static/img/media/image258.png)

To restart from marked approver on one or all lines.<br/>
Go to: ***Doc. Line Approvers \--\> Restart route.***

![ExFlow Approval Status - Doc. Line Approvers](@site/static/img/media/image259.png)

**Restart line** - restart the "Document Lines", all the connected "Doc.
Line Approvers" lines.

**Restart all lines** - restart all "Document Lines" and all connected
"Doc. Line Approvers" lines.

**Restart from marked Approver** - restart from marked approver on
marked line.

**Restart from marked Approver for all lines -** e.g. two "Document lines" with three approvers, all lines approved, restart standing on the second approver this option will restart all "Document Lines" from the same user on lines that contains this user. If this user occurs more than ones the rout will restart from users first line.

![Restart Route](@site/static/img/media/image260.png)

### Change Approval Flow
Select line and go to: ***Document Lines \--\> Line \--\> Approval.***

![ExFlow Approval Status - Document Lines](@site/static/img/media/image261.png)

A new window will open the Invoice line card (title; EDIT - APPROVAL).

Add and/or remove approvers on the "Approver Lines" if needed by
clicking Manage.

**Propose new approvers**<br/>
Propose new approvers will delete current and add new approver/approvers from new Approval Rule.

**Copy to all lines**<br/>
If a document contains many documents lines, "Copy to all lines" helps copying the Approval Group (from one line) to all lines.

### Change G/L Account during approval
Go to: ***ExFlow Approval Status \--\> Card***

Changing the number (removes the old number and adds the new) on a G/L Account, that has an approval flow, will remove it, and insert a new if applicable.

### Delete a Purchase Invoice in Approval Status
Go to: ***Purchase Invoice/Purchase Credit Memo***

When the document is created but not posted, deleting follows the Business Central standard.

Go to Purchase Invoice/Purchase Credit Memo by clicking "Card" and delete. Approval status card will be saved with Invoice No. In "ExFlow
Deleted Documents".

Posted Purchase Invoices should not be deleted. Start by creating a Credit Memo that neutralizes the Invoice. Then, create a new Purchase Invoice if needed.

### FactBoxes in Approval Status
To the right in Approval Status there is useful FactBox.

**PDF Preview**<br/>
Change size on PDF Preview Press - / + to decrease or increase size of PDF.

![ExFlow Approval Status](@site/static/img/media/image262.png)

Reset size of FactBox Click "Restore".

![PDF Preview](@site/static/img/media/image263.png)

"Zoom Out", "Zoom In" and Reset Zoom

![PDF Preview](@site/static/img/media/image264.png)

Change PDF page No. use "Record Buttons".

![PDF Preview](@site/static/img/media/image265.png)

Open PDF file in full size.<br/>
Go to: ***Navigate \--\> files \--\> Show Document Image (Ctrl+I)***

**Incoming Document Files**<br/>
View and add Attach File.

To attach a document without replace Main Attachment.<br/>
Go to: ***FactBox \--\> Incoming Document Files \--\> Attach File***<br/>

Click "Choose", browse to the file to attach, and click "Open".

![ExFlow Approval Status - Incoming Document Files](@site/static/img/media/image266.png)

It can also be done from Incoming Document in Business Central standard.

**Change PDF Document Image**<br/>
If PDF Image needs to be change it can be done before posting the
document.<br/>
Go to*: **Navigate \--\> Files \--\> Import or Replace Image***

It can also be done from Incoming Document in Business Central standard.

**Discussion Panel**<br/>
When adding a comment in Discussion Panel from Approval Status and click SEND the comment can be seen in FactBox to the right marked with creating Users ID, Date and Time. On ExFlow Web it will display in Chat on the Document.

If a user is mentioned by using @ the user will be able to see this document and comment on ExFlow Web even if the user is **not** in the approval flow.

![ExFlow Approval Status - Discussion Panel](@site/static/img/media/image267.png)

Read more about settings and how to use Discussion Panel under section: [***Notifications in Business Central \--\> Discussion Panel / Chat and Line Comments***](https://docs.exflow.cloud/business-central/docs/user-manual/approval-workflow/notifications-in-business-central#discussion-panel--chat-and-line-comments).

### Read Comments from Approvers

When a web approver adds a comment on Chat in header and click "SEND" the comment can be seen in FactBox to the right marked with approvers ID, Date and Time. 


Document will also have a tag in header "Comment in Discussion Panel" if there are any comments made from ExFlow or ExFlow Web.

![ExFlow Approval Status](@site/static/img/media/image268.png)

When a web approver adds a comment on a line the comment will be seen on "Doc. Line Approvers" in field "Comment".

![ExFlow Approval Status - Doc Line Approvers](@site/static/img/media/image269.png)

Read more about settings and how to use Discussion Panel under section: [***Notifications in Business Central \--\> Discussion Panel / Chat and Line Comments***](https://docs.exflow.cloud/business-central/docs/user-manual/approval-workflow/notifications-in-business-central#discussion-panel--chat-and-line-comments).

### Attach File from Purchase Invoice or Purchase Credit Memo

Attachment made from Purchase Invoice and Purchase Credit Memo Card in Business Central Standard will not show in ExFlow. Therefore, we recommend that Incoming Document Files in FactBox from Approval Status is used instead.

### Background Processing

Go to ***ExFlow Setup \--\> Background Processing***

Following settings only applies to documents without changes.

If there are any changes done from ExFlow Web, they still need to be updated manually in Approval Status by running Verify Changes.

**"Verify with Job Queue"** and **"Verify & Post with Job Queue"**.<br/>
Tick one of these settings to automatically create a Job Queue that will "Verify" or "Verify and Post"' approved invoices, without Changes from ExFlow Web, in Approval Status.

**"Verify Changes Done Automatically"** Will update documents with status "Approved" to "Ready for Posing" without Job Queue Entry.

![ExFlow Setup - Background Processing](@site/static/img/media/exflow-setup-background-processing-002.png)

Job Queue "Ex Verify & Post Job Queue" is configured to run every hour on weekdays by default, when enabling one of the mentioned Background Processing settings in ExFlow Setup.

When the function gets disabled, the Job Queue "Ex Verify & Post Job Queue" will disappear from the "Job Queue Entries" list.

![Job Queue Entry Card - Verify & Post with Job Queue](@site/static/img/media/image271.png)

**Verify with Job Queue**<br/>
This setting specifies if verification of approved documents should be scheduled to run in the background. This will only apply for documents without changes on ExFlow Web.

![ExFlow Setup - Background Processing - Verify with Job Queue](@site/static/img/media/exflow-setup-background-processing-003.png)

**Verify & Post with Job Queue**<br/>
Specifies if documents with status "Ready for Posting" in Approval Status should be scheduled to run in the background and post documents after verification.

![ExFlow Setup - Background Processing - Verify & Post with Job Queue](@site/static/img/media/exflow-setup-background-processing-004.png)

All "ExFlow web - changed" documents, that requires to be updated in ExFlow Verify Changes in Approval Status, will be excluded from this scheduled job. A message in Error Message field in the ExFlow Approval Status will be visible on these non-updated documents.

**Verify Changes Done Automatically**<br/>
This setting allows to skip the step "Verify Changes" in Approval Status page if no changes were made on the approved document. Document status is automatically changed to "Ready for Posting".

![ExFlow Setup - Background Processing - Verify Changes Done Automatically](@site/static/img/media/exflow-setup-background-processing-005.png)

The "Verify Changes Done Automatically" setting can also be found in ExFlow Vendor Setup. It is possible to choose if this feature should be enabled/disabled for a specific vendor. Or enable the setting in ExFlow Setup for all vendors. Read more about this functionality under section **Verify Changes**.

![ExFlow Advanced Vendor Options - Verify Changes Done Automatically](@site/static/img/media/Vendor-setup-card-006.png)

**Automatically Create Documents**

Enable this box if all interpreted documents should be automatically created
from the ExFlow Import Journal. This function can also be setup per vendor in Vendor Setup if a specific vendor's documents (for instance) should be excluded from this setting.

If the function is enabled then all interpreted documents with no errors or warning messages will be automatically created and sent for approval.

![ExFlow Setup - Background Processing - Automatically Create Documents](@site/static/img/media/background-processing-automatically-create-001.png)

It is possible to personalize the ExFlow Import Journals list page and add + enable the column "Automatically Create Documents" there, to have one dedicated journal for automatically create documents.

This function can be used without any setup on ExFlow Import Journal, simply click on Yes to below pop up:

![ExFlow Setup - Background Processing - Automatically Create Documents](@site/static/img/media/background-processing-automatically-create-002.png)

Read more about this under section [***Batch Import Documents from Interpretation***](https://docs.exflow.cloud/business-central/docs/user-manual/approval-workflow/exflow-import-journals#batch-import-documents-from-interpretation)


### Invoice Rounding

If Invoice Rounding is activated in ***Business Central \--\> Purchase & Payables Setup\--\> General***, then ExFlow has support to automatically post invoice rounding to match the Gross Amount on the document.<br/>

Go to: ***ExFlow Setup \--\> Doc. Posting Checks***

Activate "Invoice Rounding" and add value in "Max Difference for Gross Amount". Also make sure the "Check Gross Amount" setting is ticked as well.

ExFlow makes a control between the gross amount on the purchase document head and the document line amount. A rounding line will be created if the gross amount difference is within "Max Difference for Gross Amount" tolerance when posting. Posting is done as per standard Business Central settings.

![ExFlow Setup - Doc. Posting Checks - Invoice Rounding](@site/static/img/media/exflow-setup-doc-posting-checks-001.png)

If SweBase (for Swedish customers) is installed, rounding will be handled by SweBase and ExFlow Rounding can only be done for Preliminary Posting. 

Read more under section [***Preliminary Posting***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/preliminary-posting)



### View Current Replacer on the Document Lines

On the Document Lines in Approval Status, it is possible to see who the current replacer is for the current approver.

![Current Replacer](@site/static/img/media/approval-status-replacer-001.png)


Read more about how to work with replacers under section [***Add a Replacer During Vacation Time***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/exflow-user#add-a-replacer-during-vacation-time)