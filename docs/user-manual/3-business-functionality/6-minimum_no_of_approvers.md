---
title: Minimum No. of Approvers
sidebar_position: 6
hide_title: true
custom_edit_url: null
---
## Minimum No. of Approvers
A check for Minimum No. of Approvers can be added on ExFlow Web and also be activated for Import Journal. 

In import Journal, Minimum No. of Approvers needs to be added before the document can be created.<br/>
For ExFlow Web the check is done for last approver.

Budget Owner added as last approver when working with G/L Budget Control is not included in Minimum No. of Approvers.


### Setup Minimum No. of Approvers
Go to: ***ExFlow Setup --> Doc. Posting Checks***

Enter "Minimum No. of Approvers". This will activate a check for last approver in the approval flow. Budget Owner not included.

Go to: ***ExFlow Setup --> Doc. Creation Checks***

To also activate a check for Minimum No. of Approvers in Import Journal, activate "Check Minimum No. of Approvers" in Doc. Creation Checks and add No. of approvers as above.


![ExFlow Setup](@site/static/img/media/exflow-setup-doc-creation-doc-posting-checks-001.png)


### Workflow for Minimum No. of Approvers
If Check Minimum No. of Approvers is activated for Import Journal, the document cannot be created until Minimum No. of Approver or more is added to the approval flow.

During the approval flow the number of approvers can change. Due to this, a check is done when the last approver approves the document. 

If the number of approvers including the current approver is less than in ExFlow Setup, an error is given saying that more approvers must be added before the current approver can approve.


![ExFlow Setup](@site/static/img/media/dynamic-error-web-001.png)

