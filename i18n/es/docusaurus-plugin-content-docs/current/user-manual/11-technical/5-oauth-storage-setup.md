---
title: Configuración de Aplicaciones OAuth 2.0 y Almacenamiento
sidebar_position: 5
hide_title: true
custom_edit_url: null
---
## Configuración de Aplicaciones OAuth 2.0 y Almacenamiento

Para obtener soporte sobre lo siguiente, contacte a su departamento de TI interno o socio de confianza de Business Central.

### Crear Aplicación o Principal de Servicio en MS Entra (o Azure)

Establezca un Nombre de su elección. Seleccione: ''Cuentas en cualquier directorio organizacional" y luego haga clic en ''Registrar''.
 
![Configuración de ExFlow SharePoint](@site/static/img/media/sharepoint-setup-001.png)<br/>

Después del registro, tome nota del "ID de aplicación (cliente)".
 
![Configuración de ExFlow SharePoint](@site/static/img/media/sharepoint-setup-002.png)<br/>

Vaya a Permisos de API para añadir un permiso.
 
![Configuración de ExFlow SharePoint](@site/static/img/media/sharepoint-setup-003.png)<br/>

Haga clic en ''Microsoft Graph'' y ''Permisos de aplicación''. <br/>
Busque ''site'' y añada el permiso: Sites.ReadWrite.All<br/>

 
![Configuración de ExFlow SharePoint](@site/static/img/media/sharepoint-setup-004.png)<br/>

Haga clic en ''SharePoint'' y ''Permisos de aplicación'' nuevamente.<br/>
Seleccione y añada ambos permisos: Sites.ReadWrite.All y Sites.Manage.All. <br/>

 ![Configuración de ExFlow SharePoint](@site/static/img/media/sharepoint-setup-005.png)<br/>

Otorgue el consentimiento del administrador para estos permisos:

 
![Configuración de ExFlow SharePoint](@site/static/img/media/sharepoint-setup-006.png)<br/>


Los permisos deberían verse así:
 
![Configuración de ExFlow SharePoint](@site/static/img/media/sharepoint-setup-007.png)<br/>

Vaya a ''Certificados y secretos''.
 
![Configuración de ExFlow SharePoint](@site/static/img/media/sharepoint-setup-008.png)<br/>


Cree un secreto de cliente:
 
![Configuración de ExFlow SharePoint](@site/static/img/media/sharepoint-setup-009.png)<br/>

Copie el secreto y/o guárdelo. El secreto ya no será visible. Si el secreto se olvida o se pierde, cree un nuevo secreto y reconfigure la Aplicación OAuth2.
 
![Configuración de ExFlow SharePoint](@site/static/img/media/sharepoint-setup-010.png)<br/>

Vuelva a la lista de registros de aplicaciones y haga clic en Puntos finales.
Copie ambos Puntos finales OAuth2.0 v2; Autorización y Token. También copie el punto final de la API de Microsoft Graph.
<br/>

![Configuración de ExFlow SharePoint](@site/static/img/media/sharepoint-setup-011.png)<br/>

Completado con Entra o Azure AD o AAD.<br/><br/>


### Configurar una Aplicación OAuth2 en ExFlow

Vaya a: **Configuración de ExFlow --> Acciones --> Funciones --> Aplicaciones OAuth2**

Inicie la configuración haciendo clic en ''Nuevo'' para crear una nueva Aplicación OAuth 2.0.
 

| Aplicaciones OAuth 2.0|![Configuración de ExFlow SharePoint](@site/static/img/media/oauth-application-001.png)
|:-|:-|
|**Solicitar Token de Acceso**|Abra la página web de autorización del servicio. Se solicitarán las credenciales de inicio de sesión. El código de autorización debe ser copiado en el campo Ingresar Código de Autorización. 
|**Actualizar Token de Acceso**|Actualice los tokens de acceso y actualización.
<br/>

![Configuración de ExFlow SharePoint](@site/static/img/media/oauth-application-002.png)<br/>

|General||
|:-|:-|
|**Código**|Especifica el nombre del Código
|**Descripción**|Especifica la descripción del Código 
|**ID de Aplicación / Cliente**| Especifica el ID de la Aplicación desde la Vista General de la Aplicación Empresarial.
|**Secreto de Cliente**| Especifica el secreto del cliente
|**Tipo de Concesión**| Especifica el tipo de concesión a utilizar. Es posible utilizar Código de Autorización, Credenciales de Contraseña o Credenciales de Cliente. Actualmente solo se admite ''Credenciales de Cliente''. 
|**URL de Redirección**| Especifica la URL de redirección, no en uso por ahora.
|**Ámbito**| Especifica el ámbito. Ingrese el Endpoint de Graph y añada ‘’.default.’’ Asegúrese de que el endpoint tenga el siguiente aspecto al final: ‘’…soft.com/.default’’
<br/>

|Puntos finales||
|:-|:-|
|**URL de Autorización**| Especifica la URL de autorización
|**URL de Token de Acceso**| Especifica la URL del token de acceso
|**Parámetros de URL de Autorización**| Especifica la URL del recurso, no en uso por ahora.

<br/>

Ingrese toda la información de configuración necesaria. Ingrese un código y una descripción del código. Pegue el 
ID de la Aplicación/ Cliente y el Secreto del Cliente desde el Centro de Administración de MS Entra.

Establezca el Tipo de Concesión en ''Credenciales de Cliente'' y la URL del ámbito de MS graph (API de Microsoft Graph). <br/>

![Configuración de ExFlow SharePoint](@site/static/img/media/oauth-application-003.png)<br/>

Bajo la sección de Puntos finales, pegue las URL que copió anteriormente para ambos, el Punto final de Autorización v2 de OAuth2.0 y el Punto final de Token. <br/>

Pruebe presionando "Solicitar Token de Acceso". Debería mostrarse el siguiente mensaje si todo es correcto: "Token de Acceso actualizado con éxito." <br/>

### Configuración de SharePoint
En Contenidos del Sitio, cree una nueva Biblioteca de Documentos, esta contendrá la carpeta en la que ExFlow almacenará los datos. Cree una carpeta en la Biblioteca de Documentos que acaba de crear. Esta será la ubicación de los documentos. Haga clic en la carpeta recién creada. Copie la URL completa del campo de dirección en el navegador, esto será necesario en la configuración a continuación. 

### Configuración de Almacenamiento en Blob para SharePoint

Vaya a: **Configuración de ExFlow -- > Acciones --> Funciones --> Gestión de Almacenamiento en Blob (Configuración de Almacenamiento de ExFlow)** 

![Configuración de ExFlow SharePoint](@site/static/img/media/storage-setup-002.png)

| Menú de Gestión de Almacenamiento en Blob / Configuración de Almacenamiento de ExFlow ||
|:-|:-|
|**Configuración de Almacenamiento**|Configure una o más configuraciones de almacenamiento
|**Habilitar/ Deshabilitar Almacenamiento en Blob**|Active o inactiva el almacenamiento en blob

|Gestión de Almacenamiento en Blob / Configuración de Almacenamiento de ExFlow --> General ||
|:-|:-|
|**Cache en Días**|Especifica cuántos días permanecerá el contenido en caché en BC. Después del número de días especificado, el contenido será eliminado del almacenamiento local.
|**Tamaño del Lote**| Establezca en 0 y todo se transferirá en un solo lote durante la sincronización. Establezca en > 0 y solo se transferirán esa cantidad de documentos durante la sincronización. Se aplica al trabajo programado y a la activación manual de la sincronización completa.
|**Estructura del Nombre del Blob** | Especifica el tipo de convención de nombres utilizada para la ruta a los blobs. Se recomienda dividir en una ruta como ab/cd/ef/abcdefgh
|**Activo** | Habilite el Almacenamiento en Blob para los registros activando este interruptor.
<br/>

|Gestión de Almacenamiento en Blob / Configuración de Almacenamiento de ExFlow --> Códigos de Almacenamiento||
|:-|:-|
|**Código de Almacenamiento en Blob General**| Especifica qué Código de Almacenamiento utilizar para el Almacenamiento en Blob general. Esto se utiliza cuando el desarrollador/socio desea desarrollar algo para el cliente que utiliza almacenamiento en blob pero desea controlar la estructura, los nombres y todo por sí mismo. Expuesto como una API llamada BSApi.
|**Código de Almacenamiento de Doc. Entrante**| Especifica qué Código de Almacenamiento utilizar para almacenar blobs desde registros. Esta configuración se utiliza para el almacenamiento en blob utilizado como almacenamiento para el archivo adjunto de documento entrante donde los nombres de archivo y la estructura son controlados por el Almacenamiento en Blob. También la recuperación está controlada por eventos a través del almacenamiento en blob.

Si el campo de Código de Almacenamiento en Blob General está configurado con un código de configuración de almacenamiento, que puede ser el mismo que para Entrante, puede utilizar la API de archivos que expone el Almacenamiento en Blob en ExFlow. Funciona como un sistema de archivos. Los archivos se pueden escribir o leer. La API se encuentra en el códigounit BSApi (API de Almacenamiento en Blob)
 
La funcionalidad Almacenamiento en Blob para Archivo Adjunto de Documento Entrante utiliza esencialmente el BSApi para manejar los archivos internamente.


### Configuración de Almacenamiento

Desde la página de Configuración de Gestión de Almacenamiento de ExFlow, haga clic en **Configuración de Almacenamiento** y luego en ''Nuevo'' para iniciar la configuración. 

![Configuración de ExFlow SharePoint](@site/static/img/media/storage-setup-006.png)<br/>

Ingrese un Código y una Descripción. Para Fuente de Blob, seleccione SharePoint.<br/> 

Luego haga clic en **Configurar Almacenamiento** para continuar con la configuración. 

![Configuración de ExFlow SharePoint](@site/static/img/media/storage-setup-003.png)<br/>


Copie la URL de SharePoint y péguela en el campo ''URL de SharePoint''. Una vez que salga del campo, los valores serán extraídos y poblados en Host, Sitio, Biblioteca de Documentos y Carpeta. Si alguno de los campos falta, probablemente la Carpeta, es posible ingresar esos manualmente. <br/>

![Configuración de ExFlow SharePoint](@site/static/img/media/storage-setup-004.png)<br/>

Seleccione la Aplicación OAuth2 creada previamente y verifique haciendo clic en ''Conectar''. <br/>

Si algo está mal, como el nombre de la carpeta, aparecerá un mensaje como "No encontrado". <br/> 

Además, si faltan permisos, aparecerá un mensaje como "No autorizado". <br/>

Si todo está bien, el Estado de Conexión de SharePoint se establecerá en ''Conectado'' y los parámetros se poblarán en ID de Sitio, ID de Unidad y ID de Lista. <br/>

Ahora está bien cerrar esta página ya que la Configuración de Almacenamiento en Blob para SharePoint está completa. <br/>

Vuelva a **Configuración de Almacenamiento de ExFlow** para esta configuración y haga clic en ''Habilitado''. <br/>

![Configuración de ExFlow SharePoint](@site/static/img/media/storage-setup-007.png)<br/>

Cierre la Configuración de Almacenamiento de ExFlow y vuelva a la Gestión de Almacenamiento de ExFlow / Gestión de Almacenamiento en Blob.<br/>

Seleccione la configuración de SharePoint recién creada en "Código de Almacenamiento de Doc. Entrante". <br/>

![Configuración de ExFlow SharePoint](@site/static/img/media/storage-setup-008.png)<br/>

Haga clic en ''Activo'' o "Habilitar / Deshabilitar Almacenamiento en Blob". <br/>

![Configuración de ExFlow SharePoint](@site/static/img/media/storage-setup-010.png)<br/>

Si hay facturas publicadas existentes aprobadas usando ExFlow, aparecerá un diálogo preguntando si desea transferirlas, entonces es posible elegir Sí. <br/>

Ahora es posible verificar el estado de las facturas publicadas en el Almacenamiento en Blob seleccionando ''Acciones --> Detalles del Almacenamiento''. <br/>

Haga clic en ''Sincronizar Almacenamiento'' para forzar una transferencia a SharePoint. <br/>

![Configuración de ExFlow SharePoint](@site/static/img/media/storage-setup-009.png)<br/>

Actualice la página de SharePoint con la carpeta creada previamente, ahora debería ser posible ver las nuevas carpetas allí. <br/>


![Configuración de ExFlow SharePoint](@site/static/img/media/storage-setup-005.png)<br/>

