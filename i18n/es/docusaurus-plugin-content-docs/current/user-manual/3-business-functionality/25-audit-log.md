---
title: Registro de Auditoría
sidebar_position: 25
hide_title: true
custom_edit_url: null
---
## Registro de Auditoría
El Registro de Auditoría de ExFlow se basa en el Registro de Cambios estándar de Business Central para proporcionar un registro mejorado y fácil de usar de los cambios realizados en los documentos en ExFlow. Cuando está activado, el Registro de Auditoría rastrea todos los cambios realizados en un documento desde la importación hasta la publicación. Vea los cambios en los documentos en un formato resumido basado en estados y acciones de la factura, o vea los cambios en un formato detallado que rastrea los cambios a nivel de campo.

### Activar el Registro de Auditoría
Para activar el Registro de Auditoría, busque y vaya a **Configuración del Registro de Auditoría de ExFlow**.

En la página de Configuración del Registro de Auditoría de ExFlow:

* Seleccione una Plantilla de Registro de Auditoría (vea más información sobre las plantillas de registro de auditoría a continuación)
* En la cinta, haga clic en “Configuración del Registro de Cambios”<br/><br/>
    ![Configuración del Registro de Auditoría de ExFlow](@site/static/img/media/audit-log-setup-001.png)<br/>

* En la página de Configuración del Registro de Cambios, active “Registro de Cambios Activado”<br/>

    ![Configuración del Registro de Cambios](@site/static/img/media/change-log-setup-001.png)


La configuración en la Plantilla de Registro de Auditoría seleccionada se aplicará al registro de cambios estándar de Business Central. Para ver la configuración del registro de cambios aplicada, en la página de Configuración del Registro de Cambios, primero haga clic en “Más opciones” y luego seleccione ***Acciones --> Configuración --> Otros --> Tablas***.

![Configuración del Registro de Cambios](@site/static/img/media/change-log-setup-002.png)

![Lista de Tablas de Configuración del Registro de Cambios](@site/static/img/media/change-log-setup-table-list-001.png)


### Plantillas de Registro de Auditoría
Una plantilla de Registro de Auditoría define las tablas y campos que se rastrearán en el Registro de Auditoría de ExFlow. Habrá una plantilla predeterminada “BASE” disponible para su uso, pero se pueden crear plantillas personalizadas adicionales. Abra la plantilla BASE para ver las tablas y campos incluidos:
* Busque y vaya a “Plantillas de Registro de Auditoría de ExFlow”.
* En la lista de Plantillas de Registro de Auditoría de ExFlow, haga clic en el Código para abrir la plantilla.

  ![Plantillas de Registro de Auditoría de ExFlow](@site/static/img/media/audit-log-templates-001.png)

La plantilla “BASE” no se puede cambiar, pero se puede copiar para crear una plantilla personalizada.

#### Crear una Plantilla Personalizada
Para crear una Plantilla Personalizada, primero se debe copiar la plantilla Base, luego se pueden realizar cambios en la plantilla recién creada.
* Abra la Plantilla “Base”
* Seleccione “Copiar Plantilla” en la cinta.<br/><br/>
    ![Tarjeta de Plantilla de Registro de Auditoría de ExFlow](@site/static/img/media/audit-log-template-card-001.png)

* Ingrese un Nuevo Nombre de Plantilla y una descripción.<br/><br/>
    ![Copiar Plantilla de Registro de Auditoría de ExFlow](@site/static/img/media/audit-log-001-copy-template.png)

* Abra la plantilla recién creada. <br/> 
**Para registrar cambios** en todos los campos de una tabla listada, active la opción “Registrar Todos los Campos”.<br/>

![Tarjeta de Plantilla de Registro de Auditoría de ExFlow](@site/static/img/media/audit-log-template-card-002.png)<br/><br/>
**Para seleccionar ciertos campos** a registrar:<br/>
Seleccione la tabla deseada, asegurándose de que la opción “Registrar Todos los Campos” esté desactivada, luego actualice la sección “Campos” (parte inferior de la pantalla) según sea necesario:<br/><br/>
**Para agregar un campo**, haga clic en “Nueva Línea” y luego seleccione el campo deseado en la línea recién creada.<br/><br/>
**Para eliminar un campo**, seleccione el campo deseado y luego haga clic en “Eliminar Línea”.

### Ver el Registro de Auditoría para un Documento de ExFlow 

Vaya a: **Historial de Estado de Aprobación de ExFlow --> Relacionado --> Registro de Auditoría** 

Después de que un documento haya sido publicado, el registro de auditoría es accesible desde el Historial de Estado de Aprobación. En este punto del proceso, todas las acciones desde la importación hasta la publicación serán visibles en la Vista Resumida y todos los cambios a nivel de campo se pueden ver desde la Vista Detallada.

![Registro de Auditoría](@site/static/img/media/audit-log-approval-status-history-001.png)

El Registro de Auditoría se abrirá en **Vista Resumida** donde verá una lista de las acciones del documento que han ocurrido desde que se importó el documento (importado, verificado, coincidente con el recibo, etc.) con una marca de fecha y hora que indica cuándo ocurrió la acción. El Área indica dónde estaba el documento en el proceso de ExFlow cuando ocurrió la acción.<br/>

![Vista – Resumen del Registro de Auditoría](@site/static/img/media/view-audit-log-overview-001.png)

La información en esta vista se puede exportar a Excel seleccionando la acción “Exportar a Excel” en la cinta.<br/>

![Registro de Auditoría](@site/static/img/media/audit-log-excel-001.png)

Para ver todas las entradas del registro de cambios estándar de Business Central para una sola línea de acción, profundice en la línea haciendo clic en cualquier valor de campo en la línea. Si no se registraron cambios para la acción, recibirá un mensaje “No se encontraron cambios”.

![Vista – Entradas del Registro de Cambios](@site/static/img/media/view-change-log-entries-001.png)

Para ver todos los cambios realizados en el documento, desde la página de Vista Resumida, haga clic en **Vista Detallada --> Ver Documento Completo.**<br/>

![Vista – Resumen del Registro de Auditoría](@site/static/img/media/view-audit-log-overview-002.png)


La **Vista Detallada --> Ver Área** enumerará todos los campos segregados en secciones como sigue:
* Encabezado
* Líneas
* Aprobadores


![Registro de Auditoría](@site/static/img/media/view-audit-log-overview-003.png)

Cada campo se presentará como una línea separada con columnas que muestran todos los cambios realizados en el campo junto a la acción a la que se relacionó el cambio. Los cambios más recientes se mostrarán en las columnas de la izquierda. Para ver cambios anteriores, desplácese hacia la derecha para ver columnas adicionales. Si hay una cantidad significativa de cambios, haga clic en Conjunto Siguiente para ver cambios adicionales.

En el ejemplo mostrado a continuación, podemos ver que el cambio más reciente (a las 10:34:53 AM del 29/6/23) fue realizado por el usuario KONNIE:
* El aprobador fue cambiado de SAM a MARK (ver fila “Aprobador” en la captura de pantalla a continuación)
* El aprobador original (SAM) fue asignado por la Regla de Aprobación MARKETING (ver fila “Agregado desde Regla de Aprobación” en la captura de pantalla a continuación)
* El nuevo aprobador (MARK) fue asignado manualmente por el usuario KONNIE (ver fila “Creado En” en la captura de pantalla a continuación)

**Nota:** El valor original se muestra a la izquierda de la flecha y el nuevo valor se muestra a la derecha.

![Registro de Auditoría](@site/static/img/media/audit-log-detailed-view-001.png)


### Eliminar Entradas Caducadas  

Vaya a: **Configuración del Registro de Auditoría de ExFlow --> Eliminar Entradas Caducadas**

![Registro de Auditoría](@site/static/img/media/audit-log-delete-entries-001.png)

Similar a la funcionalidad estándar, es posible ingresar una Period DateFormula en la Configuración del Registro de Auditoría, para usar al eliminar entradas antiguas del registro de auditoría.

Para este ejemplo, se agregan siete años, y las entradas del registro de auditoría de ExFlow anteriores a siete años se eliminarán al utilizar esta función. 

![Registro de Auditoría](@site/static/img/media/audit-log-delete-entries-002.png)