---
title: Payment Validation and Payment Suggestion
sidebar_position: 15
hide_title: true
---
## Payment Validation and Payment Suggestion

Let ExFlow validate an interpreted account and and make sure that the vendor suggested account code is set.


### Payment Validation Setup

To be able to work with payment validation, the (bank) account must be interpreted in ExFlow Data Capture and below settings must be configured.

Go to **ExFlow Setup --> Related --> Advanced --> Payment Validation Setup** or tick Payment Validation box under General in ExFlow Setup.

This function specifies if the payment validation process will be applied during the import and data interpretation process.

![ExFlow Setup - Payment Validation Setup](@site/static/img/media/exflow-setup-general-002-payment-validation-setup.png)

Click on New or Edit List to add necessary fields:

![ExFlow Payment Validation Setup](@site/static/img/media/payment-validation-setup-001.png)

### Suggest Recipient Bank Account

In order to activate "Suggest Recipient Bank Account", the box "Payment Validation" needs to be ticked in ExFlow Setup and SweBase must be installed.

![ExFlow Setup - Payment Validation and Suggest Recipient Bank Account](@site/static/img/media/exflow-setup-general-003.png)

### ExFlow Payment Validation in ExFlow Import Journal

Interpreted value "Pay-To-Account" to field "Payment Validation Account No." should look at the Vendor Bank Account with filter on the selected Pay-to-Vendor Card.

Add necessary vendor account details on the Vendor Bank Account Card.

![Vendor Bank Account Card](@site/static/img/media/vendor-bank-account-001.png)

The interpreted pay to account will be shown on the header in Import Journal, together with the specific Recipient Bank Account.

![ExFlow Import Journal - Payment Validation Account No.](@site/static/img/media/import-journal-024.png)

From the Import Journal it is possible to open Vendor Bank Account Card and view/edit the accounts.

![ExFlow Import Journal - Recipient Bank Account](@site/static/img/media/import-journal-025.png)


#### Warning messages in Import Journal

If the interpreted account does not match with existing account, or if the account is missing, in the Pay-to-Vendor card, a warning message will be shown under "Warning Messages" on the right by the FactBoxes. 

![ExFlow Import Journal - Warning messages for Payment Validation and Payment Suggestion](@site/static/img/media/warning-messages-002.png)

Same comes with Payment Suggestion, if this functions is activated in ExFlow Setup. <br/> 
Below warning messages will be triggered when interpreting an (bank) account in ExFlow Data Capture (and importing) that doesn't match with the Preferred Bank Account Code set on Vendor card in ExFlow Business Central.  

![ExFlow Import Journal - Recipient Bank Account](@site/static/img/media/payment-suggestion-001.png)

With these warning, ExFlow will give an opportunity to double check the document to make sure everything is correct before creation, or if adjustments are needed. If nothings needs to be corrected, simply click on ''Accept all warnings'' to continue. 

![ExFlow Import Journal - Recipient Bank Account](@site/static/img/media/payment-suggestion-002.png)

#### Ignore Payment Validation and Payment Suggestion on a dedicated Journal

If one or both of above-mentioned settings are enabled in ExFlow Setup, but there is a need to work with manual documents in Import Journal where e.g., an interpreted bank account is missing, there is a possibility to have a dedicated manual journal that will skip validation and give no warning messages regarding Payment Validation nor Payment Suggestion in Import Journal.

![ExFlow Import Journals - Ignore Payment Validation and Ignore Payment Suggestion](@site/static/img/media/import-journals-007.png)

#### Payment Validation and Suggestions in ExFlow Vendor Setup

It's possible to handle Payment validation and suggestion settings on a vendor level as well. Go to ExFlow Vendor Setup if a specific vendor needs to be excluded from this function.

Edit the list or press "New" to tick "Ignore Payment Validation Warning" and "Ignore Payment Suggestion Warning".

It is also possible to choose "Suggest Receipt Bank Account" to be set on default (From ExFlow Setup), Always or Never.

![ExFlow Vendor Setup Card](@site/static/img/media/Vendor-setup-card-003.png)
