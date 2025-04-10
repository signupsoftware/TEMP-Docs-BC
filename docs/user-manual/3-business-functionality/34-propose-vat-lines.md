---
title: Propose VAT Lines
sidebar_position: 34
hide_title: true
custom_edit_url: null
---
## Propose VAT Lines

Go to: **ExFlow Setup --> General --> Propose VAT Lines** 

Enable the setting ''Propose VAT Lines'' if all VAT lines should be automatically created when importing invoices or if Business Central standard VAT handling should be used. 

If this setting is used, the fields VAT Prod. Posting Group 0% and VAT Prod. Posting Group 100% must be set in ExFlow Setup.


![Propose VAT Lines](@site/static/img/media/exflow-setup-propose-vat-lines-001.png)

VAT lines can also be proposed automatically via an ExFlow Purchase Code. Simply enable ''Propose VAT Line'' in the ExFlow Purchase Code card.

![Propose VAT Lines](@site/static/img/media/exflow-setup-approval-vat-lines-003.png)

ExFlow will then create an separate VAT line in the Import Journal Lines for the purchase document among with the selected coding. 

The cost account line, in this example, will be set to exclude VAT (NO VAT), since ExFlow will set a own separated VAT line.

![Propose VAT Lines](@site/static/img/media/exflow-setup-propose-vat-lines-002.png)

By default, VAT lines are not included in the approval workflow. However, an alternative function is available for this purpose. Read more under section [***Approve VAT Lines***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/approve-vat-lines) to learn more.
