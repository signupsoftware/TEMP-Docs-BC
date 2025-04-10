---
title: Bypass Verify Changes
sidebar_position: 36
hide_title: true
custom_edit_url: null
---
## Bypass Verify Changes

Go to: **ExFlow Setup --> Doc. Posting Checks --> Bypass Verify Changes** 

This function can be used to automate the invoice posting process for approved documents by allowing specified values on ExFlow web columns to bypass the ‘Verify Changes’ step in Approval Status.

![ExFlow Setup](@site/static/img/media/exflow-setup-bypass-verify-changes-001.png)

When enabled in ExFlow Setup, it opens a new page that consists of a list that display web columns and a filter field for adding/editing values to be bypassed in “Approval Status -> Verify Changes”.  

From this page it is possible to add the allowed values to be bypassed. For instance, in below example cost accounts 5910..6230 has been chosen as allowed values. The web approver will be able to change G/L Account within this given filter.

Another setting need to be set in order for this to work, and that would be an asterisk (*) as allowed value for the Web Column Description. In this example, the G/L Account description will be changed, hence the importance of adding an asterisk as allowed value. The same logic will be applied for other Line Types with a description, otherwise ExFlow will not bypass the code changes in Approval Status.

![ExFlow Setup](@site/static/img/media/exflow-setup-bypass-verify-changes-002.png)

If the Web Column Code ''Description'' is not visible in the ''ExFlow Bypass Verify Changes Setup'', then the Description column must be added to ExFlow web. Read more about how to add ExFlow columns under section [ExFlow Web](https://docs.signupsoftware.com/business-central/docs/user-manual/technical/exflow-web#exflow-web)

If the web approver makes any code changes within given filter, then the approved document will be bypassed from being manually updated by the AP staff in the Verify Changes Step in Approval Status.

![ExFlow Setup](@site/static/img/media/exflow-setup-bypass-verify-changes-003.png)

The final approved document will change status from “Approved” to “Ready for posting”. 

![ExFlow Setup](@site/static/img/media/exflow-setup-bypass-verify-changes-004.png)

It is possible to automate further by enabling “Automatically Verify Changes” under ExFlow Setup –-> [***Background Processing***](https://docs.signupsoftware.com/business-central/docs/user-manual/approval-workflow/exflow-approval-status#background-processing)

