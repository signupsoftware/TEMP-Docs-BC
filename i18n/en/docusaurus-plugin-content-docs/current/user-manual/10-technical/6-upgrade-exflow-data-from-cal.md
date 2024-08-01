---
title: Upgrade and migrate ExFlow data
sidebar_position: 6
hide_title: true
---
## Upgrade and migrate ExFlow data

<br/> 

Feel free to download and read documents before start:<br/>  [***Download technical documents ***](https://docs.exflow.cloud/business-central/docs/user-manual/help-and-support/documents-for%20download#documents-for-download) <br/>

### Introduction
#### Background
This section describes how to upgrade/migrate BC C/AL ExFlow data to BC AL ExFlow data. <br/> 

![Upgrade and migrate ExFlow data](@site/static/img/media/migrate-upgrade-030.png)<br/>

#### Considerations
The ExFlow AL BC version is not a 1-1 conversion of earlier C/AL based version of ExFlow, i.e., there may be differences in both functionality and in how data is presented/migrated. Here follows some of the key differences between the versions:<br/> <br/> 
•	The Requisition functionality is not supported in ExFlow Business Central AL. Documents and settings related to the requisition functionality is therefore not migrated and the feature is not available in BC AL. <br/> 

•	There are major changes in how comments work/are presented, therefore some comments that are migrated will display as created/written by a “system user”. <br/>

#### Upgrading/moving database to Microsoft SaaS
Ensure that the upgraded BC database and the ExFlow addon has supported available cloud versions. Then follow Microsoft’s instructions on how to cloud migrate local databases to SaaS.<br/> 

#### Prerequisites
The ExFlow data model needs to be fully upgraded to ExFlow 5.41 version in BC 14. NAV/BC must be upgraded to a Microsoft supported version according and according to Microsoft’s instructions.

ExFlow steps to do:
1.	Upgrade ExFlow version to ExFlow 5.41 in BC14 see ‘’Upgrade ExFlow version to ExFlow 5.41 in BC14.’’
2.	Handle PDF/Image for export from C/AL to file storage see instruction ''Create PDF files to export from C/AL.''
3.	Create data to ExFlow upgrade tables and upgrade to BC AL see ‘’Start migrating BC14 ExFlow C/AL data to ExFlow AL data.’’<br/><br/>


### Step 1
### Check the current ExFlow version and NAV/BC version <br/>

Go to: **Departments--> ExFlow Setup--> About ExFlow** to find your ExFlow version:

![Upgrade and migrate ExFlow data](@site/static/img/media/migrate-upgrade-0022.png) 

Go under the pile in the ribbon and click on **''Help''** and **''About Microsoft Dynamics 365 Business Central''**.

![Upgrade and migrate ExFlow data](@site/static/img/media/migrate-upgrade-002.png)

If current ExFlow version is < ExFlow 5.22 then an upgrade of ExFlow to ExFlow 5.41 must be done with upgrade script.
 
Read more in section Upgrade ExFlow 3.50 to ExFlow 5.41 or Upgrade ExFlow 4.XX to ExFlow 5.41

If current ExFlow version is >ExFlow 5.22 then merge existed ExFlow code to ExFlow objects in BC14 with version ExFlow 5.41.
 
Upgrade scripts from earlier versions can be downloaded from the SignUp Software AB partner portal or requested from SignUp Software AB support.<br/>


### Check PDF document storage for ExFlow

To start, go to **‘’ExFlow Setup --> Folders--> File storage type’’** to check if the documents are stored in database or in a file share:

![Upgrade and migrate ExFlow data](@site/static/img/media/migrate-upgrade-003.png)<br/>

If document is stored in File share, then two options exist:<br/>
1.	Import document to database. Read more under section  Import PDF/Images to database before upgrade.<br/><br/>
2.	Export documents to file share from BC/NAV C/AL and import documents from Azure file storage into BC AL.<br/>
Read more under section ''Create documents files to export in C/AL and import documents in AL.''<br/>


### Import PDF/Images to database before the upgrade
Start BC RTC client in ExFlow version > 5.22. <br/>

Go to: **Departments --> ExFlow Setup --> Navigate --> Migrate ExFlow Files (Advanced)**

Click on **Migrate ExFlow Files (Advanced)** and edit the Migrate ExFlow files window with needed Import information.<br/>

![Upgrade and migrate ExFlow data](@site/static/img/media/migrate-upgrade-004.png)<br/>

If there are multiple companies that use ExFlow, verify the file paths are updated in the ExFlow Setup. <br/>

If there is only one company, depending on where the file share is located, it’s possible to either import the files from the paths in the setup, or to select it manually from **Invoice Path** and **Attachment Path**.<br/>

Make sure that **Migrate XML files** field is un ticked, and that **Replace/Ignore File Conflicts** field is ticked.<br/>

If there are a lot of documents, it is possible to limit the import by entering folder names in **Image Name From** and **Image Name to**.<br/>

Moreover, it’s also possible to select the company to import files from by selecting the company in **Only Migrate in Company**.<br/>

It’s possible to change paths in “Folders” tab in ExFlow Setup.<br/>
Click on ‘’Preview’’ to continue.<br/>

![Upgrade and migrate ExFlow data](@site/static/img/media/migrate-upgrade-005.png)<br/>


### Upgrade ExFlow version to ExFlow 5.41 in BC 14
#### Upgrade ExFlow 3.50 to ExFlow 5.41

Finish all document in import journal in ExFlow.<br/>

Import ExFlow_350_to_5XX_STEP1_(NAV2009R2).fob.<br/>

Run codeunit 12057134 EX Upgrade 350 to 5XX Step1.fob. <br/>

Delete store procedure in SQL manager. <br/>

![Upgrade and migrate ExFlow data](@site/static/img/media/migrate-upgrade-018.png)<br/>


Upgrade NAV2009R2 to (NAV2015 or later)<br/>

Merge ExFlow 5.XX into customers (NAV 2015 or later) object.<br/>


Import merged ExFlow 5.XX objects to upgraded (NAV2015 or later) <br/>

Choose: Sync. Schema Later<br/>

Import Upgrade tool ExFlow_350_to_5XX_STEP2_(NAV2015 or later).fob<br/>

Choose: Sync. Schema Later<br/>

Compile ExFlow objects now <br/>

Choose: Sync. With validation<br/>

Start Tool --> Data Upgrade in (NAV2015 or later)<br/>

![Upgrade and migrate ExFlow data](@site/static/img/media/migrate-upgrade-019.png)<br/>

ExFlow 5.XX data ready for ExFlow setup configuration and Web installation.<br/>

#### Upgrade ExFlow 4.XX to ExFlow 5.41
Merge ExFlow 5.41 to customers version of ExFlow to BC14 version and create a fob with ExFlow objects. <br/>

Start BC14 development environment. <br/>

Run Synchronize of tables. <br/>

Choose: ''Tools--> Sync. Schema For All Tables--> With Validation''. <br/>

![Upgrade and migrate ExFlow data](@site/static/img/media/migrate-upgrade-020.png)<br/>

Import merged customer ExFlow 5.41 objects that have been created.<br/>

Choose: ‘’Sync. Schema For All Tables--> Later’’.<br/>

Import Upgrade tool ExFlow_UpgradeTool_from500_to541 (BC).fob.<br/>

Choose: ‘’Sync. Schema Later’’<br/>

 Compile ExFlow object.<br/>

 Choose: Now – with validation<br/>

![Upgrade and migrate ExFlow data](@site/static/img/media/migrate-upgrade-021.png)<br/>

Choose Tools --> Data Upgrade --> Start <br/>

![Upgrade and migrate ExFlow data](@site/static/img/media/migrate-upgrade-019.png)<br/>

![Upgrade and migrate ExFlow data](@site/static/img/media/migrate-upgrade-022.png)<br/>

Data upgrade finished. <br/>

Validate ExFlow data.<br/><br/>

### Step 2

### Create documents files to export in C/AL and import documents in AL
This can be done before or after upgrade (if document images aren't upgraded) 

### Export images/PDF documents from BC C/AL

Get DocMigrate_New_BC14.fob and import it into C/AL development environment.<br/>

![Upgrade and migrate ExFlow data](@site/static/img/media/migrate-upgrade-006.png)<br/>

Run report 60012 Export Inv to XML.<br/>

Select a ‘’Path to export’’, it is the root path where images/pdf are stored, then click on OK.<br/>

![Upgrade and migrate ExFlow data](@site/static/img/media/migrate-upgrade-007.png)<br/>

![Upgrade and migrate ExFlow data](@site/static/img/media/migrate-upgrade-008.png)<br/>

Click on Yes to export all records in the database. a pop-up message with all summation of exported images will then be shown.

![Upgrade and migrate ExFlow data](@site/static/img/media/migrate-upgrade-0098.png)<br/>

Create folder and files:

![Upgrade and migrate ExFlow data](@site/static/img/media/migrate-upgrade-010.png)<br/>

### Create Azure File Storage
For support regarding below, please contact your internal IT department or trusted Business Central partner. <br/>

To be able to create a File Import Setup in ExFlow Business Central, an Azure File Storage must be created before. The Access key (among other things) is needed. <br/>


#### Create Azure Storage Account
Log in to [***Azure Portal***](https://portal.azure.com/) and click on ''Storage accounts'' to create a storage account. <br/>

![Upgrade and migrate ExFlow data](@site/static/img/media/azure-storage-001.png)<br/>

Click on ''Create storage account'', use default and fill in all required settings. <br/>

Make sure that public end point is selected on networking tab. <br/>

Choose Review and create the account.<br/>


#### Create an Azure File Share
In Azure Portal, continue to create an Azure file share. 

Select the storage account, and go to File shares under Data Storage. <br/>

Create a file share, then click on the newly created file share.<br/>

Create a directory (subfolder) in the file share called ExFlow or any other name by choice.<br/><br/>



### Step 3

#### Start migrating BC14 ExFlow C/AL data to ExFlow AL data with Cloud migration

#### Move ExFlow data to ExFlow upgrade tables 
After the upgrade to ExFlow 5.41, then start import. Run File -> Import choose file Upgrade_New_BC14_XX.fob.<br/>

![Upgrade and migrate ExFlow data](@site/static/img/media/migrate-upgrade-031.png)<br/>

Run codeunit 12026809 this copy all ExFlow company data to all ExFlow Upgrade tables.<br/>


#### Start Cloud migration <br/>

Setup Cloud migration in current Business Central version (follow Microsoft's instructions).<br/>

Start Cloud Migration Management choose Manage Custom Tables.<br/>

![Upgrade and migrate ExFlow data](@site/static/img/media/migrate-upgrade-032.png)<br/>

***Important!:***
Only choose all ExFlow tables with ''Upg'' or ''Up'' after name, see below picture of the ''Migration Table Mapping''.<br/>

Remove all others ExFlow table so no data from those tables are moved.<br/>

![Upgrade and migrate ExFlow data](@site/static/img/media/migrate-upgrade-033.png)<br/>

Run migration. <br/>

After the migration is done, search for **Ex Upgrade From CAL** in Business Central: <br/>


![Upgrade and migrate ExFlow data](@site/static/img/media/migrate-upgrade-028.png)<br/>

From the page ''Ex Upgrade From CAL'', go under ''Actions --> Run ExFlow Migration for Current Company''. <br/>

![Upgrade and migrate ExFlow data](@site/static/img/media/migrate-upgrade-029.png)<br/>

If there is more than one company, go under ''Actions --> Run ExFlow Migration for all companies''.

Go under * Related-- > ExFlow Migration Status info* to view the log of upgrade procedure per company. <br/>

![Upgrade and migrate ExFlow data](@site/static/img/media/migrate-upgrade-034.png)<br/>


After the upgrade, follow the instructions in below section ''Post upgrade activities''.<br/>

#### Post upgrade activities
These actions may require application knowledge of the ExFlow BC AL addon and which features were used/will be used in the upgraded ExFlow BC version.
Utilize the ExFlow wizard for every company that ExFlow should be setup in.  <br/>

* In the Default company:<br/>
1) (Re)-assign ExFlow default company.<br/>
2) Setup ExFlow E-mail notifications.<br/>

* In all (relevant) companies:<br/>
1) Activate the Company for ExFlow Web.<br/>
2) Setup EDC-integration settings.<br/>
3) Import required Data Exchange definition.<br/>

Also, request and activate an ExFlow Business Central License Key.<br/>


### Insert data to ExFlow from upgrade tables

#### ExFlow File Import Setups
Go to: **ExFlow File Import Setups** to import images/PDF documents to Business Central.

| File Import Setups      | ![ExFlow File Import Setups](@site/static/img/media/exflow-setup-file-import-setup-001.png)<br/>   |
|:-|:-|
|**New:**                               | Create a new File Import Setup
|**Manage:**                               | Edit, view or delete the setup
|**Run Import:**                               | Run the import process
|**Enable/Disable:**                               | Enable/disable the import source
|More options--> Actions--> **Show Ongoing Imports**   | Shows a list of pending import files
<br/>

#### Import images/PDF document to BC AL via ExFlow File Import Setups

Go to **ExFlow File Import Setups** and click on New to create a new File Import Setup.

Under the General -section, enter a Code, description and choose ''Import From: Azure File''. When ''Azure File'' gets selected, then both ''Image Folder'' and ''Image Folder'' will be set to ''exflow'' per default under the ''Data (XML)'' -section and ''Image (PDF)'' -section. 

Add ''Data Exchange Type'' under the ''Data (XML)''- section. Under the ''Azure File''- section, add information about the Account Name, Access Key, File Share and the base URL.

Enable the setup.

![ExFlow File Import Setups](@site/static/img/media/exflow-setup-file-import-setup-002.png)<br/>


Copy all files and folders to the created Azure file storage Image folder (in this example is folder name ExFlow)

![Upgrade and migrate ExFlow data](@site/static/img/media/migrate-upgrade-011.png)<br/>

![Upgrade and migrate ExFlow data](@site/static/img/media/migrate-upgrade-012.png)<br/>


### Migrate Documents via Document Migration Tool

Next step is to utilize the Migrate Document Tool. 

Go to: **ExFlow Setup page --> Action --> Functions --> Migrate Documents**

| Document Migration Tool     | ![Upgrade and migrate ExFlow data](@site/static/img/media/migrate-upgrade-013.png)<br/>  |
|:-|:-|
|**Load and Validate XML**                               | Create a new File Import Setup
|**Migrate Documents**                               | Read, import and migrate documents
|**Clean Incoming Documents:**                               | Clear all migrated documents if a new import is needed
<br/>

| General  |  |
|:-|:-|
|**File Import Setup Code:**                               | Enter the File Import Setup Code
|**Name Field Value**                               | Specify the name format to use. Following options are available:<br/> ![Upgrade and migrate ExFlow data](@site/static/img/media/migrate-upgrade-014.png)
<br/>

| Status  |  |
|:-|:-|
|**Migration Status:**                               | Status of migration
|**Document Count**                               | Number of documents to migrate into matching company name
|**Matched Count**                               | Number of documents matched in current company, click for list of documents that did not match
|**Migrated Documents**                               | Number of documents migrated into matching company name
|**Failed Documents**                               | Documents that failed to migrate, click for list and reason
|**Existing Documents**                               | Number of documents already migrated
<br/>

| Options  |  |
|:-|:-|
|**Batch Size:**                               | Set to a non-zero value to at-most import that many documents at one time
<br/>

| Fileformat  |  |
|:-|:-|
|**File format**                               | Shows the needed import XML adhered structure
<br/>

To continue with the migration example, click on **Load and Validate XML** to choose file.

![Upgrade and migrate ExFlow data](@site/static/img/media/migrate-upgrade-015.png)

Choose file ''Document Migration XML document*.xml'' in azurefileshare image folder ''exflow''. <br/>

![Upgrade and migrate ExFlow data](@site/static/img/media/migrate-upgrade-012.png)<br/>

Then migration status will be set to ''Validated''.<br/>

![Upgrade and migrate ExFlow data](@site/static/img/media/migrate-upgrade-016.png)<br/>

Choose tab ''Migrate Document'' and wait until Migrate Status will be set to: ''Migrated''.<br/>

![Upgrade and migrate ExFlow data](@site/static/img/media/migrate-upgrade-017.png)<br/>


Done with migration. <br/>

Validate that all PDF images are attached to the purchase documents.
