---
title: Mapeo de Campos
sidebar_position: 8
hide_title: true
custom_edit_url: null
---
## Mapeo de Campos
Hay ocasiones en las que es necesario interpretar campos adicionales en documentos y tener estos campos completados o simplemente mapear los campos importados a otros campos en el diario de importación.

Ejemplos de campos son ''Descripción de Registro'', ''Nº de Tarea de Proyecto'' o ''Descripción'', etc.

A continuación se presenta una guía sencilla con un ejemplo de flujo de trabajo sobre cómo crear un campo personalizado en ExFlow Data Capture y cómo puede mapearse en ExFlow Business Central.

### Requisitos previos - ExFlow Data Capture

1.	Acceso de administrador a una cuenta de ExFlow Data Capture (EDC) relacionada con la empresa para la que desea modificar la plantilla.<br/> 
2.	Identificar qué archivo de Definición de Intercambio de Datos se está utilizando para la importación de documentos en la instalación de ExFlow.<br/> 
3.	Configurar plantillas EDC y añadir campos.<br/> 
4.	Configurar la Definición de Intercambio de Datos de ExFlow en Business Central.<br/> 

### Crear un campo personalizado en EDC
Se recomienda leer la [documentación de Tungsten](https://docs.readsoftonline.com/help/eng/partner/overview/c_welcome.html) y sobre la [Edición de configuraciones de extracción](https://docs.readsoftonline.com/help/eng/partner/services/t_adding_custom_fields_to_a_document_type.html) y [Añadir campos personalizados a un tipo de documento](https://docs.readsoftonline.com/help/eng/partner/admin-center/t_editing_extraction_settings.html) antes de comenzar.

[Inicie sesión en EDC](https://signup.readsoftonline.com) con la cuenta de administrador EDC proporcionada y navegue hasta la empresa compradora. Una vez identificada, haga clic en [*Extracción*](https://docs.readsoftonline.com/help/eng/partner/admin-center/c_the_extraction_view.html?h=extraction) y luego en *Editar* y haga clic en la plantilla que desea personalizar.
 
Desplácese hacia abajo en la lista de plantillas hasta encontrar la plantilla de Tipo de Documento a la que desea añadir campos y selecciónela.

Seleccione la pestaña *Campos de Encabezado* o *Campos de Línea de Artículo* y haga clic en *Añadir Campo de Encabezado/Línea* dependiendo del tipo de campo que desee añadir.
 
![edc](@site/static/img/media/edc-field-mapping-001.png)
 
Añada Nombre de campo, Nombre de tipo, Nombre de visualización y Nombre de tipo.

Los Nombres de Tipo disponibles para añadir nuevos campos de Encabezado son: ''MiscHead 5-10'' y los Nombres de Tipo disponibles para añadir nuevos campos de Línea son: ''LIT_MiscLine 5-10''

Existen configuraciones adicionales de campo que pueden configurarse como Aceptar valor vacío, Omitir validación, Omitir extracción, Forzar validación, etc., así como predefinir qué tipo de campo debe ser (Importe, Fecha o Texto). Lea más sobre esto aquí: [La vista de Campo](https://docs.readsoftonline.com/help/eng/partner/admin-center/c_the_field_view.html)

En este ejemplo, se añade ''MiscHead9'' como un nuevo campo de Encabezado, denominado "Descripción de Registro" y este campo se mapeará hacia *MiscHead9* en Business Central.

Haga clic en Aceptar, cierre la página y luego haga clic en "GUARDAR" en la página de extracción para guardar los cambios.

![edc](@site/static/img/media/edc-field-mapping-002.png)

Para algunos campos, como ''PayToAccount'' usado para la [Validación de Pagos](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/payment-validation-and-payment-suggestion#payment-validation-and-payment-suggestion), sería suficiente con crear el campo de encabezado personalizado en EDC, ya que el campo ''PayToAccount'' ya tiene un mapeo predeterminado establecido en la Definición de Intercambio de Datos (en Columna No 118 --> ID de Campo Destino 12068798).

### Mapeo del campo personalizado en Business Central 
Vaya a: **Definiciones de Intercambio de Datos**

En Business Central, navegue a *Definiciones de Intercambio de Datos* y seleccione la definición que utilizó para importar documentos. 

Como este es un mapeo a nivel de encabezado, se seleccionará 'ExFlow OCR – Encabezado de Factura'.

![edc](@site/static/img/media/edc-field-mapping-003.png)

Haga clic en 'Mapeo de Campos' para configurar los mapeos de campos.
 
![edc](@site/static/img/media/edc-field-mapping-004.png)

Cree una nueva línea y agregue el Tipo de Datos "MiscHead9" que configuramos en EDC y establezca la tabla destino a '12013648' y el campo destino 'Descripción de Registro: 12068793'

### Importación de Documentos
El campo de Encabezado añadido para 'Descripción de Registro' ahora es visible y está disponible para interpretación en EDC. 

Cuando se complete la interpretación y el documento se importe a Business Central, ExFlow poblará el Campo Destino relacionado en el Diario de Importación de ExFlow: 'Descripción de Registro: 12068793'.
 
El valor del encabezado para la Descripción de Registro se importará con éxito al Encabezado del Diario de Importación de ExFlow.

![edc](@site/static/img/media/edc-field-mapping-005.png)

## Mapeo adicional de Códigos de Compra Misceláneos

### Crear campo en EDC
Esta configuración se realiza de la misma manera que en el [ejemplo](https://docs.signupsoftware.com/business-central/docs/user-manual/technical/field-mapping#mapping-the-custom-field-in-business-central) anterior. 

Agregue códigos de compra misceláneos adicionales a EDC para interpretación y haga que se mapeen para ser poblados en el Diario de Importación de ExFlow. Podría ser Flete, Cargo por Paleta, Recargo por Combustible u otras tarifas. ExFlow admite el mapeo de ocho códigos de compra misceláneos. 

Específicamente para agregar códigos de compra de ExFlow adicionales, el "ID de Campo Destino" debe ser "Monto Misceláneo XX (Texto)". 

Inicie sesión en: [ExFlow Data Capture](https://signup.readsoftonline.com) como administrador de EDC para crear el nuevo campo de encabezado personalizado.

Para este ejemplo, el nuevo campo de encabezado personalizado de EDC se llamará ''Flete'' y ''Monto Misceláneo 7 (Texto) se utilizará para el mapeo en la Definición de Intercambio de Datos de Business Central para obtener el código de compra de flete predefinido, poblado en el documento en el Diario de Importación después de la interpretación.

### Configuración de ExFlow 
Vaya a: **Configuración de ExFlow --> Importación OCR --> Códigos de Compra Misceláneos**

Cuando se complete el mapeo, navegue de regreso a la Configuración de ExFlow y establezca un código de compra relacionado con el campo "Monto Misceláneo 7 (Texto) que utilizamos para el mapeo.

Haga clic en los tres puntos ('’…’’) y agregue el Código de Compra de ExFlow y el Número relacionado (7) en el campo "Monto Misceláneo No.".
 
![edc](@site/static/img/media/edc-field-mapping-007.png)

