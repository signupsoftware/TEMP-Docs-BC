---
title: Localization Iceland
sidebar_position: 11
hide_title: true
custom_edit_url: null
---
## Localization Iceland

### Language

ExFlow supports Icelandic language in Business Central.

### Payment Reference

#### Background

Icelandic invoices contain a payment reference that should populate the
field "Payment Reference" on the Purchase Invoice Header.

The format of the interpreted payment reference on the invoice needs to
be transformed when imported to ExFlow to get the correct format.

The correct format includes in following order:

- Vendor company registration number

- Due date

- Claim number

Example:

Input: **4601171350**\> 0**112266**+ 03\<**032266**\> **300820**+

Output: **4601171350 300820 032266123456**

Format: RRRRRRRRRR DDMMYY NNNNNNNNNNNN

#### Solution

##### Transformation

The interpreted payment reference on the invoice must be exported in the
XML-tag called "PaymId".

"PaymId" is by default mapped to the field "Vendor document no. 2" in
the Import Journal.

The interpreted payment reference must always be the full and complete
length.

A transformation rule is used on the Data Exchange Definition to
transform the payment reference to the correct format. The logic of the
transformation rule is coded to handle incoming format: **4601171350**\>
**0112266+ 03\<032266\>** **300820**+ then create.

outgoing format: **4601171350 300820 032266123456**

This logic is triggered by creating a custom transformation code called
"ISLPAY" and add it to the field "PaymId".

##### Populating Purchase Invoice Header

The transformed payment reference is imported to "Vendor document no. 2"
in the Import Journal.

When the invoice is created, the field "Payment Reference" on the
Purchase Invoice Header is populated with the transformed payment
reference from "Vendor document no. 2" with the format **01171350 300820
032266123456**

![Data Exchange Definition - Islandic Localization](@site/static/img/media/image365.png)

![Transformation Rule Card - Islandic Localization](@site/static/img/media/image366.png)
