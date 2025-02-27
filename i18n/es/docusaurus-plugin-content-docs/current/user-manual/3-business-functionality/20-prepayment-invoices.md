---
title: Facturas de Prepago
sidebar_position: 20
hide_title: true
custom_edit_url: null
---
## Facturas de Prepago

Esta función se basa en la funcionalidad estándar de Business Central.

Para crear y aprobar una Factura de Prepago, ExFlow crea una copia de la factura que se publicará desde la Orden de Compra.

### Configuración de Prepago

Para poder crear una Factura de Compra de Prepago, se requiere la configuración estándar en la Configuración de Publicación General. El IVA se calculará a partir de la configuración de la Cuenta G/L agregada en la configuración.

Para verificar la configuración de prepago, use "Vista previa de la publicación de la factura de prepago" en la orden de prepago.

#### Prepago en la Configuración de ExFlow

Agregue un número de serie de factura de prepago para separar las facturas de prepago y hacerlas más claras. O agregue el mismo número de serie que las facturas en la Configuración de Compras y Pagos.

![Configuración de ExFlow - General](@site/static/img/media/exflow-setup-general-004.png)

![Configuración de Compras y Pagos - Series de Números](@site/static/img/media/purchases-payables-setup-001.png)

Además, hay configuraciones para el prepago en General que pueden ser útiles.

| Configuración de Compras y Pagos |  |
|:-|:-|
| **Verificar prepago al publicar:**       | Evita publicar recibos o facturar una Orden de Compra que tenga un monto de prepago no pagado.
| **Frecuencia de actualización automática de prepago:**    | Especifica con qué frecuencia debe ejecutarse el trabajo que actualiza automáticamente el estado de las órdenes pendientes de prepago.

![Configuración de Compras y Pagos - General](@site/static/img/media/exflow-setup-general-007.png)

### Orden de Compra de Prepago

Se necesita configuración en la Orden de Compra.

Agregue el porcentaje de prepago en la tarjeta de la orden y use Comprimir si es necesario.

Desmarque Comprimir Prepago para especificar todas las líneas en la Factura de Prepago.

![Orden de Compra - Prepago](@site/static/img/media/purchase-order-002.png)

### Factura de Compra de Prepago

La publicación de facturas de prepago se seguirá haciendo desde la Orden de Prepago en el estándar de Business Central en segundo plano. La Factura de Prepago de ExFlow es solo un reflejo de una publicación futura.

Por lo tanto, no se permiten cambios excepto en algunos campos que actualizarán la Factura de Prepago al publicar:

Fecha del documento, Fecha de publicación, Fecha de vencimiento, Número de factura del proveedor, Bloquear documento, OCR, Términos de pago, Método de pago y En espera. Y Nota de bienes si SweBase está instalado.

Solo puede haber una factura de prepago, por orden, pendiente de aprobación.

Para poder crear una segunda factura de prepago, la primera factura de prepago debe estar publicada y el porcentaje de prepago de la Orden de Compra debe aumentarse para igualar el monto de la segunda factura de prepago.

**Si se necesitan actualizaciones, deben actualizarse desde la tarjeta de la orden**. <br/>
Cambie el tipo de documento a Factura y todas las líneas de facturación de prepago se eliminarán. Actualice la orden y cambie a Factura de Prepago para recibir nuevas líneas actualizadas en el Diario de Importación.

Cualquier cambio en la línea de prepago dará el mensaje *"Los cambios en la factura de prepago solo se pueden hacer en la orden. Luego, para actualizar la línea de la factura, cambie el tipo de documento a Factura y luego vuelva a Factura de Prepago".*

Para la aprobación: se permiten el primer aprobador, la regla de aprobación y los aprobadores agregados manualmente.

Para el flujo de aprobación agregado automáticamente, use las mismas configuraciones que para las facturas.

Para poder crear la factura final, todas las facturas de prepago deben estar publicadas.

### Factura de Prepago en el Diario de Importación

Al importar una Factura de Compra interpretada en el Diario de Importación con líneas de recibo faltantes, ocurrirá un mensaje de error: **La Orden No 106049 no tiene líneas recibidas.**

![Diario de Importación de ExFlow - Prepago](@site/static/img/media/import-journal-027.png)

Actualice el Tipo de Documento a Factura de Prepago y presione Verificar.

![Diario de Importación de ExFlow - Prepago](@site/static/img/media/import-journal-028.png)

En este ejemplo, hemos agregado una Regla de Aprobación basada en la Cuenta G/L 1480 utilizada para el prepago y agregado a Erik como aprobador.

![Regla de Aprobación de ExFlow - Prepago](@site/static/img/media/approval-rule-009.png)

Si la configuración se realiza correctamente, las líneas de prepago se agregarán automáticamente.

En este ejemplo, hemos agregado la Cuenta G/L No. 1480 en la Configuración del Libro Mayor y SIN IVA (INGEN MOMS) en la Tarjeta de la Cuenta G/L 1480.

Dado que no usamos Comprimir Prepago en la Orden de Compra, la Factura de Prepago especificará todas las líneas con Descripción de la orden.

![Diario de Importación de ExFlow - Prepago](@site/static/img/media/import-journal-029.png)

Crear para enviar la Factura de Prepago para aprobación.

### Prepago en Estado de Aprobación

En el estado de Aprobación, se creará el siguiente mensaje en el Panel de Discusión y también se mostrará en el Chat en ExFlow Web:

![Panel de Discusión - Prepago](@site/static/img/media/discussion-panel-001.png)

La información sobre la Orden de Prepago también se puede ver en la Tarjeta. El número de la Orden de Prepago también se muestra en el encabezado del documento en la página de Estado de Aprobación.

Dado que la publicación de la Factura de Prepago se realizará desde la Orden de Compra, no se permiten cambios excepto en algunos campos que actualizarán la factura al publicar:

Fecha del documento, Fecha de publicación, Fecha de vencimiento, Número de factura del proveedor, Bloquear documento, Términos de pago, Método de pago y En espera.

Además, el campo OCR de SweBase y la Cuenta Bancaria del Destinatario se pueden cambiar y actualizarán la orden al publicar.

Si se necesitan otros cambios, elimine el documento y comience desde el principio importando al Diario de Importación.

![Factura de Compra - Prepago](@site/static/img/media/purchase-invoice-003.png)

### Aprobación de Prepago en ExFlow Web

En el Chat en ExFlow Web, los aprobadores pueden ver el siguiente mensaje:

![ExFlow Web - Mensaje de Prepago](@site/static/img/media/web-chat-001.png)

No se permiten cambios en un documento de prepago. Por lo tanto, los aprobadores solo pueden Aprobar, Rechazar o poner el documento en Espera. Los aprobadores también pueden Agregar o Reenviar según el permiso del aprobador.

![ExFlow Web - Prepago](@site/static/img/media/web-purchase-invoice-001.png)

Si el usuario intenta cambiar la codificación, ocurrirá el siguiente mensaje de error al aprobar:

![ExFlow Web - Mensaje de error de prepago](@site/static/img/media/web-dynamics-error-001.png)

### Publicación de la Factura de Prepago

Después de que la Factura de Prepago sea aprobada, verifique y publique como de costumbre.

### Historial de Prepago

Ir a: ***Orden de Compra --> Relacionado --> Documentos --> Facturas de Prepago***

La Factura de Prepago publicada se puede rastrear desde la Tarjeta de la Orden de Compra.

![Orden de Compra - Prepago](@site/static/img/media/purchase-order-003.png)

La Factura de Prepago y el historial de aprobación también se pueden rastrear en el Historial de Estado de Aprobación.

![Historial de Estado de Aprobación de ExFlow - Prepago](@site/static/img/media/approval-status-history-001.png)

### Factura de Compra Final de Prepago en el Diario de Importación

Cuando los recibos se publiquen en la Orden de Compra de Prepago, también se debe publicar la factura final.

En el ejemplo anterior, la Factura de Prepago se realizó con un 100 % y un IVA del 0 %. Por lo tanto, la factura final se publicará solo con el monto del IVA si no se agregan otros cargos adicionales a la factura.

Interprete la Factura de Compra final e impórtela al Diario de Importación.

![Diario de Importación de ExFlow - Prepago](@site/static/img/media/import-journal-030.png)

La información sobre los prepagos que se reducen se puede ver en el FactBox en el lado derecho, en Detalles del Documento.

![Diario de Importación de ExFlow - Detalles del Documento para Prepago](@site/static/img/media/import-journal-031-document-details.png)

Las aprobaciones se agregarán como de costumbre mediante Reglas de Aprobación.

Si la orden de prepago del 100 % no se recibe completamente al crear la factura final en el Diario de Importación, un mensaje de acción se referirá a este mensaje de advertencia que requiere ser aceptado antes de enviarlo para aprobación.

![Diario de Importación de ExFlow - Mensaje de advertencia para órdenes de prepago del 100 % parcialmente coincidentes](@site/static/img/media/warning-messages-003.png)

### Factura Final de Prepago en Estado de Aprobación

Al crear la factura final de prepago, se agregará el siguiente mensaje en el Panel de Discusión:

![Panel de Discusión - Prepago](@site/static/img/media/discussion-panel-002.png)

El aprobador aún necesita aprobar el monto total de la orden en las líneas. La reducción se realizará al publicar la orden.

![Estado de Aprobación de ExFlow - Prepago](@site/static/img/media/approval-status-006.png)

### Factura Final de Prepago en ExFlow Web

En el Chat, el aprobador puede ver el siguiente mensaje:

![ExFlow Web - Mensaje de Prepago](@site/static/img/media/web-chat-002.png)

El aprobador aún necesita aprobar el monto total de la orden. La reducción se realizará al publicar la orden.

![ExFlow Web - Prepago](@site/static/img/media/web-purchase-invoice-002.png)

### Publicación de la Factura Final de Prepago

Después de que la Factura de Prepago sea aprobada, verifique y publique como de costumbre.

Las líneas de prepago se reducirán al publicar como estándar de Business Central.

### Historial de la Factura Final de Prepago

Ir a: ***Historial de Estado de Aprobación de ExFlow***

La Factura de Compra Final Publicada solo muestra las líneas aprobadas.

![Historial de Estado de Aprobación de ExFlow - Prepago](@site/static/img/media/approval-status-history-002.png)

Y el mensaje de discusión aún tiene el mensaje creado automáticamente:

![Panel de Discusión - Prepago](@site/static/img/media/discussion-panel-003.png)

Para ver la reducción de los prepagos publicados anteriormente, vaya a la Tarjeta.

![Factura de Compra Publicada - Prepago](@site/static/img/media/purchase-invoice-004.png)