---
title: Servicios Web - EXFID
sidebar_position: 3
hide_title: true
custom_edit_url: null
---
## Servicios Web - EXFID

### Introducción
ExFlow depende de la importación de documentos de múltiples fuentes: Sistema de Archivos Local, Almacenamiento de Azure o Servicios Web. 

En este texto se describirán los Servicios Web; su funcionalidad, configuración, uso y código de ejemplo como un proyecto en C#/.NET 4.8 y Visual Studio 2019 para integrarse con ellos. La codificación puede realizarse en cualquier lenguaje que soporte peticiones de Servicios Web utilizando el protocolo SOAP. El código de ejemplo listado puede convertirse fácilmente a VB.Net.

El uso de Servicios Web permite a integradores externos o partners de Business Central enviar facturas electrónicas a ExFlow utilizando un protocolo estandarizado.

### General
La importación de facturas en ExFlow normalmente requiere dos archivos: un XML que contiene la factura en una estructura conocida y el archivo PDF que contiene una presentación de la factura. El archivo PDF puede ser opcional si existe un archivo XSL que pueda generar un HTML convertible a PDF.

El uso de Servicios Web para la importación se inicia externamente y no por ExFlow o cualquier entrada de Cola de Trabajos. Los sistemas externos se conectan a los Servicios Web en Business Central e invocan métodos para cargar documentos en Documentos Entrantes y Adjuntos de Documentos Entrantes. Al activar la importación en ExFlow, los documentos se procesan en base a los Documentos Entrantes importados por el Servicio Web.

### Business Central / ExFlow
Instale ExFlow y ejecute el Asistente para obtener una configuración. 

Importe una Definición de Intercambio de Datos (DED) útil, ya sea una de ExFlow o utilice una DED existente en Business Central.<br/>

#### Configuración de ExFlow
Vaya a: **Configuración de ExFlow --> Importación OCR --> Tipo de Intercambio de Datos Web Def.** 

En la Configuración de ExFlow, establezca un valor en el campo "Tipo de Intercambio de Datos Web Def.", seleccionando de la lista de Tipos de Intercambio de Datos. Si no hay ninguno disponible, ejecute "Importar Definiciones de Intercambio de Datos" e importe una o más Definiciones de Intercambio de Datos.


#### Diario de Importación
Vaya a: **Diarios de Importación de ExFlow**

Cree o configure un [Diario de Importación de ExFlow](https://docs.signupsoftware.com/business-central/docs/user-manual/approval-workflow/exflow-import-journals#exflow-import-journals) para procesar lo que se importa a través del Servicio Web EXFID.

Para crear un nuevo Diario de Importación de ExFlow, simplemente edite la lista y establezca un Nombre y una Descripción para el nuevo diario. 

Luego, establezca el Tipo de Origen en ''Servicio Web''.

Procese las facturas importadas a través del Servicio Web ejecutando "Importar Documentos" en el Diario de Importación de ExFlow recién creado o ejecutando "Importar Documentos por Lote".


##### Adjuntos Opcionales
Se pueden cargar adjuntos opcionales para incluir más documentos que los archivos XML y Pdf predeterminados. Las configuraciones de Definición de Intercambio de Datos como Peppol y OIOUBL soportan adjuntos opcionales incrustados al incluir los adjuntos como datos codificados en BASE64 en el XML, por favor importe la Definición de Intercambio de Datos Peppol para ver cómo está configurado, ya que puede ser utilizado para cualquier formato XML.

###### Adjuntos Pre-Enviados
Si el formato XML utilizado no soporta adjuntos incrustados o si es técnicamente difícil incrustar los adjuntos, los adjuntos pueden ser enviados antes de la factura XML real.
Los adjuntos opcionales pueden ser enviados antes de la factura XML real.

###### Adjuntos Incrustados
Los adjuntos incrustados están codificados en BASE64, opcionalmente comprimidos usando gzip, flujos como se puede ver en los formatos XML de Peppol y OIOUBL.

Para ver cómo importar adjuntos incrustados desde XML, entonces importe ya sea Peppol a ExFlow o OIOUBL a ExFlow Definiciones de Intercambio de Datos.

### Autenticación
#### Clave de Acceso al Servicio Web
Para un contenedor local, cree una Clave de Acceso al Servicio Web en el usuario que se utilizará en Visual Studio. Abra la tarjeta de usuario en Business Central y active una Clave de Acceso al Servicio Web. Copie la clave y reemplace la clave en la línea con NetworkCredentials.

![Servicio Web](@site/static/img/media/web-service-001.png) 


#### OAuth
Desde ExFlow 19.2 en adelante, ExFlow soporta la autenticación a nuestro Servicio Web a través de OAuth. 

Primero, se necesita crear una Aplicación de Microsoft Entra, si es que aún no existe ninguna. Agregue un Nombre relevante para la importación y asigne el conjunto de permisos correspondiente: ''EX WEB SERVICE'' bajo los Conjuntos de Permisos de Usuario. Este Conjunto de Permisos debería tener el campo de empresa en blanco. 

Después de esto, se generará un ID de cliente y este será necesario para la autenticación.

Ahora, se necesita crear un Registro de Aplicación en el Portal de Azure. Tenga en cuenta que un Administrador Global tendrá que otorgar consentimiento para esta aplicación. 

Registre una aplicación, asígnele un nombre y seleccione el tipo de inquilino relevante.

Ahora, establezca los permisos de API en "Permisos de aplicación" y agregue ''API.ReadWrite.ALL''.

![medium](@site/static/img/media/web-service-003.png) 

Por último, otorgue consentimiento administrativo en el Registro de Aplicación. 

Cuando esto esté hecho, toda la configuración necesaria estará completa para poder autenticar a través de OAuth.