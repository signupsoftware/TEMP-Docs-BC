---
title: Localización Islandia
sidebar_position: 11
hide_title: true
custom_edit_url: null
---
## Localización Islandia

### Idioma

ExFlow soporta el idioma islandés en Business Central.

### Referencia de Pago

#### Antecedentes

Las facturas islandesas contienen una referencia de pago que debe llenar el campo "Referencia de Pago" en el Encabezado de la Factura de Compra.

El formato de la referencia de pago interpretada en la factura necesita transformarse cuando se importa a ExFlow para obtener el formato correcto.

El formato correcto incluye en el siguiente orden:

- Número de registro de la empresa del proveedor

- Fecha de vencimiento

- Número de reclamación

Ejemplo:

Entrada: **4601171350**\> 0**112266**+ 03\<**032266**\> **300820**+

Salida: **4601171350 300820 032266123456**

Formato: RRRRRRRRRR DDMMYY NNNNNNNNNNNN

#### Solución

##### Transformación

La referencia de pago interpretada en la factura debe exportarse en la etiqueta XML llamada "PaymId".

"PaymId" se asigna por defecto al campo "No. de Documento del Proveedor 2" en el Diario de Importación.

La referencia de pago interpretada debe tener siempre la longitud completa y completa.

Se utiliza una regla de transformación en la Definición de Intercambio de Datos para transformar la referencia de pago al formato correcto. La lógica de la regla de transformación está codificada para manejar el formato entrante: **4601171350**\> **0112266+ 03\<032266\>** **300820**+ y luego crear.

formato saliente: **4601171350 300820 032266123456**

Esta lógica se activa creando un código de transformación personalizado llamado "ISLPAY" y agregándolo al campo "PaymId".

##### Población del Encabezado de la Factura de Compra

La referencia de pago transformada se importa a "No. de Documento del Proveedor 2" en el Diario de Importación.

Cuando se crea la factura, el campo "Referencia de Pago" en el Encabezado de la Factura de Compra se llena con la referencia de pago transformada de "No. de Documento del Proveedor 2" con el formato **01171350 300820 032266123456**

![Definición de Intercambio de Datos - Localización Islandesa](@site/static/img/media/image365.png)

![Tarjeta de Regla de Transformación - Localización Islandesa](@site/static/img/media/image366.png)