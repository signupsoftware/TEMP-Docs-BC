---
title: Denying Coding Rules
sidebar_position: 8
hide_title: true
---
## Denying Coding Rules

Go to: ***Setup \--\> ExFlow Manual Setup \--\> ExFlow Denying Coding Rules***

"Denying Coding Rules" can be used to restrict approvers from creating invalid coding in ExFlow Web.

Denying Coding Rules are used to prohibit the approver in ExFlow Web from adding or approve values in certain ways. E.g. to block accounts
5910..5999 in combination with an empty Department value.

| General      |	|
|:-|:-|
|**ID:**                            | ID numbers are assigned to the coding rule in the order they are created. This has no effect on prioritization
| **Name:**                         | Descriptive name for the rule
| **Active:**                       | If the rule is active or not
| **Rule for:**                     | Add All for all document types or choose from list if this Rule should activate only for Quote, Invoice, Credit Memo, or Order
| **From Amount:**                  | Filter on total amount on the document
| **To Amount:**                    | Filter on total amount on the document
| **From Line Amount:**             | Specifies if the coding rule should only be applied to document lines in a specific line amount range
| **To Line Amount:**               | Specifies if the coding rule should only be applied to document lines in a specific line amount range
| **Validation Message:**           | Add an optional description if needed
| **Applies to Approval Groups:**   | Specifies if the coding rule only applies to specific Approval Groups
| **Final Approver Only:**          | Specifies if the coding rule should only be applied to the final approver in the approval flow

![ExFlow Denying Coding Rule Card](@site/static/img/media/denying-coding-rule-001.png)
