---
title: Localización Suiza
sidebar_position: 14
hide_title: true
custom_edit_url: null
---
## Localización Suiza

### Idioma

ExFlow soporta los idiomas francés y alemán en Business Central.

### Facturas QR

Se soporta la referencia de pago extraída del QR de la factura.

La referencia QR importada llenará el campo "Referencia de Pago" en la Factura de Compra en Business Central y seguirá a la Factura de Compra Registrada donde se incluirá para el pago.

### Facturas ESR

Se soporta la lógica para facturas ESR.

La referencia ESR importada llenará el campo "Referencia de Pago" y "No. de Referencia" en la Factura de Compra en Business Central.

El monto bruto de la factura llenará el campo "Monto ESR" en la Factura de Compra en Business Central.

ExFlow validará que la referencia ESR obligatoria exista en las facturas de los proveedores con cuenta bancaria configurada para ESR o ESR+. ExFlow dará un mensaje de advertencia en el Diario de Importación si falta la referencia ESR.