---
title: Purchase Codes
sidebar_position: 12
hide_title: true
custom_edit_url: null
---
## Purchase Codes
 
Go to: ***Setup \--\> ExFlow Manual Setup \--\> ExFlow Purchase Codes***
 
An ExFlow Purchase Code can be used to add coding on invoice lines automatically from the Vendor Setup Card, Reference, Contract or ExFlow Setup. ExFlow Purchase Code can split lines on several dimension codes, VAT Prod. Posting Groups etc.
 
### Create a new ExFlow Purchase Code
 
#### General
Start by clicking on "New". Enter a Code and Description that suits the ExFlow Purchase Code.
 
| General      |    |
|:-|:-|
| **Propose VAT Line:**             | This setting needs setting in ExFlow Setup for VAT Prod. Posting Group 0% and VAT Prod. Posting Group 100%. Then a separate line for VAT Amount can be added automatically for a specific ExFlow Purchase Code
| **Doc. Creation Amount Check:**   | In ExFlow Setup there is a setting for Doc. Creating Checks in Test Amount. By this setting a separate amount control is possible for a specific ExFlow Purchase Code. <br/><br/>**None:** No check between amount in header and lines <br/> **Gross:** Check only for total amount incl VAT between header and lines <br/>**Net+VAT:** Check both amount excl VAT and VAT amount between header and lines <br/>**ExFlow Setup:** Use setting from ExFlow Setup <br/><br/>
 
#### ExFlow Purchase Code Lines
 
On ExFlow Purchase Code Lines, one or more fields can be used:
 
| ExFlow Purchase Code Lines      | |
|:-|:-|
|**Type:**                      | G/L Account, Item, Resource, Fixed Asset or Charge (Item)
| **No.**:                      | Select from the list
| **Description:**              | Change or use as suggested
| **Weight:**                   | The number in this field specifies the number of parts allocated to this line. Example: If 1 is entered in this field and have 3 other lines with a 1 in this field as well, it will allocate 1 part of the cost amount out of the total 4 so 25%. When using more than one row and selecting amount manually in ExFlow Import Journal, leave this field empty
| **VAT Weight**:               | Same as above, but for VAT
| **Allocation Amount**:        | Allocate a fixed Amount to the invoice line. This column cannot be populated at the same time as any of the Weight columns
| **Allocation %:**             | This column shows the calculated percentage from the Weight column
| **VAT Allocation %:**         | Same as above, but for VAT
| **VAT Prod. Posting Group:**  | When using this field, it overrides value on Type/No. and "Standard VAT Prod. Posting Group" in "ExFlow Setup"
| **Deferral Code:**            | Choose from list. Deferral Starting date will be selected automatically from Deferral Card
| **Project No.:**                  | Choose from list
| **Project Task No.:**             | Choose from list
| **First Approver:**           | Choose from list. How this is used depends on settings in ExFlow Setup.
| **Dimensions:**               | Choose from list
| **Approval**:                 | Specifies if the marked line should be sent out for approval or not

 
Here is an example for splitting costs by department:
 
![ExFlow Purchase Code Card](@site/static/img/media/puchase-code-001.png)
 
In this example VAT on G/L Account is weight with 50 % but Amount Check is always for Gross instead of looking at ExFlow Setup. This can be useful in Sweden where 50% of the VAT is deductible. Interpret total VAT and only 50% will be added as a separate line. 
 
This can be useful when full VAT is not deductible in a specific case, e.g., Car Leasing in Sweden.
 
![ExFlow Purchase Code Card](@site/static/img/media/puchase-code-002.png)
 
Here is an example how to setup an ExFlow Purchase Code if approval on VAT amount is needed. Add requested coding and a separate line with a VAT G/L account and manually tick the Approval box.

Lines with a Weigh set will be automatically ticked for Approval. Approval is optional on lines with a VAT Weight, so remember to tick the Approval box if an approval on VAT is wished for, on the selected ExFLow Purchase Codes. 

Add requested coding for the cost account (NO VAT = Without VAT in VAT Prod posting Group) and a separate line with a VAT G/L account (ONLY = Only manually booked VAT in VAT Prod posting Group). Specify a VAT Prod Posting group on the lines if it differs from setup on the G/L account card.

![ExFlow Purchase Code Card](@site/static/img/media/puchase-code-003.png)


Please be informed, If VAT lines always should be sent out for approval, the function ''Approve VAT lines'' can be utilized.

Read more about this under section [***Approve VAT Lines.***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/approve-vat-lines)