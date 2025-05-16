---
title: Localización Canadá
sidebar_position: 6
hide_title: true
custom_edit_url: null
---
## Localización Canadá

### Idioma

ExFlow soporta el idioma francés (Canadá) en Business Central.

### Impuesto sobre las Ventas en Canadá

Ir a: ***Configuración de ExFlow \--\> Pestaña de Verificaciones de Creación de Documentos***

Habilitar "Permitir Impuesto sobre las Ventas" en las Configuraciones de ExFlow.

![Configuración de ExFlow - Verificaciones de Creación de Documentos - Localización Canadiense](@site/static/img/media/exflow-setup-doc-posting-checks-002-ca-us.png)

Con esta configuración, el Grupo de Publicación de Productos de IVA no será obligatorio en ExFlow y permitirá el procesamiento del Impuesto sobre las Ventas en América del Norte.

![Configuración de Publicación de Impuestos - Localización Canadiense](@site/static/img/media/image357.png)

Para soportar el Impuesto sobre las Ventas en América del Norte, los campos específicos de impuestos del Encabezado del Documento de Compra y las Líneas del Documento de Compra también se implementan en el Diario de Importación de ExFlow. Las funcionalidades de estos campos son similares a cómo funcionan en los Documentos de Compra en Business Central.

**Los campos adicionales en el encabezado del documento**

- Sujeto a Impuestos

- Código de Área de Impuestos

- Código de Área de Impuestos Provincial

- No. de Exención de Impuestos

**Y en las líneas del documento**

- Sujeto a Impuestos

- Código de Área de Impuestos

- Código de Área de Impuestos Provincial

- GST/HST

- Código de Grupo de Impuestos

- Impuesto sobre el Uso

Con el uso de la Configuración de Impuestos Canadienses, el Diario de Importación de ExFlow también soporta Cálculos de Impuestos basados en el Impuesto Canadiense. La funcionalidad para recuperar el Código de Área de Impuestos, etc., de la Información de la Empresa y la ubicación en lugar de la Tarjeta del Proveedor también se refleja en el Diario de Importación de ExFlow.

![Diario de Importación de ExFlow - Localización Canadiense](@site/static/img/media/image358.png)

La página de Estadísticas ahora está disponible en el Diario de Importación de ExFlow.

![Diario de Importación de ExFlow -- Estadísticas](@site/static/img/media/image359.png)

Permite ajustar manualmente el Monto del Impuesto cuando hay una discrepancia entre el Monto del Impuesto calculado en las Líneas de la Factura y el Monto del Impuesto en la factura recibida del proveedor (interpretado por el Servicio OCR en este caso).

![Estadísticas de la Factura de Compra -- Importación OCR](@site/static/img/media/image360.png)


### Manejar el Código de Grupo de Impuestos en el Código de Compra de ExFlow

Cuando el Código de Grupo de Impuestos en una línea de factura necesita ser diferente al predeterminado en el registro maestro seleccionado en esa línea de factura, esto se puede manejar desde un Código de Compra de ExFlow.

Por ejemplo, si el Código de Grupo de Impuestos en una tarjeta de cuenta G/L para Suministros de Oficina está predeterminado como NO SUJETO A IMPUESTOS, mientras que una línea en una Factura de Compra con esa Cuenta G/L necesita ser marcada como SUJETO A IMPUESTOS, los usuarios simplemente podrían agregar esto en las líneas del código de compra de ExFlow según la imagen a continuación.

Esto permitiría a los usuarios automatizar la creación de facturas en esos escenarios específicos.

![Código de Compra de ExFlow](@site/static/img/media/NA-exflow-purchase-code-card-tax-group-001.png)


### Columnas de Impuestos en la Web

Es posible hacer visibles los campos relacionados con impuestos en ExFlow Web agregando las columnas en la Configuración de ExFlow.

![Columnas de ExFlow Web](@site/static/img/media/tax-web-columns-001.png)

Lea más sobre cómo editar columnas web en la sección [***ExFlow Web.***](https://docs.signupsoftware.com/business-central/docs/user-manual/technical/exflow-web#exflow-web)