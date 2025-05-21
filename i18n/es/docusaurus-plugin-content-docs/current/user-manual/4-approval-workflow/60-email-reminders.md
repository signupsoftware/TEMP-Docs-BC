---
title: Recordatorios por Correo Electrónico
sidebar_position: 60
hide_title: true
custom_edit_url: null
---
## Recordatorios por Correo Electrónico
Tenga en cuenta que se debe configurar una Cuenta de Correo Electrónico estándar de Business Central para poder recibir correos electrónicos de ExFlow. Puede encontrar más información sobre esto en la [***Documentación de Microsoft***](https://learn.microsoft.com/en-us/dynamics365/business-central/admin-how-setup-email). Para obtener asistencia sobre esto, comuníquese con su socio de implementación de confianza de Dynamics 365 Business Central.

Para enviar correos electrónicos a los usuarios de ExFlow, se requieren algunas configuraciones. <br/>

Se requiere la [Configuración del correo electrónico de ExFlow](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/exflow-email-setup).

La [Cola de trabajos](https://docs.signupsoftware.com/business-central/docs/user-manual/technical/job-queues) solo debe configurarse en la **Empresa predeterminada**.


### Recordatorio de Bandeja de Entrada
Enviar recordatorios si los Usuarios de ExFlow tienen documentos para aprobar.

| Recordatorio de Bandeja de Entrada |  | 
|:-|:-|
| Cuenta de Correo Electrónico         | Agregar Configuración de Cuenta de Correo Electrónico en todas las empresas              
| Configuración de Correo Electrónico de ExFlow    | Tipo de Correo Electrónico **Recordatorio de Bandeja de Entrada** en todas las empresas <br/> Lea más en la sección [***Configuración de Correo Electrónico de ExFlow - Recordatorio de Bandeja de Entrada***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/exflow-email-setup#inbox-reminder)
| Usuarios de ExFlow          | Activar para **Recordatorio por Correo Electrónico --> Documentos No Aprobados**. <br/>Lea más en la sección [***Usuarios de ExFlow***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/exflow-user#email-reminders) para la configuración.
| Entrada de Cola de Trabajos       | Unidad de Código 12057077 y Cadena de Parámetros **INBOX REMINDER** en la empresa predeterminada
| Documentos Seleccionados    | Estado de Aprobación, seleccione uno o varios documentos y use la función ***Enviar Recordatorio***
| Aprobadores Seleccionados    | Usuarios de ExFlow, seleccione uno o varios usuarios y use la función ***Enviar Recordatorio***
<br/><br/>

### Notificación de Comentarios / Panel de Discusión / Chat
Para enviar un correo electrónico cuando se menciona a un Usuario de ExFlow usando @ y "Código de Usuario de ExFlow", es posible enviar un correo electrónico al Aprobador etiquetado, pero se requiere la siguiente configuración en la **Empresa Predeterminada**.

| Notificación de Comentarios |  |
|:-|:-|
| Cuenta de Correo Electrónico         | Agregar Configuración de Cuenta de Correo Electrónico en la empresa predeterminada
| Configuración de Correo Electrónico de ExFlow    | Tipo de Correo Electrónico **Notificación de Comentarios** en la empresa predeterminada.<br/>Lea más en la sección [***Configuración de Correo Electrónico de ExFlow --> Notificación de Comentarios - Chat***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/exflow-email-setup#comment-notification---chat)
| Usuarios de ExFlow          | Activar para **Recordatorio por Correo Electrónico --> Panel de Discusión**<br/>Lea más en la sección [***Usuarios de ExFlow***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/exflow-user#email-reminders) para la configuración
| Entrada de Cola de Trabajos       | Unidad de Código 12057077 y Cadena de Parámetros **COMMENT NOTIFICATION** en la empresa predeterminada
<br/><br/>

### Orden No Recibida
Para enviar un recordatorio cuando falta el recibo en la factura relacionada con la orden.

| Orden No Recibida |  |
|:-|:-|
| Cuenta de Correo Electrónico             | Agregar Configuración de Cuenta de Correo Electrónico en todas las empresas
| Configuración de Correo Electrónico de ExFlow        | Tipo de Correo Electrónico **UNRECEIVED ORDER** en todas las empresas <br/> Lea más en la sección [***Configuración de Correo Electrónico de ExFlow --> Orden No Recibida***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/exflow-email-setup#unreceived-order)
| Usuarios de ExFlow              | Conectar Usuario de ExFlow a un Código de Comprador <br/>Esto se hace en ***Usuarios de ExFlow --> Permisos*** y por empresa.<br/>Lea más en la sección [***Usuarios de ExFlow***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/exflow-user#add-a-new-user-manually) para la configuración
| Diario de Importación            | La configuración debe ser ''Emparejar Documentos Con = Recibo''. <br/>  La factura necesita tener el Booleano marcado en ***Emparejado Contra Orden de Compra***. <br/> Agregar Número de Orden en el encabezado o en las líneas si se usa la interpretación de líneas
| Entrada de Cola de Trabajos           | Unidad de Código 12057077 y Cadena de Parámetros **UNRECEIVED ORDER** en la empresa predeterminada
| Enviar Recordatorios Manualmente   | Usar la función en ***Diario de Importación --> Acciones --> Correo Electrónico***
| Documentos Seleccionados        |  Seleccionar documentos en el Diario de Importación e ir a ***Diario de Importación --> Acciones --> Correo Electrónico*** <br/>Lea más en la sección [***Diario de Importación***](https://docs.signupsoftware.com/business-central/docs/user-manual/approval-workflow/exflow-import-journals#batch-send-receipt-reminders)
<br/><br/>

### Recordatorio de Contrato
Para enviar un recordatorio de que el contrato expira, se necesita la siguiente configuración solo en la empresa predeterminada.

| Recordatorio de Contrato |  |
|:-|:-|
| Cuenta de Correo Electrónico         | Agregar Configuración de Cuenta de Correo Electrónico en todas las empresas
| Configuración de Correo Electrónico de ExFlow    | Tipo de Correo Electrónico **Contract Reminder** en todas las empresas <br/>Lea más en la sección [***Configuración de Correo Electrónico de ExFlow --> Recordatorio de Contrato***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/exflow-email-setup#contract-reminder)
| Contrato de ExFlow       | Agregar Grupo de Aprobación en ***Contrato --> Recordatorio de Contrato --> Usuario a Recordar*** <br/>Agregar Período de Recordatorio de Contrato cuando enviar el recordatorio (-1M el recordatorio se enviará 1 mes antes de la Fecha de Vencimiento bajo Términos Generales) <br/>Lea más en la sección [***Contratos***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/contract) para la configuración.
| Entrada de Cola de Trabajos        | Unidad de Código 12057077 y Cadena de Parámetros **CONTRACT REMINDER** en la empresa predeterminada<br/>Este trabajo solo enviará un recordatorio por contrato
<br/><br/>

### Recordatorio OMNI
La Aprobación OMNI es una función para aprobar reglas de aprobación y contratos.
Cuando se crea o cambia una nueva regla o contrato, es posible que deba ser aprobado. Lea más en la sección [***Aprobación OMNI***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/omni-approval)

| Recordatorio OMNI |  |
|:-|:-|
| Cuenta de Correo Electrónico         |  Agregar Configuración de Cuenta de Correo Electrónico en todas las empresas
| Configuración de Correo Electrónico de ExFlow    | Tipo de Correo Electrónico **OMNI Approval** en todas las empresas <br/>Lea más en la sección [***Configuración de Correo Electrónico - Aprobación OMNI***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/exflow-email-setup#omni-reminder)
| Entrada de Cola de Trabajos       | Unidad de Código 12057077 y Cadena de Parámetros **OMNI REMINDER** en la empresa predeterminada
<br/><br/>

### Orden Rechazada, Cotización Rechazada, Factura/Nota de Crédito Rechazada
Para enviar un correo electrónico cuando se rechaza un documento, se necesita la siguiente configuración:

| Documentos Rechazados |  |
|:-|:-|
| Cuenta de Correo Electrónico         | Agregar Configuración de Cuenta de Correo Electrónico en todas las empresas
| Configuración de Correo Electrónico de ExFlow    | Tipo de Correo Electrónico **Orden Rechazada, Cotización Rechazada**, o/y ***Factura/Nota de Crédito Rechazada*** en todas las empresas <br/>Lea más en la sección [***Configuración de Correo Electrónico - Orden Rechazada***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/exflow-email-setup#rejected-order), [***Cotizaciones Rechazadas***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/exflow-email-setup#rejected-quote) o/y [***Factura/Nota de Crédito Rechazada***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/exflow-email-setup#rejected-invoicecredit)
| Estado de Aprobación       | Los documentos deben tener el estado rechazado y todas las líneas deben ser manejadas antes de que el estado del documento se actualice
| Entrada de Cola de Trabajos       | Unidad de Código 12057077 y Cadena de Parámetros **REJECTED ORDER** <br/>Unidad de Código 12057077 y Cadena de Parámetros **REJECTED QUOTE** <br/>Unidad de Código 12057077 y Cadena de Parámetros **REJECTED INVOICE** <br/>Agregar Entrada de Cola de Trabajos solo en la empresa predeterminada <br/>El trabajo enviará un correo electrónico por documento.
<br/><br/>

### Recordatorio de Factura de Contrato
Para enviar recordatorios si un contrato no tiene las facturas esperadas, se necesita la siguiente configuración:

| Recordatorio de Factura de Contrato |  |
|:-|:-|
| Cuenta de Correo Electrónico                 | Agregar Configuración de Cuenta de Correo Electrónico en todas las empresas
| Configuración de Correo Electrónico de ExFlow            | Tipo de Correo Electrónico **Recordatorio de Factura de Contrato** en todas las empresas<br/>Lea más en la sección [***Configuración de Correo Electrónico --> Recordatorio de Factura de Contrato***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/exflow-email-setup#contract-invoice-reminder)
| Contrato de ExFlow               | Agregar períodos de facturación y activar para Recordatorios de Factura
| Entrada de Cola de Trabajos               | Unidad de Código 12057077 y Cadena de Parámetros **CONTRACT INVOICE REMINDER** en la empresa predeterminada <br/>El trabajo enviará un recordatorio por período de factura de contrato
| Manualmente por Contrato         | Ir a la ***Tarjeta de Contrato*** seleccionada --> Relacionado --> Mostrar Facturas de Contrato Faltantes <br/>En la nueva página ***Acciones --> Enviar Recordatorio de Contrato***
| Manualmente para todos los Contratos    | Ir a la ***lista de Contratos --> Relacionado --> Mostrar Facturas de Contrato Faltantes*** <br/>En la nueva página ***Acciones --> Enviar Recordatorio de Contrato*** <br/>La lista mostrará todos los recordatorios esperados pero solo enviará recordatorios si el Recordatorio de Factura está activo
<br/><br/>



### Orden No Recibida - Aprobada
Si se emparejan facturas con Orden y luego con Recibo, la factura puede emparejarse con la orden, enviarse para aprobación y aprobarse sin recibo de orden. Pero la factura no se puede publicar.
En este caso, se puede enviar un recordatorio por correo electrónico para los recibos faltantes.

Para enviar este recordatorio, se necesita la siguiente configuración:

| Orden No Recibida - Aprobada |  |
|:-|:-|
| Cuenta de Correo Electrónico                 | Agregar Configuración de Cuenta de Correo Electrónico en todas las empresas
| Configuración de Correo Electrónico de ExFlow            | Tipo de Correo Electrónico **Orden No Recibida - Aprobada** en todas las empresas <br/>Lea más en la sección [***Configuración de Correo Electrónico --> Orden No Recibida - Aprobada***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/exflow-email-setup#unreceived-order---approved)
| Estado de Aprobación               | Las facturas deben tener el estado aprobado y emparejadas con la orden sin recibo publicado
| Entrada de Cola de Trabajos               | Unidad de Código 12057077 y Cadena de Parámetros **UNRECEIVEDORDERAPPROVED** <br/>En la empresa predeterminada
| Manualmente desde el Estado de Aprobación | Seleccionar facturas y ***Relacionado --> Estado de Aprobación --> Enviar Notificación de Orden No Recibida***
| Configuración de ExFlow | La configuración ''Enviar Recordatorio de Orden No Recibida para Orden Aprobada'' también debe estar habilitada en **Configuración de ExFlow --> Emparejamiento de PO --> Enviar Recordatorio de Orden No Recibida para Orden Aprobada** 
<br/><br/>

### Recordatorio de En Espera
Para enviar un correo electrónico cuando un documento se pone en espera, se necesita la siguiente configuración:

| En Espera |  |
|:-|:-|
| Cuenta de Correo Electrónico                 | Agregar Configuración de Cuenta de Correo Electrónico en todas las empresas
| Configuración de Correo Electrónico de ExFlow            | Tipo de Correo Electrónico **Recordatorio de En Espera** en todas las empresas <br/>Lea más en la sección [***Configuración de Correo Electrónico --> En Espera***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/exflow-email-setup#on-hold-reminder)
| Estado de Aprobación               | El documento debe tener el estado en espera
| Entrada de Cola de Trabajos               | Unidad de Código 12057077 y Cadena de Parámetros **ON HOLD REMINDER** <br/>En la empresa predeterminada
<br/><br/>

### Orden/Cotización Aprobada
Para enviar un correo electrónico al creador de la orden/cotización de compra cuando su orden/cotización es aprobada, se necesita la siguiente configuración:

| Orden/Cotización Aprobada|  |
|:-|:-|
| Cuenta de Correo Electrónico                 | Agregar Configuración de Cuenta de Correo Electrónico en todas las empresas
| Configuración de Correo Electrónico de ExFlow            | Tipo de Correo Electrónico **Orden/Cotización Aprobada** en todas las empresas <br/>Lea más en la sección [***Configuración de Correo Electrónico --> Orden/Cotización Aprobada***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/exflow-email-setup#approved-orderquote)
| Estado de Aprobación               | El recordatorio se enviará cuando el documento obtenga el estado Aprobado
| Entrada de Cola de Trabajos               | No se necesita entrada de cola de trabajos
| Configuración de ExFlow | La configuración ''Enviar Correo Electrónico para Orden/Cotización Aprobada'' también debe estar habilitada en **Configuración de ExFlow --> Aprobación de Orden y Cotización --> Enviar Correo Electrónico para Orden/Cotización Aprobada** 
<br/><br/>
