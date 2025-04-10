---
title: Web User Level Permissions
sidebar_position: 33
hide_title: true
custom_edit_url: null
---
## Web User Permissions

Go to: **ExFlow Web User Level Permissions** 

All ExFlow users need to have a web permission role set on the ExFlow user card to be able to work with approval in ExFlow web and Business Central.<br/><br/>
Go to Web User Level Permission to get an better overview over all web user permissions.


<br/>
 

|Web User Level Permissions |    |
|:-|:-|
|**Edit List**| Edit the web user level permission list
|**Actions --> Functions-- > Initialize setup**|  Reset all changes on the web user level permissions to default again.

<br/>



![web user permissions](@site/static/img/media/exflow-web-user-level-permissions-001.png)


Currently, following four User Level Permissions are available:<br/>


| Web User Level |    |
|:-|:-|
|**Approver**| Approver can Approve, Reject, or set a document On Hold. The approver has only access to documents where approver is included in approval flow. No changes are allowed on the document.
|**Approver (Power)**|  Same permission as Approver. Add and Forward to other Approver. Adding or changing in coding is allowed i.e., G/L Account or Dimensions
|**Approver (Super)**|  Same permission as Power User. The  user can see all approved documents in ExFlow History.
|**Admin**|  Admin permission in ExFlow Web. This user can do settings that applies for all Approvers in ExFlow Web

<br/>

If any changes needs to be done on the permissions, for instance, to allow coding for all user with Approver- permission, it is possible to edit the list and enable the checkbox ''Allow Coding''. 
<br/>

![web user permissions](@site/static/img/media/exflow-web-user-level-permissions-002.png)


Read more about how handle web permissions and to apply it on ExFlow users under section [***Add company access and web permission role under Permissions***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/exflow-user#add-company-access-and-web-permission-role-under-permissions)
