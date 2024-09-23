---
title: SweBase
sidebar_position: 17
hide_title: true
custom_edit_url: null
---
## SweBase

ExFlow have also support for some functionality to be found in
extension, SweBase.

For SweBase related questions contact your Business Central Partner.

### Payment Reference -- OCR No

Field OCR No. can be interpretated and imported or added manually in Import Journal field "Vendor Document No. 2".

When creating a document this will be added in field OCR No. on document
header. After Posting OCR No. can be found in Vendor Ledger Entries.

Functionality for handling OCR No. in payment solution is to be found in
extension, SweBase.

### Inward Registration

Inward Registration can be activated from ExFlow Setup and will then
automatically be posted on line level when creating the document from
Import Journal.

When posting Document, Inward registrations will be reversed on same
date as posting date.

And if deleting an Inward Registered document, reverse on posting date.

Inward registration setup in SweBase Setup is required and "Keep Posting
Date after Inward Registration" set to true.

To be able to post Inward Registration with rounding, add Inward VAT
Posting Setup.

#### Warning messages for Inward Registration

If it's not possible to inward automatically due to an error, there is a
possibility to personalize a column called "Skip Automatic Reg. of Inwards" to the Import Journal header. Enable this function and document can be created without inward registration. The inward can then be manually posted from the Card instead.

![ExFlow Import Journal -- Skip Automatic Reg. of Inwards](@site/static/img/media/image368.png)

### Note of Goods

Field Note of Goods can be interpretated and imported or added manually
in Import Journal.

This can be used for free text but not displayed on ExFlow Web.

### Extended Posting Date for Posting with Deferral

In SweBase Setup there is a setting to extend the "Allow Posting Date"
when posting Deferral.

This will allow Admin to Verify and Create Document in Import Journal.
Also, to Verify and Post in Approval Status.

### Update VAT Product Posting Group

In SweBase there is a function used for Reverse tax liability on certain
goods and services.

Same function can be used in ExFlow Import Journal to update VAT Product
Posting due to SweBase Setup.
