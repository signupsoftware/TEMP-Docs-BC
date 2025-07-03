---
title: Comenzar
sidebar_position: 6
hide_title: true
custom_edit_url: null
---
## Comenzar

### Introducción

El Asistente de Inicio de ExFlow está diseñado para simplificar el proceso de configuración inicial y permitir a los usuarios comenzar a utilizar ExFlow de manera rápida y eficiente. Este manual de usuario le guiará a través del proceso paso a paso para utilizar el asistente y configurar ExFlow de acuerdo con las necesidades específicas de su organización.

Al completar el Asistente de Primeros Pasos de ExFlow, se proporcionará una configuración completamente funcional de ExFlow, adaptada a los requisitos específicos de su empresa. Los usuarios podrán importar facturas, automatizar sugerencias de aprobación basadas en atributos o roles, y experimentar los beneficios de ahorro de tiempo que ofrece la codificación inteligente y la asignación de aprobaciones de ExFlow.

Este manual de usuario proporcionará instrucciones detalladas, consejos útiles y perspectivas para garantizar un proceso de configuración fluido y exitoso. Se recomienda leer cada sección cuidadosamente, seguir los pasos de manera secuencial y consultar este manual cuando necesite asistencia.


### Requisitos previos

Antes de ejecutar el Asistente de Primeros Pasos de ExFlow, hay algunos requisitos previos que deben completarse. Siga estos pasos iniciales para asegurar un proceso de configuración sin problemas:

[Visite el marketplace de Microsoft AppSource y localice la extensión ExFlow como Prueba Gratuita](https://appsource.microsoft.com/es-es/product/dynamics-365-business-central/PUBID.signup-software-ab%7CAID.31407efc-8e13-4752-b577-5e992428aa29%7CPAPPID.a53707ce-b9e1-4f4e-93be-ea3aae783cae?tab=Overview) 

![Asistente de Primeros Pasos - Microsoft AppSource](/img/media/get-started-001-appsource.png)

Introduzca los detalles de la empresa y seleccione en qué inquilino instalar ExFlow y qué idioma utilizar. Una vez completada la instalación, obtenga la clave de licencia de ExFlow de su Partner autorizado de ExFlow.

### Licencia 

Es esencial tener la extensión ExFlow instalada y la clave de licencia disponible para proceder con el Asistente de Primeros Pasos de ExFlow. 

Una vez completados estos pasos iniciales, podrá proceder a ejecutar el Asistente de Primeros Pasos.

#### Licencia para nuevas instalaciones
El manejo de licencias para instalaciones completamente nuevas de BC Online puede ser gestionado a través del [Proveedor de Licencias](https://docs.signupsoftware.com/business-central/docs/user-manual/welcome-to-exflow/get-started#license-provider) para clientes del Programa Piloto. 


### Copiar configuración de otra empresa
Si ExFlow ha sido instalado y configurado previamente en otras empresas dentro del mismo inquilino, es posible utilizar la opción para copiar la configuración de ExFlow. 

Esta función es particularmente valiosa cuando hay necesidad de aplicar la misma configuración o configuraciones similares a la nueva empresa.

![Asistente de Primeros Pasos - Copiar Configuración de ExFlow](/img/media/get-started-004-do-you-want-to-copy.png)

![Asistente de Primeros Pasos - Copiar Configuración de ExFlow](/img/media/get-started-005-copy-exflow-setup.png)


## Asistente de Primeros Pasos

Busque **Asistente de Primeros Pasos de ExFlow**:

![Asistente de Primeros Pasos](/img/media/get-started-003-search.png)

En primer lugar, utilice el completo video tutorial que guía a través de cada paso del asistente, explicando el proceso de manera visual y atractiva. Simplemente haga clic en el enlace [***Ver Video***](https://www.signupsoftware.com/get-started-video/) para acceder a él y seguir las instrucciones.

En segundo lugar, hemos preparado una detallada guía paso a paso que proporciona instrucciones escritas sobre cómo ejecutar el asistente. Esta guía ofrece explicaciones claras y consejos útiles para asegurar una experiencia de configuración fluida y exitosa.

![Asistente de Primeros Pasos](/img/media/get-started-006-exflow-get-started-wizard.png)

### Activación de Licencia de ExFlow

Este paso proporcionará información sobre el Modelo de Licencia y su activación.

Ingrese la clave de licencia proporcionada y haga clic en ''Siguiente'' para continuar.

![Asistente de Primeros Pasos ](/img/media/get-started-002-license-activation-2.png) 

### Asignación de Aprobaciones

Defina la asignación de aprobaciones y el orden de aprobación para los documentos entrantes. La asignación de aprobaciones determina cómo ExFlow asigna dinámicamente los aprobadores a los documentos en función de atributos o valores específicos que se encuentran en el documento.

Como ilustración, considere el siguiente ejemplo que describe el orden deseado de los aprobadores para un documento:<br/>
1.	Comprador<br/>
2.	Dueño de dimensión del departamento<br/>
3.	Dueño de dimensión de la región<br/>
En este escenario, la asignación de aprobadores para un documento seguirá la secuencia especificada. Primero, el comprador será asignado como el primer aprobador. A continuación, el dueño de la dimensión del departamento revisará el documento. Finalmente, el dueño de la dimensión de la región dará su aprobación.

![Asistente de Primeros Pasos - Asignación de Aprobaciones](/img/media/get-started-007-approval-assignment.png)


### Crear Usuarios

Cree usuarios de ExFlow basados en una selección de usuarios de su entorno de Business Central. El Asistente de Primeros Pasos de ExFlow simplifica el proceso de agregar usuarios a ExFlow y asegura que la información apropiada como Nombre de usuario, Nombre completo y Dirección de correo electrónico sean asignados.

Las actualizaciones o modificaciones en los usuarios existentes de ExFlow deben ejecutarse desde "Usuarios de ExFlow". Esto asegura un control centralizado y consistencia en la gestión de usuarios.

Es importante notar que el usuario que ejecute el Asistente de Primeros Pasos será creado como un Usuario Administrador de ExFlow. Esto les otorga privilegios administrativos de ExFlow dentro de la empresa actual.


![Asistente de Primeros Pasos - Usuarios de Business Central](/img/media/get-started-008-business-central-users.png)


### Usuarios de ExFlow

Complete la configuración de los usuarios de ExFlow finalizando sus atributos, direcciones de correo electrónico y roles de permiso. 

Es importante asignar con precisión los valores de las dimensiones, los códigos de comprador y otros atributos relevantes a cada usuario según las especificaciones definidas previamente en la asignación de aprobaciones.

#### Roles de Permiso
•	**Aprobador:** Participa en el proceso de aprobación sin capacidades de cambio de codificación.<br/>
•	**Aprobador (Potente):** Tiene la capacidad de realizar cambios de codificación durante el proceso de aprobación, según las Reglas de Codificación definidas.<br/>
•	**Aprobador (Super):** Puede realizar cambios de codificación, buscar y ver todas las facturas dentro de la empresa.<br/>
•	**Administrador:** Destinado a administradores en ExFlow Web, proporcionando acceso a la configuración.

![Asistente de Primeros Pasos - Asignar Dimensiones](/img/media/get-started-009-assign-dimensions.png)


### Tareas Automatizadas

Ingrese un Usuario de Entrada de Cola de Trabajo específico que se utilizará para ejecutar los trabajos programados, si es necesario. El usuario debe tener los permisos necesarios para realizar las tareas que ejecutarán los trabajos.

Seleccione y programe los procesos necesarios y los recordatorios por correo electrónico para automatizar su proceso de flujo de trabajo de facturas. Al configurar trabajos recurrentes, podrá asegurarse de que las tareas esenciales, como la importación de facturas, su creación o publicación, y otros procesos relevantes se realicen automáticamente en intervalos especificados.

Además, configure recordatorios por correo electrónico para mantener informados a los usuarios y solicitar su atención para aprobaciones pendientes, plazos próximos o cualquier otro evento importante dentro del flujo de trabajo. Mejore la comunicación y asegure un flujo suave del procesamiento de facturas aprovechando las notificaciones por correo electrónico:

![Asistente de Primeros Pasos – Tareas Automatizadas](/img/media/get-started-010-automated-tasks.png)


### Captura de Datos de ExFlow

Este paso es relevante para los clientes que utilizan la Captura de Datos de ExFlow como su solución OCR. Si no se utiliza la Captura de Datos de ExFlow, se puede omitir este paso.

Establecer una conexión con la Captura de Datos de ExFlow es esencial para habilitar una integración entre ExFlow y la solución OCR. Esta conexión permite a ExFlow importar facturas de la empresa designada y cargar datos maestros, como información de proveedores, en el entorno de Captura de Datos de ExFlow.

Haga clic en Habilitar para ingresar a la Configuración del Servicio OCR donde se debe ingresar la información necesaria.

![Asistente de Primeros Pasos – Captura de Datos de ExFlow](/img/media/get-started-011-exflow-data-capture.png)

Para iniciar la conexión, necesitará la siguiente información proporcionada por SignUp Software:
1.	**Nombre de Usuario:** El nombre de usuario asociado con su cuenta de Captura de Datos de ExFlow.
2.	**Contraseña:** La contraseña asociada con su cuenta de Captura de Datos de ExFlow.
3.	**Clave de Autorización:** Una clave única proporcionada por SignUp Software que otorga acceso a su entorno específico de Captura de Datos de ExFlow.
4.	**Plantilla de Documento OCR:** La plantilla de documento OCR que define el diseño y la estructura de las facturas para la extracción y procesamiento.

Haga clic en cerrar para volver al Asistente de Primeros Pasos.

![Asistente de Primeros Pasos – Cuenta de Captura de Datos de ExFlow](/img/media/get-started-012-exflow-data-capture-account-card.png)

Programe la sincronización de datos maestros y marque la casilla ''Habilitado'' para permitir la sincronización entre ExFlow y la Captura de Datos de ExFlow.

La sincronización de proveedores desde Business Central a la Captura de Datos de ExFlow se programará para ejecutarse cada 10 minutos.<br/>


#### Opciones Adicionales

Configure opciones adicionales de acuerdo con sus requisitos específicos, puede optimizar y personalizar aún más ExFlow para adaptarse a las necesidades de su organización.

•	**Principio de Cuatro Ojos:** Active esta función para requerir la aprobación de al menos dos personas antes de que un documento pueda ser publicado. Este nivel adicional de control asegura precisión y minimiza errores en sus procesos financieros.<br/>

•	**Cuenta Predefinida:** Simplifique la codificación de facturas para nuevos proveedores configurando una cuenta predefinida. ExFlow sugerirá automáticamente esta cuenta si no se ha definido una cuenta específica a nivel de proveedor.
Además, ExFlow utiliza el historial de Facturas de Compra Publicadas en Business Central para sugerir la codificación más probable para un procesamiento eficiente de las facturas.<br/>

•	**URL a ExFlow Web:** Proporcione la URL a su ExFlow Web, otorgando fácil acceso a los aprobadores para revisar y aprobar facturas. La interfaz web fácil de usar ofrece una manera conveniente y eficiente de gestionar el proceso de aprobación.<br/>

•	**Activar Columnas Adicionales para ExFlow Web:** Mejore la interfaz de ExFlow Web activando columnas adicionales, como el Grupo de Publicación de IVA y el Código de Diferimiento. <br/>

Una vez que haya realizado sus selecciones y finalizado las opciones adicionales, está listo para completar el Asistente de Primeros Pasos de ExFlow y disfrutar de los beneficios completos de ExFlow en las operaciones de su negocio.

![Asistente de Primeros Pasos – Opciones Adicionales](/img/media/get-started-014-additional-options.png)


#### Finalizar

¡Felicidades! Ha proporcionado con éxito toda la información necesaria para iniciar la configuración de acuerdo con sus preferencias. 

Haga clic en el botón "Finalizar" para completar la configuración e iniciar la configuración de ExFlow basada en sus selecciones.

![Asistente de Primeros Pasos – Completo](/img/media/get-started-015-complete.png)


##### Otro

Si sale del asistente en cualquier momento, ¡no se preocupe! El sistema le mostrará la opción: Ejecutar Más Tarde, para guardar los datos ingresados, lo que le permitirá continuar desde donde lo dejó en otro momento. 

De esta manera, podrá reanudar cómodamente el proceso de configuración justo donde lo dejó sin perder ningún progreso o tener que comenzar desde cero.

![Asistente de Primeros Pasos – Conservar Datos](/img/media/get-started-016-keep-data.png)

## Cuentas de Captura de Datos de ExFlow

Las Cuentas de Captura de Datos de ExFlow se utilizan para establecer una conexión con la Captura de Datos de ExFlow (EDC) para la importación de facturas interpretadas y la carga de datos maestros de proveedores desde Business Central (si no se utiliza la Configuración del Servicio OCR). 

Este proceso de configuración se puede completar durante la configuración inicial utilizando el Asistente de Primeros Pasos o manualmente.

### Pasos de Configuración
Navegue a Cuentas de Captura de Datos de ExFlow para acceder a la configuración.

Haga clic en Nuevo para iniciar una nueva conexión.

Dé un código apropiado a la conexión y elija el tipo de conexión:

- *Compra* es para Facturas de Compra
- *Ventas* es para Órdenes de Venta


### Detalles de la Conexión
Para completar la conexión, asegúrese de tener los siguientes detalles de conexión para establecer una conexión con EDC. Estos son proporcionados por SignUp Software o su Socio de Business Central de confianza.

- *Nombre de Usuario*<br/>
- *Contraseña*<br/>
- *Clave de Autorización*<br/>

**Plantillas de Documento EDC Predeterminadas**
Elija la plantilla de documento utilizada para la interpretación por EDC.

**Tipo de Intercambio de Datos**
Elija "EDC2EXF" que es el Tipo de Intercambio predeterminado utilizado para EDC.
 
**Selección de Empresa:**
A diferencia de la "Configuración del Servicio OCR" la configuración de las Cuentas de Captura de Datos de ExFlow permite el uso de las mismas credenciales en todas las empresas dentro de Business Central.

Esto se debe a que la cuenta de usuario tiene acceso a todas las empresas en EDC.

**Importante:** Seleccione la empresa correcta como Comprador y Filtro de Datos Maestros durante la configuración para asegurar que la conexión se establezca con la empresa deseada.

![Cuenta de Captura de Datos de ExFlow](/img/media/exflow-data-capture-account-card-001.png) 

### Finalizando la Configuración:
Verifique los detalles ingresados antes de finalizar el proceso de configuración.

Active la Sincronización de Datos Maestros para habilitar la carga de datos maestros de proveedores.

Finalmente active "habilitar" y acepte cualquier mensaje de aviso.

Pruebe la conexión para asegurar una integración exitosa entre Business Central y la Captura de Datos de ExFlow.


## Proveedor de Licencias
Ir a: **Proveedor de Licencias de ExFlow**

Los nuevos clientes y las nuevas instalaciones pueden utilizar el Proveedor de Licencias de ExFlow.

La nueva herramienta Proveedor de Licencias ha sido actualizada para ofrecer un control más granular sobre las Aplicaciones de SignUp Software y sus características individuales. 

El Proveedor de Licencias también mejora la visibilidad de los productos licenciados y simplifica el seguimiento de los volúmenes de documentos en aplicaciones como ExFlow AP. 

Cuando una licencia es activada, el/los producto(s) licenciado(s) serán mostrados:

![LP](/img/media/LP-001.png)<br/>

| Menú del Proveedor de Licencias    |   | 
|:-|:-|
|SignUp| Crear un nuevo registro de cliente (la opción estará oculta cuando la licencia esté activada)
|Activar Licencia| Crear una nueva activación de instancia (la opción estará oculta cuando la licencia esté activada)
|Renovar Licencia| Renovar la licencia manualmente, cuando sea necesario. La renovación será manejada automáticamente.
|Marketplace| Enlace a [**Marketplace**](https://signupmarketplace.exflow.io/)
|Eliminar Licencia| Eliminar licencia


## Gestión de Características de ExFlow
Ir a: **Gestión de Características de ExFlow**

La Gestión de Características de ExFlow permite a usuarios y desarrolladores controlar cuándo se habilitan nuevas y mayores características. 

La Gestión de Características de ExFlow funciona con el Proveedor de Licencias y solo permitirá que una característica sea habilitada si una licencia apropiada está disponible para la aplicación y/o característica.

![FM](/img/media/FM-001.png)<br/>


## Asistentes de Conciliación de Pedidos
¿Quiere comenzar también con sus documentos conciliados por pedido? ¡Genial! 

Encuentre y utilice nuestros Asistentes de Conciliación de Pedidos para una configuración fácil y sin problemas para manejar sus documentos conciliados por pedido. 

Los asistentes son visibles dependiendo de si los clientes tienen la licencia activada a través de la [Activación de Licencia de ExFlow](https://docs.exflow.cloud/business-central/docs/user-manual/welcome-to-exflow/get-started#license) o el [Proveedor de Licencias](https://docs.exflow.cloud/business-central/docs/user-manual/welcome-to-exflow/get-started#license-provider) 


### Asistente de Conciliación de Pedidos de Compra
Este asistente es visible para los Clientes actuales que utilizan la funcionalidad original de conciliación de pedidos. Este asistente será visible si la clave de licencia está activada a través de la Activación de Licencia de ExFlow.

Lea más sobre esto en la sección [Proceso de Conciliación de Pedidos de Compra](https://docs.signupsoftware.com/business-central/docs/user-manual/approval-workflow/purchase-order-matching-process)


### Nuevo Asistente de Conciliación de Pedidos
El Nuevo Asistente de Conciliación de Pedidos será visible si se utiliza el Proveedor de Licencias y la nueva funcionalidad de conciliación de pedidos está habilitada a través de la Gestión de Características de ExFlow. 

Tenga en cuenta: Esta característica será habilitada para todas las empresas. Cuando se desactive, también se desactivará para todas las empresas.

Lea más sobre esto en la sección [Nueva Experiencia de Conciliación de Pedidos](https://docs.signupsoftware.com/business-central/docs/user-manual/approval-workflow/new-order-matching)
