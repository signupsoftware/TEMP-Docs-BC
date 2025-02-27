---
title: Re-Facturación
sidebar_position: 21
hide_title: true
custom_edit_url: null
---
## Re-Facturación
La Re-Facturación es útil cuando se recibe una Factura de Compra que necesita ser facturada a un cliente.

Todos los tipos de líneas de compra pueden ser Re-Facturados al Cliente como tipo de línea Cuenta G/L. Debido a la configuración, el Artículo puede ser facturado al cliente con el mismo Número de Artículo.

Los valores de re-facturación se pueden agregar en Cotización de Compra, Orden, Factura y Nota de Crédito.

Si la Re-Facturación ya está activada, desactívela y actívela nuevamente para iniciar el Asistente para la configuración mínima requerida. Esto ayudará a configurar los ajustes necesarios en las Columnas Web. Tenga en cuenta que las líneas de reglas de codificación conectadas a las columnas de Re-Facturación deben ser creadas nuevamente.

Las siguientes Columnas de Re-Facturación se pueden activar en ExFlow Web:
* Número de Cliente de Re-Facturación
* Cantidad y Precio Unitario o Monto de Re-Facturación
* % de Recargo de Re-Facturación
* Código de Re-Facturación
* Descripción de Re-Facturación

Los Aprobadores pueden luego agregar, cambiar o aprobar el valor para la Factura de Venta al Cliente dependiendo del Permiso de Usuario de ExFlow.

### Configuración de Re-Facturación de ExFlow
Ir a: ***Configuración --> Configuración Manual de ExFlow --> Configuración de Re-Facturación de ExFlow***<br/>
Comience activando la Re-Facturación en la Configuración de Re-Facturación de ExFlow y siga el asistente para la configuración mínima requerida.

![Configuración de Re-Facturación](@site/static/img/media/re-invoicing-setup-001.png)

#### Configuración de Re-Facturación - General
| General | |
|:-|:-|
| **Activo:**				                                            | Especifica si la Re-Facturación está habilitada o deshabilitada. Al activar o cambiar la configuración, el Asistente de ExFlow ayudará con la configuración mínima requerida
| **Cuenta G/L de Venta Predefinida:**		                            | Cuenta G/L Predefinida para aplicar a las líneas de venta si no se usa el Código de Re-Facturación
| **Usar Campos de Monto:**			                                    | Agregar Cantidad y Precio Unitario de Re-Facturación o Monto de Re-Facturación para seleccionar columnas en ExFlow Web <br/><br/> **Cantidad y Precio Unitario**<br/>La cantidad comprada se agregará como cantidad re-facturada y el cálculo del % de recargo se realizará en el Precio Unitario de Re-Facturación <br/><br/> **Monto de Línea**<br/> La cantidad comprada se agregará como 1 y el cálculo del % de recargo se realizará en el Monto de Re-Facturación (total)
| **Artículo para Venta:**			                                        | Activar para crear Facturas de Venta a partir de Facturas de Compra con el mismo Número de Artículo. El Número de Entrada del Libro Mayor de Artículos de la Factura de Compra se aplicará a la línea de venta si es posible. Lea más en la sección [***Re-Facturación para Artículos***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/re-invoicing#re-invoicing-item-for-sale)
| **Siempre Crear Factura de Venta cuando Falte la Entrada de Artículo Aplicada:**  | Activar para siempre crear facturas de venta sin entrada de artículo aplicada, si falta. Solo se puede usar si el Artículo para Venta está activado.
| **PDF de Factura de Compra como adjunto:**	                            | Activar para agregar el PDF de la factura de compra como adjunto a todas las facturas de venta
| **Habilitar Descripción Personalizada:**		                            | Habilitar o deshabilitar la descripción personalizada. Lea más en la sección [***Habilitar Descripción Personalizada***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/re-invoicing#enable-customized-description) a continuación
| **Descripción Personalizada:**		                                    | Descripción personalizada actual de la línea de venta de re-facturación
| **% de Recargo:**			                                            | Especifica si se debe agregar un % de recargo al usar la funcionalidad de re-facturación. Si el Artículo para Venta está activado, no se agregará ningún % de recargo para las líneas de artículos. Habilitar esto abre opciones adicionales para predefinir Recargos. <br/>Lea más en la sección [***% de Recargo***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/re-invoicing#surcharge-) a continuación
| **Copiar Valor de Dimensión:**		                                        | Especifica las dimensiones que se copiarán de la factura de compra a la línea de factura de venta al usar la funcionalidad de re-facturación. Lea más en la sección [***Copiar Valores de Dimensión***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/re-invoicing#copy-dimension-values) a continuación
| **Priorizar Dimensión de la Compra:**	                            | Priorizar la dimensión de la línea de compra si la misma dimensión existe en la línea de venta
| **Priorizar al dividir la línea en la web:**	                    | Al dividir la línea en ExFlow Web, el documento necesita ser guardado para actualizar los montos. Si no, esta configuración ayudará a priorizar el recálculo desde el monto o el % de recargo al aprobar


<br/>

#### Configuración de Re-Facturación - Procesamiento en Segundo Plano
Para activar las entradas de la cola de trabajos y crear automáticamente facturas de venta, se necesita la siguiente configuración. Tenga en cuenta que este trabajo solo creará facturas de venta.

![Procesamiento en Segundo Plano de Re-Facturación](@site/static/img/media/re-invoicing-setup-002.png)

| Procesamiento en Segundo Plano | |
|:-|:-|
| **Procesamiento en Segundo Plano:**	    | Activar para agregar Entrada de Cola de Trabajos para crear facturas de venta a partir de entradas de re-facturación. Seleccione la frecuencia y active
| **Tipo de Creación de Factura:**	    | Seleccione para crear un documento de factura de venta por línea o una factura por cliente al usar el Procesamiento en Segundo Plano
| **Fecha de Tipo de Cambio Basada en:**	| Seleccione la fecha de tipo de cambio basada en la fecha de publicación de ventas o la fecha de compra al usar el Procesamiento en Segundo Plano


<br/>

#### Habilitar Descripción Personalizada
Ir a: ***Configuración de Re-Facturación de ExFlow --> Acciones --> Descripción Personalizada***<br/>
Al activar la Descripción Personalizada, es posible copiar información de cualquier campo en la línea del documento de compra. Y desde el encabezado del documento de compra se pueden usar el Número de Factura/Nota de Crédito del Proveedor y el Nombre del Proveedor de Compra.

Si no está activado, la descripción se puede agregar manualmente. Si no hay descripción de Re-Facturación, la descripción del documento de venta se agregará como Estándar de Business Central.

| Campos de Línea de Factura de Compra | |
|:-|:-|
| **Nombre del Campo:**	| Seleccione campos de línea de compra para copiar valores
| **Orden:**		| Seleccione el orden en el que los valores deben presentarse en la línea de venta. El valor más bajo se agregará primero
<br/>

| Campos de Encabezado de Factura de Compra | |
|:-|:-|
| **Número de Factura del Proveedor:** 		| Seleccione el Número de Factura del Proveedor y actualice el orden si es necesario arriba
| **Nombre del Proveedor de Compra:**	    | Seleccione el Nombre del Proveedor de Compra y actualice el orden si es necesario arriba
| **Texto Libre:**		        | “Seleccionar de la lista completa”. Agregar código y descripción. Es la descripción la que se agregará a la línea de venta. <br/>Tenga en cuenta que esto se puede traducir y usar con el código de idioma de la tarjeta del cliente. Solo se puede agregar un Texto Libre a la línea de venta<br/>![Seleccionar Textos Libres de Re-Facturación](@site/static/img/media/select-re-inv-free-texts-001.png)
| **Separador de Texto:**		    | Esto se usa para separar campos de texto. En este ejemplo hemos usado “espacio – espacio”

![Descripción Personalizada de ExFlow](@site/static/img/media/re-invoicing-field-selection-001.png)
<br/>

#### % de Recargo
Ir a: ***Configuración de Re-Facturación de ExFlow --> Acciones --> Editar % de Recargo***<br/>
El % de Recargo es útil para agregar automáticamente recargos a las líneas de re-facturación.

No habrá % de Recargo automáticamente si se selecciona Artículo para Venta. Entonces el precio unitario será manejado por el estándar de Business Central. Siempre puede agregar recargos o precios unitarios manualmente.

El cálculo del % de Recargo se maneja de manera diferente dependiendo del campo Usar Monto en la Configuración de Re-Facturación:
* **Monto de Línea:** <br/> 
Al usar Monto de Línea, el cálculo del % de Recargo se realizará desde el monto total de la línea de compra al monto de la línea de Re-Facturación.<br/>
Cantidad de Compra 2, Costo Unitario Directo 1 000,00, total de **2 000,00** <br/>
Cantidad de Re-Facturación 1, Precio Unitario 6 000,00 total de **6 000,00**<br/>
**El % de Recargo entonces mostrará como 200%**<br/>
![Líneas del Diario de Importación de ExFlow](@site/static/img/media/import-journal-lines-003-re-invoicing.png)

* **Cantidad y Precio Unitario:** <br/> 
Al usar Cantidad y Precio Unitario, el cálculo del % de Recargo se realizará desde el Costo Unitario Directo de compra al Precio Unitario de Re-Facturación.<br/>
Si la Cantidad se cambia, no habrá actualización en el % de recargo o el precio unitario. <br/>
Cantidad de Compra 2, Costo Unitario Directo **1 000,00**, total de 2 000,00<br/>
Cantidad de Re-Facturación 4, Precio Unitario **1 500,00** total de 6 000,00<br/>
**El % de Recargo entonces mostrará como 50%**<br/>
![Líneas del Diario de Importación de ExFlow](@site/static/img/media/import-journal-lines-003-re-invoicing.png)

Habilitar % de Recargo abrirá opciones adicionales para predefinir Recargos.

La página de recargos de Re-Facturación agrega más personalización al manejo de recargos para diferentes tipos de clientes.
Podemos definir porcentajes de recargo basados en Número de Cliente, Código de Socio IC, Grupo de Clientes y Grupo de Precios de Clientes. <br/>
El campo Número de Cliente tiene la mayor prioridad y no se puede combinar con otros campos.
Una línea de recargo sin ningún filtro se aplicará a todos los demás clientes no incluidos en otros filtros.

![% de Recargo de Re-Facturación](@site/static/img/media/re-invoicing-surcharges-001.png)
<br/>

#### Copiar Valores de Dimensión
Ir a: ***Configuración de Re-Facturación de ExFlow --> Acciones --> Copiar Dimensiones***<br/>
Active y seleccione dimensiones para copiar valores de la línea de compra a la línea de venta.

Cuando la misma dimensión con diferentes valores existe en ambas líneas de venta y compra, se puede usar la configuración para priorizar la dimensión de la compra. Si no se selecciona, las dimensiones se priorizarán desde las líneas de venta.

![Copiar Dimensiones de Re-Facturación](@site/static/img/media/re-invoicing-copy-dimensions-001.png)


### Códigos de Re-Facturación de ExFlow
Ir a: ***Configuración de Re-Facturación de ExFlow --> Acciones --> Códigos de Re-Facturación de ExFlow***<br/>
Es posible elegir diferentes Cuentas G/L para una línea específica de Factura de Venta utilizando el Código de Re-Facturación. Si el Código de Re-Facturación está vacío, se preseleccionará la Cuenta G/L predeterminada de la Configuración de Re-Facturación. <br/>
Si ''Artículo para Venta'' está activado, entonces el campo ''Código de Re-Facturación'' no se puede usar para Líneas de Artículo.

![Códigos de Re-Facturación de ExFlow](@site/static/img/media/re-invoicing-codes-001.png)

### Códigos de Compra de ExFlow
Ir a: ***Configuración --> Configuración Manual de ExFlow --> Códigos de Compra de ExFlow***<br/>
Los campos de Re-Facturación ahora se agregan al Código de Compra de ExFlow. Pero la Re-Facturación necesita estar activada para que los campos se muestren.

![Código de Compra de ExFlow](@site/static/img/media/re-invoicing-purchase-code-001.png)

### Regla de Codificación de Denegación de ExFlow -- Re-Facturación
Ir a: ***Configuración --> Configuración Manual de ExFlow --> Reglas de Codificación de Denegación de ExFlow***<br/>
Si se agrega un Número de Cliente de Re-Facturación, entonces es posible agregar una Regla de Codificación de Denegación de ExFlow para obligar a los Aprobadores a agregar más información.

En este ejemplo, el Aprobador necesita agregar el Monto de Re-Facturación si hay un Número de Cliente de Re-Facturación agregado en la Línea del Documento, con tipo de línea Cuenta G/L, en ExFlow Web.

Si falta el Monto de Re-Facturación, ExFlow agregará el % de Recargo (si está activado) y el Monto de Compra a la Factura de Venta.

![Regla de Codificación de Denegación de ExFlow](@site/static/img/media/denying-coding-rule-002-re-invoicing.png)

### Re-Facturación en el Diario de Importación de ExFlow
Al trabajar con la re-facturación en el Diario de Importación, la codificación se puede agregar a través del Código de Compra de ExFlow o agregarse manualmente.

| Re-Facturación en el Diario de Importación | |
|:-|:-|
| **Re-Facturación Obligatoria:**       | Obligar al último aprobador a agregar el Número de Cliente de Re-Facturación en ExFlow Web para poder aprobar la factura
| **Número de Cliente de Re-Facturación:**        | Activar la Re-Facturación en el Diario de Importación agregando el Número de Cliente de Re-Facturación en la Línea de Importación. El Monto Total de la Línea Excl. IVA / Cantidad y Precio Unitario se agregarán automáticamente en el Monto de Re-Facturación calculado con el % de recargo. Cambie el Monto de Re-Facturación manualmente si es necesario
| **Código de Re-Facturación:**                | Ingrese "Código de Re-Facturación" para seleccionar una Cuenta G/L que se agregará en la Línea de Factura de Venta. Si no se elige ningún Código de Re-Facturación, entonces se seleccionará automáticamente la Cuenta G/L de Venta predefinida de la Configuración de Re-Facturación de ExFlow
| **Descripción de Re-Facturación:**         | La Descripción Personalizada se agregará por defecto si está activada. También se puede cambiar o agregar manualmente si es necesario. Si no se ingresa nada, la Descripción en la Línea de Factura de Venta será seleccionada por defecto por Business Central
| **Cantidad de Re-Facturación:**                 | Si Cantidad y Precio Unitario están seleccionados para Usar Campos de Monto en la Configuración de Re-Facturación, la Cantidad a Re-Facturar se copiará de la Cantidad de Compra. Se puede actualizar manualmente. Para Líneas de Artículo cuando Artículo para Venta está activado, la Cantidad de Re-Facturación no puede ser mayor que la Cantidad Comprada.
| **% de Recargo de Re-Facturación:**         | El % de Recargo se agregará desde la configuración de re-facturación si está activado. Agregar o actualizar manualmente para calcular el monto de la línea/precio unitario
| **Monto/Precio Unitario de Re-Facturación:**   | Debido a la configuración para Usar Campos de Monto, el Monto o Precio Unitario se calcula a partir del Costo Unitario Directo y el % de Recargo. Se puede ajustar manualmente para calcular el nuevo % de Recargo

![Diario de Importación de ExFlow](@site/static/img/media/re-invoicing-import-journal-001.png)

#### Documentos Confidenciales de Re-Facturación
La funcionalidad de Documentos Confidenciales no se puede usar junto con la Re-Facturación. El siguiente Mensaje de Acción aparecerá en las Líneas del Diario de Importación si es así: ''La funcionalidad de Re-Facturación no se puede usar junto con Documentos Confidenciales''

### Re-Facturación en ExFlow Web
Ir a: ***Configuración de Re-Facturación --> Acciones --> Editar Columnas Web / Columnas Web***<br/>
Las columnas deben agregarse en ExFlow Web para aprobar, rechazar o cambiar la información de codificación relacionada con "Re-Facturación".

El Usuario de ExFlow puede agregar o cambiar valores en la línea en ExFlow Web con el Rol de Permiso Web dado.<br/>
Lea más sobre los Roles de Permiso Web en la sección [***Usuario de ExFlow***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/exflow-user#add-company-access-and-web-permission-role-under-permissions)

![ExFlow Web - Re-Facturación](@site/static/img/media/re-invoicing-web-001.png)

Si "Re-Facturación Obligatoria" se agregó en el Diario de Importación y falta el "Número de Cliente de Re-Facturación", el siguiente mensaje de error ocurrirá en el último Aprobador en el Flujo de Aprobación.

![ExFlow Web - El Número de Re-Facturación debe ser establecido](@site/static/img/media/web-dynamics-error-002-re-invoicing.png)

Si se usa la Regla de Codificación de Denegación de ExFlow mencionada anteriormente, el aprobador recibirá el siguiente mensaje de error al aprobar el documento con el Número de Cliente de Re-Facturación y falta el Monto.

![ExFlow Web - Mensajes de Validación](@site/static/img/media/web-dynamics-error-003-re-invoicing.png)

En este caso, agregue el "Monto de Re-Facturación" y apruebe.

### Estado de Aprobación de ExFlow
El Estado de Aprobación ahora está actualizado, pero el documento necesita ser Verificado y Publicado antes de que las Entradas de Re-Facturación se agreguen y estén listas para crear el documento de venta.

### Entradas de Re-Facturación de ExFlow
Ir a: ***Actividades Periódicas --> Entradas de Re-Facturación de ExFlow***<br/>
La información sobre las entradas de re-facturación se puede encontrar en las Entradas de Re-Facturación de ExFlow. Estas entradas serán visibles después de que una Factura de Compra haya sido aprobada, verificada y publicada.

Los cambios en las Entradas de Re-Facturación o desde las facturas de venta se pueden hacer antes de la publicación.

Use la función “Crear”, o "Crear Facturas por Lotes" si hay más de una factura para crear. Solo se crearán las líneas seleccionadas.

| Funciones de Re-Facturación | |
|:-|:-|
| **Eliminar Entradas de Re-Facturación:**      | Si una Línea de Re-Facturación se ha creado por error, use "Eliminar Entradas de Re-Facturación". La línea se marcará como eliminada pero aún se puede encontrar en el historial (Mostrar/Ocultar Entradas de Re-Facturación) 
| **Mostrar/Ocultar Entradas de Re-Facturación:**    | Use la función "Mostrar/Ocultar Entradas de Re-Facturación" para ver el historial de todas las Líneas de Re-Facturación de Compra. Esto es para ver las líneas de factura de venta/nota de crédito que se han creado, publicado o si la entrada ha sido eliminada 

![Entradas de Re-Facturación de ExFlow](@site/static/img/media/re-invoicing-entries-001.png)
<br/>

| Acciones – Cambios Manuales| |
|:-|:-|
| **Aplicar Línea de Venta:**                     | Aplicar una Entrada de Re-Facturación a una línea de documento de venta ya creada pero no publicada
| **Aplicar Línea de Factura de Venta Publicada:**      | Aplicar Entrada de Re-Facturación a una línea de Factura de Venta Publicada
| **Aplicar Línea de Nota de Crédito de Venta Publicada:**  | Aplicar Entrada de Re-Facturación a una línea de Nota de Crédito de Venta Publicada
| **Desaplicar Re-Facturado:**                  | Seleccione una o más entradas para desaplicar para que puedan ser aplicadas o el documento de venta pueda ser creado nuevamente
| **Restaurar Valores de Re-Facturación:**          | Restaura los valores de re-facturación si ha habido algún cambio después de la publicación del documento de compra

![Entradas de Re-Facturación de ExFlow](@site/static/img/media/re-invoicing-entries-action-001.png)
<br/>

| Acciones | |
|:-|:-|
| **Crear Facturas:**              | Crear documento de venta solo para las entradas seleccionadas
| **Crear Facturas por Lotes:**        | Crear por lotes todas las facturas de venta o las seleccionadas
| **Mostrar Imagen del Documento:**          | Mostrar PDF de la Factura de Compra (Ctrl+I)<br/>Seleccionar y descargar múltiples documentos de compra
| **Mostrar Factura de Compra Publicada:** | Mostrar factura de compra publicada para la entrada seleccionada

![Entradas de Re-Facturación de ExFlow](@site/static/img/media/re-invoicing-entries-action-002.png)
<br/>

#### Crear Facturas
Ir a: ***Entradas de Re-Facturación --> Acciones --> Crear Facturas (F9)*** <br/>
Para crear Facturas de Venta, use la función en el menú bajo Acciones o el atajo F9. Las facturas de venta se crearán para todas las entradas seleccionadas.

Las Facturas de Venta se crearán en la Cuenta G/L en el campo Número de Re-Facturación. Y si Artículo para Venta está activado en la Configuración de Re-Facturación, el mismo artículo que se compró. <br/>
Lea más en la sección [***Artículo para Venta de Re-Facturación***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/re-invoicing#re-invoicing-item-for-sale) 

Los campos obligatorios para poder crear documentos de venta son Número de Cliente de Re-Facturación, Número de Re-Facturación y Monto de Re-Facturación o Precio Unitario.

| Crear Facturas | |
|:-|:-|
| **Fecha de Publicación:**     |Elija una Fecha de Publicación si es diferente a la fecha de hoy
| **Tipo de Creación de Factura:**    | Seleccione si las facturas de venta deben crearse Un Documento por Línea o Un Documento por Cliente
| **Fecha de Tipo de Cambio Basada en:**  | Seleccione la fecha de tipo de cambio basada en la Fecha de Publicación de Ventas o en la Fecha de Publicación de Compras

![Crear Facturas por Lotes de ExFlow](@site/static/img/media/re-invoicing-batch-create-001.png)
<br/>

#### Crear Facturas por Lotes
Ir a: ***Entradas de Re-Facturación --> Acciones --> Crear Facturas por Lotes***<br/>
La única diferencia con Crear Facturas es que el lote creará facturas de venta para todas las entradas si no se selecciona ninguna línea.
<br/>

#### Crear Facturas de Venta de Re-Facturación Manualmente
Ir a: ***Facturas de Venta*** en Business Central Standard y crear una nueva Factura de Venta.

Seleccione qué cliente facturar. En este ejemplo, Cliente No. 10000. Agregue información en el Encabezado del Documento de Venta y use la función "Obtener Líneas de Re-Facturación" agregada bajo ***Relacionado --> ExFlow***.

![Factura de Venta - Obtener Líneas de Re-Facturación](@site/static/img/media/sales-invoice-001-re-invoicing.png)

Todas las líneas seleccionadas se importarán para este Cliente.

![Mensaje de Re-Facturación](@site/static/img/media/sales-invoice-get-re-invoicing-001.png)

En este caso, la Cuenta G/L 3081 fue seleccionada del Código de Re-Facturación. El Precio Unitario Excl. IVA incluyendo el % de recargo y la Descripción Personalizada se agregaron desde la Entrada de Re-Facturación.

![Factura de Venta - Obtener Líneas de Re-Facturación](@site/static/img/media/sales-invoice-002-re-invoicing.png)
<br/>

#### Mostrar Imagen del Documento desde la Línea de Factura de Venta
Ir a: ***Líneas --> Línea --> Información Relacionada --> ExFlow --> Mostrar Imagen del Documento***<br/>
Haga clic en "Mostrar Imagen del Documento" para ver el PDF de la Factura de Compra relacionada con la línea seleccionada.

![Factura de Venta - Mostrar Imagen del Documento](@site/static/img/media/sales-invoice-003-re-invoicing.png)

### Historial de Aprobación de ExFlow
La información sobre "Re-Facturar al Cliente" se guarda en el Historial de Aprobación de ExFlow.
Las columnas “Entradas de Re-Facturación” y “Entradas de Re-Facturación en todas las líneas” ayudan al usuario en el Historial de Aprobación de ExFlow a ver y agregar un filtro a nivel de encabezado si las Facturas de Compra Publicadas han publicado documentos de re-facturación.

### Contador de ExFlow
Al usar el Rol “Contador de ExFlow”, se agrega un mosaico para mostrar las Entradas de Re-Facturación a manejar.

![Estado de Aprobación de ExFlow](@site/static/img/media/re-invoicing-role-center-001.png)

### Artículo para Venta de Re-Facturación
Al activar Artículo para Venta, los Campos de Monto a Usar deben ser “Cantidad y Precio Unitario” en la Configuración de Re-Facturación.

Las Facturas de Venta se crearán con el mismo Número de Artículo que se compró. Por lo tanto, no se puede usar el Código de Re-Facturación.

No se agregará automáticamente ningún % de Recargo y el Precio Unitario de Re-Facturación será 0,00. Al crear el documento de venta, el Precio Unitario será manejado por Business Central como estándar. Desde la Tarjeta de Artículo o la Lista de Precios del Cliente.

La Cantidad de Re-Facturación se copia de la Cantidad de Compra pero se puede cambiar a menos pero nunca más que la cantidad comprada.

Cuando se crea la línea de venta, se usa la Entrada de Artículo Aplicada para conectar la Entrada de Artículo de Compra a la línea de venta si es posible. El Método de Costeo Estándar de Business Central en la Tarjeta de Artículo no se usará entonces.

Si la Cantidad de Re-Facturación ya no está en stock, habrá una pregunta para continuar sin la Entrada de Artículo Aplicada y usar el Método de Costeo Estándar de Business Central en su lugar.

Si la Cola de Trabajos se crea a través de ***Configuración de Re-Facturación de ExFlow --> Publicación en Segundo Plano*** solo se crearán facturas sin error o preguntas. <br/>
Ir a: ***Entradas de Re-Facturación*** y crearlas manualmente, corregir los mensajes de error o responder la pregunta para crear sin la Entrada de Artículo Aplicada.

Aquí se puede usar la configuración “Siempre Crear Factura de Venta cuando Falte la Entrada de Artículo Aplicada” en la Configuración de Re-Facturación para crear facturas sin la Entrada de Artículo Aplicada.

La Ubicación se agregará a través de la Entrada de Artículo Aplicada si es posible. El Código de Variante y el Código de Contenedor se copiarán de la línea de compra. Si no es posible agregar la Entrada de Artículo Aplicada, el Código de Ubicación, el Código de Contenedor y el Código de Variante deben manejarse manualmente en la línea de factura de venta.

### Re-Facturación de Artículo a Cuenta G/L
Ir a: ***Configuración --> Configuración Manual de ExFlow --> Configuración de Re-Facturación***<br/>
Para crear facturas de venta a Cuenta G/L desde la línea de factura de compra de Artículo, asegúrese de que Artículo para Venta esté desactivado en la Configuración de Re-Facturación.

El % de Recargo se agregará automáticamente al agregar un Número de Cliente si está activado.

Si Cantidad y Precio Unitario están seleccionados en la Configuración de Re-Facturación para Usar Campos de Monto, se puede agregar cualquier Cantidad de Re-Facturación, pero se sugerirá la cantidad comprada.

Elija la Cuenta G/L a través del Código de Re-Facturación. Si está vacío, se seleccionará la Cuenta G/L de Venta Predefinida.