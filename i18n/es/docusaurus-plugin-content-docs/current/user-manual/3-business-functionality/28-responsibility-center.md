---
title: Centro de Responsabilidad
sidebar_position: 28
hide_title: true
custom_edit_url: null
---
## Centro de Responsabilidad

Los Centros de Responsabilidad son compatibles tanto para documentos de costos como para documentos coincidentes con órdenes de compra. Consulte la información adicional a continuación.

### Uso de Centros de Responsabilidad con facturas de costos/gastos
Para las facturas de costos/gastos, el Centro de Responsabilidad se puede heredar del proveedor o se puede completar manualmente en el encabezado del Diario de Importación. Cuando se completa el Centro de Responsabilidad, el encabezado y las líneas de la factura se actualizarán con cualquier información relacionada. Dependiendo de las configuraciones en BC, esto podría incluir Dimensiones, Código de Ubicación, Código de Área de Impuestos, etc.

Si el Centro de Responsabilidad se actualiza a un nuevo valor en el encabezado de la factura, las líneas del documento se actualizarán en consecuencia.

#### Prioridad de Dimensiones - Encabezado
Cuando se establece un centro de responsabilidad en el encabezado del documento, la prioridad de dimensiones imitará la prioridad de dimensiones estándar de BC con una excepción:

- Las dimensiones predeterminadas establecidas en una Referencia de ExFlow tendrán prioridad sobre las dimensiones predeterminadas establecidas en el Centro de Responsabilidad. El documento heredará dimensiones predeterminadas de ambos, pero cuando haya un conflicto, las dimensiones predeterminadas establecidas en la Referencia tendrán prioridad sobre las dimensiones predeterminadas establecidas en el Centro de Responsabilidad.

#### Prioridad de Dimensiones - Líneas

Las líneas del documento heredarán dimensiones del encabezado con la siguiente excepción:

- Si se utiliza un código de compra para crear líneas de factura, las dimensiones establecidas en el código de compra tendrán prioridad sobre las dimensiones establecidas en el encabezado.

### Uso de Centros de Responsabilidad con facturas coincidentes con órdenes de compra

#### Configuración

Al habilitar la siguiente configuración, las facturas con órdenes de compra coincidentes heredarán el Centro de responsabilidad de la orden de compra coincidente:

En la configuración de ExFlow, vaya a la pestaña "Configuración de órdenes de compra" y active la opción "Copiar valores de encabezado a la configuración de factura/nota de crédito" para abrir la página de configuración.

Active el Centro de responsabilidad marcando la casilla en el campo "Activar" y haga clic en Aceptar para completar la activación y cerrar la página.

![Estado de Aprobación de ExFlow](@site/static/img/media/po-header-value-on-invoice-setup-003.png)

Con la configuración anterior en su lugar, ocurre lo siguiente cuando una factura se hace coincidir con una orden de compra:
* Una factura coincidente con una sola orden de compra heredará el Centro de Responsabilidad del encabezado de la orden de compra.
    - Las líneas de la factura heredarán dimensiones, código de ubicación, área de impuestos y responsabilidad fiscal de las líneas de la orden de compra coincidente.
* Una factura coincidente con múltiples órdenes de compra con el mismo Centro de Responsabilidad se manejará de la misma manera que lo anterior.
* Cuando una sola factura se hace coincidir con múltiples órdenes de compra con diferentes Centros de Responsabilidad, cada línea heredará el código de ubicación, área de impuestos y configuración de responsabilidad fiscal de la línea de la orden de compra a la que está coincidiendo. El Centro de Responsabilidad se dejará en blanco en el encabezado de la factura.

### Limitación
Un centro de responsabilidad predeterminado que se establece en un usuario no se heredará en documentos importados/creados en el Diario de Importación. El Centro de Responsabilidad se puede heredar del proveedor, de la orden de compra o se puede completar manualmente en el encabezado del diario de importación.