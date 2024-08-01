---
title: User Coding Rules
sidebar_position: 7
hide_title: true
---
## User Coding Rules

Go to: ***Setup \--\> ExFlow Manual Setup \--\> ExFlow User Coding Rules***

If an approver should be able to do coding changes of the invoice line in ExFlow Web, ExFlow User Coding Rules can be used to decide/restrict what values he/she can select.

Administrators can create User Coding Rules for individual or groups of users. The coding rule must be applied to the ExFlow User by referring to the ID.

Each visible column in ExFlow Web can be modified. Choose if the approver should be able to select all "All", none "Empty", or a filter of values "Text Range".

The "User Coding Rule" in the example below allows the approver to change the value of column "Department" to "SALES".

| General      |	|
|:-|:-|
|**ID:**        | ID numbers are assigned to the coding rule in the order they are created. This has no effect on prioritization
| **Name:**     | Descriptive name for the rule
| **Active:**   | If the rule is active or not

![ExFlow User Coding Rule Card](@site/static/img/media/user-coding-rules-001.png)

When the User Coding Rule is created, go to the ExFlow User Card, and apply the Coding Rule ID on the selected user for the specific company. An ExFlow user can only have one User Coding Rule set per company.
