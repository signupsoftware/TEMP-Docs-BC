---
title: Auto Coding Suggestion Setup
sidebar_position: 17
hide_title: true
custom_edit_url: null
---
## Auto Coding Suggestion Setup

Go to: ***ExFlow Setup - Overview --> Auto Coding Suggestion Setup*** or search on ***ExFlow Auto Coding Suggestion Setup***

This function in ExFlow is made to be able to get automatic coding suggestions in the Import Journal based on historically posted documents and works for both invoices and credit memos. This can be useful for companies who have posted history in Business Central but just started to use ExFlow.<br/>

*Auto Coding Suggestion* can give coding suggestion if no other suggestion type has been applied, like an ExFlow Purchase Code or Predefined G/L Account. The Auto Coding Suggestion continuously update coding suggestions after posting the documents, to always give an accurate future suggestion.<br/>

**Please note:** This function only support G/L Accounts, not other line types. 

The steps for having a proper Auto Coding Suggestion would be to: <br/>
1. Have posted documents history <br/>
2. Create coding set IDs<br/> 
3. Create suggestions<br/>
<br/>

Or, let ExFlow handle Auto Coding Suggestion via [Periodic Activities](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/auto-coding-suggestion-setup#periodic-activities), where the steps would be to run the reports to:
* Create coding set IDs <br/>
* Create auto coding suggestions<br/>

## Setup 
### Add a New Auto Coding Suggestion

To start with Auto Coding Suggestions, Source Type(s) must be added. It can be a Vendor, an Gen. Bus Posting Group, a Vendor Posting Group or to choose all of them as a last option.

![ExFlow Coding Suggestion Setup](@site/static/img/media/auto-coding-suggestion-003.png)

Adding Source type will also create an Setup ID. Next step, after adding a Source Type, is to click on ''Create Suggestion''. 

Enter ''Suggestions'' to see the newly created suggestions. 

![ExFlow Coding Suggestion Setup](@site/static/img/media/auto-coding-suggestion-004.png)


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



#### Advanced Setup
Enable the **''Show Advanced Setup''** in the Auto Coding Suggestion Setup page, to get the full page overview, if there is a need to add a more advanced setup.

![ExFlow Coding Suggestion Setup](@site/static/img/media/coding-suggestion-setup-001.png)

<br/>

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
Go to: **ExFlow Setup --> Auto Coding Suggestion**

Activate this function in ExFlow Setup by enabling this function for all Vendors or Selected Vendors.

When activating "Selected Vendors", it is required to also enable "Suggest Auto Coding for Imported Document" for the vendors, in the [***ExFlow Vendor Setup***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/vendor-setup) card that should have this function enabled. 

![ExFlow Setup - Automatic Suggestion](@site/static/img/media/exflow-setup-automatic-suggestion-001.png)

| Auto Coding Suggestion     |	|
|:-|:-|
| **Grouping of Documents in Suggestion Lines with Amount:**    | Specifies how the documents will be grouped based on the amount of the document. Following options can be set: ''Closer To Average Value, Closer To Lower Value and Closer To Higher Value''. 
| **Auto Coding Suggestion Decision Based on the Amount:**           |Specifies how the suggestion line will be chosen based on the amount of the document. Following options can be set: ''Closer To Average Value, Closer To Lower Value and Closer To Higher Value''.
| **Suggest Auto Coding for Imported Document:**           | Specifies how the automatic coding suggestion will be used. Following options can be set: ''Never, Always and Selected Vendors''.
| **Calculate Auto Suggestions From Date:**                          | Specifies the starting date of the document to be used in the auto coding suggestions.
| **Suggest Auto Coding Amount from Coding Set ID:**       | Specifies if the amounts will be automatically suggested in the created lines from the Coding Set ID. Following options can be set: ''Never, Always and Selected Vendors''

<br/>


## Periodic Activities
Go to: **ExFlow Periodic Activities**

To apply the Auto Coding Suggestion, it is required to run the functions **ExFlow Coding Set IDs for Auto Coding Suggestions** and **ExFlow Creating Auto Coding Suggestions**. <br/>

![medium](@site/static/img/media/exflow-meny-auto-coding-001.png) 

First time use of Auto Coding suggestion will need both of these jobs (Report 12013594 and 12013593) to be run at least once. Following that, recurrence can be adjusted in the corresponding Job Queue Entries.

Report 12013594 will update the grouping of Coding Set ID on the ExFlow Auto Coding Suggestion Lines. Then Report 12013593 (ExFlow Coding Suggestion Setup - Update – Project) can be used to update ''ExFlow Auto Coding Suggestion Setup''. Recommended to use both reports once per day, after office time.




## Workflow


### Import Journal

#### Create Lines with Automatic Suggestion

Go to: **ExFlow Import Journals** 

Edit the journal list, and enable **Create Lines with Automatic Suggestion** to activate this function for a specific Import Journal to have a dedicated journal for Auto Coding Suggestions.

![ExFlow Import Journals](@site/static/img/media/import-journals-008.png)

<br/>

#### Suggest Auto Coding for Imported Document


#### Manually from Import Journal

##### Auto Coding Suggestion - Manual Choice
Go to: ***Import Journal --> Home --> Auto Coding Suggestion - Manual Choice***

Opens the Auto Coding Suggestion list related to the selected document.

Manual Choice give the option to navigate through different Coding Set ID and manually choose a coding
suggestion.

This page will show the best match for coding for the invoice that was selected before pressing the button to manually choose coding suggestion. In the right-hand corner it's possible to see the coding from the selected Coding Suggestion Lines for that specific Setup ID.

![ExFlow Coding Suggestion for Import Journal](@site/static/img/media/auto-coding-suggestion-001.png)

|Auto Coding Suggestion - Manual Choice     | |
|:-|:-|
|Apply Coding Set ID| This will apply the coding seen in the right-hand corner to the invoice.
|Show Document Lines| Will open up ExFlow Coding Suggestion Document page. 
|Show All|This will show all the Setup ID's for the possibility to manually choose a suggested coding for i.e. another vendor.
|Show Initial Suggestion| This will go back to the initial suggestion shown from when the page first opened.


###### ExFlow Coding Suggestion Document

On this page the coding is shown in more detail. It is also possible to compare the Suggested Lines to the Current lines on the invoice.

|Auto Coding Suggestion - Automatic    | |
|:-|:-|
|Apply Suggested Coding| This applies the suggested coding to the invoice.
|Suggest Latest Coding|This applies the coding from the last posted document from that vendor.
|Suggest Preselected Coding| This suggests the coding which originated as the selection on the previous window.
|Suggest Automatic Coding| This will suggest the automatic coding based on the Auto Suggestion Setup.

![ExFlow Coding Suggestion Document](@site/static/img/media/auto-coding-suggestion-002.png)

#### Auto Coding Suggestion - Automatic
Go to: ***Import Journal --> Home --> Auto Coding Suggestion - Automatic***

Applies the line coding chosen by the suggestion algorithm.

This will enter a coding based on the information on the invoice. It will choose the coding based on the
Auto Coding Setup.