---
title: Actualizar y migrar datos de ExFlow
sidebar_position: 6
hide_title: true
custom_edit_url: null
---
## Actualizar y migrar datos de ExFlow

<br/> 

Siéntase libre de descargar y leer los documentos antes de comenzar:<br/>  [***Descargar documentos técnicos***](https://docs.exflow.cloud/business-central/docs/user-manual/help-and-support/documents-for%20download#documents-for-download) <br/>

### Introducción
#### Antecedentes
Esta sección describe cómo actualizar/migrar datos de ExFlow BC C/AL a datos de ExFlow BC AL. <br/> 

![Actualizar y migrar datos de ExFlow](@site/static/img/media/migrate-upgrade-030.png)<br/>

#### Consideraciones
La versión de ExFlow AL BC no es una conversión 1-1 de la versión anterior basada en C/AL de ExFlow, es decir, puede haber diferencias tanto en la funcionalidad como en cómo se presentan/migran los datos. A continuación se presentan algunas de las diferencias clave entre las versiones:<br/> <br/> 
•	La funcionalidad de Requisición no es compatible con ExFlow Business Central AL. Por lo tanto, los documentos y configuraciones relacionados con la funcionalidad de requisición no se migran y la función no está disponible en BC AL. <br/> 

•	Hay cambios importantes en cómo funcionan/se presentan los comentarios, por lo tanto, algunos comentarios que se migran se mostrarán como creados/escritos por un "usuario del sistema". <br/>

#### Actualización/migración de la base de datos a Microsoft SaaS
Asegúrese de que la base de datos BC actualizada y el complemento ExFlow tengan versiones en la nube compatibles disponibles. Luego siga las instrucciones de Microsoft sobre cómo migrar bases de datos locales a SaaS.<br/> 

#### Requisitos previos
El modelo de datos de ExFlow debe estar completamente actualizado a la versión ExFlow 5.41 en BC 14. NAV/BC debe actualizarse a una versión compatible con Microsoft y según las instrucciones de Microsoft.

Pasos de ExFlow a seguir:
1.	Actualizar la versión de ExFlow a ExFlow 5.41 en BC14, vea ‘’Actualizar la versión de ExFlow a ExFlow 5.41 en BC14.’’
2.	Administrar PDF/Imagen para exportar desde C/AL a almacenamiento de archivos, vea la instrucción ''Crear archivos PDF para exportar desde C/AL.''
3.	Crear datos para las tablas de actualización de ExFlow y actualizar a BC AL, vea ‘’Comenzar a migrar datos de ExFlow C/AL de BC14 a datos de ExFlow AL.’’<br/><br/>


### Paso 1
### Verificar la versión actual de ExFlow y la versión de NAV/BC <br/>

Ir a: **Departamentos--> Configuración de ExFlow--> Acerca de ExFlow** para encontrar su versión de ExFlow:

![Actualizar y migrar datos de ExFlow](@site/static/img/media/migrate-upgrade-0022.png) 

Vaya a la pila en la cinta y haga clic en **''Ayuda''** y **''Acerca de Microsoft Dynamics 365 Business Central''**.

![Actualizar y migrar datos de ExFlow](@site/static/img/media/migrate-upgrade-002.png)

Si la versión actual de ExFlow es < ExFlow 5.22, entonces se debe realizar una actualización de ExFlow a ExFlow 5.41 con un script de actualización.
 
Lea más en la sección Actualizar ExFlow 3.50 a ExFlow 5.41 o Actualizar ExFlow 4.XX a ExFlow 5.41

Si la versión actual de ExFlow es >ExFlow 5.22, entonces fusione el código existente de ExFlow con los objetos de ExFlow en BC14 con la versión ExFlow 5.41.
 
Los scripts de actualización de versiones anteriores se pueden descargar desde el portal de socios de SignUp Software AB o solicitar al soporte de SignUp Software AB.<br/>


### Verificar el almacenamiento de documentos PDF para ExFlow

Para comenzar, vaya a **‘’Configuración de ExFlow --> Carpetas--> Tipo de almacenamiento de archivos’’** para verificar si los documentos se almacenan en la base de datos o en un recurso compartido de archivos:

![Actualizar y migrar datos de ExFlow](@site/static/img/media/migrate-upgrade-003.png)<br/>

Si el documento se almacena en un recurso compartido de archivos, entonces existen dos opciones:<br/>
1.	Importar el documento a la base de datos. Lea más en la sección Importar PDF/Imágenes a la base de datos antes de la actualización.<br/><br/>
2.	Exportar documentos a un recurso compartido de archivos desde BC/NAV C/AL e importar documentos desde el almacenamiento de archivos de Azure a BC AL.<br/>
Lea más en la sección ''Crear archivos de documentos para exportar en C/AL e importar documentos en AL.''<br/>


### Importar PDF/Imágenes a la base de datos antes de la actualización
Inicie el cliente BC RTC en la versión de ExFlow > 5.22. <br/>

Ir a: **Departamentos --> Configuración de ExFlow --> Navegar --> Migrar Archivos de ExFlow (Avanzado)**

Haga clic en **Migrar Archivos de ExFlow (Avanzado)** y edite la ventana de Migrar archivos de ExFlow con la información de importación necesaria.<br/>

![Actualizar y migrar datos de ExFlow](@site/static/img/media/migrate-upgrade-004.png)<br/>

Si hay múltiples empresas que usan ExFlow, verifique que las rutas de los archivos estén actualizadas en la Configuración de ExFlow. <br/>

Si solo hay una empresa, dependiendo de dónde se encuentre el recurso compartido de archivos, es posible importar los archivos desde las rutas en la configuración o seleccionarlos manualmente desde **Ruta de Factura** y **Ruta de Adjunto**.<br/>

Asegúrese de que el campo **Migrar archivos XML** esté desmarcado y que el campo **Reemplazar/Ignorar Conflictos de Archivos** esté marcado.<br/>

Si hay muchos documentos, es posible limitar la importación ingresando nombres de carpetas en **Nombre de Imagen Desde** y **Nombre de Imagen Hasta**.<br/>

Además, también es posible seleccionar la empresa desde la cual importar archivos seleccionando la empresa en **Solo Migrar en Empresa**.<br/>

Es posible cambiar las rutas en la pestaña “Carpetas” en la Configuración de ExFlow.<br/>
Haga clic en ‘’Vista previa’’ para continuar.<br/>

![Actualizar y migrar datos de ExFlow](@site/static/img/media/migrate-upgrade-005.png)<br/>


### Actualizar la versión de ExFlow a ExFlow 5.41 en BC 14
#### Actualizar ExFlow 3.50 a ExFlow 5.41

Termine todos los documentos en el diario de importación en ExFlow.<br/>

Importar ExFlow_350_to_5XX_STEP1_(NAV2009R2).fob.<br/>

Ejecutar codeunit 12057134 EX Upgrade 350 to 5XX Step1.fob. <br/>

Eliminar el procedimiento almacenado en el administrador de SQL. <br/>

![Actualizar y migrar datos de ExFlow](@site/static/img/media/migrate-upgrade-018.png)<br/>


Actualizar NAV2009R2 a (NAV2015 o posterior)<br/>

Fusionar ExFlow 5.XX en los objetos del cliente (NAV 2015 o posterior).<br/>


Importar objetos fusionados de ExFlow 5.XX a la versión actualizada (NAV2015 o posterior) <br/>

Elegir: Sincronizar Esquema Más Tarde<br/>

Importar la herramienta de actualización ExFlow_350_to_5XX_STEP2_(NAV2015 o posterior).fob<br/>

Elegir: Sincronizar Esquema Más Tarde<br/>

Compilar objetos de ExFlow ahora <br/>

Elegir: Sincronizar Con validación<br/>

Iniciar Herramienta --> Actualización de Datos en (NAV2015 o posterior)<br/>

![Actualizar y migrar datos de ExFlow](@site/static/img/media/migrate-upgrade-019.png)<br/>

Datos de ExFlow 5.XX listos para la configuración de ExFlow y la instalación web.<br/>

#### Actualizar ExFlow 4.XX a ExFlow 5.41
Fusionar ExFlow 5.41 en la versión del cliente de ExFlow a la versión BC14 y crear un fob con los objetos de ExFlow. <br/>

Iniciar el entorno de desarrollo de BC14. <br/>

Ejecutar la Sincronización de tablas. <br/>

Elegir: ''Herramientas--> Sincronizar Esquema Para Todas las Tablas--> Con Validación''. <br/>

![Actualizar y migrar datos de ExFlow](@site/static/img/media/migrate-upgrade-020.png)<br/>

Importar los objetos de ExFlow 5.41 fusionados del cliente que se han creado.<br/>

Elegir: ‘’Sincronizar Esquema Para Todas las Tablas--> Más Tarde’’.<br/>

Importar la herramienta de actualización ExFlow_UpgradeTool_from500_to541 (BC).fob.<br/>

Elegir: ‘’Sincronizar Esquema Más Tarde’’<br/>

 Compilar objeto de ExFlow.<br/>

 Elegir: Ahora – con validación<br/>

![Actualizar y migrar datos de ExFlow](@site/static/img/media/migrate-upgrade-021.png)<br/>

Elegir Herramientas --> Actualización de Datos --> Iniciar <br/>

![Actualizar y migrar datos de ExFlow](@site/static/img/media/migrate-upgrade-019.png)<br/>

![Actualizar y migrar datos de ExFlow](@site/static/img/media/migrate-upgrade-022.png)<br/>

Actualización de datos finalizada. <br/>

Validar datos de ExFlow.<br/><br/>


### Paso 2

### Crear archivos de documentos para exportar en C/AL e importar documentos en AL
Esto se puede hacer antes o después de la actualización (si las imágenes de los documentos no se actualizan)

### Exportar imágenes/documentos PDF desde BC C/AL

Obtenga DocMigrate_New_BC14.fob e impórtelo en el entorno de desarrollo de C/AL.<br/>

![Actualizar y migrar datos de ExFlow](@site/static/img/media/migrate-upgrade-006.png)<br/>

Ejecute el informe 60012 Export Inv to XML.<br/>

Seleccione una ‘’Ruta para exportar’’, es la ruta raíz donde se almacenan las imágenes/pdf, luego haga clic en OK.<br/>

![Actualizar y migrar datos de ExFlow](@site/static/img/media/migrate-upgrade-007.png)<br/>

![Actualizar y migrar datos de ExFlow](@site/static/img/media/migrate-upgrade-008.png)<br/>

Haga clic en Sí para exportar todos los registros en la base de datos. Luego se mostrará un mensaje emergente con el resumen de las imágenes exportadas.

![Actualizar y migrar datos de ExFlow](@site/static/img/media/migrate-upgrade-0098.png)<br/>

Crear carpeta y archivos:

![Actualizar y migrar datos de ExFlow](@site/static/img/media/migrate-upgrade-010.png)<br/>

### Crear Almacenamiento de Archivos de Azure
Para obtener soporte con lo siguiente, comuníquese con su departamento de TI interno o con su socio de confianza de Business Central. <br/>

Para poder crear una Configuración de Importación de Archivos en ExFlow Business Central, primero se debe crear un Almacenamiento de Archivos de Azure. Se necesita la clave de acceso (entre otras cosas). <br/>

#### Crear Cuenta de Almacenamiento de Azure
Inicie sesión en [***Azure Portal***](https://portal.azure.com/) y haga clic en ''Cuentas de almacenamiento'' para crear una cuenta de almacenamiento. <br/>

![Actualizar y migrar datos de ExFlow](@site/static/img/media/azure-storage-001.png)<br/>

Haga clic en ''Crear cuenta de almacenamiento'', use los valores predeterminados y complete todas las configuraciones requeridas. <br/>

Asegúrese de que el punto final público esté seleccionado en la pestaña de red. <br/>

Elija Revisar y crear la cuenta.<br/>

#### Crear un Compartido de Archivos de Azure
En Azure Portal, continúe creando un compartido de archivos de Azure.

Seleccione la cuenta de almacenamiento y vaya a Compartidos de archivos en Almacenamiento de datos. <br/>

Cree un compartido de archivos, luego haga clic en el compartido de archivos recién creado.<br/>

Cree un directorio (subcarpeta) en el compartido de archivos llamado ExFlow o cualquier otro nombre de su elección.<br/><br/>


### Paso 3

#### Comenzar a migrar datos de ExFlow C/AL de BC14 a datos de ExFlow AL con migración en la nube

#### Mover datos de ExFlow a tablas de actualización de ExFlow
Después de la actualización a ExFlow 5.41, comience la importación. Ejecute Archivo -> Importar y elija el archivo Upgrade_New_BC14_XX.fob.<br/>

![Actualizar y migrar datos de ExFlow](@site/static/img/media/migrate-upgrade-031.png)<br/>

Ejecute la codeunit 12026809, esto copia todos los datos de la empresa de ExFlow a todas las tablas de actualización de ExFlow.<br/>

#### Comenzar la migración en la nube <br/>

Configure la migración en la nube en la versión actual de Business Central (siga las instrucciones de Microsoft).<br/>

Inicie la Gestión de Migración en la Nube y elija Administrar Tablas Personalizadas.<br/>

![Actualizar y migrar datos de ExFlow](@site/static/img/media/migrate-upgrade-032.png)<br/>

***¡Importante!:***
Solo elija todas las tablas de ExFlow con ''Upg'' o ''Up'' después del nombre, vea la imagen a continuación de la ''Asignación de Tablas de Migración''.<br/>

Elimine todas las demás tablas de ExFlow para que no se muevan datos de esas tablas.<br/>

![Actualizar y migrar datos de ExFlow](@site/static/img/media/migrate-upgrade-033.png)<br/>

Ejecute la migración. <br/>

Después de que la migración esté completa, busque **Ex Upgrade From CAL** en Business Central: <br/>

![Actualizar y migrar datos de ExFlow](@site/static/img/media/migrate-upgrade-028.png)<br/>

Desde la página ''Ex Upgrade From CAL'', vaya a ''Acciones --> Ejecutar Migración de ExFlow para la Empresa Actual''. <br/>

![Actualizar y migrar datos de ExFlow](@site/static/img/media/migrate-upgrade-029.png)<br/>

Si hay más de una empresa, vaya a ''Acciones --> Ejecutar Migración de ExFlow para todas las empresas''.

Vaya a * Relacionado-- > Información de Estado de Migración de ExFlow* para ver el registro del procedimiento de actualización por empresa. <br/>

![Actualizar y migrar datos de ExFlow](@site/static/img/media/migrate-upgrade-034.png)<br/>

Después de la actualización, siga las instrucciones en la sección a continuación ''Actividades posteriores a la actualización''.<br/>

#### Actividades posteriores a la actualización
Estas acciones pueden requerir conocimiento de la aplicación del complemento ExFlow BC AL y qué características se usaron/se usarán en la versión actualizada de ExFlow BC.
Utilice el asistente de ExFlow para cada empresa en la que se deba configurar ExFlow.  <br/>

*En la empresa predeterminada:*<br/>
1) (Re)asignar la empresa predeterminada de ExFlow.<br/>
2) Configurar las notificaciones por correo electrónico de ExFlow.<br/>

*En todas las empresas (relevantes)*:<br/>
1) Activar la empresa para ExFlow Web.<br/>
2) Configurar las configuraciones de integración de EDC.<br/>
3) Importar la definición de Intercambio de Datos requerida.<br/>

Además, solicite y active una Clave de Licencia de ExFlow Business Central.<br/>

### Insertar datos en ExFlow desde tablas de actualización

#### Configuraciones de Importación de Archivos de ExFlow
Ir a: **Configuraciones de Importación de Archivos de ExFlow** para importar imágenes/documentos PDF a Business Central.

| Configuraciones de Importación de Archivos      | ![Configuraciones de Importación de Archivos de ExFlow](@site/static/img/media/exflow-setup-file-import-setup-001.png)<br/>   |
|:-|:-|
|**Nuevo:**                               | Crear una nueva Configuración de Importación de Archivos
|**Administrar:**                               | Editar, ver o eliminar la configuración
|**Ejecutar Importación:**                               | Ejecutar el proceso de importación
|**Habilitar/Deshabilitar:**                               | Habilitar/deshabilitar la fuente de importación
|Más opciones--> Acciones--> **Mostrar Importaciones en Curso**   | Muestra una lista de archivos de importación pendientes
<br/>

#### Importar imágenes/documentos PDF a BC AL a través de Configuraciones de Importación de Archivos de ExFlow

Ir a **Configuraciones de Importación de Archivos de ExFlow** y hacer clic en Nuevo para crear una nueva Configuración de Importación de Archivos.

En la sección General, ingrese un Código, descripción y elija ''Importar Desde: Archivo de Azure''. Cuando se selecciona ''Archivo de Azure'', tanto ''Carpeta de Imágenes'' como ''Carpeta de Imágenes'' se establecerán en ''exflow'' por defecto en la sección ''Datos (XML)'' y en la sección ''Imagen (PDF)''.

Agregue ''Tipo de Intercambio de Datos'' en la sección ''Datos (XML)''. En la sección ''Archivo de Azure'', agregue información sobre el Nombre de la Cuenta, Clave de Acceso, Compartido de Archivos y la URL base.

Habilite la configuración.

![Configuraciones de Importación de Archivos de ExFlow](@site/static/img/media/exflow-setup-file-import-setup-002.png)<br/>

Copie todos los archivos y carpetas al almacenamiento de archivos de Azure creado en la carpeta de imágenes (en este ejemplo, el nombre de la carpeta es ExFlow)

![Actualizar y migrar datos de ExFlow](@site/static/img/media/migrate-upgrade-011.png)<br/>

![Actualizar y migrar datos de ExFlow](@site/static/img/media/migrate-upgrade-012.png)<br/>

### Migrar Documentos a través de la Herramienta de Migración de Documentos

El siguiente paso es utilizar la Herramienta de Migración de Documentos.

Ir a: **Página de Configuración de ExFlow --> Acción --> Funciones --> Migrar Documentos**

| Herramienta de Migración de Documentos     | ![Actualizar y migrar datos de ExFlow](@site/static/img/media/migrate-upgrade-013.png)<br/>  |
|:-|:-|
|**Cargar y Validar XML**                               | Crear una nueva Configuración de Importación de Archivos
|**Migrar Documentos**                               | Leer, importar y migrar documentos
|**Limpiar Documentos Entrantes:**                               | Borrar todos los documentos migrados si se necesita una nueva importación
<br/>

| General  |  |
|:-|:-|
|**Código de Configuración de Importación de Archivos:**                               | Ingrese el Código de Configuración de Importación de Archivos
|**Valor del Campo de Nombre**                               | Especifique el formato de nombre a utilizar. Las siguientes opciones están disponibles:<br/> ![Actualizar y migrar datos de ExFlow](@site/static/img/media/migrate-upgrade-014.png)
<br/>

| Estado  |  |
|:-|:-|
|**Estado de Migración:**                               | Estado de la migración
|**Conteo de Documentos**                               | Número de documentos a migrar en la empresa correspondiente
|**Conteo de Coincidencias**                               | Número de documentos coincidentes en la empresa actual, haga clic para ver la lista de documentos que no coincidieron
|**Documentos Migrados**                               | Número de documentos migrados en la empresa correspondiente
|**Documentos Fallidos**                               | Documentos que no se pudieron migrar, haga clic para ver la lista y la razón
|**Documentos Existentes**                               | Número de documentos ya migrados
<br/>

| Opciones  |  |
|:-|:-|
|**Tamaño del Lote:**                               | Establezca un valor distinto de cero para importar como máximo esa cantidad de documentos a la vez
<br/>

| Formato de Archivo  |  |
|:-|:-|
|**Formato de archivo**                               | Muestra la estructura de XML de importación necesaria
<br/>

Para continuar con el ejemplo de migración, haga clic en **Cargar y Validar XML** para elegir el archivo.

![Actualizar y migrar datos de ExFlow](@site/static/img/media/migrate-upgrade-015.png)

Elija el archivo ''Document Migration XML document*.xml'' en la carpeta de imágenes del compartido de archivos de Azure ''exflow''. <br/>

![Actualizar y migrar datos de ExFlow](@site/static/img/media/migrate-upgrade-012.png)<br/>

Luego, el estado de la migración se establecerá en ''Validado''.<br/>

![Actualizar y migrar datos de ExFlow](@site/static/img/media/migrate-upgrade-016.png)<br/>

Elija la pestaña ''Migrar Documento'' y espere hasta que el Estado de Migración se establezca en: ''Migrado''.<br/>

![Actualizar y migrar datos de ExFlow](@site/static/img/media/migrate-upgrade-017.png)<br/>

Migración completada. <br/>

Valide que todas las imágenes PDF estén adjuntas a los documentos de compra.
