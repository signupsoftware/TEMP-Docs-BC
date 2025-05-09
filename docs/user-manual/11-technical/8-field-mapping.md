---
title: Field Mapping 
sidebar_position: 8
hide_title: true
custom_edit_url: null
---
## Field Mapping 
There are times when the need to interpret additional fields on documents and have the fields populated or just get the import fields mapped to other fields in import journal. 

Examples of fields are ‘’Posting Description’’, ‘’Project Task No.’’ or ‘‘Description’’ etc.

Here comes an easy guide of a workflow example of how create a custom field in ExFlow Data Capture and how it can be mapped in ExFlow Business Central. 

### Prerequisites - ExFlow Data Capture

1.	Admin access to an ExFlow Data Capture (EDC) account related to the company you want to modify the template for.<br/> 
2.	Identify which Data Exchange Definition file being used for document import in the ExFlow installation.<br/> 
3.	Configure EDC-templates and add fields.<br/> 
4.	Configure the ExFlow Data Exchange Definition in Business Central.<br/> 

### Create a custom field in EDC
It is recommended to read [Tungsten's documentation](https://docs.readsoftonline.com/help/eng/partner/overview/c_welcome.html) about [Editing extraction settings](https://docs.readsoftonline.com/help/eng/partner/services/t_adding_custom_fields_to_a_document_type.html) and [Add custom fields to a document type](https://docs.readsoftonline.com/help/eng/partner/admin-center/t_editing_extraction_settings.html) before start.

[Login to EDC](https://signup.readsoftonline.com) with provided EDC-admin account and navigate to the buying company. When identified, click on [*Extraction*](https://docs.readsoftonline.com/help/eng/partner/admin-center/c_the_extraction_view.html?h=extraction) and then *Edit* and click on the template to be customized.
 
Scroll down in the template list until you find the Document Type template you want to add fields to and select it.

Select the *Header* or *Line-Item Fields tab* and click *Add Header/Line Field* depending on what type of field you want to add. 
 
![edc](@site/static/img/media/edc-field-mapping-001.png)
 
Add field Name, Type Name, Display Name and Type name.

Available Type Names for adding new Header fields are: ‘’MiscHead 5-10’’ and available Type Names for adding new Line fields are: ‘’LIT_MiscLine 5-10’’

There are additional field settings that can be configured like Accept empty value, Skip validation, Skip extraction, Enforce validation etc, as well as pre-defining what type of field it should be (Amount, Date or Text). Read more about this here: [The Field view](https://docs.readsoftonline.com/help/eng/partner/admin-center/c_the_field_view.html)

In this example ‘’MiscHead9’’ is added as a new Header field, named “Posting Description” and this field will be mapped towards *MiscHead9* in Business Central.

Click OK, close the page and then click “SAVE” in the extraction page so save the changes.

![edc](@site/static/img/media/edc-field-mapping-002.png)

For some fields, like ''PayToAccount'' used for [Payment Validation](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/payment-validation-and-payment-suggestion#payment-validation-and-payment-suggestion), it would be enough to just create the custom header field in EDC, since the ''PayToAccount'' field already has a default mapping set in the Data Exchange Definition (in Column No 118 --> Target Field ID 12068798).

### Mapping the custom field in Business Central 
Go to: **Data Exchange Definitions**

In Business Central, navigate to *Data Exchange Definitions* and select the definition you used for importing documents and select it. 

Since this is a mapping on a header level, the ‘ExFlow OCR – Invoice Header” will be selected.

![edc](@site/static/img/media/edc-field-mapping-003.png)

Click ‘Field Mapping’ to configure field mappings.
 
![edc](@site/static/img/media/edc-field-mapping-004.png)

Create a new line and add DataType “MiscHead9” that we configured in EDC and set target table to ‘12013648’and target field ‘Posting Description: 12068793’


### Document Import
The added Header field for ‘Posting Description’ is now visible and available for interpretation in EDC. 

When the interpretation is done, and the document is imported to Business Central, ExFlow will then populate the related Target Field in ExFlow Import Journal: ‘Posting Description: 12068793’.
 
Header value for Posting Description will then been successfully imported to ExFlow Import Journal Header.

![edc](@site/static/img/media/edc-field-mapping-005.png)

## Additional Misc. Purchase Codes mapping

### Create field in EDC
This configuration is done in the same manner as in the above [example](https://docs.signupsoftware.com/business-central/docs/user-manual/technical/field-mapping#mapping-the-custom-field-in-business-central). 

Add additional Misc. Purchase Codes to EDC for interpretation and have them mapped to be populated in ExFlow Import Journal. It could be Freight, Pallet Charge, Fuel Surcharge or other fees. ExFlow supports mapping for eight Misc. Purchase Codes. 

Specific for adding additional ExFlow Purchase Codes is that the “Target Field ID” should be “Misc. Amount XX (Text). 

Log in to: [ExFlow Data Capture](https://signup.readsoftonline.com) as an EDC admin to create the new custom header field.

For this example, the new custom EDC header field will be named ''Freight'' and ''Misc. Amount 7 (Text) will be used for mapping in Data Exchange Definition Business Central to get the pre coded Freight Purchase Code, populated to the document in Import Journal after interpretation.

### ExFlow Setup 
Go to: **ExFlow Setup --> OCR Import --> Misc Purchase Codes**

When the mapping is done, navigate back to ExFlow Setup and set a related purchase code to the field “Misc Amount 7 (Text) that we used for the mapping.

Click on the three dots (‘’…’’) and add the ExFlow Purchase Code and the related Number (7) in the “Misc. Amount No.” field.
 
![edc](@site/static/img/media/edc-field-mapping-007.png)

