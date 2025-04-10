---
title: OAuth 2.0 Applications and Storage Setup
sidebar_position: 5
hide_title: true
custom_edit_url: null
---
## OAuth 2.0 Applications and Storage Setup

For support regarding below, please contact your internal IT department or trusted Business Central partner. 

### Create Application or Service Principal in MS Entra (or Azure)

Set a Name of choice. Choose: ‘’Accounts in any organizational directory” and then click on ‘’Register’’.
 
![ExFlow SharePoint Setup](@site/static/img/media/sharepoint-setup-001.png)<br/>

After registration, take notes of the “Application (client) ID”.
 
![ExFlow SharePoint Setup](@site/static/img/media/sharepoint-setup-002.png)<br/>

Go under API permissions to add a permission.
 
![ExFlow SharePoint Setup](@site/static/img/media/sharepoint-setup-003.png)<br/>

Click on ‘’Microsoft Graph’’ and ‘’Application Permissions’’. <br/>
Search for ‘’site’’ and add permission: Sites.ReadWrite.All<br/>

 
![ExFlow SharePoint Setup](@site/static/img/media/sharepoint-setup-004.png)<br/>

Click on ‘’SharePoint’’ and ‘’Application Permissions’’ again.<br/>
Select and add both permissions: Sites.ReadWrite.All and Sites.Manage.All. <br/>

 ![ExFlow SharePoint Setup](@site/static/img/media/sharepoint-setup-005.png)<br/>

Grant admin consent for these permissions:

 
![ExFlow SharePoint Setup](@site/static/img/media/sharepoint-setup-006.png)<br/>


Permissions should look like this:
 
![ExFlow SharePoint Setup](@site/static/img/media/sharepoint-setup-007.png)<br/>

Go to ‘’Certificates & secrets’’.
 
![ExFlow SharePoint Setup](@site/static/img/media/sharepoint-setup-008.png)<br/>


Create a client secret:
 
![ExFlow SharePoint Setup](@site/static/img/media/sharepoint-setup-009.png)<br/>

Copy the secret and/or save it. The secret will not be visible anymore. If the secret gets forgotten or misplaced, create a new secret and reconfigure the OAuth2 Application.
 
![ExFlow SharePoint Setup](@site/static/img/media/sharepoint-setup-010.png)<br/>

Go back to the list of App registrations and click on Endpoints.
Copy both OAuth2.0 v2 Endpoints; Authorization and Token. Also copy Microsoft Graph API endpoint.
<br/>

![ExFlow SharePoint Setup](@site/static/img/media/sharepoint-setup-011.png)<br/>

Completed with Entra or Azure AD or AAD.<br/><br/>


### Configure an OAuth2 Application in ExFlow

Go to: **ExFlow Setup --> Actions --> Functions --> OAuth2 Applications**

Start the configuration by clicking on ''New'' to create a new OAuth 2.0 Application.
 

| OAuth 2.0 Applications|![ExFlow SharePoint Setup](@site/static/img/media/oauth-application-001.png)
|:-|:-|
|**Request Access Token**|Open the service authorization web page. Login credentials will be prompted. The authorization code must be copied into the Enter Authorization Code field. 
|**Refresh Access Token**|Refresh the access and refresh tokens.
<br/>

![ExFlow SharePoint Setup](@site/static/img/media/oauth-application-002.png)<br/>

|General||
|:-|:-|
|**Code**|Specifies the name of the Code
|**Description**|Specifies the Code description 
|**Application / Client ID**| Specifies the Application ID from the Enterprise Application Overview.
|**Client Secret**| Specifies the client secret
|**Grant Type**| Specifies the grant type to use. It is possible to use Authorization Code, Password Credentials or Client Credentials. Currently only ‘’Client Credentials’’ is supported. 
|**Redirect URL**| Specifies the redirect URL, not in use for now.
|**Scope**| Specifies the scope. Enter the Graph Endpoint and add ‘’.default.’’ Make sure the endpoint looks like the following at the end: ‘’…soft.com/.default’’
<br/>

|Endpoints||
|:-|:-|
|**Authorization URL**| Specifies the authorization URL
|**Access Token URL**| Specifies the access token URL
|**Auth. URL Parms**| Specifies the resource URL, not in use for now.

<br/>

Enter all needed setup information. Enter a code and code description. Paste the 
Application/ Client ID and the Client Secret from MS Entra Admin Center.

Set Grant Type to ''Client Credentials'' and the MS graph scope url (Microsoft Graph API). <br/>

![ExFlow SharePoint Setup](@site/static/img/media/oauth-application-003.png)<br/>

Under the Endpoint section, paste the previously copied URL's for both OAuth2.0 v2 Authorization Endpoint and Token Endpoint. <br/>

Test by pressing “Request Access Token”. Following message should be displayed if everything is correct:  “Access Token updated successfully.” <br/>

### SharePoint Setup
In Site Contents, create a new Document Library, this will contain the folder that ExFlow will store data in. Create a folder in the Document Library that was just created. This will be the location of the documents. Click on the newly created folder. Copy the complete URL from the address field in the browser, this will be needed in the configuration below. 

### Blob Storage Setup for SharePoint

Go to: **ExFlow Setup -- > Actions --> Functions --> Blob Storage Mgmt (ExFlow Storage Management Setup)** 

| Blob Storage Mgmt / ExFlow Storage Management Setup menu |![ExFlow SharePoint Setup](@site/static/img/media/storage-setup-002.png)
|:-|:-|
|**Storage Setup**|Configure one or more storage configurations
|**Enable/ Disable Blob Storage**|Activate or inactivate blob storage

<br/>

From the ExFlow Storage Management Setup page, click on **Storage Setup** and then on ‘’New’’ to start with the configuration. 

![ExFlow SharePoint Setup](@site/static/img/media/storage-setup-006.png)<br/>

Enter a Code and Description. For Blob Source, select SharePoint.<br/> 

Then click **Setup Storage** to continue the configuration. 

![ExFlow SharePoint Setup](@site/static/img/media/storage-setup-003.png)<br/>





Copy the URL from SharePoint and paste that into the field ''SharePoint URL''. Once exit the field, values will be extracted and populated into Host, Site, Document Library and Folder. If any of the fields are missing, most likely Folder, it’s possible to enter those manually. <br/>

![ExFlow SharePoint Setup](@site/static/img/media/storage-setup-004.png)<br/>

Select the previously created OAuth2 Application and verify by clicking on ‘’Connect’’. <br/>

If something is wrong like the folder name, message like “Not Found” will appear. <br/> 

Moreover, if permissions are missing, a message like “Unauthorized” will appear. <br/>

If all is OK, the SharePoint Connection Status will be set to ‘’Connected’’ and parameters will be populated in Site Id, Drive Id and List Id. <br/>

It is now OK to close this page since the Blob Storage Setup for SharePoint is completed. <br/>

Go back to **ExFlow Storage Setup** for this setup to click on ‘’Enabled’’. <br/>

![ExFlow SharePoint Setup](@site/static/img/media/storage-setup-007.png)<br/>

Close ExFlow Storage Setup and return to ExFlow Storage Management Setup / Blob Storage Mgmt.<br/>

Select the newly created SharePoint setup in “Incoming Doc. Storage Code”. <br/>

![ExFlow SharePoint Setup](@site/static/img/media/storage-setup-008.png)<br/>

Click on ‘’Active’’ or “Enable / Disable Blob Storage”. <br/>

![ExFlow SharePoint Setup](@site/static/img/media/storage-setup-010.png)<br/>

If any existing posted invoices approved using ExFlow, a dialog will ask to transfer those, then it’s possible to choose Yes. <br/>

It is now possible to check status for posted invoices in Blob Storage by selecting ‘’Actions --> Storage Details’’. <br/>

Click on ‘’Sync Storage’’ to force a transfer over to SharePoint. <br/>

![ExFlow SharePoint Setup](@site/static/img/media/storage-setup-009.png)<br/>

Refresh the SharePoint page with the folder previously created, it should now be possible to view the new folders there. <br/>


![ExFlow SharePoint Setup](@site/static/img/media/storage-setup-005.png)<br/>
 
