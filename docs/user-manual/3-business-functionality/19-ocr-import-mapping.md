---
title: OCR Import Mapping
sidebar_position: 19
hide_title: true
custom_edit_url: null
---
## OCR Import Mapping

Go to: ***ExFlow OCR Import Mapping***

ExFlow OCR Import Mapping is used to set a coding from a specific interpreted value for a specific vendor. This page contains the fields
which populate the line with the entered values when invoice is imported to ExFlow Import Journal.

It is possible to get a fully coded line with a G/L Account, Dimensions, Project No. etc. just from a setup on "ExFlow OCR Import Mapping" page that can be unique for every vendor.

![ExFlow OCR Import Mapping](@site/static/img/media/ocr-import-mapping-list-001.png)

| OCR Import Mapping     |	|
|:-|:-|
| **Vendor No.**    | Choose vendor no.
| **Import No.**    | Specify the imported value to be mapped
| **Map To Type**    | Choose the a map -to type option. It can be an G/L account, Item no etc.
| **No Purchase Order Matching**    | Choose if PO matching should be skipped in this specific mapping combination.
| **Aggregate Lines**    | Enable this setting to aggregate all imported lines with the specified mapping criteria to one summarized invoice line.
| **Dimension Code**     | If a Dimension Code exist as an ExFlow Web column, then the dimension code will be visible and can be used in the OCR Import Mapping list.
| **Project No.**    | Specify the Project No. 
| **Project Task No.**    | Specify the Project Task No. 
| **First Approver**    | Specify the First Approver
| **Approval Rule**    | Specify the Approval Rule
| **Auto. Acc. Group**    | Specify the Automatic Account Groups
| **Approval**    | The Approval checkbox is ticked per default. Disable if this mapping should not be apart of the approval flow.


### Aggregate Lines

This feature is used for interpreting lines on expense invoices, and not for purchase order related invoices.

It is possible to map a certain interpreted value to a particular Type, like a G/L Account. Edit the list and specify the chosen Vendor No. Add the value in Import No that will be interpreted and choose how ExFlow are supposed to map the interpreted value, for instance a G/L Account.

When importing the document to Import Journal, coding will be generated according to the setup in "ExFlow OCR Import Mapping" page with chosen "Map to Type" (i.e., G/L account) under Import Lines.

Dimensions will be added on lines, not header.

![ExFlow OCR Import Mapping](@site/static/img/media/ocr-import-mapping-001.png)

Example, if an invoice has 1000 lines (500 lines with value 1 and 500 lines with value 2), and the lines must be mapped to two different G/L Accounts according to below picture. By ticking "Aggregate Lines" all values with 1 will be aggregated into G/L Account 6420 and all lines with value 2 will be aggregated into G/L Account 5611 when importing the document to ExFlow Import Journal.


![ExFlow OCR Import Mapping - Aggregate Lines](@site/static/img/media/ocr-import-mapping-002.png)


![ExFlow Import Journal - Aggregate Lines](@site/static/img/media/import-journal-026.png)

### No Purchase Order Matching

If "No Purchase Order Matching" is disabled and the interpreted document has an interpreted Order No., then Order matching has a priority and will set lines as on the Order. It means that dimensions will be used from the Order, and not take eventual dimensions specified in OCR Import Mapping.

![ExFlow OCR Import Mapping - No Purchase Order Matching - Disabled](@site/static/img/media/ocr-import-mapping-003.png)

If "No Purchase Order Matching" is enabled and the interpreted document has an interpreted Order No., then the system uses values specified in "ExFlow OCR Import Mapping" setup, including the dimensions. Dimensions will be set on lines only, not on header.

![ExFlow OCR Import Mapping - No Purchase Order Matching - Enabled](@site/static/img/media/ocr-import-mapping-004.png)


## OCR Import

Go to: **ExFlow Setup --> OCR Import** 

### VAT Mapping
Let ExFlow help out with mapping of imported VAT % towards VAT Product Posting Groups. 

With EDI it is very common that the percentage of the VAT on the line is carried over. However, this can't be utilized in Standard Business Central and ExFlow has now created an own mapping for this. 

#### Setup ExFlow Data Capture
For customers using other services, like ExFlow Data Capture, a custom field on line level needs to be added in EDC where VAT % can be interpreted. 

This field also needs to be mapped on line level in Data Exchange Definition in Business Central. 

#### VAT Mapping Setup
Go to: **ExFlow Setup --> Actions--> Functions--> OCR --> VAT Mapping**

![VAT](@site/static/img/media/vat-mapping-001.png)

Edit the list and add the VAT Mapping values to be mapped, and choose the VAT Prod Posting Group that it should be mapped towards, under ''VAT Prod. Posting Group''.

![VAT](@site/static/img/media/vat-mapping-002.png)


#### Disable Warning Messages for VAT Mapping
When VAT is incorrect, ExFlow will present a warning message. If no messages are wanted, then these can be disabled.

Go to: **OCR Import --> Disable Warning Messages for VAT Mapping** to turn off the warning messages for VAT mapping. 

When disabled, no warning messages will be presented in the Import Journal for the imported values regarding mapping VAT Prod. Posting Group.