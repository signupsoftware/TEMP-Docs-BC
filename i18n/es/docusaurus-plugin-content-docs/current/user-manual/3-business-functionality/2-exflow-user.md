---
title: Usuario de ExFlow
sidebar_position: 2
hide_title: true
custom_edit_url: null
---
## Usuario de ExFlow

Vaya a: **Usuario de ExFlow**

Para poder iniciar sesión en ExFlow Web, es necesario crear "Usuarios de ExFlow". Añadir un nuevo usuario de ExFlow creará automáticamente un Grupo de Aprobación con el mismo nombre.

## Crear nuevos Usuarios de ExFlow

Los usuarios de ExFlow pueden crearse a través del [Asistente de Inicio](https://docs.exflow.cloud/business-central/docs/user-manual/welcome-to-exflow/get-started#get-started-wizard), [Exportación/Importación](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/export-import-setup), o manualmente mediante Importación de Excel o creando una nueva Ficha de Usuario de ExFlow.

### Importar Usuarios de ExFlow desde Excel

Vaya a: ***Configuración de ExFlow - Descripción general --> Usuario de ExFlow***

Comience presionando ''Descargar Plantilla'' para obtener la Plantilla de Excel. 

Introduzca toda la información relacionada con los usuarios de ExFlow y los Permisos de Usuario (de ExFlow). Guarde el archivo Excel e impórtelo mediante la función "Importar Usuarios".<br/>

![Lista de Usuarios de ExFlow](@site/static/img/media/exflow-users-001-export-import.png)


### Añadir un Nuevo Usuario manualmente

Vaya a: ***Configuración de ExFlow - Descripción general --> Usuario de ExFlow --> New***

Introduzca toda la información necesaria sobre el nuevo Usuario de ExFlow, los campos obligatorios están marcados con estrella:

![Ficha de Usuario de ExFlow](@site/static/img/media/exflow-user-004.png)

El usuario de ExFlow aparecerá como ''Bloqueado'' hasta que se añadan todos los campos marcados con estrella.

#### Ficha de Usuario de ExFlow - Menú

| Menú de ExFlow|  |
|:-|:-|
|Añadir Sustituto| Añada un sustituto, cuando sea necesario, al usuario de ExFlow. Lea más sobre esto [aquí](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/exflow-user#add-a-replacer-during-vacation-time)
|Establecer Perfil ExFlow Predeterminado| Establece ExFlow como Centro de Rol Predeterminado para el usuario de Business Central asociado.
|Grupo de Aprobación| Lea más sobre esto [aquí](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/approval-groups)
|Asociar el usuario| Asocie el Usuario de ExFlow con un Usuario del Sistema. Lea más sobre esto [aquí](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/exflow-user#create-a-system-user)
|Eliminar enlace|Elimine el enlace asociado entre el Usuario de ExFlow y el Usuario del Sistema.
|Tamaños de FactBox de Usuario| Establezca la configuración predeterminada de FactBox para un usuario de ExFlow. Lea más sobre esto [aquí](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/set-factbox-default-size)
|Importar Usuarios| Importe usuarios de ExFlow. Lea más en [Crear nuevos Usuarios de ExFlow](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/exflow-user#create-new-exflow-users)
|Mostrar Últimos Errores| Muestra si hay algún error de Paquetes de Configuración para el paquete de Datos de ExFlow al usar el archivo de Excel ''Importar Usuarios (de ExFlow)''.
|Enviar Recordatorio | Envíe un recordatorio al Usuario de ExFlow específico. Lea más sobre esto [aquí](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/exflow-email-setup)
|*Acciones*|
|Crear Referencia de ExFlow | Crea una Referencia de ExFlow para el Nombre de Usuario de ExFlow específico. Lea más sobre [Referencia de ExFlow](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/reference-codes#reference-codes)
|Acciones --> Otros (mismos botones que en el Menú de ExFlow)|

#### Campos Generales

| Ficha de Usuario de ExFlow |  |
|:-|:-|
| **ID de Usuario:**                      | Añadir ID de Usuario sin Dominio
| **Nombre de Usuario:**                    | Añadir nombres completos de los Aprobadores
| **Correo Electrónico de Autenticación**          | Dirección de correo electrónico de Autenticación de Microsoft (AAD) que ExFlow utilizará para iniciar sesión en ExFlow Web y para la comunicación con los aprobadores, es decir, enviar recordatorios si el aprobador tiene documentos para aprobar y Comentarios de ExFlow desde el Panel de Discusión/Chat. <br/><br/> Este correo electrónico se recoge del usuario del sistema de Business Central durante la creación del usuario de ExFlow (el Correo Electrónico de Contacto también se rellenará con el mismo correo electrónico). <br/><br/> Todos los Usuarios de ExFlow deben tener un Correo Electrónico de Autenticación.
| **Correo Electrónico de Contacto:**                | Añadir un Correo Electrónico de Contacto si los recordatorios y notificaciones de ExFlow deben enviarse a este correo electrónico en lugar de a la dirección de Correo Electrónico de Autenticación. <br/><br/> El Correo Electrónico de Contacto es un campo opcional. 
| **Código de Idioma:**                | En qué idioma se enviarán los correos electrónicos
| **Cliente de Aprobación Preferido:**    | Especifica si el hipervínculo en los correos electrónicos para Recordatorios y Mensajes llevará al usuario a Business Central o a ExFlow Web
| **Acceso Completo a Documentos:**         | Especifica si el usuario debe tener acceso a los documentos de ExFlow en todas las empresas
| **Usuario del Sistema:**                  | Especifica si el usuario de ExFlow también es un usuario del sistema válido.
| **Nombre del Usuario del Sistema:**             | Usuario del Sistema Conectado.
| **Nombre del Usuario del Sistema Anterior:**    | Si el Usuario del Sistema conectado se cambia, este campo mostrará el valor anterior
| **Zona Horaria:**    | Muestra la zona horaria del usuario para presentar la marca de tiempo en la hora local
| **Bloqueado:**                      | Esto mostrará si el Aprobador está bloqueado en todas las empresas <br/>Lea más en la sección [***Aprobador que Deja la Empresa***.](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/exflow-user#approver-leaving-the-company)


#### Recordatorios por Correo Electrónico

| Recordatorios por Correo Electrónico |  |
|:-|:-|
| **Documentos No Aprobados:**         | Seleccione Sí/No si ExFlow debe enviar correos electrónicos si el aprobador tiene documentos para aprobar
| **Panel de Discusión:**             | Seleccione Sí/No si ExFlow debe enviar correos electrónicos si el aprobador es mencionado en un Panel de Discusión/Chat
| **Recordatorio de Factura de Contrato:**    | Seleccione Sí/No si ExFlow debe enviar correos electrónicos si faltan facturas de contrato

Tanto los documentos no aprobados como los comentarios no leídos seguirán apareciendo en ExFlow Web.


#### Notificaciones de Business Central

Si el Usuario de ExFlow está asociado a un Usuario del Sistema, se pueden añadir notificaciones en Business Central.

| Notificaciones de Business Central |  |
|:-|:-|
| **Documentos No Aprobados:**         | Seleccione Sí/No si ExFlow debe mostrar notificaciones para documentos no aprobados para el aprobador (Usuario del Sistema) en la página del Centro de Roles
| **Panel de Discusión:**             | Seleccione Sí/No si ExFlow debe mostrar notificaciones para menciones en un Panel de Discusión/Chat para el aprobador (Usuario del Sistema) en la página del Centro de Roles
| **Recordatorio de Factura de Contrato:**    | Seleccione Sí/No si ExFlow debe enviar notificaciones si faltan facturas de contrato

Lea más sobre Notificaciones en la sección [***Flujo de Aprobación --> Notificaciones en Business Central.***](https://docs.signupsoftware.com/business-central/docs/user-manual/approval-workflow/notifications-in-business-central#notifications-in-business-central)


### Ficha de Usuario de ExFlow - Permisos 

Vaya a: **Ficha de Usuario de ExFlow --> Permisos**

| Menú de Permisos |  |
|:-|:-|
|Nueva Línea|Añadir una nueva línea
|Eliminar Línea| Eliminar la línea (solo aplicable para eliminar si no existen registros)
|Bloquear/Desbloquear Usuario| Bloquear o Desbloquear un Usuario de ExFlow. Un usuario activo de ExFlow con historial (registros) no puede ser eliminado, solo reemplazado. Lea más sobre esto [aquí](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/exflow-user#approver-who-left-the-company-returns)
|Filtros de Dimensión de Usuario| Añadir dimensiones al Usuario de ExFlow
|Permiso de Diario de Importación para Comprador| Dar acceso a un comprador a un diario. Lea más sobre esto [aquí](https://docs.exflow.cloud/business-central/docs/user-manual/approval-workflow/purchaser-view#import-journal-permission-for-purchaser)


#### Añadir acceso a la empresa y rol de permiso web bajo Permisos

Especifique el Permiso de Usuario de ExFlow bajo ''Permisos''.

| Permisos|  |
|:-|:-|
| **Nombre de la Empresa:**             | Añadir empresa de la lista a la que el usuario debe tener acceso. Para poder etiquetar a un aprobador, el usuario necesita tener acceso a la empresa en la que se crea el documento
| **Rol de Permiso Web:**      | Todos los Usuarios de ExFlow necesitan un Nivel de Derecho de Usuario Web para ExFlow Web.   <br/> El permiso establecido en el usuario de ExFlow es solo para permiso web.   <br/> El Usuario de ExFlow que debe administrar documentos en ExFlow necesita ser un Usuario del Sistema para poder abrir Páginas de ExFlow.     <br/><br/>Lea más a continuación sobre cómo [***Crear un Usuario del Sistema***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/exflow-user#create-a-system-user)    <br/><br/>**Aprobador:** <br/>El Aprobador puede Aprobar, Rechazar o poner un documento en Espera      <br/>El aprobador solo tiene acceso a documentos donde está incluido en el flujo de aprobación. No se permiten cambios<br/><br/>**Aprobador (Poder):** <br/>Mismo permiso que el Aprobador. Añadir y Reenviar a otro Aprobador. Se permiten añadir o cambiar en la codificación, es decir, Cuenta G/L o Dimensiones       <br/><br/>**Aprobador (Súper):** <br/>Mismo permiso que el Usuario Poder. Ver todos los documentos aprobados en el Historial de ExFlow       <br/><br/> **Admin:** <br/> Permiso de Administrador en ExFlow Web. Este usuario puede hacer configuraciones que se aplican a todos los Aprobadores en ExFlow Web.      <br/><br/> Lea más sobre esto en la sección [***Permisos de Nivel de Usuario Web***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/web-user-level-permissions)
| **ID de Regla de Codificación de Usuario:**              | Si un Aprobador debe poder hacer cambios en la codificación en la línea del documento en ExFlow Web, se pueden usar Reglas de Codificación de Usuario de ExFlow para decidir/restringir qué valores puede seleccionar. Todos los Aprobadores necesitan una Regla de Codificación         <br/>Lea más sobre esto en la sección [***Funcionalidad Empresarial --> Reglas de Codificación de Usuario***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/user-coding-rules#user-coding-rules)
| **Número de Recurso Relacionado:**             | Es posible conectar un Recurso con un usuario de ExFlow, para añadir automáticamente un Aprobador específico desde "Persona Responsable" en el Proyecto <br/>Lea más en la sección [***Funcionalidad Empresarial --> Flujo de Aprobación Dinámico para Proyectos***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/approval-rules#dynamic-approval-flow-for-projects)
| **Código de Comprador Relacionado:**           | Añadir Comprador para enviar recordatorio si faltan Recepciones de Compra. Esto también requiere la Configuración de Correo Electrónico de ExFlow. O para construir la regla de aprobación basada en el Comprador
| **Filtro de Dimensión:**                 | Ampliará el Permiso del Aprobador para ver el historial en la Búsqueda en ExFlow Web <br/>El Aprobador podrá ver todos los documentos con este valor de dimensión incluido
| **Reemplazado por Usuario:**                 | Si el Aprobador está bloqueado. Lea más en [***Aprobador que Deja la Empresa***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/exflow-user#approver-leaving-the-company)
| **Monto Máximo para Aprobación Final:**    | Especifica el monto máximo de aprobación para el Aprobador seleccionado. Solo aplicable cuando el Usuario es el último aprobador en un flujo de aprobación
| **Bloqueado:**                          | Si el Aprobador está bloqueado. Lea más en [***Aprobador que Deja la Empresa***.](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/exflow-user#approver-leaving-the-company)
|**Acceso a Documentos Confidenciales**|  Especifica si el usuario tiene acceso para ver Documentos Confidenciales o no. Lea más en [***Documentos Confidenciales***.](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/confidental-documents#confidential-documents)
|**Verificar configuración de correo electrónico**| Especifica si se debe mostrar una notificación en el Centro de funciones para el Usuario del sistema asociado si falta la Configuración/Cuenta de correo electrónico.


### Añadir Configuración Predeterminada para Usuarios de ExFlow

Vaya a: ***Configuración de ExFlow - Descripción general --> ExFlow Setup --> Users***

Los conjuntos de permisos se añaden como predeterminados en la sección ''Usuarios'' en la Configuración de ExFlow.

Otras configuraciones predeterminadas para los usuarios de ExFlow pueden especificarse en la Configuración de ExFlow, como: Código de Idioma Predeterminado, Cliente de Aprobación Preferido o/y un ID de Regla de Codificación de Usuario Predeterminado.
 
Añada un “ID de Regla de Codificación de Usuario Predeterminado”, para facilitar la configuración de un nuevo Usuario de ExFlow. Al establecer una “Regla de Codificación de Usuario Predeterminada” aquí, se rellenará al añadir una nueva línea de Permiso de Usuario de ExFlow a nivel de Empresa en la Ficha de Usuario de ExFlow --> Permisos.

![Configuración de ExFlow - Usuarios](@site/static/img/media/exflow-setup-users-001.png)

| Configuración de ExFlow - Usuarios      |   | 
|:-|:-|
| **Código de Idioma:**                            | Añadir código de idioma para correos electrónicos enviados a los aprobadores de ExFlow
| **Cliente de Aprobación Preferido:**                | Especifica si el hipervínculo estándar en los correos electrónicos para Recordatorios y Mensajes llevará al usuario a Business Central o a ExFlow Web
|**Tiempo de Espera de Selección de Aprobación**| Especifica el tiempo de espera utilizado para la selección de aprobación
|**ID de Regla de Codificación de Usuario Predeterminada**| Especifica el rol de seguridad predeterminado que se utiliza al crear nuevos aprobadores
|**ID de Rol de Administrador Predeterminado**| Especifica el rol de seguridad predeterminado que se utiliza al crear nuevos aprobadores
|**ID de Rol de Contador Predeterminado**| Especifica el rol de seguridad predeterminado que se utiliza al crear nuevos aprobadores
|**ID de Rol de Aprobador Predeterminado**| Especifica el rol de seguridad predeterminado que se utiliza al crear nuevos aprobadores
|**ID de Rol Base Predeterminado**| Especifica el rol de seguridad predeterminado que se utiliza al crear nuevos aprobadores
|**ID de Rol de Lector Predeterminado**| Especifica el rol de seguridad predeterminado que se utiliza al crear nuevos aprobadores
|**ID de Rol de Servicio Web Predeterminado**| Especifica el rol de seguridad predeterminado que se utiliza al crear nuevos aprobadores
|**ID de Rol de Comprador Predeterminado**| Especifica el rol de seguridad predeterminado que se utiliza al crear nuevos aprobadores
| **Crear Referencia de ExFlow Automáticamente:**    | Seleccione para crear Referencias de ExFlow automáticamente. <br/> Lea más en la sección [***Códigos de Referencia***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/reference-codes)
|**ID de Rol Confidencial Predeterminado**| Especifica el rol de seguridad predeterminado que se utiliza al crear nuevos aprobadores <br/> <br/> Lea más sobre permisos en la sección [***Permisos en un usuario de Business Central***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/exflow-user#permissions-on-a-business-central-user) 


## Escenarios de Usuario de ExFlow 

### Añadir un Sustituto Durante el Tiempo de Vacaciones

Vaya a: ***Configuración de ExFlow - Descripción general --> Usuario de ExFlow (list)*** o a través de ***''ExFlow User (card)''***

Cuando un usuario está ausente o de vacaciones, se puede asignar un sustituto que pueda manejar sus documentos.

Haga clic en "Añadir Sustituto".


![Ficha de Usuario de ExFlow](@site/static/img/media/replacer-001.png)

Un usuario puede ser reemplazado en una sola empresa o en todas las empresas, pero solo si el sustituto tiene acceso a la empresa. El campo ''Todas las empresas'' está habilitado por defecto, pero si el aprobador solo debe ser reemplazado en una empresa específica, entonces seleccione esa empresa en el campo Empresa. El campo ''Todas las Empresas'' se desmarcará. 

El siguiente paso es añadir el Sustituto para el Aprobador, en el campo ''Sustituto''. 
 
Recuerde siempre establecer una fecha de inicio y una fecha de finalización. 

Haga clic en "Añadir Sustituto" cuando toda la información esté completa.

![Sustituto de ExFlow](@site/static/img/media/replacer-002.png)

El sustituto ahora se ha añadido al Grupo de Aprobación del Aprobador. El usuario reemplazado aún puede aprobar incluso si hay un sustituto en su lugar. Ambos pueden aprobar. Ambos recibirán notificaciones por correo electrónico.

![Ficha de Grupo de Aprobación de ExFlow](@site/static/img/media/approval-group-008.png)
<br/>


### Aprobador que Deja la Empresa

Vaya a: ***Configuración de ExFlow - Descripción general --> ExFlow User***

Seleccione el usuario que se va.

Elija una empresa a la vez y haga clic en "Bloquear/Desbloquear Usuario".

![Ficha de Usuario de ExFlow](@site/static/img/media/exflow-user-006.png)

![Bloquear Usuario](@site/static/img/media/block-user-001.png)

Al bloquear al usuario, añada un sustituto en el campo **"Nuevo Usuario"**. Esto actualiza los documentos en los flujos de aprobación.

Seleccione la casilla **"Reemplazar Historial"** para dar al nuevo usuario acceso a los documentos históricos del usuario bloqueado. <br/>

Si el documento no está aprobado en el Estado de Aprobación, entonces el usuario bloqueado será automáticamente ''Aprobado'' en los *''Aprobadores de Línea de Documento''*, junto con el comentario *''Aprobado porque el usuario estaba bloqueado.''*. El sustituto se añadirá automáticamente, como el usuario actual en lugar del usuario bloqueado.<br/>

Para documentos aprobados, pero aún no publicados, el sustituto se añadirá a los *''Aprobadores de Línea de Documento''* junto con el comentario ''Añadido debido al reemplazo de historial''. <br/>

En el Historial de Estado de Aprobación de ExFlow, el sustituto se añadirá a los *Aprobadores de Línea de Documento Publicados*, junto con el comentario ''AA reemplazado por BB''. <br/>

Seleccione la **"Reemplazar Regla de Aprobación y Reglas de Codificación"** para reemplazar automáticamente al usuario bloqueado en todas las reglas existentes. O cree/cambie en Aprobaciones y reglas manualmente según la situación.

Cuando el Usuario de ExFlow está bloqueado en todas las empresas, la Ficha de Usuario se bloqueará automáticamente y se ocultará de la Lista de Usuarios de ExFlow.

Los administradores pueden ver Usuarios Bloqueados ocultos con la función "Ver/Ocultar Bloqueados".

Para ver quién está reemplazando al usuario bloqueado, abra la Ficha de Usuario de ExFlow.

![Ficha de Usuario de ExFlow](@site/static/img/media/exflow-user-007.png)
<br/><br/>

### Cambiar el ID de usuario de ExFlow

Si un aprobador (activo) desea cambiar su ID de usuario de ExFlow, su usuario de ExFlow actual debe ser bloqueado y reemplazado por un nuevo usuario de ExFlow con el nuevo ID de usuario.

En estos casos, lea más y siga los pasos que se indican en [El aprobador abandona la empresa](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/exflow-user#approver-who-left-the-company-returns)


### Aprobador que Dejó la Empresa, Regresa

Vaya a: ***Configuración de ExFlow - Descripción general --> ExFlow User --> Permisos***

Para reinstaurar a un aprobador que ha sido bloqueado, haga clic en Ver/Ocultar Bloqueados desde la lista de Usuarios de ExFlow para mostrar todos los usuarios bloqueados. Seleccione Usuario y haga clic en ''Bloquear/Desbloquear Usuario''.

Aparecerá una pregunta: ¿Desea desbloquear al usuario XXX? Haga clic en "Sí" en la pregunta de Desbloquear.

El usuario que regresa ahora debe añadirse manualmente en las Reglas de Aprobación y Codificación nuevamente si se utilizó "Reemplazar Regla de Aprobación y Reglas de Codificación" al bloquear al usuario.
<br/>

## Crear un Usuario del Sistema

Vaya a: ***Usuario Estándar de Business Central***

El Usuario de ExFlow también puede crearse desde el Usuario de Business Central, utilizando “Crear Usuario de ExFlow”. La acción puede alcanzarse desde la ficha del Usuario de Business Central, o desde la página principal de “Usuarios”.

![Usuario de Business Central](@site/static/img/media/business-central-user-001.png)

En la página de Usuarios, seleccione uno o varios Usuarios y haga clic en “Crear Usuario de ExFlow”. Esta acción abre una nueva página que muestra una tabla temporal con los usuarios seleccionados presentando todos los valores que se copiarán a los Usuarios de ExFlow una vez completado.

La columna “Usuario de ExFlow Existe” en la tabla muestra si el Usuario de ExFlow ya ha sido creado o no. Todos los demás valores de todos los demás campos restantes se han copiado de la ficha del Usuario de Business Central, pero pueden modificarse si es necesario.

![Ficha de Usuario de ExFlow - Usuario del Sistema Asociado](@site/static/img/media/business-central-user-002.png)

El ID de Regla de Codificación de Usuario se añadirá automáticamente en la nueva ficha de Usuario de ExFlow creada, dependiendo del valor seleccionado en “ID de Regla de Codificación de Usuario Predeterminada” en la Configuración de ExFlow.

### Asociar al Usuario de ExFlow
Vaya a: **Ficha de Usuario --> Asociar al Usuario de ExFlow**

El Usuario de Business Central se asociará automáticamente al Usuario de ExFlow como un Usuario del Sistema. Si se crea un Usuario de ExFlow antes del usuario del sistema, simplemente use ''Asociar el usuario'' para conectar al usuario del sistema con el Usuario de ExFlow. O use ''Asociar al Usuario de ExFlow'', desde la lista de Usuarios. 

Es posible asociar al usuario del sistema con el usuario de ExFlow en la Ficha de Usuario de ExFlow también.

### Permisos en un usuario de Business Central
Los Conjuntos de Permisos de Usuario se actualizarán automáticamente en la ficha del Usuario para los nuevos Usuarios de ExFlow creados. 

Dependiendo del Rol o Rol de Permiso Web que hayan especificado, el Usuario de Business Central se actualizará con EX ADMIN o EX APPROVER.

Aquí están todos los Conjuntos de Permisos de ExFlow disponibles para usar en el usuario del sistema:

| Conjunto de Permisos |  |
|:-|:-|
|**EX BASE**| Conjunto de permisos que se otorga automáticamente al instalar ExFlow, esto es necesario para poder acceder a páginas y fichas que tienen funcionalidad de ExFlow en ellas (como Orden de Compra, Cotización de Compra, etc.)<br/>
|**EX ADMIN**| Acceso completo a todas las tablas y páginas de ExFlow.<br/>
|**EX ACCOUNTANT**| Acceso limitado a páginas. Sin acceso a páginas de configuración (excepto páginas de reinvoicing). Puede administrar Usuarios de ExFlow.<br/>
|**EX READER**| Igual que EX BASE pero solo con permiso de lectura.<br/>
|**EX APPROVER**| Acceso a Búsqueda de ExFlow y Documentos de Aprobación de ExFlow. Utilizado para aprobar facturas dentro de Business Central.<br/>
|**EX PURCHASER**| Acceso para usar funciones relacionadas con ExFlow en Órdenes de Compra y Cotizaciones, como añadir aprobadores, cambiar el flujo de aprobación. También acceso a Estado de Orden/Cotización de ExFlow.<br/>
|**EX WEB SERVICE**| Utilizado para la web y se asigna automáticamente al crear la Aplicación desde la configuración de ExFlow. Necesario solo para ExFlow Web e Importar documentos a través del servicio web.
|**EX CONFIDENTIAL**| Utilizado para manejar documentos confidenciales.
<br/>
