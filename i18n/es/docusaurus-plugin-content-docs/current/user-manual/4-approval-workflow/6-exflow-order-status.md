---
title: Estado de Orden de ExFlow
sidebar_position: 6
hide_title: true
custom_edit_url: null
---
## Estado de Orden de ExFlow

Ir a: ***Estado de Orden de ExFlow***

Cuando una Orden o Cotización se marca para aprobación, se encuentra en el Estado de Orden de ExFlow y en el Estado de Aprobación de ExFlow. Cuando una Orden o Cotización se Libera, el estado cambiará de Inactivo a Activo. Las Órdenes o Cotizaciones no liberadas tienen el estado Inactivo y no se pueden ver en ExFlow Web.

### Configuración de Aprobación de Orden y Cotización

Ir a: ***Configuración de ExFlow \--\> Aprobación de Orden y Cotización***<br/>
Para usar la función de Aprobación de Orden y Cotización, se necesitan algunas configuraciones.

![Configuración de ExFlow - Aprobación de Orden y Cotización](@site/static/img/media/exflow-setup-order-and-quote-approval-001.png)

**Aprobación de Orden de Compra**<br/>
Para agregar automáticamente la bandera de aprobación en todos los documentos de orden, la "Aprobación de Orden de Compra" debe estar activa. Además, para enviar una orden para aprobación en ExFlow Web se necesita un PDF.

**Informe de Orden**<br/>
Para enviar una orden para aprobación en ExFlow Web se necesita un PDF.<br/>
Elija un informe en la lista para poder ver el PDF de la orden.

**Solo Recibir Orden Aprobada** <br/>
Habilite esta configuración para evitar publicar recibos si la orden aún no está aprobada.

![Configuración de ExFlow - Aprobación de Orden y Cotización](@site/static/img/media/exflow-setup-order-and-quote-approval-003.png)

El siguiente mensaje de error aparecerá si esta configuración está habilitada y un usuario intenta publicar recibos en una orden no aprobada.

![Configuración de ExFlow - Aprobación de Orden y Cotización](@site/static/img/media/unapproved-order-card-only-receive-approved-order-error-message-001.png)

**Aprobación de Cotización de Compra**<br/>
Para agregar automáticamente la bandera de aprobación en todas las Cotizaciones, la "Aprobación de Cotización de Compra" debe estar activa.<br/>
Para enviar una cotización para aprobación en ExFlow Web se necesita un PDF.

**Informe de Cotización**<br/>
Para enviar una cotización para aprobación en ExFlow Web se necesita un PDF.<br/>
Elija un informe en la lista para poder ver el PDF de la cotización.

**Aprobar Automáticamente Orden creada a partir de Cotización**<br/>
Esta configuración es relevante si tanto la aprobación de Orden como la aprobación de Cotización están activas. Con esta función, es posible activar la Aprobación Automática de Orden creada a partir de Cotización. Si se usa esta configuración, todos los aprobadores de la cotización se copiarán a la orden y la orden se aprobará inmediatamente.

**Establecer usuario actual como Primer Aprobador predeterminado**<br/>
Úselo para agregar al usuario que está creando la cotización o la orden como Primer Aprobador del documento.<br/>
Dependiendo de la Configuración de ExFlow, el Primer Aprobador se puede usar como filtro en las Reglas de Aprobación para crear flujos de aprobación para cotizaciones y órdenes. El Primer Aprobador también puede ser un Aprobador real.

Para usar esta función, el Usuario de Business Central necesita ser un Usuario del Sistema ExFlow. Lea más en la sección [***Usuario de ExFlow***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/exflow-user).

**Bloquear factura en el diario de importación si la orden no está aprobada**<br/>
Para agregar un mensaje de advertencia al emparejar el documento con una orden no aprobada. En este ejemplo, el recibo se publica, incluso si la Orden de Compra no está aprobada.

Luego, al emparejar la factura en el diario de importación, un mensaje de advertencia informará que las líneas de orden recibidas no están aprobadas.

![Diario de Importación de ExFlow - Mensajes de advertencia](@site/static/img/media/image286.png)

Como con otros mensajes de advertencia en el diario de importación, se puede resolver aceptándolo:

![Diario de Importación de ExFlow - Mensajes de advertencia](@site/static/img/media/image287.png)

**Verificar número mínimo de aprobadores para cotizaciones y órdenes**<br/>
Especifica si la configuración para "Número Mínimo de Aprobadores" encontrada en la pestaña de Verificaciones de Publicación de Documentos también se aplica a cotizaciones y órdenes.

**Copiar PDF de Cotización a Orden**<br/>
Se agregará una copia del archivo adjunto PDF de la Cotización en la Orden de Compra cuando se cree la orden.<br/>
Después de que la Orden de Compra se cree a partir de una Cotización de Compra, la copia del archivo adjunto PDF de la Cotización se puede encontrar como un archivo de documento entrante en el Estado de Orden de ExFlow y el Estado de Aprobación de ExFlow, y también como un archivo adjunto en ExFlow Web.

**Bloquear Imprimir/Enviar no aprobado**<br/>
La configuración especifica si la impresión o el envío desde una Orden de Compra, Cotización de Compra o ambos deben bloquearse si la Orden o Cotización se envía para aprobación y no está completamente aprobada.
Esta configuración es relevante solo para aquellos usuarios que no tienen permisos como EX ACCOUNTANT o EX ADMIN.<br/>
Los usuarios con el conjunto de permisos EX ACCOUNTANT o EX ADMIN siempre podrán usar esta función, incluso si el documento no está completamente aprobado.

![Bloquear Imprimir/Enviar no aprobado](@site/static/img/media/exflow-setup-order-and-quote-approval-002.png)

En este ejemplo, un usuario que no tiene permiso como EX ACCOUNTANT o EX ADMIN, está usando la acción Imprimir/Enviar para un documento no completamente aprobado y recibe un mensaje de error.

![Orden de Compra - Bloquear Imprimir y Enviar](@site/static/img/media/purchase-order-001.png)

**Enviar Correo Electrónico para Orden/Cotización Aprobada** <br/>
Cuando esta configuración está habilitada, enviará una notificación de Orden o Cotización Aprobada cuando el documento esté aprobado.

Lea más sobre esto en la sección [***Orden/Cotización Aprobada***](https://docs.signupsoftware.com/business-central/docs/user-manual/approval-workflow/email-reminders#approved-orderquote)

### Crear Cotización de Compra u Orden de Compra para Aprobación

Al crear una Cotización de Compra u Orden de Compra, debido a la configuración, la bandera de Aprobación se activará y el Estado de ExFlow será Inactivo.

Para enviar la Cotización/Orden para aprobación, necesita Aprobadores y ser Liberada. La Cotización/Orden ahora es visible tanto en el Estado de Orden de ExFlow como en el Estado de Aprobación de ExFlow, pero aún no en ExFlow Web.

Si el Usuario de Business Central que crea la Orden/Cotización está conectado a un Usuario de ExFlow, entonces el Primer Aprobador se agregará automáticamente en todas las líneas y, por lo tanto, se puede usar como filtro en las Reglas de Aprobación.

### Estado de Aprobación de ExFlow

Las Órdenes de Compra y Cotizaciones que aún necesitan alguna acción se pueden encontrar en el Estado de Aprobación de ExFlow. Después de la Aprobación, ejecute Verificar Cambios para actualizar las Órdenes de Compra o Cotizaciones con cualquier cambio.

Cuando una Cotización de Compra está Aprobada y Verificada, desaparecerá del Estado de Aprobación.

ExFlow creará automáticamente una Orden de Compra. La Cotización se eliminará, como estándar de Business Central, mientras que el Flujo de Aprobación, Comentarios, Archivos Adjuntos, etc., se almacenarán en el Historial de Estado de Aprobación de ExFlow.

Debido a la configuración en la Configuración de ExFlow, el flujo de Aprobación de Cotización también se puede copiar a la Orden de Compra y marcar la Orden como Aprobada. Si no, y la Aprobación de Orden de Compra está activada, la Orden necesita ser Liberada.

La Cotización no se puede convertir en una orden si está activada para aprobación pero aún no está aprobada. La función se llama "Hacer Orden".

Cuando una Orden de Compra está Aprobada y Verificada, desaparecerá del Estado de Aprobación y ahora se puede encontrar en el Estado de Orden de ExFlow.

![Estado de Aprobación de ExFlow](@site/static/img/media/image288.png)

### Estado de Orden de ExFlow

Esta vista se utiliza principalmente para hacer un seguimiento de las Aprobaciones de Órdenes de Compra y Cotizaciones de Compra.

En el Estado de Orden de ExFlow, las Órdenes de Compra o Cotizaciones permanecerán mientras existan como una tarjeta.

La Orden o Cotización aún necesita ser aprobada en ExFlow Web y luego verificada desde el Estado de Aprobación de ExFlow.

Después de verificar la Orden, el campo "Orden Aprobada y Verificada" estará marcado. En este sentido, las Órdenes y Cotizaciones se comportan de manera diferente, ya que las Cotizaciones se eliminan directamente cuando se crea la Orden, mientras que las órdenes se mostrarán como facturadas hasta que se eliminen por trabajo en el Estándar de Business Central.

![Estado de Orden de ExFlow](@site/static/img/media/image289.png)

Siga el estado actual en la columna "Estado" del Estado de Orden de ExFlow.

![Estado de Orden de ExFlow](@site/static/img/media/image290.png)

También es posible ver si la orden se creó a partir de una cotización y si la aprobación se copió de la cotización a la orden.

![Estado de Orden de ExFlow](@site/static/img/media/image291.png)

Para eliminar una Orden de Compra, la Orden necesita ser completamente recibida y completamente facturada. Eliminar una orden se hará a través de la tarea ***Eliminar Orden de Compra Facturada***. La orden también se eliminará si se factura directamente desde la Tarjeta de Orden de Compra en el Estándar de Business Central fuera de ExFlow.

Al eliminar una orden que está aprobada y completamente facturada, el Flujo de Aprobación, Comentarios y Archivos Adjuntos, etc., se almacenarán en el Historial de Estado de Aprobación de ExFlow.