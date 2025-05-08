---
title: Mapeo de Campos
sidebar_position: 8
hide_title: true
custom_edit_url: null
---
## Mapeo de Campos
Hay ocasiones en las que es necesario interpretar campos adicionales en documentos y tener estos campos completados o simplemente mapear los campos importados a otros campos en el diario de importación.

Ejemplos de campos son ''Descripción de Registro'', ''Nº de Tarea de Proyecto'' o ''Descripción'', etc.

A continuación, presentamos una guía sencilla con un ejemplo de flujo de trabajo sobre cómo crear un campo personalizado en ExFlow Data Capture y cómo puede mapearse en ExFlow Business Central.

### Requisitos previos - ExFlow Data Capture

1.	Acceso de administrador a una cuenta de ExFlow Data Capture (EDC) relacionada con la empresa para la que desea modificar la plantilla.<br/> 
2.	Identificar qué archivo de Definición de Intercambio de Datos se está utilizando para la importación de documentos en la instalación de ExFlow.<br/> 
3.	Configurar plantillas EDC y añadir campos.<br/> 
4.	Configurar la Definición de Intercambio de Datos de ExFlow en Business Central.<br/> 

### Crear un campo personalizado en EDC
[Inicie sesión en EDC](https://signup.readsoftonline.com) con la cuenta de administrador EDC proporcionada y navegue hasta la empresa compradora. Una vez identificada, haga clic en *Extracción* y luego en *Editar* y haga clic en la plantilla que desea personalizar.
 
Desplácese hacia abajo en la lista de plantillas hasta encontrar la plantilla de Tipo de Documento a la que desea añadir campos y selecciónela.

Seleccione la pestaña *Campos de Encabezado* o *Campos de Línea de Artículo* y haga clic en *Añadir Campo de Encabezado/Línea* dependiendo del tipo de campo que desee añadir.
 
![edc](@site/static/img/media/edc-field-mapping-001.png)
 
Añada Nombre de campo, Nombre de tipo, Nombre de visualización y Nombre de tipo.

Los Nombres de Tipo disponibles para añadir nuevos campos de Encabezado son: ''MiscHead 5-10'' y los Nombres de Tipo disponibles para añadir nuevos campos de Línea son: ''LIT_MiscLine 5-10''

Hay configuraciones adicionales de campo que se pueden configurar como Aceptar valor vacío, Omitir validación, Omitir extracción, Aplicar validación, etc., así como predefinir qué tipo de campo debe ser (Cantidad, Fecha o Texto).

En este ejemplo, se añade ''MiscHead9'' como un nuevo campo de Encabezado, llamado "Descripción de Registro" y este campo se mapeará hacia *MiscHead9* en Business Central.

Haga clic en OK, cierre la página y luego haga clic en “GUARDAR” en la página de extracción para guardar los cambios.

![edc](@site/static/img/media/edc-field-mapping-002.png)

Para campos como la función de validación de Pago, por ejemplo, sería suficiente con crear el campo de encabezado personalizado en EDC, ya que el campo ''PayToAccount'' ya está mapeado por defecto en la Definición de Intercambio de Datos (en la Columna No 118 --> ID de Campo de Destino 12068798).

### Mapeo del campo personalizado en Business Central
Vaya a: **Definiciones de Intercambio de Datos**

En Business Central, navegue a *Definiciones de Intercambio de Datos* y seleccione la definición que utilizó para importar documentos y selecciónela.

Dado que este es un mapeo a nivel de encabezado, se seleccionará 'ExFlow OCR – Encabezado de Factura'.

![edc](@site/static/img/media/edc-field-mapping-003.png)

Haga clic en 'Mapeo de Campos' para configurar los mapeos de campos.
 
![edc](@site/static/img/media/edc-field-mapping-004.png)

Cree una nueva línea y añada el Tipo de Datos “MiscHead9” que configuramos en EDC y establezca la tabla de destino en '12013648' y el campo de destino 'Descripción de Registro: 12068793'.

### Importación de Documentos
El campo de Encabezado añadido para 'Descripción de Registro' ahora es visible y está disponible para interpretación en EDC.

Cuando se complete la interpretación y el documento se importe a Business Central, ExFlow luego completará el Campo de Destino relacionado en el Diario de Importación de ExFlow: 'Descripción de Registro: 12068793'.

El valor del Encabezado para la Descripción de Registro se importará exitosamente al Encabezado del Diario de Importación de ExFlow.

![edc](@site/static/img/media/edc-field-mapping-005.png)

## Mapeo adicional de Códigos Misceláneos de Compra

### Crear campo en EDC
Esta configuración se realiza de la misma manera que en el [ejemplo](https://docs.signupsoftware.com/business-central/docs/user-manual/technical/field-mapping#mapping-the-custom-field-in-business-central) anterior.

Inicie sesión en: [ExFlow Data Capture](https://signup.readsoftonline.com) como administrador de EDC.

Añada Códigos Misceláneos de Compra adicionales a EDC para interpretación y haga que se mapeen para ser completados en el Diario de Importación de ExFlow. Podría ser Flete, Cargo por Paleta, Recargo por Combustible u otras tarifas.

ExFlow admite el mapeo de ocho Códigos Misceláneos de Compra. Específicamente para añadir Códigos de Compra adicionales de ExFlow, el "ID de Campo de Destino" debe ser "Monto Misceláneo XX (Texto)".

### Configuración de ExFlow
Vaya a: **Configuración de ExFlow --> Importación OCR --> Códigos Misceláneos de Compra**

Cuando se complete el mapeo, navegue de regreso a Configuración de ExFlow y establezca un código de compra relacionado con el campo "Monto Misceláneo 7 (Texto)" que utilizamos para el mapeo.

Haga clic en los tres puntos ('...') y añada el Código de Compra de ExFlow y el Número relacionado (7) en el campo "Nº de Monto Misceláneo".

![edc](@site/static/img/media/edc-field-mapping-007.png)
