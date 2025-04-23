---
title: Notificaciones en Business Central
sidebar_position: 70
hide_title: true
custom_edit_url: null
---
## Notificaciones en Business Central
Si el Usuario de ExFlow es un Usuario del Sistema (asociado a un Usuario en Business Central), entonces se pueden activar las Notificaciones en Business Central. Lea más en la sección [***Usuarios de ExFlow***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/exflow-user#add-a-new-user-manually) para la configuración.

Hay cuatro tipos de mensajes de notificación. Documentos no aprobados en la empresa activa, documentos no aprobados en otras empresas, comentarios no leídos y facturas faltantes para períodos de contrato.
<br/>

### Documentos para Aprobación
Si el usuario tiene documentos para aprobar en la empresa actual, haga clic en el enlace "Aprobar los documentos":

![Notificación de ExFlow](@site/static/img/media/image336.png)

Esto abrirá una nueva página donde el usuario podrá aprobar los documentos en la empresa actual.

Si el usuario tiene documentos para aprobar en cualquier otra empresa, haga clic en el enlace "Aprobar los documentos":

![Notificación de ExFlow](@site/static/img/media/image337.png)

Esto presentará al usuario una lista similar a la siguiente:

![Documentos No Aprobados por Empresa de ExFlow](@site/static/img/media/image338.png)

Haga clic en el número a la derecha para abrir una nueva página donde el usuario podrá aprobar los documentos en la empresa seleccionada.

Lea más sobre esto en la sección [***Aprobación en Business Central.***](https://docs.signupsoftware.com/business-central/docs/user-manual/approval-workflow/approval-in-business-central#approval-in-business-central)<br/><br/>

### Panel de Discusión / Chat y Comentarios en Línea

El Panel de Discusión se puede encontrar en FactBox en "Diario de Importación", "Estado de Aprobación", "Historial de Estado de Aprobación" y "Documentos Eliminados" en Business Central.

En ExFlow Web se llama **Chat**.

Los comentarios escritos en el Panel de Discusión en Business Central o en el Chat en ExFlow Web aparecerán en ambos lugares en el documento.

Use @ y "Código de Usuario de ExFlow" para etiquetar a un aprobador. El Aprobador obtendrá automáticamente acceso a este documento incluso si el Aprobador no está incluido en el flujo de aprobación. Para poder etiquetar a un Aprobador en un documento, el aprobador necesita acceso a la empresa para la que se crea el documento, en Permisos de Usuario de ExFlow.

Es posible enviar una notificación y/o correo electrónico al Aprobador etiquetado, pero se requiere alguna configuración.

Para un Usuario de ExFlow (conectado a un "Usuario del Sistema"), se pueden activar las Notificaciones en Business Central. Lea más en la sección [***Usuarios de ExFlow***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/exflow-user#add-a-new-user-manually) para la configuración.

Si el usuario tiene comentarios para leer en la empresa actual, haga clic en el enlace "Leer comentario"

![Notificaciones de ExFlow](@site/static/img/media/notifications-new-comments-001.png)

Si el usuario tiene comentarios para leer en otras empresas, haga clic en el enlace "Leer comentario":

![Notificaciones de ExFlow - Comentarios en otras empresas](@site/static/img/media/image341.png)

Este enlace presentará al usuario una lista similar a la siguiente:

![Notificaciones de ExFlow](@site/static/img/media/image342.png)

Hacer clic en el número en la columna de la derecha abrirá una nueva página donde el usuario podrá leer comentarios en la empresa seleccionada.

### Historial de Notificaciones de Chat

Ir a: ***Historial de ExFlow --> Notificaciones de Chat de ExFlow***

Un Usuario de ExFlow puede ver las Notificaciones de Chat de ExFlow en las que ha sido etiquetado durante los últimos 90 días.

Haga doble clic en el mensaje o "Mostrar Documento" para ver y escribir un nuevo mensaje en el mismo documento.

En la "Lista de Notificaciones de Chat de ExFlow" todos los mensajes nuevos no leídos se mostrarán en texto en negrita. En la imagen de abajo, el mensaje de chat ya está leído.

![Lista de Notificaciones de Chat de ExFlow](@site/static/img/media/image343.png)

| Lista de Historial de Notificaciones de Chat |  |
|:-|:-|
|**Mostrar Documento:** |Abrir Documento para leer todo el mensaje y enviar un mensaje.
|**Mostrar No Leídos:** |Mostrar solo mensajes que no están leídos.
|**Mostrar Todos:** |Mostrar todos los mensajes de los últimos 90 días.
|**Recargar Lista:** |Recargar para ver nuevos mensajes.
|**Abrir en Excel:**| Abrir lista en Excel.

| Historial de Notificaciones de Chat |  |
|:-|:-|
|**Empresa:**| La empresa en la que se crea el documento y donde se menciona al usuario.
|**Número de Documento:** |Especifica el Número de Documento.
|**Tipo de Diario**| Especifica el área relacionada con el mensaje.
|**Número de Proveedor:** |Número de Proveedor a Pagar para el documento.
|**Comentario hecho por**| Especifica el usuario que escribió el comentario.
|**Vista Previa del Mensaje**| Muestra una vista previa del mensaje.
|**Fecha de Última Notificación:** (campo oculto) |Fecha en la que el usuario fue mencionado por última vez en el documento.

Todos los mensajes del Chat se mostrarán en el FactBox del Panel de Discusión.

![Tarjeta de Estado de Aprobación de ExFlow](@site/static/img/media/image345.png)

En ExFlow Web en la línea de documentos de la bandeja de entrada, @ se resalta en el mensaje no leído si el Aprobador está mencionado en el documento. Haga clic en el documento para abrir, leer y escribir comentarios.

![ExFlow Web - Bandeja de Entrada](@site/static/img/media/image346.png)

Todos los mensajes también se mostrarán en la Bandeja de Entrada incluso si el Aprobador no está incluido en el flujo de aprobación.

Haga clic en el enlace para abrir el documento, leer y escribir comentarios.

![ExFlow Web - Bandeja de Entrada](@site/static/img/media/image347.png)

En el documento, la burbuja es roja si hay mensajes no leídos.

![ExFlow Web - Chat del Documento](@site/static/img/media/image348.png)

![ExFlow Web - Chat del Documento](@site/static/img/media/image349.png)

### Diario de Importación - Panel de Discusión (El mensaje se enviará cuando se cree el documento)

Al agregar un comentario en el Panel de Discusión en un documento en el Diario de Importación y hacer clic en "ENVIAR", el comentario se puede ver en el FactBox a la derecha marcado con el ID del Usuario que lo creó, la Fecha y la Hora.

Si se menciona a un Usuario usando @, se puede enviar un mensaje, correo electrónico o Notificación en Business Central a los Usuarios de ExFlow que están asociados con un Usuario de Business Central.

Para los Usuarios de ExFlow que no están asociados con un Usuario de Business Central, el correo electrónico se enviará cuando se cree el documento. Esto se debe a que los Usuarios de ExFlow Web no pueden ver estos documentos o comentarios en el Diario de Importación.

Lea más en la sección [***Usuarios de ExFlow.***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/exflow-user#add-a-new-user-manually)

![Diario de Importación de ExFlow - Panel de Discusión](@site/static/img/media/image350.png)


### Estado de Aprobación - Panel de Discusión

Al agregar un comentario en el Panel de Discusión desde el Estado de Aprobación y hacer clic en "ENVIAR", el comentario se puede ver en el FactBox a la derecha marcado con el ID del Usuario que lo creó, la Fecha y la Hora. En ExFlow Web se mostrará en el Chat del Documento.

Si se menciona a un Usuario usando @, el Usuario podrá ver este documento y comentar en ExFlow Web incluso si el Usuario **no** está en el flujo de aprobación. También se puede enviar un mensaje por correo electrónico.

![Panel de Discusión](@site/static/img/media/image351.png)

Para enviar mensajes de correo electrónico desde el Panel de Discusión, se requiere alguna configuración en la Configuración de Correo Electrónico de ExFlow y Entradas de Cola de Trabajos.

### Documentos Eliminados - Panel de Discusión

El mensaje creado antes de que el documento sea eliminado se guardará en el documento en Documentos Eliminados de ExFlow.

No es posible agregar mensajes desde Documentos Eliminados debido a que los Documentos Eliminados no se pueden ver en ExFlow Web.

### Configuraciones en Usuario de ExFlow

En la Tarjeta de Usuario de ExFlow hay algunas configuraciones que se utilizan tanto para Recordatorios de ExFlow como para Comentarios de ExFlow.

**Correo Electrónico:** Ingresar dirección de correo electrónico

**Código de Idioma:** En qué idioma se enviará el correo electrónico.

**Cliente de Aprobación Preferido:** Seleccionar el entorno para configuraciones en los enlaces enviados en correos electrónicos tanto para Mensajes como para Recordatorios.

![Tarjeta de Usuario de ExFlow](@site/static/img/media/image352.png)

### Comentario a Nivel de Línea

Se puede hacer un comentario a nivel de línea en ExFlow Web, sin embargo, el comentario no aparecerá en el Panel de Discusión en Business Central ni en el Chat en ExFlow Web. Solo en la línea donde se agregó el comentario.

![ExFlow Web - Comentario en Línea del Documento](@site/static/img/media/image353.png)

El comentario se encontrará en Aprobadores de Línea de Documento en Business Central.

![Estado de Aprobación de ExFlow - Líneas del Documento](@site/static/img/media/image354.png)