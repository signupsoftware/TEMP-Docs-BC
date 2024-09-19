---
title: Contract
sidebar_position: 13
hide_title: true
custom_edit_url: null
---
## Contract

Go to: ***Setup \--\> ExFlow Manual Setup \--\> ExFlow Contracts***

ExFlow Contract can be used to keep track of received and missing invoices for Contracts and can also automatically approve matched invoices. Start by creating a new Contract by clicking "New".

To setup and approve for Contracts, read more under section [***OMNI Approval***]( https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/omni-approval).

### General
Under this section, add general information for this specific contract, Vendor, Approval Flow and Coding.

|General |  |
|:-|:-|
| **Contract No.**:                         | Automatically assigned in order they are created
| **Vendor No.**:                           | Select Vendor from the list
| **Vendor Name**:                          | Displays name for Selected Vendor No. 
| **External Contract No.**:                | Reference that can be interpreted on Invoice to match specific Contract<br/> If a reference code is created the External Contract No. can no longer be changed. <br/>To update, change External Contract No. and press enter<br/>
| **Message**:                              | You are not allowed to update External Contract No. Do you want to add Related Reference instead?<br/>Answer Yes and Related Reference will be added automatically on the Reference Card
| **Inactivated**:                          | Yes or No. To match an invoice the contract needs to be active
| **Copy Attachment to Matched Invoice**:   | Yes or No. If yes, add an attachment
| **Reference Created**:                    | If reference is created the reference code will be displayed with link to the ExFlow References Card
| **ExFlow Purchase Code**:                 | Add ExFlow Purchase Code and invoice lines will be created automatically in Import Journal
| **First Approver**:                       | Specifies the first approver that should be used on matched Invoices. Due to setting in “Copy First Approver to the Approval Flow” in ExFlow Setup, First Approver can be used as an Approver or to define an approval rule with matching on First Approver Filter
| **Approval Rule**:                        | Specifies the approval rule that should be used when an Invoice in matched to this Contract<br/> Add a specific Approval Rule to always be use for this Contract. The Approval Flow will not be updated even if the coding is changed in approval process<br/> First Approver can also be used as filter to automatically add an Approval Rule to the Invoice but in that case Approval Rule cannot be used on the ExFlow Contract
| **Purchaser Code**:                       | Specifies a Purchaser Code that should be applied when this an invoice is matched to this Contract. Can be used to define an approval rule if there are no Approval Rule added above
| **Reference Description**:                | Specifies the description added to the reference<br/> When updating description, the created Reference description will be updated automatically
| **Self-Billing Invoice**:                 | To create Self-Billing Invoices an PDF-attachments needs to be added
| **Create Self-Billing Invoice**:          | Select how to create Self-Billing Invoices<br/>- **Per Period:** One Invoice per period up to today’s date<br/> - **All:** One Invoice per period for all created periods
| **Vendor Invoice No.**:                   | This will create Vendor Invoice No. for Self-Billing Invoices

![ExFlow Contract](@site/static/img/media/contract-general-001.png)


### General Terms
Under General Terms, add totals for this specific contract.

|General Terms|  |
|:-|:-|
| **Valid from Date and Valid to Date**:    | Terms on the contract<br/> If Invoice Periods is created, Valid to Date can be used to extend Invoice Periods<br/> Read more below under section [***Invoice Periods***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/contract#extend-contract-with-invoice-periods)
| **Currency Code**:                        | The Currency Code to be used when invoicing the contract
| **Total Contract Amount (Net Currency)**: | Specifies the total contract amount including tolerances.

![ExFlow Contract](@site/static/img/media/contract-general-terms-001.png)

### Periodicity
Add invoice amount, periodicity and number of invoices per period.
When working with Invoice Periods, this section is only used to copy values when periods is created.

|Periodicity |  |
|:-|:-|
| **Invoicing Period**:                     | If invoicing period for example per quarter = 3M or every month = 1M
| **Period Start Date**:                    | Start date for next invoice
| **Period End Date**:                      | Calculates automatically due to Invoicing Period
| **Match dates based on**:                 | Posting Date, Document Date or Due Date
| **Number of Invoices in Period:**         | Specifies the number of invoices that are expected during the invoicing period
| **Check Periods**:                        | Yes or No. Specifies if the contract period should be checked. If inactivated there will be no check per invoice, only for contract totals under General Terms
| **Max. Invoice amount (Net Currency)**:   | Specifies the maximum amount for any invoice connected to this contract.
| **Tolerance Percentage**:                 | Will be used together with Tolerance Amount and make it possible to match and automatically approve matched invoices within tolerances<br/> If Contract Periods is added, tolerance needs to be added for each period
| **Tolerance Amount**:                     | Will be used together with Tolerance Percentage and make it possible to match and automatically approve matched invoices within tolerances<br/> If Contract Periods is added, tolerance needs to be added for each period
| **Payment Terms Code**:                   | Used for this specific Contract instead of copied from current Vendor Card

![ExFlow Approval Status](@site/static/img/media/contract-periodicity-001.png)

### Invoice Periods
Invoicing Periods can be used to match invoices with different amount or tolerances per period but also to send reminder if Invoice is missing for a specifik period.<br/>
For Self-Billing Invoices it is needed to keep track of created invoices.

#### Create Invoice Period
Go to: ***ExFlow Contract --> Invoice Periods --> Lines --> Create Invoice Periods***<br/>
Invoice Periods can be created automatically by using Valid From and to Date together with Invoice Periods.<br/>
When creating the lines, Period Amount calculates from "Max. Invoice Amount (NET Currency)" multiplied with "Number of Invoices in Period" under Periodicity.

If Max. Invoice Amount is missing, calculation is done from Total Contract Amount (NET Currency) divided by Number of periods.

Tolerances and Payment Terms Code will be copied from Periodicity.

![ExFlow Contract Invoice Periods](@site/static/img/media/contract-invoice-periods-001.png)

|Invoice Periods |  |
|:-|:-|
| **Period Start Date**:                        | Each period have a starting and ending date. Ending date is calculated from next starting date -1 day. Invoices will be matched to period due to setup in “Match Date Based on” for current contract. Period Start Date is also used as invoice document date and posting date when creating Self-Billing Invoices
| **Period Amount (NET Currency)**:             | Period Amount is max amount per period. Number of invoices is not calculated. For Self-Billing Invoices there will be only one Invoice per Invoice Period line
| **Tolerance Percentage**:                     | This will be used together with Tolerance Amount and make it possible to match and automatically approve matched invoices within tolerances. Different tolerances can be added per period
| **Payment Terms Code**:                       | Payment Terms Code on ExFlow Contract will replace Payment Terms from Vendor Card. Different payment terms can be added per period
| **Self-Billing Invoice Created**:             | Will be set to true if Self-Billing Invoice is created for that specific period. If document is deleted in Import Journal or Approval Status, it will automatically be set to false and Self Billing Invoice can be created again
| **Matched Invoice Amount (Net Currency)**:    | Totals of invoice amount per period matched in Import Journal. By personalize Amount (Net LCY) can be added<br/> Click the amount to see all Invoices and expand the view to see all lines per Invoice
| **Non-posted Amount (Net Currency)**:         | Totals of created but not posted invoice amount per period matched in Approval Status. By personalize Non-posted Amount (Net LCY) can be added<br/> Click the amount to see all documents and expand the view to see all lines per document
| **Posted Amount (Net Currency)**: | Totals of posted invoice amounts matched per period in Approval Status History. By personalize Posted Amount (Net LCY) can be added<br/> Click the amount to see all documents and expand the view to see all lines per document

![ExFlow Contract Invoice Periods](@site/static/img/media/contract-invoice-periods-002.png)

For invoiced totals see [***FactBox --> Details --> Purchase Contract Statistic***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/contract#factbox--details--purchase-contract-statistic) below.

### Extend Contract with invoice periods
To extend a contract that contains periods, add a new "Valid to Date" in General Terms and update values that is copied from Periodicity.

![Extend ExFlow Contract Periods](@site/static/img/media/contract-extend-001.png)

### Invoice Reminder
There is a function to send reminders for contract that have invoice periods and ExFlow Email Setup.
Read more under section [***Email Reminders --> Contract Invoice Reminder***](https://docs.exflow.cloud/business-central/docs/user-manual/approval-workflow/email-reminders#contract-invoice-reminder)

|Invoice Reminder |  |
|:-|:-|
| **Send Reminder**:            | Activate to send Email Reminder or Notifications. To be able to send emails and/or BC Notifications the ExFlow User needs to have access to Email/Notifications for Contract Invoice Reminder.<br/> Read more under section [***ExFlow User***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/exflow-user#add-a-new-user-manually)
| **Approval Groups**:          | Add Approval Groups for this specific contract. If none, reminders is sent to "Approval Groups" on ExFlow Email Setup
| **Invoice Reminder Period**:  | Use standard date formula calculated on Period Start Date to specify when invoice is late
| **Fixed Email Addresses**:    | To send reminders to user outside ExFlow for this specific contract. If none, reminders is sent to "Fixed Email addresses" on ExFlow Email Setup


### Contract Reminder
Contract Reminder is for sending reminders before contract is expired. When it´s time to review or cancel the Contract.

|Contract Reminder |  |
|:-|:-|
| **Contract Reminder period**:     | Specifies the period before a Contract End Date, to send a reminder
| **User to Remind**:               | ExFlow User that reminders should be sent to
| **Reminder sent**:                | Date and time when the Contract Reminder is sent.
| **User Email**:                   | Email address that the reminder is sent to.

![ExFlow Approval Status](@site/static/img/media/contract-contract-reminder-001.png)

### Matching
Activate if mathed invoice should be automatically approved

|Contract Reminder |  |
|:-|:-|
| **Auto. Approve Matched Invoice**: | For automatic approval, create an Approval Rule with approvers that matches info on Contract, and activate "Auto. Approve Matched Invoices on Contract"

![ExFlow Approval Status](@site/static/img/media/contract-matching-001.png)

### Function - Create Contract Reference
Click on "Create Contract Reference" to create the External Contract No as an ExFlow Reference. This can now be used for interpretation and matching in Import Journal.

![ExFlow Contract Menu](@site/static/img/media/contract-menu-001.png)

### Function - Show Attachments
Use this function to display the contract attachments.

![ExFlow Contract Menu](@site/static/img/media/contract-menu-002.png)

### Function - Actions – Create Self-Billing Invoice
Use this function to create Self-Billing Invoice for current contract only.

![ExFlow Contract Create Self-Billing Invoice](@site/static/img/media/contract-menu-actions-001.png)

This can also be done automatically using a job queue. Read more under section [***Self-Billing Contract Setup***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/contract#self-billing-contract-setup)

### Function - Copy Contract
Use this function to copy contents of an existing contract to a new created contract.<br/>

If using function “Copy Contract” there are some fields that will not be copied.
-	**External Contract no.** Needs to be unique per Vendor.
-	**Inactivated** Can be used on Template Contracts and will not be copied.
-	**Reference Created** The Reference is related to External Contract No. and needs to be created for each new contract.
-	**Copy Attachments to Matched Invoice** The Attachments needs to be added to each Contract.
-	**Self-Billing Invoice** There needs to be an PDF as attachment before Self-Billing can be activated. Attachments are not copied.
-	**Invoice Periods** Can be created from function “Create Invoice Periods” due to that periods will not be updated if Dates or Amounts is not the same as copied from.

![ExFlow Contract Menu](@site/static/img/media/contract-menu-003.png)

### Function - Related – Dimensions
Choose dimension code(s)/value(s) that should be used in contract invoice.

![ExFlow Contract Dimensions](@site/static/img/media/contract-menu-related-001.png)

### FactBox – Details – Purchase Contract Statistic
In FactBox Purchase Contract Statistic all related invoices in Import Journal, Approval Status and Approval Status History shows in total.

|Purchase Contract Statistics |  |
|:-|:-|
| **Matched Invoice Amount (Net Currency)**:    | Totals of invoice amount matched in Import Journal. By personalize Amount (Net LCY) can be added<br/> Click the amount to see all documents and expand the view to see all lines per document
| **Non-posted Amount (Net Currency)**:         | Totals of created but not posted invoice amount matched in Approval Status. By personalize Non-posted Amount (Net LCY) can be added<br/> Click the amount to see all documents and expand the view to see all lines per document
| **Posted Amount (Net Currency)**:             | Totals of posted invoice amounts matched in Approval Status History. By personalize Posted Amount (Net LCY) can be added.<br/> Click the amount to see all documents and expand the view to see all lines per document

![ExFlow Contract FactBox Details](@site/static/img/media/contract-factbox-details-001.png)

### FactBox – Attachments and Notes
Number of added attachments and Notes for current contract can be seen in headline.
Add attachments or notifications by clicking as picture below.

![ExFlow Contract FactBox Attachments](@site/static/img/media/contract-factbox-attachments-001.png)

#### Attachments
Attachments can be added by clicking No. of Documents. If the attachments should be added to the matched invoice “Copy Attachments to Matched Invoice” need to be activated.

#### Notes
Notes added to a ExFlow Contract will not be copied to any documents.

### Contract Workflow
How to work with ExFlow Contracts.
1.	Start by creating a contract as above
2.	Create Contract Reference (ExFlow Reference)<br/><br/>
If the invoice is within dates and amount tolerances, following workflow can be done automatically by ExFlow due to setup.<br/>
3.  Interpret Invoice with External Contract No. as Reference
4.	Import Document to Import Journal<br/>
Invoice will be matched to ExFlow Contract
5.	Create Invoice
6.	Post document
 
### Follow up Contracts without Invoice Periods
For Contract without Invoice Periods, the follow up can be done from ***FactBox --> Details --> Purchase Contract Statistic***.

![ExFlow Contract Purchase Statistic](@site/static/img/media/contract-factbox-details-002.png)

Click the Amount for more invoice details.

![ExFlow Contract Statistic](@site/static/img/media/contract-statistic-001.png)

Extend invoices to see lines

![ExFlow Contract Statistic](@site/static/img/media/contract-statistic-002.png)

### Follow Up Contracts with Invoice Periods
If the contract contains Invoice Periods, the follow up can be done per period as below. But also, for total Contract as above.
Click the Amount for more invoice details.

![ExFlow Contract Periods](@site/static/img/media/contract-invoice-periods-003.png)


### Self-Billing Contract
Self-Billing Contract is helpful for regular payments to a specific vendor without receiving any invoices. Creation of purchase invoices can be done automatically or manually per contract.

### Self-Billing Contract Setup
For Self-Billing there are some optional setups that can be useful.<br/>
Go to: ***Setup --> ExFlow Manual Setup --> Contracts (List)--> Related --> Contract Setup***

![ExFlow Contract Setup](@site/static/img/media/contracts-contract-setup-001.png)

#### Background Processing

|Background Processing |  |
|:-|:-|
| **Self-Billing Recurring Job Que Entry Active**: | To activate a Job Queue to automatically create all Self-Billing Invoices

#### Number Series

|Self-Billing Invoice Nos. |  |
|:-|:-|
| **Self-Billing Invoice Nos.**:                    | Add a separate Number Serie for Self-Billing Invoices to keep track. <br/>If no Number Serie is added, Business Standard Nos. will be used
| **Self-Billing Posted Invoice Nos.**:             | Add a separate Number Serie for Self-Billing Posting Invoices to keep track. <br/>If No Number Serie is added, Business Standard Nos. will be used.

![ExFlow Contract Setup](@site/static/img/media/contract-setup-001.png)

### Import Journal for Self-Billing Invoices
By using personalize in Import Journals it is possible to activate a specific journal for created Self-Billing Invoices. Invoices can also be automatically created by using "Automatically Create Documents". <br/><br/>
![ExFlow Import Journals](@site/static/img/media/import-journals-001-self-billing-invoices.png import-journals-001-self-billing-invoice)

### Create Self-Billing Invoices
To be able to create a Self-Billing Invoice there are some settings needed on the ExFlow Contract.

#### Activate for Self-Billing
1.	Activate Self-Billing Invoice and add a PDF-document that will be added when creating invoices.
2.	Create Self-Billing Invoices<br/>
***- Per Period:*** – to create invoice periods up to today’s date<br/>
***- All:*** – to created invoices for all periods in contract
3.	Vendor Invoice No. – Add setting to add Vendor Invoice No.<br/>
***- External Contract No with suffix Period Start date***<br/>
***- Self-Billing No. Series***<br/>Add or create a Number Serie in Vendor Invoice Nos.

![ExFlow Contract Self-Billing](@site/static/img/media/contract-self-billing-001.png)

#### Add Invoice Periods
Add Invoice Periods manually or by using the function Create Invoice Periods.

![ExFlow Contract Invoice Periods](@site/static/img/media/contract-invoice-periods-001.png)

#### Create Self-Billing Invoices Automatically
Read more under section [***Self-Billing Contract Setup***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/contract#self-billing-contract-setup)

#### Create Self-Billing Invoices Manually
Read more under section [***Create Self-Billing Invoice***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/contract#function---actions--create-self-billing-invoice)

<br/>

### Reason for Approval of Contract Matched Invoice in ExFlow Web

In any case of deviations, the contract matched document will stay in the Import Journal with an Action Message stating that ''There are warning messages not yet accepted'' and the document can therefore not be automatically approved when created.  

Action message will be shown if, for instance, the contract amount is higher than expected or other scenarios that deviates from the contract setup criteria.

![ExFlow Contract](@site/static/img/media/contracts-web-001.png)

If the document is correct and should be created, the AP user must accept the action message. 

The action message will then be copied to the Discussion Panel when the document will be created. 

![ExFlow Contract](@site/static/img/media/contracts-web-002.png)

In the Discussion Panel in Approval Status, the contract matched document will have a ''Contract Warning'', and can look like this:<br/> *''Contract Warning: Invoice amount is over Period Invoice Amount of 1 000 for Contract 2.''*


![ExFlow Contract](@site/static/img/media/contracts-web-003.png)

The same message will be shown as a chat message to the web approver, so the web approver know that this document is a contract matched document and why this specific document need their approval.

![ExFlow Contract](@site/static/img/media/contracts-web-004.png)