---
title: Comenzar
sidebar_position: 6
hide_title: true
custom_edit_url: null
---
## Comenzar

### Introducción

El Asistente de Inicio de ExFlow está diseñado para simplificar el proceso de configuración inicial y permitir que los usuarios comiencen a utilizar ExFlow de manera rápida y eficiente. Este manual de usuario le guiará a través del proceso paso a paso para configurar ExFlow según las necesidades específicas de su organización.

Al completar el Asistente de Inicio de ExFlow, se proporcionará una configuración completamente funcional de ExFlow, adaptada a los requisitos específicos de la empresa. Los usuarios podrán importar facturas, automatizar sugerencias de aprobación basadas en atributos o roles, y experimentar los beneficios de ahorro de tiempo que ofrece la codificación inteligente y la asignación de aprobaciones de ExFlow.

Este manual de usuario proporcionará instrucciones detalladas, consejos útiles y perspectivas para garantizar un proceso de configuración fluido y exitoso. Se recomienda leer cada sección cuidadosamente, seguir los pasos en secuencia y consultar este manual siempre que necesite asistencia.


### Requisitos previos

Antes de ejecutar el Asistente de Inicio de ExFlow, hay algunos requisitos previos que deben completarse. Siga estos pasos iniciales para garantizar un proceso de configuración sin problemas:

[Descargar e Instalar ExFlow:](https://appsource.microsoft.com/en-us/product/dynamics-365-business-central/PUBID.signup-software-ab%7CAID.31407efc-8e13-4752-b577-5e992428aa29%7CPAPPID.a53707ce-b9e1-4f4e-93be-ea3aae783cae?tab=Overview) Visite el marketplace de Microsoft AppSource y localice la extensión ExFlow como Prueba Gratuita. 

![Asistente de Inicio - Microsoft AppSource](/img/media/get-started-001-appsource.png)

Ingrese los detalles de la empresa y seleccione en qué inquilino instalar ExFlow y en qué idioma. Una vez completada la instalación, obtenga la clave de licencia de ExFlow de su Socio ExFlow autorizado.

### Licencia 

Busque Activación de Licencia ExFlow e introduzca la clave de licencia:

![Asistente de Inicio - Activación de Licencia](/img/media/get-started-002-license-activation.png)

Una vez completados estos pasos iniciales, puede proceder a ejecutar el Asistente de Inicio.

Es esencial tener la extensión ExFlow instalada y la clave de licencia activada para proceder con el Asistente de Inicio de ExFlow. Si se encuentra con algún problema durante la instalación o activación, consulte la documentación de ExFlow o póngase en contacto con el equipo de soporte de ExFlow para obtener asistencia.

#### **Licencia para nuevas instalaciones**
La gestión de licencias para instalaciones completamente nuevas de BC Online se manejará a través del Proveedor de Licencias en el Asistente de Inicio. 
Lea más sobre esto en las secciones "Asistente de Inicio" y "Proveedor de Licencias" más adelante. 

### Copiar configuración de otra empresa
Si ExFlow ha sido previamente instalado y configurado en otras empresas dentro del mismo inquilino, es posible utilizar la opción de copiar la configuración de ExFlow. Esta característica es particularmente valiosa cuando existe la necesidad de aplicar la misma o similar configuración a la nueva empresa.

![Asistente de Inicio - Copiar Configuración de ExFlow](/img/media/get-started-004-do-you-want-to-copy.png)

![Asistente de Inicio - Copiar Configuración de ExFlow](/img/media/get-started-005-copy-exflow-setup.png)


## Asistente de Inicio

Busque *Asistente de Inicio de ExFlow*:

![Asistente de Inicio](/img/media/get-started-003-search.png)

En primer lugar, utilice el completo tutorial en video que le guía a través de cada paso del asistente, explicando el proceso de manera visual y atractiva. Simplemente haga clic en el enlace [***Ver Video***](https://www.signupsoftware.com/get-started-video/) para acceder y seguir las instrucciones. 

En segundo lugar, hemos preparado una guía detallada paso a paso que proporciona instrucciones escritas sobre cómo ejecutar el asistente. Esta guía ofrece explicaciones claras y consejos útiles para garantizar una experiencia de configuración fluida y exitosa.

![Asistente de Inicio](/img/media/get-started-006-exflow-get-started-wizard.png)

### Activación de Suscripción 

Si no tiene una licencia activada en "Activación de Licencia ExFlow", entonces esta página será visible. 

Habilite "Tengo una Suscripción" si la Suscripción a través del Proveedor de Licencias se utiliza en otro entorno de Business Central y la misma licencia debe aplicarse en este nuevo entorno, dentro del mismo inquilino.

![Asistente de Inicio](/img/media/get-started-sub-activation-001.png)

Cuando está habilitado, es necesario ingresar información sobre su ID de Cliente y Código de Socio para activar la licencia. 

El ID de Cliente es el ID único del cliente asignado por SignUp Marketplace. Haga clic en siguiente para proceder a agregar la "Asignación de Aprobación".  

![Asistente de Inicio](/img/media/get-started-sub-activation-002.png)

Si no tiene una suscripción en otros entornos, deje la casilla deshabilitada y haga clic en Siguiente para proceder con el nuevo Registro de Cliente. 

Agregue la información del socio y la información de la empresa para continuar. El siguiente paso le llevará a "Asignación de Aprobación".  

![Asistente de Inicio](/img/media/get-started-sub-activation-003.png)


### Asignación de Aprobación

Defina la asignación de aprobación y el orden de aprobación para los documentos entrantes. La asignación de aprobación determina cómo ExFlow asigna dinámicamente aprobadores a los documentos basándose en atributos específicos o valores encontrados en el documento.

Como ilustración, considere el siguiente ejemplo que describe el orden deseado de aprobadores para un documento:
1.	Comprador
2.	Propietario de la dimensión del Departamento
3.	Propietario de la dimensión de la Región
En este escenario, la asignación de aprobadores para un documento seguirá la secuencia especificada. Primero, el comprador será asignado como el aprobador inicial. Luego, el propietario de la dimensión del Departamento revisará el documento. Finalmente, el propietario de la dimensión de la Región proporcionará su aprobación.

![Asistente de Inicio - Asignación de Aprobación](/img/media/get-started-007-approval-assignment.png)


### Crear Usuarios

Cree usuarios de ExFlow basados en una selección de usuarios de su entorno de Business Central. El Asistente de Inicio de ExFlow simplifica el proceso de agregar usuarios a ExFlow y asegura que la información apropiada como Nombre de usuario, Nombre completo y Dirección de correo electrónico sean asignados.

Las actualizaciones o modificaciones en usuarios existentes de ExFlow deben ejecutarse desde "Usuarios de ExFlow". Esto asegura un control centralizado y consistencia en la gestión de usuarios.
Es importante tener en cuenta que el usuario que ejecuta el Asistente de Inicio será creado como un Usuario Administrador de ExFlow. Esto le otorga privilegios administrativos de ExFlow dentro de la empresa actual.


![Asistente de Inicio - Usuarios de Business Central](/img/media/get-started-008-business-central-users.png)


### Usuarios de ExFlow

Complete la configuración de los usuarios de ExFlow finalizando sus atributos, direcciones de correo electrónico y roles de permiso. Es importante asignar con precisión valores de dimensión, códigos de comprador y otros atributos relevantes a cada usuario basándose en las especificaciones previamente definidas en la asignación de aprobación.

*Roles de Aprobación:*<br/>
•	Aprobador: Participa en el proceso de aprobación sin capacidades de cambio de codificación.<br/>
•	Aprobador (Power): Tiene la capacidad de realizar cambios de codificación durante el proceso de aprobación, basado en las Reglas de Codificación definidas.<br/>
•	Aprobador (Super): Puede realizar cambios de codificación, buscar y ver todas las facturas dentro de la empresa.<br/>
•	Admin: Destinado a administradores en ExFlow Web, proporcionando acceso a la configuración.

![Asistente de Inicio - Asignar Dimensiones](/img/media/get-started-009-assign-dimensions.png)


### Tareas Automatizadas

Ingrese un Usuario específico de Entrada de Cola de Trabajos que se utilizará para ejecutar los trabajos programados, si es necesario. El usuario debe tener los permisos necesarios para realizar las tareas que los trabajos ejecutarán.

Seleccione y programe los procesos necesarios y recordatorios por correo electrónico para automatizar su proceso de flujo de trabajo de facturas. Al configurar trabajos recurrentes, puede asegurar que tareas esenciales como importar facturas, crearlas o publicarlas, y otros procesos relevantes se realicen automáticamente en intervalos específicos.

Además, configure recordatorios por correo electrónico para mantener a los usuarios informados y solicitar su atención para aprobaciones pendientes, fechas límite próximas o cualquier otro evento importante dentro del flujo de trabajo. Mejore la comunicación y asegure un flujo fluido del procesamiento de facturas aprovechando las notificaciones por correo electrónico:

![Asistente de Inicio – Tareas Automatizadas](/img/media/get-started-010-automated-tasks.png)


### ExFlow Data Capture

Este paso es relevante para los clientes que utilizan ExFlow Data Capture como su solución OCR. Si ExFlow Data Capture no está en uso, este paso puede omitirse.

Establecer una conexión a ExFlow Data Capture es esencial para permitir una integración entre ExFlow y la solución OCR. Esta conexión permite a ExFlow importar facturas de la empresa designada y cargar datos maestros, como información de proveedores, al entorno de ExFlow Data Capture.

Haga clic en Habilitar para ingresar a la Configuración del Servicio OCR donde se debe ingresar la información necesaria.

![Asistente de Inicio – ExFlow Data Capture](/img/media/get-started-011-exflow-data-capture.png)

Para iniciar la conexión, necesitará la siguiente información proporcionada por SignUp Software:
1.	Nombre de Usuario: El nombre de usuario asociado con su cuenta de ExFlow Data Capture.
2.	Contraseña: La contraseña asociada con su cuenta de ExFlow Data Capture.
3.	Clave de Autorización: Una clave única proporcionada por SignUp Software que otorga acceso a su entorno específico de ExFlow Data Capture.
4.	Plantilla de Doc. OCR: La plantilla de documento OCR que define el diseño y la estructura de las facturas para extracción y procesamiento.

Haga clic en cerrar para volver al Asistente de Inicio.

![Asistente de Inicio – Cuenta de ExFlow Data Capture](/img/media/get-started-012-exflow-data-capture-account-card.png)

Programe la sincronización de datos maestros y marque la casilla "Habilitado" para permitir la sincronización entre ExFlow y ExFlow Data Capture.
La sincronización de proveedores desde Business Central a ExFlow Data Capture se programará para ejecutarse cada 10 minutos.<br/>


#### Opciones Adicionales

Configure opciones adicionales de acuerdo con sus requisitos específicos, puede optimizar aún más y adaptar ExFlow para satisfacer las necesidades de su organización.

•	*Principio de Cuatro Ojos*: Active esta característica para requerir la aprobación de al menos dos individuos antes de que un documento pueda ser publicado. Esta capa adicional de control asegura precisión y minimiza errores en sus procesos financieros.<br/>

•	*Cuenta Predefinida*: Simplifique la codificación de facturas para nuevos proveedores configurando una cuenta predefinida. ExFlow sugerirá automáticamente esta cuenta si no se ha definido una cuenta específica a nivel de proveedor.
Además, ExFlow utiliza su historial de Facturas de Compra Publicadas en Business Central para sugerir la codificación más probable para un procesamiento eficiente de facturas.<br/>

•	*URL a ExFlow Web*: Proporcione la URL a su ExFlow Web, otorgando fácil acceso para que los aprobadores revisen y aprueben facturas. La interfaz web fácil de usar ofrece una manera conveniente y eficiente de gestionar el proceso de aprobación.<br/>

•	*Activar Columnas Adicionales para ExFlow Web*: Mejore la interfaz de ExFlow Web activando columnas adicionales, como Grupo de Publicación de Producto de IVA y Código de Diferimiento. <br/>

Una vez que haya realizado sus selecciones y finalizado las opciones adicionales, estará listo para completar el Asistente de Inicio de ExFlow y disfrutar de todos los beneficios de ExFlow en sus operaciones comerciales.

![Asistente de Inicio – Opciones Adicionales](/img/media/get-started-014-additional-options.png)


#### Finalizar

¡Felicidades! Ha proporcionado con éxito toda la información necesaria para iniciar la configuración según sus preferencias. Haga clic en el botón "Finalizar" para concluir la configuración e iniciar la configuración de ExFlow basada en sus selecciones.

![Asistente de Inicio – Completar](/img/media/get-started-015-complete.png)


##### **Otros**

Si sale del asistente en cualquier momento, ¡no se preocupe! El sistema le mostrará la opción: Ejecutar más tarde, para guardar sus datos ingresados, permitiéndole continuar desde donde lo dejó en un momento posterior. De esta manera, puede reanudar convenientemente el proceso de configuración justo donde lo dejó sin perder ningún progreso o tener que comenzar desde cero.

![Asistente de Inicio – Mantener Datos](/img/media/get-started-016-keep-data.png)



## Cuentas de ExFlow Data Capture

Las Cuentas de ExFlow Data Capture se utilizan para establecer una conexión a ExFlow Data Capture (EDC) para la importación de facturas interpretadas y la carga de datos maestros de proveedores desde Business Central (si la Configuración del Servicio OCR no está en uso). Este proceso de configuración puede completarse ya sea durante la configuración inicial utilizando el Asistente de Inicio o manualmente.

### Pasos de Configuración
Navegue a Cuentas de ExFlow Data Capture para acceder a la configuración.
Haga clic en Nuevo para iniciar una nueva conexión.

Dé a la conexión un Código apropiado y elija el Tipo de conexión:
- *Compra* es para Facturas de Compra
- *Ventas* es para Pedidos de Venta


### Detalles de Conexión
Para completar la conexión, asegúrese de tener los siguientes detalles de conexión para establecer una conexión a EDC. Estos son proporcionados por SignUp Software o su Socio de Business Central de confianza.

- *Nombre de Usuario*
- *Contraseña*
- *Clave de Autorización*

**Plantillas de Doc. EDC Predeterminadas**
Elija la plantilla de documento utilizada para la interpretación por EDC.

**Tipo de Intercambio de Datos**
Elija "EDC2EXF" que es el Tipo de Intercambio predeterminado utilizado para EDC.
 
**Selección de Empresa:**
A diferencia de la "Configuración del Servicio OCR", la configuración de Cuentas de ExFlow Data Capture permite el uso de las mismas credenciales en todas las empresas dentro de Business Central.
Esto se debe a que la cuenta de usuario tiene acceso a todas las empresas en EDC.
Importante: Seleccione la Empresa correcta como Comprador y filtro de Datos Maestros durante la configuración para asegurar que la conexión se establezca con la empresa prevista.

![Cuenta de ExFlow Data Capture](/img/media/exflow-data-capture-account-card-001.png) 

### Finalización de la Configuración:
Verifique los detalles ingresados antes de finalizar el proceso de configuración.

Active la Sincronización de Datos Maestros para habilitar la carga de datos maestros de Proveedores.

Finalmente active "habilitar" y acepte cualquier mensaje de aviso.

Pruebe la conexión para asegurar una integración exitosa entre Business Central y ExFlow Data Capture.


## Proveedor de Licencias
Vaya a: **Proveedor de Licencias de SignUp Software**

Los nuevos clientes e instalaciones utilizarán el Proveedor de Licencias de SignUp Software.

La nueva herramienta Proveedor de Licencias ha sido actualizada para ofrecer un control más granular sobre las Aplicaciones de SignUp Software y sus características individuales. 

El Proveedor de Licencias también mejora la visibilidad de los productos con licencia y simplifica el seguimiento de los volúmenes de documentos en aplicaciones como ExFlow AP. 

Cuando se activa una licencia, se mostrará el/los producto(s) con licencia:

![pequeño](/img/media/LP-001.png)<br/>

| Menú de Proveedor de Licencias    |   | 
|:-|:-|
|SignUp| Crear un nuevo registro de cliente (la opción se ocultará cuando la licencia esté activada)
|Activar Licencia| Crear una nueva activación de instancia (la opción se ocultará cuando la licencia esté activada)
|Renovar Licencia| Renovar la licencia manualmente, cuando sea necesario. La renovación se manejará automáticamente.
|Marketplace| Enlace al [**Marketplace**](https://signupmarketplace.exflow.io/)
|Eliminar Licencia| Eliminar licencia


## Gestión de Características de ExFlow
Vaya a: **Gestión de Características de ExFlow**

La Gestión de Características de ExFlow permite a los usuarios y desarrolladores controlar cuándo se habilitan características nuevas y más grandes. 

La Gestión de Características de ExFlow funciona con el Proveedor de Licencias y solo permitirá que se habilite una característica si hay una licencia apropiada disponible para la aplicación y/o característica.

![FM](/img/media/FM-001.png)<br/>


## Asistentes de Coincidencia de Pedidos
¿Quiere comenzar también con sus documentos coincidentes con pedidos? ¡Genial! 

Encuentre y utilice nuestros Asistentes de Coincidencia de Pedidos para una configuración fácil y sin problemas para manejar sus documentos coincidentes con pedidos. 

Los asistentes son visibles dependiendo de si los clientes tienen la licencia activada a través de la Activación de Licencia ExFlow o [Proveedor de Licencias de SignUp](https://docs.exflow.cloud/business-central/docs/user-manual/welcome-to-exflow/get-started#license-provider) 


### Asistente de Coincidencia de Pedidos de Compra
Este asistente es visible para Clientes actuales que utilizan la funcionalidad original de coincidencia de pedidos. Este asistente será visible si la clave de licencia está activada a través de la Activación de Licencia ExFlow.

Lea más sobre esto en la sección [Proceso de Coincidencia de Pedidos de Compra](https://docs.signupsoftware.com/business-central/docs/user-manual/approval-workflow/purchase-order-matching-process)


### Nuevo Asistente de Coincidencia de Pedidos
El Nuevo Asistente de Coincidencia de Pedidos será visible si se utiliza el Proveedor de Licencias de SignUp y la nueva funcionalidad de Coincidencia de Pedidos está habilitada a través de la Gestión de Características de ExFlow. 

Lea más sobre esto en la sección [Nueva Experiencia de Coincidencia de Pedidos](https://docs.signupsoftware.com/business-central/docs/user-manual/approval-workflow/new-order-matching)
