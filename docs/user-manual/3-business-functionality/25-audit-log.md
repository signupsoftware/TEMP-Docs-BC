---
title: Audit Log
sidebar_position: 25
hide_title: true
custom_edit_url: null
---
## Audit Log
The ExFlow Audit Log is built on top of the standard Business Central Change Log to provide an enhanced, user friendly log of changes made to documents in ExFlow. When activated, the Audit Log tracks all changes made to a document from import to posting. View document changes in either a summary format based on invoice states and actions, or view changes in a detailed format that tracks changes at the field level.

### Activate Audit Log
To Activate the Audit Log, search and go to **ExFlow Audit Log Setup**.

In the ExFlow Audit Log Setup page:

* Select an Audit Log Template (see more information about audit log templates below)
* In the ribbon, click on “Change Log Setup”<br/><br/>
    ![ExFlow Audit Log Setup](@site/static/img/media/audit-log-setup-001.png)<br/>

* In the Change Log Setup page, toggle on “Change Log Activated”<br/>

    ![Change Log Setup](@site/static/img/media/change-log-setup-001.png)


The configuration in the selected Audit Log Template will be applied to the standard Business Central Change log. To view the applied change log configuration, in the Change Log Setup page, first click on “More options” then select ***Actions --> Setup --> Other --> Tables***.

![Change Log Setup](@site/static/img/media/change-log-setup-002.png)

![Change Log Setup (Table) List](@site/static/img/media/change-log-setup-table-list-001.png)


### Audit Log Templates
An Audit Log template defines the tables and fields that will be tracked in ExFlow Audit Log. A default template “BASE” will be available for use, but additional custom templates may be created. Open the BASE template to see tables and fields included:
* Search on and go to “ExFlow Audit Log Templates”.
* In the ExFlow Audit Log Template list, click on the Code to open the template.

  ![ExFlow Audit Log Templates](@site/static/img/media/audit-log-templates-001.png)

The “BASE” template cannot be changed but it can be copied to create a custom template.

#### Create a custom Template
To create a custom Template, the Base template must first be copied, then changes can be made to the newly created template.
* Open the “Base” Template
* Select “Copy Template” on the ribbon.<br/><br/>
    ![ExFlow Audit Log Template Card](@site/static/img/media/audit-log-template-card-001.png)

* Enter a New Template Name and a description.<br/><br/>
    ![ExFlow Audit Log Copy Template](@site/static/img/media/audit-log-001-copy-template.png)

* Open the newly created template. <br/> 
**To log changes** to all fields in a listed table, Toggle on the “Log All Fields” option.<br/>

![ExFlow Audit Log Template Card](@site/static/img/media/audit-log-template-card-002.png)<br/><br/>
**To select certain fields** to be logged:<br/>
Select the desired table, making sure the “Log All Fields” option is unchecked, then update the “Fields” section (lower portion of screen) as needed:<br/><br/>
**To add a field**, click on “New Line” then select the desired field on the newly created line.<br/><br/>
**To remove a field**, select the desired field then click on “Delete Line”.

### View the Audit Log for an ExFlow Document 

Go to: **ExFlow Approval Status History --> Related --> Audit Log** 

After a document has been posted, the audit log is accessible from the Approval Status History. At this point in the process, all actions from import through posting will be visible in the Summary View and all field level changes can be viewed from the Detailed View.



![Audit Log](@site/static/img/media/audit-log-approval-status-history-001.png)

The Audit Log will be opened in **Summary View** where you will see a list of the document actions that have occurred since the document was imported (imported, verified, matched to receipt, etc.) with a date and time stamp indicating when the action occurred. The Area indicates where the document was in the ExFlow process when the action occurred.<br/>

![View – Audit Log Overview](@site/static/img/media/view-audit-log-overview-001.png)

The information in this view can be exported to Excel by selecting the “Export to Excel” action in the ribbon.<br/>

![Audit Log](@site/static/img/media/audit-log-excel-001.png)

To view all standard Business Central change log entries for a single action line, drill down on the line by clicking on any field value in the line. If there were no changes recorded for the action, you will receive a message “No changes found.”

![View – Change Log Entries](@site/static/img/media/view-change-log-entries-001.png)

To see all changes made to the document, from the Summary View page, click on ** Detailed View --> View Full Document. **<br/>

![View – Audit Log Overview](@site/static/img/media/view-audit-log-overview-002.png)


The ** Detailed View --> View Area ** will list all fields segregated into sections as follows:
* Header
* Lines
* Approvers


![Audit Log](@site/static/img/media/view-audit-log-overview-003.png)

Each field will be presented as a separate line with columns that show all changes made to the field next to the action the change was related to. The most recent changes will be shown in the columns on the left. To view prior changes, scroll to the right to view additional columns. If there are a significant number of changes, click on Next Set to view additional changes.

In the example shown below, we can see that the most recent change (at 10:34:53 AM on 6/29/23) was made by user KONNIE:
* The approver was changed from SAM to MARK (see “Approver” row in screenshot below)
* The original approver (SAM) was assigned by the Approval Rule MARKETING (see “Added from Approval Rule” row in screenshot below)
* The new approver (MARK) was manually assigned by user KONNIE (see “Created In” row in screenshot below)

**Note:** The original value is shown on the left of the arrow and the new value is shown on the right.

![Audit Log](@site/static/img/media/audit-log-detailed-view-001.png)


### Delete Expired Entries  

Go to: **ExFlow Audit Log Setup --> Delete Expired Entries**

![Audit Log](@site/static/img/media/audit-log-delete-entries-001.png)

Similar to standard functionality, it is possible to enter a Period DateFormula in Audit Log Setup, to use when deleting old audit log entries.

For this example, seven years is added, and ExFlow Audit log entries older than seven year will be deleted when utilizing this function. 

![Audit Log](@site/static/img/media/audit-log-delete-entries-002.png) 