---
title: Automatic Coding Suggestion Setup
sidebar_position: 17
hide_title: true
---
## Automatic Coding Suggestion Setup

Go to: ***Setup \--\> ExFlow Automatic Coding Suggestion Setup***<br/>
For setup and activating this function, contact your Business Central Partner or SignUp Software.

This function in ExFlow is made to be able to get automatic coding suggestions in the import journal based on historically posted documents. This function will work for invoices and credit memos.

To be able to use this function, it needs to be set up in a couple of places first.

![ExFlow Menu](@site/static/img/media/exflow-meny-auto-coding-001.png)

### Add a New Coding Suggestion

| Coding Suggestion Setup      |	|
|:-|:-|
| **Source Type:**                                          |Gen. Bus. Posting Group, Vendor Posting Group, Vendor, or All. This will define the grouping of Suggestions created by ExFlow
| **Source No:**                                            | This will define what No. from the specific "Source Type" in which this setup should be used. <br/>If Source No. is left empty for Source Type Vendor, grouping is made per Vendor for all Vendors.   <br/>By creating a setup ID as "Source Type" Vendor and "Source No." blank it will create coding suggestions from every vendor, where the suggestions always will be filtered on vendor
| **Description:**                                          | Descriptive text. (100 characters max.)
| **Days Multiplier:**                                      | This defines how severely the number of days since last invoice for that setup will affect the priority for suggested coding to be used. The larger the number, the greater the multiplier. Multiplier should be a negative value. E.g. -10 has a greater influence than -1
| **Occurrence Multiplier:**                                | This defines how severely the number of invoices in the suggestion ID within this setup will affect the priority for suggested coding to be used. The larger the number, the greater the multiplier. Multiplier should be a negative value. E.g. -10 has a greater influence than -1
| **Amount Range %:**                                       |This defines the percentage (plus/minus) of the amount to be applied for the Suggestion ID a specific coding for a document will be saved in
| **Minimum No. of Documents for Validity of Suggestion:**  | The minimum number of documents that needs to be added to the Suggestion Setup ID for a suggestion from that Suggestion ID to be chosen automatically
| **Group per Currency:**                                   | This defines if the grouping should be done with currency
| **Group per Reference**:                                  | This defines if the grouping should be done specified with ExFlow Reference Codes.<br/><br/>

The following are what the buttons do on this page:

| Functions      |	|
|:-|:-|
| **Create Suggestion**:    | This button goes through the setup and adds Suggestions to Suggestion ID
| **Suggestions:**          | This shows the created Suggestion ID for the selected Setup
| **Delete Suggestions:**   | This deletes the Suggestion ID's

![ExFlow Coding Suggestion Setup](@site/static/img/media/coding-suggestion-setup-001.png)

### Enabling Automatic Coding Suggestion

#### ExFlow Setup

Activate this function in ExFlow Setup by enabling this function for all Vendors or Selected Vendors.

When activating "Selected Vendors", it is required to also enable "Use Automatic Coding Suggestion" for the vendors (in the ExFlow Vendor Setup card) that should have this function enabled.

| ExFlow Setup - Auto Coding Suggestion      |	|
|:-|:-|
| **Grouping of Documents in Suggestion Lines with Amount:**    | Defines what Suggestion ID to group a coding to
| **Coding Suggestion Decision Based on the Amount:**           |Specifies how the suggestion line will be chosen based on the amount of the document
| **Suggest Automatic Coding for Imported Document:**           | Specifies how the automatic coding suggestion will be used
| **Calculate Suggestions From Date:**                          | Specifies the starting date of the documents to be factored in the coding suggestions
| **Suggest Automatic Coding Amount from Coding Set ID:**       | Specifies if the amounts will be automatically suggested in the created lines from the Coding Set ID

![ExFlow Setup - Automatic Suggestion](@site/static/img/media/exflow-setup-automatic-suggestion-001.png)

#### Import Journal

Enable "Create Lines with Automatic Suggestion" to activate this function for a specific Import Journal. (this field may need to be added to the page via personalization)

![ExFlow Import Journals](@site/static/img/media/import-journals-008.png)

#### Periodic Activities

To apply the Automatic Coding Suggestion, it is required to run the functions ExFlow Coding Set IDs for Coding Suggestions and ExFlow Creating Automatic Coding Suggestions. First time use of Automatic Coding suggestion will need both of these jobs to be run at least once. Following that, recurrence can be adjusted in the corresponding Job Queue Entries.

![Periodic Activities](@site/static/img/media/exflow-menu-005-periodic-activities.png)
