---
title: Responsibility Center
sidebar_position: 28
hide_title: true
custom_edit_url: null
---
## Responsibility Center

Responsibility Centers are supported for both Cost and PO matched documents. Refer to additional information below.

### Using Responsibility Centers with Cost/Expense invoices
For cost/expense invoices, the Responsibility Center can be inherited from the vendor or can be populated manually in the Import Journal header. When the Responsibility Center is populated, the invoice header and lines will be updated with any related information. Depending on setups in BC, this could include Dimensions, Location code, Tax Area Code, etc.

If the Responsibility Center is updated to a new value in the invoice header, the document lines will be updated accordingly.

#### Dimension Priority - Header
When a responsibility center is set on the document header, dimension priority will mimic the standard BC dimension priority with one exception:

- Default dimensions set on an ExFlow Reference will take priority over default dimensions set on the Responsibility Center. The document will inherit default dimensions from both, but when there is a conflict, default dimensions set on the Reference will take priority over default dimensions set on the Responsibility Center.

#### Dimension Priority - Lines

Document lines will inherit dimensions from the header with the following exception:

- If a purchase code is used to create invoice lines, dimensions set in the purchase code will take priority over dimensions set in the header.

### Using Responsibility Centers with PO matched invoices

#### Setup

When the following setup is enabled, PO matched invoices will inherit the Responsibility center from the matching PO:

In ExFlow Setup, go to the “PO Matching” fast tab and toggle on the option “Use PO Header Values on Invoice''. The “PO Header Value on Invoice Setup” page will then open. 

Activate Responsibility Center by checking the box in the “Activate” field and click OK to complete the activation and close the page.

![ExFlow Approval Status](@site/static/img/media/po-header-value-on-invoice-setup-003.png)

With the above setup in place, the following occurs when an invoice is matched to a PO:
* An invoice matched to a single PO will inherit the Responsibility Center from the PO header
    - Invoice lines will inherit dimensions, Location code, Tax Area, and Tax Liable from the matched PO lines.
* An invoice matched to multiple PO’s with the same Responsibility Center will be handled the same as above.
* When a single invoice is matched to multiple PO’s with different Responsibility Centers, each line will inherit the location code, tax area and Tax Liable setting from the PO line it is matched to. The Responsibility Center will be left blank in the invoice header.

### Limitation
A default Responsibility center that is set on a user will not be inherited on documents imported/created in the Import Journal. The Responsibility Center can be inherited from the vendor, the purchase order, or can be manually populated in the import journal header. 


