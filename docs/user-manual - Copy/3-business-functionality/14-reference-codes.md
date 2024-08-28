---
title: Reference Codes
sidebar_position: 14
hide_title: true
---
## Reference Codes

Go to: ***Setup \--\> ExFlow Manual Setup \--\> ExFlow Reference
Codes***

If an interpretation of Reference is done before importing the Invoice document into ExFlow Import Journal, then the reference can be used to trigger e.g., an approval workflow. When a reference is found, an approval flow can be applied either with First Approver or an Approval Rule.

If a reference is found on the imported document, that reference value is also saved to the purchase invoice/credit memo and the posted purchase invoice/credit memo.

The reference can add a Predefined ExFlow Purchase Code used to assign coding to the invoice lines (G/L account, dimensions etc.).

It is possible to use a combination of Reference and Vendor No. When a Reference is interpreted for a specific Vendor a special approval flow is to be used. Moreover, edit the list and add e.g., a dimension or a Purchaser Code to the marked ExFlow Reference. It is also possible to link multiple related references to the same Reference Code for easier administration of the Reference Codes.

![ExFlow Reference Codes](@site/static/img/media/reference-codes-001.png)


### Create a New ExFlow Reference Code from the Import Journal

If the reference value is a new reference, when clicking on the assist button (in the Reference field):

![Reference Field](@site/static/img/media/reference-code-001.png)

ExFlow will ask if a new reference should be created:

![Create new reference](@site/static/img/media/reference-code-is-missing-001.png)

By selecting "Yes", an empty ExFlow Reference code card will open where additional information can be added to the reference:

![ExFlow Reference Code Card](@site/static/img/media/reference-code-002.png)

If the ExFlow Reference field is empty, click "New" or "Edit List" and enter the information directly on the line. An alternative route is to click "Edit" to open the reference card and edit the information there.

To add a related reference to the Reference code, click on "ExFlow Related Reference Values" and Edit Lines.

![ExFlow Reference Codes](@site/static/img/media/reference-codes-002.png)

Enter the new value:

![ExFlow Reference Code Card](@site/static/img/media/reference-code-003-related-reference-values.png)

Then close and this new value will be related to the current Reference Code.

![ExFlow Reference Codes](@site/static/img/media/reference-codes-003.png)

If there is a need to add a reference code to an already existing code but instead as a reference value, it is possible to do so with the option "Reassign to Another Reference Code". This will then block the original Reference Code and put all related reference values to the new Reference Code. This change can be done within the Reference Code Card as well.

![ExFlow Reference Code Card](@site/static/img/media/reference-codes-004.png)


### Automatically Create Reference from ExFlow User
Go to: ***ExFlow Setup --> Users --> Automatically create ExFlow References***

In ExFlow Setup there is setting "Automatically create ExFlow Reference Code" which automatically create ExFlow Reference Code when new ExFlow User is created.

When a new ExFlow User is created, an ExFlow Reference Code is created with the same “Reference Code” as the “User Name” and current ExFlow User is automatically added as First Approver.

ExFlow Reference Code will be created only when setting "Automatically create ExFlow Reference" is enabled, and if the current company exists in "ExFlow User Permissions" on ExFlow User card.

![ExFlow Setup Users](@site/static/img/media/exflow-setup-users-002.png)

It is possible to create ExFlow Reference codes for all already existing users by using "Batch Create ExFlow Reference" from ExFlow Users page. ExFlow Reference codes will be created for all users, which have current company in "ExFlow User Permissions" on ExFlow User card.

Also, ExFlow Reference Code can be created only for one selected ExFlow User from ExFlow User page, or ExFlow User card by using "Create ExFlow Reference".

![ExFlow Setup Users](@site/static/img/media/exflow-users-002.png)
