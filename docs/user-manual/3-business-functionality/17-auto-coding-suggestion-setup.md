---
title: Auto Coding Suggestion Setup
sidebar_position: 17
hide_title: true
custom_edit_url: null
---
## Auto Coding Suggestion Setup

Go to: ***Setup --> ExFlow Auto Coding Suggestion Setup***<br/>

This function in ExFlow is made to be able to get automatic coding suggestions in the import journal based on historically posted documents. This function will work for invoices and credit memos.

To be able to use this function, it needs to be set up in a couple of places first.

![ExFlow Menu](@site/static/img/media/exflow-meny-auto-coding-001.png)

Enable the **''Show Advanced Setup''** in the Auto Coding Suggestion Setup page, to get the full page overview. 

![ExFlow Coding Suggestion Setup](@site/static/img/media/coding-suggestion-setup-001.png)

Please note that the last two fields in above picture (''Group per Currency'' and ''Group per Reference'') are hidden per default and can be added via page personalization.

| Auto Coding Suggestion Setup ribbon     |	|
|:-|:-|
| **New**:    | Add a new Coding Suggestion
| **Edit List**:    | Edit the Coding Suggestion Setup list
| **Delete**:    | Delete a Coding Suggestion
| **Create Suggestion**:    | This button goes through the setup and adds Suggestions to Suggestion ID
| **Suggestions:**          | This shows the created Suggestion ID for the selected Setup
| **Delete Suggestions:**   | This deletes the Suggestion ID's
| **Coding Document History:**   | Opens the ExFlow Auto Coding Suggestion Document History page
| **Group Documents By:**   | Opens ExFlow Auto Coding Suggestion Grouping List
| **Apply Fields:**   | Opens Auto Coding Suggestion Transfer Fields Setup


<br/>

### Add a New Auto Coding Suggestion

| Auto Coding Suggestion Setup --> New/Edit List      |	|
|:-|:-|
| **Setup ID:**                                          |Specifies the ID of the coding suggestion setup.
| **Source Type:**                                          |Gen. Bus. Posting Group, Vendor Posting Group, Vendor, or All. This will define the grouping of Suggestions created by ExFlow
| **Source No:**                                            | This will define what No. from the specific "Source Type" in which this setup should be used. <br/>If Source No. is left empty for Source Type Vendor, grouping is made per Vendor for all Vendors.   <br/>By creating a setup ID as "Source Type" Vendor and "Source No." blank it will create coding suggestions from every vendor, where the suggestions always will be filtered on vendor
| **Description:**                                          | Descriptive text. (100 characters max.)
| **Days Multiplier:**                                      | This defines how severely the number of days since last invoice for that setup will affect the priority for suggested coding to be used. The larger the number, the greater the multiplier. Multiplier should be a negative value. E.g. -10 has a greater influence than -1
| **Occurrence Multiplier:**                                | This defines how severely the number of invoices in the suggestion ID within this setup will affect the priority for suggested coding to be used. The larger the number, the greater the multiplier. Multiplier should be a negative value. E.g. -10 has a greater influence than -1
| **Amount Range %:**                                       |This defines the percentage (plus/minus) of the amount to be applied for the Suggestion ID a specific coding for a document will be saved in
| **Minimum No. of Documents for Validity of Suggestion:**  | The minimum number of documents that needs to be added to the Suggestion Setup ID for a suggestion from that Suggestion ID to be chosen automatically
| **Group per Currency:**                                   | This defines if the grouping should be done with currency. <br/><br/> This field is hidden per default, add this field through page personalization, if needed.
| **Group per Reference**:                                  | This defines if the grouping should be done specified with ExFlow Reference Codes. <br/><br/> This field is hidden per default, add this field through page personalization, if needed.


<br/>

### Enabling Auto Coding Suggestion

#### ExFlow Setup

Activate this function in ExFlow Setup by enabling this function for all Vendors or Selected Vendors.

When activating "Selected Vendors", it is required to also enable "Use Automatic Coding Suggestion" for the vendors, in the [***ExFlow Vendor Setup***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/vendor-setup) card that should have this function enabled. 

![ExFlow Setup - Automatic Suggestion](@site/static/img/media/exflow-setup-automatic-suggestion-001.png)

| ExFlow Setup --> Auto Coding Suggestion Section     |	|
|:-|:-|
| **Grouping of Documents in Suggestion Lines with Amount:**    | Specifies how the documents will be grouped based on the amount of the document.
| **Auto Coding Suggestion Decision Based on the Amount:**           |Specifies how the suggestion line will be chosen based on the amount of the document
| **Suggest Auto Coding for Imported Document:**           | Specifies how the automatic coding suggestion will be used
| **Calculate Auto Suggestions From Date:**                          | Specifies the starting date of the document to be used in the auto coding suggestions.
| **Suggest Auto Coding Amount from Coding Set ID:**       | Specifies if the amounts will be automatically suggested in the created lines from the Coding Set ID

<br/>

#### Import Journal

Enable **Create Lines with Automatic Suggestion** to activate this function for a specific Import Journal.

![ExFlow Import Journals](@site/static/img/media/import-journals-008.png)

<br/>

#### Periodic Activities

To apply the Auto Coding Suggestion, it is required to run the functions **ExFlow Coding Set IDs for Coding Suggestions** and **ExFlow Creating Auto Coding Suggestions**. <br/>

First time use of Auto Coding suggestion will need both of these jobs to be run at least once. Following that, recurrence can be adjusted in the corresponding Job Queue Entries.

![Periodic Activities](@site/static/img/media/exflow-menu-005-periodic-activities.png)
