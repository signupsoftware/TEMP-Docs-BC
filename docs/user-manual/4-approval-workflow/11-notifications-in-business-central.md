---
title: Notifications in Business Central
sidebar_position: 10
hide_title: true
custom_edit_url: null
---
## Notifications in Business Central
If the ExFlow User is a System User (associated to User in Business Central) then Notifications in Business Central can be activated. Read more under section [***ExFlow Users***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/exflow-user#add-a-new-user-manually) for setup.

There are four kinds of notification messages. Unapproved documents in active company, unapproved documents in other companies, unread comments and missing invoices for contract periods.
<br/>

### Documents for Approval
If the user has documents to approve in the current company, then click on the link "Approve the documents":

![ExFlow Notification](@site/static/img/media/image336.png)

This will open a new page where the user will be able to approve the documents in the current company. 

If the user has documents to approve in any other companies, then click on the link "Approve the documents":

![ExFlow Notification](@site/static/img/media/image337.png)

This will present the user with a list, similar to the following:

![ExFlow Unapproved Documents Per Company](@site/static/img/media/image338.png)

Click on the number to the right to open a new page where the user will be able to approve the documents in the selected company.

Read more about this under section [***Approval in Business Central.***](https://docs.exflow.cloud/business-central/docs/user-manual/approval-workflow/approval-in-business-central#approval-in-business-central)<br/><br/>

### Discussion Panel / Chat and Line Comments

Discussion Panel can be found in FactBox in "Import Journal", "Approval Status", "Approval Status History" and "Deleted Documents" in Business Central.

On ExFlow Web it is called **Chat**.

Comments written in Discussion Panel in Business Central or in Chat on ExFlow web will appear on both places on the document.

Use @ and "ExFlow User Code" to tag an approver. The Approver will automatically get access to this document even if the Approver is not included in approval flow. To be able to tag an Approver on a document, the approver needs access to the company document is created for, in ExFlow User Permissions.

It is possible to send notification and/or email to the tagged Approver, but then some setup is required.

For an ExFlow User (connected to a "System User") Notifications can be activated in Business Central. Read more under section [***ExFlow Users***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/exflow-user#add-a-new-user-manually) for setup.

If the user has comments to read in the current company, then click on the link "Read comment"

![ExFlow Notifications](@site/static/img/media/notifications-new-comments-001.png)



If the user has comments to read in other companies, then clicking on the link "Read comment":

![ExFlow Notifications - Comments in other companies](@site/static/img/media/image341.png)

This link will present the user with a list similar to the following:

![ExFlow Notifications](@site/static/img/media/image342.png) 

Clicking on the number in the right-hand column will open a new page where the user will be able to read comments in the selected company.

### Chat Notification History

Go to: ***ExFlow History --> ExFlow Chat Notifications***

An ExFlow User can view ExFlow Chat Notifications the user has been
tagged in for the last 90 days.

Double click on the message or "Show Document" to view wright a new
message on the same document.

In "ExFlow Chat Notification List" all new unread messages will show in Bold
text.

![ExFlow Chat Notification List](@site/static/img/media/image343.png)

| Chat Notification History List |  |
|:-|:-|
|**Show Document:** |Open Document to read whole message and to send a message.
|**Show Unread:** |Show only messages that is unread.
|**Show All:** |Show all messaged for the last 90 days.
|**Reload List:** |Reload to view new messages.
|**Open in Excel:**| Open list in Excel.

| Chat Notification History |  |
|:-|:-|
|**Company:**| The company the document is created in, and where the user is mentioned.
|**Document No.:** |Specifies the Document Do.
|**Journal Type**| Specifies the area the message related to
|**Vendor No:** |Pay-To-Vendor No for the document.
|**Comment made by**| Specifies the user that wrote the comment.
|**Preview Message**| Shows a preview of the message.
|**Last Notification Date:** (hidden field) |Date when user was last mentioned on the document.


All messages from Chat will show in Discussion Panel FactBox.

![ExFlow Approval Status Card](@site/static/img/media/image345.png)

On ExFlow Web in inbox document line @ is highlighted on unread message
if the Approver is mentioned on the document. Click on the document to
open, read, and write comments.

![ExFlow Web - Inbox](@site/static/img/media/image346.png)

All messages will also display in Inbox even if the Approver is not
included in approval flow.

Click the link to open document, read and write comments.

![ExFlow Web - Inbox](@site/static/img/media/image347.png)

On the document the bubble is red if there are any unread messages.

![ExFlow Web - Document Chat](@site/static/img/media/image348.png)

![ExFlow Web - Document Chat](@site/static/img/media/image349.png)

### Import Journal - Discussion Panel (Message will be sent when document is created)

When adding a comment in Discussion Panel on a document in Import Journal and click "SEND" the comment can be seen in FactBox to the right marked with creating Users ID, Date and Time.

If a User is mentioned by using @, a message, email or Notification in Business Central, can be sent to ExFlow Users that is associated with a Business Central User. 


For ExFlow Users that is not associated with a Business Central User the email will be sent when the document is created. This is due to that ExFlow Web Users cannot see this documents or comments in Import Journal.

Read more under section [***ExFlow Users.***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/exflow-user#add-a-new-user-manually)


![ExFlow Import Journal - Discussion Panel](@site/static/img/media/image350.png)



### Approval Status - Discussion Panel

When adding a comment in Discussion Panel from Approval Status and click "SEND" the comment can be seen in FactBox to the right marked with creating Users ID, Date and Time. On ExFlow Web it will display in Chat on the Document.

If a User is mentioned by using @ the User will be able to see this
document and comment on ExFlow Web even if the User is **not** in the
approval flow. A message can also be sent by email.

![Discussion Panel](@site/static/img/media/image351.png)

To send email messages from Discussion Panel some setup is required in
ExFlow Email Setup and Job Queue Entries.

### Deleted Documents - Discussion Panel

Message created before document is deleted will be saved on document in
ExFlow Deleted Documents.

There is no possibility to add message from Deleted Documents due to
that Deleted Documents cannot be seen on ExFlow Web.

### Settings on ExFlow User

On ExFlow User Card there are some settings that are used for both
ExFlow Reminders and ExFlow Comments.

**Email:** Enter Email address

**Language Code:** In what language email will be sent.

**Preferred Approval Client:** Select environment for settings in links
sent in emails for both Messages and Reminders.

![ExFlow User Card](@site/static/img/media/image352.png)

### Comment on Line Level

A Comment can be made on a line level on ExFlow Web, however the comment
will not appear in Discussion Panel in Business Central or in Chat on
ExFlow Web. Only on the line where the comment is added.

![ExFlow Web - Document Line Comment](@site/static/img/media/image353.png)

The comment will be found on Doc. Line Approvers in Business Central.

![ExFlow Approval Status - Document Lines](@site/static/img/media/image354.png)
