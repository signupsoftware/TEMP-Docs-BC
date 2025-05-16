---
title: Nueva Experiencia de Coincidencia de Órdenes
sidebar_position: 20
hide_title: true
custom_edit_url: null
---
## Nueva Experiencia de Coincidencia de Órdenes

Para utilizar la nueva Experiencia de Coincidencia de Órdenes con el Motor de Coincidencia de Órdenes y todas sus mejoras, la nueva función de Coincidencia de Órdenes de Compra debe estar habilitada en la Gestión de Funciones de SignUp.

### Gestión de Funciones de SignUp

Vaya a: **Gestión de Funciones de SignUp** para habilitar la Nueva Función de Coincidencia de Órdenes.

![ExFlow Import Journal - Nº de Orden](/img/media/FM-001.png)
 
Lea más sobre esto en la sección [**Primeros pasos**](https://docs.signupsoftware.com/business-central/docs/user-manual/welcome-to-exflow/get-started)



## Ejecutar el Nuevo Asistente de Coincidencia de Órdenes

Este manual de usuario es su guía de referencia para configurar su proceso de coincidencia de documentos con órdenes de manera sencilla. Diseñado pensando en la simplicidad, el nuevo Asistente de Coincidencia de Órdenes hace que el proceso sea directo y fácil de usar.

Busque el Asistente de Coincidencia de Órdenes de ExFlow.

![Asistente de Coincidencia de Órdenes - Búsqueda](/img/media/new-om-wizard-001.png)

### General

### Coincidencia a Nivel de Cabecera o Línea
El primer paso en la configuración del Asistente de Coincidencia de Órdenes es determinar si la coincidencia de documentos con órdenes de compra/órdenes de devolución debe realizarse a nivel de cabecera o a nivel de línea.

![OM](/img/media/new-om-wizard-002.png)

**Coincidencia a Nivel de Cabecera:**
Si elige la coincidencia a nivel de cabecera, la Coincidencia de Órdenes comparará el total general de la factura con el valor total disponible de la orden de compra.

Este método es adecuado cuando los detalles de artículos o servicios individuales en la factura no necesitan coincidir con artículos específicos en la orden de compra, o si la información de línea de la factura es demasiado pobre para una coincidencia precisa.


**Coincidencia a Nivel de Línea:**
Si elige la coincidencia a nivel de línea, la Coincidencia de Órdenes comparará cada línea de factura interpretada con los artículos de línea correspondientes en la orden de compra.

Este enfoque asegura que cada artículo o servicio individual en la factura coincida con precisión con el artículo correspondiente en la orden de compra.

La coincidencia de línea utiliza información interpretada como cantidad de factura, precio unitario, total de línea y más, para obtener una coincidencia precisa con la línea de orden de compra correspondiente y poder identificar cualquier discrepancia.

### Coincidir Documentos Con
El siguiente paso es determinar cómo deben coincidir las facturas con las órdenes de compra en relación con los recibos de compra.
Hay tres opciones a considerar:

#### **Recibo:**
Seleccione esta opción si desea que las facturas coincidan solo con órdenes de compra que tengan recibos de compra asociados.

Esto asegura que los artículos sean recibidos y registrados en el almacén y coincidan con la factura, antes de hacer coincidir la factura y enviarla para su aprobación y contabilización final. 

#### **Orden y Recibo:**
Si prefiere una combinación de Recibo y Orden, seleccione esta opción.

En este caso, las facturas pueden coincidir con órdenes de compra con o sin recibos de compra asociados, proporcionando máxima flexibilidad en escenarios de coincidencia.

Posible coincidir líneas de factura con órdenes de compra con y sin líneas de artículos recibidos. También hace posible coincidir líneas de factura con líneas de artículos recibidos parcialmente en la orden y enviarlas para aprobación y contabilización.

### Aprobar Automáticamente Facturas Coincidentes

#### **Nunca:**
Seleccione esta opción si desea que todas las facturas coincidentes pasen por un proceso de aprobación manual. En este caso, no se aprobarán automáticamente facturas, independientemente de cualquier diferencia o umbral.

(Si se selecciona Nunca --> El siguiente paso en el asistente sería: Otros y Diferencia Automática)

#### **Si la Diferencia está dentro de la Tolerancia:**
Elija esta opción si desea que las facturas coincidentes se aprueben automáticamente solo cuando la diferencia entre la factura y la orden de compra esté dentro del umbral o tolerancia especificada para la aprobación automática.

Esta opción permite un procesamiento eficiente de facturas con discrepancias menores, asegurando que solo las diferencias significativas requieran aprobación manual.

(Si se selecciona esta opción --> El siguiente paso en el asistente sería: Aprobación Automática y Tolerancia para la Aprobación Automática)

#### **Si la Orden Coincidente está Aprobada:**
Esta opción agrega una capa adicional de aprobación al requerir que la orden coincidente haya sido revisada y aprobada a través de ExFlow, asegurando que las facturas se aprueben automáticamente solo cuando la autorización necesaria esté en su lugar.

(Si se selecciona esta opción --> El siguiente paso en el asistente sería: Aprobación Automática y Tolerancia para la Aprobación Automática)

### Monto Máximo para la Aprobación Automática
Si ha permitido la aprobación automática de facturas coincidentes, aquí es donde puede especificar el monto máximo para la aprobación automática. Este parámetro define el umbral por encima del cual las facturas requerirán aprobación manual, independientemente de los resultados de la coincidencia.

### Advertencia de Violación de Tolerancia
Habilite esta configuración si desea que los contadores reciban una advertencia durante la importación de facturas coincidentes de compra cuando haya discrepancias superiores a su tolerancia permitida para la aprobación automática. 
De cualquier manera, si esta configuración está habilitada o no, las discrepancias superiores a su tolerancia permitida siempre requerirán que la línea de la factura sea aprobada manualmente.

### Desviación del Costo Unitario Directo (%) y Desviación del Costo Unitario Directo (Monto LCY)
Defina los umbrales de desviación para el costo unitario directo de las líneas de factura en comparación con las líneas de orden coincidentes. Estos umbrales determinan las diferencias permitidas entre la factura y la orden de compra para la aprobación automática.

### Publicar Recibos y Envíos Automáticamente
La función "Publicar Recibos y Envíos Automáticamente" permite la publicación automática de recibos de compra en el proceso de coincidencia. Sin embargo, tenga en cuenta que esta función solo se puede utilizar al coincidir documentos con *“Orden y Recibo”*.

Coincidir documentos utilizando la lógica *“Orden y Recibo”*, permite a ExFlow coincidir completamente y enviar una factura/crédito para aprobación y contabilización. Sin embargo, Business Central siempre requiere que los Recibos/Envíos de Compra se publiquen antes de que la factura/crédito coincidente se pueda publicar y para que la Orden de Compra/Orden de Devolución se facture/acredite.

Esta configuración permite a ExFlow Publicar y Facturar la cantidad aprobada de las líneas de documentos coincidentes automáticamente. Se ejecuta una vez que el documento tiene el estado “Listo para Publicar” en el Estado de Aprobación. Con esta configuración deshabilitada, se requiere que publique los recibos/envíos de compra manualmente.

![Asistente de Coincidencia de Órdenes - Búsqueda](/img/media/new-om-wizard-003.png)

### Manejo Automático de Diferencias
La funcionalidad de Manejo Automático de Diferencias permite a ExFlow sugerir automáticamente una línea de diferencia si se identifican costos adicionales o inesperados, como flete u otros cargos, durante la coincidencia de órdenes. 
Puede elegir si ExFlow debe sugerir una línea de factura del tipo de línea Cargo de Artículo o Cuenta G/L.
Luego, especifique qué Cuenta G/L o qué Cargo de Artículo usar para la línea sugerida.

### Monto Máximo (LCY) y Monto Máximo (%)
Es donde puede especificar una tolerancia permitida para la línea de diferencia sugerida automáticamente para la aprobación automática.


### Completar el Asistente
Haga clic en "Finalizar" para cerrar el Asistente y aplicar la configuración.

![Asistente de Coincidencia de Órdenes – Completar el Asistente](/img/media/new-om-wizard-004.png)



## Configuración de Coincidencia de Órdenes

Vaya a: **Configuración de Coincidencia de Órdenes de ExFlow**

Para la *Nueva Experiencia de Coincidencia de Órdenes*, todas las configuraciones de coincidencia de órdenes se han trasladado de la Configuración de ExFlow y ahora están disponibles en una página propia.

Sin embargo, se proporcionará un enlace a esta nueva ''Configuración de Coincidencia de Órdenes'' en Configuración de ExFlow--> Sección de Coincidencia de Órdenes.


| Configuración de Coincidencia de Órdenes - Relacionado |   | 
|:-|:-|
|Copiar Valores de Cabecera a la Configuración de Factura/Nota de Crédito| Lea más sobre esto [***aquí***](https://docs.signupsoftware.com/business-central/docs/user-manual/approval-workflow/new-order-matching#copy-header-values-to-invoicecredit-memo-setup)
|Tipos de Línea de Recepción Automática| Lea más sobre esto [***aquí***](https://docs.signupsoftware.com//business-central/docs/user-manual/approval-workflow/new-order-matching#auto-receiving-line-types)
|Prioridad de Coincidencia de Nº de Artículo| Lea más sobre esto [***aquí***](https://docs.signupsoftware.com/business-central/docs/user-manual/approval-workflow/new-order-matching#item-no-matching-priority)
|Prioridad de Coincidencia de Órdenes| Establezca una Prioridad de Coincidencia de Órdenes para su empresa. Esta es una configuración solo para la nueva función de Coincidencia de Órdenes. Lea más sobre esto [***aquí***](https://docs.signupsoftware.com/business-central/docs/user-manual/approval-workflow/new-order-matching#order-matching-priority)

Las características anteriores también se pueden utilizar a nivel de proveedor en "Configuración de Proveedor de ExFlow".


### Secciones de Configuración de Coincidencia de Órdenes

![Configuración de OM](/img/media/order-matching-setup-001.png)

### General
| General|   | 
|:-|:-|
|Habilitado| Especifica si la Coincidencia de Órdenes está habilitada para la empresa. Esta configuración se utiliza para habilitar o deshabilitar la funcionalidad de Coincidencia de Órdenes para la empresa, después de que la función haya sido habilitada.
|Coincidir Documentos Con| 	Especifica si ExFlow debe coincidir y recuperar líneas de Recibos/Envíos Publicados, o de Órdenes y Recibos/Envíos.
|Publicar Recibos y Envíos Automáticamente|Especifica si las líneas de la Orden de Compra de cada tipo de línea deben recibirse automáticamente cuando la factura coincidente esté lista para "Publicar". Esta opción solo es aplicable si la configuración "Coincidir Documentos Con" está configurada como "Orden y Recibo". <br/><br/>Al ejecutar Verificar Cambios en el Estado de Aprobación, el recibo de las líneas coincidentes de la orden de compra se publicará en la Fecha del Documento de la Factura. <br/> La Fecha de IVA en la cabecera de la orden de compra y las Fechas de Publicación de Diferimiento en las líneas de la orden de compra se actualizarán automáticamente si la fecha de publicación de la orden de compra es diferente a la Fecha de Publicación de la Factura. <br/> Si tanto la orden de compra como la Factura tienen la misma fecha de publicación al ejecutar Verificar Cambios, no habrá actualizaciones en la orden de compra. <br/>La Fecha de Publicación de la orden de compra también se actualizará si está en blanco. (Configuración de Compras y Pagos - Fecha de Publicación Predeterminada = Sin Fecha)
|Recuperar Líneas Automáticamente|Recuperar automáticamente todas las líneas disponibles de la Orden de Compra o del Recibo de Compra Publicado al coincidir a nivel de cabecera.
|Copiar valores de cabecera a Factura/Nota de Crédito|Activar campos para transferir de la Orden de Compra a la Factura (O de la Orden de Devolución de Compra a la Nota de Crédito) en el Diario de Importación al usar la coincidencia de órdenes a nivel de cabecera. Los valores seleccionados se pueden encontrar y actualizar en Relacionado --> Avanzado --> Configuración de valores de cabecera de la OC en la Factura.

### Aprobación Automática
| Aprobación Automática|   | 
|:-|:-|
|Aprobar Documentos Automáticamente|   Especifica si la factura debe ser aprobada automáticamente si la orden relacionada está aprobada
|Usuario para Aprobación Automática|Especifica el usuario de ExFlow que debe usarse para las facturas aprobadas automáticamente. Si esta configuración está vacía, se utiliza el id del usuario de BC que ha iniciado sesión
|Monto Máximo para Aprobación Automática (LCY) |Especifica el monto máximo de la factura permitido para aprobaciones automáticas. 0 = deshabilitado
|Cargos Misceláneos Máximos (LCY) |   Tolerancia para el campo "Aprobar Facturas Automáticamente". El monto total de las líneas de factura no coincidentes con las líneas de la OC. (Por ejemplo, flete). Cuando se genera una factura, las líneas no se aprobarán automáticamente si se excede el monto máximo misceláneo.
|Desviación Máxima|
|Costo Unitario Directo (LCY) |Especifica la diferencia de precio máxima permitida entre el costo unitario de la factura y el costo unitario de la orden de compra (en LCY). 
|Costo Unitario Directo %|Especifica la diferencia de precio máxima permitida entre el costo unitario de la factura y el costo unitario de la orden de compra (en %)
|Enviar Recordatorio de Orden No Recibida para Orden Aprobada|Se envía un Recordatorio de Orden No Recibida cuando el documento está aprobado y no todas las líneas de la Orden están completamente recibidas. Para que esto funcione, "Coincidir Documentos Con" debe estar configurado como "Recibo". <br/><br/> Lea más sobre esto en la sección [***Orden No Recibida - Aprobada***](https://docs.signupsoftware.com/business-central/docs/user-manual/approval-workflow/email-reminders#unreceived-order---approved)

### Lógica de Coincidencia de Líneas
| Lógica de Coincidencia de Líneas|   | 
|:-|:-|
|Tolerancia de Coincidencia|
|Costo Unitario %|Especifica la tolerancia de coincidencia (en %) al coincidir una factura con una orden de compra utilizando el costo unitario de la línea. 0 = deshabilitado, es decir, se necesita una coincidencia exacta
|Cantidad %|Especifica la tolerancia de coincidencia (en %) al coincidir una factura con una orden de compra utilizando la cantidad de la línea. 0 = deshabilitado, es decir, se necesita una coincidencia exacta
|Verificar Líneas de Factura Divididas|Si “Coincidencia de Múltiples Líneas” es verdadero, ExFlow dará mensajes de acción para cada línea que se haya dividido, lo que le da al usuario la opción de confirmar manualmente la coincidencia sugerida antes de crear el documento. Configurar esta opción como falso significa que no se mostrará ningún mensaje de acción para las líneas divididas coincidentes.
|Verificar Costo Unitario Directo|Especifica que ExFlow debe verificar el Costo Unitario en la línea de la factura al coincidir facturas con órdenes de compra. La factura importada necesita ser interpretada en línea para que esto funcione
|Verificar % de Descuento en Línea|Especifica que ExFlow debe verificar el % de Descuento en Línea en la línea de la factura al coincidir facturas con órdenes de compra. La factura importada necesita ser interpretada en línea para que esto funcione

### Manejo de Discrepancias y Ajustes
| Manejo de Discrepancias y Ajustes |   | 
|:-|:-|
|*Línea de Diferencia Automática*|
|Habilitar| Especifica que ExFlow debe crear una nueva línea que contenga el monto de la diferencia, cuando haya una diferencia de precio entre el total de la orden de compra y el total de la factura
|Código de Compra de ExFlow|Especifica qué código de compra debe usar ExFlow al crear la línea de diferencia
|Monto Máximo (LCY) |Especifica el monto máximo al crear la línea de diferencia. Si el monto de la diferencia excede esta configuración, no se crea ninguna línea de diferencia. 0 = deshabilitado
|Monto Máximo (%)|Especifica el % máximo de diferencia al crear la línea de diferencia. Si el % de diferencia excede esta configuración, no se crea ninguna línea de diferencia. 0 = deshabilitado
|Asignación Automática de Cargos de Artículo|Especifica qué tipo de asignación de cargos de artículo se debe usar al publicar facturas. Se puede hacer de manera equitativa, por monto, por peso o por volumen automáticamente. Ninguno = no se realiza ninguna asignación automática. <br/><br/> Lea más sobre esto en la sección [***Asignación de Cargos de Artículo***](https://docs.signupsoftware.com/business-central/docs/user-manual/approval-workflow/exflow-import-journals#item-charge-assignment)


### Controles y Configuraciones Adicionales
|Controles y Configuraciones Adicionales |   | 
|:-|:-|
|Retraso de Coincidencia Fecha del Documento (Días) |Especifica que ExFlow debe retrasar la coincidencia con órdenes de compra hasta xx días después de la fecha de importación de la factura
|Retraso de Coincidencia Fecha de Vencimiento (Días) |Especifica que ExFlow debe retrasar la coincidencia con órdenes de compra hasta xx días antes de la fecha de vencimiento de la factura. <br/><br/> Lea más sobre esto en la sección [***Retraso de Coincidencia de OC Fecha del Documento y Fecha de Vencimiento***](https://docs.signupsoftware.com/business-central/docs/user-manual/approval-workflow/purchase-order-matching-process#po-matching-delay-doc-date-and-due-date)
|Guardar Líneas Coincidentes en Mapeo OCR|Esta opción se puede usar para guardar automáticamente las líneas de factura coincidentes manualmente desde "Vista de Coincidencia" según el proveedor, el Nº de Artículo interpretado. Estas líneas se guardarán en la tabla de Mapeo de Importación OCR de ExFlow y se pueden reutilizar para sugerir coincidencias para futuras facturas de OC con los mismos criterios
|Usar Nº de Proveedor de la Orden de Compra Coincidente|Especifica que se debe usar el número de proveedor en la orden de compra coincidente en lugar de la información del proveedor de la factura importada
|Deshabilitar Filtro de Moneda en Obtener Líneas de Recibo|Esto se puede configurar para mejorar el rendimiento al usar Obtener Líneas de Recibo en el Diario de Importación. No se establecerá ningún filtro en el Código de Moneda al abrir la página de selección (Se realiza una verificación de que se seleccionó la Moneda correcta en la inserción de la línea de la Factura)
|Habilitar Mensajes de Advertencia|Cuando está deshabilitado, no se presentarán mensajes de advertencia en el Diario de Importación con respecto a la coincidencia de órdenes.


### Configuración de Coincidencia de Órdenes - Relacionado

### Copiar Valores de Cabecera en Factura/Nota de Crédito
Ir a: **Configuración de Coincidencia de Pedidos de ExFlow --> Relacionado --> Copiar Valores de Encabezado a la Configuración de Factura/Nota de Crédito**

Para los clientes que interpretan y coinciden pedidos a nivel de encabezado, ahora algunos valores del pedido se pueden copiar del encabezado del pedido al encabezado del documento.<br/>

Comience activando "Copiar valores de encabezado a factura/nota de crédito" y luego seleccione los campos que desea copiar.<br/>

![Copiar encabezado de orden de compra - Configuración](@site/static/img/media/po-header-value-on-invoice-setup-001.png)

Para la localización de EE. UU. y CA, la obligación fiscal y el área fiscal también se pueden copiar de la orden de compra / orden de devolución a la factura de compra / crédito.

![Copiar encabezado de orden de compra - Configuración CA - EE. UU.](@site/static/img/media/po-header-value-on-invoice-setup-002-ca-us.png)

Esta función se puede utilizar a nivel de proveedor a través de ExFlow Vendor Setup.<br/>

Vaya a: ***Configuración de Proveedor de ExFlow --> Tarjeta de Configuración de Proveedor de ExFlow*** --> Presione “Mostrar más” en la pestaña rápida de Coincidencia de Órdenes.

Los campos a copiar siempre usarán la configuración de la Configuración de ExFlow.

### Tipos de Línea de Recepción Automática

Vaya a: **Configuración de Coincidencia de Órdenes de ExFlow --> Relacionado --> Tipos de Línea de Recepción Automática**

Al habilitar “Tipos de Línea de Recepción Automática” ExFlow recibirá todas las líneas que coincidan con una Orden de Compra o una Orden de Devolución. Lo que ExFlow recibe se basa en los tipos de línea permitidos de "Configuración de Tipos de Línea de Recepción Automática" (La configuración se abre automáticamente después de configurar “Tipos de Línea de Recepción Automática” como VERDADERO).


![Tipos de Línea de Recepción de ExFlow](/img/media/auto-receiving-line-types-001.png)

Haga clic en ''Artículo'' para hacer configuraciones adicionales si desea tener Recepción Automática en Artículos de Servicio o Artículos No Inventariables también. 



### Prioridad de Coincidencia de Nº de Artículo
Vaya a: **Configuración de Coincidencia de Órdenes de ExFlow --> Relacionado --> Prioridad de Coincidencia de Nº de Artículo** 

Esta función ayuda a determinar el orden en el que el sistema intenta coincidir facturas importadas con artículos y líneas de órdenes. 

Esto puede ser útil cuando, por ejemplo, el mismo número de artículo existe en la lista de artículos estándar como en el número de artículo del proveedor. O si se importan líneas de factura donde la mayoría son referencias de artículos del proveedor, considere dar mayor prioridad a "Referencia de Artículo". Deshabilite los tipos de coincidencia que den coincidencias falsas positivas o que no se utilicen desmarcándolos.


![Prioridad de Coincidencia de Nº de Artículo](/img/media/exflow-setup-item-no-matching-prio-001.png)

| Prioridad de Coincidencia de Nº de Artículo |  |
|:-|:-|
| **Mapeo OCR**         |Coincidir Nº de Artículo según lo especificado en *Mapeo de Importación OCR*
| **Cuenta G/L Predeterminada/Artículo Ficticio**  |Coincidir Nº de Artículo según la *Cuenta Predefinida* (Configuración de ExFlow --> General) o *Artículo Ficticio para Mapeo de Línea OCR* (Configuración de ExFlow --> Importación OCR). Esto solo se hará si el Nº de Artículo importado está en blanco. <br/><br/> Si no hay número importado y el número de orden (importado) está en blanco, entonces automáticamente tomará la cuenta G/L ficticia. Si hay un número de orden (importado), entonces tomará el artículo ficticio.
| **Artículo**         |Coincidir Nº de Artículo según el *Nº de Artículo* real en Business Central
| **Artículo con Nº de Proveedor**   |Coincidir Nº de Artículo según lo que se haya agregado en Reabastecimiento--> Compra. Si se especifica un *Nº de Proveedor* en la tarjeta del Artículo, junto con un *Nº de Artículo del Proveedor* específico, entonces esto tendrá prioridad.
| **Proveedor de Artículo**         | Coincidir Nº de Artículo según el *Nº de Artículo del Proveedor* establecido en la Tarjeta del Artículo en Business Central
| **Referencia de Artículo**         |Coincidir Nº de Artículo según la *Referencia del Proveedor* establecida en la Tarjeta del Artículo en Business Central
| **Orden de Compra**         |Coincidir Nº de Artículo según las líneas de la orden de compra donde el Nº de Artículo del Proveedor de la Línea de Compra sea igual al número importado.
| **Primera Ejecución Nº Original**  |ExFlow elimina caracteres no deseados en el Nº de Artículo interpretado (todos los caracteres que no sean A...Z y 0..9) y lo intenta de nuevo.
| **Cuenta G/L**         |La primera verificación es ver si el número de orden interpretado tiene un valor. Si está en blanco, entonces ExFlow busca una Cuenta G/L con el número importado. Si se encuentra, ExFlow tomará esa cuenta G/L, de lo contrario, ExFlow tomará la Cuenta G/L Predefinida (si la cuenta existe en Configuración de ExFlow --> General). Si el número de orden importado no está en blanco, ExFlow proporcionará el Nº de Artículo Ficticio (si existe en la configuración de ExFlow --> Importación OCR) <br/><br/>La diferencia en esta opción (vs la opción anterior ''Cuenta G/L Predeterminada/Artículo Ficticio'') es que ExFlow verifica si existe una Cuenta G/L antes de proporcionar la Cuenta G/L Predefinida.

Configure una Prioridad de Coincidencia de Nº de Artículo para elegir en qué orden coincidir. Estas configuraciones permiten a ExFlow realizar coincidencias más avanzadas de artículos y líneas de órdenes según la prioridad y el tipo de coincidencia.

Use los botones "Mover Arriba" y "Mover Abajo" para mover los tipos de coincidencia hacia arriba o hacia abajo en la lista.
Cuanto más alto se coloque un tipo de coincidencia, mayor prioridad tendrá en el proceso de coincidencia.


### Prioridad de Coincidencia de Órdenes 

Vaya a: **Configuración de Coincidencia de Órdenes de ExFlow --> Relacionado --> Prioridad de Coincidencia de Órdenes**

Especifique las prioridades de coincidencia de órdenes para obtener una mejor coincidencia con los datos válidos en Business, dependiendo de los procesos de coincidencia de órdenes de la empresa. 

Establezca un orden en los métodos de coincidencia de órdenes relevantes. Desmarque la casilla de uso en el método de coincidencia irrelevante.

La Prioridad de Coincidencia de Órdenes se aplica cuando el documento entrante tiene un número de orden relacionado y ExFlow ha encontrado y coincidido una orden de compra relacionada. 

Las prioridades de coincidencia deciden en qué orden se aplican los métodos de coincidencia a las líneas de compra.

![Prioridad de Coincidencia de Nº de Artículo](/img/media/order-matching-prio-001.png)


|Menú de Prioridad de Coincidencia de Órdenes | |
|:-|:-|
| Mover Arriba|Use la opción Mover Arriba para establecer la prioridad de los métodos de coincidencia. Si la prioridad más alta no logra una coincidencia, el siguiente método intentará coincidir en sus condiciones.
| Mover Abajo|Use la opción Mover Abajo para establecer la prioridad de los métodos de coincidencia. Si la prioridad más alta no logra una coincidencia, el siguiente método intentará coincidir en sus condiciones.
|  Configuración de Múltiples Campos |Habilite "Mostrar Configuración Avanzada" para acceder a métodos de coincidencia de múltiples campos. Lea más en ''Coincidencia de Múltiples Campos''.


| Métodos de Coincidencia|| 
|:-|:-|
| Artículo |Coincidencia básica de Nº de Artículo.
| Artículo con Cantidad y Costo Unitario |Coincide en Nº de Artículo en combinación con cantidad y costo unitario.
|  Cantidad y Costo Unitario |No hay coincidencia de número de artículo, solo coincide con Cantidad y Costo Unitario.
|  Cantidad: | Coincide solo en base a la cantidad.
|  Monto de Línea: |Coincide en base al Monto Total de la Línea.

| Campos|| 
|:-|:-| 
|Usar| Especificar si se debe usar el método de coincidencia o no. 
|  Omitir Tolerancias| Especifica si el método debe omitir tolerancias para el costo unitario y las cantidades.
|  Clave de Índice |Opcional para seleccionar una clave de índice apropiada para aumentar el rendimiento de la coincidencia. Ejemplo: Al agregar la Clave de Índice 8, consultas más rápidas en búsquedas de Nº de Artículo y Variantes. 



##### Coincidencia de Múltiples Campos 
Vaya a: **Configuración de ExFlow --> Relacionado --> Configuración de Prioridad de Coincidencia de Órdenes --> Mostrar Configuración Avanzada**

Con la coincidencia de múltiples campos, ExFlow puede configurar métodos de coincidencia adicionales a los enumerados en la Configuración de Coincidencia de Órdenes de ExFlow. Estas configuraciones también están disponibles a nivel específico de proveedor.

![Prioridad de Coincidencia](/img/media/multiple-field-002.png)

La función de Coincidencia de Múltiples Campos puede coincidir en uno o más campos especificados de una línea de factura/crédito de compra entrante con los documentos de orden/crédito en Business Central. 

Este método de coincidencia también permite al usuario coincidir documentos entrantes con campos de terceros ISV o personalizados en la tabla de Línea de Compra (39).

La coincidencia de múltiples campos no debe usarse junto con otros métodos de coincidencia. Si crea múltiples registros para la coincidencia de múltiples campos, considere configurar estos métodos a nivel de proveedor en lugar de a nivel general.

##### Ejemplos de configuración de campos de Coincidencia de Múltiples Campos

1. La coincidencia de múltiples campos no debe usarse en combinación con otros métodos de coincidencia y si crea múltiples registros de coincidencia de múltiples campos, considere configurar los métodos a nivel de proveedor en lugar de a nivel general.
2. Active “Coincidencia de Múltiples Campos” habilitando el interruptor “Mostrar Configuración Avanzada” 
3. Seleccione el método de coincidencia “Múltiples Campos” y haga clic en “Configuración de Múltiples Campos”
4. Cree un nuevo código, asígnele una descripción y seleccione “Configuración de Múltiples Campos” nuevamente.
5. Seleccione qué campo de ExFlow desea coincidir con el “Campo de Orden de Compra”


Coincidencia de la Descripción de la Línea de Factura Importada (Campo de ExFlow Nº: 12013662) para coincidir con la Descripción de la línea de Orden de Compra/Devolución (Campo de Línea de Compra de BC Nº: 11, Tabla Relacionada 39):

![Prioridad de Coincidencia](/img/media/matching-ex-001.png)

Coincidencia del Campo Nº de Artículo de la Factura Importada (Campo de ExFlow Nº: 6) y el campo de Código de Variante (Campo de ExFlow Nº: 12068803) con el Nº de Artículo de la Línea de Compra: (6) y el Código de Variante: (5402):


![Prioridad de Coincidencia](/img/media/matching-ex-002.png)

Aquí, la (5401 Variante de Artículo) se agrega como una tabla relacionada ya que el Campo de Variante de la Línea de Compra se obtiene de esta tabla. 

La tabla de Variante de Artículo (5401) está intrínsecamente vinculada a la tabla de Línea de Compra (39). Para garantizar una integración de datos completa y operaciones optimizadas, es esencial establecer la tabla de Variante de Artículo como una tabla relacionada. Esta relación facilita el seguimiento y la gestión precisos de las variantes de artículos dentro de las órdenes de compra, mejorando la eficiencia general y la consistencia de los datos.




## Flujo de Trabajo de Coincidencia de Órdenes

Nos complace anunciar el lanzamiento de un Motor de Coincidencia de Órdenes completamente nuevo, que ofrece una mejora significativa en las operaciones de cuentas por pagar a través de una mayor precisión, configurabilidad y eficiencia del proceso.

Esta actualización introduce una Configuración de Coincidencia de Órdenes rediseñada, un Asistente de Configuración intuitivo y una interfaz mejorada de Coincidencia de Órdenes Manual, todo desarrollado para proporcionar una experiencia más fluida y fácil de usar.

Entre las mejoras clave se encuentra la implementación de Configuraciones de Coincidencia de Órdenes basadas en prioridades, que permiten a las organizaciones definir y gestionar la lógica de coincidencia según sus prioridades comerciales específicas. El motor también introduce soporte para la Coincidencia de Múltiples Campos, lo que permite a los clientes crear configuraciones de coincidencia altamente personalizadas adaptadas a sus necesidades operativas.

Además, el nuevo motor admite la Conversión de Unidad de Medida Base, abordando los desafíos comunes que surgen de las discrepancias de unidades entre órdenes de compra y facturas, y asegurando una reconciliación más precisa y consistente.

En conjunto, estas mejoras representan un avance importante en la automatización y flexibilidad del proceso de coincidencia de órdenes, lo que permite a los equipos financieros gestionar tanto escenarios rutinarios como complejos con mayor confianza y control.


### Diario de Importación
Cuando AP ha importado todos los documentos al Diario de Importación, a menudo hay algunos errores relacionados con la coincidencia de órdenes. 

Con la nueva función de Coincidencia de Órdenes, AP puede obtener mucha ayuda para aliviar su carga de trabajo de los Compradores responsables para gestionar y corregir sus órdenes o dar otra información sobre cómo proceder con el documento. 

Lea más sobre esto en [**Vista del Comprador**](https://docs.signupsoftware.com/business-central/docs/user-manual/approval-workflow/purchaser-view).


#### Opciones de Filtro 
Con la nueva Función de Coincidencia de Órdenes, la interfaz de usuario del Diario de Importación ha cambiado en forma de nuevas opciones de filtro. 

En el encabezado del Diario de Importación, AP puede filtrar en: 
* Documentos con Códigos de Excepción agregados por el Comprador a través de ''Filtrar Documentos con Excepción de Orden'' Lea más sobre esto en [**Vista del Comprador**](https://docs.signupsoftware.com/business-central/docs/user-manual/approval-workflow/purchaser-view)
* Tipos de Error de Coincidencia de Órdenes a través de ''Filtro de Error''
* Estado del documento a través de ''Filtro de Documento''

![OM](/img/media/import-journal-filter-options-001.png)  

##### Filtrar Documentos con Excepción de Orden 

AP puede habilitar ‘’Filtrar Documentos con Excepción de Orden’’ para filtrar el diario en los códigos de excepción agregados por los Compradores, para seguir el trabajo agregado por los compradores y continuar con el manejo del documento. 

Lea más sobre esto en [**Corregir el documento como AP en el Diario de Importación**](https://docs.signupsoftware.com/business-central/docs/user-manual/approval-workflow/purchaser-view#correcting-the-document-as-ap-in-import-journal)


##### Filtro de Error/Documento
AP también puede utilizar el Filtro de Error/Documento para obtener una mejor visión general de los documentos importados con mensajes de error y filtrar en un Filtro de Documento para obtener una mejor clasificación de los estados de los documentos.

Filtrar solo en Tipo de Error, o combinado con Filtro de Documento. 

La opción de Filtro de Documento ''Todos los Documentos Listos para Crear'' no se puede filtrar junto con un Tipo de Error, ya que el documento está completado y listo para ser enviado para aprobación.

![OM](/img/media/import-journal-filter-options-002.png) 

|Filtro de Tipo de Error|   |
|:-|:-|
|Línea no coincidente con la orden|Especifica el error /Mensaje de Acción
|Falta el Nº de Orden|Especifica el error /Mensaje de Acción
|La línea no se puede coincidir debido a la configuración de la fecha de vencimiento|Especifica el error /Mensaje de Acción
|La línea no se puede coincidir con el recibo/envío de devolución|Especifica el error /Mensaje de Acción
|La línea de diferencia supera la tolerancia máxima|Especifica el error /Mensaje de Acción
|Diferencia de costo unitario entre el documento y la orden|Especifica el error /Mensaje de Acción
|Diferencia de % de descuento en línea entre el documento y la orden|Especifica el error /Mensaje de Acción
|Verificar línea dividida|Especifica el error /Mensaje de Acción
|Desajuste de tipo de línea|Especifica el error /Mensaje de Acción
|Desajuste de Nº de línea|Especifica el error /Mensaje de Acción
|La cantidad en la línea es mayor que la recibida/enviada|Especifica el error /Mensaje de Acción
|El documento publicado existe para la línea|Especifica el error /Mensaje de Acción
|La misma línea está coincidente en otro documento|Especifica el error /Mensaje de Acción
|La cantidad no puede ser mayor que la coincidente|Especifica el error /Mensaje de Acción
|No se permite la coincidencia múltiple con el mismo Nº y Cantidad|Especifica el error /Mensaje de Acción
|La unidad de medida importada no existe|Especifica el error /Mensaje de Acción
|La cantidad disponible no es suficiente en la línea de la orden|Especifica el error /Mensaje de Acción
|La orden no está liberada|Especifica el error /Mensaje de Acción
|Desajuste de código de moneda|Especifica el error /Mensaje de Acción
|Línea no coincidente debido a la falta de Nº|Especifica el error /Mensaje de Acción


| Filtro de Documento|   | 
|:-|:-|
|Todos los Documentos|	Muestra todos los documentos.
|Todos los Documentos Listos para Crear	|Muestra todos los documentos sin error que están listos para ser creados.
|Todos los Documentos con Error	|Muestra todos los documentos que tienen error. En el caso de documentos relacionados con órdenes, se incluirán todos los errores.
|Todos los Documentos Relacionados con Órdenes con Error sin Excepción	|Muestra todos los documentos relacionados con órdenes que tienen error, sin excepción. No se incluyen errores manejados.
|Todos los Documentos Relacionados con Órdenes con Error con Excepción	|Muestra todos los documentos relacionados con órdenes que tienen error, con excepción. No se incluyen errores manejados.
|Todos los Documentos Relacionados con Órdenes con Error Manejados|	Muestra todos los documentos relacionados con órdenes que tienen errores manejados.

### Diario de Importación - Líneas de Importación

### Lista de Errores Múltiples
Cuando las líneas de documentos coincidentes con órdenes importadas con errores se importan al Diario de Importación, AP puede ver todos los problemas en una lista de errores recopilada, llamada Lista de Errores Múltiples, en lugar de manejar un error, uno por uno y verificar el documento para obtener el siguiente error.

![OM](/img/media/mm-002.png) 

AP puede hacer clic para inspeccionar los errores. Esta línea solo tiene un error para ser manejado:

![OM](/img/media/multiple-error-list-001.png) 


### Coincidencia Manual de Órdenes 
Vaya a: **Diario de Importación de ExFlow -–> Acciones -–> Orden -–> Coincidencia Manual de Órdenes (Alt+M)**

La página de Coincidencia Manual de Órdenes ofrece un proceso simple para coincidir líneas de órdenes con líneas de facturas/créditos importadas a nivel de documento. 

La página presenta las líneas del documento en el lado izquierdo y las líneas de la orden en el derecho. Con columnas fáciles de leer que muestran la cantidad coincidente y la cantidad restante por coincidir.

Las Líneas de Órdenes Coincidentes se mostrarán en negrita para mayor claridad, para que AP pueda ver fácilmente qué línea de importación está conectada a qué línea de orden y pueda hacer los ajustes correctos.

![OM](/img/media/mm-001.png) 

| Coincidencia Manual de Órdenes |   | 
|:-|:-|
|Coincidir Línea|Use esta función para coincidir la línea seleccionada.
|Descoincidir Línea|Use esta función para liberar la coincidencia de la línea seleccionada para volver a coincidirla con otra línea de orden. Las líneas divididas se revertirán.
|Eliminar Nº de Orden|Use esta función para eliminar el número de orden de la línea seleccionada.
|Verificar |Use esta función para verificar el documento de la línea seleccionada.
|Verificar Todo|Verificar todas las líneas del documento.
|Asignar Recibo/Envío Automáticamente|Use esta funcionalidad para asignar automáticamente el recibo/envío a las líneas. 
|Tarjeta de Orden|Ver o editar información detallada sobre la orden o la orden de devolución en la línea del documento de compra.
|Tarjeta de Documento|Ver la tarjeta del documento para el documento seleccionado. 
|*Acción*|
|Documentos Relacionados con la Línea de Orden|Muestra dónde se usa la línea de orden seleccionada en el documento de compra elegido.
|Filtrar/Desfiltrar Misma Línea de Importación|Filtrar/Desfiltrar para mostrar otros documentos o líneas con el mismo Nº de Orden y Nº de Línea de Orden.
|*Acción – Correo Electrónico*|
|Enviar Recordatorios de Recibo|Use esta función para enviar recordatorios de recibo para las líneas seleccionadas. (Solo aplicable si Coincidir Documentos = Recibos está configurado)
|Ver Registro de Correos Electrónicos|Use esta función para enviar recordatorios de recibo para las líneas seleccionadas.
|Enviar Correo Electrónico al Proveedor|Use esta función para enviar un correo electrónico al proveedor u otro.
|Correos Electrónicos Enviados|Ver una lista de correos electrónicos que se han enviado con respecto a este documento.
|*Relacionado*|
|Acerca de ExFlow|Obtener versiones actuales y enlaces convenientes
|*Relacionado - Archivos*|
|Mostrar Imagen del Documento (Ctrl+I)| Use esta función para mostrar la imagen del documento para el documento seleccionado actualmente.
|Mostrar Detalles de Importación (OCR)|Use esta función para mostrar los datos de importación OCR para el documento seleccionado actualmente.


|Características Relacionadas con la Orden| |
|:-|:-| 
| Buscar Uso Posible por Palabras: |Mostrar el número de ocurrencias de palabras que se han utilizado en documentos y transacciones.
| Buscar Uso Común por Descripción: | Mostrar el número de ocurrencias de la Descripción que se ha utilizado en documentos y transacciones.
| Buscar Uso Común por Nº de Artículo: | Mostrar el número de ocurrencias del Nº de Artículo que se ha utilizado en documentos y transacciones.


#### Código de Excepción 
El Código de Excepción es utilizado por los Compradores para dar orientación al equipo de AP para manejar líneas coincidentes con órdenes con error, permitiéndoles proceder con su trabajo de manera eficiente y acelerando el proceso de aprobación a contabilización.


|Excepciones |   | 
|:-|:-|
|Mensaje de Acción| El mensaje de error para la línea del documento
|Código de Excepción| Código de Error que el comprador puede agregar, para señalar al equipo de AP cómo proceder para resolver/manejar la línea con error. Esta es la ''Lista de Errores Múltiples'', edite la lista para hacer cambios. 
|Descripción de la Excepción| Descripción del Código de Excepción
|Excepción Creada por| Mostrar el Usuario que agregó el Código de Excepción
|Hora/Fecha de Manejo| Mostrar el Usuario que resolvió el error  


##### Transferir Códigos de Excepción entre entornos

Los Códigos de Excepción están disponibles para la transferencia de datos en las funciones [Copiar Configuración](https://docs.signupsoftware.com/business-central/docs/user-manual/welcome-to-exflow/get-started#copy-setup-from-another-company) y [Importar/Exportar](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/export-import-setup)


### Paneles de Información
#### Vista Previa de PDF
Ver la imagen del documento.

#### Panel de Discusión
Use el Panel de Discusión para comunicarse, como de costumbre, con colegas y aprobadores web.

#### Archivos de Documentos Entrantes
Descargar Documento Entrante o adjuntar otros archivos. 


### Conversión de Unidad de Medida Base

ExFlow admite la coincidencia con diferentes Unidades de Medida, siempre que se establezcan relaciones correctas en la tarjeta del Artículo --> Unidad de Medida del Artículo y se establezca la UOM base.

Los usuarios pueden interpretar documentos con una UoM y coincidirlo con otra UoM de línea de Orden. ExFlow usa y publica documentos con la UOM de la orden al final.

Para facilitar la gestión precisa del inventario y las órdenes al realizar la “Coincidencia Manual de Órdenes” habilitando el interruptor 'Usar Cantidad Base'. Esta funcionalidad permite que todas las cantidades se muestren en su unidad de medida base, asegurando consistencia y claridad en las líneas de documentos y órdenes.

Vaya a: **Diario de Importación --> Acciones --> Orden --> Coincidencia Manual de Órdenes (Alt +M) --> Usar Cantidad Base**

Al activar el interruptor ''Usar Cantidad Base'', Cuentas por Pagar (AP) puede ver todas las líneas de artículos en su cantidad base, independientemente de la unidad de medida (UoM) utilizada durante la importación. Por ejemplo, si se importa un documento con una UoM diferente, como 2 Cajas (KARTONG) a 500 SEK cada una, aún se puede coincidir con precisión con una línea de orden especificada como 20 PCS a 50 SEK.

En este ejemplo, importamos una factura con 2 KARTONG (1 KARTONG=10 PCS) coincidente con una orden con 20 PCS.

![OM](/img/media/manual-om-001.png)




