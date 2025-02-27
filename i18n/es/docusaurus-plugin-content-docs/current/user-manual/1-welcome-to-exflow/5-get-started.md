---
title: Empezar
sidebar_position: 5
hide_title: true
custom_edit_url: null
---
## Empezar

### Introducción

El Asistente de Inicio Rápido de ExFlow está diseñado para agilizar el proceso de configuración inicial y poner a los usuarios en funcionamiento con ExFlow de manera rápida y eficiente. Este manual del usuario guiará a través del proceso paso a paso de usar el asistente para configurar ExFlow de acuerdo con las necesidades específicas de la organización.

Al completar el Asistente de Inicio Rápido de ExFlow, se proporcionará una configuración completamente funcional de ExFlow, adaptada a los requisitos específicos de la empresa. Los usuarios podrán importar facturas, automatizar sugerencias de aprobación basadas en atributos o roles, y experimentar los beneficios de ahorro de tiempo de la codificación inteligente y la asignación de aprobaciones de ExFlow.

Este manual del usuario proporcionará instrucciones detalladas, consejos útiles y conocimientos para garantizar un proceso de configuración fluido y exitoso. Se recomienda leer cada sección cuidadosamente, seguir los pasos secuencialmente y consultar este manual siempre que se necesite asistencia.


### Requisitos Previos

Antes de ejecutar el Asistente de Inicio Rápido de ExFlow, hay algunos requisitos previos que deben completarse. Siga estos pasos iniciales para garantizar un proceso de configuración sin problemas:

Descargar e Instalar ExFlow: Visite el mercado de Microsoft AppSource y localice la extensión ExFlow como una Prueba Gratuita.

![Asistente de Inicio Rápido - Microsoft AppSource](@site/static/img/media/get-started-001-appsource.png)

Ingrese los detalles de la empresa y seleccione en qué inquilino instalar ExFlow y en qué idioma. Una vez completada la instalación, obtenga la clave de licencia de ExFlow de su Socio Autorizado de ExFlow.

Busque Activación de Licencia de ExFlow e ingrese la clave de licencia:

![Asistente de Inicio Rápido - Activación de Licencia](@site/static/img/media/get-started-002-license-activation.png)

Una vez completados estos pasos iniciales, se puede proceder a ejecutar el Asistente de Inicio Rápido.

Nota: Es esencial tener instalada la extensión de ExFlow y la clave de licencia activada para proceder con el Asistente de Inicio Rápido de ExFlow. Si se encuentran problemas durante la instalación o activación, consulte la documentación de ExFlow o comuníquese con el equipo de soporte de ExFlow para obtener asistencia.

Busque el Asistente de Inicio Rápido de ExFlow:

![Asistente de Inicio Rápido](@site/static/img/media/get-started-003-search.png)


### Copiar Configuración de otra empresa
Si ExFlow se ha instalado y configurado previamente en otras empresas dentro del mismo inquilino, es posible utilizar la opción para copiar la configuración de ExFlow. Esta característica es particularmente valiosa cuando se necesita aplicar la misma o similar configuración a la nueva empresa.

![Asistente de Inicio Rápido - Copiar Configuración de ExFlow](@site/static/img/media/get-started-004-do-you-want-to-copy.png)

![Asistente de Inicio Rápido - Copiar Configuración de ExFlow](@site/static/img/media/get-started-005-copy-exflow-setup.png)


### Empezar

Primero, utilice el tutorial en video completo que explica cada paso del asistente, explicando el proceso de manera visual y atractiva. Simplemente haga clic en el enlace [***Ver Video***](https://www.signupsoftware.com/get-started-video/) para acceder a él y siga las instrucciones.

En segundo lugar, hemos preparado una guía detallada paso a paso que proporciona instrucciones escritas sobre cómo ejecutar el asistente. Esta guía ofrece explicaciones claras y consejos útiles para garantizar una experiencia de configuración fluida y exitosa.

![Asistente de Inicio Rápido](@site/static/img/media/get-started-006-exflow-get-started-wizard.png)


**Asignación de Aprobación**

Defina la asignación de aprobación y el orden de aprobación para los documentos entrantes. La asignación de aprobación determina cómo ExFlow asigna dinámicamente a los aprobadores a los documentos en función de atributos o valores específicos encontrados en el documento.

Como ilustración, considere el siguiente ejemplo que describe el orden deseado de aprobadores para un documento:
1. Comprador
2. Propietario de la dimensión del Departamento
3. Propietario de la dimensión de la Región
En este escenario, la asignación de aprobadores para un documento seguirá la secuencia especificada. Primero, el comprador será asignado como el aprobador inicial. Luego, el propietario de la dimensión del Departamento revisará el documento. Finalmente, el propietario de la dimensión de la Región proporcionará su aprobación.

![Asistente de Inicio Rápido - Asignación de Aprobación](@site/static/img/media/get-started-007-approval-assignment.png)


**Crear Usuarios**

Cree usuarios de ExFlow basados en una selección de usuarios de su entorno de Business Central. El Asistente de Inicio Rápido de ExFlow simplifica el proceso de agregar usuarios a ExFlow y garantiza que se asigne la información adecuada, como el nombre de usuario, el nombre completo y la dirección de correo electrónico.

Las actualizaciones o modificaciones en los usuarios existentes de ExFlow deben ejecutarse desde "Usuarios de ExFlow". Esto garantiza un control centralizado y coherencia en la gestión de usuarios.
Es importante tener en cuenta que el usuario que ejecuta el Asistente de Inicio Rápido será creado como un Usuario Administrador de ExFlow. Esto les otorga privilegios administrativos de ExFlow dentro de la empresa actual.

![Asistente de Inicio Rápido - Usuarios de Business Central](@site/static/img/media/get-started-008-business-central-users.png)


**Usuarios de ExFlow**

Complete la configuración de los usuarios de ExFlow finalizando sus atributos, direcciones de correo electrónico y roles de permisos. Es importante asignar con precisión los valores de dimensión, códigos de comprador y otros atributos relevantes a cada usuario según las especificaciones definidas previamente en la asignación de aprobación.

*Roles de Aprobación:*<br/>
• Aprobador: Participa en el proceso de aprobación sin capacidades de cambio de codificación.<br/>
• Aprobador (Poder): Tiene la capacidad de realizar cambios de codificación durante el proceso de aprobación, según las Reglas de Codificación definidas.<br/>
• Aprobador (Súper): Puede realizar cambios de codificación, buscar y ver todas las facturas dentro de la empresa.<br/>
• Administrador: Destinado a contadores y administradores de ExFlow en Business Central, proporcionando acceso a la configuración.

![Asistente de Inicio Rápido - Asignar Dimensiones](@site/static/img/media/get-started-009-assign-dimensions.png)


**Tareas Automatizadas**

Ingrese un Usuario de Entrada de Cola de Trabajo específico que se utilizará para ejecutar los trabajos programados, si es necesario. El usuario debe tener los permisos necesarios para realizar las tareas que ejecutarán los trabajos.

Seleccione y programe los procesos necesarios y los recordatorios por correo electrónico para automatizar su proceso de flujo de trabajo de facturas. Al configurar trabajos recurrentes, se puede asegurar que tareas esenciales como la importación de facturas, la creación o publicación de las mismas, y otros procesos relevantes se realicen automáticamente en intervalos especificados.

Además, configure recordatorios por correo electrónico para mantener informados a los usuarios y llamar su atención sobre aprobaciones pendientes, plazos próximos o cualquier otro evento importante dentro del flujo de trabajo. Mejore la comunicación y asegure un flujo fluido del procesamiento de facturas aprovechando las notificaciones por correo electrónico:

![Asistente de Inicio Rápido – Tareas Automatizadas](@site/static/img/media/get-started-010-automated-tasks.png)


**Captura de Datos de ExFlow**

Este paso es relevante para los clientes que utilizan la Captura de Datos de ExFlow como su solución OCR. Si no se utiliza la Captura de Datos de ExFlow, este paso se puede omitir.

Establecer una conexión con la Captura de Datos de ExFlow es esencial para habilitar una integración entre ExFlow y la solución OCR. Esta conexión permite a ExFlow importar facturas de la empresa designada y cargar datos maestros, como información de proveedores, en el entorno de Captura de Datos de ExFlow.

Haga clic en Habilitar para ingresar a la Configuración del Servicio OCR donde se necesita ingresar la información necesaria.

![Asistente de Inicio Rápido – Captura de Datos de ExFlow](@site/static/img/media/get-started-011-exflow-data-capture.png)

Para iniciar la conexión, necesitará la siguiente información proporcionada por SignUp Software:
1. Nombre de Usuario: El nombre de usuario asociado con su cuenta de Captura de Datos de ExFlow.
2. Contraseña: La contraseña asociada con su cuenta de Captura de Datos de ExFlow.
3. Clave de Autorización: Una clave única proporcionada por SignUp Software que otorga acceso a su entorno específico de Captura de Datos de ExFlow.
4. Plantilla de Documento OCR: La plantilla de documento OCR que define el diseño y la estructura de las facturas para la extracción y el procesamiento.

Haga clic en cerrar para volver al Asistente de Inicio Rápido.

![Asistente de Inicio Rápido – Cuenta de Captura de Datos de ExFlow](@site/static/img/media/get-started-012-exflow-data-capture-account-card.png)

Programe la sincronización de datos maestros y marque la casilla ''Habilitado'' para permitir la sincronización entre ExFlow y la Captura de Datos de ExFlow.
La sincronización de proveedores de Business Central a la Captura de Datos de ExFlow se programará para ejecutarse cada 10 minutos.<br/>
<br/>


**Opciones Adicionales**

Configure opciones adicionales de acuerdo con sus requisitos específicos, puede optimizar y adaptar aún más ExFlow para satisfacer las necesidades de su organización.

• *Principio de Cuatro Ojos*: Active esta función para requerir la aprobación de al menos dos personas antes de que se pueda publicar un documento. Esta capa adicional de control garantiza precisión y minimiza errores en sus procesos financieros.<br/>

• *Cuenta Predefinida*: Simplifique la codificación de facturas para nuevos proveedores configurando una cuenta predefinida. ExFlow sugerirá automáticamente esta cuenta si no se ha definido una cuenta específica a nivel de proveedor.
Además, ExFlow utiliza su historial de Facturas de Compra Publicadas en Business Central para sugerir la codificación más probable para un procesamiento eficiente de facturas.<br/>

• *URL a ExFlow Web*: Proporcione la URL a su ExFlow Web, otorgando fácil acceso a los aprobadores para revisar y aprobar facturas. La interfaz web fácil de usar ofrece una manera conveniente y eficiente de gestionar el proceso de aprobación.<br/>

• *Activar Columnas Adicionales para ExFlow Web*: Mejore la interfaz de ExFlow Web activando columnas adicionales, como el Grupo de Publicación de IVA y el Código de Diferimiento. <br/>

Una vez que haya realizado sus selecciones y finalizado las opciones adicionales, estará listo para completar el Asistente de Inicio Rápido de ExFlow y disfrutar de todos los beneficios de ExFlow en sus operaciones comerciales.

![Asistente de Inicio Rápido – Opciones Adicionales](@site/static/img/media/get-started-014-additional-options.png)


**Finalizar**

¡Felicidades! Ha proporcionado con éxito toda la información necesaria para iniciar la configuración de acuerdo con sus preferencias. Haga clic en el botón "Finalizar" para finalizar la configuración e iniciar la configuración de ExFlow según sus selecciones.

![Asistente de Inicio Rápido – Completar](@site/static/img/media/get-started-015-complete.png)


**Otros**

Si sale del asistente en cualquier momento, ¡no se preocupe! El sistema le ofrecerá una opción para guardar sus datos ingresados, lo que le permitirá continuar desde donde lo dejó en un momento posterior. De esta manera, puede retomar convenientemente el proceso de configuración justo donde lo dejó sin perder ningún progreso ni tener que empezar desde cero.

![Asistente de Inicio Rápido – Guardar Datos](@site/static/img/media/get-started-016-keep-data.png)



### Cuentas de Captura de Datos de ExFlow

Las Cuentas de Captura de Datos de ExFlow se utilizan para establecer una conexión con la Captura de Datos de ExFlow (EDC) para la importación de facturas interpretadas y la carga de datos maestros de proveedores desde Business Central (si no se utiliza la Configuración del Servicio OCR). Este proceso de configuración se puede completar durante la configuración inicial utilizando el Asistente de Inicio Rápido o manualmente.

**Pasos de Configuración:**
Navegue a Cuentas de Captura de Datos de ExFlow para acceder a la configuración.
Haga clic en Nuevo para iniciar una nueva conexión.

Asigne un Código adecuado a la conexión y elija el Tipo de conexión:
- *Compra* es para Facturas de Compra
- *Ventas* es para Órdenes de Venta


**Detalles de la Conexión:**
Para completar la conexión, asegúrese de tener los siguientes detalles de conexión para establecer una conexión con EDC. Estos son proporcionados por SignUp Software o su Socio de Business Central de confianza.

- *Nombre de Usuario*
- *Contraseña*
- *Clave de Autorización*

**Plantillas de Documentos EDC Predeterminadas**
Elija la plantilla de documento utilizada para la interpretación por EDC.

**Tipo de Intercambio de Datos**
Elija el “EDC2EXF” que es el Tipo de Intercambio predeterminado utilizado para EDC.
 
**Selección de Empresa:**
A diferencia de la "Configuración del Servicio OCR", la configuración de Cuentas de Captura de Datos de ExFlow permite el uso de las mismas credenciales en todas las empresas dentro de Business Central.
Esto se debe a que la cuenta de usuario tiene acceso a todas las empresas en EDC.
Importante: Seleccione la Empresa correcta como Comprador y el filtro de Datos Maestros durante la configuración para garantizar que la conexión se establezca con la empresa deseada.

![Cuenta de Captura de Datos de ExFlow](@site/static/img/media/exflow-data-capture-account-card-001.png) 

**Finalización de la Configuración:**
Verifique los detalles ingresados antes de finalizar el proceso de configuración.
Active la Sincronización de Datos Maestros para habilitar la carga de datos maestros de proveedores.
Finalmente, active "habilitar" y acepte cualquier mensaje de aviso.
Pruebe la conexión para asegurar una integración exitosa entre Business Central y la Captura de Datos de ExFlow.