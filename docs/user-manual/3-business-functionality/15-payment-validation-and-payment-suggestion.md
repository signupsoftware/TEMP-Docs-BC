---
title: Payment Validation and Payment Suggestion
sidebar_position: 15
hide_title: true
custom_edit_url: null
---
## Payment Validation and Payment Suggestion

To be able to work with payment validation, the (bank) account must be interpreted in ExFlow Data Capture and below settings must be configured.

Let ExFlow validate that the interpreted bank account exits on current Pay-to Vendor Bank Accounts. And if ISV SweBase is installed, suggest the validated Vendor Bank Account to the document for payments.

Payment validation and Suggest Recipient Bank Account can be enabled for all vendors and disabled for selected vendors. Or just enabled for specific vendors.


### Setup Payment Validation / Suggest Recipient Bank Account

#### Setup ExFlow Data Capture

The field *“Pay-to-Account”* in ExFlow Data Capture needs to be added in document header section. Read more about this under [Field Mapping](https://docs.signupsoftware.com/business-central/docs/user-manual/technical/field-mapping)

#### Payment Validation in ExFlow Setup

Start by Activating Payment Validation Setup. This will enable Payment Validation for all vendors.

Go to: **ExFlow Setup --> Related --> Advanced --> Payment Validation Setup** or via **ExFlow Setup --> General**

![ExFlow Setup - Payment Validation Setup](@site/static/img/media/exflow-setup-general-002-payment-validation-setup.png)


Add fields from the Vendor Bank Account that should be validated against interpreted value.

Click on New or Edit List and select necessary fields:

![ExFlow Payment Validation Setup](@site/static/img/media/payment-validation-setup-001.png)
 <br/>


#### Suggest Recipient Bank Account in ExFlow Setup
Payment Validation needs to be enabled, and ISV SweBase installed.

To be able to use Suggest Recipient Bank Account for all vendors:<br/>

Go to: **ExFlow Setup --> General** and enable Suggest Recipient Bank Account

![ExFlow Setup - Payment Validation and Suggest Recipient Bank Account](@site/static/img/media/exflow-setup-general-003.png)

<br/>

### ExFlow Vendor Setup
#### Payment Validation

Add the Vendor by Edit List or click on New. 

Select the vendor in the list and value in field Payment Validation.

![ExFlow Vendor Setup](@site/static/img/media/vendor-setup-list-payment-validation.png)

Or open the Vendor Setup Card: 

![ExFlow Vendor Setup Card](@site/static/img/media/Vendor-setup-card-003.png)

| Payment Validation|  |
|:-|:-|
| **From ExFlow Setup**:              | Use same setting as in ExFlow Setup
| **Yes**:                         | Enable Payment Validation for this specific vendor, no matter of setting in ExFlow Setup
| **No**:                         | Disable Payment Validation for this specific vendor, no matter of setting in ExFlow Setup
<br/>

#### Suggest Recipient Bank Account
Payment Validation needs to be enabled, and ISV SweBase installed.<br/>

Add the Vendor by Edit List or click on New.<br/>

Select the vendor in the list and value in field Suggest Recipient Bank Account.

| Suggest Recipient Bank Account |  |
|:-|:-|
| **From ExFlow Setup**:           | Use same setting as in ExFlow Setup
| **Yes**:                         | Enable Suggest Recipient Bank Account for this specific vendor, no matter of setting in ExFlow Setup
| **No**:                         | Disable Suggest Recipient Bank Account for this specific vendor, no matter of setting in ExFlow Setup

<br/>

### Payment Validation / Suggest Recipient Bank Account in Import Journal

When Payment Validation is enabled, ExFlow will compare the value interpreted in Pay-to-Account in ExFlow Data Capture against Pay-to Vendor Bank Accounts.

The interpreted value is compared without any special characters and value needs to exist in one or more of the selected fields added in Payment Validation Setup.

The interpreted Pay-to-Account will be shown on the header in Import Journal (Payment Validation Account No.), together with the selected Recipient Bank Account if enabled.

When Recipient Bank Account is selected, priority will be given to interpreted currency and Pay-to Account. If no Pay-to Vendor Bank Account exists with current currency, bank account without currency will be selected.

![ExFlow Import Journal - Payment Validation Account No.](@site/static/img/media/import-journal-024.png)

From the Import Journal it is possible to open Vendor Bank Account Cards. 
Use Recipient Bank Account field or: <br/>
Go to: **Import Journal --> Related --> Document --> Vendor Bank Account**

![ExFlow Import Journal - Recipient Bank Account](@site/static/img/media/import-journal-025.png)


### Warning Messages
If the interpreted account does not match with existing Pay-to Vendor Bank Account, or if the account is missing, a warning message will be shown under "Warning Messages" to the right by the FactBoxes.

![ExFlow Import Journal - Warning messages for Payment Validation and Payment Suggestion](@site/static/img/media/warning-messages-002.png)

Same comes with Payment Suggestion, if this function is activated in ExFlow Setup.

Below warning messages will be triggered when interpreting an (bank) account in ExFlow Data Capture (and importing) that doesn't match with the Preferred Bank Account Code set on Vendor card in ExFlow Business Central.

![ExFlow Import Journal - Recipient Bank Account](@site/static/img/media/payment-suggestion-001.png)

With these warning, ExFlow will give an opportunity to double check the document to make sure everything is correct before creation, or if adjustments are needed. 

If nothing needs to be corrected, simply click on ''Accept all warnings'' to continue.

![ExFlow Import Journal - Recipient Bank Account](@site/static/img/media/payment-suggestion-002.png)



### Ignore Payment Validation or Payment Suggestion on a dedicated Journal
If one or both of above-mentioned settings are enabled, but there is a need to work with manual documents in Import Journal where e.g., an interpreted bank account is missing, there is a possibility to have a dedicated manual journal that will skip validation and give no warning messages regarding Payment Validation nor Payment Suggestion in Import Journal.
 
![ExFlow Import Journals - Ignore Payment Validation and Ignore Payment Suggestion](@site/static/img/media/import-journals-007.png)

















