---
title: Aplicaciones OAuth 2.0 y Configuración de Almacenamiento
sidebar_position: 5
hide_title: true
custom_edit_url: null
---
## Aplicaciones OAuth 2.0 y Configuración de Almacenamiento

Para obtener soporte con respecto a lo siguiente, por favor contacte a su departamento de TI interno o a su socio de confianza de Business Central.

### Crear una Aplicación o Principal de Servicio en MS Entra (o Azure)

Establezca un Nombre de su elección. Elija: "Cuentas en cualquier directorio organizacional" y luego haga clic en "Registrar".
 
![Configuración de ExFlow SharePoint](@site/static/img/media/sharepoint-setup-001.png)<br/>

Después de la registración, tome nota del "ID de la Aplicación (cliente)".
 
![Configuración de ExFlow SharePoint](@site/static/img/media/sharepoint-setup-002.png)<br/>

Vaya a Permisos de API para agregar un permiso.
 
![Configuración de ExFlow SharePoint](@site/static/img/media/sharepoint-setup-003.png)<br/>

Haga clic en "Microsoft Graph" y "Permisos de Aplicación". <br/>
Busque "site" y agregue el permiso: Sites.ReadWrite.All<br/>

 
![Configuración de ExFlow SharePoint](@site/static/img/media/sharepoint-setup-004.png)<br/>

Haga clic en "SharePoint" y "Permisos de Aplicación" nuevamente.<br/>
Seleccione y agregue ambos permisos: Sites.ReadWrite.All y Sites.Manage.All. <br/>

 ![Configuración de ExFlow SharePoint](@site/static/img/media/sharepoint-setup-005.png)<br/>

Conceda el consentimiento de administrador para estos permisos:

 
![Configuración de ExFlow SharePoint](@site/static/img/media/sharepoint-setup-006.png)<br/>


Los permisos deberían verse así:
 
![Configuración de ExFlow SharePoint](@site/static/img/media/sharepoint-setup-007.png)<br/>

Vaya a "Certificados y secretos".
 
![Configuración de ExFlow SharePoint](@site/static/img/media/sharepoint-setup-008.png)<br/>


Cree un secreto de cliente:
 
![Configuración de ExFlow SharePoint](@site/static/img/media/sharepoint-setup-009.png)<br/>

Copie el secreto y/o guárdelo. El secreto no será visible nuevamente. Si el secreto se olvida o se pierde, cree un nuevo secreto y reconfigure la Aplicación OAuth2.
 
![Configuración de ExFlow SharePoint](@site/static/img/media/sharepoint-setup-010.png)<br/>

Regrese a la lista de registros de aplicaciones y haga clic en Endpoints.
Copie ambos Endpoints de OAuth2.0 v2; Autorización y Token. También copie el endpoint de Microsoft Graph API.
<br/>

![Configuración de ExFlow SharePoint](@site/static/img/media/sharepoint-setup-011.png)<br/>

Completado con Entra o Azure AD o AAD.<br/><br/>


### Configurar una Aplicación OAuth2 en ExFlow

Vaya a: **Configuración de ExFlow --> Acciones --> Funciones --> Aplicaciones OAuth2**

Comience la configuración haciendo clic en "Nuevo" para crear una nueva Aplicación OAuth 2.0.
 

| Aplicaciones OAuth 2.0|![Configuración de ExFlow SharePoint](@site/static/img/media/oauth-application-001.png)
|:-|:-|
|**Solicitar Token de Acceso**|Abra la página de autorización del servicio. Se solicitarán las credenciales de inicio de sesión. El código de autorización debe copiarse en el campo Ingresar Código de Autorización.
|**Actualizar Token de Acceso**|Actualice los tokens de acceso y actualización.
<br/>

![Configuración de ExFlow SharePoint](@site/static/img/media/oauth-application-002.png)<br/>

|General||
|:-|:-|
|**Código**|Especifica el nombre del Código
|**Descripción**|Especifica la descripción del Código
|**ID de Aplicación / Cliente**| Especifica el ID de la Aplicación desde la Vista General de la Aplicación Empresarial.
|**Secreto de Cliente**| Especifica el secreto del cliente
|**Tipo de Concesión**| Especifica el tipo de concesión a utilizar. Es posible usar Código de Autorización, Credenciales de Contraseña o Credenciales de Cliente. Actualmente solo se soporta "Credenciales de Cliente".
|**URL de Redirección**| Especifica la URL de redirección, no se usa por ahora.
|**Alcance**| Especifica el alcance. Ingrese el Endpoint de Graph y agregue ".default". Asegúrese de que el endpoint se vea como lo siguiente al final: "...soft.com/.default"
<br/>

|Endpoints||
|:-|:-|
|**URL de Autorización**| Especifica la URL de autorización
|**URL de Token de Acceso**| Especifica la URL de token de acceso
|**Parámetros de URL de Autorización**| Especifica la URL de recurso, no se usa por ahora.

<br/>

Ingrese toda la información de configuración necesaria. Ingrese un código y una descripción del código. Pegue el ID de Aplicación / Cliente y el Secreto de Cliente desde el Centro de Administración de MS Entra.

Establezca el Tipo de Concesión en "Credenciales de Cliente" y la URL de alcance de MS Graph (Microsoft Graph API). <br/>

![Configuración de ExFlow SharePoint](@site/static/img/media/oauth-application-003.png)<br/>

En la sección de Endpoint, pegue las URL previamente copiadas para ambos Endpoints de Autorización y Token de OAuth2.0 v2. <br/>

Pruebe presionando "Solicitar Token de Acceso". El siguiente mensaje debería mostrarse si todo es correcto: "Token de Acceso actualizado exitosamente". <br/>

### Configuración de SharePoint
En Contenidos del Sitio, cree una nueva Biblioteca de Documentos, esta contendrá la carpeta en la que ExFlow almacenará datos. Cree una carpeta en la Biblioteca de Documentos que se acaba de crear. Esta será la ubicación de los documentos. Haga clic en la carpeta recién creada. Copie la URL completa desde el campo de dirección en el navegador, esto será necesario en la configuración a continuación.

### Configuración de Almacenamiento de Blobs para SharePoint

Vaya a: **Configuración de ExFlow -- > Acciones --> Funciones --> Gestión de Almacenamiento de Blobs (Configuración de Gestión de Almacenamiento de ExFlow)**

| Gestión de Almacenamiento de Blobs / Configuración de Gestión de Almacenamiento de ExFlow |![Configuración de ExFlow SharePoint](@site/static/img/media/storage-setup-002.png)
|:-|:-|
|**Configuración de Almacenamiento**|Configure una o más configuraciones de almacenamiento
|**Habilitar/Deshabilitar Almacenamiento de Blobs**|Active o desactive el almacenamiento de blobs

<br/>

Desde la página de Configuración de Gestión de Almacenamiento de ExFlow, haga clic en **Configuración de Almacenamiento** y luego en "Nuevo" para comenzar con la configuración.

![Configuración de ExFlow SharePoint](@site/static/img/media/storage-setup-006.png)<br/>

Ingrese un Código y una Descripción. Para Fuente de Blob, seleccione SharePoint.<br/> 

Luego haga clic en **Configurar Almacenamiento** para continuar con la configuración.

![Configuración de ExFlow SharePoint](@site/static/img/media/storage-setup-003.png)<br/>

Copie la URL de SharePoint y péguela en el campo "URL de SharePoint". Una vez que salga del campo, los valores se extraerán y se poblarán en Host, Sitio, Biblioteca de Documentos y Carpeta. Si falta alguno de los campos, lo más probable es que sea la Carpeta, es posible ingresarlos manualmente. <br/>

![Configuración de ExFlow SharePoint](@site/static/img/media/storage-setup-004.png)<br/>

Seleccione la Aplicación OAuth2 previamente creada y verifique haciendo clic en "Conectar". <br/>

Si algo está mal, como el nombre de la carpeta, aparecerá un mensaje como "No Encontrado". <br/> 

Además, si faltan permisos, aparecerá un mensaje como "No Autorizado". <br/>

Si todo está bien, el Estado de Conexión de SharePoint se establecerá en "Conectado" y los parámetros se poblarán en Id de Sitio, Id de Unidad e Id de Lista. <br/>

Ahora está bien cerrar esta página ya que la Configuración de Almacenamiento de Blobs para SharePoint está completada. <br/>

Regrese a **Configuración de Almacenamiento de ExFlow** para esta configuración y haga clic en "Habilitado". <br/>

![Configuración de ExFlow SharePoint](@site/static/img/media/storage-setup-007.png)<br/>

Cierre la Configuración de Almacenamiento de ExFlow y regrese a Configuración de Gestión de Almacenamiento de ExFlow / Gestión de Almacenamiento de Blobs.<br/>

Seleccione la configuración de SharePoint recién creada en "Código de Almacenamiento de Documentos Entrantes". <br/>

![Configuración de ExFlow SharePoint](@site/static/img/media/storage-setup-008.png)<br/>

Haga clic en "Activo" o "Habilitar/Deshabilitar Almacenamiento de Blobs". <br/>

![Configuración de ExFlow SharePoint](@site/static/img/media/storage-setup-010.png)<br/>

Si hay alguna factura publicada existente aprobada usando ExFlow, un diálogo preguntará si desea transferirlas, entonces es posible elegir Sí. <br/>

Ahora es posible verificar el estado de las facturas publicadas en el Almacenamiento de Blobs seleccionando "Acciones --> Detalles de Almacenamiento". <br/>

Haga clic en "Sincronizar Almacenamiento" para forzar una transferencia a SharePoint. <br/>

![Configuración de ExFlow SharePoint](@site/static/img/media/storage-setup-009.png)<br/>

Actualice la página de SharePoint con la carpeta creada previamente, ahora debería ser posible ver las nuevas carpetas allí. <br/>

![Configuración de ExFlow SharePoint](@site/static/img/media/storage-setup-005.png)<br/>