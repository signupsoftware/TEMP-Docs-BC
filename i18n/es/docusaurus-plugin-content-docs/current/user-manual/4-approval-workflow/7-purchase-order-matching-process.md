---
title: Proceso de Emparejamiento de Órdenes de Compra
sidebar_position: 7
hide_title: true
custom_edit_url: null
---
## Proceso de Emparejamiento de Órdenes de Compra

### Importar Factura de Compra con Emparejamiento de Órdenes

La importación de facturas se realiza desde "Diarios de Importación de ExFlow". Use la función "Importar Documentos por Lote" para importar facturas para todos los diarios o ingrese/edite un Diario de Importación para importar documentos en un diario específico.

### Emparejamiento de Órdenes a Nivel de Encabezado

Si se ha interpretado un número de Orden de Compra en la factura, será visible en la columna "Núm. de Orden (Importación)". ExFlow buscará automáticamente en la lista de Órdenes de Compra disponibles en Business Central basándose en el proveedor y el número de Orden de Compra importado.

ExFlow puede emparejar tanto con el número de Orden de Compra interno como con el número de Orden de Compra del proveedor, pero este último requiere que esté configurado en la propia Orden de Compra.

La columna "Núm. de Orden" mostrará la Orden de Compra emparejada si se encuentra.

![Diario de Importación de ExFlow - Núm. de Orden](@site/static/img/media/image292.png)

Este procedimiento también se puede activar manualmente si la factura no tiene un número de Orden de Compra importado. Ingrese manualmente el número de Orden de Compra en la columna "Núm. de Orden".

Dependiendo de si ExFlow está configurado para emparejamiento de dos vías o de tres vías, los siguientes pasos del proceso serán ligeramente diferentes.

#### Emparejamiento de Tres Vías

Significa que ExFlow emparejará la factura con la Orden de Compra y los Recibos de Compra Publicados asociados.

Esto se hace automáticamente por defecto, pero también se puede activar manualmente utilizando la función "Obtener Líneas de Recibo/Devolución de Envío/Orden".

![Diario de Importación de ExFlow - Obtener Líneas de Recibo/Devolución de Envío/Orden](@site/static/img/media/image293.png)

El emparejamiento de tres vías requiere que la Factura de Compra tenga Órdenes de Compra Publicadas asociadas. ExFlow buscará todas las líneas de Recibos Publicados disponibles y las agregará como Líneas de Factura.

![Diario de Importación de ExFlow - Líneas de Importación](@site/static/img/media/image294.png)

Esta función también puede ser útil cuando una factura debe emparejarse con múltiples Órdenes de Compra a Nivel de Encabezado.

Al seleccionar Líneas de Recibo en la página "Obtener Líneas de Recibo" hay una posibilidad de excluir las líneas que ya están completamente emparejadas con otra factura en el Diario de Importación o que aún no se han publicado en el Estado de Aprobación. Haga clic en "Excluir completamente emparejadas" para ocultar dichas líneas de recibo:

![Diario de Importación de ExFlow - Obtener Líneas de Recibo](@site/static/img/media/image295.png)

En la imagen a continuación, las líneas emparejadas están ocultas. Haga clic en "Mostrar Todo" para restablecer la página y ver todas las líneas de recibo nuevamente. Ambas acciones en "Obtener Líneas de Recibo" existen también para Notas de Crédito y Órdenes de Devolución de Compra.

![Diario de Importación de ExFlow - Obtener Líneas de Recibo - Lista de Recibos después de Excluir Completamente Emparejadas](@site/static/img/media/image296.png)

Es posible marcar la configuración "Desactivar Filtro de Moneda en Obtener Líneas de Recibo" en la sección de Emparejamiento de Órdenes de Compra en la Configuración de ExFlow para mejorar el rendimiento al usar Obtener Líneas de Recibo en el Diario de Importación. No se establecerá ningún filtro en el Código de Moneda al abrir la página de selección.

#### Emparejamiento de Dos Vías

Significa que ExFlow emparejará la factura directamente con la Orden de Compra.
Sin el requisito de tener Recibos de Compra Publicados asociados.

![Diario de Importación de ExFlow - Líneas de Importación](@site/static/img/media/image297.png)

Cualquier conflicto, discrepancia de costo o cantidad se mostrará en forma de un Mensaje de Acción y deberá corregirse antes de que la factura pueda crearse y enviarse para su aprobación.


### Emparejamiento de Órdenes a Nivel de Línea

Esto requiere que la factura haya sido interpretada a nivel de encabezado y línea en ExFlow Data Capture o cualquier otra solución OCR que se utilice.

El emparejamiento de órdenes a nivel de línea proporciona un resultado más preciso cuando se trata de identificar discrepancias. El emparejamiento a nivel de línea también ofrece mucha más configuración cuando se trata de establecer validaciones y umbrales permitidos.

Un requisito previo para obtener resultados precisos de emparejamiento de líneas es que sea posible extraer información esencial de las facturas del proveedor, para que ExFlow pueda entender con qué líneas de orden emparejar.

El número de artículo, la cantidad, el precio unitario y el monto total de la línea son algunos de los valores más importantes a extraer de la factura para ayudar a ExFlow a emparejar las líneas de factura correctas con las líneas de orden.

ExFlow también puede emparejar el número de artículo del proveedor, si está configurado en Business Central como "Núm. de Artículo del Proveedor" o "Referencias Cruzadas". También hay una opción para configurar mapeos específicos de Importación OCR de ExFlow, donde los valores importados pueden traducirse y mapearse a cuentas G/L específicas o artículos.

Tanto el emparejamiento de dos vías como el de tres vías son compatibles con el emparejamiento de órdenes a nivel de línea en ExFlow.

Una de las mayores ventajas del emparejamiento de líneas en comparación con el emparejamiento de encabezados es que ExFlow podrá ejecutar validaciones en cada línea de factura interpretada y decir exactamente qué necesita corregirse y qué tipo de problema es. Mientras que el emparejamiento de encabezados solo dará información de que hay un conflicto o una diferencia de precio entre el total de las líneas de orden y el monto total de la factura.

La configuración del emparejamiento de líneas se puede encontrar en la Configuración de ExFlow.

![Configuración de ExFlow - Emparejamiento de PO](@site/static/img/media/exflow-setup-po-matching-004.png)

El ejemplo a continuación describe cómo importar desde un diario creado para usar solo para "Facturas Emparejadas con Órdenes de Compra".

Seleccione el diario y ábralo haciendo clic en "Editar Diario" o haga clic en el Nombre.

![Diario de Importación de ExFlow](@site/static/img/media/image299.png)

**Paso 1 -- Importar documento**<br/>
Ir a: ***Inicio \--\> Importar Documentos\...***<br/>
Cuando se complete la importación, se creará una nueva línea.

**Paso 2 -- Verificar y manejar "Mensajes de Acción"** (**A** en la imagen a continuación).<br/>
Mensajes de acción comunes y soluciones:

- **¡Hay líneas emparejadas con la orden pero falta el recibo!**<br/>
    La entrega no ha sido registrada. Vaya a la Orden de Compra y registre -- Recibir.<br/>
    Ejecute verificar después de recibir la entrega y ExFlow emparejará la factura con la entrega registrada.<br/>
    ***Inicio \--\> Verificar Documento***
    (**B** en la imagen a continuación)
    ![Diario de Importación de ExFlow](@site/static/img/media/image300.png)

- **El monto (XX,XX) no es igual al total de las líneas (XX,XX)**<br/>
    Cambie los precios y las líneas para que coincidan con la factura. Use "Detalles de Línea" en FactBox para totales y diferencias. (**E** en la imagen a continuación).

- **Si la factura incluye más de una orden**<br/>
Use "Obtener Recibo/Devolución de Envío".
***Acciones \--\> Orden \--\> Obtener Recibo/Devolución de Envío/Líneas de Orden*** (**C** en la imagen a continuación).<br/>
![Diario de Importación de ExFlow](@site/static/img/media/image301.png)

- **Ver línea para mensaje de acción específico - Diferencia de línea entre el costo unitario de la factura y la orden!**<br/>
    Corrija el Costo Unitario Directo Excl. IVA o corrija el precio de la orden para emparejar la orden con la factura.
    O desmarque "Probar Costo Unitario" en las Líneas de Importación y envíe la factura para su aprobación. (**D** en la imagen a continuación).<br/><br/>
    ![Diario de Importación de ExFlow](@site/static/img/media/image302.png)

**Paso 3 -- Verificar Todos los Documentos...**<br/>
Ir a: ***Inicio \--\> Verificar Todos los Documentos***<br/>
Cuando se hayan manejado todos los mensajes de acción, "Verificar Documento" para ver si el mensaje de acción está vacío y, por lo tanto, listo para ser creado.

**Paso 4 -- Crear Factura/Nota de Crédito**<br/>
Ir a: ***Crear \--\> "Crear Facturas/Notas de Crédito por Lote"\... / "Crear Factura/Nota de Crédito"***<br/>
Cree la factura o la nota de crédito haciendo clic en "Crear Factura/Nota de Crédito".

### Emparejamiento de Órdenes - Envío Directo

ExFlow admite órdenes de envío directo. Para obtener asistencia con la función estándar de envío directo, comuníquese con un socio de confianza o con el soporte de Microsoft.

La configuración más común para el envío directo probablemente sea trabajar con facturas emparejadas con órdenes utilizando la configuración: *"Emparejar Documentos Con: Orden"* y *"Recibir Líneas de Orden de Compra Automáticamente"*. 

El siguiente ejemplo muestra un ejemplo de cómo trabajar con envíos directos junto con el emparejamiento de órdenes de ExFlow:

Cree una Orden de Venta, marque las líneas de venta para Envío Directo marcando la casilla de verificación "Envío Directo". Luego libere la Orden de Venta.

![Orden de Venta](@site/static/img/media/image303.png)

Cree una Orden de Compra. Elija el Cliente ''Enviar a'' (junto con otra información necesaria), en este ejemplo se selecciona el cliente ''School of Fine Art''.

Desde el encabezado use Acciones \--\> Funciones \--\> Envío Directo \--\> Obtener Orden de Venta. Luego libere la Orden de Compra.

![Orden de Compra](@site/static/img/media/image304.png)

Importe una factura al Diario de Importación de ExFlow desde el proveedor (Dustin) referente al envío directo. Use Acciones \--\> Orden \--\> Obtener Recibo/Devolución de Envío/Líneas de Orden para recuperar las líneas.

![Diario de Importación de ExFlow](@site/static/img/media/image305.png)

Cree y envíe la factura para su aprobación, luego apruebe y verifique la factura. Cuando se haya ejecutado "Verificar Cambios" en el Estado de Aprobación, los artículos en la Orden de Compra se recibirán automáticamente y los artículos en la Orden de Venta se enviarán automáticamente.

Regrese a la Orden de Venta para facturar la orden de venta. Si esto no se realiza antes de registrar la factura desde el Estado de Aprobación de ExFlow, aparecerá el siguiente mensaje:

![Mensaje de error en el Estado de Aprobación](@site/static/img/media/image306.png)

Cuando la Orden de Venta esté facturada, será posible registrar la factura en el Estado de Aprobación como de costumbre.

### Emparejar Factura con Líneas de Recepción, Orden o ambas Recepción y Orden
Ir a: ***Configuración \--\> Configuración de ExFlow \--\> Emparejamiento de PO \--\> Emparejar Documentos Con***

La configuración "**Emparejar Documentos Con**" especifica si ExFlow debe emparejar las Facturas de Compra importadas con Órdenes de Compra, Recibos de Compra o ambas líneas de Recepción y Orden.

![Configuración de ExFlow - Emparejamiento de PO - Emparejar Documentos Con](@site/static/img/media/exflow-setup-po-matching-005.png)

**Recepción:** ExFlow encontrará automáticamente la Orden de Compra basada en el número de Orden importado. ExFlow recuperará automáticamente los Recibos Publicados disponibles asociados con la Orden de Compra si la configuración "**Recuperar Líneas Automáticamente**" está habilitada.

**Orden:** Esto permite emparejar una Factura de Compra directamente con una Orden de Compra que carece de Recibos Publicados. <br/> El Recibo de Compra debe registrarse antes del registro final de la factura. Esto se puede hacer manualmente desde la Orden de Compra, o automáticamente activando la configuración "**Recibir Líneas de Orden de Compra Automáticamente**". <br/> ExFlow recuperará automáticamente las Líneas de Orden disponibles asociadas con la Orden de Compra si la configuración "**Recuperar Líneas Automáticamente**" está habilitada.

**Orden y Recepción:** Con esta configuración es posible emparejar una Factura de Compra con ambas líneas de Recepción y Orden publicadas. Esto significa que ExFlow recuperará recibos en una línea emparejada y líneas de orden aún no recibidas. Además, es posible permitir que ExFlow reciba automáticamente las líneas de orden habilitando "**Recibir Líneas de Orden de Compra Automáticamente**", si es necesario.

Al habilitar “Recibir Líneas de Orden de Compra Automáticamente” ExFlow recibirá todas las líneas que estén emparejadas con una Orden de Compra. Lo que ExFlow recibe se basa en los tipos de línea permitidos de "Configuración de Tipos de Línea de Recepción Automática" (la configuración se abre automáticamente después de configurar “Recibir Líneas de Orden de Compra Automáticamente” como VERDADERO).

Si se necesitan cambios, vaya a: ***Configuración de ExFlow --> Relacionado --> Avanzado --> Configuración de Tipos de Línea de Recepción Automática***

![Tipos de Línea de Recepción de ExFlow](@site/static/img/media/auto-receiving-line-types-001.png)

La misma función también se puede encontrar en la página "Configuración de Proveedor de ExFlow".

![Tarjeta de Configuración de Proveedor de ExFlow](@site/static/img/media/advanced-vendor-options-002.png)

### Aprobar Automáticamente Facturas de Emparejamiento de Órdenes de Compra

#### Configuración de ExFlow - Emparejamiento de PO

***Configuración \--\> Configuración de ExFlow \--\> Emparejamiento de PO \--\> Aprobar Facturas Automáticamente***

Para aprobar automáticamente las facturas emparejadas con órdenes hay tres opciones.

**Nunca:** Con esta configuración, la aprobación automática está desactivada. Todas las facturas emparejadas con órdenes de compra requieren aprobación manual.

**Si la diferencia está dentro de la tolerancia:** Si la factura importada coincide con una orden de compra sin discrepancias de cantidad o precio, se aprobará automáticamente. Esto también se aplica si hay discrepancias dentro del umbral permitido.

**Si la orden emparejada está aprobada:** Los mismos requisitos que la opción anterior, con la adición de que la Orden de Compra emparejada debe haber sido aprobada a través de ExFlow.

**Usuario para aprobación automática:** Especifique un Usuario de ExFlow que se utilizará como sello en la transacción e historial para las facturas que se hayan emparejado automáticamente con una Orden de Compra y aprobado. Al dejar esta configuración en blanco, se utilizará el usuario que creó la Factura de Compra desde el Diario de Importación de ExFlow.

![Configuración de ExFlow - Emparejamiento de PO - Aprobar Facturas Automáticamente](@site/static/img/media/exflow-setup-po-matching-006.png)

### Importar Documentos por Lote desde la Interpretación

Para importar documentos emparejados con órdenes en un Diario de Importación separado, agregue un nuevo Diario de Importación y use "Solo Documentos Emparejados con Órdenes de Compra".

![Diarios de Importación de ExFlow](@site/static/img/media/image309.png)

### Línea de Diferencia Automática

En el Diario de Importación de ExFlow, al emparejar una Orden de Compra, es posible detectar y crear una Línea de Diferencia a una Cuenta G/L, Artículo o Cargo (Artículo) automáticamente.

Agregue "Código de Compra de ExFlow" en el campo "Código de Compra de Línea de Diferencia" bajo Emparejamiento de PO en la Configuración de ExFlow.

![Configuración de ExFlow - Emparejamiento de PO](@site/static/img/media/exflow-setup-po-matching-007.png)

![Diario de Importación de ExFlow](@site/static/img/media/image311.png)

Las Líneas de Cargo y Diferencia Misceláneas pueden emparejarse con una Orden de Compra, si está dentro de la tolerancia. Si el campo "Núm. de Orden" está poblado y la línea es una coincidencia perfecta con la línea de la Orden de Compra, se emparejará. Si no es una coincidencia perfecta, cualquier discrepancia de emparejamiento (cantidad o precio) se reflejará como un Mensaje de Acción.

### Desactivar Automáticamente el Emparejamiento de PO para Cargos Misceláneos
Ir a ***Configuración de ExFlow --> Importación OCR --> Desactivar Automáticamente el Emparejamiento de PO para Cargos Misceláneos***

Al trabajar con cargos interpretados a nivel de línea, existe la posibilidad de mapear estos cargos hacia cualquier tipo de línea con el Mapeo de Importación OCR de ExFlow.

Encuentre la configuración "Desactivar Automáticamente el Emparejamiento de PO para Cargos Misceláneos" en la Configuración de ExFlow. Cuando esta configuración está habilitada, estos cargos recién mapeados no se emparejarán con la Orden de Compra. Esta configuración se puede usar en los casos en que el cargo de flete o servicio no se crea como una línea en la Orden de Compra.

Esta configuración solo se puede habilitar si ''Crear Mapeo de Línea OCR Automáticamente'' está configurado en ''Preguntar'' o ''Siempre''.

![Configuración de Importación OCR de ExFlow](@site/static/img/media/exflow-setup-ocr-import-001.png)

"Desactivar Automáticamente el Emparejamiento de PO para Cargos Misceláneos" también se puede encontrar en la lista de Configuración de Proveedor de ExFlow. Esta función está oculta por defecto, personalice para agregar esta configuración a la lista si es necesario.

![Configuración de Proveedor de ExFlow](@site/static/img/media/exflow-vendor-setup-automatically-disable-po-001.png)

### Retraso en el Emparejamiento de PO Fecha del Documento y Fecha de Vencimiento
Ir a ***Configuración de ExFlow --> Emparejamiento de PO --> Retraso en el Emparejamiento Fecha del Documento (Días) / Retraso en el Emparejamiento Fecha de Vencimiento (Días)***

Es posible permitir que ExFlow retrase el proceso de emparejamiento de órdenes de compra, con la fecha de factura importada y/o la fecha de vencimiento.

![Retraso en el Emparejamiento de PO](@site/static/img/media/exflow-setup-po-matching-delay-001.png)

Si una factura interpretada se importa al Diario de Importación, ExFlow retrasará el proceso de emparejamiento de compra según las configuraciones en la Configuración de ExFlow, y proporcionará un mensaje de acción en el Diario de Importación.

Tomemos un ejemplo: ''Retraso en el Emparejamiento Fecha del Documento'' está configurado en ''1D''. Entonces ExFlow esperará un día para obtener las líneas de recibo y emparejar la orden de compra con la factura en el Diario de Importación.

El mismo procedimiento para ''Retraso en el Emparejamiento Fecha de Vencimiento''. Si se establece ''-20D'' en este campo, entonces ExFlow obtendrá las líneas de recibo y emparejará 20 días antes de la fecha de vencimiento de la factura. Esta función tiene una mayor prioridad que la función anterior, con el propósito de nunca dejar que una factura venza.

También se mostrará un mensaje de acción para la línea de documento específica bajo el período de emparejamiento de orden de compra retrasado aplicado. Cuando sea el momento de proceder con el proceso de emparejamiento de órdenes de compra (según la fórmula de fecha en las configuraciones), el mensaje de acción desaparecerá y el documento estará listo para su creación.

![Retraso en el Emparejamiento de PO](@site/static/img/media/po-matching-delay-002.png)

### Prioridad de Emparejamiento de Número de Artículo

Ir a: **Prioridad de Emparejamiento de Número de Artículo** o a través de **Configuración de ExFlow --> Relacionado --> Avanzado --> Prioridad de Emparejamiento de Número de Artículo**

Esta función ayuda a determinar el orden en el que el sistema intenta emparejar las facturas importadas con los artículos y las líneas de orden.

Esto puede ser útil cuando, por ejemplo, el mismo número de artículo existe en la lista de artículos estándar como en el número de artículo del proveedor. O si se importan líneas de factura donde la mayoría son referencias de artículos del proveedor, considere dar mayor prioridad a "Referencia de Artículo". Desactive los tipos de emparejamiento que den coincidencias falsas positivas o que no se utilicen desmarcándolos.

![Prioridad de Emparejamiento de Número de Artículo](@site/static/img/media/exflow-setup-item-no-matching-prio-001.png)

| Prioridad de Emparejamiento de Número de Artículo |  |
|:-|:-|
| **Mapeo OCR**         |Emparejar Número de Artículo según lo especificado en *Mapeo de Importación OCR*
| **Cuenta G/L Predeterminada/Artículo Ficticio**  |Emparejar Número de Artículo según la *Cuenta Predefinida* (Configuración de ExFlow --> General) o *Artículo Ficticio para Mapeo de Línea OCR* (Configuración de ExFlow --> Importación OCR). Esto solo se hará si el Número de Artículo importado está en blanco. <br/><br/> Si no hay un número importado y el número de orden (importado) está en blanco, entonces tomará automáticamente la cuenta G/L ficticia. Si hay un número de orden (importado), entonces tomará el artículo ficticio.
| **Artículo**         |Emparejar Número de Artículo según el *Número de Artículo* real en Business Central
| **Artículo con Número de Proveedor**   |Emparejar Número de Artículo según lo agregado en Reabastecimiento--> Compra. Si se especifica un *Número de Proveedor* en la tarjeta del Artículo, junto con un *Número de Artículo del Proveedor* específico, entonces esto tendrá prioridad.
| **Proveedor de Artículo**         | Emparejar Número de Artículo según el *Número de Artículo del Proveedor* establecido en la Tarjeta del Artículo en Business Central
| **Referencia de Artículo**         |Emparejar Número de Artículo según la *Referencia del Proveedor* establecida en la Tarjeta del Artículo en Business Central
| **Orden de Compra**         |Emparejar Número de Artículo según las líneas de orden de compra donde el Número de Artículo del Proveedor en la Línea de Orden de Compra sea igual al número importado.
| **Primera Ejecución Número Original**  |ExFlow elimina caracteres no deseados en el Número de Artículo interpretado (todos los caracteres que no sean A...Z y 0..9) e intenta nuevamente.
| **Cuenta G/L**         |La primera verificación es ver si el número de orden interpretado tiene un valor. Si está en blanco, entonces ExFlow busca una Cuenta G/L con el número importado. Si se encuentra, ExFlow tomará esa cuenta G/L, de lo contrario, ExFlow tomará la Cuenta G/L Predefinida (si existe una cuenta bajo Configuración de ExFlow --> General). Si el número de orden importado no está en blanco, ExFlow proporcionará el Número de Artículo Ficticio (si existe alguno en Configuración de ExFlow --> Importación OCR) <br/><br/>La diferencia en esta opción (vs la opción anterior ''Cuenta G/L Predeterminada/Artículo Ficticio'') es que ExFlow verifica si existe una Cuenta G/L antes de proporcionar la Cuenta G/L Predefinida.

Configure una Prioridad de Emparejamiento de Número de Artículo para elegir en qué orden emparejar. Estas configuraciones permiten a ExFlow realizar un emparejamiento más avanzado de artículos y líneas de orden basado en la prioridad y el tipo de emparejamiento.

Use los botones "Mover Arriba" y "Mover Abajo" para mover los tipos de emparejamiento hacia arriba o hacia abajo en la lista.
Cuanto más alto se coloque un tipo de emparejamiento, mayor prioridad tendrá en el proceso de emparejamiento.

Esta función también se puede realizar por proveedor en [***Configuración de Proveedor***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/vendor-setup#vendor-setup).

## ExFlow Web

### Líneas de PO emparejadas con diferencias en el costo unitario en ExFlow Web

Si se crea un documento en el Diario de Importación, con una variación en el precio unitario entre la orden de compra y la factura interpretada, los usuarios pueden desmarcar la casilla de verificación ''Probar Costo Unitario'' en las Líneas de Importación y crear el documento como de costumbre.

Más adelante, en el Estado de Aprobación, los usuarios pueden personalizar la página e ingresar la columna ''Costo Unitario Desajustado'' en las Líneas del Documento para ver si la factura específica tiene una diferencia en el costo unitario entre la orden de compra y la línea de la factura.

![Verificación de Razón](@site/static/img/media/approval-status-unit-cost-missmatched-001.png) 

Cuando los Usuarios de ExFlow reciben esta factura emparejada con PO para su aprobación en ExFlow Web, también pueden ser informados sobre la diferencia, a nivel de línea a través de la columna web ''Verificación de Razón''.

Para agregar esta columna a ExFlow Web, simplemente diríjase a la Configuración de ExFlow y haga clic en ''[***Editar Columnas Web***](https://docs.signupsoftware.com/business-central/docs/user-manual/technical/exflow-web#edit-web-columns-in-business-central)'' para agregar la columna web Verificación de Razón.

![Verificación de Razón](@site/static/img/media/exflow-web-reason-check-002.png)

Esto facilitaría al aprobador entender dónde está la variación y luego manejar el documento en ExFlow web.

![Verificación de Razón](@site/static/img/media/exflow-web-reason-check-001.png)
