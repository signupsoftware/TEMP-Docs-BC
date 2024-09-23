---
title: Export/Import Setups
sidebar_position: 32
hide_title: true
custom_edit_url: null
---
## Export/Import ExFlow data

Go to: **ExFlow Setup --> Actions --> Functions --> Export/Import Setups** 

![Export/Import Setup](@site/static/img/media/export-import-exflow-setup-001.png)

|Export/Import ExFlow Setup |    |
|:-|:-|
|**Export**| Export selected ExFlow Setup Table Data
|**Import**|  Import selected ExFlow Setup Table Data
|**Select All**|  Select all sections to be exported
|**Clear All**|  Unselect all sections
|**List Import Errors**|  View a list of errors from the latest import 
|**Delete Import Errors**|  Delete listed errors from latest import
<br/>

### Export data
It is possible to both import and export ExFlow data through this function. This can be convenient when, for instance, its is needed to export data like ExFlow Standard Purchase Codes or perhaps ExFlow Vendor Setup from one database to another. 

Simple enable those settings to be exported and then ExFlow will download a .json file to import in the other database.<br/> <br/>
![Export/Import Setup](@site/static/img/media/export-import-exflow-setup-002.png)

<br/>

### Import data
Import the data in the other environment by selecting the relevant tables and click on ''Import'' to upload the .json file.  <br/>

![Export/Import Setup](@site/static/img/media/export-import-exflow-setup-003.png)

If any errors occur during this process, all will be listed under ''List of Import Errors''. Handle the error and import the file again. Use ''Delete Import Errors'' the clear the list, if needed. 
