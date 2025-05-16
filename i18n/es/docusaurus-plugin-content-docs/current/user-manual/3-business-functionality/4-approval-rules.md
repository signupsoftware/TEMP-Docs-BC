---
title: Reglas de Aprobación
sidebar_position: 4
hide_title: true
custom_edit_url: null
---
## Reglas de Aprobación

Ir a: ***Configuración de ExFlow - Descripción general --> Reglas de Aprobación de ExFlow***

Para automatizar la selección de aprobadores se pueden usar las Reglas de Aprobación de ExFlow.

Las Reglas de Aprobación se utilizan en función de los filtros asignados. Cuantos más filtros se asignen, mayor será la prioridad de la Regla de Aprobación. Todos los filtros asignados deben coincidir con los datos del documento si la Regla de Aprobación debe aplicarse automáticamente.

La Regla de Aprobación puede tener filtros para que se utilice solo cuando se usa una determinada combinación de valores de dimensión, Proyecto, Proveedor, Cuenta G/L, etc. La regla agrega un flujo de aprobación.

Una Regla de Aprobación tiene uno o más Grupos de Aprobación. Los Grupos de Aprobación se agregan en las Líneas de la Regla de Aprobación.

### Crear una Nueva Regla de Aprobación
Haga clic en "Nuevo" y cree la regla.

### Regla de Aprobación – General
| General      |	|
|:-|:-|
| **Código:**                         | Agregar un código que describa la Regla de Aprobación
| **Nombre:**                         | Agregar un nombre que describa el Código
| **Regla Para:**                     | Es posible crear Reglas de Aprobación separadas para todos los tipos de documentos: Factura, Nota de Crédito, Orden y Cotización. Abra "Regla Para" para seleccionar el tipo de documento: <br/>![Regla de Aprobación General](@site/static/img/media/approval-rule-001-general.png) <br/>Marque "Usar" para el tipo de documento seleccionado. Es posible elegir más de un tipo de documento dentro de la misma regla de aprobación <br/>![Regla para Tipo de Documento](@site/static/img/media/rule-for-document-type-001.png) <br/> Y la nueva Regla de Aprobación de ExFlow solo se aplicará para el tipo de documento elegido. <br/> ![Regla de Aprobación General](@site/static/img/media/approval-rule-002-general.png)
| **Regla para Facturas:**            | Para Facturas es posible agregar una regla para: <br/> Facturas de cuenta de costos, Emparejadas contra Orden de Compra, PO Conectada con Diferencia o PO Conectada sin Diferencia <br/> ![Regla de Aprobación General](@site/static/img/media/approval-rule-003-rule-for-invoices.png)
| **Deshabilitado:**                     | Cuando una Regla de Aprobación está Deshabilitada, solo se puede usar al aplicarla manualmente o mediante Referencia
| **Prioridad:**                     | Si hay varias Reglas de Aprobación con el mismo número de coincidencias, la regla de aprobación con el número más alto en prioridad se agregará automáticamente
| **Usar Monto Total de la Factura:**     | Activar si la regla debe agregar Grupos de Aprobación en función del monto total del documento o del monto en la línea actual
| **Aprobación Confidencial:**     | Activar Aprobación Confidencial para configurar un flujo de aprobación filtrado en usuarios con Acceso Confidencial
| **Cambiado Por:**                   | Último usuario que cambió y guardó la configuración de la regla actual
| **Fecha de Cambio:**                 | Última fecha y hora en que se cambió la regla actual


### Regla de Aprobación – Filtros
Se pueden seleccionar dos filtros para dimensiones en combinación en una Regla de Aprobación. Todos los filtros asignados y filtros adicionales deben coincidir con los datos del documento si la Regla de Aprobación debe aplicarse automáticamente.

Al seleccionar un valor, la opción se activará automáticamente.

| Filtros      |	|
|:-|:-|
|**Código de Dimensión 1:**              | Elegir un Código de Dimensión
| **Filtro de Valor de Dimensión 1:**     | Filtro: Elegir un Valor de Dimensión para el Código de Dimensión seleccionado
| **Código de Dimensión 2:**             | Elegir un segundo Código de Dimensión
| **Filtro de Valor de Dimensión 2:**     | Filtro: Elegir un Valor de Dimensión para el segundo Código de Dimensión seleccionado
| **Filtro de Primer Aprobador:**        | Se puede agregar al documento al interpretar una referencia. <br/> Lea más en la sección [***Funcionalidad Empresarial --> Códigos de Referencia***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/reference-codes)
| **Filtro de Proveedor:**                | Seleccionar uno o varios Números de Proveedor

![Filtros de Regla de Aprobación](@site/static/img/media/approval-rule-004-filters.png)


### Regla de Aprobación - Filtros Adicionales
Todos los filtros asignados y Filtros Adicionales deben coincidir con los datos del documento si la Regla de Aprobación debe aplicarse automáticamente.

Al seleccionar un valor, la opción se activará automáticamente.

| Filtros Adicionales      |	|
|:-|:-|
|**Tipo de Línea:**                     | Elegir tipo de línea Cuenta G/L, Artículo, Recurso, Activo Fijo o Cargo (Artículo)
| **Filtro de Tipo de Línea:**             | Agregar valor para el Tipo de Línea seleccionado
| **Filtro de Comprador:**             | Agregar filtro para Comprador
| **Filtro de Proyecto:**                | Agregar Filtro de Proyecto
| **Filtro de Persona Responsable:**    | Agregar filtro para Persona Responsable en Proyectos
| **Grupo de Publicación de Proveedor**:         | Agregar filtro para Grupo de Publicación de Proveedor

![Filtros Adicionales de Regla de Aprobación](@site/static/img/media/approval-rule-005-additional-filters.png)


### Líneas de Regla de Aprobación
Agregar tantos Grupos de Aprobación como sea necesario para la Regla de Aprobación. Con el principio de cuatro ojos (dos aprobadores) agregar al menos dos grupos. Con el principio de seis ojos (tres aprobadores) agregar al menos tres grupos.

Una Regla de Aprobación siempre debe contener al menos un Grupo de Aprobación con "Sobre Monto" y "No Sobre Monto" establecidos en cero. Si no, existe el riesgo de que la factura no salga para aprobación y no se pueda publicar.


Si se requiere que al menos dos usuarios aprueben la línea del documento, entonces se podría usar una configuración como la siguiente:

![Líneas de Regla de Aprobación](@site/static/img/media/approval-rule-lines-001.png)


Si un grupo de aprobación siempre aprueba y el segundo solo aprueba montos superiores a 10 000, entonces se podría usar una configuración como la siguiente:

![Líneas de Regla de Aprobación](@site/static/img/media/approval-rule-lines-002.png)


Con el principio de cuatro ojos (dos aprobadores) y el segundo Grupo de Aprobadores es diferente dependiendo del Monto.

Si el primer aprobador es el Grupo de Aprobación 1 y siempre aprueba, el segundo aprobador dependiendo del monto de 10 000, entonces se podría usar una configuración como la siguiente. El Grupo de Aprobación 2 solo aprobará documentos con un monto de hasta 9 999,99 y el Grupo de Aprobación 3 a partir de 10 000 o más:

![Líneas de Regla de Aprobación](@site/static/img/media/approval-rule-lines-003.png)

## Flujo de trabajo

### Proponer Siempre Nuevos Aprobadores
Ir a: ***Configuración --> Configuración de ExFlow --> Aprobación --> Proponer Siempre Nuevos Aprobadores***

Las Reglas de Aprobación y las Reglas de Aprobación Dinámica permiten que ExFlow identifique y aplique automáticamente Reglas de Aprobación o Flujo de Aprobación Dinámica para documentos que han sido modificados por cualquier usuario en ExFlow Web.


**Ejemplo para Regla de Aprobación sin Tipo de Aprobación Dinámica:**<br/>
Las Reglas de Aprobación están impulsadas por el Departamento de Dimensión.

La factura se codifica inicialmente con el Departamento "ADM" y se aplica la Regla de Aprobación con filtro para ADM.

Durante la aprobación en ExFlow Web, un usuario cambia el departamento a "VENTAS" y aprueba la factura.

La lógica de Proponer Siempre Nuevos Aprobadores ahora reemplazará la Regla de Aprobación anterior para aplicar una nueva que esté impulsada por "VENTAS".

Se aplicarán nuevas Reglas de Aprobación si la codificación de la factura se ha cambiado para coincidir con una Regla de Aprobación mejor una vez que el usuario apruebe la factura. No se aplicará si el usuario no aprueba la factura.



**Ejemplo para Regla de Aprobación Dinámica con Tipo de Aprobación Dinámica:**<br/>
Si las Reglas de Aprobación están impulsadas por el Propietario de la Dimensión para el Departamento.
Para la configuración, lea más en la sección [***Funcionalidad Empresarial --> Reglas de Aprobación --> Flujo de Aprobación Dinámica para Propietarios de Dimensiones***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/approval-rules#dynamic-approval-flow-for-dimension-owners) a continuación.

La factura se codifica inicialmente con el Departamento "ADM" y se aplica la Regla de Aprobación para el Propietario de la Dimensión.

Durante la aprobación en ExFlow Web, un usuario cambia el departamento a "VENTAS" y aprueba la factura.

La lógica de Proponer Siempre Nuevos Aprobadores ahora reemplazará a los Aprobadores anteriores en la misma Regla de Aprobación para aplicar aprobadores que estén impulsados por "VENTAS".

Esto no cambiará la Regla de Aprobación, solo los Aprobadores de la Configuración del Propietario de la Dimensión.


**Nota**<br/>
Las Reglas de Aprobación Dinámica no se aplicarán si la Regla de Aprobación de la factura fue agregada por una Referencia de ExFlow, o agregada manualmente en el Diario de Importación. Esto puede ser útil para documentos sensibles.

Cualquier aprobador adicional que se haya agregado manualmente a un documento no será reemplazado cuando ExFlow Web aplique una nueva Regla de Aprobación. Solo reemplazará a los usuarios que se hayan agregado automáticamente.

Las Reglas de Aprobación también se pueden usar con Grupos de Aprobación basados en "Tipo de Aprobación Dinámica" como Propietarios de Dimensiones, Persona Responsable, etc. Para la configuración, lea más en la sección [***Reglas de Aprobación --> Flujo de Aprobación Dinámica para Propietarios de Dimensiones,***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/approval-rules#dynamic-approval-flow-for-dimension-owners) [***Proyectos,***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/approval-rules#dynamic-approval-flow-for-projects) o [***Compradores***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/approval-rules#dynamic-approval-flows-purchasers) a continuación.

La forma en que funciona esta funcionalidad es que ExFlow Web aplicará automáticamente Reglas de Aprobación mejor adaptadas si se identifican. Los aprobadores restantes de la Regla de Aprobación anterior serán eliminados y se agregarán nuevos aprobadores de la nueva Regla de Aprobación.


### Flujo de Aprobación Dinámica para Propietarios de Dimensiones
ExFlow Dimension Owners es una herramienta para limitar la cantidad de Reglas de Aprobación utilizadas y en su lugar seleccionar los aprobadores correctos de manera dinámica. Es posible combinar diferentes valores de dimensión en la misma regla con un orden establecido basado en el Grupo de Aprobación.

![Flujo de Aprobación Dinámica - Propietario de Dimensión](@site/static/img/media/dynamic-approval-flow-for-dimension-owners-001.png)


**Conectando Grupos de Aprobación a Valores de Dimensión**<br/>
Ir a: ***Configuración de ExFlow - Descripción general --> Propietarios de Dimensiones de ExFlow***

Configurar un flujo de aprobación para un valor de dimensión específico. Abra una nueva tarjeta haciendo clic en "Nuevo".

Seleccione la Dimensión y el Valor de Dimensión.
Luego ingrese los aprobadores que deben estar incluidos para este Valor de Dimensión.
Se debe seleccionar al menos un aprobador.

![Propietario de Dimensión](@site/static/img/media/dimension-owner-001.png)


**Copiar Propietarios de Dimensiones**<br/>
Cuando se crea una tarjeta de Propietario de Dimensión, se puede usar la función "Copiar Propietarios de Dimensiones" para crear automáticamente el resto de los Valores de Dimensión.

La Dimensión seleccionada se basa en el Propietario de Dimensión seleccionado. Elija si esto debe aplicarse a:

| Generar para      |   |
|:-|:-|
|**Un Valor:**             | Crear una copia para un Valor de Dimensión específico.
| **Todos los Valores:**           | Crear y copiar a todos los Valores de Dimensión.
| **Reemplazar Un Valor:**    | Copiar y reemplazar para una Tarjeta de Propietario de Dimensión ya creada.
| **Reemplazar Todos los Valores:**   | Copiar y reemplazar para todas las Tarjetas de Propietario de Dimensión.

![Copiar Propietarios de Dimensiones](@site/static/img/media/copy-dimension-owners-001.png)

**Grupo de Aprobación Dinámica – Propietario de Dimensión**<br/>
Ir a: ***Configuración de ExFlow - Descripción general --> Grupos de Aprobación de ExFlow***

Cuando se crean los Propietarios de Dimensiones, se debe crear un nuevo Grupo de Aprobación de ExFlow. Establezca el "Tipo de Aprobación Dinámica" en "Propietario de Dimensión", luego agregue la Dimensión en el campo "Código de Dimensión".

Use la función "Grupo de Aprobación Predeterminado" para asignar donde falta un Propietario de Dimensión en lugar de ignorar esta dimensión por completo.

Al usar el Tipo de Aprobación Dinámica, no es posible agregar Miembros del Grupo de Aprobación manualmente.

![Grupo de Aprobación - Propietario de Dimensión](@site/static/img/media/approval-group-005-dimension-owner.png)

**Regla de Aprobación – Propietario de Dimensión**<br/>
Ir a: ***Configuración de ExFlow - Descripción general --> Reglas de Aprobación de ExFlow***

Agregue una Regla de Aprobación que se aplique a todos los documentos sin filtros (habilite la Regla de Aprobación), o para la dimensión con Propietarios de Dimensiones recién creados.

![Regla de Aprobación - Propietario de Dimensión](@site/static/img/media/approval-rule-006-dimension-owner.png)

Agregue el Grupo de Aprobación Dinámica con el Tipo de Aprobación Dinámica “Propietario de Dimensión” recién creado y ExFlow agregará dinámicamente a los aprobadores correctos según la dimensión codificada en el documento.

En este caso, el Propietario de la Dimensión del Departamento aprobará la factura primero, luego el departamento de TI para todos los montos.

También agregamos al CFO como aprobador si el documento supera los 500 000 y al CEO para montos superiores a 1 000 000.

Si hay múltiples aprobadores en la Tarjeta de Propietario de Dimensión, entonces ese orden será el primero en este flujo de aprobación.

![Líneas de Regla de Aprobación - Propietario de Dimensión](@site/static/img/media/approval-rule-lines-004-dimension-owner.png)

**Activar “Proponer Siempre Nuevos Aprobadores”**<br/>
Ir a: ***Configuración de ExFlow - Descripción general --> Configuración de ExFlow***

Active "Proponer Siempre Nuevos Aprobadores" en la Configuración de ExFlow para crear un flujo de aprobación dinámico si se cambia la codificación en ExFlow Web.

Lea más en la sección [***Funcionalidad Empresarial --> Reglas de Aprobación --> Proponer Siempre Nuevos Aprobadores***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/approval-rules#always-propose-new-approvers) arriba.

![Configuración de ExFlow - Aprobación](@site/static/img/media/exflow-setup-approval-001.png)

### Flujo de Trabajo para Propietarios de Dimensiones
**Mostrar Propietarios de Dimensiones Actuales**<br/>
Ir a: ***Diario de Importación --> Líneas de Importación --> Línea --> Mostrar Propietarios de Dimensiones Actuales***

La función "Mostrar Propietarios de Dimensiones Actuales" se puede usar en el Diario de Importación de ExFlow y en el Estado de Aprobación de ExFlow.


Ir a: ***Estado de Aprobación --> Líneas del Documento --> Línea --> Mostrar Propietarios de Dimensiones Actuales***

![Menú de Líneas del Documento de Estado de Aprobación](@site/static/img/media/approval-status-document-lines-001-menu.png)

Esta función abrirá una página filtrada y mostrará todas las Tarjetas de Propietarios de Dimensiones actuales, dependiendo de los Valores de Dimensión actualmente agregados en la línea codificada.

### Flujo de Aprobación Dinámica para Proyectos
Es posible trabajar con Persona Responsable y Gerente de Proyecto en un Flujo de Aprobación Dinámica para Proyectos.

Se necesita alguna configuración para usar el Flujo de Aprobación Dinámica para Proyectos.

![Flujo de Aprobación Dinámica - Trabajos](@site/static/img/media/dynamic-approval-flow-for-jobs-001.png)

**Conectando Aprobadores a Persona Responsable**<br/>
Para trabajar con Persona Responsable agregada al flujo de aprobación, conecte el Recurso al Usuario de ExFlow.

![Usuario de ExFlow - Recurso](@site/static/img/media/exflow-user-001-related-resource.png)

**Conectando Aprobadores a Gerente de Proyecto**<br/>
Para trabajar con el Gerente de Proyecto agregado al flujo de aprobación, asegúrese de que el Usuario del Sistema de Business Central esté conectado a un Usuario de ExFlow.

Lea más en la sección [***Funcionalidad Empresarial --> Usuario de ExFlow --> Crear un Usuario del Sistema***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/exflow-user#create-a-system-user)

![Usuario de ExFlow - Usuario del Sistema](@site/static/img/media/exflow-user-002-system-user.png)

**Grupo de Aprobación Dinámica – Persona Responsable / Gerente de Proyecto**<br/>
Cree un Grupo de Aprobación de ExFlow con el Tipo de Aprobación Dinámica configurado en "Persona Responsable" o "Gerente de Proyecto":

En ambos casos, es posible usar la función “Grupo de Aprobación Predeterminado” para asignar donde falta Persona Responsable o Gerente de Proyecto en la tarjeta del Proyecto.

Al usar el Tipo de Aprobación Dinámica, no es posible agregar Miembros del Grupo de Aprobación manualmente.

![Grupo de Aprobación - Persona Responsable](@site/static/img/media/approval-group-002-person-responsible.png)

![Grupo de Aprobación - Gerente de Proyecto](@site/static/img/media/approval-group-004-project-manager.png)

**Regla de Aprobación – Persona Responsable / Gerente de Proyecto**<br/>
Cree una Regla de Aprobación para aplicar automáticamente Persona Responsable y/o Gerente de Proyecto de Proyectos.

En este ejemplo, se agrega un filtro para todos los proveedores y todos los proyectos.

![Regla de Aprobación - Trabajos](@site/static/img/media/approval-rule-007-jobs.png)

Bertil Boo siempre debe aprobar antes que la Persona Responsable en el proyecto. Lo mismo se podría hacer usando el Gerente de Proyecto en lugar de/junto con la Persona Responsable.

![Líneas de Regla de Aprobación - Persona Responsable](@site/static/img/media/approval-rule-lines-005-person-responsible.png)

**Activar “Proponer Siempre Nuevos Aprobadores”**<br/>
Active "Proponer Siempre Nuevos Aprobadores" en la Configuración de ExFlow para crear un flujo de aprobación dinámico si se cambia la codificación en ExFlow Web.

![Configuración de ExFlow - Aprobación](@site/static/img/media/exflow-setup-approval-001.png)

**Número de Tarea de Proyecto Predeterminado**<br/>
Al usar Proyectos en Business Central Standard, un Número de Tarea de Proyecto predeterminado puede ser útil si la mayoría de los Proyectos tienen la misma Tarea.

Agregue el Número de Tarea de Proyecto Predeterminado en la Configuración de ExFlow.

![Configuración de ExFlow - General](@site/static/img/media/exflow-setup-general-001.png)

Al agregar un Número de Proyecto en el Diario de Importación o al codificar en ExFlow Web, el Número de Tarea de Proyecto se agregará automáticamente desde el Número de Tarea de Proyecto Predeterminado en la Configuración de ExFlow.

![Diario de Importación - Tarea de Trabajo](@site/static/img/media/import-journal-001-job-task.png)

Agregue las Columnas para Proyectos y Tareas a ExFlow Web desde la Configuración de ExFlow.

El Tipo de Línea de Proyecto aún necesita ser agregado manualmente en el Diario de Importación o ExFlow Web, pero no se actualizará si se cambia el Número de Proyecto o el Número de Tarea de Proyecto.

### Flujo de Trabajo para Persona Responsable / Gerente de Proyecto
El Proyecto No. Proyecto00010 contiene a la Persona Responsable BRITTA.

![Trabajos - JOB0000 - Britta](@site/static/img/media/jobs-001-job00010-britta.png)

Si se agrega el Proyecto No. Proyecto00010 en el Diario de Importación, la Regla de Aprobación PROYECTOS a través del Grupo de Aprobación con Persona Responsable agregará automáticamente a BRITTA como aprobador. Como se mencionó anteriormente, la misma funcionalidad se podría usar con el Gerente de Proyecto en lugar de/junto con la Persona Responsable.

![Diario de Importación - Trabajos](@site/static/img/media/import-journal-002-jobs.png)

Si se cambia el Número de Proyecto en ExFlow Web, el Aprobador, BRITTA, se actualizará automáticamente a Persona Responsable (o Gerente de Proyecto) en el Número de Proyecto agregado. Los aprobadores duplicados se eliminarán automáticamente.

### Flujos de Aprobación Dinámica Compradores
Los flujos de aprobación dinámica se pueden configurar en función del Código de Comprador. Si se establece un Código de Comprador en el Documento de Compra, entonces ExFlow puede agregar automáticamente al Comprador al flujo de aprobación.

![Flujo de Aprobación Dinámica Compradores](@site/static/img/media/dynamic-approval-flow-for-purchasers-001.png)

**Conectando Aprobadores a Comprador**<br/>
Para trabajar con el Comprador agregado al flujo de aprobación, conecte el Código de Comprador al Usuario de ExFlow.

![Usuario de ExFlow - Código de Comprador Relacionado](@site/static/img/media/exflow-user-003-related-purchaser-code.png)

**Grupo de Aprobación Dinámica – Comprador**<br/>
Cree un Grupo de Aprobadores con el Tipo de Aprobación Dinámica ‘Comprador’.

Es posible usar la función “Grupo de Aprobación Predeterminado” para asignar cuando falta el Comprador.

Al usar el Tipo de Aprobación Dinámica, no es posible agregar Miembros del Grupo de Aprobación manualmente.

![Grupo de Aprobación - Comprador](@site/static/img/media/approval-group-007-purchaser.png)

**Regla de Aprobación – Comprador**<br/>
Cree una Regla de Aprobación para aplicar automáticamente al Comprador al flujo de aprobación.

En este ejemplo, se agrega un filtro para todos los proveedores y todos los compradores.

![Regla de Aprobación - Comprador](@site/static/img/media/approval-rule-008-purchaser.png)

En este caso, si el Comprador en el documento se agrega como Aprobador.

![Líneas de Regla de Aprobación - Comprador](@site/static/img/media/approval-rule-lines-006-purchaser.png)

ExFlow ahora asignará automáticamente al aprobador en función del valor del Código de Comprador en el Encabezado del Documento de Compra. Si se recuperan líneas emparejadas con diferentes órdenes de compra con múltiples Códigos de Comprador, entonces ExFlow también podrá recuperar el Código de Comprador correcto asociado con la línea del documento.

Un consejo es también utilizar la personalización para ver el campo de código de comprador en el Diario de Importación (líneas o encabezado), ya que los campos están ocultos por defecto.

**Proponer Siempre Nuevos Aprobadores**<br/>
Al trabajar con el Tipo de Aprobación Dinámica ‘Comprador’, los Aprobadores se agregarán desde el Diario de Importación. Después de que se crea el documento, no hay función para cambiar el Comprador en las líneas del documento. Por lo tanto, el flujo de aprobación no se cambiará después de que se crea el documento, durante el flujo de aprobación.