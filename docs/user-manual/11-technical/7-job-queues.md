---
title: Schedule ExFlow tasks in Job Queue Entries
sidebar_position: 7
hide_title: true
custom_edit_url: null
---
## Schedule ExFlow tasks in Job Queue Entries
 
Configure Job Queues in Business Central to fully utilize the capabilities of ExFlow. <br/> 

Read more about [***Job queues***](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/devenv-job-queue) and how to [***Use job queues to schedule tasks***](https://learn.microsoft.com/en-us/dynamics365/business-central/admin-job-queues-schedule-tasks) on the Microsoft Documentation page.<br/>

Additionally, it is encouraged to explore [***ExFlow Email Setup***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/exflow-email-setup) and [***Email Reminders***](https://docs.exflow.cloud/business-central/docs/user-manual/approval-workflow/email-reminders) for further information.

It is optional to assign the Job Queue Category Code *EXFLOW* on the Job Entry Card.<br/> 

A list of common jobs will be presented below:

| Process | Codeunit | Description |  Only in Default Company 
| :----------- | :-------------- | :-------------- | :-------------- | 
|**Subscription**	|12069666	|ExLPSubscriptionNAS <br/><br/> This job queue is needed for the ExFlow Subscription, do not delete this job. 	|Yes
|**Send Inbox Reminders**	|12057077	|Ex Email NAS <br/><br/>This job queue will send inbox reminders to current ExFlow Users who have  purchase documents to approve. <br/><br/> Use this Parameter String in the Job Queue Entry Card: INBOX REMINDER <br/> 	|Yes
|**Send Comment Notification Reminders**	|12057077	|Ex Email NAS <br/><br/> This job queue will send Comment Notification to the mentioned/tagged ExFlow User. <br/><br/> Use this Parameter String in the Job Queue Entry Card: Comment Notification <br/> 	|Yes
|**Send Unreceived Order Reminders**	|12057077	|Ex Email NAS <br/> <br/>This job queue will send Unreceived Order reminder when when receipt is missing on order related invoice <br/><br/> Use this Parameter String in the Job Queue Entry Card: UNRECEIVED ORDER <br/> 	|Yes
|**Send Contract Invoice Reminders**	|12057077	|Ex Email NAS <br/><br/> This job queue will send Contract Invoice Reminders send reminders if a contract is missing expected invoices. <br/><br/> Use this Parameter String in the Job Queue Entry Card: Contract Invoice Reminder <br/> <br/>	|Yes
|**Send Contract Reminders**	|12057077	|Ex Email NAS <br/><br/> This job queue will send reminders informing about contract expiration. <br/><br/> Use this Parameter String in the Job Queue Entry Card: Contract  Reminder <br/> 	|Yes
|**Send reminders for approved unreceived orders**	|12057077	|Ex Email NAS <br/><br/> This job queue will send reminders for approved unreceived orders. If matching invoices to Order then Receipt, the invoice can be matched to order, sent for- and approved without order receipt. But the invoice cannot be posted. In this case an email reminder for missing receipts will be sent. <br/><br/> Use this Parameter String in the Job Queue Entry Card: UNRECEIVEDORDERAPPROVED <br/><br/> The setting ''Send Unreceived Order Reminder on Approval'' must also be enabled in ExFlow Setup --> PO Matching --> Send Unreceived Order Reminder on Approval	|Yes
|**Send reminders for rejected orders**	|12057077	|Ex Email NAS <br/> <br/>This job queue will send reminders for rejected orders. <br/><br/> Use this Parameter String in the Job Queue Entry Card: REJECTED ORDER <br/> 	|Yes
|**Send reminders for rejected quotes**	|12057077	|Ex Email NAS <br/><br/> This job queue will send reminders for rejected quotes <br/><br/> Use this Parameter String in the Job Queue Entry Card: REJECTED QUOTE <br/> 	|Yes
|**Send reminders for rejected purchase invoices and credit memos**	|12057077	|Ex Email NAS <br/> <br/>This job queue will send reminders for rejected purchase invoices and credit memos <br/><br/> Use this Parameter String in the Job Queue Entry Card: REJECTED INVOICE <br/> 	|Yes
|**Send OMNI Reminders for OMNI documents**	|12057077	|Ex Email NAS <br/><br/> This job queue will send OMNI Reminders to system users that have OMNI approval rules and/or contracts to approve in OMNI Approval Status <br/><br/> Use this Parameter String in the Job Queue Entry Card: OMNI REMINDER <br/>	|Yes
|**Send reminders for on hold documents**	|12057077	|Ex Email NAS <br/> <br/>This job queue will send reminders for on hold documents <br/><br/> Use this Parameter String in the Job Queue Entry Card: ON HOLD <br/> 	|Yes
|**Send reminders for the approved quote/order to the creator of these documents**	|12057077	|Ex Email NAS <br/><br/> This job queue will send reminders for approved quote/orders to the creator of the quote/orders <br/><br/> Use this Parameter String in the Job Queue Entry Card: APPROVED ORDER/QUOTE <br/><br/> The setting ''Send Email For Approved Order/Quote'' must be enabled in ExFlow Setup --> Order and Quote Approval --> Send Email For Approved Order/Quote	|Yes
|**Automatically import documents to Import Journal**	|12013663	|Ex Create Import NAS <br/><br/> This job will imports documents to the Import Journals. This Codeunit 12013663 creates Codeunit 12057075 (Ex Import Docs. NAS)	|No
|**EDC Master Data Sync**	|12013659	|ExKFMasterDataSyncJob <br/><br/> This job handles the automated master data synchronization if ExFlow Data Capture Setup is used.	|No
|**OCR Master Data Sync**	|12013611	|Ex OCR - Sync Master NAS<br/> <br/>  This job handles the automated master data synchronization if OCR Service Setup is used. This Codeunit (12013611) creates Codeunit 12057093 (Ex OCR - Sync Master NAS).  <br/> <br/> If needed, activate  the setting ''Disable Standard Sync Master Data Job'' under  ''ExFlow Setup --> OCR Import'' to prevent the BC standard 882 job (OCR - Sync Master Data) from being created automatically.	|No
|**Verify and post documents**	|12013671	|Ex Verify & Post Job Queue <br/><br/> If ''Verify with Job Queue is enabled in ExFlow Setup, then a job will be be scheduled to run in the background to verify approved documents. If the setting ''Verify & Post with Job Queue '' is also activated, then the job will post documents with status Ready for Posting, after verification.<br/><br/> These settings can be found in: ExFlow Setup --> Background Processing --> Verify with Job Queue/Verify & Post with Job Queue	|No
|**Create self-billing documents via ExFlow Contracts**	|12026814	|Ex Self-billings Docs  NAS <br/><br/> Creates self-billing invoices if the ''Self-Billing Recurring Job Que Entry Active'' is enabled in ExFlow Contract Setup and the ''Self-Billing Invoice'' is activated on the  ExFlow Contract.	|No
| **Create Sales Invoices created via Re-Invoicing Documents**	|12068782	|Ex ReInv Create Sales Invoice <br/><br/> Automatically creates sales documents from Re-Invoicing documents. <br/><br/> Background Processing must be enabled in ExFlow Re-invoicing Setup	|No
|**Update ExFlow G/L Budget Totals from General Ledger Entries**	|12026818	|ExFlow Budget Control Recurring Job <br/> <br/> Update ExFlow G/L Budget Totals from General Ledger Entries can be done when posting from Approval Status or by setting up this job queue. The totals are used to summarize all G/L Entries per Year, Month and Global Dimension Combination.	|No
|**Import documents from File Storage**	|12057156	|Ex File Import Mgt <br/><br/> This job imports document from sources such as a Local File System and Azure Storage. (Please note: using Web Services for import is initiated externally and not by ExFlow or any Job Queue Entries.) <br/><br/> Configuration is needed in ExFlow File Import Setup and a dedicated Import Journal must be set with correct Source Type and Import File Code in the ExFlow Import Journals list.	|Yes
|**Storage Management for Incoming Documents**	|12026820	|Ex Storage Mgmt. NAS <br/><br/> External blob storage of incoming documents (Azure Container or SharePoint in ExFlow Storage Setup). <br/><br/> This can be setup under ExFlow Setup--> Actions--> Functions--> Blob Storage Mgmt. 	|Yes
|**Import ExFlow Sales Order**	|12013681	|ExSOImportManagement <br/><br/> This job handles import of Sales Documents from ExFlow Data Capture	|No
