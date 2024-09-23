---
title: Localization Canada
sidebar_position: 6
hide_title: true
custom_edit_url: null
---
## Localization Canada

### Language

ExFlow supports the French (Canada) language in Business Central.

### Canadian Sales Tax

Go to: ***Setup \--\> ExFlow Setup \--\> Doc. Creation Checks tab***

Enable "Allow Sales Tax" in ExFlow Setups.

![ExFlow Setup - Doc. Creation Checks - Canadian Localization](@site/static/img/media/exflow-setup-doc-posting-checks-002-ca-us.png)

With this setting VAT Product Posting Group will not be mandatory in
ExFlow and will allow for North American Sales Tax processing.

![VAT Posting Setup - Canadian Localization](@site/static/img/media/image357.png)

To support North American Sales Tax the Tax specific fields from
Purchase Document Header and Purchase Document Lines are also
implemented in ExFlow Import Journal. The functionalities for these
fields are similar to how they work in Purchase Documents in Business
Central.

**The additional fields in the Document header**

- Tax Liable

- Tax Area Code

- Provincial Tax Area Code

- Tax Exemption No.

**And on the document lines**

- Tax Liable

- Tax Area Code

- Provincial Tax Area Code

- GST/HST

- Tax Group Code

- Use Tax

With the use of Canadian Tax Setup, the ExFlow Import Journal also
supports Tax Calculations based on the Canadian Tax. The functionality
for retrieving Tax Area Code etc. from Company Information and location
instead of Vendor Card is also reflected in ExFlow Import Journal.

![ExFlow Import Journal - Canadian Localization](@site/static/img/media/image358.png)

Statistics page is now available in ExFlow Import Journal.

![ExFlow Import Journal -- Statistics](@site/static/img/media/image359.png)

It allows for Tax Amount to be manually adjusted when there is a
discrepancy between Tax Amount calculated on Invoice Lines and Tax
Amount on the invoice received from the vendor (Interpreted by OCR
Service in this case).

![Purchase Invoice Statistics -- OCR import](@site/static/img/media/image360.png)


### Handle Tax Group Code in ExFlow Purchase Code

When the Tax Group Code on an invoice line needs to be different than what is defaulted on the master record selected on that invoice line, this can be handled from an ExFlow Purchase Code. 

For example, if the Tax Group Code on a G/L account card for Office Supplies is defaulted to NON-TAXABLE, while a line on a Purchase Invoice with that G/L Account needs to be marked as TAXABLE, users could simply add this on the ExFlow Purchase code lines according to picture below. 

This would allow users to automate invoice creation in those specific scenarios.


![ExFlow Purchase Code](@site/static/img/media/NA-exflow-purchase-code-card-tax-group-001.png)


### Tax columns on Web

It is possible to make Tax related fields visible in ExFlow Web by adding the columns in ExFlow Setup.

![ExFlow Web Columns](@site/static/img/media/tax-web-columns-001.png)

Read more about how to edit web columns under section [***ExFlow Web.***](https://docs.exflow.cloud/business-central/docs/user-manual/technical/exflow-web#exflow-web)