---
title: Email Reminders
sidebar_position: 10
hide_title: true
custom_edit_url: null
---
## Email Reminders
Please note that a Business Central standard Email Account must be set to be able to receive ExFlow emails. More information about this can be found at [***Microsoft Documentation***](https://learn.microsoft.com/en-us/dynamics365/business-central/admin-how-setup-email). For assistance regarding this, please contact your trusted Dynamics 365 Business Central implementation partner.


To be able to send emails to ExFlow Users there are some settings needed.<br/>

Job Queue Entry setup should only be done in **Default Company**.


### Inbox Reminder
To send reminders that ExFlow Users have documents to approve, following setup is needed in all companies.

| Inbox Reminder |  | 
|:-|:-|
| Email Account         | Add Email Account Setup in all companies              
| ExFlow Email Setup    | Email Type **Inbox Reminder**. in all companies<br/>Read more under section [***ExFlow Email Setup - Inbox Reminder***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/exflow-email-setup#inbox-reminder)
| ExFlow Users          | Activate for **Email Reminder --> Unapproved Documents**. <br/>Read more under section [***ExFlow Users***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/exflow-user#email-reminders) for setup.
| Job Queue Entry       | Code Unit 12057077 and Parameter String **INBOX REMINDER** in default company
| Selected Documents    | Approval Status, select one or several documents and use function ***Send Reminder***
| Selected Approvers    | ExFlow Users, select one or several users and use function ***Send Reminder***
<br/><br/>

### Comments Notification / Discussion Panel / Chat
To send an email when an ExFlow Users is mentioned by using @ and "ExFlow User Code", it is possible to send email to the tagged Approver, but then following setup is required in **Default Company**.

| Comments Notification |  |
|:-|:-|
| Email Account         | Add Email Account Setup in default company
| ExFlow Email Setup    | Email Type **Comment Notification** in default company.<br/>Read more under section [***ExFlow Email Setup --> Comment Notification - Chat***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/exflow-email-setup#comment-notification---chat)
| ExFlow Users          | Activate for **Email Reminder --> Discussion Panel**<br/>Read more under section [***ExFlow Users***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/exflow-user#email-reminders) for setup
| Job Queue Entry       | Code Unit 12057077 and Parameter String **COMMENT NOTIFICATION** in default company
<br/><br/>


### Unreceived Order
To send reminder when receipt is missing on order related invoice. Then following setup is needed in all companies.

| Unreceived Order |  |
|:-|:-|
| Email Account             | Add Email Account Setup in all companies
| ExFlow Email Setup        | Email Type **UNRECEIVED ORDER** in all companies <br/> Read more under section [***ExFlow Email Setup --> Unreceived Order***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/exflow-email-setup#unreceived-order)
| ExFlow Users              | Connect ExFlow User to a Purchaser Code <br/>This is done on ***ExFlow Users --> Permissions*** and per company.<br/>Read more under section [***ExFlow Users***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/exflow-user#add-a-new-user-manually) for setup
| Import Journal            | Invoice needs to have Boolean ticked in ***Matched Against Purchase Order***<br/>Add Order No. in header or on lines if using line interpretation| Job Queue Entry | Add Job Queue Entry in default company <br/>Code Unit 12057077 and Parameter String **UNRECEIVED ORDER** <br/>This job will only send one reminder per invoice
| Job Queue Entry           | Code Unit 12057077 and Parameter String **UNRECEIVED ORDER** in default company
| Send Reminders Manually   | Use function under ***Import Journal --> Actions --> Email***
| Selected Documents        |  Select documents in Import Journal and go to ***Import Journal --> Actions --> Email*** <br/>Read more under section [***Import Journal***](https://docs.exflow.cloud/business-central/docs/user-manual/approval-workflow/exflow-import-journals#batch-send-receipt-reminders)
<br/><br/>


### Contract Reminder
To send a reminder that contract expires, then following setup is needed only in default company.

| Contract Reminder |  |
|:-|:-|
| Email Account         | Add Email Account Setup in all companies
| ExFlow Email Setup    | Email Type **Contract Reminder** in all companies <br/>Read more under section [***ExFlow Email Setup --> Contract Reminder***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/exflow-email-setup#contract-reminder)
| ExFlow Contract       | Add Approval Group in ***Contract --> Contract Reminder --> User to Remind*** <br/>Add Contract Reminder Period when to send reminder (-1M reminder will be sent 1 month before Valid to Date under General Terms) <br/>Read more under section [***Contracts***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/contract) for setup.
|Job Queue Entry        | Code Unit 12057077 and Parameter String **CONTRACT REMINDER** in default company<br/>This job will only send one reminder per contract
<br/><br/>

### OMNI Reminder
OMNI Approval is a function to approve approval rules and contracts.
When a new rule or contract is created or changed it might have to be approved. Read more under section [***OMNI Approval***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/omni-approval)


| OMNI Reminder |  |
|:-|:-|
| Email Account         |  Add Email Account Setup in all companies
| ExFlow Email Setup    | Email Type **OMNI Approval** in all companies <br/>Read more under section [***Email Setup - OMNI Approval***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/exflow-email-setup#omni-reminder)
| Job Queue Entry       | Code Unit 12057077 and Parameter String **OMNI REMINDER** in default company
<br/><br/>


### Rejected Order, Rejected Quote, Rejected Invoice/Credit Memo
To send an email when a document is rejected, following setup is needed:

| Rejected Documents |  |
|:-|:-|
| Email Account         | Add Email Account Setup in all companies
| ExFlow Email Setup    | Email Type **Rejected Order, Rejected Quote**, or/and ***Rejected Invoice/Credit Memo*** in all companies <br/>Read more under section [***Email Setup - Rejected Order***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/exflow-email-setup#rejected-order), [***Rejected Quotes***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/exflow-email-setup#rejected-quote) or/and [***Rejected Invoice/Credit***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/exflow-email-setup#rejected-invoicecredit)
| Approval Status       | Documents need to have status rejected and all lines need to be handled before the document status will be updated
| Job Queue Entry       | Code Unit 12057077 and Parameter String **REJECTED ORDER** <br/>Code Unit 12057077 and Parameter String **REJECTED QUOTE** <br/>Code Unit 12057077 and Parameter String **REJECTED INVOICE** <br/>Add Job Queue Entry only in default company <br/>The job will send one email per document.
<br/><br/>


### Contract Invoice Reminder
To send reminders if a contract is missing expected invoices, following setup is needed:

| Contract Invoice Reminder |  |
|:-|:-|
| Email Account                 | Add Email Account Setup in all companies
| ExFlow Email Setup            | Email Type **Contract Invoice Reminder** in all companies<br/>Read more under section [***Email Setup --> Contract Invoice Reminder***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/exflow-email-setup#contract-invoice-reminder)
| ExFlow Contract               | Add invoice periods and active for Invoice Reminders
| Job Queue Entry               | Code Unit 12057077 and Parameter String **CONTRACT INVOICE REMINDER** in default company <br/>The job will send one reminder per contract invoice period
| Manually per Contract         | Go to selected ***Contract Card --> Related --> Show Missing Contract Invoices*** <br/>In new page ***Actions --> Send Contract Reminder***
| Manually for all Contracts    | Go to ***Contracts list --> Related --> Show Missing Contract Invoices*** <br/>In new page ***Actions --> Send Contract Reminder*** <br/>List will show all expected reminders but only send reminders if Invoice Reminder is active
<br/><br/>


### Unreceived Order - Approved
If matching invoices to Order then Receipt, the invoice can be matched to order, sent for- and approved without order receipt. But the invoice cannot be posted.
In this case an email reminder for missing receipts can be sent.

To send this reminder setup is needed:

| Unreceived Order - Approved |  |
|:-|:-|
| Email Account                 | Add Email Account Setup in all companies
| ExFlow Email Setup            | Email Type **Unreceived Order - Approved** in all companies <br/>Read more under section [***Email Setup --> Unreceived Order - Approved***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/exflow-email-setup#unreceived-order---approved)
| Approval Status               | Invoices need to have status approved and matched to order without posted receipt
| Job Queue Entry               | Code Unit 12057077 and Parameter String **UNRECEIVEDORDERAPPROVED** <br/>In default company
| Manually from Approval Status | Select invoices and ***Related --> Approval Status --> Send Unreceived Order Notification***
|ExFlow Setup| The setting ''Send Unreceived Order Reminder For Approved Order'' must also be enabled in **ExFlow Setup --> PO Matching --> Send Unreceived Order Reminder For Approved Order** 
<br/><br/>


### On Hold Reminder
To send an email when a document is set on hold, following setup is needed:

| On Hold |  |
|:-|:-|
| Email Account                 | Add Email Account Setup in all companies
| ExFlow Email Setup            | Email Type **On Hold Reminder** in all companies <br/>Read more under section [***Email Setup --> On Hold***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/exflow-email-setup#on-hold-reminder)
| Approval Status               | Document need to have status on hold
| Job Queue Entry               | Code Unit 12057077 and Parameter String **ON HOLD** <br/>In default company
<br/><br/>



### Approved Order/Quote
To send an email to the purchase order/quote creator when their order/quote is approved, following setup is needed:

| Approved Order/Quote|  |
|:-|:-|
| Email Account                 | Add Email Account Setup in all companies
| ExFlow Email Setup            | Email Type **Approved Order/Quote** in all companies <br/>Read more under section [***Email Setup --> Approved Order/Quote***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/exflow-email-setup#approved-orderquote)
| Approval Status               | Reminder will be sent when document get status Approved
| Job Queue Entry               | No job queue
|ExFlow Setup| The setting ''Send Email For Approved Order/Quote'' must also be enabled in **ExFlow Setup --> Order and Quote Approval --> Send Email For Approved Order/Quote** 
<br/><br/>

