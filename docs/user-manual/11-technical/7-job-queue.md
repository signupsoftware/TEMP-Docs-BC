---
title: Schedule ExFlow tasks in Job Queue Entries
sidebar_position: 7
hide_title: true
custom_edit_url: null
---
## Schedule ExFlow tasks in Job Queue Entries

Read more about [***Job queues***](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/devenv-job-queue) and how to [***Use job queues to schedule tasks***](https://learn.microsoft.com/en-us/dynamics365/business-central/admin-job-queues-schedule-tasks) on Microsoft Documentation page.

Setup Job Queues in Business Central to get the best of ExFlow. It is possible to set the optional *Job Queue Category Code* called *EXFLOW* on the Job Entry Card. 

A list of  common jobs will be listed below:


| Activity | Codeunit | Description |  Only in Default Company 
| :----------- | :-------------- | :-------------- | :-------------- | 
|**Subscription**|  12069666| ExLPSubscriptionNAS <br/> ExFlow Subscription. Do not delete this job. |Yes
|**EDC Master Data Sync**| 12013659|	ExKFMasterDataSyncJob <br/>	Automated master data synchronization |No
|**OCR Master Data Sync**|12013611|Ex OCR - Sync Master NAS. <br/>  Upload vendors to ExFlow Data Capture. This codeunit (12013611) creates Codeunit 12057093. |No
|12013663|	Ex Create Import NAS|	Imports documents to Import Journals. This Codeunit 12013663 creates Codeunit 12057075. When this job is scheduled, manually import of document to Import Journal will be prevented.
|12057075|	Ex Import Docs. NAS|	Import documents to import journals. Created by Codeunit 12013663 
|12013671|	Ex Verify & Post Job Queue|	Specifies if verification of approved documents should be scheduled to run in the background. Will by default be configured to run once every hour. Specifies if documents with status Ready for Posting should be posted after verification. These settings can be found at ExFlow Setup ->Background Processing ->Verify with Job Queue/Verify & Post with Job Queue. <br/><br/> Read more about this under section XXXXXX
|Send Inbox Reminders |12057077|	Ex Email NAS <br/> This job can be set in the default company to enable several reminder jobs such as: <br/><br/> Send Inbox Reminder --> Use Parameter String: INBOX REMINDER,<br/>
|Email Reminders |12057077|	Ex Email NAS <br/> This job can be set in the default company to enable several reminder jobs such as: <br/><br/> Send Inbox Reminder --> Use Parameter String: INBOX REMINDER,<br/>



<br/> comment notifications, unreceived orders, contract invoice reminders, contract  reminders, approved Order/Quote, approved unrecived orders, OMNI reminders, on hold reminders and rejected purchase documents reminders. Recommended to add the parameter string (for example: INBOX REMINDER) into the Description field to distinguish the job queues.	INBOX REMINDER <br/><br/>  Comment Notification <br/><br/> Unreceived Order<br/><br/> Contract Invoice Reminder<br/><br/> Contract  Reminder<br/><br/> UNRECEIVEDORDERAPPROVED<br/><br/>REJECTED ORDER<br/><br/>REJECTED QUOTE<br/><br/>REJECTED INVOICE<br/><br/>OMNI REMINDER<br/><br/> ON HOLD <br/><br/>APPROVED ORDER/QUOTE <br/> <br/><br/>Read more about this under sections [***ExFlow Email Setup***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/exflow-email-setup#exflow-email-setup) and [***Email Reminders***](https://docs.exflow.cloud/business-central/docs/user-manual/approval-workflow/email-reminders#email-reminders). |Yes
