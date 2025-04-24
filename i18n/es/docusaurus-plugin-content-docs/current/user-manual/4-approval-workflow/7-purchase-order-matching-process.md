---
title: Proceso de Coincidencia de Órdenes de Compra
sidebar_position: 7
hide_title: true
custom_edit_url: null
---
## Proceso de Coincidencia de Órdenes de Compra


## Ejecutar el Asistente de Coincidencia de Órdenes
Este manual de usuario es su guía de referencia para configurar ExFlow y hacer coincidir facturas con órdenes de compra sin esfuerzo. Diseñado pensando en la simplicidad, el Asistente de Coincidencia de Órdenes hace que el proceso sea sencillo y fácil de usar.

Busque el Asistente de Coincidencia de Órdenes de ExFlow.

![Asistente de Coincidencia de Órdenes - Búsqueda](@site/static/img/media/order-matching-wizard-001-search.png)


### Coincidencia a Nivel de Cabecera o Línea
El primer paso para configurar el Asistente de Coincidencia de Órdenes es determinar si la coincidencia de facturas con órdenes de compra debe realizarse a nivel de cabecera o a nivel de línea.

**Coincidencia a Nivel de Cabecera:**<br/>
Si elige la coincidencia a nivel de cabecera, la Coincidencia de Órdenes comparará el total general de la factura con el valor total disponible de la orden de compra.

Este método es adecuado cuando los detalles de artículos o servicios individuales en la factura no necesitan coincidir con artículos específicos en la orden de compra, o si la información de línea de la factura es demasiado pobre para una coincidencia precisa.


**Coincidencia a Nivel de Línea:**<br/>
Si elige la coincidencia a nivel de línea, la Coincidencia de Órdenes comparará cada línea de factura interpretada con los artículos de línea correspondientes en la orden de compra.

Este enfoque asegura que cada artículo o servicio individual en la factura coincida con precisión con el artículo correspondiente en la orden de compra.

La coincidencia de línea utiliza información interpretada como cantidad de factura, precio unitario, total de línea y más, para obtener una coincidencia precisa con la línea de orden de compra correspondiente y poder identificar cualquier discrepancia.

### Coincidencia de Documentos Con
El siguiente paso es determinar cómo deben coincidir las facturas con las órdenes de compra en relación con los recibos de compra.
Hay tres opciones a considerar:

**Recibo:**<br/>
Seleccione esta opción si desea que las facturas coincidan solo con órdenes de compra que tengan recibos de compra asociados.

Esto asegura que los artículos sean recibidos y registrados en el almacén y que coincidan con la factura, antes de hacer coincidir la factura y enviarla para su aprobación y contabilización final. 

**Orden:**<br/>
Elija esta opción si desea que las facturas coincidan con órdenes de compra independientemente de si hay un recibo de compra asociado.

Esto permite que las facturas coincidan incluso si no se ha confirmado la recepción de bienes o servicios, proporcionando flexibilidad en su proceso de coincidencia.

Útil en escenarios como envío directo o cuando los recibos de compra no están disponibles, o se requieren para hacer coincidir completamente la factura y enviarla para su aprobación y contabilización.

**Orden y Recibo:**<br/>
Si prefiere una combinación de las dos opciones anteriores, seleccione esta opción.

En este caso, las facturas pueden coincidir con órdenes de compra con o sin recibos de compra asociados, proporcionando máxima flexibilidad en escenarios de coincidencia.

Es posible hacer coincidir líneas de factura con órdenes de compra con y sin líneas de artículos recibidos. También hace posible hacer coincidir líneas de factura con líneas de artículos parcialmente recibidos en la orden y enviarlas para su aprobación y contabilización.

### Aprobar Automáticamente Facturas Coincidentes
**Nunca:**<br/>
Seleccione esta opción si desea que todas las facturas coincidentes pasen por un proceso de aprobación manual. En este caso, ninguna factura será aprobada automáticamente, independientemente de cualquier diferencia o umbral.

**Si la Diferencia está dentro de la Tolerancia:**<br/>
Elija esta opción si desea que las facturas coincidentes se aprueben automáticamente solo cuando la diferencia entre la factura y la orden de compra esté dentro del umbral o tolerancia especificada para la aprobación automática.

Esta opción permite un procesamiento eficiente de facturas con discrepancias menores, asegurando que solo las diferencias significativas requieran aprobación manual.

**Si la Orden Coincidente está Aprobada:**<br/>
Esta opción agrega una capa adicional de aprobación al requerir que la orden coincidente haya sido revisada y aprobada a través de ExFlow, asegurando que las facturas se aprueben automáticamente solo cuando la autorización necesaria esté en su lugar.

![Asistente de Coincidencia de Órdenes - General](@site/static/img/media/order-matching-wizard-002-general.png)

### Monto Máximo para Aprobación Automática
Si ha permitido la aprobación automática de facturas coincidentes, aquí es donde puede especificar el monto máximo para la aprobación automática. Este parámetro define el umbral por encima del cual las facturas requerirán aprobación manual, independientemente de los resultados de la coincidencia.

### Advertencia de Violación de Tolerancia
Habilite esta configuración si desea que los contadores reciban una advertencia durante la importación de facturas coincidentes de compra cuando haya discrepancias superiores a su tolerancia permitida para la aprobación automática.
De cualquier manera, si esta configuración está habilitada o no, las discrepancias superiores a su tolerancia permitida siempre requerirán que la línea de la factura sea aprobada manualmente.

### Desviación del Costo Unitario Directo (%) y Desviación del Costo Unitario Directo (Monto LCY)
Defina los umbrales de desviación para el costo unitario directo de las líneas de factura en comparación con las líneas de orden coincidentes. Estos umbrales determinan las diferencias permitidas entre la factura y la orden de compra para la aprobación automática.

![Asistente de Coincidencia de Órdenes – Aprobación Automática](@site/static/img/media/order-matching-wizard-003-auto-approval.png)

### Manejo Automático de Diferencias
La funcionalidad de Manejo Automático de Diferencias permite que ExFlow sugiera automáticamente una línea de diferencia si se identifican costos adicionales o inesperados, como flete u otros cargos, durante la coincidencia de órdenes.
Puede elegir si ExFlow debe sugerir una línea de factura del tipo de línea Cargo de Artículo o Cuenta G/L.
Luego, especifique qué Cuenta G/L o qué Cargo de Artículo usar para la línea sugerida.

### Monto Máximo de Diferencia (LCY) y Máximo % de Diferencia
Es donde puede especificar una tolerancia permitida para la línea de diferencia sugerida automáticamente para la aprobación automática.

![Asistente de Coincidencia de Órdenes - Otros](@site/static/img/media/order-matching-wizard-004-other.png)

### Publicar Automáticamente Recibos de Compra
La función "Publicar Automáticamente Recibos de Compra" permite la publicación automática de recibos de compra en el proceso de coincidencia. Sin embargo, tenga en cuenta que esta función solo se puede utilizar al hacer coincidir facturas con **“Orden”** o **“Orden y Recibo”**.

Hacer coincidir facturas utilizando la lógica **“Orden”** o **“Orden y Recibo”**, permite que ExFlow coincida completamente y envíe una factura para su aprobación y publicación. Sin embargo, Business Central siempre requiere que los Recibos de Compra se publiquen antes de que la factura coincidente pueda ser publicada y para que la Orden de Compra sea facturada.

Esta configuración permite que ExFlow publique y facture automáticamente la cantidad aprobada de las líneas de factura coincidentes. Se ejecuta una vez que la factura tiene el estado "Lista para Publicar" en el Estado de Aprobación.
Con esta configuración deshabilitada, se requiere que publique los recibos de compra manualmente.

![Asistente de Coincidencia de Órdenes – Publicar Automáticamente Recibo de Compra](@site/static/img/media/order-matching-wizard-005-automatically-post-purchase-receipt.png)


### Completar el Asistente
Haga clic en "Finalizar" para cerrar el Asistente y aplicar la configuración.

![Asistente de Coincidencia de Órdenes – Completar el Asistente](@site/static/img/media/order-matching-wizard-006-complete.png)

### Configuración de ExFlow
Los campos en la Configuración de ExFlow que se ven afectados por el Asistente de Coincidencia de Órdenes se seleccionan en la imagen a continuación:

![Asistente de Coincidencia de Órdenes – Configuración de ExFlow](@site/static/img/media/exflow-setup-po-matching-001.png)


## Importar Factura de Compra con Coincidencia de Órdenes

La importación de facturas se realiza desde "Diarios de Importación de ExFlow". Utilice la función "Importar Documentos por Lote" para importar facturas para todos los Diarios o ingrese/edite un Diario de Importación para importar documentos en un diario específico.

### Coincidencia de órdenes a nivel de cabecera

Si se ha interpretado un número de Orden de Compra en la factura, será visible en la columna "Núm. de Orden (Importación)". ExFlow buscará automáticamente en la lista de Órdenes de Compra disponibles en Business Central en función del proveedor y el número de Orden de Compra importado.

ExFlow puede coincidir tanto con el número de Orden de Compra interno como con el número de Orden de Compra del Proveedor, pero este último requiere que esté configurado en la propia Orden de Compra.

La columna "Núm. de Orden" mostrará la Orden de Compra coincidente si se encuentra.

![Diario de Importación de ExFlow - Núm. de Orden](@site/static/img/media/image292.png)

Este procedimiento también se puede activar manualmente si la factura no tiene un número de Orden de Compra importado. Ingrese manualmente el número de Orden de Compra en la columna "Núm. de Orden".

Dependiendo de si ExFlow está configurado para coincidencia de dos vías o de tres vías, los siguientes pasos del proceso serán ligeramente diferentes.


#### Coincidencia de tres vías

Significa que ExFlow coincidirá la factura con la Orden de Compra y los Recibos de Compra Publicados asociados.

Esto se hace automáticamente por defecto, pero también se puede activar manualmente utilizando la función "Obtener Líneas de Recibo/Envío de Devolución/Orden".

![Diario de Importación de ExFlow - Obtener Líneas de Recibo/Envío de Devolución/Orden](@site/static/img/media/image293.png)

La coincidencia de tres vías requiere que la Factura de Compra tenga Órdenes de Compra Publicadas asociadas. ExFlow obtendrá todas las líneas de Recibo Publicadas disponibles y las agregará como Líneas de Factura.

![Diario de Importación de ExFlow - Líneas de Importación](@site/static/img/media/image294.png)

Esta función también puede ser útil cuando una factura debe coincidir con múltiples Órdenes de Compra a nivel de cabecera.

Al seleccionar Líneas de Recibo en la página "Obtener Líneas de Recibo" hay una posibilidad de excluir las líneas que ya están completamente coincidentes con otra factura en el Diario de Importación o que aún no están publicadas en el Estado de Aprobación.
Haga clic en "Excluir completamente coincidentes" para ocultar dichas líneas de recibo:

![Diario de Importación de ExFlow - Obtener Líneas de Recibo](@site/static/img/media/image295.png)

En la imagen a continuación, las líneas coincidentes están ocultas. Haga clic en "Mostrar Todo" para restablecer la página y ver todas las líneas de recibo nuevamente. Ambas acciones en "Obtener Líneas de Recibo" existen para Notas de Crédito y Órdenes de Devolución de Compra también.

![Diario de Importación de ExFlow - Obtener Líneas de Recibo - Lista de recibos después de Excluir Completamente Coincidentes](@site/static/img/media/image296.png)

Es posible marcar la configuración "Deshabilitar Filtro de Moneda en Obtener Líneas de Recibo" en la sección de Coincidencia de Órdenes en la Configuración de ExFlow para mejorar el rendimiento al usar Obtener Líneas de Recibo en el Diario de Importación. No se establecerá ningún filtro en el Código de Moneda al abrir la página de selección.

#### Coincidencia de dos vías

Significa que ExFlow coincidirá la factura directamente con la Orden de Compra.
Sin el requisito de tener Recibos de Compra Publicados asociados.

![Diario de Importación de ExFlow - Líneas de Importación](@site/static/img/media/image297.png)

Cualquier conflicto, costo o discrepancia de cantidad se mostrará en forma de un Mensaje de Acción y deberá corregirse antes de que se pueda crear y enviar la factura para su aprobación.

### Coincidencia de órdenes a nivel de línea

Esto requiere que la factura haya sido interpretada a nivel de cabecera y línea en ExFlow Data Capture o cualquier otra solución OCR que se utilice.

La coincidencia de órdenes realizada a nivel de línea da un resultado más preciso cuando se trata de identificar discrepancias. La coincidencia a nivel de línea también proporciona mucha más configuración cuando se trata de configurar validaciones y umbrales permitidos.

Un requisito previo para obtener resultados precisos de coincidencia de líneas es que sea posible extraer información esencial de las facturas del proveedor, para que ExFlow pueda entender con qué líneas de orden coincidir.

El número de artículo, la cantidad, el precio unitario y el monto total de la línea son algunos de los valores más importantes a extraer de la factura para ayudar a ExFlow a coincidir las líneas de factura correctas con las líneas de orden.

ExFlow también puede coincidir el número de artículo del proveedor, si está configurado en Business Central como "Núm. de Artículo del Proveedor" o "Referencias Cruzadas". También hay una opción para configurar mapeos de importación OCR específicos de ExFlow, donde los valores importados pueden traducirse y mapearse a cuentas G/L o artículos específicos.

Tanto la coincidencia de dos vías como la de tres vías son compatibles con la coincidencia de órdenes a nivel de línea en ExFlow.

Una de las mayores ventajas de la coincidencia de líneas en comparación con la coincidencia de cabecera es que ExFlow podrá ejecutar validaciones en cada línea de factura interpretada y decir exactamente qué necesita corregirse y qué tipo de problema es. Mientras que la coincidencia de cabecera solo dará información de que hay un conflicto o una diferencia de precio entre el total de las líneas de orden y el monto total de la factura.

La configuración de la coincidencia de líneas se puede encontrar en la Configuración de ExFlow.

![Configuración de ExFlow - Coincidencia de Órdenes](@site/static/img/media/exflow-setup-po-matching-004.png)

El ejemplo a continuación describe cómo importar desde un diario creado para usar solo para "Facturas de Compra Coincidentes con Órdenes".

Seleccione el diario y ábralo haciendo clic en "Editar Diario" o haciendo clic en el Nombre.

![Diario de Importación de ExFlow](@site/static/img/media/image299.png)

**Paso 1 -- Importar documento**<br/>
Vaya a: ***Inicio \--\> Importar Documentos\...***<br/>
Cuando se complete la importación, se creará una nueva línea.

**Paso 2 -- Verificar y manejar "Mensajes de Acción"** (**A** en la imagen a continuación).<br/>
Mensajes de acción comunes y soluciones:

- **¡Hay líneas coincidentes con la orden pero falta el recibo!**<br/>
    La entrega no se ha registrado. Vaya a la Orden de Compra y registre -- Recibir.<br/>
    Ejecute verificar después de recibir la entrega y ExFlow coincidirá la factura con la entrega registrada.<br/>
    ***Inicio \--\> Verificar Documento***
    (**B** en la imagen a continuación)
    ![Diario de Importación de ExFlow](@site/static/img/media/image300.png)

- **El monto (XX,XX) no es igual al total de las líneas (XX,XX)**<br/>
    Cambie los precios y las líneas para que coincidan con la factura. Utilice "Detalles de Línea" en FactBox para totales y diferencias. (**E** en la imagen a continuación).

- **Si la factura incluye más de una orden**<br/>
Utilice "Obtener Recibo/Envío de Devolución".
***Acciones \--\> Orden \--\> Obtener Recibo/Envío de Devolución/Líneas de Orden*** (**C** en la imagen a continuación).<br/>
![Diario de Importación de ExFlow](@site/static/img/media/image301.png)

- **Ver línea para mensaje de acción específico - ¡Diferencia de línea entre la factura y el costo unitario de la orden!**<br/>
    Corrija el Costo Unitario Directo Excl. IVA. o corrija el precio de la orden para que coincida con la orden contra la factura.
    O desmarque "Probar Costo Unitario" en Líneas de Importación y envíe la factura para su aprobación. (**D** en la imagen a continuación).<br/><br/>
    ![Diario de Importación de ExFlow](@site/static/img/media/image302.png)

**Paso 3 -- Verificar Todos los Documentos...**<br/>
Vaya a: ***Inicio \--\> Verificar Todos los Documentos***<br/>
Cuando se hayan manejado todos los mensajes de acción, "Verificar Documento" para ver si el mensaje de acción está vacío y, por lo tanto, listo para ser creado.

**Paso 4 -- Crear Factura/Nota de Crédito**<br/>
Vaya a: ***Crear \--\> "Crear Facturas/Notas de Crédito por Lote"\... / "Crear Factura/Nota de Crédito"***<br/>
Cree la factura o nota de crédito haciendo clic en "Crear Factura/Nota de Crédito".

### Coincidencia de órdenes - Envío Directo

ExFlow admite órdenes de envío directo. Para obtener asistencia con la función estándar de envío directo, comuníquese con un socio de confianza o con el soporte de Microsoft.

La configuración más común para el envío directo probablemente sea trabajar con la coincidencia de facturas con órdenes utilizando la configuración: *"Coincidir Documentos Con: Orden"* y *"Recibir Automáticamente Líneas de Órdenes de Compra"*. 

El siguiente ejemplo muestra un ejemplo de cómo trabajar con envíos directos junto con la coincidencia de órdenes de ExFlow:

Cree una Orden de Venta, marque las líneas de venta para Envío Directo marcando la casilla de verificación "Envío Directo". Luego libere la Orden de Venta.

![Orden de Venta](@site/static/img/media/image303.png)

Cree una Orden de Compra. Elija el Cliente ''Ship-To'' (junto con otra información necesaria), en este ejemplo se selecciona el cliente ''School of Fine Art''.

Desde el encabezado use Acciones \--\> Funciones \--\> Envío Directo \--\> Obtener Orden de Venta. Luego libere la Orden de Compra.

![Orden de Compra](@site/static/img/media/image304.png)

Importe una factura al Diario de Importación de ExFlow del proveedor (Dustin) referente al envío directo. Utilice Acciones \--\> Orden \--\> Obtener Recibo/Envío de Devolución/Líneas de Orden para recuperar las líneas.

![Diario de Importación de ExFlow](@site/static/img/media/image305.png)

Cree y envíe la factura para su aprobación, luego apruebe y verifique la factura. Cuando se haya ejecutado "Verificar Cambios" en el Estado de Aprobación, los artículos en la Orden de Compra se recibirán automáticamente y los artículos en la Orden de Venta se enviarán automáticamente.

Vuelva a la Orden de Venta para facturar la orden de venta. Si esto no se realiza antes de registrar la factura desde el Estado de Aprobación de ExFlow, aparecerá el siguiente mensaje:

![Mensaje de error en el Estado de Aprobación](@site/static/img/media/image306.png)

Cuando se facture la Orden de Venta, será posible registrar la factura en el Estado de Aprobación como de costumbre.

### Coincidir Factura con Líneas de Recibo, Orden o ambas Líneas de Recibo y Orden
Vaya a: ***Configuración \--\> Configuración de ExFlow \--\> Coincidencia de Órdenes \--\> Coincidir Documentos Con***

La configuración "**Coincidir Documentos Con**" especifica si ExFlow debe coincidir las Facturas de Compra importadas con Órdenes de Compra, Recibos de Compra o ambas líneas de Recibo y Orden.

![Configuración de ExFlow - Coincidencia de Órdenes - Coincidir Documentos Con](@site/static/img/media/exflow-setup-po-matching-005.png)

**Recibo:** ExFlow encontrará automáticamente la Orden de Compra en función del número de Orden importado. ExFlow recuperará automáticamente los Recibos Publicados disponibles asociados con la Orden de Compra si la configuración "**Recuperar Líneas Automáticamente**" está habilitada.

**Orden:** Esto permite hacer coincidir una Factura de Compra directamente con una Orden de Compra que carece de Recibos Publicados. <br/> El Recibo de Compra debe registrarse antes de la publicación final de la factura. Esto se puede hacer manualmente desde la Orden de Compra, o automáticamente activando la configuración "**Recibir Automáticamente Líneas de Órdenes de Compra**". <br/> ExFlow recuperará automáticamente las Líneas de Orden disponibles asociadas con la Orden de Compra si la configuración "**Recuperar Líneas Automáticamente**" está habilitada.

**Orden y Recibo:** Con esta configuración es posible hacer coincidir una Factura de Compra con ambas líneas de Recibo publicadas y de Orden. Esto significa que ExFlow recuperará recibos en una línea coincidente y líneas de orden aún no recibidas. Además, es posible permitir que ExFlow reciba automáticamente líneas de orden habilitando "**Recibir Automáticamente Líneas de Órdenes de Compra**", si es necesario.

Al habilitar “Recibir Automáticamente Líneas de Órdenes de Compra” ExFlow recibirá todas las líneas que estén coincidentes con una Orden de Compra. Lo que ExFlow recibe se basa en los tipos de línea permitidos de "Configuración de Tipos de Línea de Recepción Automática" (la configuración se abre automáticamente después de establecer “Recibir Automáticamente Líneas de Órdenes de Compra” como VERDADERO).

Si se necesitan cambios, vaya a: ***Configuración de ExFlow --> Relacionado --> Avanzado --> Configuración de Tipos de Línea de Recepción Automática***

![Tipos de Línea de Recepción de ExFlow](@site/static/img/media/auto-receiving-line-types-001.png)

La misma función también se puede encontrar en la página "Configuración de Proveedor de ExFlow".

![Tarjeta de Configuración de Proveedor de ExFlow](@site/static/img/media/advanced-vendor-options-002.png)


### Aprobar Automáticamente Facturas de Coincidencia de Órdenes de Compra

#### Configuración de ExFlow - Coincidencia de Órdenes

***Configuración \--\> Configuración de ExFlow \--\> Coincidencia de Órdenes \--\> Aprobar Automáticamente Facturas***

Para aprobar automáticamente las facturas coincidentes con órdenes, hay tres opciones.

**Nunca:** Con esta configuración, la aprobación automática está desactivada. Todas las Facturas de Compra coincidentes requieren aprobación manual.

**Si la diferencia está dentro de la tolerancia:** Si la factura importada coincide con una orden de compra sin discrepancias de cantidad o precio, se aprobará automáticamente. Esto también se aplica si hay discrepancias dentro del umbral permitido.

**Si la orden coincidente está aprobada:** Los mismos requisitos que la opción anterior, con la adición de que la Orden de Compra coincidente debe haber sido aprobada a través de ExFlow.

**Usuario para aprobación automática:** Especifique un Usuario de ExFlow que se utilizará como sello en la transacción e historial para las Facturas que hayan sido coincidentes automáticamente con una Orden de Compra y aprobadas. Al dejar esta configuración en blanco, se utilizará el usuario que creó la Factura de Compra desde el Diario de Importación de ExFlow.

![Configuración de ExFlow - Coincidencia de Órdenes - Aprobar Automáticamente Facturas](@site/static/img/media/exflow-setup-po-matching-006.png)

### Importar Documentos por Lote desde la Interpretación

Para importar documentos coincidentes con órdenes en un Diario de Importación separado, agregue un nuevo Diario de Importación y use "Solo Documentos Coincidentes con Órdenes de Compra".

![Diarios de Importación de ExFlow](@site/static/img/media/image309.png)

### Línea de Diferencia Automática

En el Diario de Importación de ExFlow al hacer coincidir la Orden de Compra, es posible detectar y crear una Línea de Diferencia a una Cuenta G/L, Artículo o Cargo (Artículo) automáticamente.

Agregue "Código de Compra de ExFlow" en el campo "Código de Compra de Línea de Diferencia" en la sección de Coincidencia de Órdenes en la Configuración de ExFlow.

![Configuración de ExFlow - Coincidencia de Órdenes](@site/static/img/media/exflow-setup-po-matching-007.png)

![Diario de Importación de ExFlow](@site/static/img/media/image311.png)

Los Cargos Misceláneos y las Líneas de Diferencia pueden coincidir con una Orden de Compra, si está dentro de la tolerancia. Si el campo "Núm. de Orden" está poblado y la línea es una coincidencia perfecta con la línea de la Orden de Compra, coincidirá. Si no es una coincidencia perfecta, cualquier discrepancia de coincidencia (cantidad o precio) se reflejará como un Mensaje de Acción.


### Deshabilitar Automáticamente la Coincidencia de Órdenes de Compra para Cargos Misceláneos
Vaya a ***Configuración de ExFlow --> Importación OCR --> Deshabilitar Automáticamente la Coincidencia de Órdenes de Compra para Cargos Misceláneos***

Al trabajar con cargos interpretados a nivel de línea, existe la posibilidad de mapear estos cargos hacia cualquier tipo de línea con el Mapeo de Importación OCR de ExFlow.

Encuentre la configuración "Deshabilitar Automáticamente la Coincidencia de Órdenes de Compra para Cargos Misceláneos" en la Configuración de ExFlow. Cuando esta configuración está habilitada, estos nuevos cargos mapeados no se coincidirán con la Orden de Compra. Esta configuración se puede utilizar en los casos en que el flete o el cargo por servicio no se cree como una línea en la Orden de Compra".

Esta configuración solo se puede habilitar si ''Crear Automáticamente Mapeo de Línea OCR'' está configurado como ''Preguntar'' o ''Siempre''.

![Configuración de Importación OCR de ExFlow](@site/static/img/media/exflow-setup-ocr-import-001.png)

"Deshabilitar Automáticamente la Coincidencia de Órdenes de Compra para Cargos Misceláneos" también se puede encontrar en la lista de Configuración de Proveedor de ExFlow. Esta función está oculta por defecto, personalice para agregar esta configuración a la lista si es necesario.

![Configuración de Proveedor de ExFlow](@site/static/img/media/exflow-vendor-setup-automatically-disable-po-001.png)


### Retraso de Coincidencia de Órdenes de Compra Fecha del Documento y Fecha de Vencimiento
Vaya a ***Configuración de ExFlow --> Coincidencia de Órdenes --> Retraso de Coincidencia de Órdenes de Compra Fecha del Documento (Días) / Retraso de Coincidencia de Órdenes de Compra Fecha de Vencimiento (Días)***

Es posible permitir que ExFlow retrase el proceso de coincidencia de órdenes de compra, tanto con la fecha de la factura importada como con la fecha de vencimiento. 


![Retraso de Coincidencia de Órdenes de Compra](@site/static/img/media/exflow-setup-po-matching-delay-001.png)

Si se importa una factura interpretada al Diario de Importación, ExFlow retrasará el proceso de coincidencia de compra según la configuración en la Configuración de ExFlow y proporcionará un mensaje de acción en el Diario de Importación. 

Tomemos un ejemplo: ''Retraso de Coincidencia de Órdenes de Compra Fecha del Documento'' está configurado como ''1D''. Entonces ExFlow esperará un día para obtener las líneas de recibo y coincidir la orden de compra con la factura en el Diario de Importación. 

El mismo procedimiento para ''Retraso de Coincidencia de Órdenes de Compra Fecha de Vencimiento''. Si se establece ''-20D'' en este campo, entonces ExFlow obtendrá las líneas de recibo y coincidirá 20 días antes de la fecha de vencimiento de la factura. Esta función tiene una mayor priorización que la función anterior, con el propósito de nunca dejar que una factura venza.

También se mostrará un mensaje de acción para la línea de documento específica bajo el período de retraso de coincidencia de órdenes de compra aplicado. Cuando sea el momento de proceder con el proceso de coincidencia de órdenes de compra (según la fórmula de fecha en la configuración), el mensaje de acción desaparecerá y el documento estará listo para su creación.

![Retraso de Coincidencia de Órdenes de Compra](@site/static/img/media/po-matching-delay-002.png)


### Prioridad de Coincidencia de Núm. de Artículo

Vaya a: **Prioridad de Coincidencia de Núm. de Artículo** o a través de **Configuración de ExFlow --> Relacionado --> Avanzado --> Prioridad de Coincidencia de Núm. de Artículo**

Esta función ayuda a determinar el orden en el que el sistema intenta hacer coincidir las facturas importadas con artículos y líneas de orden. 

Esto puede ser útil cuando, por ejemplo, el mismo número de artículo existe en la lista de artículos estándar como en el número de artículo del proveedor. O si se importan líneas de factura donde la mayoría son referencias de artículos del proveedor, considere dar mayor prioridad a "Referencia de Artículo". Deshabilite los tipos de coincidencia que den coincidencias falsas positivas o que no se utilicen desmarcándolos.


![Prioridad de Coincidencia de Núm. de Artículo](@site/static/img/media/exflow-setup-item-no-matching-prio-001.png)

| Prioridad de Coincidencia de Núm. de Artículo |  |
|:-|:-|
| **Mapeo OCR**         |Coincidir Núm. de Artículo según lo especificado en *Mapeo de Importación OCR*
| **Cuenta G/L Predeterminada/Artículo Ficticio**  |Coincidir Núm. de Artículo según la *Cuenta Predefinida* (Configuración de ExFlow --> General) o *Artículo Ficticio para Mapeo de Línea OCR* (Configuración de ExFlow --> Importación OCR). Esto solo se hará si el Núm. de Artículo importado está en blanco. <br/><br/> Si no hay un número importado y el núm. de orden (importado) está en blanco, entonces tomará automáticamente la cuenta G/L ficticia. Si hay un Núm. de Orden (importado), entonces tomará el artículo ficticio.
| **Artículo**         |Coincidir Núm. de Artículo según el *Núm. de Artículo* real en Business Central
| **Artículo con Núm. de Proveedor**   |Coincidir Núm. de Artículo según lo que se haya agregado en Reabastecimiento--> Compra. Si se especifica un *Núm. de Proveedor* en la tarjeta de Artículo, junto con un *Núm. de Artículo del Proveedor* específico, entonces esto tendrá prioridad.
| **Artículo del Proveedor**         | Coincidir Núm. de Artículo según el *Núm. de Artículo del Proveedor* configurado en la Tarjeta de Artículo en Business Central
| **Referencia de Artículo**         |Coincidir Núm. de Artículo según la *Referencia del Proveedor* configurada en la Tarjeta de Artículo en Business Central
| **Orden de Compra**         |Coincidir Núm. de Artículo según las líneas de orden de compra donde el Núm. de Artículo del Proveedor de la Línea de Compra sea igual al número importado.
| **Primera Ejecución Núm. Original**  |ExFlow elimina caracteres no deseados en el Núm. de Artículo interpretado (todos los caracteres que no sean A...Z y 0..9) y lo intenta de nuevo.
| **Cuenta G/L**         |La primera verificación es ver si el núm. de orden interpretado tiene un valor. Si está en blanco, entonces ExFlow busca una cuenta G/L con el número importado. Si se encuentra, ExFlow tomará esa cuenta G/L, de lo contrario, ExFlow tomará la Cuenta G/L Predefinida (si la cuenta existe en Configuración de ExFlow --> General). Si el Núm. de Orden importado no está en blanco, ExFlow proporcionará el Núm. de Artículo Ficticio (si existe en Configuración de ExFlow --> Importación OCR) <br/><br/>La diferencia en esta opción (vs la opción anterior ''Cuenta G/L Predeterminada/Artículo Ficticio'') es que ExFlow verifica si existe una cuenta G/L antes de proporcionar la Cuenta G/L Predefinida.

Configure una Prioridad de Coincidencia de Núm. de Artículo para elegir en qué orden coincidir. Estas configuraciones permiten que ExFlow realice una coincidencia más avanzada de artículos y líneas de orden según la prioridad y el tipo de coincidencia.

Utilice los botones "Mover Arriba" y "Mover Abajo" para mover los tipos de coincidencia hacia arriba o hacia abajo en la lista.
Cuanto más alto se coloque un tipo de coincidencia, mayor prioridad tendrá en el proceso de coincidencia.

Esta función también se puede realizar por proveedor en [***Configuración de Proveedor***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/vendor-setup#vendor-setup).


### Copiar Valores de Cabecera de Orden de Compra

Para los clientes que interpretan y coinciden órdenes a nivel de cabecera, algunos valores en la orden ahora se pueden copiar desde la cabecera de la Orden a la cabecera de la Factura.<br/>

Comience activando "Usar Valores de Cabecera de Orden en Factura" en la Configuración de ExFlow.<br/>

Vaya a: ***Configuración de ExFlow – Coincidencia de Órdenes --> Copiar Valores de Cabecera a Factura/Nota de Crédito***

Elija los campos a copiar en “Configuración de Valores de Cabecera de Orden en Factura”<br/>

Vaya a: ***Configuración de ExFlow – Relacionado --> Avanzado --> Configuración de Valores de Cabecera de Orden en Factura***

![Copiar Valores de Cabecera de Orden – Configuración](@site/static/img/media/po-header-value-on-invoice-setup-001.png)

Para la localización de EE. UU. y CA, también se pueden copiar el Responsable de Impuestos y el Área de Impuestos desde la Orden de Compra a la Factura de Compra.

![Copiar Valores de Cabecera de Orden – Configuración EE. UU. - CA](@site/static/img/media/po-header-value-on-invoice-setup-002-ca-us.png)

Usar Valores de Cabecera de Orden en Factura se puede seleccionar por Proveedor desde la Configuración de Proveedor de ExFlow.<br/>

Vaya a: ***Configuración de Proveedor de ExFlow --> Tarjeta de Configuración de Proveedor de ExFlow*** --> Presione “Mostrar más” en la pestaña rápida de Coincidencia de Órdenes.

Los campos a copiar siempre usarán la configuración de la Configuración de ExFlow.



## ExFlow Web

### Líneas coincidentes de órdenes de compra con diferencias en el costo unitario en ExFlow Web

Si se crea un documento en el Diario de Importación, con una variación en el precio unitario entre la orden de compra y la factura interpretada, los usuarios pueden desmarcar la casilla de verificación ''Probar Costo Unitario'' en las Líneas de Importación y crear el documento como de costumbre. 

Más adelante, en el Estado de Aprobación, los usuarios pueden personalizar la página e ingresar la columna ''Costo Unitario Desajustado'' en las Líneas de Documento para ver si la factura específica tiene una diferencia en el costo unitario entre la orden de compra y la línea de factura. 

![Verificación de Razón](@site/static/img/media/approval-status-unit-cost-missmatched-001.png) 

Cuando los Usuarios de ExFlow reciben esta factura coincidente con órdenes de compra para su aprobación en ExFlow Web, también pueden ser informados sobre la diferencia, a nivel de línea a través de la columna web ''Verificación de Razón''. 

Para agregar esta columna a ExFlow Web, simplemente diríjase a la Configuración de ExFlow y haga clic en ''[***Editar Columnas Web***](https://docs.signupsoftware.com/business-central/docs/user-manual/technical/exflow-web#edit-web-columns-in-business-central)'' para agregar la columna web Verificación de Razón. 

![Verificación de Razón](@site/static/img/media/exflow-web-reason-check-002.png)

Esto facilitaría al aprobador entender dónde está la variación y luego manejar el documento en ExFlow web.

![Verificación de Razón](@site/static/img/media/exflow-web-reason-check-001.png)