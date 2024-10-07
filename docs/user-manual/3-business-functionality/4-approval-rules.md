---
title: Approval Rules
sidebar_position: 4
hide_title: true
custom_edit_url: null
---
## Approval Rules

Go To: ***Setup --> ExFlow Manual Setup --> ExFlow Approval Rules***

To automate the selection of approvers the ExFlow Approval Rules can be used.

Approval Rules are used based on the filters assigned. The more filters that are assigned, the higher priority the Approval Rule will have. All assigned filters must match the data of the document if the Approval Rule should be applied automatically.

The Approval Rule can have filters so that it is used only when a certain combination of dimension values, Project, Vendor, G/L Account etc is used. The rule adds an approval flow.

An Approval Rule has one or more Approval Groups. Approval Groups are added on the Approval Rule Lines.

### Create a New Approval Rule
Click "New" and create the rule.

### Approval Rule – General
| General      |	|
|:-|:-|
| **Code:**                         | Add a code the describes the Approval Rule
| **Name:**                         | Add a name that describes the Code
| **Rule For:**                     | It is possible to create separate Approval Rules for all document types: Invoice, Credit Memo, Order and Quote. Open "Rule For" to select the document type: <br/>![Approval Rule General](@site/static/img/media/approval-rule-001-general.png) <br/>Tick "Use" for the selected document type. It is possible to choose more than one document type within the same approval rule <br/>![Rule for Document Type](@site/static/img/media/rule-for-document-type-001.png) <br/> And the new ExFlow Approval Rule will only be applied for the chosen document type. <br/> ![Approval Rule General](@site/static/img/media/approval-rule-002-general.png)
| **Rule for Invoices:**            | For Invoices it is possible to add one rule for: <br/> Cost account Invoices, Matched against Purchase Order, PO Connected with Difference or PO Connected without Difference
| **Disabled:**                     | When an Approval Rule is Disabled, it can only be used when applying manually or via Reference
| **Priority:**                     | If there is several Approval Rules with same numbers of hits, the approval rule with highest number in priority will be added automatically
| **Use Total Invoice Amount:**     | Activate if the rule should add Approval Groups based on total document amount or amount on current line
| **Confidential Approval:**     | Activate Confidential Approval to set up an approval flow filtered on users with Confidential Access
| **Changed By:**                   | Last user to that changed and saved setting for current rule
| **Changed Date:**                 | Last date and time when current rule was changed

![Approval Rule General](@site/static/img/media/approval-rule-003-rule-for-invoices.png)


### Approval Rule – Filters
Two filters for dimensions in combination can be selected on one Approval Rule. All assigned filters and additional filters must match the data of the document if the Approval Rule should be applied automatically.

When selecting a value, the option will be activated automatically.

| Filters      |	|
|:-|:-|
|**Dimension Code 1:**              | Choose a Dimension Code
| **Dimension Value Filter 1:**     | Filter: Choose a Dimension Value for selected Dimension Code
| **Dimension Code 2:**             | Choose a second Dimension Code
| **Dimension Value Filter 2:**     | Filter: Choose a Dimension Value for second selected Dimension Code
| **First Approver Filter:**        | Can be added to the document when interpret a reference. <br/> Read more under section [***Business Functionality --> Reference Codes***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/reference-codes)
| **Vendor Filter:**                | Select one or several Vendor No´s

![Approval Rule Filters](@site/static/img/media/approval-rule-004-filters.png)


### Approval Rule - Additional Filters
All assigned filters and Additional Filters must match the data of the document if the Approval Rule should be applied automatically.

When selecting a value, the option will be activated automatically.

| Additional Filters      |	|
|:-|:-|
|**Line Type:**                     | Choose line type G/L Account, Item, Resource, Fixed Asset, or Charge (Item)
| **Line Type Filter:**             | Add value for selected Line Type
| **Purchaser Filter:**             | Add filter for Purchaser
| **Project Filter:**                | Add Project Filter
| **Person Responsible Filter:**    | Add filter for Person Responsible on Projects
| **Vendor Posting Group**:         | Add filter for Vendor Posting Group

![Approval Rule Additional Filters](@site/static/img/media/approval-rule-005-additional-filters.png)


### Approval Rule Lines
Add as many Approval Groups as needed for the Approval Rule. With four eyes-principle (two approvers) add at least two groups. With six-eyes principle (three approvers) add at least three groups.

An Approval Rule should always contain at least one Approval Group with "Over Amount" and “Not Over Amount” set to zero. If not, there is a risk that the invoice does not go out for approval and cannot be posted.


If it is required that at least two users approve the document line, then a setting like below could be used:

![Approval Rule Lines](@site/static/img/media/approval-rule-lines-001.png)


If one approval group always approves and the second only approves amount over 10 000 then a setting like below could be used:

![Approval Rule Lines](@site/static/img/media/approval-rule-lines-002.png)


With four-eyes principle (two approvers) and the second Approver Group is different depending on the Amount.

If first approver is Approval Group 1 and always approves, the second approver depending on amount of 10 000, then a setting like below could be used. Approval Group 2 will only approve documents with amount up to 9 999,99 and Approval Group 3 from 10 000 or more:

![Approval Rule Lines](@site/static/img/media/approval-rule-lines-003.png)


### Always Propose New Approvers
Go to: ***Setup --> ExFlow Setup --> Approval***

Approval Rules and Dynamic Approval Rules allows ExFlow to automatically identify and apply Approval Rules or Dynamic Approval Flow for documents that have been modified by any user in ExFlow Web.

![ExFlow Setup Approval - Always Propose New Approvers](@site/static/img/media/exflow-setup-approval-001.png)



**Example for Approval Rule without Dynamic Approval Type:**<br/>
Approval Rules are driven by Dimension Department.

Invoice is initially coded with Department "ADM" and Approval Rule with filter for ADM is applied.

During approval in ExFlow Web, a user changes department to "SALES" and approves the invoice.

Always Propose New Approvers logic will now replace the previous Approval Rule to apply a new one that is driven by "SALES".

New Approval Rules will be applied if the invoice coding has been changed to match a better suited Approval Rule once the user approves the invoice. It will not be applied if the user does not approve the invoice.



**Example for Dynamic Approval Rule with Dynamic Approval Type:**<br/>
If Approval Rules are driven by Dimension Owner for Department.
For setup, read more under section [***Business Functionality --> Approval Rules --> Dynamic Approval Flow for Dimension Owners***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/approval-rules#dynamic-approval-flow-for-dimension-owners) below.

Invoice is initially coded with Department "ADM" and Approval Rule for Dimension Owner is applied.

During approval in ExFlow Web, a user changes department to "SALES" and approves the invoice.

Always Propose New Approvers logic will now replace the previous Approvers in the same Approval Rule to apply approvers that is driven by "SALES".

This will not change the Approval Rule, just Approvers from Dimension Owner Setup.


**Note**<br/>
Dynamic Approval Rules will not be applied if the Approval Rule of the invoice was added by an ExFlow Reference, or manually added in the Import Journal. This can be useful for sensitive documents.

Any additional approvers that have been added manually to a document will not be replaced when ExFlow Web applies a new Approval Rule. It will only replace the users that have been added automatically.

Approval Rules can also be used with Approval Groups based on "Dynamic Approval Type" such as Dimension Owners, Person Responsible, etc. For setup, read more under section [***Approval Rules --> Dynamic Approval flow for Dimension Owners,***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/approval-rules#dynamic-approval-flow-for-dimension-owners) [***Projects,***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/approval-rules#dynamic-approval-flow-for-projects) or [***Purchasers***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/approval-rules#dynamic-approval-flows-purchasers) below.

The way this functionality works is that ExFlow Web will automatically apply better suited Approval Rules if identified. The remaining approvers from the previous Approval Rule will be removed and new approvers will be added from the new Approval Rule.


### Dynamic Approval Flow for Dimension Owners
ExFlow Dimension Owners is a tool to limit the amount of used Approval Rules and instead select the correct approvers in a dynamic way. It is possible to combine different dimension values in the same rule with an order set based on the Approval Group.

![Dynamic Approval Flow - Dimension Owner](@site/static/img/media/dynamic-approval-flow-for-dimension-owners-001.png)


**Connecting Approval Groups to Dimension Values**<br/>
Go to: ***Setup --> ExFlow Manual Setup --> ExFlow Dimension Owners***

Set up an approval flow for a specific dimension value. Open a new card by clicking on "New".

Select the Dimension and the Dimension Value.
Then enter the approvers that should be included for this Dimension Value.
At least one approver must be selected.

![Dimension Owner](@site/static/img/media/dimension-owner-001.png)


**Copy Dimension Owners**<br/>
When a Dimension Owner card is created, the function "Copy Dimension Owners" can be used, to automatically create the rest of the Dimension Values.

The selected Dimension based on the selected Dimension Owner. Choose if this should be applied to:

| Generate for      |	|
|:-|:-|
|**One Value:**             | Create one copy to a specific Dimension Value.
| **All Values:**           | Create and copy to all Dimensions Values.
| **Replace One Value:**    | Copy and replace for an already created Dimension Owner Card.
| **Replace All Values:**   | Copy and replace for all Dimension Owner Cards.

![Copy Dimension Owners](@site/static/img/media/copy-dimension-owners-001.png)


**Dynamic Approval Group – Dimension Owner**<br/>
Go to: ***Setup --> ExFlow Manual Setup --> ExFlow Approval Groups***

When the Dimension Owners are created, a new ExFlow Approval Group need to be created. Set the "Dynamic Approval Type" to "Dimension Owner", then add the Dimension in the "Dimension Code" field.

Use the function "Default Approval Group" to assign where a Dimension Owner is missing instead of ignoring this dimension completely.

When using Dynamic Approval Type, it is not possible to add Approval Group Members manually.

![Approval Group - Dimension Owner](@site/static/img/media/approval-group-005-dimension-owner.png)


**Approval Rule – Dimension Owner**<br/>
Go to: ***Setup --> ExFlow Manual Setup --> ExFlow Approval Rules***

Add an Approval Rule that applies for all documents with no filters (enable the Approval Rule), or for the dimension with Dimension Owners just created.

![Approval Rule - Dimension Owner](@site/static/img/media/approval-rule-006-dimension-owner.png)

Add the Dynamic Approval Group with Dynamic Approval Type “Dimension Owner” just created and ExFlow will dynamically add the correct approvers based on the dimension coded on the document.

In this case the Department Dimension Owner will approve the invoice first, then IT-department for all amounts.

We also added CFO as an approver if the document is over 500 000 and CEO for amount over 1 000 000.

If there are multiple approvers in the Dimension Owner Card, then that order will be first in this approval flow.

![Approval Rule Lines- Dimension Owner](@site/static/img/media/approval-rule-lines-004-dimension-owner.png)


**Activate “Always Propose new Approvers”**<br/>
Go to: ***Setup --> ExFlow Manual Setup --> ExFlow Setup***

Activate "Always Propose New Approvers" in ExFlow Setup to create a dynamic approval flow if changing coding on ExFlow Web.

Read more under section [***Business Functionality --> Approval Rules --> Always Propose New Approvers***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/approval-rules#always-propose-new-approvers) above.

![ExFlow Setup - Approval](@site/static/img/media/exflow-setup-approval-001.png)


### Workflow for Dimension Owners
**Show Current Dimension Owners**<br/>
Go to: ***Import Journal --> Import Lines --> Line --> Show Current Dimension Owners***

The function "Show Current Dimension Owners" can be used in the ExFlow Import Journal and ExFlow Approval Status.

![Import Journal Lines Menu](@site/static/img/media/import-journal-lines-001-menu.png)

Go to: ***Approval Status --> Document Lines --> Line --> Show Current Dimension Owners***

![Approval Status Document Lines Menu](@site/static/img/media/approval-status-document-lines-001-menu.png)

This function will open a filtered page and show all the current Dimension Owners Cards, depending on the currently added Dimension Values on the coded line.


### Dynamic Approval Flow for Projects
It is possible to work with either Person Responsible and Project Manager in a Dynamic Approval Flow for Projects.

Some setup is needed to use Dynamic Approval Flow for Projects.

![Dynamic Approval Flow - Jobs](@site/static/img/media/dynamic-approval-flow-for-jobs-001.png)


**Connecting Approvers to Person Responsible**<br/>
To work with Person Responsible added to approval flow, connect the Resource to ExFlow User.

![ExFlow User - Resource](@site/static/img/media/exflow-user-001-related-resource.png)


**Connecting Approvers to Project Manager**<br/>
To work with Project Manager added to approval flow, then make sure that the Business Central System User is connected to an ExFlow User.

Read more under section [***Business Functionality --> ExFlow User --> Create a System User***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/exflow-user#create-a-system-user)

![ExFlow User - System User](@site/static/img/media/exflow-user-002-system-user.png)


**Dynamic Approval Group – Person Responsible / Project Manager**<br/>
Create an ExFlow Approval Group with Dynamic Approval Type set to either "Person Responsible" or "Project Manager":

In both cases, it is possible to use the function “Default Approval Group” to assign where either Person Responsible or Project Manager is missing on the Project card.

When using Dynamic Approval Type, it is not possible to add Approval Group Members manually.

![Approval Group - Person Responsible](@site/static/img/media/approval-group-002-person-responsible.png)

![Approval Group - Project Manager](@site/static/img/media/approval-group-004-project-manager.png)


**Approval Rule – Person Responsible / Project Manager**<br/>
Create an Approval Rule for automatically applying Person Responsible or/and Project Manager from Projects.

In this example a filter is added for all vendors and all projects.

![Approval Rule - Jobs](@site/static/img/media/approval-rule-007-jobs.png)

Bertil Boo should always approve before Person Responsible on the project. The same could be done using Project Manager instead/together with Person Responsible.

![Approval Rule Lines - Person Responsible](@site/static/img/media/approval-rule-lines-005-person-responsible.png)


**Activate “Always Propose new Approvers”**<br/>
Activate "Always Propose New Approvers" in ExFlow Setup to create a dynamic approval flow if changing coding on ExFlow Web.

![ExFlow Setup - approval](@site/static/img/media/exflow-setup-approval-001.png)


**Default Project Task No**<br/>
When using Projects in Business Central Standard a default Project Task No. can be useful if most of the Projects have the same Task.

Add Default Project Task No. in ExFlow Setup.

![ExFlow Setup - approval](@site/static/img/media/exflow-setup-general-001.png)

When adding a Project No. in Import Journal or by coding on ExFlow Web Project Task No. will automatically be added from Default Project Task No. in ExFlow Setup.

![Import Journal - Job Task](@site/static/img/media/import-journal-001-job-task.png)

Add the Columns for Projects and Tasks to ExFlow Web from ExFlow Setup.

The Project Line Type still needs to be added manually in the Import Journal or ExFlow Web, but will not be updated if changing Project No. or Project Task No.


### Workflow for Person Responsible / Project Manager
Project No. Project00010 contains Person Responsible BRITTA.

![Jobs - JOB0000 - Britta](@site/static/img/media/jobs-001-job00010-britta.png)

If added Project No. Project00010 in Import Journal, Approval Rule PROJECTS through Approval Group with Person Responsible will automatically add BRITTA as approver. As mentioned earlier, the same functionality could be used with Project Manager instead or together with Person Responsible.

![Import Journal - Jobs](@site/static/img/media/import-journal-002-jobs.png)

If changing Project No. on ExFlow Web, Approver, BRITTA, will automatically be updated to Person Responsible (or Project Manager) on added Project No. Duplicated approvers will automatically be removed.


### Dynamic Approval Flows Purchasers
Dynamic approval flows can be set up based on Purchaser Code. If a Purchaser Code is set on the Purchase Document, then ExFlow can automatically add Purchaser to the approval flow.

![Dynamic Approval Flow Purchasers](@site/static/img/media/dynamic-approval-flow-for-purchasers-001.png)


**Connecting Approvers to Purchaser**<br/>
To work with Purchaser added to approval flow, connect Purchaser Code to ExFlow User.

![ExFlow User - Related Purchaser Code](@site/static/img/media/exflow-user-003-related-purchaser-code.png)


**Dynamic Approval Group – Purchaser**<br/>
Create an Approver Group with the Dynamic Approval Type ‘Purchaser’.

It is possible to use the function “Default Approval Group” to assign when Purchaser is missing.

When using Dynamic Approval Type, it is not possible to add Approval Group Members manually.

![Approval Group - Purchaser](@site/static/img/media/approval-group-007-purchaser.png)


**Approval Rule– Purchaser**<br/>
Create an Approval Rule for automatically applying Purchaser to the approval flow.

In this example a filter is added for all vendors and all purchasers.

![Approval Rule - Purchaser](@site/static/img/media/approval-rule-008-purchaser.png)

In this case if Purchaser on the document is added as an Approver.

![Approval Rule Lines - Purchaser](@site/static/img/media/approval-rule-lines-006-purchaser.png)

ExFlow will now automatically assign approver based on the Purchaser Code value on the Purchase Document Header. If retrieving lines matched towards different purchase orders with multiple Purchaser Codes, then ExFlow will also be able to retrieve the correct Purchaser Code associated with document line.

A tip is also to utilize personalize to view the purchaser code field in Import Journal (lines or header), since the fields are hidden per default. 

**Always Propose new Approvers**<br/>
When working with Dynamic Approval Type ‘Purchaser’ the Approvers will be added from Import Journal. After the document is created, there is no function to change Purchaser on the document lines. Therefore, the approval flow will not be changed after the document is created, during the approval flow.