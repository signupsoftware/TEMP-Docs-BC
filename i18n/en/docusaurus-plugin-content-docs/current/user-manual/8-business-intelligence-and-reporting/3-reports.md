---
title: Reports
sidebar_position: 3
hide_title: true
---
## Reports

Go to ExFlow Reports to generate reports. Reports are divided into sections according to below:

![Report - ExFlow Approval Status](@site/static/img/media/reports-homepage-001.png)


### Reports --> Documents

| Reports --> Documents |  | 
|:-|:-|
| **ExFlow Approval Status:**        | Follow up Approval Status, at end month use report to accrue pending costs
| **ExFlow Posted Approval Documents:**        | View posted approved documents per approver
| **ExFlow Open Documents:**        | View current open ExFlow documents
| **ExFlow Documents Approval History:**        |View posted ExFlow documents
| **ExFlow Documents per Company:**        | ExFlow statistics in all companies to compare the current year with last year 
| **ExFlow Import Journal Documents With Errors:**        | Exports the list of import journal documents (and related lines) with error
| **ExFlow Preliminary Accounts Payable:**        | View Accounts Payable report with possibility to filter on Preliminary Posted
| **ExFlow Aged Accounts Payable:**        | View ExFlow Aged Accounts Payable report

<br/>

### ExFlow Approval Status

Go to: ***ExFlow Reports \--\> Documents \--\> ExFlow Approval Status***

This report shows all the documents that are pending for approval and
not yet posted. Use e.g., filter on Due Date to see documents for a
specific period. In the tab "Options" select which documents to print.

![Report - ExFlow Approval Status](@site/static/img/media/reports-approval-status-001.png)


#### Book Preliminary Costs

This report can also be used to fill a General Journal with entries that
can be posted to book preliminary costs (per Purchasing) for documents
not yet finally certified. In the example below, the following will
occur:

- For all **Active** (i.e. still out for approval) document lines of
    type **G/L Account** a record is created in the General Journal and
    default batch.

- The line will have the Posting Date set to **2021-03-31**.

- The G/L Account number will be added from the purchasing line and
    the balance for the G/L Account will be set to **2445**.

- There will also be created a reverse posting with posting date
    **2021-04-01** on the same G/L Account but with opposite signs.

- All lines that have a Deferral Start Date set for accrual after
    2021-03-31 will not be included. This is because the field
    **"Exclude Deferral Amount occurring after Posting Date:"**
    is checked.

![Report - ExFlow Approval Status](@site/static/img/media/reports-approval-status-002.png)

![Report - ExFlow Approval Status](@site/static/img/media/image379.png)

![Report - ExFlow Approval Status](@site/static/img/media/image380.png)

##### Other Journal Line Integration Settings

###### Options

**Only Include G/L Lines:**

Only include G/L Accounts in the General Journal suggestion. If not
selected all line types will be included. Items will be replaced by a
G/L Accounts which is selected based on General Posting Setups.

**Exclude Non Approval Lines:**

Leaving this option unselected will include all Invoices/Credit Memos
and Lines not only in ExFlow Approval Status. Selecting this option will
ensure that only ExFlow generated Invoice/Credit Memo Lines will be
included.

**Currency Rate Based on:**

Invoices/Credit Memos in other currency's than the LCY needs to be
converted to LCY.

Today's date: Currency Exchange rate is calculated based on today's
date.

Document's posting date: Exchange rate is calculated based on each
source documents posting date.

Currency factor from purchase header: The (existing) Exchange rate from
the source document is used.

###### Journal Line Integration

**Copy Dimensions:**

Copy dimension to the suggested General Journal lines from source
documents.

**Override G/L Account from Purchase Line:**

The blank option will suggest the G/L Account from the source purchase
line.

Always: Replace all G/L Accounts with the G/L Account select below.

When Line has the Predefined Account: Only replace G/L Accounts from
Purchase Lines if they are equal to the Predefined Account.

**Override G/L Account:**

The G/L Account used for the setting above.

**Exclude Deferral Amount occurring after Posting Date:**

Yes: Lines with Deferral Start Date after Posting Date will not be
included.

No: All Deferral posting will be included.

**Post remaining Deferral amount:**

Post remaining deferral amounts due to Deferral Templates to the G/L
Account selected below.

**Account for remaining Deferral Amount:**

The G/L Account used for the setting above.

**Posting Option for Items:**

Options are Full or Inventory Account Only.

**Posting Job Information**

Specifies if job information should be included when creating line.

![Report - ExFlow Approval Status](@site/static/img/media/image381.png)


Add other necessary filters:

![Report - ExFlow Approval Status](@site/static/img/media/reports-approval-status-003.png)
<br/>

### ExFlow Posted Approval Documents

Go to: ***ExFlow Reports \--\> Documents \--\> ExFlow Posted Approval
Documents***

The Report "ExFlow Posted Approval Documents" show documents grouped by
approver. It can also include documents which have been posted and/or
with filter for only one approver. Can be exported to Excel.

![Report - ExFlow Posted Approval Documents](@site/static/img/media/image382.png)

![Report - ExFlow Posted Approval Documents](@site/static/img/media/image383.png)
<br/>

### ExFlow Open Documents

Go to: ***ExFlow Reports \--\> Documents \--\> ExFlow Open Documents***

This report can be used to see Open Documents for one specific or
several Approval Groups.

![Report - ExFlow Open Documents](@site/static/img/media/image384.png)

![Report - ExFlow Open Documents](@site/static/img/media/image385.png)
<br/>

### ExFlow Document Approval History

Go to: ***ExFlow Reports \--\> Documents \--\> ExFlow Document Approval
History***

This report can be used to see Approval History on "Posted Documents"
for Approval Groups and Approvers.

![Report - ExFlow Document Approval History](@site/static/img/media/image386.png)

![Report - ExFlow Document Approval History](@site/static/img/media/image387.png)

This report also gives information if an invoice has been automatically
approved against a purchase order or a Contract. The last column to the
right shows: \"Contract No.\" for the Document, \"Order No.\" for the
Lines and \"Auto Approved\" for Approval Lines.
<br/>

### ExFlow Documents per Company

Go to: ***ExFlow Reports \--\> Documents \--\> ExFlow Documents per
Company***

This report can be used to see the number of ExFlow documents per
Company and the number of Approvers per company.

![Report - ExFlow Documents per Company](@site/static/img/media/image388.png)

![Report - ExFlow Documents per Company](@site/static/img/media/image389.png)

<br/>

### ExFlow Import Journal Documents With Errors
Go to: ***ExFlow Reports \--\> Documents \--\> ExFlow Import Journal Documents With Errors***

Download an Excel file with all Import Journal - documents with error. 
Choose if you want to enable ''All Lines'', and also if an specific ''Journal Batch Name'' then click on OK to download the file. 

![Report - ExFlow Report](@site/static/img/media/reports-import-journal-001.png)
<br/>

### ExFlow Preliminary Accounts Payable
Go to: ***ExFlow Reports \--\> Documents \--\> ExFlow Preliminary Accounts Payable***

Generate a report with filer on Preliminary Posting. Specify if you want that the report should show all documents, only Preliminary Posted Documents, or without Preliminary Posted Documents.

It is also possible to filter on Vendor No. etc.

![Report - ExFlow Report](@site/static/img/media/reports-documents-preliminary-001.png)

In below example, the report show only Preliminary Posted Documents without any other filter set. 

![Report - ExFlow Report](@site/static/img/media/reports-documents-preliminary-002.png)
<br/>

### ExFlow Aged Accounts Payable
Go to: ***ExFlow Reports \--\> Documents \--\> ExFlow Aged Accounts Payable***

Generate a Document Aging report and let ExFlow specify if the aging will be calculated from the due date, the posting date, or the document date, among other filters.

![Report - ExFlow Report](@site/static/img/media/reports-documents-aged-accounts-001.png)

In below example, reports is generated with filter: ''Aging by: Due Date'' and ''Heading Type'' set as ''Date Interval'', and also to exclude Preliminary posted documents.

![Report - ExFlow Report](@site/static/img/media/reports-documents-aged-accounts-002.png)

<br/><br/>

### Reports --> ExFlow User

| Reports --> User |  | 
|:-|:-|
| **ExFlow Users:**        | ExFlow users and their details in all companies
| **ExFlow Approval Follow-Up:**        | View current ExFlow documents per user
| **ExFlow Approver Statistics:**        | View the approver performance
| **ExFlow User Replacements:**        | Check out replacers for all ExFlow users
| **ExFlow GDPR User Related Data:**        | View where personal data are used in ExFlow 

<br/>

### ExFlow Users

Go to: ***ExFlow Reports \--\> User \--\> ExFlow Users***


This report views both ExFlow Users and User Setup for all companies.
Including different filter options.

![Report - ExFlow Users](@site/static/img/media/image390.png)

![Report - ExFlow Users](@site/static/img/media/image391.png)
<br/>

### ExFlow Approval Follow-Up

Go to: ***ExFlow Reports --> Users --> ExFlow Approval Follow-up***

This report can be used to follow up Approvers with unapproved document
lines. Add filter for specific "Approval Group".

![Report - ExFlow Approval Follow Up](@site/static/img/media/image392.png)

![Report - ExFlow Approval Follow Up](@site/static/img/media/image393.png)
<br/>

### ExFlow Approver Statistics

Go to: ***ExFlow Reports \--\> User \--\> ExFlow Approver Statistics***

This report gives admins/users statistic for the Approvers regarding for
example "Number of Approve lines, Average No. of approval days".

![Report - ExFlow Approver Statistics](@site/static/img/media/image394.png)

![Report - ExFlow Approver Statistics](@site/static/img/media/image395.png)
<br/>

### ExFlow User Replacements

Go to: ***ExFlow Reports \--\> User \--\> ExFlow User Replacements***

This report shows User Replacements for different users in different
periods. Admins/Users can either filter on a specific user or on "All
Users".

![Report - ExFlow User Replacements](@site/static/img/media/image396.png)

![Report - ExFlow User Replacements](@site/static/img/media/image397.png)
<br/>

### ExFlow GDPR User Related Data

Go to: ***ExFlow Reports \--\> User \--\> ExFlow GPDR User Related
Data***

This report shows all the GDPR related data for a specific User.

![Report - ExFlow GDPR User Related Data](@site/static/img/media/image398.png)

![Report - ExFlow GDPR User Related Data](@site/static/img/media/image399.png)
<br/><br/>

### Reports --> Approval Rules

| Reports --> Approval Rules |  | 
|:-|:-|
| **ExFlow Approval Rules:**        | Detailed view of all Approval Rules defined for ExFlow workflow
| **ExFlow Approval Rules per User:**        | View Approval Rules per user
| **ExFlow Approval Rules List:**        | View Approval Rule list

<br/>

### ExFlow Approval Rules

Go to: ***ExFlow Reports \--\> Approval Rules \--\> ExFlow Approval
Rules***

This report shows "Approval Rules" by company. There are different
filter options such as "Vendor" or "Dimension Value" that can be applied
as well.

Tick the "Show Approval Group Lines" box to have approval group lines information added in the report.

![Report - ExFlow Approval Rules](@site/static/img/media/image400.png)

![Report - ExFlow Approval Rules](@site/static/img/media/image401.png)
<br/>

### ExFlow Approval Rules per User

Go to: ***ExFlow Report \--\> Approval Rules \--\> ExFlow Approval Rules
per User***

This report shows "Approval Rules per User" with filter options per
"Company", "User ID" name and so on. Admins/Users can also include User
Replacements for a specific date.

![Report - ExFlow Approval Rules per User](@site/static/img/media/image402.png)

![Report - ExFlow Approval Rules per User](@site/static/img/media/image403.png)

<br/>

### ExFlow Approval Rules List
Go to: ExFlow Report --> Approval Rules --> ExFlow Approval Rules List

Generate a report based on all approval rules or selected rules.

![Report - ExFlow Approval Rules List](@site/static/img/media/reports-approval-rules-list-001.png)


![Report - ExFlow Approval Rules List](@site/static/img/media/reports-approval-rules-list-002.png)