---
title: Usuario de ExFlow
sidebar_position: 2
hide_title: true
custom_edit_url: null
---
## Usuario de ExFlow

Para poder iniciar sesión en ExFlow Web, es necesario crear "Usuarios de ExFlow".

Agregar un nuevo usuario creará automáticamente un Grupo de Aprobación con el
mismo nombre.<br/>


### Agregar Configuración Predeterminada para Usuarios de ExFlow

Ir a: ***Configuración --> Configuración de ExFlow***

También es posible agregar algunas configuraciones predeterminadas en la Configuración de ExFlow, como agregar un Código de Idioma predeterminado, Cliente de Aprobación Preferido o quizás un ID de Regla de Codificación de Usuario Predeterminado.
 
Una de las configuraciones es "ID de Regla de Codificación de Usuario Predeterminado". Facilita la configuración de un nuevo Usuario de ExFlow. Establezca "Regla de Codificación de Usuario Predeterminada" en la Configuración de ExFlow, agregue una nueva línea de Permiso de Usuario de ExFlow con una Empresa en particular y se aplicará la Regla de Codificación de Usuario definida previamente en la Configuración de ExFlow.

![Configuración de ExFlow - Usuarios](@site/static/img/media/exflow-setup-users-001.png)

| Configuración de ExFlow - Usuarios      |   | 
|:-|:-|
| **Código de Idioma:**                            | Agregar código de idioma para correos electrónicos enviados a los aprobadores de ExFlow
| **Cliente de Aprobación Preferido:**                | Especifica si el hipervínculo estándar en los correos electrónicos para Recordatorios y Mensajes llevará al usuario a Business Central o ExFlow Web
|**Tiempo de Espera de Selección de Aprobación**| Especifica el tiempo de espera utilizado para la selección de aprobación
|**ID de Regla de Codificación de Usuario Predeterminado**| Especifica el rol de seguridad predeterminado que se utiliza al crear nuevos aprobadores
|**ID de Rol de Administrador Predeterminado**| Especifica el rol de seguridad predeterminado que se utiliza al crear nuevos aprobadores
|**ID de Rol de Contador Predeterminado**| Especifica el rol de seguridad predeterminado que se utiliza al crear nuevos aprobadores
|**ID de Rol de Aprobador Predeterminado**| Especifica el rol de seguridad predeterminado que se utiliza al crear nuevos aprobadores
|**ID de Rol Base Predeterminado**| Especifica el rol de seguridad predeterminado que se utiliza al crear nuevos aprobadores
|**ID de Rol de Lector Predeterminado**| Especifica el rol de seguridad predeterminado que se utiliza al crear nuevos aprobadores
|**ID de Rol de Servicio Web Predeterminado**| Especifica el rol de seguridad predeterminado que se utiliza al crear nuevos aprobadores
|**ID de Rol de Comprador Predeterminado**| Especifica el rol de seguridad predeterminado que se utiliza al crear nuevos aprobadores
| **Crear Referencia de ExFlow Automáticamente:**    | Seleccione para crear Referencias de ExFlow automáticamente. <br/> Lea más en la sección [***Códigos de Referencia***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/reference-codes)
|**ID de Rol Confidencial Predeterminado**| Especifica el rol de seguridad predeterminado que se utiliza al crear nuevos aprobadores <br/> <br/> Lea más sobre permisos en la sección [***Permisos en un usuario de Business Central***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/exflow-user#permissions-on-a-business-central-user) 

<br/>


### Importar Usuarios de ExFlow desde Excel

Ir a: ***Configuración --> Configuración Manual de ExFlow --> Usuarios de ExFlow***

Además de agregar nuevos usuarios manualmente, es posible que los administradores agreguen Usuarios de ExFlow importando usuarios desde Excel "Importar Usuarios".<br/>

Para importar desde Excel, use la "Descargar Plantilla" para la hoja de cálculo de Excel.

![Lista de Usuarios de ExFlow](@site/static/img/media/exflow-users-001-export-import.png)
<br/>

### Agregar un Nuevo Usuario manualmente

Ir a: ***Configuración --> Configuración Manual de ExFlow --> Usuarios de ExFlow --> Nuevo***

![Tarjeta de Usuario de ExFlow](@site/static/img/media/exflow-user-004.png)

| Tarjeta de Usuario de ExFlow |  |
|:-|:-|
| **ID de Usuario:**                      | Agregar ID de Usuario sin Dominio
| **Nombre de Usuario:**                    | Agregar nombres completos de los Aprobadores
| **Correo Electrónico de Autenticación**          | Dirección de correo electrónico de Autenticación de Microsoft (AAD) que ExFlow utilizará para iniciar sesión en ExFlow Web y para la comunicación con los aprobadores, es decir, enviar recordatorios si el aprobador tiene documentos para aprobar y Comentarios de ExFlow desde el Panel de Discusión/Chat. <br/><br/> Este correo electrónico se recoge del usuario del sistema de Business Central durante la creación del usuario de ExFlow (el Correo Electrónico de Contacto también se llenará con la misma dirección de correo electrónico). <br/><br/> Todos los Usuarios de ExFlow deben tener un Correo Electrónico de Autenticación.
| **Correo Electrónico de Contacto:**                | Agregar un Correo Electrónico de Contacto si los recordatorios y notificaciones de ExFlow deben enviarse a este correo electrónico en lugar de la dirección de Correo Electrónico de Autenticación. <br/><br/> El Correo Electrónico de Contacto es un campo opcional. 
| **Código de Idioma:**                | En qué idioma se enviarán los correos electrónicos
| **Cliente de Aprobación Preferido:**    | Especifica si el hipervínculo en los correos electrónicos para Recordatorios y Mensajes llevará al usuario a Business Central o ExFlow Web
| **Acceso Completo a Documentos:**         | Especifica si el usuario debe tener acceso a los documentos de ExFlow en todas las empresas
| **Usuario del Sistema:**                  | Especifica si el usuario de ExFlow también es un usuario del sistema válido.
| **Nombre del Usuario del Sistema:**             | Usuario del Sistema Conectado.
| **Nombre Anterior del Usuario del Sistema:**    | Si se cambia el Usuario del Sistema conectado, este campo mostrará el valor anterior
| **Zona Horaria:**    | Muestra la zona horaria del usuario para presentar la marca de tiempo en la hora local
| **Bloqueado:**                      | Esto mostrará si el Aprobador está bloqueado en todas las empresas <br/>Lea más en la sección [***Aprobador que Deja la Empresa***.](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/exflow-user#approver-leaving-the-company)



#### Recordatorios por Correo Electrónico
| Recordatorios por Correo Electrónico |  |
|:-|:-|
| **Documentos No Aprobados:**         | Seleccione Sí/No si ExFlow debe enviar correos electrónicos si el aprobador tiene documentos para aprobar
| **Panel de Discusión:**             | Seleccione Sí/No si ExFlow debe enviar correos electrónicos si se menciona al aprobador en un Panel de Discusión/Chat
| **Recordatorio de Factura de Contrato:**    | Seleccione Sí/No si ExFlow debe enviar correos electrónicos si faltan facturas de contrato

Tanto los documentos no aprobados como los comentarios no leídos seguirán apareciendo en ExFlow Web.


#### Notificaciones de Business Central
Si el Usuario de ExFlow es un Usuario del Sistema, se pueden agregar notificaciones en Business Central.

| Notificaciones de Business Central |  |
|:-|:-|
| **Documentos No Aprobados:**         | Seleccione Sí/No si ExFlow debe mostrar notificaciones para documentos no aprobados para el aprobador (Usuario del Sistema) en la página del Centro de Roles
| **Panel de Discusión:**             | Seleccione Sí/No si ExFlow debe mostrar notificaciones para menciones en un Panel de Discusión/Chat para el aprobador (Usuario del Sistema) en la página del Centro de Roles
| **Recordatorio de Factura de Contrato:**    | Seleccione Sí/No si ExFlow debe enviar notificaciones si faltan facturas de contrato



Lea más sobre Notificaciones en la sección [***Flujo de Aprobación --> Notificaciones en Business Central.***](https://docs.signupsoftware.com/business-central/docs/user-manual/approval-workflow/notifications-in-business-central#notifications-in-business-central)


<br/><br/>

### Agregar acceso a la empresa y rol de permiso web bajo Permisos

![Tarjeta de Usuario de ExFlow](@site/static/img/media/exflow-user-permissions-001.png)

| Permisos|  |
|:-|:-|
| **Nombre de la Empresa:**             | Agregar empresa de la lista a la que el usuario debe tener acceso. Para poder etiquetar a un aprobador, el usuario necesita tener acceso a la empresa en la que se crea el documento
| **Rol de Permiso Web:**      | Todos los Usuarios de ExFlow necesitan un Nivel de Derecho de Usuario Web para ExFlow Web   <br/> El conjunto de permisos en el usuario de ExFlow es solo para permisos web   <br/>El Usuario de ExFlow que debe administrar documentos en ExFlow necesita ser un Usuario del Sistema para poder abrir las Páginas de ExFlow.     <br/><br/>Lea más abajo cómo [***Crear un Usuario del Sistema***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/exflow-user#create-a-system-user)    <br/><br/>**Aprobador:** <br/>El aprobador puede Aprobar, Rechazar o poner un documento en Espera      <br/>El aprobador solo tiene acceso a los documentos donde está incluido en el flujo de aprobación. No se permiten cambios<br/><br/>**Aprobador (Poder):** <br/>Mismos permisos que el Aprobador. Agregar y Reenviar a otro Aprobador. Se permiten agregar o cambiar en la codificación, es decir, Cuenta G/L o Dimensiones       <br/><br/>**Aprobador (Súper):** <br/>Mismos permisos que el Usuario Poder. Ver todos los documentos aprobados en el Historial de ExFlow       <br/><br/> **Admin:** <br/>Permiso de administrador en ExFlow Web. Este usuario puede hacer configuraciones que se aplican a todos los Aprobadores en ExFlow Web.      <br/><br/> Lea más sobre esto en la sección [***Permisos de Nivel de Usuario Web***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/web-user-level-permissions)
| **ID de Regla de Codificación de Usuario:**              | Si un Aprobador debe poder hacer cambios en la codificación en la línea del documento en ExFlow Web, se pueden usar las Reglas de Codificación de Usuario de ExFlow para decidir/restringir qué valores puede seleccionar. Todos los Aprobadores necesitan una Regla de Codificación         <br/>Lea más sobre esto en la sección [***Funcionalidad Empresarial --> Reglas de Codificación de Usuario***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/user-coding-rules#user-coding-rules)
| **Número de Recurso Relacionado:**             | Es posible conectar un Recurso con un usuario de ExFlow, para agregar automáticamente un Aprobador específico desde "Persona Responsable" en el Proyecto <br/>Lea más en la sección [***Funcionalidad Empresarial --> Flujo de Aprobación Dinámico para Proyectos***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/approval-rules#dynamic-approval-flow-for-projects)
| **Código de Comprador Relacionado:**           | Agregar Comprador para enviar recordatorio si faltan Recibos de Compra. Esto también requiere la Configuración de Correo Electrónico de ExFlow. O para construir la regla de aprobación basada en el Comprador
| **Filtro de Dimensión:**                 | Extenderá el Permiso de los Aprobadores para ver el historial en la Búsqueda en ExFlow Web <br/>El aprobador podrá ver todos los documentos con este valor de dimensión incluido
| **Reemplazado por Usuario:**                 | Si el Aprobador está bloqueado. Lea más en [***Aprobador que Deja la Empresa***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/exflow-user#approver-leaving-the-company)
| **Monto Máximo para Aprobación Final:**    | Especifica el monto máximo de aprobación para el Aprobador seleccionado. Solo aplicable cuando el Usuario es el último aprobador en un flujo de aprobación
| **Bloqueado:**                          | Si el Aprobador está bloqueado. Lea más en [***Aprobador que Deja la Empresa***.](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/exflow-user#approver-leaving-the-company)
|**Acceso a Documentos Confidenciales**|  Especifica si el usuario tiene acceso para ver Documentos Confidenciales o no. Lea más en [***Documentos Confidenciales***.](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/confidental-documents#confidential-documents)

<br/>

### Agregar un Reemplazo Durante el Tiempo de Vacaciones

Ir a: ***Configuración --> Configuración Manual de ExFlow --> Usuarios de ExFlow (lista)*** o a través de ***''Usuario de ExFlow (tarjeta)''***

Cuando un usuario está ausente o de vacaciones, se puede asignar un reemplazo que pueda
manejar sus documentos.

Haga clic en "Agregar Reemplazo".

![Tarjeta de Usuario de ExFlow](@site/static/img/media/replacer-001.png)

Un usuario puede ser reemplazado en una sola empresa o en todas las empresas, pero solo si el reemplazo tiene acceso a la empresa. El campo ''Todas las empresas'' está habilitado por defecto, pero si el aprobador solo debe ser reemplazado en una empresa específica, entonces seleccione esa empresa en el campo Empresa. El campo ''Todas las Empresas'' se desmarcará.

El siguiente paso es agregar el Reemplazo para el Aprobador, en el campo ''Reemplazo''.

Recuerde siempre establecer una fecha de inicio y una fecha de finalización.

Haga clic en "Agregar Reemplazo" cuando toda la información esté completa.

![Reemplazo de ExFlow](@site/static/img/media/replacer-002.png)

El reemplazo ahora se ha agregado al Grupo de Aprobación de los Aprobadores. El usuario reemplazado aún puede aprobar incluso si hay un reemplazo en su lugar. Ambos pueden aprobar. Ambos recibirán notificaciones por correo electrónico.

![Tarjeta del Grupo de Aprobación de ExFlow](@site/static/img/media/approval-group-008.png)
<br/><br/>

### Aprobador que Deja la Empresa

Ir a: ***Configuración --> Configuración Manual de ExFlow --> Usuario de ExFlow***

Seleccione el usuario que se va.

Elija una empresa a la vez y haga clic en "Bloquear/Desbloquear Usuario".

![Tarjeta de Usuario de ExFlow](@site/static/img/media/exflow-user-006.png)

![Bloquear Usuario](@site/static/img/media/block-user-001.png)

Al bloquear al usuario, agregue un reemplazo en el campo **"Nuevo Usuario"**. Esto actualiza los documentos en los flujos de trabajo de aprobación.

Seleccione la casilla **"Reemplazar Historial"** para dar al nuevo usuario acceso a los documentos históricos de los usuarios bloqueados. <br/>

Si el documento no está aprobado en el Estado de Aprobación, entonces el usuario bloqueado será automáticamente ''Aprobado'' bajo los *''Aprobadores de Línea de Documento''*, junto con el comentario *''Aprobado porque el usuario fue bloqueado.''*. El reemplazo se agregará automáticamente, como el usuario actual en lugar del usuario bloqueado.<br/>

Para documentos aprobados, pero aún no publicados, el reemplazo se agregará a los *''Aprobadores de Línea de Documento''* junto con el comentario ''Agregado debido al reemplazo de historial''. <br/>

En el Historial de Estado de Aprobación de ExFlow, el reemplazo se agregará a los *Aprobadores de Línea de Documento Publicados*, junto con el comentario ''AA reemplazado por BB''. <br/>

Seleccione la **"Reemplazar Regla de Aprobación y Reglas de Codificación"** para reemplazar automáticamente al usuario bloqueado en todas las reglas existentes. O cree/cambie en Aprobaciones y reglas manualmente según la situación.

Cuando el Usuario de ExFlow está bloqueado en todas las empresas, la Tarjeta de Usuario se bloqueará automáticamente y se ocultará de la Lista de Usuarios de ExFlow.

Los administradores pueden ver a los Usuarios Bloqueados ocultos con la función "Ver/Ocultar Bloqueados".

Para ver quién está reemplazando al usuario bloqueado, abra la Tarjeta de Usuario de ExFlow.

![Tarjeta de Usuario de ExFlow](@site/static/img/media/exflow-user-007.png)
<br/><br/>

### Aprobador que Dejó la Empresa, Regresa

Ir a: ***Configuración --> Configuración Manual de ExFlow --> Usuario de ExFlow***

Para reinstalar a un aprobador que ha sido bloqueado, haga clic en Ver/Ocultar Bloqueados desde la lista de Usuarios de ExFlow para mostrar todos los usuarios bloqueados. Seleccione Usuario y haga clic en ''Bloquear/Desbloquear Usuario''.

![Permisos de la Tarjeta de Usuario de ExFlow](@site/static/img/media/exflow-user-permissions-002.png)

Haga clic en "Sí" en la pregunta Desbloquear.

![Desbloquear Usuario](@site/static/img/media/do-you-want-to-unblock-001.png)

El usuario que regresa ahora debe ser agregado manualmente en las reglas de Aprobación y Codificación nuevamente si se usó "Reemplazar Regla de Aprobación y Reglas de Codificación" al bloquear al usuario.
<br/><br/>

### Aprobador cambiando Dirección de Correo Electrónico

Ir a: ***Configuración --> Configuración Manual de ExFlow --> Usuario de ExFlow***

Cree un nuevo Usuario de ExFlow con la nueva dirección de correo electrónico.
Abra el usuario con la dirección de correo electrónico anterior y use la función Bloquear/Desbloquear Usuario. Y agregue el nuevo usuario en el campo "Nuevo Usuario" y marque tanto "Acceso al Historial" como "Reemplazar Regla de Aprobación".

## Crear un Usuario del Sistema

Ir a: ***Usuario Estándar de Business Central***

El Usuario de ExFlow también se puede crear desde el Usuario de Business Central, utilizando “Crear Usuario de ExFlow”. La acción se puede alcanzar desde la tarjeta de Usuario de Business Central, o la página principal de “Usuarios”.

![Usuario de Business Central](@site/static/img/media/business-central-user-001.png)

En la página de Usuarios, seleccione uno o varios Usuarios y haga clic en “Crear Usuario de ExFlow”. Esta acción abre una nueva página que muestra una tabla temporal con los usuarios seleccionados presentando todos los valores que se copiarán a los Usuarios de ExFlow una vez completado.

La columna “Usuario de ExFlow Existe” en la tabla muestra si el Usuario de ExFlow ya ha sido creado o no. Todos los demás valores de todos los demás campos restantes se han copiado de la tarjeta de Usuario de Business Central, pero se pueden modificar si es necesario.

![Tarjeta de Usuario de ExFlow - Usuario del Sistema Asociado](@site/static/img/media/business-central-user-002.png)

El ID de Regla de Codificación de Usuario se agregará automáticamente en la nueva tarjeta de Usuario de ExFlow creada, dependiendo del valor seleccionado en “ID de Regla de Codificación de Usuario Predeterminado” en la Configuración de ExFlow.

El Usuario de Business Central se asociará automáticamente al Usuario de ExFlow como un Usuario del Sistema. Si se crea un Usuario de ExFlow antes que el usuario del sistema, simplemente use ''Asociar el usuario'' para conectarse al usuario del sistema. O use ''Asociar al Usuario de ExFlow'', desde la lista de Usuarios.

Los Conjuntos de Permisos de Usuario se actualizarán automáticamente en la tarjeta de Usuario para los nuevos Usuarios de ExFlow creados. Dependiendo del Rol o Rol de Permiso Web que hayan especificado, el Usuario de Business Central se actualizará con EX ADMIN o EX APPROVER.

### Permisos en un usuario de Business Central
Estos son todos los conjuntos de permisos disponibles para usar en un usuario del sistema.

| Conjunto de permisos |  |
|:-|:-|
|**EX BASE**| Conjunto de permisos que se otorga automáticamente al instalar ExFlow, esto es necesario para poder acceder a las páginas y tarjetas que tienen funcionalidad de ExFlow (como Orden de Compra, Cotización de Compra, etc.)<br/>
|**EX ADMIN**| Acceso completo a todas las tablas y páginas de ExFlow.<br/>
|**EX ACCOUNTANT**| Acceso limitado a las páginas. Sin acceso a las páginas de configuración (excepto las páginas de refacturación). Puede administrar Usuarios de ExFlow.<br/>
|**EX READER**| Igual que EX BASE pero solo con permiso de lectura.<br/>
|**EX APPROVER**| Acceso a la Búsqueda de ExFlow y Documentos de Aprobación de ExFlow. Utilizado para aprobar facturas dentro de Business Central.<br/>
|**EX PURCHASER**| Acceso para usar funciones relacionadas con ExFlow en Órdenes de Compra y Cotizaciones, como agregar aprobadores, cambiar el flujo de aprobación. También acceso al Estado de Orden/Cotización de ExFlow.<br/>
|**EX WEB SERVICE**| Utilizado para la web y se asigna automáticamente al crear la Aplicación desde la configuración de ExFlow. Necesario solo para ExFlow Web e Importar documentos a través del servicio web.
|**EX CONFIDENTIAL**| Utilizado para manejar documentos confidenciales.
<br/>