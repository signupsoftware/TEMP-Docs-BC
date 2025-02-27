---
title: Localización Dinamarca
sidebar_position: 7
hide_title: true
custom_edit_url: null
---
## Localización Dinamarca

### Idioma

ExFlow soporta el idioma danés en Business Central.

### Referencia de Pago - Código FIK

#### Antecedentes

Las facturas danesas contienen una referencia de pago llamada Código FIK que debe capturarse en la factura y llenar el campo "Referencia de Pago" en el Encabezado de la Factura de Compra al crear la factura desde el Diario de Importación.

El formato de la referencia de pago interpretada en la factura necesita transformarse cuando se importa a ExFlow para obtener el formato correcto.

Ejemplo:

Entrada: +71\<**125396534461985**+83958774\<

Salida: **125396534461985**

![Factura de Compra - Localización Danesa](@site/static/img/media/image361.png)

#### Solución

##### Transformación

Transformación implementada utilizando la funcionalidad de Definición de Intercambio de Datos. La configuración se complementa con una Regla de Transformación que elimina caracteres innecesarios.

![Definición de Intercambio de Datos - Localización Danesa](@site/static/img/media/image362.png)

![Tarjeta de Regla de Transformación - Localización Danesa](@site/static/img/media/image363.png)

##### Población del Encabezado de la Factura de Compra

La referencia de pago transformada se importa a "No. de Documento del Proveedor 2" en el Diario de Importación.

Cuando se crea la factura, el campo "Referencia de Pago" en el Encabezado de la Factura de Compra se llena con la referencia de pago transformada de "No. de Documento del Proveedor 2".