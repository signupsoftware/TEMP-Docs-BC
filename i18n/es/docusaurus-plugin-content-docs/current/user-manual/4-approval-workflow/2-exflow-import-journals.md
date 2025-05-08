---
title: Diarios de Importación de ExFlow
sidebar_position: 2
hide_title: true
custom_edit_url: null
---
## Diarios de Importación de ExFlow

Vaya a: ***Diarios de Importación de ExFlow***

Un "Diario de Importación de ExFlow" se utiliza para importar documentos, aplicar codificación, gestionar mensajes de acción y crear Facturas/Notas de Crédito para aprobación. Después de escanear e interpretar los documentos escaneados, se crean archivos que están listos para ser importados.

Desde la lista de Diarios de Importación de ExFlow es posible buscar, crear un nuevo diario, editar filas actuales del diario y eliminar diarios. Los usuarios también pueden Importar Documentos por Lotes, Crear Facturas y Notas de Crédito por Lotes, Editar/Ver Cola de Importación OCR, enviar Recordatorios de Recepción por Correo Electrónico y Verificar Diarios por Lotes.

![Diarios de Importación de ExFlow](@site/static/img/media/import-journals-003.png)

| Menú de Diarios de Importación |  |
|:-|:-|
| **Nuevo**         | Agregar un nuevo Diario de Importación
| **Editar lista**  | Editar la lista de Diarios de Importación
| **Eliminar**      | Eliminar un Diario de Importación
| **Inicio**        | **Editar Diario:** Abre el Diario de Importación marcado para editar <br/><br/> **Importar Documentos por Lotes:** Importa documentos para todos los lotes<br/><br/> **ExFlow Data Capture:** Abre el inicio de sesión de [**ExFlow Data Capture**](https://signup.readsoftonline.com)  
| **Crear**         | **Crear Factura/Notas Cr.:** Crear documentos desde el Diario de Importación <br/><br/> **Crear Factura/Notas Cr. por Lotes...:** Crear documentos por lotes desde el Diario de Importación
| **Acciones**      | **Editar/Ver Cola de Importación OCR:** Abre la Cola de Importación OCR de ExFlow para documentos aún no importados <br/><br/> **Recordatorios de Recepción por Correo Electrónico:** Envía Recordatorios de Pedido/Recepción <br/><br/>
| **Acciones --> Funciones** | **Verificar Diarios por Lotes:** Verifica todos los documentos para todos los Diarios de Importación <br/><br/> **Verificar Diarios:** Verifica documentos en el Diario de Importación elegido <br/><br/> **Acerca de ExFlow:** Abre una ventana emergente con información sobre la versión actual de ExFlow y Business Central. También proporciona enlaces a la Plataforma de Documentación de ExFlow y las últimas notas de versión.<br/><br/> 
| **Acciones --> Otros** | **Editar Diario:** Abre el Diario de Importación elegido para editar <br/><br/> **Importar Documentos por Lotes:** Importa documentos por lotes a los diarios <br/><br/> **ExFlow Data Capture:** Abre el inicio de sesión de [**ExFlow Data Capture**](https://signup.readsoftonline.com)  

<br/> 

| Lista de Diarios de Importación |  |
|:-|:-|
| **Nombre**        | Nombre del diario
| **Descripción**   | Descripción del diario
| **Tipo de Origen**| Tipo de origen del diario. Los tipos de origen actuales son: ExFlow Data Capture, Servicio Web, Manual e Importación de Archivos
| **Código de Archivo de Importación** | Especifica la Configuración de Importación de Archivos de ExFlow a utilizar. Se requiere configuración antes de su uso.
| **Solo Documentos con Coincidencia de Pedido** | Habilite esta casilla para un diario específico para tener un diario dedicado únicamente a documentos con coincidencia de pedidos de compra
| **Verificar documentos al importar** | Elija si la verificación de los documentos durante la importación debe realizarse para todos los documentos en el diario, o solo para los documentos recién importados.
| **Nº de Documentos** | Especifica la cantidad de documentos en el diario
| **Crear Líneas con Sugerencia de Codificación Automática** | Habilite esta casilla para un diario específico para tener un diario dedicado a Sugerencias de Codificación Automática
| **Ignorar Advertencia de Validación de Pago** | Habilite esta casilla para un diario específico donde los documentos omitirán el proceso de Validación de Pago
| **Ignorar Advertencia de Sugerencia de Pago** (campo oculto) | Habilite esta casilla para un diario específico donde los documentos omitirán el proceso de Sugerencia de Pago. Este campo puede añadirse mediante personalización de página
| **Crear Documentos Automáticamente** (campo oculto) | Habilite esta casilla para obtener un diario dedicado que creará documentos automáticamente. Este campo puede añadirse mediante personalización de página
| **Nºs. Nota de Crédito** (campo oculto) | Añada una Serie de Números específica para Notas de Crédito al diario. Este campo puede añadirse mediante personalización de página
| **Tipo de Documento Predeterminado** (campo oculto) | Añada un tipo de documento predeterminado, como Factura, Nota de Crédito o Factura de Anticipo, para un diario específico. Este campo puede añadirse mediante personalización de página
| **Cód. Línea Dif. Compra** (campo oculto) | Añada un Código de Línea de Diferencia de Compra específico para un diario específico. Este campo puede añadirse mediante personalización de página
| **Código de Compra ExFlow** (campo oculto) | Añada un Código de Compra ExFlow específico para un diario específico. Este campo puede añadirse mediante personalización de página
| **Nºs. Factura** (campo oculto) | Añada una Serie de Números específica para Facturas al diario. Este campo puede añadirse mediante personalización de página
| **Nºs. Nota de Crédito Registrada** (campo oculto) | Añada una Serie de Números específica para Notas de Crédito Registradas al diario. Este campo puede añadirse mediante personalización de página
| **Nºs. Factura Registrada** (campo oculto) | Añada una Serie de Números específica para Facturas Registradas al diario. Este campo puede añadirse mediante personalización de página
| **Cuenta Predefinida** (campo oculto) | Añada una Cuenta Predefinida al diario. Este campo puede añadirse mediante personalización de página
| **Facturas de Auto-facturación** (campo oculto) | Habilite ''Facturas de Auto-facturación'' para especificar si las Facturas de Auto-facturación deben crearse en este lote de diario. Este campo puede añadirse mediante personalización de página
| **Filtro de ID de Usuario (OCR)** (campo oculto) | Añada un diario dedicado a un ID de Usuario OCR específico. Este campo puede añadirse mediante personalización de página

<br/><br/> 

### Importar Documentos por Lotes desde Interpretación
Vaya a: ***Inicio --> Importar Documentos por Lotes***<br/>
Las imágenes de los documentos y los datos interpretados serán importados.

Dependiendo de la configuración del diario, los documentos se separarán en diferentes diarios.

Un diario con la casilla de configuración "Solo Documentos con Coincidencia de Pedido" marcada, recibirá documentos con coincidencia de pedidos y documentos que contengan información del Nº de Pedido. Puede haber otras formas de separar los documentos, pero una separación entre Facturas de Gastos/Compras coincidentes es muy común.

La misma configuración puede realizarse para "Crear Líneas con Sugerencia Automática". Marque la casilla "Crear Líneas con Sugerencia Automática" si la Sugerencia de Codificación Automática de ExFlow debe aplicarse a un diario específico.

Lea más sobre esto en la Sección **"Sugerencia de Codificación Automática de ExFlow".**

![Diarios de Importación de ExFlow](@site/static/img/media/import-journals-004.png)

En los diarios habrá un registro de encabezado de documento para cada documento OCR importado. "Líneas de Importación" en la sección inferior son los detalles de línea para cada documento.

![Diario de Importación de ExFlow](@site/static/img/media/import-journal-010.png)

Además, es posible configurar un diario específico dedicado para Crear Documentos Automáticamente. Utilice Personalizar y añada la columna "Crear Documentos Automáticamente" a la página de lista de Diarios de Importación de ExFlow.

Marque esta casilla si los documentos interpretados deben crearse automáticamente desde el Diario de Importación de ExFlow. Con esta función activada, todos los documentos importados interpretados (sin errores ni mensajes de advertencia) se crearán automáticamente y se enviarán para aprobación.

![Diario de Importación de ExFlow](@site/static/img/media/import-journals-005.png)

Al importar, un mensaje mostrará cuántos documentos se han recibido/importado y la cantidad de documento(s) creado(s) automáticamente.

![Diario de Importación de ExFlow - Estado de Importación](@site/static/img/media/import-status-001.png)

Esta configuración también puede aplicarse solo a proveedores específicos. Lea más sobre esto en la sección **Configuración de Proveedor**.

### ExFlow Data Capture
Vaya a: ***Acciones --> Importar --> ExFlow Data Capture***

Haga clic en "ExFlow Data Capture" para acceder a su sitio web. Esto solo funciona si la empresa está conectada a una cuenta de ExFlow Data Capture.

![Diarios de Importación de ExFlow - ExFlow Data Capture](@site/static/img/media/import-journals-006.png)


<br/><br/> 

## Diario de Importación - Encabezado

![Diario de Importación de ExFlow - Administrar](@site/static/img/media/import-journal-011-menu-manage.png)

| Diario de Importación --> Administrar||
|:-|:-| 
| Eliminar             | Cuando el documento ha sido importado al Diario de Importación de ExFlow, puede eliminarse. No se creará ningún Documento de Compra.
| Ficha             | Abre la ficha del Documento de Importación de ExFlow para el documento seleccionado.
| Estadísticas          | Ver información estadística sobre el documento seleccionado (F7)

![Diario de Importación de ExFlow - Inicio](@site/static/img/media/import-journal-009-menu-home.png)

| Diario de Importación --> Inicio||
|:-|:-| 
| Importar Documentos             | Para importar Documentos a un diario seleccionado, abra el diario e Importe Documentos.
| Verificar Documento            | Seleccione uno (o más) documento(s) para verificar mediante Verificar Documento. Esta función verificará que el documento esté listo para ser creado. (Ctrl+R)
| Verificar Todos los Documentos          | Después de corregir un error, esto eliminará o creará un nuevo mensaje de acción si un documento todavía tiene un error.
|Sugerencia de Codificación Automática - Elección Manual| [Sugerencia de Codificación Automática - Elección Manual](https://docs.signupsoftware.com/business-central/docs/user-manual/approval-workflow/exflow-import-journals#auto-coding-suggestion---manual-choice)
|Sugerencia de Codificación Automática - Automático| [Sugerencia de Codificación Automática - Automático](https://docs.signupsoftware.com/business-central/docs/user-manual/approval-workflow/exflow-import-journals#auto-coding-suggestion---automatic)
|Actualizar Grupo Contable IVA Producto|Debido a las Reglas Fiscales Suecas con respecto al IVA de TI, es posible actualizar todos los Grupos Contables IVA Producto en las Líneas de Factura. Esta función solo puede usarse junto con clientes que tengan SweBase instalado. <br/><br/>Lea más en la sección [**SweBase --> Actualizar Grupo Contable IVA Producto**](https://docs.signupsoftware.com/business-central/docs/user-manual/localizations-and-isv-extensions/swebase#update-vat-product-posting-group)
|Ficha de Proveedor|Abre la ficha del Proveedor para el documento específico.
|Importar o Reemplazar Imagen|Importar o reemplazar la imagen actual del documento.
|Configuración de Proveedor de ExFlow|Este botón mostrará/editará la Configuración de Proveedor de ExFlow para el proveedor actual.

<br/><br/>

### Sugerencia de Codificación Automática
![Diario de Importación de ExFlow](@site/static/img/media/import-journal-012-menu-home.png)

#### Sugerencia de Codificación Automática - Elección Manual
Vaya a: ***Inicio --> Sugerencia de Codificación Automática - Elección Manual***<br/>
Abre la lista de Sugerencia de Codificación Automática relacionada con el documento seleccionado.

La Elección Manual ofrece la opción de navegar a través de diferentes ID de Conjunto de Codificación y elegir manualmente una sugerencia de codificación.

Esta página mostrará la mejor coincidencia para la codificación de la factura que se seleccionó antes de presionar el botón para elegir manualmente la sugerencia de codificación. En la esquina derecha es posible ver la codificación de las Líneas de Sugerencia de Codificación seleccionadas para ese ID de Configuración específico.

**Aplicar ID de Conjunto de Codificación:** Esto aplicará la codificación vista en la esquina derecha a la factura.

**Mostrar Líneas de Documento**: Abrirá la página de Documento de Sugerencia de Codificación de ExFlow. Lea más en la sección **Documento de Sugerencia de Codificación**.

**Mostrar Todo:** Esto mostrará todos los ID de Configuración para la posibilidad de elegir manualmente una codificación sugerida para, por ejemplo, otro proveedor.

**Mostrar Sugerencia Inicial:** Esto volverá a la sugerencia inicial mostrada cuando la página se abrió por primera vez.

![Sugerencia de Codificación de ExFlow para Diario de Importación](@site/static/img/media/auto-coding-suggestion-001.png)

##### Documento de Sugerencia de Codificación de ExFlow

En esta página, la codificación se muestra con más detalle. También es posible comparar las Líneas Sugeridas con las líneas Actuales en la factura.

**Aplicar Codificación Sugerida:** Esto aplica la codificación sugerida a la factura.

**Sugerir Última Codificación**: Esto aplica la codificación del último documento contabilizado de ese proveedor.

**Sugerir Codificación Preseleccionada**: Esto sugiere la codificación que se originó como selección en la ventana anterior.

**Sugerir Codificación Automática:** Esto sugerirá la codificación automática basada en la Configuración de Sugerencia Automática.

![Documento de Sugerencia de Codificación de ExFlow](@site/static/img/media/auto-coding-suggestion-002.png)

#### Sugerencia de Codificación Automática - Automático
Vaya a: ***Inicio --> Sugerencia de Codificación Automática - Automático***<br/>
Aplica la codificación de línea elegida por el algoritmo de sugerencia.

Esto ingresará una codificación basada en la información de la factura. Elegirá la codificación basada en la Configuración de Codificación Automática.

Lea más en la sección [***Configuración de Sugerencia de Codificación Automática***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/auto-coding-suggestion-setup#auto-coding-suggestion-setup)

<br/><br/>


### Crear Facturas/Notas Cr. por Lotes
Vaya a: ***Crear --> Crear Facturas/Notas Cr. por Lotes***<br/>

Esto ejecutará tanto la Verificación por Lotes de Documentos como la creación de Facturas de Compra y Notas de Crédito para todos los documentos en este diario que no tengan ningún mensaje de acción.
![Diario de Importación de ExFlow - Crear](@site/static/img/media/import-journal-013-menu-create.png)

![Crear Documentos de Compra por Lotes](@site/static/img/media/batch-create-purchase-documents-001.png)

Para actualizar la Fecha de Registro en todos los documentos, añada una nueva fecha en el campo Fecha de Registro y active Reemplazar Fecha de Registro.

Si el Uso de Fecha de IVA está habilitado y la Fecha de IVA Predeterminada es la Fecha de Registro en la Configuración del Libro Mayor, Reemplazar Fecha de IVA se activará automáticamente como sugerencia.
 

![Crear Documentos de Compra por Lotes](@site/static/img/media/batch-create-purchase-documents-002.png)

Si uno o varios documentos tienen Código de Diferimiento al usar Reemplazar Fecha de Registro, aparecerá la siguiente pregunta.

Elija **Sí** para actualizar la fecha de inicio del diferimiento según la configuración del Código de Diferimiento para todas las líneas de documento.<br/>
Elija **No** para mantener la fecha de inicio del diferimiento como se creó en todas las líneas de documento.

![Mensaje al Crear Documentos de Compra por Lotes](@site/static/img/media/batch-create-post-message-001.png)

### Crear Factura/Nota Cr.
Vaya a: ***Crear --> Crear Factura/Nota Cr. (F9)***<br/>
Sitúese en la línea de documento seleccionada y haga clic en Crear Factura/Nota Cr. para crear un documento o use el atajo F9.

También existe la opción de seleccionar múltiples documentos para ser creados. Use "Seleccionar Más" para seleccionar los documentos.

![Diario de Importación de ExFlow - Seleccionar Más](@site/static/img/media/import-journal-014.png)

Y simplemente haga clic en Crear Factura/Nota Cr. para crear los documentos elegidos.

![Diario de Importación de ExFlow - Seleccionar y crear múltiples documentos](@site/static/img/media/import-journal-015.png)

### Diario de Importación --> Acciones --> Importar

### Importar Líneas desde Excel
Vaya a: ***Acciones --> Importar --> Descargar Plantilla Excel de Línea de Importación / Importar Línea desde Excel***<br/>
A veces es más fácil trabajar en Excel cuando la factura incluye varias filas.

Comience por "Descargar Plantilla Excel de Línea de Importación".

Modifique, añada y/o elimine filas en Excel, guarde y use la función "Importar Líneas desde Excel".

![Diario de Importación de ExFlow](@site/static/img/media/import-journal-016-menu-actions-import.png)

#### Copiar / Pegar en Filas
Es posible copiar una fila de otro documento o desde Excel y Pegarla en el Diario de Importación. Esta función funciona de la misma manera que en Business Central Estándar.

### Obtener Última Codificación del Proveedor
Vaya a: ***Acciones --> Importar --> Obtener Última Codificación del Proveedor***<br/>
Esta función encontrará la última factura registrada y copiará las filas con la Cuenta del Libro Mayor.

### ExFlow Data Capture
Vaya a: ***Acciones --> Importar --> ExFlow Data Capture***<br/>
Esta función abrirá la página web de "ExFlow Data Capture" (si la empresa está conectada a ExFlow Data Capture).

### Diario de Importación --> Acciones --> Funciones

### Guardar Codificación en Proveedor
Vaya a: ***Acción --> Funciones --> Guardar Codificación en Proveedor***<br/>
Use esta función para guardar la codificación actual de las líneas de factura en un Código de Compra de ExFlow que se guardará en la ficha del Proveedor.

![Diario de Importación de ExFlow - Funciones](@site/static/img/media/import-journal-017-menu-actions-function.png)

### Transferir Documentos Seleccionados a Otra Empresa
Vaya a: ***Acción --> Funciones --> Transferir Documento seleccionado a otra Empresa***<br/>
Si la base de datos de Business Central incluye más de una Empresa, un documento puede moverse a otra Empresa antes de que se cree el documento.

### Transferir Documentos Seleccionados a Otro Lote
Vaya a: ***Acción --> Funciones --> Transferir Documento seleccionado a otro lote***<br/>
Si la empresa de Business Central tiene más de un Diario de Importación de ExFlow, un documento puede moverse a otro diario antes de que se cree el documento.

### Actualizar Fecha de Registro por Lotes
Vaya a: ***Acción --> Funciones --> Actualizar Fecha de Registro por Lotes***<br/>
Con esta función es posible actualizar la Fecha de Registro para documentos en el Diario seleccionado dentro del filtro.

### Editar/Ver Cola de Importación OCR
Vaya a: ***Acción --> Funciones --> Editar/Ver Cola de Importación OCR***<br/>
Use esta función para ver o editar la Cola de Importación OCR. Corrija documentos que contienen información incorrecta que impide su importación.

### Diario de Importación --> Acciones --> Pedido

### Pedido - Hacer Coincidir Líneas OCR
Vaya a: ***Acciones --> Pedido --> Hacer Coincidir Líneas OCR***<br/>
Hacer coincidir líneas de documento con pedido(s) de compra.

![Diario de Importación de ExFlow - Hacer Coincidir Líneas OCR](@site/static/img/media/import-journal-018-menu-actions-order.png)

Al usar esta función, ExFlow recopila información de Pedidos y Recepciones, etc.

Para facilitar la coincidencia manual de líneas, es posible Personalizar la página "Vista de Coincidencia de Líneas" y añadir campos como "Nº de Referencia de Artículo" y "Nº de Artículo del Proveedor".

![Hacer Coincidir Líneas OCR - Vista de Coincidencia de Líneas](@site/static/img/media/line-matching-view-001.png)

### Pedido --> Obtener Líneas de Recepción/ Dev. Env./Pedido
Vaya a: ***Acciones --> Pedido --> Obtener Líneas de Recepción/ Dev. Env./Pedido***<br/>
Con este botón, las líneas de pedido/recepción se obtienen y se añaden al documento seleccionado.

Lea más en la sección **Coincidencia de Pedido a nivel de Encabezado**.

![Diario de Importación de ExFlow](@site/static/img/media/import-journal-019-menu-actions-order.png)


### Diario de Importación --> Acciones --> Correo Electrónico

### Enviar Recordatorios de Recepción por Lotes
Vaya a: ***Acciones --> Correo Electrónico --> Enviar Recordatorios de Recepción por Lotes***<br/>
Con esta función se enviarán correos electrónicos a los usuarios sobre recordatorios de recepción para cualquier documento nuevo. Si el valor del Código de Comprador está en blanco en el Diario de Importación, se enviará un recordatorio al Coordinador de Compras.
Si existe un Código de Comprador, el recordatorio se enviará al usuario de ExFlow conectado.

![Enviar Recordatorios de Recepción de ExFlow](@site/static/img/media/import-journal-020-menu-actions-email.png)

### Enviar Todos los Recordatorios de Recepción por Lotes
Vaya a: ***Acciones --> Correo Electrónico --> Enviar Todos los Recordatorios de Recepción por Lotes***<br/>
Este botón envía correos electrónicos relacionados con recordatorios de recepción sin restricciones de marcas de tiempo de recordatorios enviados anteriormente.

### Enviar Recordatorios de Recepción Para Documentos Seleccionados
Vaya a: ***Acciones --> Correo Electrónico --> Enviar Recordatorios de Recepción Para Documentos Seleccionados***<br/>
Este botón envía recordatorios de recepción solo para documentos seleccionados. Los recordatorios se envían en cualquier momento sin importar cuándo se envió el último recordatorio para el/los documento(s).

### Ver registro de correo electrónico
Vaya a: ***Acciones --> Correo Electrónico --> Ver registro de correo electrónico***<br/>
Este botón mostrará un registro de correo electrónico de los recordatorios de recepción enviados.

![Registros de Correo Electrónico de ExFlow](@site/static/img/media/email-logs-001.png)

#### Eliminar Entradas Anteriores a 30 Días
Vaya a: ***Registros de Correo Electrónico de ExFlow --> Acción --> Eliminar Entradas Anteriores a 30 Días***<br/>
Este botón borra la lista de entradas de registro anteriores a 30 días.

#### Eliminar Todas las Entradas
Vaya a: ***Registros de Correo Electrónico de ExFlow --> Acción --> Eliminar Todas las Entradas***<br/>
Con este botón, todos los registros de entradas de recepciones enviadas pueden borrarse.

#### Mostrar Mensaje de Error
Vaya a: ***Registros de Correo Electrónico de ExFlow --> Acción --> Mostrar Mensaje de Error***<br/>
Este botón muestra si hay algún mensaje de error relacionado con el envío de recordatorios de recepción.

#### Mostrar Todo
Vaya a: ***Registros de Correo Electrónico de ExFlow --> Acción --> Mostrar Todo***<br/>
Con este botón se muestran todos los registros del registro de correo electrónico. Los registros consisten en un tipo de Correo electrónico, Nº de Documento, Dirección de Envío, Enviado por, Creado En y Mensaje de Error.


### Diario de Importación --> Acciones --> Registro Preliminar

### Vista Previa de Registro Preliminar
Vaya a: ***Acciones --> Registro Preliminar --> Vista Previa de Registro***<br/>
Esto solo puede usarse si el Registro Preliminar está activado. <br/>
Lea más en la sección [***Registro Preliminar***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/preliminary-posting)


### Diario de Importación --> Acciones --> Contrato

### Crear Contrato
Vaya a: ***Acciones --> Contrato --> Crear Contrato***<br/>
Si la factura se interpreta y se añade codificación en el encabezado para facturas recurrentes. Use esta función para crear un contrato.
Campos en el Encabezado de Factura que se copiarán al contrato recién creado:
* Nº de Proveedor
* Referencia a Nº de Contrato Externo
* Código de Compra de ExFlow
* Primer Aprobador
* Regla de Aprobación
* Código de Comprador

Para completar la configuración del contrato, lea más en la sección [***Contrato***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/contract)


### Diario de Importación --> Relacionado --> Documento

### Ficha de Pedido
Vaya a: ***Relacionado --> Documento --> Ficha de Pedido***<br/>
Este botón abrirá la ficha de pedido de compra conectada para el documento seleccionado.

### Mostrar Contrato
Vaya a: ***Relacionado --> Documento --> Mostrar Contrato***<br/>
Abre el contrato de ExFlow conectado para el documento seleccionado.

### Dimensiones
Vaya a: ***Relacionado --> Documento --> Dimensiones***<br/>
Ver dimensiones establecidas en el documento seleccionado.

### Ver Cuenta Bancaria del Proveedor
Vaya a: ***Relacionado --> Documento --> Ver Cuenta Bancaria del Proveedor***<br/>
Este botón mostrará la Cuenta Bancaria preferida del Proveedor. Si no existe, mostrará la lista de Cuentas Bancarias del Proveedor para el Proveedor específico.

![Diario de Importación](@site/static/img/media/import-journal-021-menu-related-document.png)


### Diario de Importación --> Documento --> Archivos

### Mostrar Detalles de Importación (OCR)
Vaya a: ***Relacionado --> Archivos --> Mostrar Detalles de Importación (OCR)***<br/>
Para poder ver los datos interpretados, marque la línea de documento correcta, vaya a "Mostrar Detalles de Importación (OCR)". Los datos no pueden modificarse.

![Diario de Importación de ExFlow - Archivos](@site/static/img/media/import-journal-022-menu-related-files.png)

![Documento Importado de ExFlow](@site/static/img/media/imported-document-001.png)


### Mostrar Imagen de Documento (Ctrl + I) / Exportar pdf

Cuando se crea un documento para aprobación, la Imagen del Documento (PDF) puede verse usando el comando rápido (Ctrl+I) en los siguientes lugares:

- Factura de Compra<br/>
- Nota de Crédito de Compra<br/>
- Factura de Compra Registrada<br/>
- Nota de Crédito de Compra Registrada<br/>
- Movimientos de Proveedor<br/>
- Movimientos de Libro Mayor Registrados<br/>
- Movimientos de IVA Registrados<br/>
- Diario de Importación de ExFlow<br/>
- Estado de Aprobación de ExFlow<br/>
- Estado de Aprobación de ExFlow --> Verificar Cambios <br/>
- Historial de Estado de Aprobación de ExFlow<br/>

En el Diario de Importación, Estado de Aprobación e Historial de Estado de Aprobación, es posible seleccionar múltiples documentos antes de usar el atajo Ctrl+I:

![Seleccionar múltiples documentos](@site/static/img/media/image223.png)

Si se seleccionan múltiples archivos, entonces hay una opción para guardar un archivo comprimido que contiene archivos pdf para todos los documentos seleccionados en una ubicación específica. Esta es una excelente manera de exportar muchos pdf si es necesario.

"Mostrar Imagen de Documento" también puede accederse desde el menú bajo Relacionado.

### Abrir PDF- Visor en una nueva pestaña
Es posible abrir el PDF en una nueva pestaña separada para obtener una mejor vista de la imagen del documento.

Esta función se traslada del menú Importar diario al cuadro informativo PDF en el lado derecho.

Lea más sobre esto en [FactBoxes In Import Journal](https://docs.signupsoftware.com/business-central/docs/user-manual/approval-workflow/exflow-import-journals#factboxes-in-import-journal).


## Encabezado de Documento - Mostrar más opciones 

Haga clic en los ''tres puntos verticales'' en el Encabezado del Documento para encontrar opciones de acceso rápido.

![PEQUEÑO](@site/static/img/media/header-line-options-001.png)

### Abrir Ficha de Documento de Importación de ExFlow
Vaya a: ***Administrar --> Ficha***<br/>
Abre la ficha de Documento de Importación de ExFlow para el documento seleccionado.

### Ver Ficha de Proveedor
Vaya a: ***Proceso--> Ficha de Proveedor***<br/>
Este botón mostrará la Ficha de Proveedor para el documento seleccionado.
También puede encontrarse en ***Relacionado --> Documento --> Otro --> Importar o Reemplazar Imagen***

### Importar o Reemplazar Imagen
Vaya a: ***Proceso --> Importar o Reemplazar Imagen***<br/>
Importar un archivo o reemplazar una imagen al menú contextual en el encabezado de la factura a través de la función \'\'Importar o Reemplazar Imagen\" en el Diario de Importación.<br/>
También puede encontrarse en ***Relacionado --> Archivos --> Otro --> Importar o Reemplazar Imagen***

![Diario de Importación de ExFlow](@site/static/img/media/image200.png)

### Configuración de Proveedor de ExFlow
Vaya a: ***Proceso --> Configuración de Proveedor de ExFlow***<br/>
Este botón mostrará/editará la Configuración de Proveedor de ExFlow para el proveedor actual.

### Dimensiones
Vaya a: ***Proceso --> Dimensiones***<br/>
Ver dimensiones establecidas en el documento seleccionado.

### Mostrar Detalles de Importación (OCR)
Vaya a: ***Proceso --> Mostrar Detalles de Importación (OCR)***<br/>
Para poder ver los datos interpretados, marque la línea de documento correcta, vaya a "Mostrar Detalles de Importación (OCR)". Los datos no pueden modificarse.
Lea más sobre mostrar Detalles de Importación arriba


### Mostrar Imagen de Documento (Ctrl + I)

Vaya a: ***Relacionado --> Archivos --> Mostrar Imagen de Documento***<br/>
Para abrir PDF en pantalla completa para un documento seleccionado o usar el atajo (Ctrl+I).

"Mostrar Imagen de Documento" también puede accederse desde el menú bajo Relacionado.


## Campos de Encabezado
Aquí se presentarán algunos campos ''buenos para conocer''. 

### Bloquear Documento
En el Encabezado del Diario de Importación, AP puede bloquear un documento para creación o registro.

#### Bloquear para Creación
Bloquea el documento para ser creado en el Diario de Importación y enviado para aprobación.

#### Bloquear para Registro
Bloquea el documento para ser registrado en el Estado de Aprobación.

![Diario de Importación de ExFlow](@site/static/img/media/import-journals-block-document-001.png)

### Aplicar-a-Documento
Existe la posibilidad de aplicar pagos a un documento. Por ejemplo, aplicar una Factura a una Nota de Crédito en Movimientos de Proveedor al registrar la Nota de Crédito.<br/>
Para usar estos campos, primero deben añadirse usando personalización.

**Aplicar-a-Tipo Doc.** especifica el tipo de documento registrado al que se aplicará este documento o línea de diario al registrar, por ejemplo para registrar el pago.

**Aplicar-a-Nº Doc.** especifica el número del documento registrado al que se aplicará este documento o línea de diario al registrar, por ejemplo para registrar el pago.

![Diario de Importación de ExFlow](@site/static/img/media/image214.png)


## Diario de Importación - Líneas de Importación

### Líneas de Importación - Administrar

#### Nueva Línea / Eliminar Línea
Vaya a: **Líneas de Importación --> Administrar --> Nueva Línea / Eliminar Línea** <br/>

**Nueva Línea:** Añada una nueva línea para crear una nueva entrada. <br/>

**Eliminar Línea:** Elimine la fila seleccionada. <br/>

![Diario de Importación de ExFlow -- Líneas de Importación](@site/static/img/media/image201.png)

### Líneas de Importación - Funciones
Vaya a: **Líneas de Importación --> Línea**

![Diario de Importación de ExFlow -- Líneas de Importación](@site/static/img/media/import-journal-line-functions.png)

### Dimensiones
Vaya a: ***Líneas de Importación --> Línea --> Dimensiones***<br/>
Muestra todas las dimensiones para la línea actual.

### Mostrar Propuesta de Aprobación
Muestra la propuesta de aprobación actual para la línea de documento seleccionada.<br/>
Vaya a: ***Líneas de Importación --> Línea --> Mostrar Propuesta de Aprobación***

### Mostrar Reglas de Aprobación Disponibles
Vaya a: ***Líneas de Importación --> Línea --> Mostrar Reglas de Aprobación Disponibles***<br/>
Esto mostrará todas las reglas de aprobación disponibles con la mayor prioridad en la parte superior.



### Programación de Diferimiento
Vaya a: ***Líneas de Importación --> Línea --> Programación de Diferimiento***<br/>

Si se especifica un código de plantilla de diferimiento, haga clic en Programación de Diferimiento para ver/editar la programación de diferimiento para la línea de documento seleccionada. En ExFlow, la Programación de Diferimiento se usa para el documento de aprobación de ExFlow y no
la factura de compra.

#### Mover Diferimiento Adelante
Vaya a: **Configuración de ExFlow --> General --> Mover Diferimiento Adelante**

Mover Diferimiento Adelante moverá automáticamente los Diferimientos dentro de los períodos de diferimiento cerrados al siguiente abierto al registrar Facturas de Compra y Notas de Crédito de Compra, incluso si el documento está activo para la Aprobación de ExFlow o no.

Ej.
Permitir Registro de Diferimiento desde 2023-01-15.

Crear una Factura con Programación de Diferimiento para tres meses y Fecha de Inicio en Fecha de Registro.

2023-01-15 // 5 000,00<br/>
2023-02-01 // 10 000,00<br/>
2023-03-01 // 10 000,00<br/>
2023-04-15 // 5 000,00

Después del cierre mensual, actualice Permitir Registro de Diferimiento a 2023-02-01

Al registrar, Business Central preguntará si desea actualizar la Fecha de Inicio del Diferimiento y actualizar la Fecha de Registro a 2023-02-01.

Si responde sí, entonces Business Central moverá todos los períodos adelante.

2023-02-01 // 10 000,00<br/>
2023-03-01 // 10 000,00<br/>
2023-04-01 // 10 000,00

Pero si en su lugar responde No y deja que ExFlow Mueva el Diferimiento Adelante, enero se añadirá a febrero ya que este es el primer período de registro permitido para Diferimientos.

2023-02-01 // 15 000,00<br/>
2023-03-01 // 10 000,00<br/>
2023-04-15 // 5 000,00

### Obtener Líneas Interpretadas
Vaya a: ***Líneas de Importación --> Línea --> Obtener Líneas Interpretadas***<br/>

Use esta función para recuperar líneas interpretadas perdidas o eliminadas. ExFlow poblará la factura con líneas interpretadas de los detalles de Importación OCR.

Si un usuario elimina accidentalmente todas las líneas, es posible usar "Obtener Líneas Interpretadas" para restablecer todos los cambios realizados después de la importación.


### Mostrar Reglas de Aprobación Disponibles
Vaya a: ***Líneas de Importación --> Línea --> Mostrar Reglas de Aprobación Disponibles***<br/>
Esta función muestra todas las reglas de aprobación disponibles para la línea de documento seleccionada.

### Mostrar Propietarios de Dimensiones Actuales
Vaya a: ***Líneas de Importación --> Línea --> Mostrar Propietarios de Dimensiones Actuales***<br/>
Ver los Propietarios de Dimensiones de ExFlow para la lista actual de aprobadores sugeridos.


### Mostrar Presupuesto
Si el Control de Presupuesto de G/L está activado, es posible ver el cálculo.
Lea más en la sección [***Control de Presupuesto de G/L***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/gl-budget-control)

### Líneas de Importación - Pedido

Vaya a: **Líneas de Importación --> Pedido**

![pedido](@site/static/img/media/import-line-order-001.png)

### Ficha de Pedido
Vaya a: ***Líneas de Importación --> Pedido --> Ficha de Pedido***

Si la línea de documento está coincidente con un pedido, haga clic en Ficha de Pedido para abrir la correspondiente ficha de pedido de compra/devolución de pedido.<br/>

### Asignación de Cargos de Artículo
Vaya a: ***Líneas de Importación --> Pedido --> Asignación de Cargos de Artículo***<br/>

Al usar Cargo (Artículo), la asignación puede hacerse de tres maneras. Desde el Diario de Importación, automáticamente o manualmente desde la Ficha de Factura.

Manualmente desde el Diario de Importación: <br/>


![Diario de Importación de ExFlow - Líneas de Importación - Asignación de Cargos de Artículo](@site/static/img/media/image204.png)

![Asignación de Cargos de Artículo (ExFlow Compras)](@site/static/img/media/image205.png)

Deje que ExFlow asigne automáticamente el Cargo de Artículo. Añada una opción sobre cómo calcular la asignación "Igualmente, Por Importe, Por Peso o Por Volumen" en el campo "Asignación Automática de Cargos de Artículo" bajo Coincidencia de Pedido en Configuración de ExFlow.

Si se usa Asignación Automática de Cargos de Artículo, el Cargo (Artículo) se asignará al ejecutar Verificar Cambios en Estado de Aprobación y ya no será posible asignar manualmente desde el Diario de Importación.

La Asignación Automática de Cargos de Artículo también puede configurarse por proveedor. Vaya a Configuración de Proveedor de ExFlow para asignar una opción específica de cargo de artículo para un proveedor específico, o para excluir un proveedor específico (si esta función está habilitada en Configuración de ExFlow) eligiendo la opción "Ninguno".

### Filtrar/Desfiltrar Misma Línea de Importación
Vaya a: ***Líneas de Importación --> Pedido -->Filtrar/Desfiltrar Misma Línea de Importación***

Filtrar/Desfiltrar para mostrar otros documentos o líneas con el mismo Nº de Pedido y Nº de Línea de Pedido.

### Documentos Relacionados con la Línea de Pedido
Vaya a: ***Líneas de Importación --> Pedido -->Documentos Relacionados con la Línea de Pedido***

Muestra dónde se usa la línea de pedido seleccionada en el documento de compra elegido.


## Verificaciones de Creación de Documento

### Hacer Coincidir Divisa del Proveedor
Vaya a: **Configuración de ExFlow --> Verificaciones de Creación de Doc. --> Código de Divisa de Proveedor Coincidente**

Si se necesita que ExFlow compruebe que el código de divisa en cada factura importada coincide con el código de divisa predeterminado del proveedor, entonces debe activarse la configuración "Hacer Coincidir Divisa del Proveedor". Encuentre la configuración en Verificaciones de Creación de Doc. en Configuración de ExFlow.

![Configuración de ExFlow - Verificaciones de Creación de Doc.](@site/static/img/media/exflow-setup-doc-creation-checks-001.png)

Cuando esta configuración está activa, ExFlow dará una advertencia para cada documento en el Diario de Importación donde la divisa del documento difiera de la divisa predeterminada del proveedor.

![Diario de Importación de ExFlow](@site/static/img/media/image227.png)

![Diario de Importación de ExFlow - Mensajes de advertencia](@site/static/img/media/image228.png)

ExFlow compara el contenido del campo Divisa en el documento en el Diario de Importación con la divisa predeterminada del proveedor (es decir, el contenido del campo Divisa en la ficha del proveedor).<br/>
Si el proveedor tiene una divisa en blanco (vacía), entonces ExFlow no realiza ninguna validación.


### Permitir Diferencia de IVA
Vaya a: **Configuración de ExFlow --> Verificaciones de Creación de Doc. --> Asignación Auto. de Dif. de IVA para Creación**<br/>

Si Permitir Diferencia de IVA está activado en la Configuración de Compras y Pagos, el Redondeo de IVA puede añadirse en Estadísticas en el Diario de Importación antes de crear el documento.<br/>
La Diferencia de IVA Máxima se manejará según la configuración en la Configuración del Libro Mayor o desde el Código de Divisa actual.

![Diario de Importación de ExFlow - Estadísticas de Factura de Compra](@site/static/img/media/image229.png)

A través de la configuración, ExFlow puede asignar la Diferencia de IVA automáticamente. Entonces la Diferencia de IVA se distribuirá proporcionalmente a todas las líneas.

Active **"Asignación Auto. de Dif. de IVA para Creación"** en la Configuración de ExFlow en la sección Verificación de Creación de Doc. para el Diario de Importación.

Active **"Asignación Auto. de Dif. de IVA para Registro** en la Configuración de ExFlow en la sección Verificaciones de Registro de Doc. para Estado de Aprobación bajo Verificaciones de Registro de Doc.

**Recomendado usar ambos.**<br/>
ExFlow añadirá entonces la Diferencia de IVA automáticamente si la diferencia de IVA está dentro de la configuración en la Configuración del Libro Mayor o desde el Código de Divisa actual.

Si el importe se cambia durante el flujo de aprobación, Business Central eliminará la Diferencia de IVA en la línea actualizada. Entonces ExFlow puede reasignar automáticamente al ejecutar Verificar Cambios en Estado de Aprobación.

Si el importe de IVA en las líneas se cambia manualmente en la Ficha después de la creación del documento, entonces ExFlow preguntará:

*"¿Desea actualizar el Importe de IVA en el Estado de Aprobación de ExFlow desde el Importe de IVA de las líneas?"*<br/>
Responda Sí, para actualizar el Importe de IVA total en el Estado de Aprobación.

![Ficha de Factura o Nota de Crédito de Compra - Actualizar Importe de IVA](@site/static/img/media/image230.png)

**Configuración recomendada:**<br/>
Si trabaja con Asignación Automática de Diferencia de IVA y Redondeo en Facturas/Notas de Crédito al registrar. Añada SIN IVA en la Cuenta del Libro Mayor usada para redondeo.

La diferencia de IVA no está permitida en documentos que incluyen líneas con SOLO IVA. Solo si el IVA se calcula en las líneas.

La Asignación Automática sobrescribirá el Importe de IVA añadido manualmente en Estadísticas.



## FactBoxes en Diario de Importación
A la derecha en el Diario de Importación hay útiles FactBoxes.

### Vista Previa de PDF
Cambiar tamaño en Vista Previa de PDF Presione - / + para disminuir o aumentar el tamaño del PDF.

![Diario de Importación de ExFlow](@site/static/img/media/image215.png)

Restablecer tamaño de FactBox Haga clic en "Restaurar".

![Diario de Importación de ExFlow - Vista Previa de PDF](@site/static/img/media/image216.png)

"Reducir", "Ampliar" y Restablecer Zoom

![Diario de Importación de ExFlow - Vista Previa de PDF](@site/static/img/media/image217.png)

Abrir el PDF en una nueva pestaña separada para obtener una mejor vista de la imagen del documento.  

![Diario de Importación de ExFlow - Vista Previa de PDF](@site/static/img/media/open-new-001.png) 

Cambiar página Nº de PDF usando "Botones de Registro".

![Diario de Importación de ExFlow - Vista Previa de PDF](@site/static/img/media/image218.png)

Para abrir archivo PDF a tamaño completo:

Vaya a: ***Relacionado --> Archivos --> Mostrar Imagen de Documento (Ctrl+I)***

### Panel de Discusión (El mensaje se enviará cuando se cree el documento)
Cuando se ha añadido y enviado un comentario en el Panel de Discusión desde un documento en el Diario de Importación, solo puede verse en el FactBox a la derecha marcado con el ID de Usuario de creación, Fecha y Hora.

Si se menciona a un Usuario de ExFlow que es un usuario del sistema usando @, la notificación se mostrará en Business Central al iniciar sesión. También puede enviarse un mensaje de correo electrónico, pero no hasta que se cree el documento debido a que los Usuarios Web de ExFlow no pueden ver documentos o comentarios en el Diario de Importación.

En ExFlow Web, el mensaje se mostrará en el Chat del Documento después de que se cree.

Lea más sobre configuración y cómo usar el Panel de Discusión en la sección [***Panel de Discusión / Chat y Comentarios de Línea***](https://docs.signupsoftware.com/business-central/docs/user-manual/approval-workflow/notifications-in-business-central#discussion-panel--chat-and-line-comments)

### Archivos de Documento Entrante
Vaya a: ***FactBox --> Archivos de Documento Entrante --> Adjuntar Archivo***<br/>
Añadir un Archivo Adjunto.

Haga clic en "Elegir", navegue hasta el archivo a adjuntar y haga clic en "Abrir".

![Diario de Importación de ExFlow](@site/static/img/media/image219.png)

### Propuesta de Aprobación
Ver Aprobadores para la Línea de Documento actual.
Desde: ***Propuesta de Aprobación --> Mostrar Propuesta de Aprobación***<br/>
Los Aprobadores pueden añadirse manualmente. Esto solo debe usarse en ocasiones especiales.

![Diario de Importación de ExFlow, FactBox, Propuesta de Aprobación](@site/static/img/media/image220.png)

![Propuesta de Aprobación](@site/static/img/media/image221.png)

### Detalles del Documento
Si el importe en el encabezado del documento y el importe total en las líneas del documento no tienen el mismo valor, entonces los Detalles del documento pueden ayudar a ver el importe de diferencia y si se debe al Costo Unitario Directo excl IVA, Costo Unitario Directo incl IVA, importe de IVA o Anticipo.

![Diario de Importación de ExFlow, FactBox, Propuesta de Aprobación](@site/static/img/media/image222.png)

### Mensajes de Advertencia
Si el Mensaje de Acción muestra "¡Hay mensajes de advertencia aún no aceptados!" el mensaje se ve en el FactBox "Mensajes de advertencia". Realice los cambios apropiados o "Aceptar todas las advertencias" como en la imagen de abajo.

![Diario de Importación de ExFlow](@site/static/img/media/image224.png)

![Diario de Importación de ExFlow, FactBox, Mensajes de advertencia](@site/static/img/media/image225.png)

### Estadísticas de Proveedor e Historial de Proveedor de Compra
Encuentre información del Proveedor en FactBoxes de Estadística de Proveedor e Historial de Proveedor de Compra.

![FactBox](@site/static/img/media/approval-status-factbox-vendor-001.png)


## Columnas Web

### Descripción 2

Es posible usar personalización y añadir el campo Descripción 2 a las líneas del Diario de Importación. 

Para facturas coincidentes con PO, el valor en el campo Descripción 2 de la Línea de Compra fluirá desde la línea de PO/Recepción a la correspondiente línea de factura del diario de importación. 

Lo mismo para facturas de Costo/Gasto, el campo Descripción 2 estará disponible en el diario de importación para que los usuarios ingresen texto manualmente. 

![Descripción 2](@site/static/img/media/import-journal-description-2.png)

Cualquier texto ingresado en el campo Descripción 2 será visible en ExFlow Web. 

Para añadir la Columna Web Descripción 2, vaya a **Configuración de ExFlow --> Editar Columnas Web** y luego haga clic en ''Añadir Columna''.

![Descripción 2](@site/static/img/media/exflow-web-columns-add-description-2.png)

Lea más sobre Columnas Web en la sección [***ExFlow Web.***](https://docs.signupsoftware.com/business-central/docs/user-manual/technical/exflow-web#exflow-web)