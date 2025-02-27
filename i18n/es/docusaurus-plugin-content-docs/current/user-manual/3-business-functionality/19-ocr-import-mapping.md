---
title: Mapeo de Importación OCR
sidebar_position: 19
hide_title: true
custom_edit_url: null
---
## Mapeo de Importación OCR

Ir a: ***Mapeo de Importación OCR de ExFlow***

El Mapeo de Importación OCR de ExFlow se utiliza para establecer una codificación a partir de un valor interpretado específico para un proveedor específico. Esta página contiene los campos que completan la línea con los valores ingresados cuando la factura se importa al Diario de Importación de ExFlow.

Es posible obtener una línea completamente codificada con una cuenta G/L, dimensiones, número de proyecto, etc., solo a partir de una configuración en la página "Mapeo de Importación OCR de ExFlow" que puede ser única para cada proveedor.

![Mapeo de Importación OCR de ExFlow](@site/static/img/media/ocr-import-mapping-list-001.png)

| Mapeo de Importación OCR     |	|
|:-|:-|
| **No. de Proveedor**    | Elija el número de proveedor.
| **No. de Importación**    | Especifique el valor importado a mapear.
| **Tipo de Mapeo**    | Elija una opción de tipo de mapeo. Puede ser una cuenta G/L, número de artículo, etc.
| **Sin Coincidencia de Orden de Compra**    | Elija si se debe omitir la coincidencia de OC en esta combinación de mapeo específica.
| **Agregar Líneas**    | Habilite esta configuración para agregar todas las líneas importadas con los criterios de mapeo especificados en una línea de factura resumida.
| **Código de Dimensión**     | Si existe un código de dimensión como una columna en ExFlow Web, entonces el código de dimensión será visible y se podrá usar en la lista de Mapeo de Importación OCR.
| **No. de Proyecto**    | Especifique el número de proyecto.
| **No. de Tarea del Proyecto**    | Especifique el número de tarea del proyecto.
| **Primer Aprobador**    | Especifique el primer aprobador.
| **Regla de Aprobación**    | Especifique la regla de aprobación.
| **Grupo de Cuenta Automática**    | Especifique los grupos de cuenta automática.
| **Aprobación**    | La casilla de verificación de aprobación está marcada por defecto. Desactívela si este mapeo no debe formar parte del flujo de aprobación.


### Agregar Líneas

Esta función se utiliza para interpretar líneas en facturas de gastos, y no para facturas relacionadas con órdenes de compra.

Es posible mapear un valor interpretado específico a un tipo particular, como una cuenta G/L. Edite la lista y especifique el número de proveedor elegido. Agregue el valor en No. de Importación que se interpretará y elija cómo ExFlow debe mapear el valor interpretado, por ejemplo, una cuenta G/L.

Al importar el documento al Diario de Importación, la codificación se generará de acuerdo con la configuración en la página "Mapeo de Importación OCR de ExFlow" con el "Tipo de Mapeo" elegido (es decir, cuenta G/L) bajo Líneas de Importación.

Las dimensiones se agregarán en las líneas, no en el encabezado.

![Mapeo de Importación OCR de ExFlow](@site/static/img/media/ocr-import-mapping-001.png)

Ejemplo, si una factura tiene 1000 líneas (500 líneas con valor 1 y 500 líneas con valor 2), y las líneas deben mapearse a dos cuentas G/L diferentes según la imagen a continuación. Al marcar "Agregar Líneas", todos los valores con 1 se agregarán a la cuenta G/L 6420 y todas las líneas con valor 2 se agregarán a la cuenta G/L 5611 al importar el documento al Diario de Importación de ExFlow.

![Mapeo de Importación OCR de ExFlow - Agregar Líneas](@site/static/img/media/ocr-import-mapping-002.png)

![Diario de Importación de ExFlow - Agregar Líneas](@site/static/img/media/import-journal-026.png)

### Sin Coincidencia de Orden de Compra

Si "Sin Coincidencia de Orden de Compra" está deshabilitado y el documento interpretado tiene un número de orden interpretado, entonces la coincidencia de orden tiene prioridad y establecerá las líneas según la orden. Esto significa que las dimensiones se usarán de la orden y no tomarán las dimensiones especificadas en el Mapeo de Importación OCR.

![Mapeo de Importación OCR de ExFlow - Sin Coincidencia de Orden de Compra - Deshabilitado](@site/static/img/media/ocr-import-mapping-003.png)

Si "Sin Coincidencia de Orden de Compra" está habilitado y el documento interpretado tiene un número de orden interpretado, entonces el sistema usa los valores especificados en la configuración de "Mapeo de Importación OCR de ExFlow", incluidas las dimensiones. Las dimensiones se establecerán solo en las líneas, no en el encabezado.

![Mapeo de Importación OCR de ExFlow - Sin Coincidencia de Orden de Compra - Habilitado](@site/static/img/media/ocr-import-mapping-004.png)