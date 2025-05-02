---
title: Periodic Activities
sidebar_position: 50
hide_title: true
custom_edit_url: null
---
## Periodic Activities

### Escalation Job

Go to: ***Periodic Activities \--\> ExFlow Escalation Job***

To run Escalation job, it needs to be activated.

This job will automatically approve the user's overdue documents and add
a new approver from setup. General setup is done from "ExFlow Setup"
and/or per ExFlow User from "ExFlow Approval Group".

The job can run when user click on "Verify Changes" in Approval Status,
running the report manually (Report ID 12013629) or by setting up a Job Queue Entry (CU 12057074) in Business Central standard.


#### ExFlow Setup

Go to: ***ExFlow Setup --> Escalation***

![ExFlow Setup - Escalation](@site/static/img/media/exflow-setup-escalation-002.png)

|Escalation||
|:-|:-|	
|**Days Before Escalation**| 	Calculated from when the user received the document for approval. <br/><br/> ("Status Change Date" on "Doc. Line Approvers" in "Approval Status.<br/> Server date sets "Status Change Date".) <br/><br/> Read more about this under section [***Escalation***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/approval-groups#escalation)
|**Senior Manager**| 	User that will receive all overdue invoices. The superior approver needs to have same or higher permission since permission is not inherit in ExFlow.
|**Base Calendar Code**| 	Specifies the base calendar code that should be used for calculating workdays when escalating. If no base calendar is added, Saturday and Sunday are not included.
|**Escalation Text**| 	Specifies the text that should be used for escalated approver lines. Internal information will be filled in on Comments.
|**Run when Verify Changes**| 	Run the escalation job when using Verify Changes in Approval Status.
|**System Approver**| 	Specifies the approver id for the system approver that is used when auto approving escalated invoices. 
|**Highlight Rejected And Overdue Documents**| 	Activate this setting to turn the text of rejected and/or overdue documents in Approval Status to red. Making them easier to spot.
|**No. of Overdue Days Before Highlight**| 	Set a no. of days when the document should be presented with red text in Approval Status. The no. of days operates in relation with the due date of the document. "0" will highlight the document on the due date.


#### ExFlow Approval Group

Go to: ***ExFlow Setup - Overview --> ExFlow Approval Groups***

Use escalation settings on ExFlow Approval Group if a separate setup is
needed.

![ExFlow Approval Group](@site/static/img/media/image324.png)

#### Approval Status

If "Run When Verify Changes" is selected in ExFlow Setup, the escalation
job will run when user clicks on Verify Changes in Approval Status.

#### ExFlow Start Escalation Job

Go to: ***Periodic Activities --> ExFlow Escalation Job***

Run ExFlow Escalation Job (Report ID 12013629) manually or setup job (CU 12057074) in "Job Queue Entries" in Business Central standard.

![Report - ExFlow Start Escalation Job](@site/static/img/media/image325.png)

#### Example with Users and a General Escalation Setting in ExFlow Setup

In this example CC (Cecilia Cederbaum) is Current approver and there is
no setup for Escalation on Approval Group CC. Second approver is EE
(Erik Eriksson).

![ExFlow Approval Status](@site/static/img/media/image326.png)

Escalation Job will approve CC automatically and add new approver, FM
(Finance Manager), from ExFlow Setup since the number of days between
document date until today is more than 5 days. 

(Setup, see picture above under ExFlow Escalation Job \--\> ExFlow Setup).

![ExFlow Approval Status](@site/static/img/media/image327.png)

#### Example with Users that have Escalation Settings on Approval Group

In this example the first and current approver is FF (Filippa von
Fersen). FF have an Escalation setup on Approval Group. 

(Setup, see picture above under ExFlow Escalation Job - ExFlow Approval Group)

Second approver is EE (Erik Eriksson).

![ExFlow Approval Status](@site/static/img/media/image328.png)

Escalation Job will approve FF automatically and add new approver, CFO,
from Escalation Setup on Approval Group FF. Since the number of days
between the document until today is more than 3 days. EE still
must approve after CFO.

![ExFlow Approval Status](@site/static/img/media/image329.png)

### Batch Send Emails

Go to: ***Periodic Activities \--\> ExFlow Batch Send Emails***

Batch Sent Emails is usually running automatically through Job Queue
Entries in Business Central standard. But if needed, run the job
manually.

![ExFlow Batch Send Emails](@site/static/img/media/image330.png)

This function can also be found in "ExFlow Email Setup".

![ExFlow Email Setup](@site/static/img/media/image331.png)

Send reminders to specific users from the "ExFlow Users" list.

![ExFlow Users](@site/static/img/media/image332.png)

To send a reminder to all current users for one specific document, run
the report from ExFlow Approval Status by marking the document line and
"Send Reminder".

![ExFlow Approval Status](@site/static/img/media/image333.png)

### Batch Import Documents

Go to: ***Periodic Activities \--\> ExFlow Batch Import Documents***

This report is another way to import all documents into Import Journal
and can also be used to run automatically through Job Queue Entries in
Business Central standard.

![Report - ExFlow Batch Import Documents](@site/static/img/media/image334.png)

### Assign Replacers

Go to: ***Periodic Activities \--\> ExFlow Assign Replacers***

From Assign Replacers, Approvers can be added temporary or removed.

Select Action Add or Remove.

Add Approver.

Add Replace with User.

Start Date and End Date can only be used if Action is selected to Add.

This same function can be found under ExFlow User.

![Report - ExFlow Assign Replacers](@site/static/img/media/image335.png)

### Re-Invoicing Entries

Information regarding invoices to send to Customer can be found in
ExFlow Re-Invoicing Entries.

Read more about this under section [***Re-Invoicing.***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/re-invoicing#re-invoicing)

### Auto Coding Suggestion

To apply the Auto Coding Suggestion, it is required to run the
functions ExFlow Coding Set IDs for Auto Coding Suggestions and ExFlow
Creating Auto Coding Suggestions.

![Periodic Activities - Automatic Coding Suggestions](@site/static/img/media/exflow-menu-005-periodic-activities.png) <br/><br/> Read more about this under section [***Auto Coding Suggestion Setup***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/auto-coding-suggestion-setup#auto-coding-suggestion-setup)
