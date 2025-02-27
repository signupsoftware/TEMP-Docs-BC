---
title: Descripción General del Proceso de Flujo de Trabajo
sidebar_position: 6
hide_title: true
custom_edit_url: null
---

## Descripción General del Proceso de Flujo de Trabajo

![Descripción General del Proceso de Flujo de Trabajo](@site/static/img/media/workflow-process-overview-001.png)

1. **Escaneo y captura de datos** - ExFlow admite todo tipo de facturas, incluidas las de papel, pdf y otros formatos electrónicos. Las facturas en papel entrantes se escanean e importan a un flujo de trabajo electrónico utilizando ExFlow Data Capture *(o una solución OCR similar)*. Las facturas electrónicas se importan directamente a ExFlow.

2. **Importación y validación de datos** - La información de la factura se interpreta hasta el nivel de línea. Los datos como proveedor, cantidad, número de artículo y precio unitario se capturan utilizando OCR y se validan. Los datos faltantes pueden ajustarse o agregarse manualmente.

3. **Pre-codificación** - ExFlow proporciona una pre-codificación intuitiva de todas las facturas entrantes, optimizando el proceso y minimizando el trabajo manual.

4. **Conciliación de facturas** - ExFlow puede utilizar los datos capturados para conciliar una factura de pedido de compra con los pedidos de compra disponibles, contratos y/o recibos de mercancías para determinar cómo debe procesarse la factura. ExFlow admite la conciliación estándar de tres vías de Dynamics.

5. **Flujo de trabajo de aprobación** - Para las facturas de gastos o si una factura de pedido de compra no coincide o se identifican discrepancias, se envía para su aprobación. El flujo de trabajo se sugiere en base a reglas de aprobación predefinidas. Estas reglas pueden basarse en el proveedor, cuentas, dimensiones, límites de cantidad, etc. ExFlow también admite jerarquías de posición. Para las facturas que necesitan aprobación, los aprobadores son notificados por correo electrónico para asegurar una rápida respuesta.

6. **Registro final y archivo** - Las facturas aprobadas se registran automáticamente en el libro mayor antes de ser archivadas. El personal de cuentas por pagar siempre tiene una visión clara de todas las facturas en el proceso de facturación. En cualquier momento, cualquier factura puede ser accedida directamente desde el espacio de trabajo de Dynamics 365 Business Central.

7. **Perspectivas y análisis** - En cualquier momento, el personal de cuentas por pagar tiene una visión clara de todas las facturas en el proceso de facturación. También pueden acceder a datos históricos de cada factura desde su espacio de trabajo de Dynamics 365 Business Central. Todos los datos se procesan en tiempo real, asegurando que los informes financieros siempre tengan cifras correctas.


