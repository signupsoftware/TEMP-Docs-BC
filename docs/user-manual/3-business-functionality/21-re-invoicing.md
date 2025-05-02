---
title: Re-Invoicing
sidebar_position: 21
hide_title: true
custom_edit_url: null
---
## Re-Invoicing
Re-Invoicing is useful when receiving a Purchase Invoice that needs to be invoiced to a customer.

All purchase line types can be Re-Invoiced to Customer as line type G/L Account. Due to setup, Item can be invoiced to customer on same Item No. 

Re-invoicing values can be added on Purchase Quote, Order, Invoice and Credit Memo.

If Re-Invoicing is already activated, disable, and activate again to start Wizard for minimum setup required. This will help to setup required settings in Web Columns. Please note that coding rule lines connected to Re-Invoicing columns needs to be created again.

The following Re-Invoicing Columns can be activated on ExFlow Web:
* Re-Invoicing Customer No.
* Qty & Unit Price or Re-Invoicing Amount
* Re-Invoicing Surcharge %
* Re-Invoicing Code
* Re-Invoicing Description

The Approvers can then add, change, or approve value for Sales Invoice to Customer depending on ExFlow User Permission.

### ExFlow Re-Invoicing Setup
Go to: ***ExFlow Setup - Overview --> ExFlow Re-Invoicing Setup***<br/>
Start by activating Re-Invoicing in ExFlow Re-Invoicing Setup and follow wizard for minimum setup required.

![Re-Invoicing Setup](@site/static/img/media/re-invoicing-setup-001.png)

#### Re-Invoicing Setup - General
| General | |
|:-|:-|
| **Active:**				                                            | Specifies if Re-Invoicing is enabled or disabled. When activating or changing setup, ExFlow Wizard will help assists with minimum of required setup
| **Pre-defined Sales G/L Account:**		                            | Predefined G/L Account to apply to invoicing Sales Lines if Re-Invoicing Code is not used
| **Use Amount Fields:**			                                    | Add Re-Invoicing Qty & Unit Price or Re-Invoicing Amount to select columns on ExFlow Web <br/><br/> **Qty & Unit Price**<br/>Purchased quantity will be added as Re-Invoiced quantity and Surcharge % calculation is then den on Re-Invoicing Unit Price <br/><br/> **Line Amount**<br/> Purchased quantity will be added as 1 and Surcharge % calculation is done on Re-Invoicing Amount (total)
| **Item for Sale:**			                                        | Activate to create Sales Invoices from Purchase Invoices with same Item No. Item Ledger Entry No. from Purchase Invoice will be applied to sales line if possible. Read more under section [***Re-Invoicing for Items***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/re-invoicing#re-invoicing-item-for-sale)
| **Always Create Sales Invoice when Apply-to Item Entry is missing:**  | Activate to always create sales invoices without apply-to item entry, if missing. Can only be used if Item for Sales is activated.
| **Purchase Invoice PDF as attachment:**	                            | Activate to add purchase invoice PDF as attachment to all Sales invoices
| **Enable Customized Description:**		                            | Enable or disable customized description. Read more under section [***Enable Customized Description***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/re-invoicing#enable-customized-description) below
| **Customized Description:**		                                    | Current Re-invoicing sales line customized description
| **Surcharge %:**			                                            | Specifies if Surcharge % should be added when using Re-invoicing functionality. If Item for Sales is activated, no surcharge % will be added for Item Lines. Enabling this opens additional options for predefining Surcharges. <br/>Read more under section [***Surcharge %***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/re-invoicing#surcharge-) below
| **Copy Dimension Value:**		                                        | Specifies the dimensions to be copied from purchase invoice to the sales invoice line when using Re-invoicing functionality. Read more under section [***Copy Dimension Values***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/re-invoicing#copy-dimension-values) below
| **Prioritize Dimension from Purchase:**	                            | Prioritize the dimension from purchase line if same dimension exists on the sales line
| **Prioritize when splitting line on the web:**	                    | When splitting the line on ExFlow Web the document needs to be saved to update amounts. If not, this setting will help to prioritize recalculation from the amount or surcharge % when approving


<br/>

#### Re-Invoicing Setup - Background Processing
To activate job queue entries and automatically create sales invoices the following setting is needed. Not that this job will only creating sales invoices. 

![Re-Invoicing Background Processing](@site/static/img/media/re-invoicing-setup-002.png)

| Background Processing | |
|:-|:-|
| **Background Processing:**	    | Activate to add Job Queue Entry to create sales invoices from re-invoicing entries. Select the frequency and activate
| **Invoice Creation Type:**	    | Select to create one sales invoices document per line or one invoice per customer when using Background Processing
| **Exchange Rate Date Based on:**	| Select exchange rate based on sales posting date or purchase date when using Background Processing


<br/>

#### Enable Customized Description
Go to: ***ExFlow Re-Invoicing Setup --> Actions --> Customized Description***<br/>
When activating Customized Description, it is possible to copy information from any fields on the purchase document line. And from Purchase document header Vendor Invoice/Credit Memo No. and Buy-from Vendor Name can be used. 

If not activated, description can be added manually. If there are no Re-Invoicing description, sales document description will be added as Business Central Standard.

| Purchase Invoice Line Fields | |
|:-|:-|
| **Field Name:**	| Select purchase line fields to copy values from
| **Sorting:**		| Select sorting in what order the values should be presented on the sales line. The lowest value will be added first
<br/>

| Purchase Invoice Header Fields | |
|:-|:-|
| **Vendor Invoice No.:** 		| Select Vendor Invoice No. and update sorting if needed above
| **Buy-from Vendor Name:**	    | Select Buy-from Vendor Name and update sorting if needed above
| **Free Text:**		        | “Select from full list”. Add code and description. It is the description that will be added to the sales line. <br/>Note that this can be translated and used with language code from the customer card. There can only be one Free Text added to the sales line<br/>![Select Re-Invoice Free Texts](@site/static/img/media/select-re-inv-free-texts-001.png)
| **Text Separator:**		    | This is used for separate text fields. In this example we have used “space – space”

![ExFlow Customized Description](@site/static/img/media/re-invoicing-field-selection-001.png)
<br/>

#### Surcharge %
Go to: ***ExFlow Re-Invoicing Setup --> Actions --> Edit Surcharge %***<br/>
Surcharge % is useful to automatically add surcharge to re-invoicing lines.

There will be no Surcharge % automatically if Item for Sale is selected. Then unit price will be handled by Business Central standard. You can always add surcharges or unit price manually.

Calculation of Surcharge % is handled differently depending on Use Amount field in Re-Invoicing Setup:
* **Line Amount:** <br/> 
When using Line Amount, Surcharge % calculation will be done from purchase total line amount to Re-Invoicing line amount.<br/>
Purchase Qty 2, Direct Unit Cost 1 000,00, total of **2 000,00** <br/>
Re-Invoicing Qty 1, Unit Price 6 000,00 total of **6 000,00**<br/>
**Surcharge % will then show as 200%**<br/>
![ExFlow Import Journal Lines](@site/static/img/media/import-journal-lines-003-re-invoicing.png)

* **Qty & Unit Price:** <br/> 
When using Qty & Unit Price, Surcharge % calculation will be done from purchase Direct Unit Cost to Re-Invoicing Unit Price.<br/>
If Qty is changed, there will be no update in surcharge % or unit price. <br/>
Purchase Qty 2, Direct Unit Cost **1 000,00**, total of 2 000,00<br/>
Re-Invoicing Qty 4, Unit Price **1 500,00** total of 6 000,00<br/>
**Surcharge % will then show as 50%**<br/>
![ExFlow Import Journal Lines](@site/static/img/media/import-journal-lines-003-re-invoicing.png)

Enable Surcharge % will open additional options for predefining Surcharges.

The Re-Invoicing surcharge page adds further customization to handling surcharges for different types of customers.
We can define surcharge percentages based on Customer No, IC Partner Code, Customer Group and Customer Price Group. <br/>
The Customer No field has the highest priority and cannot be combined with other fields.
A surcharge line without any filter will be applied to all other customers not included in other filters.

![Re-Invoicing Surcharge %](@site/static/img/media/re-invoicing-surcharges-001.png)
<br/>

#### Copy Dimension Values
Go to: ***ExFlow Re-Invoicing Setup --> Actions --> Copy Dimensions***<br/>
Activate and select dimensions to copy values from purchase line to sales line.

When the same dimension with different values exists on both sales and purchase lines, the setting to prioritize the dimension from purchase can be used. If not selected, dimensions will be prioritized from sales lines.

![Re-Invoicing Copy Dimensions](@site/static/img/media/re-invoicing-copy-dimensions-001.png)


### ExFlow Re-Invoicing Codes
Go to: ***ExFlow Re-Invoicing Setup --> Actions --> ExFlow Re-Invoicing Codes***<br/>
It is possible to choose different G/L Accounts for a specific Sales Invoice Line by using Re-Invoicing Code. If Re-Invoicing Code is empty, the default G/L Account from Re-Invoicing Setup will be preselected. <br/>
If ''Item for Sales'' is activated, then the field ''Re-Invoicing Code'' cannot be used for Item Lines.

![ExFlow Re-Invoicing Codes](@site/static/img/media/re-invoicing-codes-001.png)


### ExFlow Purchase Codes
Go to: ***ExFlow Setup - Overview --> ExFlow Purchase Codes***<br/>
Re-Invoicing fields are now added to ExFlow Purchase Code. But Re-Invoicing needs to be activated for fields to show.

![ExFlow Purchase Code](@site/static/img/media/re-invoicing-purchase-code-001.png)


### ExFlow Denying Coding Rule -- Re-Invoicing
Go to: ***ExFlow Setup - Overview --> ExFlow Denying Coding Rules***<br/>
If a Re-Invoicing Customer No. is added, then it is possible to add an ExFlow Denying Coding Rule to force Approvers to add more information.

In this example the Approver needs to add Re-Invoicing Amount if there is a Re-Invoicing Customer No. added on the Document Line, with line type G/L Account, in ExFlow Web.

If Re-Invoicing Amount is missing ExFlow will add Surcharge % (if activated) and Purchase Amount to the Sales Invoice.

![ExFlow Denying Coding Rule](@site/static/img/media/denying-coding-rule-002-re-invoicing.png)


### Re-Invoicing in ExFlow Import Journal
When working with re-invoicing in Import Journal, the coding can be added via ExFlow Purchase Code or added manually.

| Re-Invoicing in Import Journal | |
|:-|:-|
| **Re-Invoicing Mandatory:**	    | Force last approver to add Re-Invoicing Customer No. on ExFlow Web to be able to approve the invoice
| **Re-Invoicing Customer No.:**	    | Activate Re-Invoicing in Import Journal by adding Re-Invoicing Customer No. on the Import Line. The Total Line Amount Excl. VAT / Qty & Unit Price will automatically be added in Re-Invoicing Amount calculated with surcharge %. Change the Re-Invoicing Amount manually if needed
| **Re-Invoicing Code:**		        | Enter "Re-Invoicing Code" to select a G/L Account that will be added on the Sales Invoice Line. If no Re-invoicing Code is chosen, then the predefined Sales G/L Account will be selected automatically from ExFlow Re-Invoicing Setup
| **Re-Invoicing Description:**	        | Customized Description will be added by default if it is activated. Can also be changed or added manually if needed. If nothing is entered the Description on Sales Invoice Line will be selected by Business Central as default
| **Re-Invoicing Qty:**		            | If Qty & Unit Price is selected for Use Amount Fields in Re-Invoicing Setup, Qty to Re-Invoice will be copied from Purchase Quantity. Can be updated manually. For Item Lines when Item for Sale is activated, Re-Invoicing Qty cannot be more than Purchased Quantity.
| **Re-Invoicing Surcharge %:**	        | Surcharge % will be added from re-invoicing setup if activated. Add or update manually to calculate line amount/unit price
| **Re-Invoicing Amount/Unit Price:**	| Due to setup for Use Amount Fields Amount or Unit Price is calculated from Direct Unit Cost and Surcharge %. Can be manually adjusted to calculate the new Surcharge %

![ExFlow Import Journal](@site/static/img/media/re-invoicing-import-journal-001.png)

#### Re-Invoicing Confidential Documents
The Confidential Documents- functionality cannot be used together with Re-invoicing. Following Action Message will appear to the Import Journal Lines if so: ''Re-Invoicing functionality cannot be used together with Confidential Documents''

### Re-Invoicing in ExFlow Web
Go to: ***Re-Invoicing Setup --> Actions --> Edit Web Columns / Web Columns***<br/>
Columns need to be added on ExFlow Web to approve, reject, or change coding information regarding "Re-Invoicing".

The ExFlow User can add or change values on the line in ExFlow Web with given Web Permission Role.<br/>
Read more about Web Permission Roles under section [***ExFlow User***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/exflow-user#add-company-access-and-web-permission-role-under-permissions)

![ExFlow Web - Re-Invoicing](@site/static/img/media/re-invoicing-web-001.png)

If "Re-Invoice Mandatory" was added in Import Journal and "Re-Invoicing Customer No." is missing the following error message will occur on the last Approver in Approval Flow.

![ExFlow Web - Re-Invoicing No. must be set](@site/static/img/media/web-dynamics-error-002-re-invoicing.png)

If using ExFlow Denying Coding Rule above, the approver will receive following error message when approving the document with Re-Invoicing Customer No. and Amount is missing.

![ExFlow Web - Validation Messages](@site/static/img/media/web-dynamics-error-003-re-invoicing.png)

In this case, add "Re-Invoicing Amount" and approve.


### ExFlow Approval Status
Approval Status is now updated but the document needs to be Verified and Posted before Re-Invoicing Entries are added and ready to create sales document.


### ExFlow Re-Invoicing Entries
Go to: ***Periodic Activities --> ExFlow Re-Invoicing Entries***<br/>
Information regarding e-invoicing entries can be found in ExFlow Re-Invoicing Entries. These entries will be visible after a Purchase Invoice has been approved, verified, and posted.

Changes in Re-Invoicing Entries or from sales invoices can be done before posting.

Use the function “Create”, or "Batch Create invoices" if there is more than one invoice to create. Only selected lines will be created.

| Re-Invoicing Functions | |
|:-|:-|
| **Delete Re-Invoicing Entries:**	    | If a Re-Invoicing Line has been created by mistake, use "Delete Re-Invoicing Entries". The line will be marks as deleted but can still be found in history (Show/Hide Re-Invoiced Entries) 
| **Show/Hide Re-Invoiced Entries:**	| Use function "Show/Hide Re-Invoiced Entries" to see history for all Purchase Re-Invoicing Lines. This is to view sales invoice/Credit Memo lines that are created, posted or if the entry is deleted 

![ExFlow Re-Invoicing Entries](@site/static/img/media/re-invoicing-entries-001.png)
<br/>

| Actions – Manual Changes| |
|:-|:-|
| **Apply Sales Line:**			            | Apply a Re-Invoicing Entry to an already created but not posted sales document line
| **Apply Posted Sales Invoice Line:**		| Apply Re-Invoicing Entry to a Posted Sales Invoice line
| **Apply Posted Sales Credit Memo Line:**	| Apply Re-Invoicing Entry to a Posted Sales Credit Memo line
| **Unapply Re-invoiced:**		            | Select one or more entries to unapply so they can be applied or sales document can be created once again
| **Restore Re-invoicing Values:**		    | Restores Re-invoicing values if there have been any changes after posting the purchase document

![ExFlow Re-Invoicing Entries](@site/static/img/media/re-invoicing-entries-action-001.png)
<br/>

| Actions | |
|:-|:-|
| **Create Invoices:**		        | Create sales document only for selected entries
| **Batch Create Invoices:**	    | Batch Create all sales invoices or selected
| **Show Document Image:**	        | Show purchase Invoice PDF (Ctrl+I)<br/>Select and download multiple purchase documents
| **Show Posted Purchase Invoice:**	| Show posted purchase invoice for selected entry

![ExFlow Re-Invoicing Entries](@site/static/img/media/re-invoicing-entries-action-002.png)
<br/>

#### Create Invoices
Go to: ***Re-Invoicing Entries --> Actions --> Create Invoices (F9)*** <br/>
To create Sales Invoices, use the function in the menu under Actions or short cut F9. Sales invoices will be created for all selected entries.

Sales Invoices will be created on G/L Account in field Re-Invoicing No. And if Item for Sale is activated in Re-Invoicing Setup, the same item as purchased. <br/>
Read more under section [***Re-Invoicing Item for Sale***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/re-invoicing#re-invoicing-item-for-sale) 

Mandatory fields to be able to create sales documents are Re-Invoicing Customer No., Re-Invoicing No., and re-Invoicing Amount or Unit Price.

| Create Invoices | |
|:-|:-|
| **Posting Date:**		|Choose a Posting Date if other than date today
| **Invoice Creation Type:**	| Select if sales invoices should be created One Document per Line or One Document per Customer
| **Exchange Rate Date Based on:**	| Select exchange rate date based on Sales Posting Date or from Purchase Posting Date

![ExFlow Batch Create Sales Invoices](@site/static/img/media/re-invoicing-batch-create-001.png)
<br/>

#### Batch Create Invoices
Go to: ***Re-Invoicing Entries --> Actions --> Batch Create Invoices***<br/>
The only difference from Create Invoices is that batch will create sales invoices for all entries if no line is selected.
<br/>

#### Create Re-Invoicing Sales Invoices Manually
Go to: ***Sales Invoices*** in Business Central Standard and create a new Sales Invoice.

Select which customer to invoice. In this example, Customer No. 10000. Add information in Sales Document Header and use function "Get Re-Invoicing Lines" added under ***Related --> ExFlow***.

![Sales Invoice - Get Re-Invoicing Lines](@site/static/img/media/sales-invoice-001-re-invoicing.png)

All selected lines will be imported for this Customer.

![Re-Invoicing message](@site/static/img/media/sales-invoice-get-re-invoicing-001.png)

In this case G/L Account 3081 was selected from Re-Invoicing Code. Unit Price Excl. VAT including surcharge % and Customized Description was added from the Re-Invoicing Entry.

![Sales Invoice - Get Re-Invoicing Lines](@site/static/img/media/sales-invoice-002-re-invoicing.png)
<br/>

#### Show Document Image from Sales Invoice Line
Go to: ***Lines --> Line --> Related Information --> ExFlow --> Show Document Image***<br/>
Click "Show Document Image" to view the PDF Purchase Invoice related to selected line.

![Sales Invoice - Show Document Image](@site/static/img/media/sales-invoice-003-re-invoicing.png)


### ExFlow Approval History
Information regarding "Re-Invoice to Customer" is saved in ExFlow Approval History.
Columns “Re-Invoicing Entries” and “Re-Invoicing Entries on all lines” assist the user in ExFlow Approval History to see and add filter on a header level if Posted Purchase Invoices has posted re-invoicing documents.


### ExFlow Accountant
When using Role “ExFlow Accountant”, there is a tile added to show Re-Invoicing Entries to handle.

![ExFlow Approval Status](@site/static/img/media/re-invoicing-role-center-001.png)


### Re-Invoicing Item for Sale
When activating Item for Sale, Use Amount Fields needs to be “Qty & Unit Price” in Re-Invoicing Setup.

Sales Invoices will be created with the same Item No. as purchased. Therefor Re-Invoicing Code cannot be used.

There will be no Surcharge % added automatically and Re-Invoicing Unit Price will be 0,00. When creating sales document, Unit Price will be handled by Business Central as standard. From Item Card or Customer Price list.

Re-Invoicing Qty is copied from Purchase Qty but can be changed to less but never more than purchased quantity.

When the sales line is created, Apply-to Item Entry is used to connect the Purchase Item Entry to sales line if possible. Business Central Standard Costing Method on Item Card will then not be used.

If the Re-Invoicing Qty is no longer in stock, there will be a question to continue without Apply-to Item Entry and use Business Central Standard Costing Method instead.

If Job Queue is created via ***ExFlow Re-Invoicing Setup --> Background Posting*** only invoices without error or questions will be created. <br/>
Go to: ***Re-Invoicing Entries*** and created them manually, correct the error messages or answer the question to create without Apply-to Item Entry.

Here the setting “Always Create Sales Invoice when Apply-to Item Entry is missing” in Re-Invoicing Setup can be used to create invoices without Apply-to Item Entry.

Location will be added via Apply-to Item Entry if possible. Variant Code and Bin Code will be copied from the purchase line. If it is not possible to add Apply-to Item Entry, Location Code, Bin Code and Variant needs to be handled manually on sales invoice line.


### Re-Invoicing Item to G/L Account
Go to: ***ExFlow Setup - Overview --> Re-Invoicing Setup***<br/>
To create sales invoices to G/L Account from purchase invoice Item line, make sure that Item for Sales is disabled in Re-Invoicing Setup.

Surcharge % will be added automatically when adding a Customer No. if activated.

If Qty & Unit price is selected in Re-Invoicing Setup for Use Amount Fields, any Re-Invoicing Qty can be added, but the purchased quantity will be suggested.

Choose G/L Account via Re-Invoicing Code. If empty the Predefined Sales G/L Account will be selected.


