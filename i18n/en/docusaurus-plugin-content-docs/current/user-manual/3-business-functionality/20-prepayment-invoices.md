---
title: Prepayment Invoices
sidebar_position: 20
hide_title: true
custom_edit_url: null
---
## Prepayment Invoices

This function is built on Business Central Standard functionality.

To create and approve a Prepayment Invoice, ExFlow creates a copy of the invoice that will be posted from Purchase Order.

### Prepayment Setup

To be able to create a Prepayment Purchase Invoice the standard setup is required in General Posting Setup. VAT will be calculated from setup from G/L Account added in setup.

To check setup for prepayment, use "Preview Prepmt. Invoice Posting" on the prepayment order.

#### Prepayment in ExFlow Setup

Add a Prepmt. Inv. Nos. for Prepayment Invoice to separate Prepayment Invoices to make it clearer. Or add same No. Serie as Invoice Nos. in Purchases & Payables Setup.

![ExFlow Setup - General](@site/static/img/media/exflow-setup-general-004.png)

![Purchases & Payables Setup - Number Series](@site/static/img/media/purchases-payables-setup-001.png)

Also, there are settings for Prepayment under General that can be useful.

| Purchases & Payables Setup |  |
|:-|:-|
| **Check Prepmt. when Posting:**       | Prevents posting receipts or invoice a Purchase Order that has an unpaid prepayment amount.
| **Prepmt. Auto Update Frequency:**    | Specifies how often the job must run that automatically updates the status of orders that are pending prepayment.

![Purchases & Payables Setup - General](@site/static/img/media/exflow-setup-general-007.png)

### Prepayment Purchase Order

Setting on the Purchase Order is needed.

Add Prepayment Percentage on the Order Card and use Compress if needed.

Untick Compress Prepayment to specify all lines on the Prepayment Invoice.

![Purchases Order - Prepayment](@site/static/img/media/purchase-order-002.png)

### Prepayment Purchase Invoice

Posting of prepayment Invoices will still be made from Prepayment Order in Business Central Standard in the background. ExFlow Prepayment Invoice is only a mirror of a posting to be.

Therefore, no changes are allowed except for a few fields that will update Prepayment Invoice when posting:

Document date, Posting Date, Due Date, Vendor Invoice No., Block Document, OCR, Payment Terms, Payment Method and On Hold. And Note of Goods if SweBase is installed.

There can only be one Prepayment invoice, per order, out for approval.

To be able to create second Prepayment the first Prepayment Invoice needs to be posted and Purchase Order Prepayment Percentage increased to match the amount on the second Prepayment Invoice.

**If any updates are needed it must be updated from the order card**. <br/>
Change document type back to Invoice and all Prepayment Invoicing Lines will be deleted. Update the order and change to Prepayment Invoice to receive new updated lines to Import Journal.

Any changes on the prepayment line will give the message *"Changes on the prepayment invoice can only be done on the order. Then, to update invoice line change document type to Invoice and then back to Prepayment Invoice".*

For Approval: First Approver, Approval Rule, and manual added approvers are allowed.

For automatically added approval flow use same settings as for Invoices.

To be able to create final invoice, all prepayment invoices need to be posted.

### Prepayment Invoice in Import Journal

When importing an interpreted Purchase Invoice in Import Journal with missing receivable lines an error message will occur: **Order No 106049 has no received lines.**

![ExFlow Import Journal - Prepayment](@site/static/img/media/import-journal-027.png)

Update Document Type to Prepayment Invoice and press Verify.

![ExFlow Import Journal - Prepayment](@site/static/img/media/import-journal-028.png)

In this example we have added an Approval Rule based on G/L Account 1480 used for prepayment and added Erik as an approver.

![ExFlow Approval Rule - Prepayment](@site/static/img/media/approval-rule-009.png)

If setup is done correctly Prepayment Lines will be added automatically.

In this example we have added G/L Account No. 1480 in General Ledger Setup and NO VAT (INGEN MOMS) on the G/L Account Card 1480.

Since we did not use Compress Prepayment on the Purchase Order, Prepayment Invoice will specify all lines with Description from the order.

![ExFlow Import Journal - Prepayment](@site/static/img/media/import-journal-029.png)

Create to send Prepayment Invoice for approval.

### Prepayment in Approval Status

In Approval status following message will be created in Discussion Panel will also show in Chat on ExFlow Web:

![Discussion Panel - Prepayment](@site/static/img/media/discussion-panel-001.png)

Information regarding Prepayment Order can also be seen on Card. Prepayment Order No is also shown on document header on the Approval Status page.

Since posting on Prepayment Invoice will be done from the Purchase Order, changes are not allowed except for a few fields that will update invoice when posting:

Document Date, Posting Date, Due Date, Vendor Invoice No., Block Document, Payment Terms, Payment Method and On Hold.

Also, SweBase field OCR and Recipient Bank Account can be changed and will update the order when posting.

If any other changes are needed, delete the document, and start from the beginning by importing to Import Journal.

![Purchase Invoice - Prepayment](@site/static/img/media/purchase-invoice-003.png)

### Prepayment Approval on ExFlow Web

In the Chat on ExFlow Web the Approvers can see following message:

![ExFlow Web - Prepayment message](@site/static/img/media/web-chat-001.png)

No changes are allowed on a Prepayment document. Therefore, approvers can only Approve, Reject, or set document to Hold. Approvers can also Add or Forward due to permission on the Approver.

![ExFlow Web - Prepayment](@site/static/img/media/web-purchase-invoice-001.png)

If user tries to change coding, following error message will occur when approving:

![ExFlow Web - Prepayment error message](@site/static/img/media/web-dynamics-error-001.png)

### Posting Prepayment Invoice

After the Prepayment Invoice is approved, verify and post as usually.

### Prepayment History

Go to: ***Purchase Order --> Related --> Documents --> Prepayment Invoices***

Posted Prepayment Invoice can be traced from the Purchase Order Card.

![Purchase Order - Prepayment](@site/static/img/media/purchase-order-003.png)

Prepayment Invoice and approval history can also be traced in Approval Status History.

![ExFlow Approval Status History - Prepayment](@site/static/img/media/approval-status-history-001.png)

### Final Prepayment Purchase Invoice in Import Journal

When receivables are posted on the Prepayment Purchase Order, the final Invoice needs to be posted as well.

In the example above the Prepayment Invoice is done with 100 % and VAT 0%. Therefore, final Invoice will be posted with amount only for VAT if no other extra charges is added to the invoice.

Interpret the final Purchase Invoice and import to Import Journal.

![ExFlow Import Journal - Prepayment](@site/static/img/media/import-journal-030.png)

Information regarding Prepayments that is reduced, can be seen in the Fact Box on the right side, under Document Details.

![ExFlow Import Journal - Document Details for Prepayment](@site/static/img/media/import-journal-031-document-details.png)

Approvals will be added as usually by Approval Rules.

If the 100 % prepayment order is not fully received when creating the final invoice in Import Journal, an action massage will refer to this warning message that requires to be accepted before sending it out for approval.

![ExFlow Import Journal - Warning message for partially matched 100% prepayment orders](@site/static/img/media/warning-messages-003.png)

### Final Prepayment Invoice in Approval Status

When creating the final prepayment invoice following message will be added in Discussion Panel:

![Discussion Panel - Prepayment](@site/static/img/media/discussion-panel-002.png)

The approver still needs to approve the full order amount on lines. Reduction will be done when posting the order.

![ExFlow Approval Status - Prepayment](@site/static/img/media/approval-status-006.png)

### Final Prepayment Invoice in ExFlow Web

In the Chat approver can see following message:

![ExFlow Web - Prepayment message](@site/static/img/media/web-chat-002.png)

The approver still needs to approve the full order amount. Reduction will be done when posting the order.

![ExFlow Web - Prepayment](@site/static/img/media/web-purchase-invoice-002.png)

### Posting Final Prepayment Invoice

After the Prepayment Invoice is approved, verify and post as usually.

Prepayment lines will be reduced when posting as Business Standard.

### Final Prepayment Invoice History

Go to: ***ExFlow Approval Status History***

The Posted Final Purchase Invoice only shows the approved lines.

![ExFlow Approval Status History - Prepayment](@site/static/img/media/approval-status-history-002.png)

And Discussion Message still have automatically created message:

![Discussion Panel - Prepayment](@site/static/img/media/discussion-panel-003.png)

To see reduction for earlier posted prepayments, go to Card.

![Posted Purchase Invoice - Prepayment](@site/static/img/media/purchase-invoice-004.png)
