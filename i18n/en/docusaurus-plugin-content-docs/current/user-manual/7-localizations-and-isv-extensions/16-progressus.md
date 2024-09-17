---
title: Progressus
sidebar_position: 16
hide_title: true
---
## Progressus

Progressus is an Add On for extended functionality to Projects.

### ExFlow Setup

In ExFlow Setup, as for PGS Expense Code, Project and Project Task and under Edit Web Columns in that order.

When adding PGS Expense Code, ExFlow is automatically adding Denying
Coding Rules not to use PGS Expense Code on Line Type: Item, Resource,
Fixed Assets and Charge (Item).

Also add PGS Expense Payment Type for Purchase Documents under Fast tab
Progressus.

![ExFlow Setup - Progressus](@site/static/img/media/exflow-setup-progressus-001.png)

If possible, add a Default Project Task No. under ExFlow Setup --> General. Read more about this 
under **Default Project Task No.**

![ExFlow Setup - General](@site/static/img/media/exflow-setup-general-005.png)

### ExFlow Denying Coding Rules with Progressus

When adding a Project on ExFlow Web, approver also needs to add Project Task and PGS Expense Code if missing. Now following Denying Coding Rule can be useful.

A reminder to add Project Task when using Project on ExFlow Web.

![ExFlow Denying Coding Rule](@site/static/img/media/image371.png)

A reminder to add PGS Expense Code when using G/L Account and
Project on ExFlow Web.

![ExFlow Denying Coding Rule](@site/static/img/media/image372.png)

A reminder to add Project when using G/L Account and PGS Expense code on ExFlow Web.

![ExFlow Denying Coding Rule](@site/static/img/media/image373.png)

#### Work with Expense Resource on the document lines in Import Journal 
It is also possible to utilize the Expense Resource, Expense Date and Chargeable fields in Import Journal. These fields need to be added manually through personalization. 

Chargeable will be updated from the Project Task No. <br/>
However, please note that if the Line type is:<br/>
•	***Item***: then PGS Chargeable will be updated from Item Chargeable. <br/>
•	***G/L Account***: then PGS Chargeable will be updated from Expense Chargeable. <br/>

This can be adjusted manually on the lines. <br/>

Moreover, these fields can be found in lines throughout most ExFlow pages: Import Journal, Approval Status, Approval Status History and Deleted Documents.

Additionally, there will be no updating of prices via Progressus. Prices will remain as per interpreted.


#### ExFlow Purchase Code for Progressus

PSG Expense Code and PSG Payment Type are also available in ExFlow Purchase Code. 

### Progressus Expense Code on ExFlow Web

Due to Denying Coding Rules the Approver needs to add Project, Project Task and PGS Expense Code on ExFlow Web if missing. The G/L Account will be added or updated automatically from Project Expense
Posting Setup in Business Central.

