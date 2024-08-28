---
title: Localization Switzerland
sidebar_position: 14
hide_title: true
---
## Localization Switzerland

### Language

ExFlow supports French and German language in Business Central.

### QR-Invoices

Payment reference extracted from QR from the invoice is supported.

Imported QR-reference will populate the field "Payment Reference" on the
Purchase Invoice in Business Central and will follow to the Posted
Purchase Invoice where it will be included for the payment.

### ESR-Invoices

Logic for ESR invoices is supported.

Imported ESR-reference will populate the field "Payment Reference" and
"Reference No." on the Purchase Invoice in Business Central.

Invoice Gross amount will populate the field "ESR Amount" on the
Purchase Invoice in Business Central.

ExFlow will validate that the mandatory ESR-reference exist on invoices
from vendors with Bank account configured for ESR or ESR+. ExFlow will
give a warning message in the Import Journal if the ESR-reference is
missing.
