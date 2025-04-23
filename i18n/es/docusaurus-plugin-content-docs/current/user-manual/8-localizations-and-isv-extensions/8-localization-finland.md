---
title: Localización Finlandia
sidebar_position: 8
hide_title: true
custom_edit_url: null
---
## Localización Finlandia

### Idioma

ExFlow soporta el idioma finlandés en Business Central.

### Referencia de Pago

#### Antecedentes

Finlandia tiene un requisito de referencia de pago en sus facturas de compra.

Esta referencia de pago en realidad son dos campos diferentes: Tipo de Mensaje y Mensaje de Factura.

La funcionalidad local estándar finlandesa de Microsoft contiene 3 campos en el Encabezado de la Compra.

- Tipo de Mensaje *(Obligatorio)*

- Mensaje de Factura *(Obligatorio)*

- Mensaje de Factura 2

El Tipo de Mensaje especifica qué tipo de Mensaje de Factura se espera.

El Tipo de Mensaje puede ser uno de los siguientes:

- No. de Referencia

- Información de Factura

- Mensaje

- Mensaje Largo

- Mensaje de Impuestos

El Tipo de Mensaje y el Mensaje de Factura son campos obligatorios y deben existir en la factura importada en el Diario de Importación de ExFlow.

##### Solución

Cuando la Factura de Compra se crea desde el Diario de Importación de ExFlow, el Tipo de Mensaje y el Mensaje de Factura se transfieren a los campos correctos en el encabezado de la Factura de Compra.

Esta funcionalidad se configura y activa en la Configuración de ExFlow con dos configuraciones llamadas "Verificar Referencia FI" y "Tipo de Mensaje". Las configuraciones se encuentran en la sección "Verificaciones de Creación de Documentos".

**Verificar Referencia**

**Sin verificación:** La verificación está desactivada.

**No vacío:** El Mensaje de Factura no puede estar vacío.

**No vacío + Formato de No. de Referencia:** El Mensaje de Factura no puede estar vacío, y se verificará el formato del mensaje. *(Requiere que "Tipo de Mensaje" = No. de Referencia)*

![Configuración de ExFlow - Verificaciones de Creación de Documentos - Localización Finlandesa](@site/static/img/media/exflow-setup-doc-creation-checks-002-fi.png)

### Grupo de Contabilidad Automática

ExFlow soporta el Grupo de Contabilidad Automática en el Diario de Importación y se puede agregar desde la Cuenta G/L, el Código de Compra de ExFlow o agregarse manualmente en la Línea del Diario de Importación.

### Usar No. de Documento del Proveedor si el Mensaje de Factura está vacío

Ir a: **Configuración de ExFlow --> Importación OCR** y habilitar la configuración ***Usar No. de Documento del Proveedor si el Mensaje de Factura está vacío.***

![Configuración de ExFlow - Importación OCR - Localización Finlandesa](@site/static/img/media/FI-exflow-setup-ocr-import-vendor-id-001.png)

Esta configuración especifica si el No. de Documento del Proveedor interpretado debe usarse también en el Mensaje de Factura, si el Mensaje de Factura está vacío. El Tipo de Mensaje se establecerá entonces como ''Mensaje''. Esto facilitará el proceso si se trabaja con documentos no nacionales sin No. de Referencia.

![Configuración de ExFlow - Diario de Importación - Localización Finlandesa](@site/static/img/media/FI-import-journal-invoice-message-001.png)

### Elegir otro Tipo de Mensaje en la Configuración del Proveedor
El ''Tipo de Mensaje'' estándar en el Diario de Importación se establece en "No. de Referencia" por defecto. 
Sin embargo, es posible ir a la Tarjeta de Configuración del Proveedor y establecer otro Tipo de Mensaje para un proveedor específico, si es necesario. 

![Configuración de ExFlow - Diario de Importación - Localización Finlandesa](@site/static/img/media/FI-message-type-001.png)



### Nº de referencia a las facturas de autofacturación del contrato de ExFlow

Al crear autofacturas, el tipo de mensaje de autofacturación (para el número de referencia) y el mensaje de factura de autofacturación se copiarán en el encabezado del diario de importación.

En los Períodos de Factura de Contratos, también se introducen los campos: ''Tipo de Mensaje de Autofacturación'' y ''Mensaje de Factura de Autofactura'', para que los usuarios realicen ajustes manuales por línea. Esto también seguirá a Importar diario.