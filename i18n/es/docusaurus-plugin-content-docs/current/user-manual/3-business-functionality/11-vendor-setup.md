---
title: Configuración de Proveedores
sidebar_position: 11
hide_title: true
custom_edit_url: null
---
## Configuración de Proveedores

Ir a: ***Configuración de Proveedores de ExFlow***

Agregue configuraciones específicas de proveedores priorizadas utilizando la Configuración de Proveedores de ExFlow. La Configuración de Proveedores de ExFlow se puede acceder buscando, desde la tarjeta de Proveedor estándar, Configuración de ExFlow y Diario de Importación.

Simplemente edite la lista de Configuración de Proveedores de ExFlow o haga clic en ‘‘Nuevo‘‘ para abrir la Tarjeta de Configuración de Proveedor específica para agregar/cambiar configuraciones.

Las configuraciones predeterminadas se muestran en la lista de Configuración de Proveedores de ExFlow. Utilice Personalizar para modificar la lista con más campos, si es necesario.

![Configuración de Proveedores de ExFlow](@site/static/img/media/Vendor-setup-001.png)

| Menú de Configuración de Proveedores|  |
|:-|:-|
|**Nuevo**	|Agregar una nueva Configuración de Proveedor
|**Editar Lista**	|Editar la lista de Configuración de Proveedores
|**Eliminar**	|Eliminar una Configuración de Proveedor actual
|**Editar**	|Editar la Tarjeta de Configuración de Proveedor actual
|**Ver**	|Abrir la Tarjeta de Configuración de Proveedor actual
|*Más opciones --> Relacionado*	|
|**Relacionado --> Tipos de Línea de Recepción Automática**	|Editar o ver Tipos de Línea que deben ser recibidos automáticamente para un proveedor específico.<br/><br/> Lea más sobre esto en la sección [***Emparejar Factura con Líneas de Recepción, Orden o ambas Recepción y Orden***](https://docs.signupsoftware.com/business-central/docs/user-manual/approval-workflow/purchase-order-matching-process#match-invoice-with-receipt--order--or-both-receipt-and-order-lines)
|**Relacionado --> Prioridad de Coincidencia de Número de Artículo**	|Determinar el orden en el que el sistema intenta emparejar facturas importadas con artículos y líneas de orden. <br/><br/> Lea más sobre esto en la sección [***Prioridad de Coincidencia de Número de Artículo***](https://docs.signupsoftware.com/business-central/docs/user-manual/approval-workflow/purchase-order-matching-process#item-no-matching-priority)
|**Relacionado --> Configuración de ExFlow**	|Abre [***Configuración de ExFlow***](https://docs.signupsoftware.com/business-central/docs/user-manual/technical/exflow-setup)
|**Relacionado --> Registro de Auditoría --> Registro de Auditoría**	|Abre la Vista General del Registro de Auditoría. <br/><br/> Lea más sobre esto en la sección [***Registro de Auditoría***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/audit-log#audit-log)

<br/> 

### Secciones de la Tarjeta de Configuración de Proveedores

Abra la tarjeta de Configuración de Proveedores de ExFlow para ver/editar configuraciones relacionadas con ExFlow por proveedor.

Haga clic en la sección o ''Mostrar más'' para mostrar todas las configuraciones.  


![Configuración de Proveedores de ExFlow](@site/static/img/media/vendor-setup-card-sections-001.png)


### General

La opción ''Desde Configuración de ExFlow'' está configurada por defecto en la mayoría de las configuraciones, lo que significa que ExFlow tomará la configuración predeterminada (de [***Configuración de ExFlow***](https://docs.signupsoftware.com/business-central/docs/user-manual/technical/exflow-setup#exflow-setup)) si no se selecciona otra configuración en la Tarjeta de Configuración de Proveedor para el proveedor específico.

![Configuración de Proveedores de ExFlow](@site/static/img/media/Vendor-setup-card-002.png)

|General|  |
|:-|:-|
|**Número de Proveedor**	|Especifica el Número de Proveedor
|**Nombre del Proveedor**	|Especifica el Nombre del Proveedor
|**Regla de Aprobación**	|Especifica la regla de aprobación predeterminada que se aplicará para un determinado proveedor
|**Cuenta Predefinida**	|La Cuenta Predefinida de ExFlow se puede usar para sugerir solo una cuenta G/L para las Facturas/Notas de Crédito de este Proveedor. Este campo no se puede usar junto con el Código de Compra de ExFlow.<br/> Si "Cuenta Predefinida de ExFlow" y "Código de Compra de ExFlow" están vacíos, se puede usar la "Cuenta Predefinida" de la Configuración de ExFlow en su lugar.
|**Código de Compra de ExFlow**	|El Código de Compra de ExFlow se usa cuando una sola cuenta G/L no es suficiente. Este campo no se puede usar junto con la Cuenta Predefinida de ExFlow. Si "Cuenta Predefinida de ExFlow" y "Código de Compra de ExFlow" están vacíos, se puede usar el "Código de Compra de ExFlow" de la Configuración de ExFlow en su lugar.<br/><br/> Lea más sobre esto en la sección [***Códigos de Compra***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/purchase-codes#purchase-codes)
|**Verificar Cambios Hechos Automáticamente**| 	Si un documento está aprobado, la verificación de cambios se ejecutará automáticamente. Si no hay cambios en el documento, el estado será Listo para Publicar.
|**Permitir Facturas Duplicadas**|Cuando se reciben facturas con el mismo número de factura de un proveedor. Por ejemplo, seguro y autoridad fiscal. Esta casilla se puede usar para eximir el control del número de factura de este proveedor. Ahora es posible publicar más de una factura para este proveedor con el mismo Número de Documento del Proveedor.
|**Proponer Línea de IVA**	|Si un proveedor específico tiene líneas de IVA que deben incluirse en el flujo de aprobación, esta configuración se puede establecer en Sí a nivel de proveedor. De lo contrario, la configuración general de la Configuración de ExFlow se usa por defecto.
|**Proveedor de Factoring**	|Si el Proveedor se usa solo para factoring, hay una casilla de verificación que impide crear Facturas/Notas de Crédito en este Proveedor y solo se puede usar como Número de Proveedor de Pago a través del Proveedor de Compra. <br/><br/>  Marque la casilla Proveedor de Factoring en el "Número de Proveedor de Pago" y agregue este Número de Proveedor en la Tarjeta del "Proveedor de Compra". <br/> <br/> Si un documento se interpreta en un Proveedor de Factoring, el Diario de Importación de ExFlow dará un mensaje de acción: "¡Esta factura está marcada como Factoring y, por lo tanto, no se permite crearla!".
|**Validación de Pago** 	|Especifica si el proceso de validación de pago se aplicará durante el proceso de importación e interpretación de datos. <br/><br/> Lea más sobre esto en la sección [***Configuración de Validación de Pago***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/payment-validation-and-payment-suggestion)
|**Sugerir Cuenta Bancaria del Beneficiario** 	|Especifica si la Sugerencia de Cuenta Bancaria del Beneficiario está activada. <br/><br/> Lea más sobre esto en la sección [***Sugerir Cuenta Bancaria del Beneficiario***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/payment-validation-and-payment-suggestion#setup-payment-validation--suggest-recipient-bank-account)
|**Mover Diferimiento Adelante** 	|Cuando la fecha de publicación en el Calendario de Diferimiento está antes de la fecha de publicación permitida para el usuario, ese período se publicará en la primera fecha de publicación permitida en la Configuración del Libro Mayor o Configuración del Usuario. ExFlow solo moverá los diferimientos hacia adelante para períodos cerrados. <br/><br/> Lea más sobre esto en la sección [***Mover Diferimiento Adelante***](https://docs.signupsoftware.com/business-central/docs/user-manual/approval-workflow/exflow-import-journals#move-deferral-forward)
|**Documentos Confidenciales**|Especifica si los documentos deben manejarse como Documentos Confidenciales.

<br/>

### Verificaciones de Creación de Documentos

|Verificaciones de Creación de Documentos|  |
|:-|:-|
|**Crear Documentos Automáticamente**| Habilite esta casilla si los documentos interpretados deben crearse automáticamente desde el Diario de Importación de ExFlow para un proveedor específico. Si la casilla está marcada en la tarjeta del proveedor, todos los documentos interpretados sin errores o mensajes de advertencia se crearán automáticamente y se enviarán para aprobación. <br/><br/>Esta función se puede usar sin ninguna configuración en el Diario de Importación de ExFlow. Sin embargo, es posible Personalizar la página de lista de Diarios de Importación de ExFlow y agregar la columna "Crear Documentos Automáticamente" allí, para tener un diario dedicado para crear documentos automáticamente. <br/><br/>Lea más sobre esto en la sección [***Importar Documentos por Lotes desde la Interpretación***](https://docs.signupsoftware.com/business-central/docs/user-manual/approval-workflow/exflow-import-journals#batch-import-documents-from-interpretation) y en la sección [***Procesamiento en Segundo Plano***](https://docs.signupsoftware.com/business-central/docs/user-manual/approval-workflow/exflow-approval-status#background-processing)
|**Verificar Referencias** 	|Cuando está habilitado, se requiere que el documento contenga una Referencia de ExFlow.
|**Coincidir Código de Moneda del Proveedor**	|Especifica si el código de moneda en el documento importado debe coincidir con el código de moneda en la tarjeta del proveedor. <br/><br/> Lea más sobre esto en la sección [***Coincidir Código de Moneda del Proveedor***](https://docs.signupsoftware.com/business-central/docs/user-manual/approval-workflow/exflow-import-journals#match-vendors-currency)
|**Bloquear en Diario de Importación**| 	Especifica si los documentos deben bloquearse para su creación
|**Excluir cuando el Número de Documento del Proveedor comience con**| Especifica la exclusión del documento importado del bloqueo de creación, si el Número de Documento del Proveedor comienza con… Esta configuración se mostrará al activar ‘’Bloquear en Diario de Importación’’.
|**Verificar Dimensiones**	|Especifica si las configuraciones de dimensión estándar en Business Central deben verificarse cuando se crea la factura
|**Asignación Automática de Diferencia de IVA para Creación** 	|Especifica si la asignación automática de Diferencia de IVA debe hacerse si la diferencia de IVA en las líneas y el encabezado está dentro de la Diferencia de IVA Máxima Permitida
|**Probar Montos** 	|Especifica si los montos Bruto/Neto/IVA en el documento deben verificarse para variaciones (diferencia entre la suma de las líneas del documento y el monto correspondiente en el encabezado del documento) antes de que se cree la factura.

<br/>

### Verificaciones de Publicación de Documentos

|Verificaciones de Publicación de Documentos|  |
|:-|:-|
|**Publicar Documentos Automáticamente**| Habilite "Publicar Documentos Automáticamente" para publicar automáticamente documentos para un Proveedor específico en el Estado de Aprobación cuando el documento esté Listo para Publicar. ExFlow solo intentará publicar una vez. Si existen mensajes de error durante la publicación, el documento permanecerá sin publicar en el Estado de Aprobación junto con un mensaje de error. Corrija el error y publique manualmente.
|**Bloquear antes de Publicar**| Especifica si los documentos deben bloquearse para su publicación.

<br/>

### Emparejamiento de Orden de Compra

|Emparejamiento de Orden de Compra|  |
|:-|:-|
|**Emparejar Documentos Con**|  Especifica si ExFlow debe emparejar y recuperar líneas de Órdenes de Compra o de Recibos Publicados, o de ambas Órdenes y Recibos. <br/><br/> Lea más sobre esto en la sección [***Emparejar Factura con Líneas de Recepción, Orden o ambas Recepción y Orden***](https://docs.signupsoftware.com/business-central/docs/user-manual/approval-workflow/purchase-order-matching-process#match-invoice-with-receipt--order--or-both-receipt-and-order-lines)
|**Recibir Orden de Compra Automáticamente**|  	Especifica si las Líneas de Orden de Compra de cada tipo de línea deben recibirse automáticamente cuando la factura emparejada esté lista para publicar. Esta opción solo es aplicable si la configuración "Emparejar Documentos Con" está configurada como "Orden" o "Orden y Recepción".
|**Configuración Específica de Costo Unitario de Diferencia de Línea**| Los campos ''En LCY’’ y ‘’Porcentaje %’’ serán visibles al habilitar esta configuración.
|**Configuración Máxima de Cargos Misceláneos Específica**| Habilitar para activar la función de Cargos Misceláneos Máximos.
|**Cargos Misceláneos Máximos (LCY)**| Ingrese los cargos misceláneos máximos en LCY.
|**Código de Compra de Línea de Diferencia**| Seleccione el Código de Compra de ExFlow que se seleccionará para la línea de diferencia.
|**Configuración de Diferencia Específica**|Habilitar para activar la Configuración de Diferencia Específica.
|**Número de Recibo Obligatorio**|Activar si el Número de Recibo es Obligatorio
|**No Emparejar Órdenes**|Activar si no debe ocurrir emparejamiento de órdenes para este proveedor.
|**Aprobación Solo para Variaciones**| Seleccionar si la aprobación debe aplicarse solo para variaciones con opción: Configuración de ExFlow, Sí o No.
|**Asignación Automática de Cargos de Artículo**|	Especifica qué tipo de asignación de cargos de artículo debe usarse al publicar facturas. Se puede hacer de manera equitativa, por monto, por peso o por volumen automáticamente. Ninguno = no se realiza asignación automática. <br/><br/> Lea más sobre esto en la sección [***Asignación de Cargos de Artículo***](https://docs.signupsoftware.com/business-central/docs/user-manual/approval-workflow/exflow-import-journals#item-charge-assignment)
|**Guardar Líneas Emparejadas en Mapeo OCR**|Esta opción se puede usar para guardar automáticamente las líneas de factura emparejadas manualmente desde "Vista de Emparejamiento" según el proveedor, Número de Artículo interpretado. Estas líneas se guardarán en la tabla de Mapeo de Importación OCR de ExFlow y se pueden reutilizar para sugerir emparejamiento para futuras facturas de OC con los mismos criterios.
|**Emparejamiento de Múltiples Líneas**|  	Esta configuración permite a ExFlow emparejar una línea de factura con múltiples líneas de orden o líneas de recibo. Si la cantidad de la línea de la factura es mayor que la cantidad de la línea de la orden, ExFlow dividirá la línea de la factura y procederá a emparejar parcialmente con otras líneas de orden o líneas de recibo disponibles.
|**Verificar Líneas de Factura Divididas**|  	Si “Emparejamiento de Múltiples Líneas” es verdadero, ExFlow dará mensajes de acción para cada línea que se haya dividido, lo que le da al usuario una opción para confirmar manualmente el emparejamiento sugerido antes de crear el documento. Configurar esta opción en falso significa que no se mostrará ningún mensaje de acción para las líneas divididas emparejadas.
|**Usar Valores de Encabezado de OC en Factura**|  	Activar campos para transferir desde la Orden de Compra a la Factura (O Orden de Compra de Devolución a Nota de Crédito) en el Diario de Importación al usar emparejamiento de orden a nivel de encabezado. Los valores seleccionados se pueden encontrar y actualizar en Relacionado --> Avanzado --> Configuración de valores de encabezado de OC en Factura. <br/><br/> Lea más sobre esto en la sección [***Copiar Valores de Encabezado de Orden de Compra***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/copy-po-header#copy-purchase-order-header-values)
|**Aprobar Facturas Automáticamente**|  	Especifica si la factura debe ser aprobada automáticamente si la orden relacionada está aprobada. <br/><br/> Lea más sobre esto en la sección [***Aprobar Facturas Automáticamente***](https://docs.signupsoftware.com/business-central/docs/user-manual/approval-workflow/purchase-order-matching-process#auto-approve-purchase-order-matching-invoices)
|**Monto Máximo de Factura para Aprobación del Sistema (LCY)**| Especifica el monto máximo de factura permitido para aprobaciones automáticas. 0 = deshabilitado
|**Usuario para Aprobación Automática**|  	Especifica el usuario de ExFlow que debe usarse para facturas aprobadas automáticamente. Si esta configuración está vacía, se usará el id del usuario de BC que ha iniciado sesión
|**Verificar Costo Unitario Directo**| Especifica si ExFlow debe verificar el Costo Unitario en la línea de la factura al emparejar facturas con órdenes de compra. La factura importada necesita ser interpretada en línea para que esto funcione.

<br/>

### Importación OCR

|Importación OCR|  |
|:-|:-|
|**Establecer Fecha de Vencimiento a (OCR)**|     Especifica cómo se debe establecer la fecha de vencimiento predeterminada al importar una factura
|**Ignorar Código de Moneda Importado**|     Especifica que ExFlow siempre debe borrar el código de moneda importado, es decir, no se usa ninguna moneda al importar facturas
|**Ignorar Líneas OCR**|  Especifica que ExFlow siempre debe ignorar las líneas de factura importadas, es decir, solo se usa la información del encabezado de la factura
|**Configuración Específica de Código Misceláneo**| Habilitar para utilizar códigos de compra misceláneos.
|**Códigos de Compra Misceláneos**|  Especifica el código de compra predeterminado al usar el mapeo de códigos misceláneos. Haga clic en los tres puntos para abrir la Lista de Configuración de Códigos de Compra.
|**Asignación Automática de Cantidad**|     Especifica si la cantidad debe convertirse a 1 si la cantidad importada es 0.
|**Ignorar Sincronización de Datos Maestros**| Es posible ignorar la Sincronización de Datos Maestros a nivel de proveedor. Simplemente habilite la casilla ''Ignorar Sincronización de Datos Maestros'' en el proveedor elegido en su Tarjeta de Configuración de Proveedor para asegurarse de que sus datos maestros no se envíen a la Captura de Datos de ExFlow.
|**Prioridad de Coincidencia de Número de Artículo** |Determina el orden en el que el sistema intenta emparejar facturas importadas con artículos y líneas de orden. Las opciones actuales son: ''Desde Configuración de ExFlow'', ''Sin Coincidencia'' y ''Desde Configuración de Proveedor''. <br/><br/> Lea más sobre esto en la sección [***Prioridad de Coincidencia de Número de Artículo***](https://docs.signupsoftware.com/business-central/docs/user-manual/approval-workflow/purchase-order-matching-process#item-no-matching-priority)

<br/>

### Aprobación

|Aprobación|  |
|:-|:-|
|**Aprobar Líneas de IVA**|     Especifica si las líneas de IVA deben incluirse en el flujo de aprobación. Si se usa un Código de Compra de ExFlow en el encabezado, esta configuración será ignorada. <br/><br/> Lea más sobre esto en la sección [***Aprobar Líneas de IVA.***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/approve-vat-lines)

<br/>

### Sugerencia de Codificación Automática

|Sugerencia de Codificación Automática|  |
|:-|:-|
|**Sugerir Codificación Automática para Documento Importado**|Especifica cómo se usará la sugerencia de codificación automática para el proveedor.
|**Calcular Sugerencias Automáticas Desde la Fecha**|  Especifica la fecha de inicio del documento que se usará en las sugerencias de codificación automática para este proveedor.
|**Sugerir Monto de Codificación Automática desde ID de Conjunto de Codificación**| Especifica si el monto se sugerirá automáticamente en la línea del documento según el porcentaje de uso en el ID del Conjunto de Codificación, para este proveedor. <br/><br/> Lea más sobre esto en la sección [***Configuración de Sugerencia de Codificación Automática***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/auto-coding-suggestion-setup#auto-coding-suggestion-setup)