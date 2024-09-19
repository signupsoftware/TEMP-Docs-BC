---
title: Intercompany
sidebar_position: 29
hide_title: true
custom_edit_url: null
---
## Intercompany

ExFlow now supports the Business Central standard Intercompany functionality. Following Intercompany fields are now available throughout the ExFlow process.<br/><br/>
•	IC Partner Code<br/>
•	IC Partner Ref. Type<br/>
•	IC Partner Reference<br/>


#### Intercompany in the Import Journal
The IC fields are now available in the import journal and can be added to the view via user personalization. Values in the IC fields will flow to the invoice in Business Central when it is created.

When processing non-PO (cost) invoices, the intercompany fields can be populated manually to allocate a portion of the cost to related entities that have been setup in BC as intercompany partners.

For PO matched invoices, if the IC fields are populated in the purchase order, the values will flow from the PO to the invoice line.

![ExFlow Import Journal](@site/static/img/media/intercompany-import-journal-001.png)

#### Intercompany in Approval Status
In Approval Status, the user has visibility to the IC fields and related values. The IC fields can be added to the view via user personalization.

![ExFlow Approval Status](@site/static/img/media/intercompany-approval-status-001.png)


#### Intercompany in ExFlow Web
The IC Partner Code and IC Partner Reference fields can be added as columns in ExFlow Web. The IC values are visible to the approver and, approvers that have permissions to change coding can update the IC fields if necessary.

![ExFlow Web](@site/static/img/media/intercompany-web-001.png)

#### Intercompany in ExFlow Approval Documents
For approvers that approve in Business Central, the IC fields are now visible and editable in ExFlow Approval Documents (with the required permissions).

![Approval Document](@site/static/img/media/intercompany-document-approval-001.png) 

When a user runs the ‘Verify Changes’ function, the IC fields are shown as well as any changes made.

![ExFlow Approval Status](@site/static/img/media/intercompany-approval-status-verify-002.png) 

#### Intercompany in ExFlow Approval Status History
After a document is posted, the IC Partner Code and IC Partner Reference fields are visible in ExFlow Approval Status History.

![ExFlow Approval Status History](@site/static/img/media/intercompany-approval-status-history-003.png) 