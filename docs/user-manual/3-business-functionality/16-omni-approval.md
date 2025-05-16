---
title: OMNI Approval
sidebar_position: 16
hide_title: true
custom_edit_url: null
---
## OMNI Approval

ExFlow OMNI Approval is a way for Business Central users to approve different functions in ExFlow, i.e., ExFlow Contracts and ExFlow Approval Rules. This means that a Contract or an Approval Rule cannot be used in ExFlow before it is fully approved.

### ExFlow OMNI Documents Setup

Go to: ***ExFlow AP Setup - Overview --> ExFlow OMNI Approval --> ExFlow OMNI Document Setup***

In ExFlow OMNI Document Setup there are two different OMNI Types, Contract and Approval Rule.

A setup is required for the OMNI Type, in this case a Contract.

The OMNI Type is the area that will require approval. It's possible to set the minimum number of approvers. When "Require Approval" is ticked then all newly created contracts will require approval.

Enable "Allow Concurrent Approval" if all Approval Groups should be allowed to approve the document at the same time or go to the first Business Central user in the list.

![ExFlow OMNI Document Setup - Contract](@site/static/img/media/omni-document-setup-001.png)

Same kind of setting needs to be done for OMNI Type "Approval Rule" if an approval on an ExFlow Approval Rule is needed before it can be used.

![ExFlow OMNI Document Setup - Approval Rule](@site/static/img/media/omni-document-setup-002.png)

### ExFlow OMNI Approval Rules

Go to: ***ExFlow AP Setup - Overview --> ExFlow OMNI Approval --> ExFlow OMNI Approval Rule***

ExFlow OMNI Approval Rule allows different approval rules for the different OMNI types "Contract" and "Approval Rule".

#### **ExFlow OMNI Approval Rule for Contracts**

Add "Contract" as "OMNI Document Type" and name it. As with regular approval rules priority can be set. When the Approval Rule Filters and Approval Rule Lines is set, the OMNI Approval Rule can be enabled by the Business Central user.

![ExFlow OMNI Approval Rule - Contract](@site/static/img/media/omni-approval-rule-001.png)

Set the filters by clicking on ***Manage \--\> Set Filters*** under Approval Rule Filters.

Add the required filters to use for the current Approval Rule.

![ExFlow OMNI Approval Rule - Filter Page](@site/static/img/media/omni-filter-page-001.png)

Contract Dimension can also be added by clicking on Set Filters, as mentioned above, or by clicking on the Filter cell.

![ExFlow OMNI Approval Rule - Filter Page](@site/static/img/media/omni-approval-rule-filters-001.png)

List the approvers in the same order as they will be approved under the Approval Rule Lines.

![ExFlow OMNI Approval Rule - Approval Rule Lines](@site/static/img/media/omni-approval-rule-lines-001.png)

When Approval Rule Filter and Approval Rule Lines is added the ExFlow OMNI Approval Rule can be Enabled.

#### **ExFlow OMNI Approval Rule for Approval Rules**

Add "Approval Rules" as "OMNI Document Type" and name it. As with regular approval rules priority can be set. When the required Approval Rule Filters and Approval Rule Lines are set, the OMNI Approval Rule can
be enabled by the Business Central user manually.

![ExFlow OMNI Approval Rule -- Approval Rule](@site/static/img/media/omni-approval-rule-002.png)

Select an existing ExFlow Approval Rule or create a new rule as per regular ExFlow standard.

Read more about this under section **"ExFlow Approval Rule"**.

![ExFlow Approval Rule -- Filter Page](@site/static/img/media/omni-approval-rule-003.png)

Add required Filter. When the rule is done and manually enabled, it will be sent out for approval to the Business Central user(s).

![ExFlow OMNI Approval Rule](@site/static/img/media/omni-approval-rule-004.png)

If the Business Central user closes the page without enabling the ExFlow OMNI Approval rule, following question will pop up: *"Do you want to Enable the ExFlow OMNI Approval Rule?"*.

All ExFlow OMNI Approval Rules can be viewed in the ExFlow OMNI Approval Rule list.

![ExFlow OMNI Approval Rule list](@site/static/img/media/omni-approval-rules-001.png)

### ExFlow OMNI Approval Status

Go to: ***ExFlow OMNI Approval --> ExFlow OMNI Approval Status***

The Business Central user can see all documents pending for approval in ExFlow OMNI Approval. It is also possible to see approved, forwarded, and rejected OMNI document. When the status on a document is "Approved" the document are then ready to be used in ExFlow.

![ExFlow OMNI Approval Status](@site/static/img/media/omni-approval-status-001.png)

Go to **Open Card** to open the ExFlow Contract.

To change the approval flow on a document, go to: ***Approval Card***

From this page it is possible to open the original card, change to a different approval rule and add/delete approvers. It is also possible to restart the approval of all lines or a selected line.

![ExFlow OMNI Document](@site/static/img/media/omni-approval-document-001.png)

### ExFlow OMNI Approval Documents

Go to: ***ExFlow OMNI Approval --> ExFlow OMNI Approval Documents***

In ExFlow OMNI Approval Documents the specific Business Central user can see all their documents out for approval in "My Current Approvals". It is also possible to see the Business Central user's future and historical approvals.

![ExFlow OMNI Approval Documents](@site/static/img/media/omni-approval-documents-001.png)

Open Card to view the original card, in this case it would redirect to ExFlow Contract 2.

The OMNI document Contract can be approved, rejected, or forwarded by the concerned Business Central user.

Use Discussion Panel to write comments and mention other Business Central users.

To see current approval flow for a specific document, go to FactBox under "Approvers".

When Business Central user ADMIN has approved, the Approval Document will move to "My Historical Approvals" and go to the next Business Central user ESSENTIAL in the Approval flow.

![ExFlow OMNI Approval Documents - My Historical Approvals](@site/static/img/media/omni-approval-documents-002.png)

When all approvers have approved, the Status will change to Approved in ExFlow OMNI Approval Documents.

Simply click on "Approve" to approve the Approval Rule.

![ExFlow OMNI Approval Documents](@site/static/img/media/omni-approval-documents-003.png)

When an approval rule is approved, the Status will be changed from "Not approved" to "Approved" in ExFlow OMNI Approval Documents and from the ExFlow Approval Rule list as well.

![ExFlow Approval Rule List](@site/static/img/media/approval-rules-001.png)

From the ExFlow Approval Rule List it is also possible to click on ExFlow OMNI Approval Card to view the ExFlow OMNI Document.

![ExFlow OMNI Document - Approved Approval Rule](@site/static/img/media/omni-document-001.png)
