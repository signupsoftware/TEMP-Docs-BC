---
title: ExFlow User
sidebar_position: 2
hide_title: true
custom_edit_url: null
---
## ExFlow User

To be able to log in to ExFlow Web, "ExFlow Users" need to be created.

Adding a new user will automatically create an Approval Group with the
same name.<br/>



### Add Default Setup for ExFlow Users

Go to: ***Setup --> ExFlow Setup***

Also, some default settings are possible in ExFlow Setup, like adding a default Language Code, Preferred Approval Client or perhaps a Default User Coding Rule ID.
 
One of the settings is “Default User Coding Rule ID”. It makes the setup of a new ExFlow User easier. Set “Default User Coding Rule” in ExFlow Setup, add a new ExFlow User Permission line with a particular Company and previously in ExFlow Setup defined User Coding Rule will be applied.

| ExFlow Setup - Users      |   | 
|:-|:-|
| **Language Code:**                            | Add language code for emails sent to ExFlow approvers
| **Preferred Approval Client:**                | Specifies if the standard hyperlink in the emails for Reminders and Messages will take the user to Business Central or ExFlow Web
|**Approval Selection Timeout**| Specifies the timeout used for approval selection
|**Default User Coding Rule ID**| Specifies the default security role that is used when creating new approvers
|**Default Admin Role ID**| Specifies the default security role that is used when creating new approvers
|**Default Accountant Role ID**| Specifies the default security role that is used when creating new approvers
|**Default Approver Role ID**| Specifies the default security role that is used when creating new approvers
|**Default Base Role ID**| Specifies the default security role that is used when creating new approvers
|**Default Reader Role ID**| Specifies the default security role that is used when creating new approvers
|**Default Web Service Role ID**| Specifies the default security role that is used when creating new approvers
|**Default Purchaser Role ID**| Specifies the default security role that is used when creating new approvers
| **Automatically Create ExFlow Reference:**    | Select to automatically create ExFlow References. <br/> Read more under section [***Reference Codes***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/reference-codes)
|**Default Confidential Role ID**| Specifies the default security role that is used when creating new approvers <br/> <br/> Read more about permissions under section [***Permissions on a Business Central user***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/) 




![ExFlow Setup - Users](@site/static/img/media/exflow-setup-users-001.png)


### Import ExFlow Users from Excel

Besides manually adding new users it is possible for administrators to add ExFlow Users by Importing Users from Excel "Import Users".<br/>

To Import from Excel, use the "Download Template" for Excel spreadsheet.

![ExFlow Users List](@site/static/img/media/exflow-users-001-export-import.png)
<br/><br/>

### Add a New User manually

Go To: ***Setup --> ExFlow Manual Setup --> ExFlow User***

| ExFlow User |  |
|:-|:-|
| **User ID:**                      | Add User ID without Domain
| **User Name:**                    | Add Approvers' full names
| **Email:**                        | Microsoft Authentication (AAD) email address that ExFlow will use for communication with approvers, i.e., log in to ExFlow Web, reminders if approver have documents to approve and ExFlow Comments from Discussion Panel/Chat
| **Contact Email:**                | Email address from the connected system user in Business Central. If the M365 email is different to the contact email, then the inbox reminder will be sent to the contact email address instead. However, login to ExFlow Web will still be via M365/AAD email
| **Language Code:**                | In which language emails will be sent
| **Preferred Approval Client:**    | Specifies if the hyperlink in the emails for Reminders and Messages will take the user to Business Central or ExFlow Web
| **Full Document Access:**         | Specifies if user should have access to ExFlow documents in all companies
| **System User:**                  | Specifies if the ExFlow user also is a valid system user.
| **System User Name:**             | Connected System User.
| **Previous System User Name:**    | If connected System User is changed, this field will show previous value
| **Time Zone:**    | Shows the time zone of the user to present timestamp in the local time
| **Blocked:**                      | This will show if Approver is blocked in all companies <br/>Read more under section [***Approver Leaving the Company***.](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/exflow-user#approver-leaving-the-company)



#### Email Reminders
| Email Reminders |  |
|:-|:-|
| **Unapproved Documents:**         | Select Yes/No if ExFlow should send emails if the approver have documents to approve
| **Discussion Panel:**             | Select Yes/No if ExFlow should send emails if the approver is mentioned in a Discussion Panel/Chat
| **Contract Invoice Reminder:**    | Select Yes/No if ExFlow should send emails if contract invoices is missing

Both unapproved documents and unread comments will still show in ExFlow Web.


#### Business Central Notifications
If the ExFlow User is a System User, notifications can be added in Business Central.

| Business Central Notifications |  |
|:-|:-|
| **Unapproved Documents:**         | Select Yes/No if ExFlow should show notifications for unapproved documents for the approver (System User) on the Role Center page
| **Discussion Panel:**             | Select Yes/No if ExFlow should show notifications for mentions in a Discussion Panel/Chat for the approver (System User) on the Role Center page
| **Contract Invoice Reminder:**    | Select Yes/No if ExFlow should send notifications if contract invoices is missing

![ExFlow User Card](@site/static/img/media/exflow-user-004.png)

Learn more about Notifications under section [***Approval Workflow --> Notifications in Business Central.***](https://docs.exflow.cloud/business-central/docs/user-manual/approval-workflow/notifications-in-business-central#notifications-in-business-central)




### Add company access and web permission role under Permissions

| Permissions|  |
|:-|:-|
| **Company Name:**             | Add company from list that user should have access to. To be able to tag an approver the user needs to have access to the company document is created in
| **Web Permission Role:**      | All ExFlow Users need a Web User Right Level for ExFlow Web   <br/> Permission set on the ExFlow user is for web permission only   <br/>ExFlow User that should administrate documents in ExFlow needs to be a System User to be able to open ExFlow Pages.     <br/><br/>Read more below how to [***Create a System User***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/exflow-user#create-a-system-user)    <br/><br/>**Approver:** <br/>Approver can Approve, Reject, or set a document On Hold      <br/>The approver has only access to documents where approver is included in approval flow. No changes are allowed<br/><br/>**Approver (Power):** <br/>Same permission as Approver. Add and Forward to other Approver. Adding or changing in coding is allowed i.e., G/L Account or Dimensions       <br/><br/>**Approver (Super):** <br/>Same permission as Power User. See all approved documents in ExFlow History       <br/><br/> **Admin:** <br/>Admin permission in ExFlow Web. This user can do settings that applies for all Approvers in ExFlow Web.      <br/><br/> Read more about this under section [***Web User Level Permissions***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/web-user-level-permissions)
| **User Coding Rule ID:**              | If an Approver should be able to do changes in coding on document line in ExFlow Web, ExFlow User Coding Rules can be used to decide/restrict what values he/she can select. All Approvers need a Coding Rule         <br/>Read more about this under section [***Business Functionality --> User Coding Rules***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/user-coding-rules#user-coding-rules)
| **Related Resource No.:**             | It is possible to connect a Resource with an ExFlow user, to add a specific Approver automatically from "Person Responsible" on Project <br/>Read more under section [***Business Functionality --> Dynamic Approval Flow for Projects***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/approval-rules#dynamic-approval-flow-for-projects)
| **Related Purchaser Code:**           | Add Purchaser to send reminder if Purchase Receipts is missing. This also requires ExFlow Email Setup. Or to build the approval rule based on Purchaser
| **Dimension Filter:**                 | Will extend the Approvers Permission to see history in Search on ExFlow Web <br/>Approver will be able to see all documents with this dimension value included
| **Replaced by User:**                 | If Approver is blocked. Read more under [***Approver Leaving the Company***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/exflow-user#approver-leaving-the-company)
| **Max Amount for Final Approval:**    | Specifies the max approval amount for the selected Approver. Only applicable when the User is the last approver in an approval flow
| **Blocked:**                          | If Approver is blocked. Read more under [***Approver Leaving the Company***.](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/exflow-user#approver-leaving-the-company)
|**Access to Confidential Documents**|  Specifies if the user have access to see Confidential Documents or not. Read more under [***Confidential Documents***.](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/confidental-documents#confidential-documents)


![ExFlow User Card](@site/static/img/media/exflow-user-permissions-001.png)<br/>

### Create a System User

Go to: ***Business Central Standard User***

ExFlow User can also be created from Business Central User, by using “Create ExFlow User”. Action can be reached from Business Central User card, or “Users” main page.

![Business Central User](@site/static/img/media/business-central-user-001.png)

In Users page select one or multiple Users and click “Create ExFlow User”. This action opens a new page displaying a temporary table with the selected users presenting all the values that will be pulled and copied over to the ExFlow Users once completed.

The “ExFlow User Exists” column in the table shows whether the ExFlow User has already been created or not. All other values of all other remaining fields have been copied from Business Central User card but can be modified if necessary.

![ExFlow User Card - Associated System User](@site/static/img/media/business-central-user-002.png)

User Coding Rule ID will be added automatically on newly created ExFlow User card, depending on the value selected on “Default User Coding Rule ID” in ExFlow Setup.

Business Central User will be associated automatically to ExFlow User as an System User.

User Permission Sets automatically will be updated on User card for the newly created ExFlow Users. Depending on what Role or Web permission Role they’ve specified, the Business Central User will be updated with EX ADMIN or EX APPROVER.

#### **Permissions on a Business Central user**
These are all available permissions set to use on a system user.

| Permission set |  |
|:-|:-|
|**EX BASE**| Permission set that is granted automatically when installing ExFlow, this is needed to be able to access pages and cards that have ExFlow functionality in them (such as Purchase Order, Purchase Quote etc)<br/>
|**EX ADMIN**| Full access to all tables and pages for ExFlow.<br/>
|**EX ACCOUNTANT**| Limited access to pages. No access to setup pages (except re-invoicing pages). Can administrate ExFlow Users.<br/>
|**EX READER**| Same as EX BASE but with only read permission.<br/>
|**EX APPROVER**| Access to ExFlow Search and ExFlow Approval Documents. Used for approving invoices within Business Central.<br/>
|**EX PURCHASER**| Access to use functions related to ExFlow on Purchase Orders and Quotes, such as adding approvers, changing approval flow. Also access to ExFlow Order/Quote Status.<br/>
|**EX WEB SERVICE**| Used for the web and is assigned automatically when creating the Application from ExFlow setup. Needed only for ExFlow Web and Importing documents through web service.
|**EX CONFIDENTIAL**| Used for handling confidential documents.
<br/>



### Add a Replacer During Vacation Time

Go To: ***Setup --> ExFlow Manual Setup --> ExFlow User***

When a user is absent or on holiday a replacer can be assigned who can
handle his/her documents.

Click "Add Replacer".

Select the user that is to be replaced in the "Approver" field and then add the replacer. A user can be replaced in a single company or all companies, but only if the replacer have access to the company. Remember to always set a start and end date. Click "Add Replacer" when all information is filled in.

![ExFlow User Card](@site/static/img/media/replacer-001.png)

![ExFlow Replacer](@site/static/img/media/replacer-002.png)

The replaced user can still approve even if there is a replacer in place. Both can approve. Both will receive email notifications.

![ExFlow Approval Group Card](@site/static/img/media/approval-group-008.png)
<br/><br/>

### Approver Leaving the Company

Go To: ***Setup --> ExFlow Manual Setup --> ExFlow User***

Select the user that is leaving.

Choose one company at a time and click on "Block/Unblock User".

![ExFlow User Card](@site/static/img/media/exflow-user-006.png)

![Block User](@site/static/img/media/block-user-001.png)

When blocking the user, add a replacer in the **"New User"** field. This updates the documents in the approval workflows.

Select the checkbox **"Replace History"** to give the new user access to the blocked users historical documents.

Select the **"Replace Approval Rule and Coding Rules"** to automatically replace the blocked user in all existing rules. Or create/change in Approvals and rules manually according to the situation.

When the ExFlow User is blocked in all companies, User Card will automatically be Blocked and hidden from ExFlow User List.

Administrators can view hidden Blocked Users with function "View/Hide Blocked".

To see who is replacing the blocked user open ExFlow User Card.

![ExFlow User Card](@site/static/img/media/exflow-user-007.png)
<br/><br/>

### Approver Who Left the Company, Returns

Go To: ***Setup --> ExFlow Manual Setup --> ExFlow User***

To reinstate an approver who has been blocked, click View/Hide Blocked to show all blocked users. Select User and Click Block/Unblock User.

![ExFlow User Card Permissions](@site/static/img/media/exflow-user-permissions-002.png)

Click "Yes" on the question Unblock.

![Unblock User](@site/static/img/media/do-you-want-to-unblock-001.png)

The returned user must now manually be added in Approval- and Coding rules again if "Replace Approval Rule and Coding Rules" was used when blocking the user.
<br/><br/>

### Approver changing Email Address

Go To: ***Setup --> ExFlow Manual Setup --> ExFlow User***

Create a new ExFlow User with new email address.
Open the user with the previous email address and use function Block/Unblock User. And add the new user in field "New User" and tick both "Access History" and "Replace Approval Rule".
