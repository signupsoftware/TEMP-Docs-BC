---
title: Localization Finland
sidebar_position: 8
hide_title: true
custom_edit_url: null
---
## Localization Finland

### Language

ExFlow supports Finnish language in Business Central.

### Payment Reference

#### Background

Finland has a requirement of a payment reference on their purchase
invoices.

This payment reference is in fact two different fields: Message Type and
Invoice Message.

Standard Finnish local functionality from Microsoft contains 3 fields in
Purchase Header.

- Message Type *(Mandatory)*

- Invoice Message *(Mandatory)*

- Invoice Message 2

Message Type specifies what kind of Invoice Message to expect.

Message Type can be one of following:

- Reference No.

- Invoice Information

- Message

- Long Message

- Tax Message

Message Type and Invoice Message are mandatory fields and must exist on
the imported invoice in ExFlow Import Journal.

##### Solution

When the Purchase Invoice is created from the ExFlow Import Journal,
Message Type and Invoice Message is transferred to the correct fields on
the Purchase Invoice header.

This functionality is configured and activated in ExFlow Setup with two
settings called "Check FI Reference" and "Message Type". The settings
are located it in the section "Doc. Creation checks".

**Check Reference**

**No check:** Check is inactivated.

**No empty:** Invoice Message cannot be empty.

**No empty + Reference no. format:** Invoice Message cannot be empty,
and the format of the message will be checked. *(Requires that "Message
Type" = Reference No.)*

![ExFlow Setup - Doc. Creation Checks - Finish Localization](@site/static/img/media/exflow-setup-doc-creation-checks-002-fi.png)

### Auto Acc. Group

ExFlow supports Auto Acc. Group in Import Journal and can be added from
G/L Account, ExFlow Purchase Code or added manually in Import Journal
Line.

### Use Vendor Document No. if Invoice Message is empty

Go to: **ExFlow Setup --> OCR Import** and enable the setting ***Use Vendor Document No. if Invoice Message is empty.***

![ExFlow Setup - OCR Import - Finish Localization](@site/static/img/media/FI-exflow-setup-ocr-import-vendor-id-001.png)


This setting specifies if the interpreted Vendor Document No. should be used in Invoice Message as well, if Invoice Message is empty. The Message type will then be set to ''Message''. This will ease the process if working with non domestic documents without Reference No.

![ExFlow Setup - Import Journal - Finish Localization](@site/static/img/media/FI-import-journal-invoice-message-001.png)


### Choose another Message Type in Vendor Setup
The standard ''Message Type'' in Import Journal is set to "Reference No." by default. 
However, it is possible to go to Vendor Setup Card and set another Message Type for a specific vendor, if needed. 

![ExFlow Setup - Import Journal - Finish Localization](@site/static/img/media/FI-message-type-001.png)



### Reference No. to ExFlow Contract Self-Billing Invoices

When creating Self Invoices, Self-billing Message Type (for the Reference No.) and Self-billing Invoice Message will be copied to Import Journal Header.

On the Contracts Invoice Periods, the fields: ''Self-billing Message Type'' and ''Self-billing Invoice Message'' are also entered, for users to make manual adjustments per line. This will also follow to Import Journal. 

