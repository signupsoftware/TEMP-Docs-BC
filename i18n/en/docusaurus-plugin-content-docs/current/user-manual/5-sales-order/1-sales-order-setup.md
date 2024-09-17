---
title: Sales Order Setup
sidebar_position: 1
hide_title: true
---
## Configure Sales Order in ExFlow Data Capture Account

Go to: **ExFlow Data Capture Account**

Please note that *two separate logins* to ExFlow Data Capture (EDC) are required to work with both purchase documents and sales documents.<br/>

To be able to import sales orders to Business Central, a new ExFlow Data Capture sales account needs to be setup. 


![ExFlow Data Capture Account](@site/static/img/media/exflow-data-capture-account-card-sales-001.png) <br/>


**Configuration Steps:**
Navigate to ExFlow Data Capture Accounts to access the configuration.
Click on New to initiate a new connection.

Give the connection a proper Code and choose connection Type: *Sales*

**Connection Details:**
To complete the connection, ensure you have the following connection details to establish a connection to EDC. These are provided by Signup Software or your trusted Business Central Partner.

- *User Name*
- *Password*
- *Authorization Key*

**Default EDC Doc. Templates**
Choose the document template used for interpretation by EDC.

**Data Exchange Type**
Choose the “EDC2EXFSO” which is the default Exchange Type used for EDC sales order.
 
**Company Selection:**
The ExFlow Data Capture Accounts configuration allows the use of the same credentials across all companies within Business Central.
This is due to the user account having access to all companies in EDC.<br/>
*Important:* Select the correct Company as Buyer and Master Data-filter during configuration to ensure the connection is established with the intended company.

**Finalizing Configuration:**
Verify the entered details before finalizing the configuration process.
Activate Master Data Sync to enable upload of Customer master data.
Finally activate “enable” and accept any prompt messages.
Test the connection to ensure successful integration between Business Central and ExFlow Data Capture.


### Sales Order Import Setup
Go to: **ExFlow Sales Order Import Setup**

Next step is to specify the a couple of parameters in *ExFlow Sales Order Import Setup*.

![ExFlow Sales Order Import Setup](@site/static/img/media/sales-order-import-setup001.png) 

| General      |   | 
|:-|:-|
|**Dummy Item No. for Sales Order Import:**                        | Specifies the Dummy Item to be used in case there is no other match for imported sales order line.
**Automatically Update OCR Mapping When Dummy Item is Applied**     |Specifies if the OCR Mapping will be automatically updated if the user made selection, after dummy item was applied during import.
**Allow Posting on Dummy Item**                                     |Specifies if the posting is allowed on Dummy Item.
**Automatically Create Documents** | Decides if documents without errors will be automatically created as sales orders on import.
**Ship-To Address Code Mandatory**                                  |Specifies if the field Ship to Address Code is required, if enabled a code needs to be selected to create the Sales Order.
**Use Custom Address** | Use the custom address interpreted from the OCR Service or add it manually after the order has been created. If address fields are not populated from import, the order will be created with the customers default shipping address. If this setting is enabled, then ''Ship-To Address Code'' will be disabled. 
**Contact No. Mandatory**                                           |Specifies if the field Contact No. is required, if enabled a code needs to be selected to create the Sales Order.
**Set Order Date To**                                               |Specifies what the Order Date should be set to on the Sales Order.
**Automatically Explode BOM Items** | Specifies if imported BOM-Item lines will be exploded when sales order is created.
**Copy Dimension From** | Specifies from where exploded BOM-Items should copy dimensions from.
**Default No. Series** |Specifies the No. Series that is used when creating sales orders with ExFlow. If blank, No. Series from the Sales & Receivables Setup will be used. 


<br/>

Go to: **ExFlow Sales Order Import Setup --> Related --> ExFlow Sales Order Matching Priority**

Edit the list if a matching priority is to be followed, or excluded in the matching process.

![ExFlow Sales Order Matching Priority](@site/static/img/media/sales-order-matching-priority-001.png) 



Go to: **ExFlow Sales Order Import Setup --> Related --> Ship-To Address Matching Setup**

Edit the list to make changes regarding the mandatory fields of interpreted values, like Contact name or Delivery City. If the interpreted value mismatch customers Ship-To Address then the imported document will stay in the imported sales list with error and needs to be handled manually.

All mandatory -marked fields must be met to avoid error on the imported document, so it must for example have a Ship-to Address Filter ''City'', ''Email'' and ''Contact'' according to the example below. 


![Ship-To Address Matching Setup](@site/static/img/media/sales-order-ship-to-adress-matching-setup-001.png)  

Furthermore, it possible to add more than one value on the Ship-to Address Filter. For instance, in the OCR Field ''Contact Name'', add filter ''Name, Contact and Phone No.'' in the Ship-to Address Filter. So, when interpreting a Contact Name in EDC, it's possible to interpret for example a phone no instead of a Name. It's also possible to work with interpreting more than one specific Contact/Name. As long the information exist on the Customer in Business Central, then the sales document will be processed and created when imported.  

![Ship-To Address Matching Setup](@site/static/img/media/sales-order-ship-to-adress-matching-setup-002.png) 