---
title: ExFlow Email Setup
sidebar_position: 9
hide_title: true
---
## ExFlow Email Setup
 
Go to: **ExFlow Email Setup**

To send email reminders, ExFlow Email Setup is needed for each Email Type. Email reminders can be sent manually or by adding a job queue. For setup, read more under section [***Email Reminders.***](https://docs.exflow.cloud/business-central/docs/user-manual/approval-workflow/email-reminders#email-reminders)

Please note that a Business Central standard Email Account must be set to be able to receive ExFlow emails. More information about this can be found at [***Microsoft Documentation***](https://learn.microsoft.com/en-us/dynamics365/business-central/admin-how-setup-email). For assistance regarding this, please contact your trusted Dynamics 365 Business Central implementation partner.

The following ***Email Types*** can be utilized: 

### Unreceived Order
Send reminders when purchase invoice in import journal is matched to an unreceived order. <br/> 
Recipients can be added in all, one, or several fields to send reminders.<br/><br/> 

|General |  |
|:-|:-|
| **Email Type:**           | Unreceived Order
| **Process Type:**         | Scheduled
| **Description:**          |Add a description. This will not be added to any email
| **CC Email:**             | N/A for unreceived order
| **Test Email Address:**   |Add an email address for test mode. ExFlow will send emails only to this user
| **Send Attachment:**      | Send attachments will enclose purchase invoice PDF as attachment and users will receive one email per document
| **ExFlow Web URL:**       | N/A
| **Delay sending (days):** | Add No. of days to delay email reminders sent by Job Queue Entries
| **Email Scenario:**       | Use ExFlow Default if connecting to separate email account with same scenario

|Recipients|  |
|:-|:-|
| **Approval Groups**:            | Select and add an approval group
| **Fixed Email Addresses**:      | Select or add one or several fixed email addresses
| **Purchaser**:                  | Activate to send reminders to current purchaser on order. If purchaser is missing as an ExFlow user, reminder will be sent to email address added on salespeople/purchaser card
| **Email Purchase Coordinator**: | Add one email address to send reminders to a specific purchase coordinator

|Statistics |  |
|:-|:-|
| **Last Sent**:            | Shows date and time for last sent reminder                                     
| **No. of Email Logs**:    | Shows No. of email Logs
| **No. Error Entries**:    | Shows No. of error entries
<br/><br/>


### Inbox Reminder
Send reminders that approvers have document to approve.<br/>
This setting can also be added automatically when running [***Get Started Wizard***](https://docs.exflow.cloud/business-central/docs/user-manual/welcome-to-exflow/get-started)<br/><br/>

| General |  |
|:-|:-|
| **Email Type**:           | Inbox Reminder
| **Process Type**:         | Scheduled
| **Description**:          | Add a description. This will not be added to any email
| **CC Email**:             | To include a cc in all reminders, add email address
| **Test Email Address**:   | Add an email address for test mode. ExFlow will send emails only to this user
| **Send Attachments**:     | Send attachments will enclose purchase document as attachment and users will receive one email per document
| **ExFlow Web URL**:       | Add URL to ExFlow Web. This will be added as a link in email
| **Delay sending (days)**: | Add No. of days to delay email reminders sent by Job Queue Entries
| **Email Scenario**:       | Use ExFlow Default if connecting to separate email account with same scenario

| Statistics |  |
|:-|:-|
| **Last Sent**:            | Shows date and time for last sent reminder
| **No. of Email Logs**:    | Shows No. of email Logs
| **No. Error Entries**:    | Shows No. of error entries
<br/><br/>



### Contract Reminder
Send a reminder if contract expires.

| General |  |
|:-|:-|
| **Email Type**:               | Contract Reminders
| **Process Type**:             | Scheduled
| **Description**:              | Add a description. This will not be added to any email
| **CC Email**:                 | To include a cc in all reminders, add email address
| **Test Email Address**:       | Add an email address for test mode. ExFlow will send emails only to this user
| **Send Attachments**:         | N/A
| **ExFlow Web URL**:           | N/A
| **Delay sending (days)**:     | Add No. of days to delay email reminders from Job Queue Entries
| **Email Scenario**:           | Use ExFlow Default if connecting to separate email account with same Scenario

| Statistics |  | 
|:-|:-|
| **Last Sent**:                | Show date and time for last sent reminder<br/>
| **No. of Email Logs**:        | Shows No. of Email Logs.<br/>
| **No. Error Entries**:        | Shows No. of Error Entries<br/>
<br/><br/>



### Comment Notification - Chat
To send an email if an Exflow User is taged in Chat/Discussion Panel

| General |  | 
|:-|:-|
| **Email Type**:               | Comment Notification
| **Process Type**:             | Scheduled
| **Description**:              | Add a description. This will not be added to any email
| **CC Email**:                 | N/A
| **Test Email Address**:       | Add an Email address for test mode. ExFlow will send all emails only to this user
| **Send Attachments**:         | N/A
| **ExFlow Web URL**:           | Add URL to ExFlow Web. This will be added as a link in email
| **Delay sending (days)**:     | N/A
| **Email Scenario**:           | Use ExFlow Default if connecting to separate email account with same Scenario

| Statistics |  | 
|:-|:-|
| **Last Sent**:            | Shows date and time for last sent reminder
| **No. of Email Logs**:    | Shows No. of Email Logs
| **No. Error Entries**:    | Shows No. of Error Entries
<br/><br/>



### OMNI Reminder
Send email ExFlow Users have something to approve in OMNI approval.

| General |  | 
|:-|:-|
| **Email Type**:           | OMNI Reminder
| **Process Type**:         | Scheduled 
| **Description**:          | Add a description. This will not be added to any email
| **CC Email**:             | To include a cc in all reminders, add email address
| **Test Email Address**:   | Add an Email address for test mode. ExFlow will send all emails only to this user
| **Send Attachments**:     | N/A 
| **ExFlow Web URL**:       | N/A  
| **Delay sending (days)**: | Add No. of days to delay email reminders from Job Queue Entries
| **Email Scenario**:       | Use ExFlow Default if connecting to separate email account with same Scenario

| Statistics |  | 
|:-|:-|
| **Last Sent**:            | Shows date and time for last sent reminder
| **No. of Email Logs**:    | Shows No. of Email Logs
| **No. Error Entries**:    | Shows No. of Error Entries
<br/><br/>



### Rejected Order
Send email if order is rejected.

| General |  | 
|:-|:-|
| **Email Type**:               | Rejected Order  
| **Process Type**:             | Scheduled 
| **Description**:              | Add a description. This will not be added to any email
| **CC Email**:                 | To include a cc in all reminders, add email address
| **Test Email Address**:       | Add an Email address for test mode. ExFlow will send all emails only to this user
| **Send Attachments**:         | N/A
| **ExFlow Web URL**:           | N/A
| **Delay sending (days)**:     | Add No. of days to delay email reminders from Job Queue Entries
| **Email Scenario**:           | Use ExFlow Default if connecting to separate email account with same Scenario

| Recipients |  |
|:-|:-|
| **Approval Groups**:              | Select and add an approval group
| **Fixed Email Addresses**:        | Select or add one or several fixed email addresses
| **Purchaser**:                    | Activate to send reminders to current order purchaser. If purchaser is missing as an ExFlow user, reminder will be sent to email address added on salespeople/purchaser card
| **Email Purchase Coordinator**:   | Add one email address to send reminders to a specific purchase coordinator

| Statistics |  | 
|:-|:-|
| **Last Sent**:            | Shows date and time for last sent reminder
| **No. of Email Logs**:    | Shows No. of Email Logs
| **No. Error Entries**:    | Shows No. of Error Entries
<br/><br/>



### Rejected Quote
Send email if a quote is rejected.

| General |  | 
|:-|:-|
| **Email Type**:               | Rejected Quote 
| **Process Type**:             | Scheduled 
| **Description**:              | Add a description. This will not be added to any email
| **CC Email**:                 | To include a cc in all reminders, add email address
| **Test Email Address**:       | Add an Email address for test mode. ExFlow will send all emails only to this user
| **Send Attachments**:         | N/A
| **ExFlow Web URL**:           | N/A
| **Delay sending (days)**:     | Add No. of days to delay email reminders from Job Queue Entries
| **Email Scenario**:           | Use ExFlow Default if connecting to separate email account with same Scenario

| Recipients |  |
|:-|:-|
| **Approval Groups**:              | Select and add an approval group
| **Fixed Email Addresses**:        | Select or add one or several fixed email addresses
| **Purchaser**:                    | Activate to send reminders to current quote purchaser. If purchaser is missing as an ExFlow user, reminder will be sent to email address added on salespeople/purchaser card
| **Email Purchase Coordinator**:   | Add one email address to send reminders to a specific purchase coordinator

| Statistics |  | 
|:-|:-|
| **Last Sent**:            | Shows date and time for last sent reminder
| **No. of Email Logs**:    | Shows No. of Email Logs
| **No. Error Entries**:    | Shows No. of Error Entries
<br/><br/>



### Rejected Invoice/Credit
Send email if invoice or credit memo is rejected.

| General |  | 
|:-|:-|
| **Email Type**:               | Rejected Invoice/Credit 
| **Process Type**:             | Scheduled 
| **Description**:              | Add a description. This will not be added to any email
| **CC Email**:                 | To include a cc in all reminders, add email address
| **Test Email Address**:       | Add an Email address for test mode. ExFlow will send all emails only to this user
| **Send Attachments**:         | N/A
| **ExFlow Web URL**:           | N/A
| **Delay sending (days)**:     | Add No. of days to delay email reminders from Job Queue Entries
| **Email Scenario**:           | Use ExFlow Default if connecting to separate email account with same Scenario

| Recipients |  |
|:-|:-|
| **Approval Groups**:              | Select and add an approval group
| **Fixed Email Addresses**:        | Select or add one or several fixed email addresses
| **Purchaser**:                    | Activate to send reminders to current order purchaser. If purchaser is missing as an ExFlow user, reminder will be sent to email address added on salespeople/purchaser card
| **Email Purchase Coordinator**:   | Add one email address to send reminders to a specific purchase coordinator

| Statistics |  | 
|:-|:-|
| **Last Sent**:            | Shows date and time for last sent reminder
| **No. of Email Logs**:    | Shows No. of Email Logs
| **No. Error Entries**:    | Shows No. of Error Entries
<br/><br/>



### Contract Invoice Reminder
Send email if contract invoice is missing.

| General |  | 
|:-|:-|
| **Email Type**:               | Contract Invoice Reminder 
| **Process Type**:             | Scheduled 
| **Description**:              | Add a description. This will not be added to any email
| **CC Email**:                 | To include a cc in all reminders, add email address
| **Test Email Address**:       | Add an Email address for test mode. ExFlow will send all emails only to this user
| **Send Attachments**:         | N/A
| **ExFlow Web URL**:           | N/A
| **Delay sending (days)**:     | Add No. of days to delay email reminders from Job Queue Entries
| **Email Scenario**:           | Use ExFlow Default if connecting to separate email account with same Scenario

| Recipients |  |
|:-|:-|
| **Approval Groups**:              | Select and add an approval group
| **Fixed Email Addresses**:        | Select or add one or several fixed email addresses

| Statistics |  | 
|:-|:-|
| **Last Sent**:            | Shows date and time for last sent reminder
| **No. of Email Logs**:    | Shows No. of Email Logs
| **No. Error Entries**:    | Shows No. of Error Entries
<br/><br/>



### Unreceived Order - Approved
Send reminders when and approved purchase invoice matched to an unreceived order in Approval Status. 

| General |  | 
|:-|:-|
| **Email Type:**           | Unreceived Order - Approved
| **Process Type:**         | Scheduled
| **Description:**          |Add a description. This will not be added to any email
| **CC Email:**             | N/A
| **Test Email Address:**   |Add an email address for test mode. ExFlow will send emails only to this user
| **Send Attachment:**      | Send attachments will enclose purchase invoice PDF as attachment and users will receive one email per document
| **ExFlow Web URL:**       | N/A
| **Delay sending (days):** | Add No. of days to delay email reminders sent by Job Queue Entries
| **Email Scenario:**       | Use ExFlow Default if connecting to separate email account with same scenario

| Recipients |  |
|:-|:-|
| **Approval Groups**:              | Select and add an approval group
| **Fixed Email Addresses**:        | Select or add one or several fixed email addresses
| **Purchaser**:                    | Activate to send reminders to current order purchaser. If purchaser is missing as an ExFlow user, reminder will be sent to email address added on salespeople/purchaser card
| **Email Purchase Coordinator**:   | Add one email address to send reminders to a specific purchase coordinator

| Statistics |  | 
|:-|:-|
| **Last Sent**: | Shows date and time for last sent reminder
| **No. of Email Logs**: | Shows No. of Email Logs
| **No. Error Entries**: | Shows No. of Error Entries
<br/><br/>



### On hold Reminder
Send reminders if a purchase document is set on hold.

| General |  | 
|:-|:-|
| **Email Type:**           | On hold
| **Process Type:**         | Scheduled
| **Description:**          |Add a description. This will not be added to any email
| **CC Email:**             | N/A
| **Test Email Address:**   |Add an email address for test mode. ExFlow will send emails only to this user
| **Send Attachment:**      | Send attachments will enclose purchase document PDF as attachment and users will receive one email per document
| **ExFlow Web URL:**       | N/A
| **Delay sending (days):** | Add No. of days to delay email reminders sent by Job Queue Entries
| **Email Scenario:**       | Use ExFlow Default if connecting to separate email account with same scenario


| Statistics |  | 
|:-|:-|
| **Last Sent**: | Shows date and time for last sent reminder
| **No. of Email Logs**: | Shows No. of Email Logs
| **No. Error Entries**: | Shows No. of Error Entries
<br/><br/>



### Approved Order/Quote	
Send an email to the creator of the purchase order/quote when the purchase order/quote is approved. 

| General |  | 
|:-|:-|
| **Email Type:**           | Approved Order/Quote
| **Process Type:**         | Scheduled
| **Description:**          |Add a description. This will not be added to any email
| **CC Email:**             | N/A
| **Test Email Address:**   |Add an email address for test mode. ExFlow will send emails only to this user
| **Send Attachment:**      | Send attachments will enclose purchase document PDF as attachment and users will receive one email per document
| **ExFlow Web URL:**       | N/A
| **Delay sending (days):** | Add No. of days to delay email reminders sent by Job Queue Entries
| **Email Scenario:**       | Use ExFlow Default if connecting to separate email account with same scenario


| Statistics |  | 
|:-|:-|
| **Last Sent**: | Shows date and time for last sent reminder
| **No. of Email Logs**: | Shows No. of Email Logs
| **No. Error Entries**: | Shows No. of Error Entries
<br/><br/>
