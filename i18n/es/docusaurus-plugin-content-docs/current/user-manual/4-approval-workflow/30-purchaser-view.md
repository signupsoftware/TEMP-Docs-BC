---
title: Vista del Comprador 
sidebar_position: 30
hide_title: true
custom_edit_url: null
---
## Vista del Comprador

Anteriormente, cuando todos los documentos con coincidencia de órdenes se importaban al diario, la carga de gestionar cualquier error recaía principalmente en el equipo de Cuentas por Pagar (AP). 

Ahora, los compradores pueden intervenir antes en el proceso, brindando apoyo al equipo de AP mediante la gestión o aportación de información sobre documentos con coincidencia de órdenes que tienen errores dentro de su propio espacio de trabajo dedicado, la **Vista de Coincidencia de Órdenes de ExFlow para Compradores.**<br/>

Después de que los compradores aborden los problemas (potenciales) con sus órdenes, esta función guía al equipo de AP en la resolución de errores en las líneas con coincidencia de órdenes dentro del Diario de Importación, permitiéndoles continuar su trabajo sin problemas y acelerando el proceso desde la aprobación hasta la contabilización.

## Configuración

### Nueva Coincidencia de Órdenes

La Vista del Comprador solo puede utilizarse si está habilitada la Nueva Coincidencia de Órdenes. 

Lea más sobre esto en [**Primeros Pasos**](https://docs.signupsoftware.com/business-central/docs/user-manual/welcome-to-exflow/get-started) y [**Nueva Experiencia de Coincidencia de Órdenes**](https://docs.signupsoftware.com/business-central/docs/user-manual/approval-workflow/new-order-matching)

### Configuración de Usuario

Vaya a: **Configuración de Usuario**

El ID de Usuario de Business Central debe ingresarse en la Configuración de Usuario para acceder a la Vista del Comprador. <br/>

También agregue el Código de Comprador del Usuario (código de vendedor/comprador) para obtener una vista filtrada según ese Código de Comprador, esto no es obligatorio. Sin embargo, si no se establece ningún Código de Comprador, el comprador verá todas las líneas de documentos con coincidencia de órdenes existentes que tengan errores.

Al agregar el Código de Comprador aquí en el usuario asociado, también se completará el Código de Comprador en el encabezado del pedido cuando el comprador cree pedidos. Esto puede ser beneficioso al trabajar con la Vista del Comprador, si no hay un Código de Comprador predeterminado asignado a un proveedor específico.

### Permisos en el Usuario

Vaya a: **Ficha de Usuario**<br/>

Se puede utilizar el Conjunto de Permisos EX PURCHASER, pero no es obligatorio.<br/>

Los usuarios con otros conjuntos de permisos de ExFlow también pueden acceder a la vista. Tenga en cuenta que combinar Ex Admin/Ex Accountant con Ex Purchaser causará limitaciones de acceso. (Si ya tiene uno de estos conjuntos de permisos, entonces Ex Purchaser obviamente no es necesario).

Se pueden proporcionar permisos adicionales para acceder a un diario al Comprador. Lea más sobre esto en 
[**Permiso de Diario de Importación para Comprador**](https://docs.signupsoftware.com/business-central/docs/user-manual/approval-workflow/purchaser-view#import-journal-permission-for-purchaser)

## Centro de Rol del Agente de Compras
Desde el Centro de Rol estándar de Business Central *Agente de Compras*, se puede encontrar la pila *Vista del Comprador de ExFlow*, y el Comprador puede hacer clic para acceder a su espacio de trabajo dedicado. 

![Vista del Comprador](@site/static/img/media/purchaser-view-021.png)

## Vista del Comprador

Vaya a: **Vista de Coincidencia de Órdenes de ExFlow para Comprador**

Los compradores también pueden buscar *Vista de Coincidencia de Órdenes de ExFlow para Comprador* en Business Central y entrar en la vista. 

La Vista del Comprador muestra todas las líneas de documentos con errores que deben gestionarse. Desde aquí, los Compradores pueden gestionar sus órdenes, recepciones, envíos y ajustes de precios, etc.

| Vista de Coincidencia de Órdenes para Comprador |   | 
|:-|:-|
|Coincidir Línea|Utilice esta función para hacer coincidir la línea seleccionada.
|Deshacer Coincidencia|Utilice esta función para liberar la coincidencia de la línea seleccionada para volver a coincidir con otra línea de orden. Las líneas divididas se revertirán.
|Eliminar Nº de Orden|Utilice esta función para eliminar el número de orden de la línea seleccionada.
|Verificar|Utilice esta función para verificar el documento de la línea seleccionada.
|Verificar Todo|Verificar todas las líneas de documentos.
|Asignar Automáticamente Recepción/Envío|Utilice esta funcionalidad para asignar automáticamente la recepción/envío a las líneas.
|Ficha de Orden|Ver o editar información detallada sobre la orden o la orden de devolución en la línea del documento de compra.
|Ficha de Documento|Ver la ficha del documento para el documento seleccionado.
|*Acción*|
|Documentos Relacionados con la Línea de Orden|Muestra dónde se utiliza la línea de orden seleccionada en el documento de compra elegido.
|Filtrar/Desfiltrar Misma Línea de Importación|Filtrar/Desfiltrar para mostrar otros documentos o líneas con el mismo Número de Orden y Número de Línea de Orden.
|*Acción – Correo Electrónico*|
|Enviar Recordatorios de Recepción|Utilice esta función para enviar recordatorios de recepción para las líneas seleccionadas. (Solo aplicable si Coincidir Documentos = Recepciones está configurado)
|Ver Registro de Correos Electrónicos|Utilice esta función para ver el registro de recordatorios de recepción enviados.
|Enviar Correo Electrónico al Proveedor|Utilice esta función para enviar un correo electrónico al proveedor u otros destinatarios.
|Correos Enviados|Ver una lista de correos electrónicos que se han enviado con respecto a este documento.
|*Relacionado*|
|Acerca de ExFlow|Obtener versiones actuales y enlaces convenientes
|*Relacionado - Archivos*|
|Mostrar Imagen del Documento (Ctrl+I)| Utilice esta función para mostrar la imagen del documento para el documento actualmente seleccionado.
|Mostrar Detalles de Importación (OCR)|Utilice esta función para mostrar los datos de importación OCR para el documento actualmente seleccionado.

## Líneas de Importación y Líneas de Orden
Las líneas de documentos importados se muestran a la izquierda y las líneas de orden correspondientes a la derecha.

Las facturas de compra y las líneas de orden de compra se muestran en negro, y las notas de crédito y las líneas de orden de devolución correspondientes se muestran en rojo para mayor claridad.

### Líneas Coincidentes
Las líneas de orden coincidentes se mostrarán en negrita para mayor claridad, de modo que el Comprador pueda ver fácilmente qué línea de importación está conectada a qué línea de orden.

![Vista del Comprador](@site/static/img/media/purchaser-view-001.png)

### Excepciones 
En la sección de Excepciones, se mostrarán diferentes mensajes de acción. Estos son los mismos mensajes de acción que el equipo de AP verá en los Diarios de Importación.<br/>

El Comprador puede agregar un Código de Excepción siempre que sea necesario. El Código de Excepción se utiliza siempre que el Comprador haya hecho todo lo posible para corregir un problema de coincidencia de órdenes. Después de agregar el código, el equipo de AP será informado sobre cómo manejar el documento.<br/>

El Código de Excepción no es obligatorio, si el Comprador corrige, por ejemplo, el costo unitario en la orden, entonces el error desaparecerá y no se necesitará un Código de Excepción ya que el documento se corregirá.<br/>

|Excepciones |   | 
|:-|:-|
|Mensaje de Acción| El mensaje de error para la línea del documento
|Código de Excepción| Código de error que el comprador puede agregar para señalar al equipo de AP cómo proceder para resolver/manejar la línea con error
|Descripción de la Excepción| Descripción del Código de Excepción
|Creado por| Muestra el usuario que agregó el Código de Excepción
|Hora/Fecha de Manejo| Muestra el usuario que resolvió el error  

Lea más sobre esto en [**Workflow**](https://docs.signupsoftware.com/business-central/docs/user-manual/approval-workflow/purchaser-view#workflow)

### Tipo de Error
El comprador puede filtrar la vista en un tipo de error específico para una gestión más fácil de sus líneas de error relacionadas con la orden.
Actualmente, los siguientes Tipos de Error están disponibles:
 
![Vista del Comprador](@site/static/img/media/purchaser-view-002.png)

### Usar Cantidad Base 
Muestra todas las cantidades en la unidad de medida base. 

Si el comprador activa la casilla ''Usar Cantidad Base'', el comprador puede ver todas las líneas de artículos en su cantidad base, independientemente de la unidad de medida (UoM) utilizada durante la importación. Por ejemplo, si un documento se importa con una UoM diferente, como 2 Cajas a 500 SEK cada una, aún se puede hacer coincidir con precisión con una línea de orden especificada como 20 PCS a 50 SEK.

Lea más sobre esto en [Conversión de Unidad de Medida Base](https://docs.exflow.cloud/business-central/docs/user-manual/approval-workflow/new-order-matching#base-unit-of-measure-conversion)

### Mostrar Líneas con Código de Excepción
Active esta casilla para ver las líneas de documentos donde el Comprador ha agregado Códigos de Excepción.<br/>

Las líneas estarán en esta vista mientras el documento exista en el Diario de Importación. Cuando el documento se crea y se envía para aprobación, las líneas no serán visibles. 

## FactBoxes
### Vista Previa de PDF
Ver la imagen del documento.

### Panel de Discusión
Utilice el Panel de Discusión para comunicarse, como de costumbre, con colegas y aprobadores web.

### Archivos de Documentos Entrantes
Descargue el Documento Entrante o adjunte otros archivos. 

## Workflow
AP importará documentos con coincidencia de órdenes, y todos ellos tendrán algún tipo de error de coincidencia de órdenes, podría ser, por ejemplo, diferencias de precio o cantidad.<br/>

Luego, estas líneas de error se mostrarán al Comprador específico en la Vista del Comprador, para que manejen el problema y el AP pueda hacer cualquier ajuste potencial y enviar el documento para aprobación.<br/>

Para ilustrar esto con un ejemplo, si una factura con coincidencia de órdenes se interpreta e importa al Diario de Importación con una diferencia de Costo Unitario entre la línea del documento importado y la línea de la orden, entonces ExFlow enumerará todos los problemas en una lista de errores recopilados para proporcionar una mejor visión general y un proceso de manejo y resolución más rápido.<br/>

### Diario de Importación, como AP

Cuando el documento se interpreta a nivel de línea y se importa con error, AP podría necesitar información sobre cómo resolver el problema relacionado con la orden.<br/>

En este ejemplo, AP tiene una factura con coincidencia de órdenes con un mensaje de acción en la línea, indicando que existe un error. Los errores se mostrarán en la lista de Múltiples Líneas de Error.<br/>

AP puede hacer clic en el Mensaje de Acción para inspeccionar y ver todos los errores existentes en la Lista de Múltiples Errores (en lugar de recibir errores uno por uno como en la antigua coincidencia de órdenes).<br/>

Si el Código de Comprador está configurado para un proveedor específico, seguirá al Diario de Importación, y todas las líneas de error serán visibles para ese comprador, en su Vista del Comprador para ser manejadas.

![Vista del Comprador](@site/static/img/media/purchaser-view-003.png)

![Vista del Comprador](@site/static/img/media/purchaser-view-004.png)

Los documentos interpretados con errores relacionados con la coincidencia de órdenes en el encabezado (lista de múltiples errores) también pueden ser activados manualmente (por AP) a nivel de línea y enviados al Comprador para su gestión.

Utilice la funcionalidad [Copiar Valores del Encabezado a Factura/Nota de Crédito](https://docs.exflow.cloud/business-central/docs/user-manual/approval-workflow/new-order-matching#copy-header-values-to-invoicecredit-memo-setup) para copiar el Código de Comprador de la orden al documento y hacer que la(s) línea(s) sea(n) visible(s) para el comprador específico en su Vista del Comprador.

### Vista del Comprador

#### Corregir una Orden
Según los Mensajes de Acción en este ejemplo, la orden no está liberada y no se puede hacer coincidir con las líneas del documento importado.

En este caso, el Comprador puede ingresar a la Ficha de Orden y recibir la orden, y por supuesto, hacer otras correcciones necesarias.

El Comprador también puede acceder a la Ficha de Documento en modo de lectura, pero no tendrá permiso para editar la ficha del documento.

![Vista del Comprador](@site/static/img/media/purchaser-view-005.png)

Esa orden desaparecerá de la Vista del Comprador, ya que recibirla también la marcará como gestionada, y AP ahora puede proceder a crear el documento en el Diario de Importación, ya que fue una coincidencia perfecta.

![Vista del Comprador](@site/static/img/media/purchaser-view-006.png)

#### Enviar Recordatorio de Recepción 
Vaya a: **Acciones --> Correo Electrónico --> Enviar Recordatorios de Recepción**

Si los bienes no se reciben, el Comprador puede enviar un recordatorio a los trabajadores del almacén, coordinador de compras u otros colegas.<br/>

Lea más sobre esto en [***Recordatorios por Correo Electrónico --> Orden No Recibida***](https://docs.signupsoftware.com/business-central/docs/user-manual/approval-workflow/email-reminders#unreceived-order)

![Vista del Comprador](@site/static/img/media/purchaser-view-007.png)

Esto solo funciona para documentos donde la configuración Coincidir Documentos = Recepciones está activada.<br/>
El Registro de Correos Electrónicos también se puede encontrar en la función ‘’Enviar Recordatorios de Recepción’’.<br/>

#### Enviar Correo Electrónico al Proveedor
Vaya a: **Acciones --> Correo Electrónico --> Enviar Correo Electrónico al Proveedor**

Los compradores pueden enviar correos electrónicos al proveedor desde esta vista. Los compradores también pueden ver todos los correos electrónicos enviados en la función ‘’Enviar Correo Electrónico al Proveedor’’.<br/>

Tenga en cuenta: La cuenta de correo electrónico estándar de Business Central debe estar configurada primero para enviar correos electrónicos. Lea más sobre esto [aquí](https://learn.microsoft.com/en-us/dynamics365/business-central/admin-how-setup-email)

En el siguiente ejemplo, el Comprador Sammy necesita contactar al proveedor debido a un costo unitario incorrecto en todos los artículos y solicitar un crédito y una nueva factura con los costos unitarios correctos, según su acuerdo.<br/>

![Vista del Comprador](@site/static/img/media/purchaser-view-008.png)

La información sobre el correo electrónico enviado se establecerá como un mensaje de chat en el Panel de Discusión.<br/> El correo electrónico también se adjuntará como un pdf en Documentos Entrantes (Archivos de Soporte).

![Vista del Comprador](@site/static/img/media/purchaser-view-009.png)

El pdf también seguirá a ExFlow Web como un archivo adjunto para que los aprobadores lo vean, para mantener a todos los involucrados informados de principio a fin.<br/>
El siguiente paso para el comprador es agregar un Código de Excepción: Crédito.<br/>

#### Agregar un Código de Excepción 
Para dar seguimiento al escenario anterior, el Comprador Sammy necesita agregar un Código de Excepción, señalando al AP que proceda con el manejo y resolución de los problemas del documento.

![Vista del Comprador](@site/static/img/media/purchaser-view-010.png)

Al agregar un Código de Excepción, el campo ‘’Creado por’’ se completará automáticamente con el ID de usuario que agregó el Código de Excepción.

![Vista del Comprador](@site/static/img/media/purchaser-view-011.png)

Siempre que un Comprador agregue un Código de Excepción, la Línea de Importación y su línea de orden correspondiente se filtrarán de esta página y serán accesibles en la vista filtrada ‘’Mostrar Líneas con Código de Excepción’’ cuando esté habilitada.

![Vista del Comprador](@site/static/img/media/purchaser-view-012.png)

El Comprador ha terminado de su lado, con el correo electrónico y el código de excepción agregados, el comprador ha guiado al AP para que continúe con el manejo/resolución del documento en el Diario de Importación.

#### Corregir el documento como AP en el Diario de Importación
AP puede habilitar ‘’Filtrar Documentos con Excepción de Orden’’ para filtrar el diario en los códigos de excepción agregados por los Compradores (para dar seguimiento al trabajo agregado por los compradores) y continuar con el manejo del documento.

![Vista del Comprador](@site/static/img/media/purchaser-view-013.png)
AP puede ver que el Comprador ha agregado Crédito como Código de Excepción y ahora sabe cómo proceder con el documento.

![Vista del Comprador](@site/static/img/media/purchaser-view-014.png)

Cuando el AP ha manejado/resuelto el documento, el error de coincidencia de órdenes en la línea desaparecerá. La ‘’Existencia de Múltiples Líneas de Error’’ seguirá marcada para que AP pueda hacer clic fácilmente en la pequeña línea (-) para abrir la Lista de Múltiples Errores y mostrar el historial.<br/>
AP también puede Bloquear el Documento para Publicación, como en la imagen a continuación.

![Vista del Comprador](@site/static/img/media/purchaser-view-015.png)

En la página de Lista de Múltiples Errores, se agregará una marca de tiempo a la línea manejada para dar información sobre cuándo se resolvió el error.

![Vista del Comprador](@site/static/img/media/purchaser-view-016.png)

Cuando se resuelve, la línea de error estará en cursiva y no se podrá editar.<br/>

El personal de AP también puede usar el comando de acceso directo ‘’Alt+M’’ para ingresar a la página de Coincidencia Manual de Órdenes para una mejor visión general.<br/>

![Vista del Comprador](@site/static/img/media/purchaser-view-017.png)

El documento ahora se puede crear. Cuando se crea, el documento se encontrará en el Estado de Aprobación como de costumbre, pero marcado como: bloqueado para publicación, hasta que se realicen más ajustes.

### Estado de Aprobación 
Vaya a: **Estado de Aprobación --> Líneas de Documentos --> Existencia de Múltiples Líneas de Error**<br/>

En el Estado de Aprobación, AP puede ver si un documento contiene Múltiples Líneas de Error bajo las Líneas de Documentos. Si las líneas de error del documento con coincidencia de órdenes han sido manejadas y resueltas, las Múltiples Líneas de Error seguirán para ver el historial.<br/>

Al hacer clic en ‘’Existencia de Múltiples Líneas de Error’’: ‘’Sí’’, se abrirá la Lista de Múltiples Errores para mostrar la(s) línea(s) resuelta(s) en cursiva.

![Vista del Comprador](@site/static/img/media/purchaser-view-018.png)

#### Enviar Correo Electrónico al Proveedor en el Estado de Aprobación
Vaya a: **Relacionado --> Estado de Aprobación --> Enviar Correo Electrónico al Proveedor/Correos Enviados**<br/>

Si es necesario, AP puede enviar correos electrónicos al proveedor desde el Estado de Aprobación y también ver el registro de correos electrónicos. Cada correo electrónico enviado será un archivo adjunto guardado, junto con un mensaje de chat para mantener al aprobador actualizado.

Vaya a *Correos Enviados* para ver el registro.

### Historial del Estado de Aprobación

La información de la Lista de Múltiples Errores, por supuesto, también seguirá a las Líneas de Documentos Publicados en el Historial del Estado de Aprobación.

## Permiso de Diario de Importación para Comprador 

Vaya a: **Ficha de Usuario de ExFlow --> Permiso de Diario de Importación para Comprador**

Abra la ficha de usuario de ExFlow del Comprador e ingrese ‘’Permiso de Diario de Importación para Comprador’’ y marque qué diario(s) debe tener acceso el Comprador.<br/>

Esto solo será aplicable para Usuarios de Business Central con el conjunto de permisos EX PURCHASER.<br/>
Con el permiso otorgado, el comprador tendrá acceso de LECTURA al diario elegido, no se podrán hacer modificaciones.

![Vista del Comprador](@site/static/img/media/purchaser-view-019.png)

En este ejemplo, el Comprador Sammy solo tiene acceso para ingresar al Diario de Importación EDC PO, y no a otros diarios.

![Vista del Comprador](@site/static/img/media/purchaser-view-020.png)
