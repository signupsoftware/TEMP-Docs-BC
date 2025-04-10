---
title: Approval Groups
sidebar_position: 3
hide_title: true
custom_edit_url: null
---
## Approval Groups

Go To: ***Setup \--\> ExFlow Manual Setup \--\> ExFlow Approval Groups***

As mentioned in New User, Approval Groups are created automatically when a new user is created. Personal groups should not be modified (except from adding replacers).


### Create a New Approval Group

In addition, it is possible to set up logical groups, like Purchase Dept or IT Dept Approval Groups with one or more users.
 
Only one user in this group can approve, but all users will receive and can find the document in folder Recent on ExFlow Web.

| General   |   |
|:-|:-|
|**Code:**                                  | Add a Code that describes the Approval Group. If not excluded this Code is visible on ExFlow Web when forwarding and adding approvers
| **Name:**                                 | Add a name that describes the Code
| **Blocked:**                              | If the Approval Group is no longer to be used.
| **Exclude from the web´s user list:**     | To exclude this approval group in user list when forwarding and adding approvers on ExFlow Web. An Approval Group with Dynamic Approval Type cannot be added manually in the approval flow on ExFlow Web. Exclude from the web´s user list will therefore be activated automatically when selecting a Dynamic Approval Type
| **Auto Approve:**                         | Add an Auto Approval Group when using Auto Approval in Order Matching or matching against Contract. If Approval Group Members are added, the document will show as approved in folder “Recent” on ExFlow Web
| **Auto Approve Comment:**                 | Add a comment that will be copied to Comment in Doc. Line Approvers.

![ExFlow Approval Group Card](@site/static/img/media/approval-group-001-header.png)


### Approval Group with Dynamic Approval Type

It is possible to add approvers automatically depending on different coding on the Document Line.

| Dynamic Approval Type   |   |
|:-|:-|
| **Dynamic Approval Type:**                | This field contains multiple options that can be used for different Dynamic Approval Flows. All options require unique setup and when selected it is not possible to add Approval Group Members   <br/> Read more about setup and dynamic approval flow options for dimensions, projects, and purchasers under section [***Approval Rules --> Dynamic Approval flow for Dimension Owners,***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/approval-rules#dynamic-approval-flow-for-dimension-owners) [***Projects,***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/approval-rules#dynamic-approval-flow-for-projects) or [***Purchasers***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/approval-rules#dynamic-approval-flows-purchasers)
| **Exclude from the web's user list:**     | Will automatically be selected since this Approver Group should not be able to add manually from ExFlow Web
| **Approval Group Members:**               | There should not be any ExFlow Users added on Approval Group Members

![ExFlow Approval Group - Person Responsible](@site/static/img/media/approval-group-002-person-responsible.png)


### Escalation

If an approver is not approving documents in time, there is a function to escalate documents to the manager.

The Manager can be added for all approvers in ExFlow Setup or Per Approval Group and running the job manually or automatically with Job Queue.

Read more about setup and how to setup Job Queue under section [***Approval Workflow --> Periodic Activities --> Escalation Job***](https://docs.signupsoftware.com/business-central/docs/user-manual/approval-workflow/periodic-activities#escalation-job)

| Escalation   |   |
|:-|:-|
| **Manager:**                  | Add the Manager for this specific Approval Group
| **Days before escalation:**   | Add number of days before escalation


### Approval Group Members

It is possible to add several approvers in one Approval Group. Only one user in this group can approve, but all users will receive and can find the document in folder Recent on ExFlow Web.


| Approval Group Members   |   |
|:-|:-|
| **Starting and Ending date:**     | is used for approver that is temporary replacing another approver. Use function to add replacers from ExFlow Web, Assign Replacer or from ExFlow User Card            <br/> Read more under section [***Business Functionality --> ExFlow User --> Add a Replacer During Vacation Time***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/exflow-user#add-a-replacer-during-vacation-time) and [***Approval Workflow --> Periodic Activities --> Assign Replacers***](https://docs.signupsoftware.com/business-central/docs/user-manual/approval-workflow/periodic-activities#assign-replacers)

![Approval Group Members](@site/static/img/media/approval-group-003-lines.png)

An Approval Group require at least one user.

![No Approval Group Members](@site/static/img/media/approval-group-006-no-members.png)