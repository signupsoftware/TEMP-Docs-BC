---
title: ExFlow Order Status
sidebar_position: 6
hide_title: true
custom_edit_url: null
---
## ExFlow Order Status

Go to: ***ExFlow Order Status***

When an Order or Quote is marked for approval, it is to be found in
ExFlow Order Status and in ExFlow Approval Status. When an Order or
Quote is Released, status will be changed from Inactive to Active.
Unreleased Orders or Quotes have status Inactive and cannot be seen on
ExFlow Web.

### Order and Quote Approval Setup

Go to: ***ExFlow Setup --> Order and Quote Approval***

![ExFlow Setup - Order and Quote Approval](@site/static/img/media/exflow-setup-order-and-quote-approval-001.png)

|Order and Quote Approval||
|:-|:-|	
|**Purchase Order Approval**| 	Specifies if purchase order approval should used. <br/> To automatically add approval flag on all order documents "Purchase Order Approval" needs to be active. Also, to send an order for approval on ExFlow Web a PDF is needed.
|**Order Report**| 	Specifies the report id for the report that is used when creating order documents
|**Order Report Name**| 	Specifies the report name for the report that is used when creating order documents. <br/> To send an order for approval on ExFlow Web a PDF is needed.Choose a report in the list to be able to view the order PDF.
|**Only Receive Approved Order**| Enable the ''Only Receive Approved Order'' setting to prevent posting receipts if the order is not yet approved.<br/><br/> Following error message will appear if this setting is enabled and a user tries to post receipts on an unapproved order. <br/><br/> ![ExFlow Setup - Order and Quote Approval](@site/static/img/media/unapproved-order-card-only-receive-approved-order-error-message-001.png)
|**Purchase Quote Approval**| To automatically add approval flag on all Quotes "Purchase QuoteApproval" needs to be active.<br/> To send a quote for approval on ExFlow Web a PDF is needed.
|**Quote Report**| 	Specifies the report id for the report that is used when creating quote documents. To send a quote for approval on ExFlow Web a PDF is needed.<br/> Choose a report in the list to be able to view the quote PDF.
|**Quote Report Name**| 	Specifies the report name for the report that is used when creating quote documents
|**Auto Approve Order created from Quote**| This setting is relevant if both Order approval and Quote approval are set to active. With this function, it is possible to activate Auto Approve Order created from Quote. If this setting is used, all approvers from the quote will be copied to the order and the order will be immediately approved.
|**Set Current User as Default First Approver for Order/Quote**| Use to add the user who is creating the quote or the order as a First Approver of the document.<br/><br/> Depending on ExFlow Setup, the First Approver can be used as a filter in Approval Rules to create approval flows for quotes and orders. First Approver can also be an actual Approver.<br/><br/> To use this function, the Business Central User need to be an ExFlow System User. Read more under section [***ExFlow User***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/exflow-user).
|**Block Invoice in Import Journal if Order is Not Approved**| 	Specifies if invoice should be blocked if the relate order is not approved. This setting will add a Warning message when matching document to an unapproved order. <br/><br/> In this example the receivable is posted, even if the Purchase Order is not approved.<br/><br/> Then, when matching the invoice in the import journal, a warning message will inform that the received order lines are not approved.<br/><br/> ![ExFlow Import Journal - Warning messages](@site/static/img/media/image286.png)<br/><br/> As with other warning messages in the import journal it can be resolved by accepting it:<br/><br/> ![ExFlow Import Journal - Warning messages](@site/static/img/media/image287.png)<br/><br/> 
|**Check Minimum No. of Approvers for Quotes and Orders**| 	Specifies if the setting for "Minimum No. of Approvers" found under the Doc. Posting Checks Tab also applies to quotes and orders.
|**Copy Quote PDF to Order**| 	A copy of a Quote PDF attachment will be added on the Purchase Order when order is created.<br/><br/> After Purchase Order is created from a Purchase Quote, the copy of Quote PDF attachment can be found as an incoming document file in ExFlow Order Status and ExFlow Approval Status, and as an attachment in ExFlow Web as well.
|**Block Print/Send unapproved**| Setting specifies if Printing or Sending from a Purchase Order, Purchase Quote or both should be blocked if the Order or Quote is sent out on approval and not fully approved.<br/><br/>This setting is relevant only for those users who do not have permissions as EX ACCOUNTANT or EX ADMIN.<br/><br/>Users with permission set EX ACCOUNTANT or EX ADMIN will always be able to use this function, even if document is not fully approved. <br/><br/> In this example, a user who does not have permission as EX ACCOUNTANT or EX ADMIN, is using action Print/Send for not fully approved document and gets an error message. <br/><br/> ![Purchase Order - Block Print and Send](@site/static/img/media/purchase-order-001.png)
|**Send Email For Approved Order/Quote**|  	When enabled it will send Approved Order or Quote Notification to the Order- or Quote creator when the document is approved.  <br/><br/> Read more about this under section [***Approved Order/Quote***](https://docs.signupsoftware.com/business-central/docs/user-manual/approval-workflow/email-reminders#approved-orderquote)
|**Send Unreceived Order Reminder For Approved Order**|  	An Unreceived Order Reminder is sent when the document is approved and not all the Order Lines are fully received. For this to work "Match Documents To" should be set to "Receipt". <br/><br/> Read more about this under section [***Unreceived Order - Approved***](https://docs.signupsoftware.com/business-central/docs/user-manual/approval-workflow/email-reminders#unreceived-order---approved)


### Create Purchase Quote or Purchase Order for Approval

When creating a Purchase Quote or Purchase Order, due to settings, the
Approval flag will be activated and ExFlow Status Inactive.

To send the Quote/Order for approval it needs Approvers and to be
Released. The Quote/Order is now visible in both ExFlow Order Status and
ExFlow Approval Status but not yet in ExFlow Web.

If the Business Central User that creates the Order/Quote is connected
to an ExFlow User, then First Approver will be added automatically on
all lines and can therefore be used as filter in Approval Rules.

### ExFlow Approval Status

Purchase Orders and Quotes that still need some action can be found in
ExFlow Approval status. After Approval, run Verify Changes to update the
Purchase Orders or Quotes with any changes.

When a Purchase Quote is Approved and Verified, it will disappear from
Approval Status.

ExFlow will automatically create a Purchase Order. The Quote will be
deleted, as Business Central Standard, while Approval Flow, Comments,
Attachments, etc., will be stored in ExFlow Approval Status History.

Due to settings in ExFlow Setup, the Quote Approval flow can also be
copied to the Purchase Order and mark the Order as Approved. If not, and
Purchase Order Approval is activated, the Order needs to be Released.

The Quote cannot be converted to an order if it is activated for
approval but not yet approved. The function is called "Make Order".

When a Purchase Order is Approved and Verified, it will disappear from
Approval Status and can now be found in ExFlow Order Status.

![ExFlow Approval Status](@site/static/img/media/image288.png)

### ExFlow Order Status

This view is mainly keeping track on Purchase Order and Purchase Quote
Approvals.

In ExFlow Order Status the Purchase Orders or Quotes will remain as long
as they exist as a card.

The Order or Quote still needs to be approved on ExFlow Web and then
verified from ExFlow Approval Status.

After verifying the Order, the field "Order Approved and Verified" will
be ticked. In this respect Orders and Quotes behave differently since
Quotes are removed directly when the Order is created while orders will
show as invoiced until it is removed by job in Business Central
Standard.

![ExFlow Order Status](@site/static/img/media/image289.png)

Follow the present status in ExFlow Order Status column "Status".

![ExFlow Order Status](@site/static/img/media/image290.png)

It is also possible to see if the order is created from a quote and if
the approval is copied from the quote to the order.

![ExFlow Order Status](@site/static/img/media/image291.png)

#### Delete a Purchase Order
To delete a Purchase Order, the Order needs to be fully received and
fully invoiced. Deleting an order will be done through the task ***Delete
Invoiced Purchase Order***. The order will also be deleted if it is
invoiced directly from the Purchase Order Card in Standard Business
Central outside of ExFlow.

When deleting an order that is approved and fully invoiced, then
Approval Flow, Comments and Attachments, etc. will be stored in ExFlow
Approval Status History.
