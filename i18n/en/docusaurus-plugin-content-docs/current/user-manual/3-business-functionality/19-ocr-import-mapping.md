---
title: OCR Import Mapping
sidebar_position: 19
hide_title: true
---
## OCR Import Mapping

Go to: ***ExFlow OCR Import Mapping***

ExFlow OCR Import Mapping is used to set a coding from a specific interpreted value for a specific vendor. This page contains the fields
which populate the line with the entered values when invoice is imported to ExFlow Import Journal.

It is possible to get a fully coded line with a G/L Account, Dimensions, Project No. etc. just from a setup on "ExFlow OCR Import Mapping" page that can be unique for every vendor.

![ExFlow OCR Import Mapping](@site/static/img/media/ocr-import-mapping-001.png)

### Aggregate Lines

This feature is used for interpreting lines on expense invoices, and not for purchase order related invoices.

It is possible to map a certain interpreted value to a particular Type, like a G/L Account. Edit the list and specify the chosen Vendor No. Add the value in Import No that will be interpreted and choose how ExFlow are supposed to map the interpreted value, for instance a G/L Account.

When importing the document to Import Journal, coding will be generated according to the setup in "ExFlow OCR Import Mapping" page with chosen "Map to Type" (i.e., G/L account) under Import Lines.

![ExFlow OCR Import Mapping - Aggregate Lines](@site/static/img/media/ocr-import-mapping-002.png)

Example, if an invoice has 1000 lines (500 lines with value 1 and 500 lines with value 2), and the lines must be mapped to two different G/L Accounts according to below picture. By ticking "Aggregate Lines" all values with 1 will be aggregated into G/L Account 6420 and all lines with value 2 will be aggregated into G/L Account 5611 when importing the document to ExFlow Import Journal.

Dimensions will be added on lines, not header.

![ExFlow Import Journal - Aggregate Lines](@site/static/img/media/import-journal-026.png)

### No Purchase Order Matching

If "No Purchase Order Matching" is disabled and the interpreted document has an interpreted Order No., then Order matching has a priority and will set lines as on the Order. It means that dimensions will be used from the Order, and not take eventual dimensions specified in OCR Import Mapping.

![ExFlow OCR Import Mapping - No Purchase Order Matching - Disabled](@site/static/img/media/ocr-import-mapping-003.png)

If "No Purchase Order Matching" is enabled and the interpreted document has an interpreted Order No., then the system uses values specified in "ExFlow OCR Import Mapping" setup, including the dimensions. Dimensions will be set on lines only, not on header.

![ExFlow OCR Import Mapping - No Purchase Order Matching - Enabled](@site/static/img/media/ocr-import-mapping-004.png)



