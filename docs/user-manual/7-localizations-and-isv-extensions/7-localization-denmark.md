---
title: Localization Denmark
sidebar_position: 7
hide_title: true
custom_edit_url: null
---
## Localization Denmark

### Language

ExFlow supports Danish language in Business Central.

### Payment Reference - FIK Code

#### Background

Danish invoices contain a payment reference called FIK Code that should
be captured on the invoice and populate the field "Payment Reference" on
the Purchase Invoice Header when creating the invoice from the Import
Journal.

The format of the interpreted payment reference on the invoice needs to
be transformed when imported to ExFlow to get the correct format.

Example:

Input: +71\<**125396534461985**+83958774\<

Output: **125396534461985**

![Purchase Invoice - Danish Localization](@site/static/img/media/image361.png)

#### Solution

##### Transformation

Transformation implemented using Data Exchange Definition functionality.
Configuration is supplemented by one rule that removes unnecessary
characters.

![Data Exchange Definition - Danish Localization](@site/static/img/media/image362.png)

![Transformation Rule Card - Danish Localization](@site/static/img/media/image363.png)

##### Populating Purchase Invoice Header

The transformed payment reference is imported to "Vendor document no. 2"
in the Import Journal.

When the invoice is created, the field "Payment Reference" on the
Purchase Invoice Header is populated with the transformed payment
reference from "Vendor document no. 2".
