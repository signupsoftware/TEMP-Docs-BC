---
title: Technical Requirements for ExFlow Business Central Online
sidebar_position: 2
hide_title: true
custom_edit_url: null
---
## ExFlow Business Central Online

Following information describes the technical requirement for running ExFlow AP Business Central Online on Dynamics 
365 Business Central Online using ExFlow Data Capture as the OCR solution.

![Technical Requirements for ExFlow Business Central Online](@site/static/img/media/technical-requirements-for-exflow-001.png)

The ExFlow Business Central Online runs on the Dynamics 365 Business Central Online platform and follows 
Microsoft´s technical requirements for Dynamics 365 Business Central Online.

Read about the minimum requirements for using Business Central [***here***](https://docs.microsoft.com/en-us/dynamics365/business-central/product-requirements).<br/>

### Technical Specifications

*Integration ExFlow Data Capture (if applicable):* <br/>
* Web service to export vendor data<br/>
* Web service to import scanned invoice images and data.<br/>

*Integration ExFlow Cloud (Approval web):*<br/>
* ExFlow BC Online publishes a web service so that ExFlow Cloud can retrieve invoice and
vendor data etc.<br/>
* ExFlow BC Online has a web service to import all data that has been changed during web
approval process.<br/>

### Licensing
Note that Client is responsible for having the correct license and support agreements with Microsoft. 
If you are unsure, please contact your Dynamics 365 Business Central implementation partner.<br/>

### ExFlow Cloud
In ExFlow Cloud, end-users can approve invoices on any device, be it mobile, tablet or computer. 
ExFlow Cloud is a cloud service running on Microsoft Azure. 

ExFlow Cloud requires access to ExFlow Business Central Online web services in order to communicate. This 
communication must be encrypted. 

*The available communication option between ExFlow Cloud and ExFlow Business Central Online is:* HTTPS to a public end-point <br/><br/>


#### ExFlow Cloud Client Software
Clients can be Windows 7 or later, Apple Mac, iPad, iPhone with iOS, Android tablets & phones with 
the latest release of the operating systems.<br/>

*Supported web browsers (the latest versions)*:<br/>
* Google Chrome (recommended)<br/>
* Microsoft Edge<br/>
* Safari<br/><br/>


### File Size Limitations

* ExFlow Data Capture: [***Visit Tungstens website***](https://docs.readsoftonline.com/help/eng/partner/reference/c_system_limitations.html)<br/>
* ExFlow Business Central and ExFlow Web Communication: The current attachment size limit is set to 10 MB. 
