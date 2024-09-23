---
title: ExFlow Web 
sidebar_position: 2
hide_title: true
custom_edit_url: null
---

## ExFlow Web

<br/>
Interested to read and learn everything about ExFlow web? <br/> <br/>  

 [***All necessary information about ExFlow Web can be found here!***](https://docs.exflow.cloud/web) <br/><br/> 

### Edit Web Columns in Business Central
Use the function **Edit Web Columns** to manage ExFlow Web Columns. <br/>

Go to **ExFlow Setup --> Edit Web Columns** 

![ExFlow Setup](@site/static/img/media/exflow-setup-edit-web-columns.png) 

| Edit Web Columns      |   | 
|:-|:-|
|**Add Column**| Add a new column to ExFlow Web
|**Modify Column**| Update a current ExFlow Web column
|**ExFlow Columns**| Handle ExFlow Web column changes

![ExFlow Setup](@site/static/img/media/exflow-setup-edit-web-columns-001.png)


Web Columns that exist and are visible on ExFlow web, have both the ‘’Current Visibility’’ box and ‘’Exist’’- box ticked. 

If a column needs to be added for the web approvers, then simply stand on the selected web column code and then click on ''Add Column''.

It’s possible to hide an existing web column on ExFlow Web by choosing ‘’Hidden’’ and then click on ‘’Modify Column’’. In this example, the ‘’Current Visibility’’ -box for the ‘’Project Task’’- column will then be unticked.  

![ExFlow Setup](@site/static/img/media/exflow-setup-edit-web-columns-002.png)


### ExFlow Columns
 
Go to **ExFlow Setup --> Edit Web Columns --> ExFlow Columns** 

![ExFlow Setup](@site/static/img/media/exflow-setup-exflow-columns-001.png)

Open ExFlow Columns and edit the list to if any changes needs to be made on the columns.

![ExFlow Setup](@site/static/img/media/exflow-setup-exflow-columns-002.png)

|ExFlow Columns||
|:-|:-|
|**ID**|Specifies column ID.
|**Code**| Specifies the Code
|**Dimension**| A dimension from General Ledger Setup can be added as ExFlow web column.
|**Source**| Copy of Code value.
|**Format** |The format that the value and description is sent to ExFlow web.
|**Use Auto Completion**| Ticked box takes specified Data Type. Unticked box = free text like a description.
|**Sort Order**| Sort order on all web columns (except on LineTypes).
|**Document Display Expr**| Can determine if column should be usable for certain document types.
|**Line Display Expr**| Lets ExFlow web know it is a line type and which line type it is.
|**Data Type**| If it should be a date or decimal displayed in ExFlow web then this needs to have a value (Description has ‘’system.String’’).
|**Is Autofill Trigger**| Select if i.e., a selected account should send updates of dimension values from standard Business Central account settings (Default BC). It can also be set to ‘’Inactive’’ and ‘’Customized’’.
|**Copy value when splitting the line**| Specifies if values should be copied when splitting a line.
|**Update VAT Prod. Posting Group From No.**| Specifies if VAT Prod Posting Group should be taken from the No. card.
|**Update Gen. Prod. Posting Group From No.**| Specifies if Gen. Prod Posting Group should be taken from the No. card.
|**Lock Column**| Specifies if values should be locked and not editable.
|**Number of Values to Send**| Used to improve performance. If selected as 100 then ExFlow will only send the first 100 values according to current filter.
