---
title: Order Matching Wizard
sidebar_position: 26
hide_title: true
custom_edit_url: null
---
## Order Matching Wizard

This user manual is your go-to guide for setting up ExFlow to effortlessly match invoices to purchase orders. Designed with simplicity in mind, the Order Matching Wizard makes the process straightforward and user-friendly.

Search for ExFlow Order Matching Wizard.

![Order Matching Wizard - Search](@site/static/img/media/order-matching-wizard-001-search.png)


### Header- or Line Matching
The first step in setting up the Order Matching Wizard is to determine whether the matching of invoices to purchase orders should be performed at a header level or line level.

**Header Level Matching:**<br/>
If you choose header level matching, the Order Matching will compare the overall invoice total with the available total value of the purchase order.

This method is suitable when the details of individual items or services on the invoice do not need to be matched with specific items on the purchase order, or if the invoice line information is too poor for accurate matching.


**Line Level Matching:**<br/>
If you choose line level matching, the Order Matching will compare each interpreted invoice line with corresponding line items on the purchase order.

This approach ensures that each individual item or service on the invoice is matched accurately to the corresponding item on the purchase order.

Line matching utilizes interpreted information such as invoice quantity, unit price, line total, and more – to get an accurate match to the corresponding purchase order line and to be able to identify any discrepancies.

### Match Documents To
The next step is to determine how invoices should be matched to purchase orders in relation to purchase receipts.
There are three options to consider:

**Receipt:**<br/>
Select this option if you want invoices to be matched only to purchase orders that have associated purchase receipts.

Ensuring that the items are received and recorded in the warehouse and align with the invoice, before matching the invoice and sending it for approval and final posting. 

**Order:**<br/>
Choose this option if you want invoices to be matched to purchase orders regardless of whether there is an associated purchase receipt.

This allows invoices to be matched even if the receipt of goods or services has not been confirmed, providing flexibility in your matching process.

Useful in scenarios such as drop shipment or when purchase receipts are not available, or required to fully match the invoice and have it sent for approval and posting.

**Order and Receipt:**<br/>
If you prefer a combination of the previous two options, select this option.

In this case, invoices can be matched to purchase orders with or without associated purchase receipts, providing maximum flexibility in matching scenarios.

Possible to match invoice lines to purchase orders with and without received item lines. Also makes it possible to match invoice lines to partially received item lines on the order and have them sent for approval and posting.

### Automatically Approve Matched Invoices
**Never:**<br/>
Select this option if you want all matched invoices to go through a manual approval process. In this case, no invoices will be automatically approved, regardless of any differences or thresholds.

**If Difference is within Tolerance:**<br/>
Choose this option if you want matched invoices to be automatically approved only when the difference between the invoice and the purchase order falls within the specified allowed threshold or tolerance for automatic approval.

This option allows for efficient processing of invoices with minor discrepancies, ensuring that only significant differences require manual approval.

**If Matched Order is Approved:**<br/>
This option adds an additional layer of approval by requiring that the matched order has been reviewed and approved through ExFlow, ensuring that invoices are automatically approved only when the necessary authorization is in place.

![Order Matching Wizard - General](@site/static/img/media/order-matching-wizard-002-general.png)

### Max Amount for Automatic Approval
If you have allowed for automatic approval of matched invoices, this is where you can specify the maximum amount for automatic approval. This parameter defines the threshold above which invoices will require manual approval, regardless of the matching results.

### Tolerance Violation Warning
Enable this setting if you’d like the accountants to receive a warning during the import of purchase matched invoices when there are discrepancies over your allowed tolerance for automatic approval. 
Either way if this setting is enabled or not, discrepancies higher than your allowed tolerance will always require the invoice line to be manually approved.

### Deviation Direct Unit Cost (%) and Deviation Direct Unit Cost (Amount LCY)
Define the deviation thresholds for the direct unit cost of invoice lines compared to the matched order lines. These thresholds determine the allowable differences between the invoice and the purchase order for automatic approval.

![Order Matching Wizard – Auto Approval](@site/static/img/media/order-matching-wizard-003-auto-approval.png)

### Automatic Difference Handling
The Automatic Difference Handling functionality allows ExFlow to automatically suggest a difference line if any additional or unexpected costs, such as freight or other charges are identified during the order matching. 
You can choose if ExFlow should suggest an invoice line of the line type Item Charge, or G/L Account.
Then specify which G/L Account, or what Item Charge to use for the suggested line.

### Max Diff. Amount (LCY) and Max. Diff. % 
Is where you can specify an allowed tolerance for the automatically suggested difference line for automatic approval.

![Order Matching Wizard - Other](@site/static/img/media/order-matching-wizard-004-other.png)

### Automatically Post Purchase Receipts
The "Automatically Post Purchase Receipts" feature allows for the automatic posting of purchase receipts in the matching process. However, please note that this feature can only be utilized when matching invoices to **“Order”** or **“Order and Receipt”**.

Matching invoices using the logic **“Order”** or **“Order and Receipt”**, allows ExFlow to fully match and send an invoice for approval and posting. However, Business Central always requires that Purchase Receipts are posted before the matched invoice can be posted and for the Purchase Order to be invoiced.

This setting allows ExFlow to Post and Invoice the approved quantity of the matched invoice lines automatically. It’s executed once the invoice has the status “Ready for Posting” in Approval Status.
With this setting disabled, you’re required to post the purchase receipts manually.

![Order Matching Wizard – Automatically Post Purchase Receipt](@site/static/img/media/order-matching-wizard-005-automatically-post-purchase-receipt.png)


### Complete the Wizard
Click "Finish" to close the Wizard and apply the settings.

![Order Matching Wizard – Complete the Wizard](@site/static/img/media/order-matching-wizard-006-complete.png)

### ExFlow Setup
Fields in ExFlow Setup that are affected by the Order Matching Wizard are selected in the image below:

![Order Matching Wizard – ExFlow Setup](@site/static/img/media/exflow-setup-po-matching-001.png)