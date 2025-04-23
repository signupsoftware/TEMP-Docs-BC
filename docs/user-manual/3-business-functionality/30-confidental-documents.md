---
title: Confidential Documents
sidebar_position: 30
hide_title: true
custom_edit_url: null
---
## Confidential Documents

There are instances when it is necessary to send confidential documents for approval in ExFlow Web to specific users only. These documents should not be accessible or searchable to other users who are not part of the approval process.

Go to: **ExFlow Setup --> Confidential Documents** 

To be able to work with the confidential functionality, a template PDF must be uploaded to hide the original confidential document image for non-confidential users. 

It will not be possible to create and send out confidential marked documents for approval without having an uploaded template PDF image. 

Click on the three dots to attach the selected template.

![Confidential Documents](@site/static/img/media/exflow-setup-confidential-documents-001.png)

If any pdf template changes need to be made afterwards, for instance download the current uploaded template or replace current template, simply go back to the three dots, and make the necessary changes. 

![Confidential Documents](@site/static/img/media/exflow-setup-confidential-documents-002.png)

| Replace Original PDF with |    |
|:-|:-|
|**Download Current PDF**                               | Select this option to download the current uploaded pdf image.
|**Replace Current PDF**                               | Select this option to replace the current uploaded pdf image.
|**Delete Current PDF**                               | Select this option to delete the current uploaded pdf image. Observe, when deleting this template, then all Confidential marked document PDF images will be shown for all users.

### Confidential Access
To be able to work with Confidential Documents and see the document image in Business Central, then the ExFlow user must have an associated system user and Confidential access must be given. <br/>

#### Provide Confidential Access

For access, go to the **ExFlow user card** and enable the **‘’Access to Confidential Document’’** checkbox. When enabling this, a User Permission Set called EX CONFIDENTIAL will be set automatically on the associated system user card. 

![Confidential Documents](@site/static/img/media/exflow-user-confidential-access-001.png)

Confidential Access can be set for all companies or selected companies. Choose ‘’Yes’’ to give access to all companies or choose ‘’No’’ to give access to a specific company.

![Confidential Documents](@site/static/img/media/exflow-user-confidential-access-002.png)

If a user accidentally got confidential access to all companies instead of one specific company, simply untick the checkbox to remove the confidential access and reselect the specific company. The permission set on the associated system user will be updated instantly. 

![Confidential Documents](@site/static/img/media/exflow-user-confidential-access-003.png)

Below ExFlow user now has access to see all confidential documents in the SignUp company only. 

![Confidential Documents](@site/static/img/media/exflow-user-confidential-access-004.png)

#### Replacers
Adding a non-confidential user as replacer to a confidential user is not supported, this to preserve the confidential document images. 

### Confidential Approval 

Confidential documents need to have a confidential approval flow. A regular approval flow cannot be applied. 

#### Create a Confidential Approval Flow

Go to a regular ExFlow Approval Rule to create rules to be applied for Confidential Documents.
Confidential Documents require a ‘’Confidential Approval’’ marked Approval Rule. 

When Confidential Approval is enabled in an approval rule, then a filter will be set on the Approval Rule Lines so only Approval Groups with Confidential Access can be added into the confidential approval flow. 

Enabling Confidential Approval will also automatically disable the approval rule. The reason is that Confidential Approvals must be chosen manually, and not be set dynamically. 

According to this Pension Agency rule, only Jane is set to approve upcoming pension documents on ExFlow Web. 

![Confidential Documents](@site/static/img/media/approval-rule-confidential-approval-001.png)

### Confidential Workflow 
Both users with and without confidential access can work with Confidential Documents in Business Central. However, only users with access can view the original document PDF image. 

An example will follow for both users with access to confidential documents and for non- confidential users. 

Confidential fields are hidden per default in all ExFlow pages. To begin, use Personalize to add the field **‘’Confidential Document’’** to the import journal header and other relevant pages. 

![Confidential Documents](@site/static/img/media/import-journal-confidential-001.png)

If a document should be handled as a confidential document, simply enable the ‘’Confidential Document’’ checkbox on the chosen document. 

When the document is marked as Confidential, then regular approval rules will not be applicable, and the list of approval rules will be filtered on rules where ''Confidential Approval'' are enabled. 

For this below example, only two confidential rule are applicable.

Confidential marked approval rules must be selected manually. To repeat, these rules are not dynamic and will therefore not be automatically applied on documents in import journal. 

![Confidential Documents](@site/static/img/media/import-journal-confidential-002.png)

It is not obligated to set an approval rule, it is still possible to manually add approvers in Approval Proposal as well, if the users have access to confidential documents. Non-confidential users will not be applicable and therefore not selectable. 

Moreover, it will not be possible to choose an approval group containing both confidential users and non-confidential users. 

Let’s illustrate an example. If an imported document already has an approval rule applied with a proposed approval flow, and a user enable the Confidential Document checkbox, then this question will pop up: 

![Confidential Documents](@site/static/img/media/import-journal-confidential-003.png)

Users with no access to Confidential Document will be removed from the approval flow. Only users with access will stay if they are manually added to the flow.

Since Alicia and Theodora aren’t users with access, they will be removed. 

Use a ‘’Confidential rule’’ (confidential approval) or add authorized users as approvers manually and create the document as usual. The document will then be sent to the approver of choice.  <br/>

#### Re-Invoicing Confidential Documents
The Confidential Documents- functionality cannot be used together with Re-invoicing. Following Action Message will appear to the Import Journal Lines if so: ''Re-Invoicing functionality cannot be used together with Confidential Documents''

#### Automate Confidential Documents in Vendor Setup 
If all documents for a certain vendor are supposed to be confidential and have the same approval flow and coding etc., this can be easily arranged from Vendor Setup Card, among other current automation features to make the confidential workflow both efficient and trusted. 

However, if the vendor is not marked to handle Confidential Documents, then it’s not possible to utilize an automated confidential workflow. 

![Confidential Documents](@site/static/img/media/vendor-setup-confidential-001.png)


### Confidential Documents in Approval Status
As mentioned, users with access to confidential documents can view and work with each other’s confidential documents in Business Central, as usual.

![Confidential Documents](@site/static/img/media/confidential-documents-approval-status-001.png)

### Workflow as a non-confidential user
Users with no access to confidential documents will not be able to see the original pdf image in the PDF Preview. 

Non-confidential users can only view the PDF template image according to what is added in ExFlow setup. This is due to the purpose to hide and protect the original document image. 

In this example, this will be their image to view:

![Confidential Documents](@site/static/img/media/import-journal-confidential-004.png)

If the user clicks on show document image or use shortcut Ctrl+I, then the following message will be displayed:

![Confidential Documents](@site/static/img/media/import-journal-confidential-005.png)

#### Deselect a document or vendor from being marked as Confidential
Non-confidential users can enable ''Confidential Document'' for a Vendor in Vendor Setup, but not the opposite.

Additionally, if a document is mistakenly labeled as a "Confidential Document" by a non-confidential user, only a user with access can reverse it. When that is done, and a user verifies the document, ExFlow will automatically apply a regular approval rule dynamically, if an applicable rule exists.

![Confidential Documents](@site/static/img/media/import-journal-confidential-006.png)

### Confidential Documents on ExFlow web 
In opposition to working in Business Central with confidential documents, the web is more limited.

When a document is sent for approval, the web approver can easily see that this document is a confidential document by a visible tag next to the document number. 
![Confidential Documents](@site/static/img/media/confidential-documents-web-001.png)

Users cannot change coding, add approvers, or forward the confidential document to another user. A confidential document can only be approved, rejected, or set on hold.

In the example below, the approver tries to enter a dimension and receive this error message, since coding changes are not allowed. 

![Confidential Documents](@site/static/img/media/confidential-documents-web-002.png)

It is also not permitted to search for another confidential document where users themselves are not a part of the document’s approval flow.

For instance, if an approver (regardless of confidential access) tries to search for a confidential document without being involved in the flow, the search result will be blank. 

![Confidential Documents](@site/static/img/media/confidential-documents-web-003.png)



### Allow Coding Changes on ExFlow Web
Go to: **ExFlow Setup --> Confidential Documents --> Allow Coding Changes on Web**

Enable ''Allow Coding Changes on Web'' to allow coding changes on ExFlow Web. The web approver will then be permitted to change a current coding for their confidential document. 

If splitting the lines on ExFlow web, then the current confidential approval flow will be copied over to the changed coding. It will however not be possible to add other confidential approval flows or to add non-confidential approvers to approve the adjusted coding. 

