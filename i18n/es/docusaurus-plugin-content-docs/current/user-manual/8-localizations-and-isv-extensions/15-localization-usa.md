---
title: Localización EE.UU.
sidebar_position: 15
hide_title: true
custom_edit_url: null
---
## Localización EE.UU.

### Impuesto sobre las Ventas en EE.UU.

Ir a: ***Configuración de ExFlow \--\> Pestaña de Verificaciones de Creación de Documentos***

Habilitar "Permitir Impuesto sobre las Ventas" en la Configuración de ExFlow.

![Configuración de ExFlow - Verificaciones de Creación de Documentos - Localización EE.UU.](@site/static/img/media/exflow-setup-doc-posting-checks-002-ca-us.png)

Con esta configuración, el Grupo de Publicación de Productos de IVA no será obligatorio en el Diario de Importación de ExFlow. Esta configuración normalmente se combina con la Configuración de Publicación de Impuestos del Impuesto sobre las Ventas.

![Configuración de Publicación de IVA - Localización EE.UU.](@site/static/img/media/image357.png)

Para soportar el Impuesto sobre las Ventas en EE.UU., los campos específicos de impuestos del Encabezado del Documento de Compra y las Líneas del Documento de Compra también se implementan en el Diario de Importación de ExFlow. Las funcionalidades de estos campos son similares a cómo funcionan en los Documentos de Compra.

**Los campos adicionales en el encabezado del documento son**

- Sujeto a Impuestos
- Código de Área de Impuestos
- No. de Exención de Impuestos

**Y en las líneas del documento**

- Sujeto a Impuestos
- Código de Área de Impuestos
- Código de Grupo de Impuestos

Con el uso de la Configuración de Impuestos de EE.UU., el Diario de Importación también soporta cálculos de impuestos basados en el Impuesto de EE.UU. La funcionalidad para recuperar el Código de Área de Impuestos, etc., de la información de la empresa y la ubicación en lugar de la tarjeta del proveedor también se refleja en el Diario de Importación.

![Diario de Importación de ExFlow - Localización EE.UU.](@site/static/img/media/image367.png)

### Transacciones de Proveedores Responsables de 1099<br/>
Antes de procesar transacciones responsables de 1099, debe configurar **Cajas de Formulario 1099** y **Proveedores** como responsables de 1099 en Business Central. Consulte la documentación de Microsoft para obtener instrucciones sobre la configuración y el procesamiento de transacciones de 1099 en Business Central.<br/><br/>

#### Para procesar un documento como responsable de 1099 en ExFlow<br/>
* Importe una factura para un proveedor que haya sido configurado con el código 1099 del IRS relevante, etc. (consulte las instrucciones de Microsoft sobre cómo configurar proveedores 1099).
* Opcionalmente, en la línea de encabezado del Diario de Importación, en el campo Código 1099 del IRS, sobrescriba el valor predeterminado con otro código, o elimínelo para tener una transacción sin un código 1099 del IRS.

![Diario de Importación de ExFlow - Localización EE.UU.](@site/static/img/media/import-journal-008-us-irs-1099.png)

* Si una parte del monto de la factura es responsable de 1099 y otra parte no lo es, marque/desmarque la casilla de verificación "Responsable de 1099 del IRS" para identificar las líneas que son responsables de 1099.

![Diario de Importación de ExFlow - Localización EE.UU.](@site/static/img/media/import-journal-lines-002-us-irs-1099.png)

* Continúe procesando y publique el documento.
* Una vez que el documento esté publicado, puede ir a la página de Lista de Entradas del Libro Mayor del Proveedor y encontrar que los campos Código 1099 del IRS y Monto 1099 del IRS se llenan automáticamente.

![Entradas del Libro Mayor del Proveedor - Localización EE.UU.](@site/static/img/media/vendor-ledger-entries-001.png)


### Manejar el Código de Grupo de Impuestos en el Código de Compra de ExFlow

Cuando el Código de Grupo de Impuestos en una línea de factura necesita ser diferente al predeterminado en el registro maestro seleccionado en esa línea de factura, esto se puede manejar desde un Código de Compra de ExFlow.

Por ejemplo, si el Código de Grupo de Impuestos en una tarjeta de cuenta G/L para Suministros de Oficina está predeterminado como NO SUJETO A IMPUESTOS, mientras que una línea en una Factura de Compra con esa Cuenta G/L necesita ser marcada como SUJETO A IMPUESTOS, los usuarios simplemente podrían agregar esto en las líneas del código de compra de ExFlow según la imagen a continuación.

Esto permitiría a los usuarios automatizar la creación de facturas en esos escenarios específicos.

![Código de Compra de ExFlow](@site/static/img/media/NA-exflow-purchase-code-card-tax-group-001.png)

### Columnas de Impuestos en la Web

Es posible hacer visibles los campos relacionados con impuestos en ExFlow Web agregando las columnas en la Configuración de ExFlow.

![Columnas de ExFlow Web](@site/static/img/media/tax-web-columns-001.png)

Lea más sobre cómo editar columnas web en la sección [***ExFlow Web.***](https://docs.signupsoftware.com/business-central/docs/user-manual/technical/exflow-web#exflow-web)