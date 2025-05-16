---
title: Estado de Pedido de ExFlow
sidebar_position: 6
hide_title: true
custom_edit_url: null
---
## Estado de Pedido de ExFlow

Vaya a: ***Estado de Pedido de ExFlow***

Cuando un Pedido o Cotización se marca para aprobación, se puede encontrar en
Estado de Pedido de ExFlow y en Estado de Aprobación de ExFlow. Cuando un Pedido o
Cotización se Libera, el estado cambiará de Inactivo a Activo.
Los Pedidos o Cotizaciones no liberados tienen estado Inactivo y no pueden verse en
ExFlow Web.

### Configuración de Aprobación de Pedidos y Cotizaciones

Vaya a: ***Configuración de ExFlow --> Aprobación de Pedidos y Cotizaciones***

![Configuración de ExFlow - Aprobación de Pedidos y Cotizaciones](@site/static/img/media/exflow-setup-order-and-quote-approval-001.png)

|Aprobación de Pedidos y Cotizaciones||
|:-|:-|	
|**Aprobación de Pedido de Compra**| 	Especifica si se debe utilizar la aprobación de pedidos de compra. <br/> Para agregar automáticamente la marca de aprobación en todos los documentos de pedido, "Aprobación de Pedido de Compra" debe estar activa. Además, para enviar un pedido para su aprobación en ExFlow Web, se necesita un PDF.
|**Informe de Pedido**| 	Especifica el ID del informe que se utiliza al crear documentos de pedido
|**Nombre del Informe de Pedido**| 	Especifica el nombre del informe que se utiliza al crear documentos de pedido. <br/> Para enviar un pedido para su aprobación en ExFlow Web, se necesita un PDF. Elija un informe en la lista para poder ver el PDF del pedido.
|**Solo Recibir Pedido Aprobado**| Habilite la configuración ''Solo Recibir Pedido Aprobado'' para evitar la contabilización de recepciones si el pedido aún no está aprobado.<br/><br/> El siguiente mensaje de error aparecerá si esta configuración está habilitada y un usuario intenta contabilizar recepciones en un pedido no aprobado. <br/><br/> ![Configuración de ExFlow - Aprobación de Pedidos y Cotizaciones](@site/static/img/media/unapproved-order-card-only-receive-approved-order-error-message-001.png)
|**Aprobación de Cotización de Compra**| Para agregar automáticamente la marca de aprobación en todas las Cotizaciones, "Aprobación de Cotización de Compra" debe estar activa.<br/> Para enviar una cotización para su aprobación en ExFlow Web, se necesita un PDF.
|**Informe de Cotización**| 	Especifica el ID del informe que se utiliza al crear documentos de cotización. Para enviar una cotización para su aprobación en ExFlow Web, se necesita un PDF.<br/> Elija un informe en la lista para poder ver el PDF de la cotización.
|**Nombre del Informe de Cotización**| 	Especifica el nombre del informe que se utiliza al crear documentos de cotización
|**Aprobación Automática de Pedido creado a partir de Cotización**| Esta configuración es relevante si tanto la aprobación de pedidos como la aprobación de cotizaciones están activas. Con esta función, es posible activar la Aprobación Automática de Pedido creado a partir de Cotización. Si se utiliza esta configuración, todos los aprobadores de la cotización se copiarán al pedido y el pedido se aprobará de inmediato.
|**Establecer Usuario Actual como Primer Aprobador Predeterminado para Pedido/Cotización**| Use para agregar al usuario que está creando la cotización o el pedido como Primer Aprobador del documento.<br/><br/> Dependiendo de la Configuración de ExFlow, el Primer Aprobador puede usarse como filtro en las Reglas de Aprobación para crear flujos de aprobación para cotizaciones y pedidos. El Primer Aprobador también puede ser un Aprobador real.<br/><br/> Para usar esta función, el Usuario de Business Central debe ser un Usuario del Sistema ExFlow. Lea más en la sección [***Usuario de ExFlow***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/exflow-user).
|**Bloquear Factura en Diario de Importación si el Pedido no está Aprobado**| 	Especifica si se debe bloquear la factura si el pedido relacionado no está aprobado. Esta configuración agregará un mensaje de advertencia al hacer coincidir el documento con un pedido no aprobado. <br/><br/> En este ejemplo, la cuenta por cobrar se contabiliza, incluso si el Pedido de Compra no está aprobado.<br/><br/> Luego, al hacer coincidir la factura en el diario de importación, un mensaje de advertencia informará que las líneas de pedido recibidas no están aprobadas.<br/><br/> ![Diario de Importación de ExFlow - Mensajes de advertencia](@site/static/img/media/image286.png)<br/><br/> Al igual que con otros mensajes de advertencia en el diario de importación, se puede resolver aceptándolo:<br/><br/> ![Diario de Importación de ExFlow - Mensajes de advertencia](@site/static/img/media/image287.png)<br/><br/> 
|**Verificar Número Mínimo de Aprobadores para Cotizaciones y Pedidos**| 	Especifica si la configuración de "Número Mínimo de Aprobadores" que se encuentra en la pestaña Verificaciones de Publicación de Documentos también se aplica a cotizaciones y pedidos.
|**Copiar PDF de Cotización a Pedido**| 	Se agregará una copia de un archivo PDF de Cotización al Pedido de Compra cuando se cree el pedido.<br/><br/> Después de que se crea el Pedido de Compra a partir de una Cotización de Compra, la copia del archivo PDF de la Cotización se puede encontrar como un archivo de documento entrante en Estado de Pedido de ExFlow y Estado de Aprobación de ExFlow, y también como un archivo adjunto en ExFlow Web.
|**Bloquear Impresión/Envío no aprobado**| La configuración especifica si se debe bloquear la impresión o el envío desde un Pedido de Compra, Cotización de Compra o ambos si el Pedido o la Cotización se envía para aprobación y no está completamente aprobado.<br/><br/>Esta configuración es relevante solo para aquellos usuarios que no tienen permisos como EX ACCOUNTANT o EX ADMIN.<br/><br/>Los usuarios con el conjunto de permisos EX ACCOUNTANT o EX ADMIN siempre podrán usar esta función, incluso si el documento no está completamente aprobado. <br/><br/> En este ejemplo, un usuario que no tiene permiso como EX ACCOUNTANT o EX ADMIN, está utilizando la acción Imprimir/Enviar para un documento no completamente aprobado y recibe un mensaje de error. <br/><br/> ![Pedido de Compra - Bloquear Impresión y Envío](@site/static/img/media/purchase-order-001.png)
|**Enviar Correo Electrónico para Pedido/Cotización Aprobado**|  	Cuando está habilitado, enviará una notificación de Pedido o Cotización Aprobado al creador del Pedido o la Cotización cuando el documento esté aprobado.  <br/><br/> Lea más sobre esto en la sección [***Pedido/Cotización Aprobado***](https://docs.signupsoftware.com/business-central/docs/user-manual/approval-workflow/email-reminders#approved-orderquote)
|**Enviar Recordatorio de Pedido No Recibido para Pedido Aprobado**|  	Se envía un Recordatorio de Pedido No Recibido cuando el documento está aprobado y no todas las líneas del Pedido están completamente recibidas. Para que esto funcione, "Documentos de Coincidencia Con" debe estar configurado en "Recepción". <br/><br/> Lea más sobre esto en la sección [***Pedido No Recibido - Aprobado***](https://docs.signupsoftware.com/business-central/docs/user-manual/approval-workflow/email-reminders#unreceived-order---approved)


### Crear Cotización de Compra o Pedido de Compra para Aprobación

Al crear una Cotización de Compra o un Pedido de Compra, debido a la configuración, el
indicador de Aprobación se activará y el Estado de ExFlow será Inactivo.

Para enviar la Cotización/Pedido para aprobación, necesita Aprobadores y debe ser
Liberado. La Cotización/Pedido ahora es visible tanto en Estado de Pedido de ExFlow como en
Estado de Aprobación de ExFlow, pero aún no en ExFlow Web.

Si el Usuario de Business Central que crea el Pedido/Cotización está conectado
a un Usuario de ExFlow, entonces el Primer Aprobador se agregará automáticamente en
todas las líneas y, por lo tanto, se puede usar como filtro en las Reglas de Aprobación.

### Estado de Aprobación de ExFlow

Los Pedidos de Compra y las Cotizaciones que aún necesitan alguna acción se pueden encontrar en
Estado de Aprobación de ExFlow. Después de la Aprobación, ejecute Verificar Cambios para actualizar los
Pedidos de Compra o Cotizaciones con cualquier cambio.

Cuando una Cotización de Compra está Aprobada y Verificada, desaparecerá del
Estado de Aprobación.

ExFlow creará automáticamente un Pedido de Compra. La Cotización será
eliminada, como estándar de Business Central, mientras que el Flujo de Aprobación, Comentarios,
Adjuntos, etc., se almacenarán en el Historial de Estado de Aprobación de ExFlow.

Debido a la configuración en la Configuración de ExFlow, el flujo de Aprobación de Cotización también se puede
copiar al Pedido de Compra y marcar el Pedido como Aprobado. Si no, y
la Aprobación de Pedido de Compra está activada, el Pedido necesita ser Liberado.

La Cotización no se puede convertir en un pedido si está activada para
aprobación pero aún no está aprobada. La función se llama "Hacer Pedido".

Cuando un Pedido de Compra está Aprobado y Verificado, desaparecerá del
Estado de Aprobación y ahora se puede encontrar en Estado de Pedido de ExFlow.

![Estado de Aprobación de ExFlow](@site/static/img/media/image288.png)

### Estado de Pedido de ExFlow

Esta vista se utiliza principalmente para hacer un seguimiento de las Aprobaciones de Pedidos de Compra y Cotizaciones de Compra.

En Estado de Pedido de ExFlow, los Pedidos de Compra o Cotizaciones permanecerán mientras
existan como una tarjeta.

El Pedido o la Cotización aún necesita ser aprobado en ExFlow Web y luego
verificado desde el Estado de Aprobación de ExFlow.

Después de verificar el Pedido, el campo "Pedido Aprobado y Verificado" será marcado. En este sentido, los Pedidos y las Cotizaciones se comportan de manera diferente, ya que las Cotizaciones se eliminan directamente cuando se crea el Pedido, mientras que los pedidos se mostrarán como facturados hasta que se eliminen mediante una tarea en el estándar de Business Central.

![Estado de Pedido de ExFlow](@site/static/img/media/image289.png)

Siga el estado actual en la columna "Estado" de Estado de Pedido de ExFlow.

![Estado de Pedido de ExFlow](@site/static/img/media/image290.png)

También es posible ver si el pedido se creó a partir de una cotización y si
la aprobación se copió de la cotización al pedido.

![Estado de Pedido de ExFlow](@site/static/img/media/image291.png)

#### Eliminar un Pedido de Compra
Para eliminar un Pedido de Compra, el Pedido debe estar completamente recibido y
completamente facturado. La eliminación de un pedido se realizará a través de la tarea ***Eliminar
Pedido de Compra Facturado***. El pedido también se eliminará si se
factura directamente desde la Tarjeta de Pedido de Compra en el estándar de Business
Central fuera de ExFlow.

Al eliminar un pedido que está aprobado y completamente facturado, el
Flujo de Aprobación, Comentarios y Adjuntos, etc., se almacenarán en el Historial de
Estado de Aprobación de ExFlow.
