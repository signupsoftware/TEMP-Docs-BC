---
title: Localization USA
sidebar_position: 15
hide_title: true
custom_edit_url: null
---
## Localization USA

### US Sales Tax

Go to: ***Setup \--\> ExFlow Setup \--\> Doc. Creation Checks tab***

Enable "Allow Sales Tax" in ExFlow Setup.

![ExFlow Setup - Doc. Creation Checks - US Localization](@site/static/img/media/exflow-setup-doc-posting-checks-002-ca-us.png)

With this setting VAT Product Posting Group will not be mandatory in the
ExFlow Import Journal. This setting is normally combined with the Tax
Posting Setup of Sales Tax.

![VAT Posting Setup - US Localization](@site/static/img/media/image357.png)

To support US Sales Tax the Tax specific fields from Purchase Document
Header and Purchase Document Lines are also implemented in ExFlow Import
Journal. The functionalities for these fields are similar to how they
work in the Purchase Document.

**The additional fields in the document header are**

- Tax Liable
- Tax Area Code
- Tax Exemption No.

**And on the document lines**

- Tax Liable
- Tax Area Code
- Tax Group Code

With the use of US Tax Setup, the Import Journal also supports Tax
calculations based on the US Tax. The functionality for retrieving Tax
Area Code etc. from company information and location instead of vendor
card is also reflected in the Import Journal.

![ExFlow Import Journal - US Localization](@site/static/img/media/image367.png)

### Vendor 1099 Liable Transactions<br/>
Before processing 1099 liable transactions, you must setup **1099 Form Boxes** and **Vendors** as 1099 liable in Business Central. Please refer to Microsoft documentation for 1099 setup and transaction processing instructions in Business Central.<br/><br/>

#### To process a document as 1099 liable in ExFlow<br/>
* Import an invoice for a vendor that has been setup with the relevant IRS 1099 code, etc. (see Microsoft instructions for how to setup 1099 vendors).
* Optionally, on the Import Journal header line, in the IRS 1099 Code field, override the default value with another code, or delete it to have a transaction without an IRS 1099 code.

![ExFlow Import Journal - US Localization](@site/static/img/media/import-journal-008-us-irs-1099.png)

* If a portion of the invoice amount is 1099 liable and a portion is not, check/uncheck the “IRS 1099 Liable” checkbox to identify lines that are 1099 liable.

![ExFlow Import Journal - US Localization](@site/static/img/media/import-journal-lines-002-us-irs-1099.png)

* Continue processing and post the document. 
* Once the document is posted, you can go to the Vendor Ledger Entries list page and find that the IRS 1099 Code and IRS 1099 Amount fields are automatically populated.

![Vendor Ledge Entries - US Localization](@site/static/img/media/vendor-ledger-entries-001.png)


### Handle Tax Group Code in ExFlow Purchase Code

When the Tax Group Code on an invoice line needs to be different than what is defaulted on the master record selected on that invoice line, this can be handled from an ExFlow Purchase Code. 

For example, if the Tax Group Code on a G/L account card for Office Supplies is defaulted to NON-TAXABLE, while a line on a Purchase Invoice with that G/L Account needs to be marked as TAXABLE, users could simply add this on the ExFlow Purchase code lines according to picture below. 

This would allow users to automate invoice creation in those specific scenarios.

![ExFlow Purchase Code](@site/static/img/media/NA-exflow-purchase-code-card-tax-group-001.png)

### Tax columns on Web

It is possible to make Tax related fields visible in ExFlow Web by adding the columns in ExFlow Setup.

![ExFlow Web Columns](@site/static/img/media/tax-web-columns-001.png)

Read more about how to edit web columns under section [***ExFlow Web.***](https://docs.exflow.cloud/business-central/docs/user-manual/technical/exflow-web#exflow-web)