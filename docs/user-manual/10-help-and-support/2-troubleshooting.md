---
title: Troubleshooting
sidebar_position: 2
hide_title: true
custom_edit_url: null
---
## Troubleshooting
<br/>

### Common Setup Issues

#### **Issue:** VAT Product Posting Group is wrong.
**Solution:** VAT Product Posting Group is copied from the setup of the G/L Account. If there is no VAT Product Posting Group on the G/L Account, this group is copied from the "Standard VAT Product Posting Group" in the "ExFlow Setup". Find this setting in ***ExFlow Setup --> General.***
<br/>

#### **Issue:** VAT amount is not correct.
**Solution:** Check that the amount in document header is the same as in the PDF-document. Check that the right" VAT Product Posting Group" is used. Modify the lines if needed and check that the document lines match the document header.
<br/>

#### **Issue:** User cannot see documents for new company on ExFlow web.
**Solution:** Add Company Name under Permissions on ExFlow User Card.
<br/>

### Common Action Messages

#### **Action Message:** See line for specific action message.
**Action Message on Import Lines:** Approvers missing.<br/>
**Solution:** Approvers are usually added automatically by Approval Rules etc. If missing it is possible to add Approval Group document line in FactBox "Approval proposal".
<br/>

#### **Action Message:** VAT Amount (1291,60) is not equal to total VAT of lines (645,80).
**Solution:** Check if the VAT Amount is correct interpreted. Check the import lines, are "VAT Product Posting Groups" correct? If not, change to the correct ones.
<br/>

#### **Action Message:** Duplicate Import Header in Journal Batch OCR - occurrence 2!
**Solution:** The Vendor Document No. has already been used in an open purchase document, Import Journal or Posted Purchase Invoice. If the line is a real duplicate - delete the journal line.

If the number is used before and this is correct, maybe a rent / insurance / subscription, set the "Allow Duplicate Invoice" to Yes on the **ExFlow Vendor Setup Card** under the General tab.
<br/>

#### **Action Message:** This invoice is flagged as Factoring and is thus not allowed to be created!
**Solution:** If User receive this message User should ensure that Buy-from Vendor is the Vendor from whom User purchase the goods while "Pay-to Vendor" is the Factoring Vendor. If this is not the case, change Vendor number.

 Factory Vendor setting can be found on the **Vendor card --> Related--> ExFlow Vendor Setup.** 
 
 Read more about this under section [***ExFlow Vendor Setup***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/vendor-setup#vendor-setup).
<br/>


#### **Action Message**: Amount (XX) is not equal to total of on lines (YY).
**Solution**: Look in the setting in **ExFlow Setup -->** **Order Matching --> Automatic Difference Line**, settings can be involved. The difference does not correspond to the "Max Diff. Amount (LCY)" or "Max Diff. %" setting (or both). Modify the amount on the header or on the lines.
<br/>

### Order Related Messages
####  **Action Message**: Document Order XXX does not exist!
**Solution**: First, check if this Order number is the same as on the scanned picture. If this is correct, go to "Order No." column and look on this Orders numbers.
<br/>

####  **Action Message:** Order No XX has no received lines.
**Solution:** When a user gets a message that the order cannot be matched against receipt line, this needs to be handled on the Purchase Order Line. Note that receipts are not handled in ExFlow.

Go to Purchase Order e.g., via "Order No.", make sure receipt has been done and post the receipt.
<br/>

#### **Action Message:** Line with Order No XX cannot be matched against a receipt line.
**Solution:** When a User gets a message that the order cannot be matched against receipt line, this needs to be handled on the Purchase Order Line. Note that receipts are not handled in ExFlow.

Go to Purchase Order e.g., via Order No., make sure receipt has been done and post the receipt.

Learn more about the order process under section [***Purchase Order Matching Process***](https://docs.signupsoftware.com/business-central/docs/user-manual/approval-workflow/purchase-order-matching-process#purchase-order-matching-process).
<br/>

### Vendor Related Messages

#### **Action Message:** Vendor cannot be identified for Vendor ID XXX.
**Solution:** Check the scanned document. Is the Vendor ID correct interpreted? Check Name, IBAN and Bank accounts. If not, modify the Vendor ID number.

Does the Vendor exist in Business Central? If not, create the Vendor in Business Central.

To look at the imported data:<br/>
Go to: **ExFlow Import Journals -->** open **ExFlow Import Journal --> Related --> Files--> Show Import Details (OCR)**.
<br/>

### Email Related Messages 

In ExFlow 19.3 version/BC20, SMTP is obsoleted, and Email Accounts needs to be used. If Email Accounts is not set up, email reminders for unapproved documents etcetera, will not be sent out.
<br/>

#### **Action Message:** Email Account is not setup
**Solution:** Check that a valid Email Account is set up and that Email Scenario has "ExFlow Default" assigned.

For Email Accounts related questions contact your Business Central Partner.
<br/>

#### **Action Message:** Enhanced Email Capabilities feature is not enabled
**Solution:** Enhanced email capabilities must be activated. Make sure that Email Scenario has "ExFlow Default" assigned in both Email Accounts and ExFlow Email Setup.
<br/>
