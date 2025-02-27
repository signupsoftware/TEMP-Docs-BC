---
title: Configuración de Correo Electrónico de ExFlow
sidebar_position: 9
hide_title: true
custom_edit_url: null
---
## Configuración de Correo Electrónico de ExFlow
 
Ir a: **Configuración de Correo Electrónico de ExFlow**

Para enviar recordatorios por correo electrónico, se necesita la Configuración de Correo Electrónico de ExFlow para cada Tipo de Correo Electrónico. Los recordatorios por correo electrónico se pueden enviar manualmente o agregando una cola de trabajos. Para la configuración, lea más en la sección [***Recordatorios por Correo Electrónico.***](https://docs.exflow.cloud/business-central/docs/user-manual/approval-workflow/email-reminders#email-reminders)

Tenga en cuenta que se debe configurar una Cuenta de Correo Electrónico estándar de Business Central para poder recibir correos electrónicos de ExFlow. Puede encontrar más información sobre esto en [***Documentación de Microsoft***](https://learn.microsoft.com/en-us/dynamics365/business-central/admin-how-setup-email). Para obtener asistencia sobre esto, comuníquese con su socio de implementación de confianza de Dynamics 365 Business Central.

Los siguientes ***Tipos de Correo Electrónico*** se pueden utilizar: 

### Orden No Recibida
Enviar recordatorios cuando la factura de compra en el diario de importación esté emparejada con una orden no recibida. <br/> 
Se pueden agregar destinatarios en todos, uno o varios campos para enviar recordatorios.<br/><br/> 

|General |  |
|:-|:-|
| **Tipo de Correo Electrónico:**           | Orden No Recibida
| **Tipo de Proceso:**         | Programado
| **Descripción:**          |Agregar una descripción. Esto no se agregará a ningún correo electrónico
| **Correo Electrónico CC:**             | N/A para orden no recibida
| **Dirección de Correo Electrónico de Prueba:**   |Agregar una dirección de correo electrónico para el modo de prueba. ExFlow enviará correos electrónicos solo a este usuario
| **Enviar Adjuntos:**      | Enviar adjuntos incluirá el PDF de la factura de compra como adjunto y los usuarios recibirán un correo electrónico por documento
| **URL de ExFlow Web:**       | N/A
| **Retrasar envío (días):** | Agregar No. de días para retrasar los recordatorios por correo electrónico enviados por las Entradas de la Cola de Trabajos
| **Escenario de Correo Electrónico:**       | Usar ExFlow Predeterminado si se conecta a una cuenta de correo electrónico separada con el mismo escenario

|Destinatarios|  |
|:-|:-|
| **Grupos de Aprobación**:            | Seleccionar y agregar un grupo de aprobación
| **Direcciones de Correo Electrónico Fijas**:      | Seleccionar o agregar una o varias direcciones de correo electrónico fijas
| **Comprador**:                  | Activar para enviar recordatorios al comprador actual en la orden. Si falta el comprador como usuario de ExFlow, el recordatorio se enviará a la dirección de correo electrónico agregada en la tarjeta de vendedores/compradores
| **Correo Electrónico del Coordinador de Compras**: | Agregar una dirección de correo electrónico para enviar recordatorios a un coordinador de compras específico

|Estadísticas |  |
|:-|:-|
| **Último Enviado**:            | Muestra la fecha y hora del último recordatorio enviado                                     
| **No. de Registros de Correo Electrónico**:    | Muestra No. de registros de correo electrónico
| **No. de Entradas de Error**:    | Muestra No. de entradas de error
<br/><br/>


### Recordatorio de Bandeja de Entrada
Enviar recordatorios de que los aprobadores tienen documentos para aprobar.<br/>
Esta configuración también se puede agregar automáticamente al ejecutar el [***Asistente de Inicio***](https://docs.exflow.cloud/business-central/docs/user-manual/welcome-to-exflow/get-started)<br/><br/>

| General |  |
|:-|:-|
| **Tipo de Correo Electrónico**:           | Recordatorio de Bandeja de Entrada
| **Tipo de Proceso**:         | Programado
| **Descripción**:          | Agregar una descripción. Esto no se agregará a ningún correo electrónico
| **Correo Electrónico CC**:             | Para incluir una copia en todos los recordatorios, agregar dirección de correo electrónico
| **Dirección de Correo Electrónico de Prueba**:   | Agregar una dirección de correo electrónico para el modo de prueba. ExFlow enviará correos electrónicos solo a este usuario
| **Enviar Adjuntos**:     | Enviar adjuntos incluirá el documento de compra como adjunto y los usuarios recibirán un correo electrónico por documento
| **URL de ExFlow Web**:       | Agregar URL a ExFlow Web. Esto se agregará como un enlace en el correo electrónico
| **Retrasar envío (días)**: | Agregar No. de días para retrasar los recordatorios por correo electrónico enviados por las Entradas de la Cola de Trabajos
| **Escenario de Correo Electrónico**:       | Usar ExFlow Predeterminado si se conecta a una cuenta de correo electrónico separada con el mismo escenario

| Estadísticas |  |
|:-|:-|
| **Último Enviado**:            | Muestra la fecha y hora del último recordatorio enviado
| **No. de Registros de Correo Electrónico**:    | Muestra No. de registros de correo electrónico
| **No. de Entradas de Error**:    | Muestra No. de entradas de error
<br/><br/>


### Recordatorio de Contrato
Enviar un recordatorio si el contrato expira.

| General |  |
|:-|:-|
| **Tipo de Correo Electrónico**:               | Recordatorio de Contrato
| **Tipo de Proceso**:             | Programado
| **Descripción**:              | Agregar una descripción. Esto no se agregará a ningún correo electrónico
| **Correo Electrónico CC**:                 | Para incluir una copia en todos los recordatorios, agregar dirección de correo electrónico
| **Dirección de Correo Electrónico de Prueba**:       | Agregar una dirección de correo electrónico para el modo de prueba. ExFlow enviará correos electrónicos solo a este usuario
| **Enviar Adjuntos**:         | N/A
| **URL de ExFlow Web**:           | N/A
| **Retrasar envío (días)**:     | Agregar No. de días para retrasar los recordatorios por correo electrónico de las Entradas de la Cola de Trabajos
| **Escenario de Correo Electrónico**:           | Usar ExFlow Predeterminado si se conecta a una cuenta de correo electrónico separada con el mismo escenario

| Estadísticas |  | 
|:-|:-|
| **Último Enviado**:                | Muestra la fecha y hora del último recordatorio enviado<br/>
| **No. de Registros de Correo Electrónico**:        | Muestra No. de registros de correo electrónico.<br/>
| **No. de Entradas de Error**:        | Muestra No. de entradas de error<br/>
<br/><br/>


### Notificación de Comentario - Chat
Enviar un correo electrónico si un Usuario de ExFlow es etiquetado en el Panel de Chat/Discusión

| General |  | 
|:-|:-|
| **Tipo de Correo Electrónico**:               | Notificación de Comentario
| **Tipo de Proceso**:             | Programado
| **Descripción**:              | Agregar una descripción. Esto no se agregará a ningún correo electrónico
| **Correo Electrónico CC**:                 | N/A
| **Dirección de Correo Electrónico de Prueba**:       | Agregar una dirección de correo electrónico para el modo de prueba. ExFlow enviará correos electrónicos solo a este usuario
| **Enviar Adjuntos**:         | N/A
| **URL de ExFlow Web**:           | Agregar URL a ExFlow Web. Esto se agregará como un enlace en el correo electrónico
| **Retrasar envío (días)**:     | N/A
| **Escenario de Correo Electrónico**:           | Usar ExFlow Predeterminado si se conecta a una cuenta de correo electrónico separada con el mismo escenario

| Estadísticas |  | 
|:-|:-|
| **Último Enviado**:            | Muestra la fecha y hora del último recordatorio enviado
| **No. de Registros de Correo Electrónico**:    | Muestra No. de registros de correo electrónico
| **No. de Entradas de Error**:    | Muestra No. de entradas de error
<br/><br/>


### Recordatorio OMNI
Enviar un correo electrónico si los usuarios del sistema tienen algo que aprobar en el Estado de Aprobación OMNI.

| General |  | 
|:-|:-|
| **Tipo de Correo Electrónico**:           | Recordatorio OMNI
| **Tipo de Proceso**:         | Programado 
| **Descripción**:          | Agregar una descripción. Esto no se agregará a ningún correo electrónico
| **Correo Electrónico CC**:             | Para incluir una copia en todos los recordatorios, agregar dirección de correo electrónico
| **Dirección de Correo Electrónico de Prueba**:   | Agregar una dirección de correo electrónico para el modo de prueba. ExFlow enviará correos electrónicos solo a este usuario
| **Enviar Adjuntos**:     | N/A 
| **URL de ExFlow Web**:       | N/A  
| **Retrasar envío (días)**: | Agregar No. de días para retrasar los recordatorios por correo electrónico de las Entradas de la Cola de Trabajos
| **Escenario de Correo Electrónico**:       | Usar ExFlow Predeterminado si se conecta a una cuenta de correo electrónico separada con el mismo escenario

| Estadísticas |  | 
|:-|:-|
| **Último Enviado**:            | Muestra la fecha y hora del último recordatorio enviado
| **No. de Registros de Correo Electrónico**:    | Muestra No. de registros de correo electrónico
| **No. de Entradas de Error**:    | Muestra No. de entradas de error
<br/><br/>


### Orden Rechazada
Enviar un correo electrónico si la orden es rechazada.

| General |  | 
|:-|:-|
| **Tipo de Correo Electrónico**:               | Orden Rechazada  
| **Tipo de Proceso**:             | Programado 
| **Descripción**:              | Agregar una descripción. Esto no se agregará a ningún correo electrónico
| **Correo Electrónico CC**:                 | Para incluir una copia en todos los recordatorios, agregar dirección de correo electrónico
| **Dirección de Correo Electrónico de Prueba**:       | Agregar una dirección de correo electrónico para el modo de prueba. ExFlow enviará correos electrónicos solo a este usuario
| **Enviar Adjuntos**:         | N/A
| **URL de ExFlow Web**:           | N/A
| **Retrasar envío (días)**:     | Agregar No. de días para retrasar los recordatorios por correo electrónico de las Entradas de la Cola de Trabajos
| **Escenario de Correo Electrónico**:           | Usar ExFlow Predeterminado si se conecta a una cuenta de correo electrónico separada con el mismo escenario

| Destinatarios |  |
|:-|:-|
| **Grupos de Aprobación**:              | Seleccionar y agregar un grupo de aprobación
| **Direcciones de Correo Electrónico Fijas**:        | Seleccionar o agregar una o varias direcciones de correo electrónico fijas
| **Comprador**:                    | Activar para enviar recordatorios al comprador actual de la orden. Si falta el comprador como usuario de ExFlow, el recordatorio se enviará a la dirección de correo electrónico agregada en la tarjeta de vendedores/compradores
| **Correo Electrónico del Coordinador de Compras**:   | Agregar una dirección de correo electrónico para enviar recordatorios a un coordinador de compras específico

| Estadísticas |  | 
|:-|:-|
| **Último Enviado**:            | Muestra la fecha y hora del último recordatorio enviado
| **No. de Registros de Correo Electrónico**:    | Muestra No. de registros de correo electrónico
| **No. de Entradas de Error**:    | Muestra No. de entradas de error
<br/><br/>


### Cotización Rechazada
Enviar un correo electrónico si una cotización es rechazada.

| General |  | 
|:-|:-|
| **Tipo de Correo Electrónico**:               | Cotización Rechazada 
| **Tipo de Proceso**:             | Programado 
| **Descripción**:              | Agregar una descripción. Esto no se agregará a ningún correo electrónico
| **Correo Electrónico CC**:                 | Para incluir una copia en todos los recordatorios, agregar dirección de correo electrónico
| **Dirección de Correo Electrónico de Prueba**:       | Agregar una dirección de correo electrónico para el modo de prueba. ExFlow enviará correos electrónicos solo a este usuario
| **Enviar Adjuntos**:         | N/A
| **URL de ExFlow Web**:           | N/A
| **Retrasar envío (días)**:     | Agregar No. de días para retrasar los recordatorios por correo electrónico de las Entradas de la Cola de Trabajos
| **Escenario de Correo Electrónico**:           | Usar ExFlow Predeterminado si se conecta a una cuenta de correo electrónico separada con el mismo escenario

| Destinatarios |  |
|:-|:-|
| **Grupos de Aprobación**:              | Seleccionar y agregar un grupo de aprobación
| **Direcciones de Correo Electrónico Fijas**:        | Seleccionar o agregar una o varias direcciones de correo electrónico fijas
| **Comprador**:                    | Activar para enviar recordatorios al comprador actual de la cotización. Si falta el comprador como usuario de ExFlow, el recordatorio se enviará a la dirección de correo electrónico agregada en la tarjeta de vendedores/compradores
| **Correo Electrónico del Coordinador de Compras**:   | Agregar una dirección de correo electrónico para enviar recordatorios a un coordinador de compras específico

| Estadísticas |  | 
|:-|:-|
| **Último Enviado**:            | Muestra la fecha y hora del último recordatorio enviado
| **No. de Registros de Correo Electrónico**:    | Muestra No. de registros de correo electrónico
| **No. de Entradas de Error**:    | Muestra No. de entradas de error
<br/><br/>


### Factura/Crédito Rechazada
Enviar un correo electrónico si una factura o nota de crédito es rechazada.

| General |  | 
|:-|:-|
| **Tipo de Correo Electrónico**:               | Factura/Crédito Rechazada 
| **Tipo de Proceso**:             | Programado 
| **Descripción**:              | Agregar una descripción. Esto no se agregará a ningún correo electrónico
| **Correo Electrónico CC**:                 | Para incluir una copia en todos los recordatorios, agregar dirección de correo electrónico
| **Dirección de Correo Electrónico de Prueba**:       | Agregar una dirección de correo electrónico para el modo de prueba. ExFlow enviará correos electrónicos solo a este usuario
| **Enviar Adjuntos**:         | N/A
| **URL de ExFlow Web**:           | N/A
| **Retrasar envío (días)**:     | Agregar No. de días para retrasar los recordatorios por correo electrónico de las Entradas de la Cola de Trabajos
| **Escenario de Correo Electrónico**:           | Usar ExFlow Predeterminado si se conecta a una cuenta de correo electrónico separada con el mismo escenario

| Destinatarios |  |
|:-|:-|
| **Grupos de Aprobación**:              | Seleccionar y agregar un grupo de aprobación
| **Direcciones de Correo Electrónico Fijas**:        | Seleccionar o agregar una o varias direcciones de correo electrónico fijas
| **Comprador**:                    | Activar para enviar recordatorios al comprador actual de la orden. Si falta el comprador como usuario de ExFlow, el recordatorio se enviará a la dirección de correo electrónico agregada en la tarjeta de vendedores/compradores
| **Correo Electrónico del Coordinador de Compras**:   | Agregar una dirección de correo electrónico para enviar recordatorios a un coordinador de compras específico

| Estadísticas |  | 
|:-|:-|
| **Último Enviado**:            | Muestra la fecha y hora del último recordatorio enviado
| **No. de Registros de Correo Electrónico**:    | Muestra No. de registros de correo electrónico
| **No. de Entradas de Error**:    | Muestra No. de entradas de error
<br/><br/>


### Recordatorio de Factura de Contrato
Enviar un correo electrónico si falta una factura de contrato.

| General |  | 
|:-|:-|
| **Tipo de Correo Electrónico**:               | Recordatorio de Factura de Contrato 
| **Tipo de Proceso**:             | Programado 
| **Descripción**:              | Agregar una descripción. Esto no se agregará a ningún correo electrónico
| **Correo Electrónico CC**:                 | Para incluir una copia en todos los recordatorios, agregar dirección de correo electrónico
| **Dirección de Correo Electrónico de Prueba**:       | Agregar una dirección de correo electrónico para el modo de prueba. ExFlow enviará correos electrónicos solo a este usuario
| **Enviar Adjuntos**:         | N/A
| **URL de ExFlow Web**:           | N/A
| **Retrasar envío (días)**:     | Agregar No. de días para retrasar los recordatorios por correo electrónico de las Entradas de la Cola de Trabajos
| **Escenario de Correo Electrónico**:           | Usar ExFlow Predeterminado si se conecta a una cuenta de correo electrónico separada con el mismo escenario

| Destinatarios |  |
|:-|:-|
| **Grupos de Aprobación**:              | Seleccionar y agregar un grupo de aprobación
| **Direcciones de Correo Electrónico Fijas**:        | Seleccionar o agregar una o varias direcciones de correo electrónico fijas

| Estadísticas |  | 
|:-|:-|
| **Último Enviado**:            | Muestra la fecha y hora del último recordatorio enviado
| **No. de Registros de Correo Electrónico**:    | Muestra No. de registros de correo electrónico
| **No. de Entradas de Error**:    | Muestra No. de entradas de error
<br/><br/>


### Orden No Recibida - Aprobada
Enviar recordatorios cuando una factura de compra aprobada esté emparejada con una orden no recibida en el Estado de Aprobación.

| General |  | 
|:-|:-|
| **Tipo de Correo Electrónico:**           | Orden No Recibida - Aprobada
| **Tipo de Proceso:**         | Programado
| **Descripción:**          |Agregar una descripción. Esto no se agregará a ningún correo electrónico
| **Correo Electrónico CC:**             | N/A
| **Dirección de Correo Electrónico de Prueba:**   |Agregar una dirección de correo electrónico para el modo de prueba. ExFlow enviará correos electrónicos solo a este usuario
| **Enviar Adjuntos:**      | Enviar adjuntos incluirá el PDF de la factura de compra como adjunto y los usuarios recibirán un correo electrónico por documento
| **URL de ExFlow Web:**       | N/A
| **Retrasar envío (días):** | Agregar No. de días para retrasar los recordatorios por correo electrónico enviados por las Entradas de la Cola de Trabajos
| **Escenario de Correo Electrónico:**       | Usar ExFlow Predeterminado si se conecta a una cuenta de correo electrónico separada con el mismo escenario

| Destinatarios |  |
|:-|:-|
| **Grupos de Aprobación**:              | Seleccionar y agregar un grupo de aprobación
| **Direcciones de Correo Electrónico Fijas**:        | Seleccionar o agregar una o varias direcciones de correo electrónico fijas
| **Comprador**:                    | Activar para enviar recordatorios al comprador actual de la orden. Si falta el comprador como usuario de ExFlow, el recordatorio se enviará a la dirección de correo electrónico agregada en la tarjeta de vendedores/compradores
| **Correo Electrónico del Coordinador de Compras**:   | Agregar una dirección de correo electrónico para enviar recordatorios a un coordinador de compras específico

| Estadísticas |  | 
|:-|:-|
| **Último Enviado**: | Muestra la fecha y hora del último recordatorio enviado
| **No. de Registros de Correo Electrónico**: | Muestra No. de registros de correo electrónico
| **No. de Entradas de Error**: | Muestra No. de entradas de error
<br/><br/>


### Recordatorio de En Espera
Enviar recordatorios si un documento de compra está en espera.

| General |  | 
|:-|:-|
| **Tipo de Correo Electrónico:**           | Recordatorio de En Espera
| **Tipo de Proceso:**         | Programado
| **Descripción:**          |Agregar una descripción. Esto no se agregará a ningún correo electrónico
| **Correo Electrónico CC:**             | N/A
| **Dirección de Correo Electrónico de Prueba:**   |Agregar una dirección de correo electrónico para el modo de prueba. ExFlow enviará correos electrónicos solo a este usuario
| **Enviar Adjuntos:**      | Enviar adjuntos incluirá el PDF del documento de compra como adjunto y los usuarios recibirán un correo electrónico por documento
| **URL de ExFlow Web:**       | N/A
| **Retrasar envío (días):** | Agregar No. de días para retrasar los recordatorios por correo electrónico enviados por las Entradas de la Cola de Trabajos
| **Escenario de Correo Electrónico:**       | Usar ExFlow Predeterminado si se conecta a una cuenta de correo electrónico separada con el mismo escenario

| Estadísticas |  | 
|:-|:-|
| **Último Enviado**: | Muestra la fecha y hora del último recordatorio enviado
| **No. de Registros de Correo Electrónico**: | Muestra No. de registros de correo electrónico
| **No. de Entradas de Error**: | Muestra No. de entradas de error
<br/><br/>


### Orden/Cotización Aprobada    
Enviar un correo electrónico al creador de la orden de compra/cotización cuando la orden de compra/cotización sea aprobada. 

| General |  | 
|:-|:-|
| **Tipo de Correo Electrónico:**           | Orden/Cotización Aprobada
| **Tipo de Proceso:**         | Programado
| **Descripción:**          |Agregar una descripción. Esto no se agregará a ningún correo electrónico
| **Correo Electrónico CC:**             | N/A
| **Dirección de Correo Electrónico de Prueba:**   |Agregar una dirección de correo electrónico para el modo de prueba. ExFlow enviará correos electrónicos solo a este usuario
| **Enviar Adjuntos:**      | Enviar adjuntos incluirá el PDF del documento de compra como adjunto y los usuarios recibirán un correo electrónico por documento
| **URL de ExFlow Web:**       | N/A
| **Retrasar envío (días):** | Agregar No. de días para retrasar los recordatorios por correo electrónico enviados por las Entradas de la Cola de Trabajos
| **Escenario de Correo Electrónico:**       | Usar ExFlow Predeterminado si se conecta a una cuenta de correo electrónico separada con el mismo escenario

| Estadísticas |  | 
|:-|:-|
| **Último Enviado**: | Muestra la fecha y hora del último recordatorio enviado
| **No. de Registros de Correo Electrónico**: | Muestra No. de registros de correo electrónico
| **No. de Entradas de Error**: | Muestra No. de entradas de error
<br/><br/>