---
title: G/L Budget Control
sidebar_position: 24
hide_title: true
custom_edit_url: null
---
## G/L Budget Control

When working with general ledger budget in Business Central standard there are only tools to compare posted ledger entries against budget. None before posting.<br/>

With ExFlow G/L Budget Control, users can keep track of the budget for Purchase Invoices and Credit Memos before posting. Also, when approving on ExFlow Web.

### ExFlow Budget Control Wizard
How to start get started with ExFlow G/L Budget Control step by step.<br/>

Go to: ***Setup --> ExFlow Wizards --> ExFlow Budget Control Wizard***<br/><br/>


#### Calculate G/L Budget Control

Choose the preferred option to calculate G/L Budget Control:

1.	**Monthly**<br/>
Calculate and compare posting against budget per month

2.	**To Posting Month**<br/>
Calculate and compare G/L posting against budget from budget starting to end of document posting month

3.	**Total**<br/>
Calculate and compare G/L posting against budget from starting date to ending date in budget period setup

![ExFlow Budget Control Wizard](@site/static/img/media/budget-control-wizard-001.png)<br/><br/>

#### Global Dimensions
Choose global dimensions for general ledger budget control. It is possible to ignore dimensions or choose one or the other, or both.

![ExFlow Budget Control Wizard](@site/static/img/media/budget-control-wizard-002.png)<br/><br/>

#### G/L Budget Periods
G/L Budget Periods is needed to let ExFlow know to which budget to compare posting against.
Click “Add Budget Periods” to select period and budget.
Add Starting Date, ending Date and Budget to compare against.

![ExFlow Budget Control Wizard](@site/static/img/media/budget-control-wizard-003.png)

![ExFlow Budget Control Wizard](@site/static/img/media/gl-budget-period-setup-001.png)<br/><br/>

#### Add Web Columns
Will add necessary web columns to ExFlow Column. If Columns are added they cannot be removed from Budget Control Wizard.<br/>
To remove columns, Go to: ***ExFlow Setup --> Related --> Advanced --> Columns***

![ExFlow Budget Control Wizard](@site/static/img/media/budget-control-wizard-004.png)<br/><br/>

#### Warnings
Notification at % is used to warn approvers when getting close to reach budget. When line amount is over notification percentage it will show Used Budget % and Remaining Budget Amount in bold text in Business Central.

![ExFlow Budget Control Wizard](@site/static/img/media/budget-control-wizard-005.png)<br/><br/>

#### Warnings in Import Journal
Activate warnings in Import Journal, both for Warning at % together with Amount over Budget. These warnings can be accepted in Import Journal to send the document for approval.

![ExFlow Budget Control Wizard](@site/static/img/media/budget-control-wizard-006.png)<br/><br/>

#### Budget Owner
Add an approval group for Budget Owner to approve when general ledger budget is exceeded (over 100%). Budget Owner will be added to the approval flow as last approver. If empty, no budget approvers will be added to the approval flow.<br/><br/>

#### Approval Tolerance
Approval tolerance is checked per document line.
Keep both Amount and Percentage as low as possible. This is due to Amount and percentage is per G/L account and dimension combination.

![ExFlow Budget Control Wizard](@site/static/img/media/budget-control-wizard-007.png)<br/><br/>

#### Background Processing
Update ExFlow G/L Budget Totals from General Ledger Entries can be done when posting from Approval Status or by setting up a job queue.

**With Job Queue:** Update by adding a scheduled Job Queue.

**When Posting from Approval Status:** Update when posting from Approval Status.

![ExFlow Budget Control Wizard](@site/static/img/media/budget-control-wizard-008.png)<br/><br/>

#### Finish and update setup
Click "Finish" to close the ExFlow Budget Control Wizard and apply the settings.

![ExFlow Budget Control Wizard](@site/static/img/media/budget-control-wizard-009.png)

### ExFlow G/L Budget Control Setup
For setup manually, to review or update setup, go to ExFlow G/L Budget Control Setup.<br/>
Go to: ***ExFlow Setup - Overview --> ExFlow Budget Control Setup***<br/><br/>

#### General

| General | |
|:-|:-|
| **Active:**                   | To Enable or Disable ExFlow G/L Budget Control. <br/> To Disable ExFlow Columns, go to: ***ExFlow Setup --> Related --> Advanced --> Columns***
| **G/L Budget Calculation:**   | Choose the preferred option to calculate G/L Budget Control: <br/><br/> 1.	**Monthly**<br/> Calculate and compare posting against budget per month. <br/><br/> 2. **To Posting Month**<br/> Calculate and compare G/L posting against budget from budget starting to end of document posting month. <br/><br/> 3. **Total**<br/> Calculate and compare G/L posting against budget from starting date to ending date in budget period setup.<br/><br/>
|**Global Dimension 1:**        | Choose global dimensions for general ledger budget control. Ignore dimensions or choose one or the other, or both.
| **Global Dimension 2:**       | Choose global dimensions for general ledger budget control. Ignore dimensions or choose one or the other, or both.

![ExFlow G/L Budget Control Setup](@site/static/img/media/gl-budget-control-setup-001.png)<br/><br/>

#### Warnings
| Warnings | |
|:-|:-|
| **Notification at %:**            | To warn approvers when getting close to reach budget. When line amount is over notification percentage it will show Used Budget % and Remaining Budget Amount in bold text in Business Central
| **Warning over Notification:**    | Activate warnings in Import Journal for Warning at %. Warnings can be accepted in Import Journal to send the document for approval
| **Warning over Budget:**          | Activate warnings in Import Journal if coding is over Budget. Warnings can be accepted in Import Journal to send the document for approval

![ExFlow G/L Budget Control Setup](@site/static/img/media/gl-budget-control-setup-002.png)<br/><br/>

#### Approval
| Approval | |
|:-|:-|
| **Budget Owner:**         | Add an approval group for budget owner to approve when general ledger budget is exceeded (over 100%). Budget Owner will be added to the approval flow as last approver. If empty, no budget approvers will be added to the approval flow
| **Approval Tolerance:**   | Approval tolerance is checked per document line. Keep both Amount and Percentage as low as possible. This is due to Amount and percentage is per G/L account and dimension combination

![ExFlow G/L Budget Control Setup](@site/static/img/media/gl-budget-control-setup-003.png)<br/><br/>

#### Background Processing
Update ExFlow G/L Budget Totals from General Ledger Entries can be done when posting from Approval Status or by setting up a job queue. The totals are used to summarize all G/L Entries per Year, Month and Global Dimension Combination.

| Background Processing | |
|:-|:-|
| **With Job Queue:**                       | Update by adding a scheduled Job Queue
| **When Posting from Approval Status:**    | Update when posting from Approval Status

![ExFlow G/L Budget Control Setup](@site/static/img/media/gl-budget-control-setup-004.png)<br/><br/>

#### Function – G/L Budget Control Setup
G/L Budget Periods is needed to let ExFlow know to which budget to compare posting against.

![ExFlow G/L Budget Control Setup](@site/static/img/media/gl-budget-control-setup-function-001.png)

Click “New” and select period Starting Date, Ending Date and G/L Budget Code.

![ExFlow Budget Period Setup](@site/static/img/media/gl-budget-period-setup-001.png)<br/><br/>

#### Function - Add Web Columns
Will add necessary web columns to ExFlow Column.<br/>
To Disable ExFlow Columns, go to: ***ExFlow Setup --> Related --> Advanced --> Columns.***

![ExFlow G/L Budget Control Setup](@site/static/img/media/gl-budget-control-setup-function-002.png)

![ExFlow G/L Budget Control Setup](@site/static/img/media/columns-are-added-001.png)<br/><br/>

#### Function - Update G/L Budget Totals
First time when getting started with ExFlow G/L Budget Control, or when changing setup, it can be helpful to speed up the calculation for Budget Control.

![ExFlow G/L Budget Control Setup](@site/static/img/media/gl-budget-control-setup-function-003.png)

This can be done by running update now or at selected time and date.

![ExFlow G/L Budget Control Setup](@site/static/img/media/update-gl-budget-totals-001.png)

### ExFlow G/L Budget Control Workflow
#### Start with setup
ExFlow G/L Budget Control Setup needs to be activated as above.<br/><br/>

#### Calculations
Calculation is using Posting Date on the document, Budget added in Budget Period Setup for Invoices and Credit Memos.

Documents are included from Import Journal, Approval Status, and manually created in Business Central (outside ExFlow Approval Flow).

It is done per Income Statement G/L Account and Global Dimension Combination in G/L Budet Control Setup.<br/>
There is no budget calculation for Balance G/L Accounts.

For Items, Fixed Assets, Resources and Charge (Item), calculation is done from Purch. Account or Purch. Credit Memo Account in General Posting Setup.<br/><br/>

#### Columns on Lines
| Columns on Lines | |
|:-|:-|
| **Remaining Amount:**     | Shows the remaining Budget Amount calculated as above
| **Used Budget %:**        | Shows used budget percentage calculated as above

![ExFlow Import Journal](@site/static/img/media/import-journal-004-budget-control.png)

**Budget Detail Status:** When using Deferral or Automatic Account Groups on a document line, there can be several periods and G/L Account. Budget Detail Status will show Status: 
- **Within Budget**
- **Warning**
- **Within Tolerance**
- **Over Budget**
- **Budget Missing**


Status will show highest warning level from Detailed Lines. Click budget Status to show Budget Detailed Lines and Remaining Amount together with Used Budget %.

![ExFlow Import Journal](@site/static/img/media/import-journal-005-budget-control.png)

![ExFlow Import Journal](@site/static/img/media/view-budget-detailed-lines-001.png)<br/><br/>

#### Function - Show Budget
To show how ExFlow have calculated Remaining Budget Amount and Used Budget % click show Budget.<br/>
Go to: ***Line --> Show Budget***

![ExFlow Import Journal](@site/static/img/media/import-journal-006-budget-control.png)

ExFlow Budget Overview is summarized of how and from where budget is calculated.
Click **Amount** for each line to get more detailed information on a transaction level.

![Budget Overview](@site/static/img/media/budget-overview-001.png)<br/><br/>

#### Import Journal
If Warnings is activated in ExFlow G/L Budget Control Setup, they will occur in Import Journal FactBox for Warning Message. Depending on setup, both Over Notification or/and Over Budget can show for one or several lines.

![ExFlow Import Journal](@site/static/img/media/import-journal-007-warning-messages.png)

All warning messages can be accepted to send the document for Approval.

![Warning Messages](@site/static/img/media/warning-messages-001.png)<br/><br/>

#### ExFlow Web
On ExFlow Web all three columns will be activated. Remaining Amount, Used Budget % and Budget Detail Status.
But the Approvers cannot see calculation or Budget Detailed Status.
When changing coding or splitting the line, click save and open document again to see updated budget values.

![ExFlow Web](@site/static/img/media/web-001-budget-control.png)<br/><br/>

#### Approval Status
If the line is over budget and Budget Owner is added in ExFlow G/L Budget Control Setup, this approver group will be added as last approver. But not until last approver in the approval flow have approved. 
This is because the coding on the line can be changed during the approval flow and the line may no longer be over budget.
When adding the Budget Owner as approver in the approval flow, it will be marked as “Created in” Budget Control.

![ExFlow Approval Status](@site/static/img/media/approval-status-001.png)

