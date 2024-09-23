---
title: Approve VAT Lines
sidebar_position: 34
hide_title: true
custom_edit_url: null
---
## Approve VAT Lines

Go to: **ExFlow Setup --> Approval --> Approve VAT Lines** 

Enable the setting ''Approve VAT Lines'' if all VAT lines should be included in the approval flow per default. 

![Approve VAT Lines](@site/static/img/media/exflow-setup-approval-vat-lines-001.png)


Depending on settings and workflow, approval of VAT lines can be setup differently. To get all VAT lines automatically ticked for approval per default, it is possible to enable ''Propose VAT line'' in the ExFlow Purchase Code Card, or under General in ExFlow Setup. 


![Approve VAT Lines](@site/static/img/media/exflow-setup-approval-vat-lines-003.png)

ExFlow will then send VAT lines for approval to the chosen approver according to the approval flow. Manually created VAT lines in Import Journal will also be marked for approval. 


![Approve VAT Lines](@site/static/img/media/exflow-setup-approval-vat-lines-004.png)


In case of usage of ExFlow Purchase Code on the header, this setting is ignored. With this function enabled, it still works to add a coding in an ExFlow Purchase Code with VAT line that Approval box is unticked. Below VAT lines will not be included in the approval flow.

![Approve VAT Lines](@site/static/img/media/exflow-setup-approval-vat-lines-002.png)