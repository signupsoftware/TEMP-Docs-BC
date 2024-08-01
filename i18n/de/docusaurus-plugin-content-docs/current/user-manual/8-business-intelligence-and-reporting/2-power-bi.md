---
title: Power BI
sidebar_position: 2
hide_title: true
---
## Power BI

There are prepared settings and templates to analyze ExFlow data with
Power BI. Since the topic is extensive SignUp has also published a
specific [***Knowledge Base Article***](https://support.signupsoftware.com/knowledgebase/article/KA-01291) that covers the integration. The Knowledge Base Article can be found at the Support Portal by Support Portal Users. Power BI Templates (BCO/BC Onprem) can also be found by Partners on the [***Partner Portal.***](https://azuresignup.sharepoint.com/sites/Signupsoftware/SitePages/BC-POWER-BI.aspx?xsdata=MDV8MDJ8fDU2YzBmOTZlYjUxZjRmMjg0MzNmMDhkYzg0NmE3MmIwfDg3NzkxMTdkNzcyZTRlYTU5NGVjNDRhMWExZDA0MjdifDB8MHw2Mzg1MzA4Mzk5MDUzMjE3OTF8VW5rbm93bnxWR1ZoYlhOVFpXTjFjbWwwZVZObGNuWnBZMlY4ZXlKV0lqb2lNQzR3TGpBd01EQWlMQ0pRSWpvaVYybHVNeklpTENKQlRpSTZJazkwYUdWeUlpd2lWMVFpT2pFeGZRPT18MXxMMk5vWVhSekx6RTVPbUZpTVRJNU1EWXlNVEExWlRSaFkyTTVaR05pWVRBNE1EUTFNR1JpTkRSbVFIUm9jbVZoWkM1Mk1pOXRaWE56WVdkbGN5OHhOekUzTkRnM01UZzVPRFExfDY3MTk3NmJkNzFmZTQ4YmQ0MzNmMDhkYzg0NmE3MmIwfDIyZmJkZjM2ZjZhNTRjNjE5MzIxYWNkOTY5YTFmYThl&sdata=UkdFQTF4T2Vra3R2Vk5sMUYxTXpWbkdZcXE4OEUxZ3h1WEZhcUhlN0NpMD0%3D&ovuser=8779117d-772e-4ea5-94ec-44a1a1d0427b%2Csofia.nikolic%40signupsoftware.com&OR=Teams-HL&CT=1717489911732&clickparams=eyJBcHBOYW1lIjoiVGVhbXMtRGVza3RvcCIsIkFwcFZlcnNpb24iOiI0OS8yNDA1MDMwNzYxNCIsIkhhc0ZlZGVyYXRlZFVzZXIiOmZhbHNlfQ%3D%3D)

From a setup perspective one can publish all needed Web Services in a company by choosing "Create Power BI Web Services".

***Setup \--\> ExFlow Setup \--\> Actions \--\> Functions \--\> Power BI
\--\> Create Power BI Web Services***

To delete existing Power BI Web Services, select "Delete Power BI Web Services".

***Setup \--\> ExFlow Setup \--\> Actions \--\> Functions \--\> Power BI
\--\> Delete Power BI Web Services***

Under Power BI Setups it is also possible to download the Power BI
template file and during that setup there is now an easier way to
retrieve the URL string (BC Datasource) that will be used during the
Power BI setup in Power BI desktop. These setups are covered in the
Knowledge Base Article.

![ExFlow Setup -- Power BI](@site/static/img/media/exflow-setup-general-006-power-bi.png)



### Access Posted Documents in Business Central from Power BI Desktop

From ExFlow version 21.1 it is possible to create links in Power BI to
posted purchase documents. It is needed to have access to the specific
page in Business Central to be able to see the document. To use this
functionality, make sure that the latest ExFlow Power BI web services
are used by deleting them and creating them again. In the latest ExFlow
Power BI template file, there is a prepared report called Posted
Documents.

![Power BI Desktop](@site/static/img/media/image375.png)

Click on the Document Link to get to the posted document card in ExFlow
Approval Status History.

![Posted Invoice card](@site/static/img/media/image376.png)



