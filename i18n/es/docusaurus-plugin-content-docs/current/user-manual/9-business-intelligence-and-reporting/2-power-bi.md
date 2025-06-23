---
title: Power BI
sidebar_position: 2
hide_title: true
custom_edit_url: null
---
## Power BI

Existen configuraciones y plantillas preparadas para analizar los datos de ExFlow con Power BI. 

Los Partners pueden encontrar las plantillas de Power BI (BCO/BC OnPrem) en el [***Portal de Partners***](https://partners.signupsoftware.com/px/digital-asset-management/admin/media-library?collectionId=110867&renderMode=Collection)

Lea más sobre [Habilitación de la integración de Power BI](https://learn.microsoft.com/es-es/dynamics365/business-central/admin-powerbi-setup#setup) y [Trabajar con informes de Power BI en Business Central](https://learn.microsoft.com/es-es/dynamics365/business-central/across-working-with-powerbi) antes de comenzar con la instalación.


### Requisitos previos
Cuenta de Dynamics 365 Business Central con una licencia de Power BI. 

Para configurar la integración, debe descargar e instalar Power BI Desktop.

Este manual funciona tanto para Business Central Online (SaaS) como para OnPrem. Los procedimientos de configuración difieren ligeramente; lea más sobre esto más adelante.


## Instalación
Comience yendo a: **Configuración de ExFlow --> Acciones --> Funciones --> Power BI** 

|Power BI||
|:-|:-|	
|Crear servicios web de Power BI| Publicar todos los servicios web necesarios en una empresa
|Eliminar servicios web de Power BI|Eliminar servicios web de Power BI existentes
|Obtener origen de datos de BC|Se proporcionará una cadena URL para copiar al Power BI Desktop (OnPrem)
|Obtener plantilla de Power BI|Enlace para descargar el archivo de plantilla de Power BI desde el Portal de Partners


### Configurar ExFlow para Power BI

En la Configuración de ExFlow, cree los servicios WEB de ExFlow presionando *Acciones --> Funciones --> Power BI --> Crear servicios web de Power BI*

Se mostrará un mensaje de confirmación que indica: ''Se han creado los servicios web de Power BI de ExFlow''.

### Importar la plantilla de Power BI en Power BI desktop
Abra Power BI desktop e inicie sesión con su cuenta. Power BI desktop es una aplicación gratuita de Microsoft que se instala en su ordenador local.  

Descargue la última plantilla de Power BI preparada para ExFlow. 

Los Partners con acceso al sitio de Partners de SignUp pueden descargarla [aquí](https://azuresignup.sharepoint.com/sites/Signupsoftware/SitePages/BC-POWER-BI.aspx). Si no tiene acceso al portal de partners, contacte al soporte de SignUp para obtener la información. El archivo debe tener un tipo de archivo ''.pbit'' -file type.  

También puede descargar desde la configuración de ExFlow presionando: *Acciones --> Funciones --> Power BI --> Obtener plantilla de Power BI*

Importe la plantilla de Power BI preparada para ExFlow eligiendo *Archivo --> Importar --> Plantilla de Power BI*. 

![small](@site/static/img/media/power-bi-001.png)

Elija la plantilla que acaba de descargar. Ahora se le pedirá el origen de datos de BC que desea utilizar. 

Para BC OnPrem, recupere el enlace de la configuración de ExFlow presionando *Acciones --> Funciones --> Power BI --> Obtener origen de datos de BC*  

Para Business Central Online, el origen de datos se refiere al entorno específico de BC (base de datos) al que pretende conectarse. 

Elija la base de datos de BC de la lista desplegable:

![Power BI Desktop](@site/static/img/media/power-bi-010.png)

En un entorno multi, puede ver la base de datos al final de la cadena de conexión a su entorno. 

Si no recupera sus empresas, el primer paso para probar su conexión a BC Online es presionar *Obtener datos --> Más --> Dynamics 365 Business Central* y luego hacer clic en Conectar. 

Si la conexión funciona como se esperaba, sus bases de datos deberían ser visibles aquí. 

![Power BI Desktop](@site/static/img/media/power-bi-003.png)

Después de insertar el origen de datos de BC correcto, presione Cargar.  

La captura de pantalla anterior es para OnPrem, pero con la plantilla Online el paso es similar.  
     
Si la conexión a su entorno de Business Central funciona como se esperaba, debería poder ver sus empresas en el gráfico de la parte superior izquierda: 

![small](@site/static/img/media/power-bi-004.png)

Si no recupera sus empresas, probablemente haya algún error con la conexión hacia BC. 

Guarde el paquete del informe haciendo clic en Archivo --> Guardar. 

Dale un nombre que también sea descriptivo dentro de BC.  

### Publicar en un espacio de trabajo en Power BI 

Para publicar el paquete del informe de Power BI de ExFlow que acaba de crear en la pestaña de Power BI en BC, primero debe publicarlo en el espacio de trabajo de Power BI apropiado. 

Haga clic en *Publicar (en el menú de escritorio) --> Mi espacio de trabajo --> Seleccionar*

Si la publicación funciona bien, debería recibir un mensaje de éxito.  

### Abrir y configurar Power BI
El siguiente paso es iniciar sesión en [Power BI](https://www.powerbi.com) con su cuenta. 

Bajo uno de los espacios de trabajo, debería poder encontrar el informe que acaba de publicar. 

Desde aquí, también puede cambiar la configuración adicional para el paquete del informe, como establecer la frecuencia de actualización programada. 

Cuando haya publicado un informe de Power BI en un espacio de trabajo, también estará disponible desde dentro de BC para los usuarios con acceso a ese espacio de trabajo. 

Esta conexión se describe más adelante.  

### Incrustar Power BI en Business Central 

#### Incrustar en Power BC Online 

En el centro de roles de Contador de ExFlow hay una parte de Informes de Power BI: 

![small](@site/static/img/media/power-bi-005.png)

Desde el principio, esto está vacío y necesita conectarse a su cuenta de Power BI. 

1.	Presione “Comenzar con Power BI”<br/>
2.	Haga clic en siguiente en la configuración asistida<br/>
3.	En el siguiente paso, se verificará la licencia de Power BI, presione siguiente. <br/>
4.	Complete la configuración con siguiente y finalizar. <br/>

Puede tardar unos minutos en verificar la licencia de Power BI. 

Cuando la licencia esté verificada, podrá proceder al último paso de este manual.

#### Incrustar en Power BC OnPrem 

Para Business Central en las instalaciones, se deben configurar un par de cosas: 

1.	Configure la autenticación NavUserPassword o Azure Active Directory; la integración de Power BI no es compatible con la autenticación de Windows. <br/>
2.	Habilite los servicios web OData y el punto final ODataV4. <br/>
3.	Cree un registro de aplicación para Business Central en Azure. Esto es necesario para conectar Business Central en las instalaciones con el servicio de Power BI. 
Vea [la guía de Microsoft sobre cómo registrar Business Central en Azure AD](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/administration/register-app-azure) <br/>
4.	En Business Central, vaya a “Configuración Asistida” y comience “Configurar sus cuentas de Azure Active Directory” y siga los pasos. <br/>

![Power Bi](@site/static/img/media/power-bi-006.png)

a.	Se proporciona un texto informativo <br/>
b.	Complete “URL de respuesta”, “ID de aplicación” y “Clave” del registro de la aplicación en Azure AD (vea el enlace en el paso 3 arriba) <br/>
c.	Haga clic en Siguiente y Finalizar <br/>
5.	En Business Central, haga clic en “Comenzar con Power BI” para iniciar el proceso y siga los pasos 1-4 en la sección “BC online”. La diferencia para BC en las instalaciones es que un administrador tendrá que dar consentimiento al servicio de Power BI después del último paso.<br/> 
a.	Presione “Comenzar con Power BI”<br/>
b.	Haga clic en siguiente en la configuración asistida<br/>
c.	Haga clic en siguiente nuevamente<br/>
d.	Autorizar servicios de Azure<br/> 

Cuando se complete la autorización, podrá proceder al último paso.


### Verificar el informe de Power BI y habilitarlo dentro de BC	 

Cuando el informe se publica en un espacio de trabajo, debería poder verlo entre sus Informes de Power BI en BC. 

Para habilitarlo y seleccionarlo, haga clic en: *Informes de Power BI --> Seleccionar Informe*
 
Si el informe no está habilitado, haga clic en *Mostrar más opciones --> Habilitar* 

Después de hacer clic en Aceptar, el informe de Power BI debería ser visible para usted en *Insights* en BC. 

![Power Bi](@site/static/img/media/power-bi-007.png)


### Manejo de errores – Consultas

Si encuentra un error relacionado con el nivel de privacidad al actualizar consultas en Power BI, siga estos pasos para resolverlo:

Navegue a: *Archivo --> Opciones y configuración --> Opciones** 

En la sección Archivo actual, seleccione Privacidad.

Habilite la casilla: *"Ignorar los niveles de privacidad y potencialmente mejorar el rendimiento"* 

Haga clic en Aceptar, regrese a su informe y seleccione Actualizar.

![Power Bi](@site/static/img/media/power-bi-008.png)

Este ajuste omite la aplicación de aislamiento de datos entre fuentes y puede resolver problemas de ejecución de consultas relacionados con desajustes en el nivel de privacidad.

![Power Bi](@site/static/img/media/power-bi-009.png)


## Acceder a documentos publicados en Business Central desde Power BI Desktop

Desde la versión 21.1 de ExFlow, es posible crear enlaces en Power BI a
documentos de compra publicados. 

Es necesario tener acceso a la página específica
en Business Central para poder ver el documento. 

Para utilizar esta
funcionalidad, asegúrese de que se utilizan los últimos servicios web de Power BI de ExFlow eliminándolos y creándolos nuevamente. 

En el último archivo de plantilla de Power BI de ExFlow,
hay un informe preparado llamado Documentos Publicados.

![Power BI Desktop](@site/static/img/media/image375.png)

Haga clic en el enlace del documento para acceder a la tarjeta del documento publicado en el Historial de Aprobación de ExFlow.



