---
title: Diarios de Importación de ExFlow
sidebar_position: 2
hide_title: true
custom_edit_url: null
---
## Diarios de Importación de ExFlow

Ir a: ***Diarios de Importación de ExFlow***

Un "Diario de Importación de ExFlow" se utiliza para importar documentos, aplicar codificación, manejar mensajes de acción y crear Facturas/Notas de Crédito para su aprobación. Después de escanear e interpretar los documentos escaneados, se crean archivos que están listos para ser importados.

Desde la lista de Diarios de Importación de ExFlow es posible buscar, crear un nuevo diario, editar filas de diarios actuales y eliminar diarios. Los usuarios también pueden Importar Documentos por Lote, Crear Facturas y Notas de Crédito por Lote, Editar/Ver la Cola de Importación OCR, enviar Recordatorios de Recepción por Correo Electrónico y Verificar Diarios por Lote.

![Diarios de Importación de ExFlow](@site/static/img/media/import-journals-003.png)

| Menú de Diarios de Importación |  |
|:-|:-|
| **Nuevo**         | Agregar un nuevo Diario de Importación
| **Editar lista**         | Editar la lista de Diarios de Importación
| **Eliminar**         | Eliminar un Diario de Importación
| **Inicio**         | **Editar Diario:**  Abre el Diario de Importación marcado para editar <br/><br/>  **Importar Documentos por Lote:** Importa documentos para todos los lotes<br/><br/>  **Captura de Datos de ExFlow:**  Abre [**Captura de Datos de ExFlow**](https://signup.readsoftonline.com) para iniciar sesión  
| **Crear**         | **Crear Factura/Notas de Crédito:** Crear documentos desde el Diario de Importación <br/><br/>  **Crear Facturas/Notas de Crédito por Lote...:** Crear documentos por lote desde el Diario de Importación
| **Acciones**         | **Editar/Ver Cola de Importación OCR:** Abre la Cola de Importación OCR de ExFlow para documentos que aún no se han importado <br/><br/> **Enviar Recordatorios de Recepción por Correo Electrónico:** Envía Recordatorios de Pedido/Recepción <br/><br/>
| **Acciones --> Funciones**         | **Verificar Diarios por Lote:** Verifica todos los documentos para todos los Diarios de Importación <br/><br/> **Verificar Diarios:** Verifica documentos en el Diario de Importación elegido <br/><br/> **Acerca de ExFlow:** Abre una ventana emergente con información sobre la versión actual de ExFlow y Business Central. También proporciona enlaces a la Plataforma de Documentación de ExFlow y las notas de la última versión.<br/><br/> 
| **Acciones --> Otros**         | **Editar Diario:** Abre el Diario de Importación elegido para editar <br/><br/> **Importar Documentos por Lote:** Importa documentos por lote a los diarios <br/><br/> **Captura de Datos de ExFlow:**  Abre [**Captura de Datos de ExFlow**](https://signup.readsoftonline.com) para iniciar sesión  

<br/> 

| Lista de Diarios de Importación |  |
|:-|:-|
| **Nombre**         | Nombre del diario
| **Descripción**         | Descripción del diario
| **Tipo de Fuente**         | Tipo de Fuente del diario. Los Tipos de Fuente actuales son: Captura de Datos de ExFlow, Servicio Web, Manual e Importar Archivos
| **Código de Archivo de Importación**         | Especifica la Configuración de Importación de Archivos de ExFlow a utilizar. Se necesita configuración antes de su uso.
| **Solo Documentos Emparejados con Órdenes de Compra**         | Habilite esta casilla de verificación para un diario específico para tener un diario dedicado solo a documentos emparejados con órdenes de compra
| **Verificar documentos al importar**         | Elija si la verificación de los documentos al importar debe proceder para todos los documentos en el diario, o solo para los documentos recién importados. 
| **Núm. de Documentos**         | Especifique la cantidad de documentos en el diario
| **Crear Líneas con Sugerencia de Codificación Automática**         | Habilite esta casilla de verificación para un diario específico para tener un diario dedicado a Sugerencias de Codificación Automática
| **Ignorar Validación de Pago**         | Habilite esta casilla de verificación para un diario específico donde los documentos omitirán el proceso de Validación de Pago
| **Ignorar Sugerencia de Pago** (campo oculto)        | Habilite esta casilla de verificación para un diario específico donde los documentos omitirán el proceso de Sugerencia de Pago. Este campo se puede agregar mediante la personalización de la página
| **Crear Documentos Automáticamente**  (campo oculto)        | Habilite esta casilla de verificación para obtener un diario dedicado que creará documentos automáticamente. Este campo se puede agregar mediante la personalización de la página
| **Núm. de Serie de Notas de Crédito** (campo oculto)        | Agregue una Serie de Números específica para Notas de Crédito al diario. Este campo se puede agregar mediante la personalización de la página
| **Tipo de Documento Predeterminado**  (campo oculto)       | Agregue un tipo de documento predeterminado, como Factura, Nota de Crédito o Factura de Prepago, para un diario específico. Este campo se puede agregar mediante la personalización de la página
| **Código de Compra de Línea de Diferencia**   (campo oculto)      | Agregue un Código de Compra de Línea de Diferencia específico para un diario específico. Este campo se puede agregar mediante la personalización de la página
| **Código de Compra de ExFlow**   (campo oculto)      | Agregue un Código de Compra de ExFlow específico para un diario específico. Este campo se puede agregar mediante la personalización de la página
| **Núm. de Serie de Facturas**     (campo oculto)    | Agregue una Serie de Números específica para Facturas al diario. Este campo se puede agregar mediante la personalización de la página
| **Núm. de Serie de Notas de Crédito Publicadas**     (campo oculto)    | Agregue una Serie de Números específica para Notas de Crédito Publicadas al diario. Este campo se puede agregar mediante la personalización de la página
| **Núm. de Serie de Facturas Publicadas**   (campo oculto)      | Agregue una Serie de Números específica para Facturas Publicadas al diario. Este campo se puede agregar mediante la personalización de la página
| **Cuenta Predefinida**     (campo oculto)    | Agregue una Cuenta Predefinida al diario. Este campo se puede agregar mediante la personalización de la página
| **Facturas de Autoliquidación**  (campo oculto)       | Habilite ''Facturas de Autoliquidación'' para especificar si las Facturas de Autoliquidación deben crearse en este lote de diarios. Este campo se puede agregar mediante la personalización de la página
| **Filtro de ID de Usuario (OCR)**   (campo oculto)      | Agregue un diario dedicado a un ID de Usuario OCR específico. Este campo se puede agregar mediante la personalización de la página

<br/><br/> 

### Importar Documentos por Lote desde la Interpretación
Ir a: ***Inicio --> Importar Documentos por Lote***<br/>
Las imágenes de los documentos y los datos interpretados serán importados.

Dependiendo de la configuración del diario, los documentos se separarán en los diferentes diarios.

Un diario con la casilla de verificación "Solo Documentos Emparejados con Órdenes de Compra" marcada, obtendrá documentos emparejados con órdenes y documentos que contengan información de Número de Orden. Puede haber otras formas de separar los documentos, pero una separación en Facturas de Gastos/Compras emparejadas es muy común.

La misma configuración se puede hacer para "Crear Líneas con Sugerencia Automática". Marque la casilla "Crear Líneas con Sugerencia Automática" si se debe aplicar la Sugerencia de Codificación Automática de ExFlow para un diario específico.

Lea más sobre esto en la Sección **"Sugerencia de Codificación Automática de ExFlow".**

![Diarios de Importación de ExFlow](@site/static/img/media/import-journals-004.png)

En los diarios habrá un registro de encabezado de documento para cada documento OCR importado. "Líneas de Importación" en la sección inferior son detalles de línea para cada documento.

![Diario de Importación de ExFlow](@site/static/img/media/import-journal-010.png)

Además, es posible configurar un diario específico dedicado a Crear Documentos Automáticamente. Use Personalizar y agregue la columna "Crear Documentos Automáticamente" a la página de lista de Diarios de Importación de ExFlow.

Marque esta casilla si los documentos interpretados deben crearse automáticamente desde el Diario de Importación de ExFlow. Con esta función configurada, todos los documentos importados interpretados (sin errores ni mensajes de advertencia) se crearán automáticamente y se enviarán para su aprobación.

![Diario de Importación de ExFlow](@site/static/img/media/import-journals-005.png)

Importe y se mostrará un mensaje con la cantidad de documentos recibidos/importados y la cantidad de documentos creados automáticamente.

![Diario de Importación de ExFlow - Estado de Importación](@site/static/img/media/import-status-001.png)

Esta configuración también se puede aplicar solo a proveedores específicos. Lea más sobre esto en la sección **Configuración de Proveedor**.

### Captura de Datos de ExFlow
Ir a: ***Acciones --> Importar --> Captura de Datos de ExFlow***

Haga clic en "Captura de Datos de ExFlow" para ir a su sitio web. Esto solo funciona si la empresa está conectada a una cuenta de Captura de Datos de ExFlow.

![Diarios de Importación de ExFlow - Captura de Datos de ExFlow](@site/static/img/media/import-journals-006.png)


<br/><br/>

## Diario de Importación - Encabezado

![Diario de Importación de ExFlow - Administrar](@site/static/img/media/import-journal-011-menu-manage.png)

| Diario de Importación --> Administrar||
|:-|:-| 
| Eliminar             | Cuando el documento ha sido importado en el Diario de Importación de ExFlow, se puede eliminar. Entonces no se creará ningún Documento de Compra.
| Tarjeta             | Abre la tarjeta del Documento de Importación de ExFlow para el documento seleccionado.
| Estadísticas          | Ver información estadística sobre el documento seleccionado (F7)

![Diario de Importación de ExFlow - Inicio](@site/static/img/media/import-journal-009-menu-home.png)

| Diario de Importación --> Inicio||
|:-|:-| 
| Importar Documentos             | Para importar documentos a un diario seleccionado, abra el diario e importe documentos.
| Verificar Documento            | Seleccione uno (o más) documento(s) para verificar a través de Verificar Documento. Esta función verificará que el documento esté listo para ser creado. (Ctrl+R)
| Verificar Todos los Documentos          | Después de corregir un error, esto eliminará o creará un nuevo mensaje de acción si un documento aún tiene un error.
|Sugerencia de Codificación Automática - Elección Manual| [Sugerencia de Codificación Automática - Elección Manual](https://docs.signupsoftware.com/business-central/docs/user-manual/approval-workflow/exflow-import-journals#auto-coding-suggestion---manual-choice)
|Sugerencia de Codificación Automática - Automática| [Sugerencia de Codificación Automática - Automática](https://docs.signupsoftware.com/business-central/docs/user-manual/approval-workflow/exflow-import-journals#auto-coding-suggestion---automatic)
|Actualizar Grupo de Registro de Producto de IVA|Debido a las reglas fiscales suecas sobre el IVA de TI, es posible actualizar todos los Grupos de Registro de Producto de IVA en las líneas de la factura. Esta función solo se puede usar junto con clientes que tengan SweBase instalado. <br/><br/>Lea más en la sección [**SweBase --> Actualizar Grupo de Registro de Producto de IVA**](https://docs.signupsoftware.com/business-central/docs/user-manual/localizations-and-isv-extensions/swebase#update-vat-product-posting-group)
|Abrir Visor de PDF en Nueva Pestaña|Abre el PDF en una nueva pestaña.
|Tarjeta del Proveedor|Abre la tarjeta del proveedor para el documento específico.
|Importar o Reemplazar Imagen|Importar o reemplazar la imagen del documento actual.
|Configuración de Proveedor de ExFlow|Este botón mostrará/editará la Configuración de Proveedor de ExFlow para el proveedor actual.

<br/><br/>

### Sugerencia de Codificación Automática
![Diario de Importación de ExFlow](@site/static/img/media/import-journal-012-menu-home.png)

#### Sugerencia de Codificación Automática - Elección Manual
Ir a: ***Inicio --> Sugerencia de Codificación Automática - Elección Manual***<br/>
Abre la lista de Sugerencias de Codificación relacionadas con el documento seleccionado.

La Elección Manual da la opción de navegar a través de diferentes ID de Conjunto de Codificación y elegir manualmente una sugerencia de codificación.

Esta página mostrará la mejor coincidencia de codificación para la factura que se seleccionó antes de presionar el botón para elegir manualmente la sugerencia de codificación. En la esquina superior derecha es posible ver la codificación de las Líneas de Sugerencia de Codificación seleccionadas para ese ID de Configuración específico.

**Aplicar ID de Conjunto de Codificación:** Esto aplicará la codificación vista en la esquina superior derecha a la factura.

**Mostrar Líneas del Documento**: Abrirá la página del Documento de Sugerencia de Codificación de ExFlow. Lea más en la sección **Documento de Sugerencia de Codificación**.

**Mostrar Todo:** Esto mostrará todos los ID de Configuración para la posibilidad de elegir manualmente una codificación sugerida para, por ejemplo, otro proveedor.

**Mostrar Sugerencia Inicial:** Esto volverá a la sugerencia inicial mostrada desde que se abrió la página por primera vez.

![Sugerencia de Codificación de ExFlow para Diario de Importación](@site/static/img/media/auto-coding-suggestion-001.png)

##### Documento de Sugerencia de Codificación de ExFlow

En esta página se muestra la codificación con más detalle. También es posible comparar las Líneas Sugeridas con las líneas actuales en la factura.

**Aplicar Codificación Sugerida:** Esto aplica la codificación sugerida a la factura.

**Sugerir Última Codificación:** Esto aplica la codificación del último documento registrado de ese proveedor.

**Sugerir Codificación Preseleccionada:** Esto sugiere la codificación que se originó como la selección en la ventana anterior.

**Sugerir Codificación Automática:** Esto sugerirá la codificación automática basada en la Configuración de Sugerencia Automática.

![Documento de Sugerencia de Codificación de ExFlow](@site/static/img/media/auto-coding-suggestion-002.png)

#### Sugerencia de Codificación Automática - Automática
Ir a: ***Inicio --> Sugerencia de Codificación Automática - Automática***<br/>
Aplica la codificación de línea elegida por el algoritmo de sugerencia.

Esto ingresará una codificación basada en la información de la factura. Elegirá la codificación basada en la Configuración de Codificación Automática.

Lea más en la sección [***Configuración de Sugerencia de Codificación Automática***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/auto-coding-suggestion-setup#auto-coding-suggestion-setup)

<br/><br/>

### Crear Facturas/Notas de Crédito por Lote
Ir a: ***Crear --> Crear Facturas/Notas de Crédito por Lote***<br/>

Esto ejecutará tanto la Verificación de Documentos por Lote como la creación de Facturas de Compra y Notas de Crédito para todos los documentos en este diario que no tengan ningún mensaje de acción.
![Diario de Importación de ExFlow - Crear](@site/static/img/media/import-journal-013-menu-create.png)

![Crear Documentos de Compra por Lote](@site/static/img/media/batch-create-purchase-documents-001.png)

Para actualizar la Fecha de Registro en todos los documentos, agregue una nueva fecha en el campo Fecha de Registro y active Reemplazar Fecha de Registro.

Si el Uso de Fecha de IVA está habilitado y la Fecha de IVA Predeterminada es la Fecha de Registro en la Configuración de Contabilidad General, Reemplazar Fecha de IVA se activará automáticamente como una sugerencia.
 

![Crear Documentos de Compra por Lote](@site/static/img/media/batch-create-purchase-documents-002.png)

Si uno o varios documentos tienen Código de Diferimiento al usar Reemplazar Fecha de Registro, aparecerá la siguiente pregunta.

Elija **Sí** para actualizar la fecha de inicio del diferimiento según las configuraciones en el Código de Diferimiento para todas las líneas del documento.<br/>
Elija **No** para mantener la fecha de inicio del diferimiento tal como se creó en todas las líneas del documento.

![Mensaje al Crear Documentos de Compra por Lote](@site/static/img/media/batch-create-post-message-001.png)

### Crear Factura/Nota de Crédito
Ir a: ***Crear --> Crear Factura/Nota de Crédito (F9)***<br/>
Párese en la línea del documento seleccionado y haga clic en Crear Factura/Nota de Crédito para crear un documento o use el atajo F9.

También hay una opción para seleccionar varios documentos para ser creados. Use "Seleccionar Más" para seleccionar los documentos.

![Diario de Importación de ExFlow - Seleccionar Más](@site/static/img/media/import-journal-014.png)

Y simplemente haga clic en Crear Factura/Nota de Crédito para crear los documentos elegidos.

![Diario de Importación de ExFlow - Seleccionar y crear múltiples documentos](@site/static/img/media/import-journal-015.png)

### Diario de Importación --> Acciones --> Importar

### Importar Líneas desde Excel
Ir a: ***Acciones --> Importar --> Descargar Plantilla de Excel para Línea de Importación / Importar Línea desde Excel***<br/>
A veces es más fácil trabajar en Excel cuando la factura incluye varias filas.

Comience por "Descargar Plantilla de Excel para Línea de Importación".

Modifique, agregue y/o elimine filas en Excel, guarde y use la función "Importar Líneas desde Excel".

![Diario de Importación de ExFlow](@site/static/img/media/import-journal-016-menu-actions-import.png)

#### Copiar / Pegar en Filas
Es posible copiar una fila de otro documento o desde Excel y pegarla en el Diario de Importación. Esta función funciona de la misma manera que en el Estándar de Business Central.

### Obtener la Última Codificación del Proveedor
Ir a: ***Acciones --> Importar --> Obtener la Última Codificación del Proveedor***<br/>
Esta función encontrará la última factura registrada y copiará las filas con la Cuenta G/L.

### Captura de Datos de ExFlow
Ir a: ***Acciones --> Importar --> Captura de Datos de ExFlow***<br/>
Esta función abrirá la página web "Captura de Datos de ExFlow" (si la empresa está conectada a Captura de Datos de ExFlow).

### Diario de Importación --> Acciones --> Funciones

### Guardar Codificación en el Proveedor
Ir a: ***Acción --> Funciones --> Guardar Codificación en el Proveedor***<br/>
Use esta función para guardar la codificación actual de las líneas de la factura en un Código de Compra de ExFlow que se guardará en la tarjeta del Proveedor.

![Diario de Importación de ExFlow - Funciones](@site/static/img/media/import-journal-017-menu-actions-function.png)

### Transferir Documentos Seleccionados a Otra Empresa
Ir a: ***Acción --> Funciones --> Transferir Documento Seleccionado a Otra Empresa***<br/>
Si la base de datos de Business Central incluye más de una Empresa, un documento se puede mover a otra Empresa antes de que se cree el documento.

### Transferir Documentos Seleccionados a Otro Lote
Ir a: ***Acción --> Funciones --> Transferir Documento Seleccionado a Otro Lote***<br/>
Si la empresa de Business Central tiene más de un Diario de Importación de ExFlow, un documento se puede mover a otro diario antes de que se cree el documento.

### Actualizar Fecha de Registro por Lote
Ir a: ***Acción --> Funciones --> Actualizar Fecha de Registro por Lote***<br/>
Con esta función es posible actualizar la Fecha de Registro para documentos en el Diario seleccionado dentro del filtro.

### Editar/Ver Cola de Importación OCR
Ir a: ***Acción --> Funciones --> Editar/Ver Cola de Importación OCR***<br/>
Use esta función para ver o editar la Cola de Importación OCR. Corrija documentos que contienen información incorrecta que les impide ser importados. 

### Diario de Importación --> Acciones --> Orden

### Orden - Emparejar Líneas OCR
Ir a: ***Acciones --> Orden --> Emparejar Líneas OCR***<br/>
Emparejar líneas de documentos con orden(es) de compra.

![Diario de Importación de ExFlow - Emparejar Líneas OCR](@site/static/img/media/import-journal-018-menu-actions-order.png)

Al usar esta función, ExFlow recopila información de la Orden y los Recibos, etc.

Para facilitar el emparejamiento manual de líneas, es posible Personalizar la página "Vista de Emparejamiento de Líneas" y agregar campos como "Número de Referencia del Artículo" y "Número de Artículo del Proveedor".

![Emparejar Líneas OCR - Vista de Emparejamiento de Líneas](@site/static/img/media/line-matching-view-001.png)

### Orden -- Obtener Recibo/ Devolución de Envío/Líneas de Orden
Ir a: ***Acciones --> Orden --> Obtener Recibo/ Devolución de Envío/Líneas de Orden***<br/>
Con este botón se recuperan y agregan las líneas de orden/recibo al documento seleccionado.

Lea más en la sección **Emparejamiento de Órdenes a Nivel de Encabezado**.

![Diario de Importación de ExFlow](@site/static/img/media/import-journal-019-menu-actions-order.png)

### Diario de Importación --> Acciones --> Correo Electrónico

### Enviar Recordatorios de Recepción por Lote
Ir a: ***Acciones --> Correo Electrónico --> Enviar Recordatorios de Recepción por Lote***<br/>
Con esta función se enviarán correos electrónicos a los usuarios sobre recordatorios de recepción para cualquier documento nuevo. Si el valor del Código de Comprador está en blanco en el Diario de Importación, se enviará un recordatorio al Coordinador de Compras.
Si existe un Código de Comprador, el recordatorio se enviará al usuario de ExFlow conectado.

![Enviar Recordatorios de Recepción de ExFlow](@site/static/img/media/import-journal-020-menu-actions-email.png)

### Enviar Todos los Recordatorios de Recepción por Lote
Ir a: ***Acciones --> Correo Electrónico --> Enviar Todos los Recordatorios de Recepción por Lote***<br/>
Este botón envía correos electrónicos sobre recordatorios de recepción sin restricciones de marcas de tiempo de recordatorios enviados anteriormente.

### Enviar Recordatorios de Recepción para Documentos Seleccionados
Ir a: ***Acciones --> Correo Electrónico --> Enviar Recordatorios de Recepción para Documentos Seleccionados***<br/>
Este botón envía recordatorios de recepción solo para documentos seleccionados. Los recordatorios se envían en cualquier momento sin importar cuándo se envió el último recordatorio para el(los) documento(s).

### Ver registro de correos electrónicos
Ir a: ***Acciones --> Correo Electrónico --> Ver registro de correos electrónicos***<br/>
Este botón mostrará un registro de correos electrónicos de recordatorios de recepción enviados.

![Registros de Correos Electrónicos de ExFlow](@site/static/img/media/email-logs-001.png)

#### Eliminar Entradas de Más de 30 Días
Ir a: ***Registros de Correos Electrónicos de ExFlow --> Acción --> Eliminar Entradas de Más de 30 Días***<br/>
Este botón borra la lista de entradas de registro de más de 30 días.

#### Eliminar Todas las Entradas
Ir a: ***Registros de Correos Electrónicos de ExFlow --> Acción --> Eliminar Todas las Entradas***<br/>
Con este botón se pueden borrar todas las entradas de registro de recibos enviados.

#### Mostrar Mensaje de Error
Ir a: ***Registros de Correos Electrónicos de ExFlow --> Acción --> Mostrar Mensaje de Error***<br/>
Este botón muestra si hay mensajes de error relacionados con el envío de recordatorios de recepción.

#### Mostrar Todo
Ir a: ***Registros de Correos Electrónicos de ExFlow --> Acción --> Mostrar Todo***<br/>
Con este botón se muestran todos los registros del registro de correos electrónicos. Los registros consisten en un tipo de correo electrónico, número de documento, enviado a la dirección, enviado por, creado en y mensaje de error.

### Diario de Importación --> Acciones --> Registro Preliminar

### Vista Previa del Registro Preliminar
Ir a: ***Acciones --> Registro Preliminar --> Vista Previa del Registro***<br/>
Esto solo se puede usar si el Registro Preliminar está activado. <br/>
Lea más en la sección [***Registro Preliminar***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/preliminary-posting)

### Diario de Importación --> Acciones --> Contrato

### Crear Contrato
Ir a: ***Acciones --> Contrato --> Crear Contrato***<br/>
Si la factura está interpretada y se ha agregado codificación en el encabezado para facturas recurrentes. Use esta función para crear un contrato.
Campos en el Encabezado de la Factura que se copiarán al nuevo contrato creado:
* Número de Proveedor.
* Referencia al Número de Contrato Externo.
* Código de Compra de ExFlow.
* Primer Aprobador.
* Regla de Aprobación.
* Código de Comprador.

Para completar la configuración en el contrato, lea más en la sección [***Contrato***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/contract)

### Diario de Importación --> Relacionado --> Documento

### Tarjeta de Orden
Ir a: ***Relacionado --> Documento --> Tarjeta de Orden***<br/>
Este botón abrirá la tarjeta de orden de compra conectada para el documento seleccionado.

### Mostrar Contrato
Ir a: ***Relacionado --> Documento --> Mostrar Contrato***<br/>
Abre el contrato de ExFlow conectado para el documento seleccionado.

### Dimensiones
Ir a: ***Relacionado --> Documento --> Dimensiones***<br/>
Ver dimensiones establecidas en el documento seleccionado.

### Ver Cuenta Bancaria del Proveedor
Ir a: ***Relacionado --> Documento --> Cuenta Bancaria del Proveedor***<br/>
Este botón mostrará la Cuenta Bancaria preferida del Proveedor. Si no existe, mostrará la lista de Cuentas Bancarias del Proveedor para el Proveedor específico.

![Diario de Importación](@site/static/img/media/import-journal-021-menu-related-document.png)

### Diario de Importación --> Documento --> Archivos

### Mostrar Detalles de Importación (OCR)
Ir a: ***Relacionado --> Archivos --> Mostrar Detalles de Importación (OCR)***<br/>
Para poder ver los datos interpretados, marque la línea de documento correcta, vaya a "Mostrar Detalles de Importación (OCR)". Los datos no se pueden modificar.

![Diario de Importación de ExFlow - Archivos](@site/static/img/media/import-journal-022-menu-related-files.png)

![Documento Importado de ExFlow](@site/static/img/media/imported-document-001.png)

### Mostrar Imagen del Documento (Ctrl + I) / Exportar pdf

Cuando se crea un documento para aprobación, la Imagen del Documento (PDF) se puede ver utilizando el comando rápido (Ctrl+I) en los siguientes lugares:

- Factura de Compra<br/>
- Nota de Crédito de Compra<br/>
- Factura de Compra Registrada<br/>
- Nota de Crédito de Compra Registrada<br/>
- Entradas de Libro Mayor del Proveedor<br/>
- Entradas de Libro Mayor Registradas<br/>
- Entradas de IVA Registradas<br/>
- Diario de Importación de ExFlow<br/>
- Estado de Aprobación de ExFlow<br/>
- Estado de Aprobación de ExFlow --> Verificar Cambios <br/>
- Historial de Estado de Aprobación de ExFlow<br/>

En el Diario de Importación, Estado de Aprobación e Historial de Estado de Aprobación, es posible seleccionar múltiples documentos antes de usar el atajo Ctrl+I:

![Seleccionar múltiples documentos](@site/static/img/media/image223.png)

Si se seleccionan varios archivos, entonces hay una opción para guardar un archivo comprimido que contenga archivos pdf para todos los documentos seleccionados en una ubicación especificada. Esta es una excelente manera de exportar muchos pdf si es necesario.

"Mostrar Imagen del Documento" también se puede alcanzar desde el menú bajo Relacionado.

## Encabezado del Documento - Mostrar más opciones

Haga clic en los ''tres puntos verticales'' en el Encabezado del Documento para encontrar opciones de acceso rápido.

!PEQUEÑO

### Abrir Tarjeta del Documento de Importación de ExFlow
Ir a: ***Administrar --> Tarjeta***<br/>
Abre la tarjeta del Documento de Importación de ExFlow para el documento seleccionado.

### Ver Tarjeta del Proveedor
Ir a: ***Proceso --> Tarjeta del Proveedor***<br/>
Este botón mostrará la Tarjeta del Proveedor para el documento seleccionado.
También se puede encontrar en ***Relacionado --> Documento --> Otros --> Importar o Reemplazar Imagen***

### Importar o Reemplazar Imagen
Ir a: ***Proceso --> Importar o Reemplazar Imagen***<br/>
Importe un archivo o reemplace una imagen en el menú contextual en el encabezado de la factura a través de la función \'\'Importar o Reemplazar Imagen\'\' en el Diario de Importación.<br/>
También se puede encontrar en ***Relacionado --> Archivos --> Otros --> Importar o Reemplazar Imagen***

![Diario de Importación de ExFlow](@site/static/img/media/image200.png)

### Configuración de Proveedor de ExFlow
Ir a: ***Proceso --> Configuración de Proveedor de ExFlow***<br/>
Este botón mostrará/editará la Configuración de Proveedor de ExFlow para el proveedor actual.

### Dimensiones
Ir a: ***Proceso --> Dimensiones***<br/>
Ver dimensiones establecidas en el documento seleccionado.

### Mostrar Detalles de Importación (OCR)
Ir a: ***Proceso --> Mostrar Detalles de Importación (OCR)***<br/>
Para poder ver los datos interpretados, marque la línea de documento correcta, vaya a "Mostrar Detalles de Importación (OCR)". Los datos no se pueden modificar.
Lea más sobre mostrar Detalles de Importación arriba.

### Mostrar Imagen del Documento (Ctrl + I)

Ir a: ***Relacionado --> Archivos --> Mostrar Imagen del Documento***<br/>
Para abrir el PDF en pantalla completa para un documento seleccionado o use el atajo (Ctrl+I).

"Mostrar Imagen del Documento" también se puede alcanzar desde el menú bajo Relacionado.

## Campos del Encabezado
Aquí se presentarán algunos campos ''buenos de saber''.

### Documento de bloque
En el encabezado del diario de importación, AP puede bloquear la creación o el registro de un documento.

#### Bloque para la creación
Bloquee el documento para que se cree en el diario de importación y envíelo para su aprobación.

#### Bloquear para publicar
Bloquear el documento para que no se registre en Estado de aprobación.

![ExFlow Import Journal](@site/static/img/media/import-journals-block-document-001.png)


### Aplica a Documento
Existe la posibilidad de aplicar pagos a un documento. Por ejemplo, para aplicar una Factura a una Nota de Crédito en las Entradas del Libro Mayor del Proveedor al registrar la Nota de Crédito.<br/>
Para usar estos campos, primero deben agregarse mediante personalización.

**Tipo de Documento Aplicado** especifica el tipo de documento registrado al que se aplicará este documento o línea de diario al registrar, por ejemplo, para registrar el pago.

**Número de Documento Aplicado** especifica el número del documento registrado al que se aplicará este documento o línea de diario al registrar, por ejemplo, para registrar el pago.

![Diario de Importación de ExFlow](@site/static/img/media/image214.png)

## Diario de Importación - Líneas de Importación

### Nueva Línea / Eliminar Línea
Ir a: **Líneas de Importación --> Administrar --> Nueva Línea / Eliminar Línea** <br/>

**Nueva Línea:** Agregar nueva línea para crear una nueva entrada. <br/>

**Eliminar Línea:** Eliminar la fila seleccionada. <br/>

![Diario de Importación de ExFlow -- Líneas de Importación](@site/static/img/media/image201.png)

### Líneas de Importación - Funciones
Ir a: **Líneas de Importación --> Línea**

![Diario de Importación de ExFlow -- Líneas de Importación](@site/static/img/media/import-journal-line-functions.png)

### Tarjeta de Orden de Compra
Si la línea del documento está emparejada con una orden de compra, haga clic en Tarjeta de Orden de Compra para abrir la tarjeta de orden de compra correspondiente.<br/>
Ir a: ***Líneas de Importación --> Línea --> Tarjeta de Orden de Compra***

### Dimensiones
Ir a: ***Líneas de Importación --> Línea --> Dimensiones***<br/>
Mostrar todas las dimensiones para la línea actual.

### Mostrar Propuesta de Aprobación
Muestra la propuesta de aprobación actual para la línea de documento seleccionada.<br/>
Ir a: ***Líneas de Importación --> Línea --> Mostrar Propuesta de Aprobación***

### Mostrar Reglas de Aprobación Disponibles
Ir a: ***Líneas de Importación --> Línea --> Mostrar Reglas de Aprobación Disponibles***<br/>
Esto mostrará todas las reglas de aprobación disponibles con la mayor prioridad en la parte superior.

### Asignación de Cargos de Artículos
Al usar Cargo (Artículo), la asignación se puede hacer de tres maneras. Desde el Diario de Importación, automáticamente o manualmente desde la Tarjeta de Factura.

Manualmente desde el Diario de Importación. <br/>
Ir a: ***Líneas de Importación --> Línea --> Asignación de Cargos de Artículos***<br/>

![Diario de Importación de ExFlow - Líneas de Importación - Asignación de Cargos de Artículos](@site/static/img/media/image204.png)

![Asignación de Cargos de Artículos (ExFlow Purch)](@site/static/img/media/image205.png)

Permitir que ExFlow asigne automáticamente el Cargo de Artículo. Agregue una opción sobre cómo calcular la asignación "Igualmente, Por Monto, Por Peso o Por Volumen" en el campo "Asignación Automática de Cargos de Artículos" bajo Emparejamiento de PO en la Configuración de ExFlow.

![Configuración de ExFlow - Emparejamiento de PO](@site/static/img/media/exflow-setup-po-matching-003.png)

Si se utiliza la Asignación Automática de Cargos de Artículos, el Cargo (Artículo) se asignará al ejecutar Verificar Cambios en el Estado de Aprobación y ya no será posible asignar manualmente desde el Diario de Importación.

La Asignación Automática de Cargos de Artículos también se puede configurar por proveedor. Vaya a la Configuración de Proveedor de ExFlow para asignar una opción de cargo de artículo específica para un proveedor específico, o para excluir a un proveedor específico (si esta función está habilitada en la Configuración de ExFlow) eligiendo la opción "Ninguno".

![Configuración de Proveedor de ExFlow - Asignación Automática de Cargos de Artículos](@site/static/img/media/exflow-vendor-setup-card-automatically-item-charge-001.png)

### Programación de Diferimientos
Ir a: ***Líneas de Importación --> Línea --> Programación de Diferimientos***<br/>

Si se especifica un código de plantilla de diferimiento, haga clic en Programación de Diferimientos para ver/editar la programación de diferimientos para la línea de documento seleccionada. En ExFlow, la Programación de Diferimientos se utiliza para el documento de aprobación de ExFlow y no para la factura de compra.

#### Mover Diferimiento Adelante
Ir a: **Configuración de ExFlow --> General --> Mover Diferimiento Adelante**

Mover Diferimiento Adelante moverá automáticamente los Diferimientos dentro de los períodos de diferimiento cerrados al siguiente abierto al registrar Facturas de Compra y Notas de Crédito de Compra, incluso si el documento está activo para la Aprobación de ExFlow o no.

Por ejemplo:
Permitir Registro de Diferimientos desde 2023-01-15.

Crear una Factura con Programación de Diferimientos para tres meses y Fecha de Inicio en la Fecha de Registro.

2023-01-15 // 5 000,00<br/>
2023-02-01 // 10 000,00<br/>
2023-03-01 // 10 000,00<br/>
2023-04-15 // 5 000,00

Después del cierre mensual, actualice Permitir Programación de Diferimientos a 2023-02-01.

Al registrar, Business Central preguntará si desea actualizar la Fecha de Inicio del Diferimiento y actualizar la Fecha de Registro a 2023-02-01.

Si responde sí, entonces Business Central moverá todos los períodos hacia adelante.

2023-02-01 // 10 000,00<br/>
2023-03-01 // 10 000,00<br/>
2023-04-01 // 10 000,00

Pero si en su lugar responde No y permite que ExFlow Mueva el Diferimiento Adelante, enero se agregará a febrero ya que este es el primer período de registro permitido para Diferimientos.

2023-02-01 // 15 000,00<br/>
2023-03-01 // 10 000,00<br/>
2023-04-15 // 5 000,00

### Obtener Líneas Interpretadas
Ir a: ***Líneas de Importación --> Línea --> Obtener Líneas Interpretadas***<br/>

Use esta función para recuperar líneas interpretadas perdidas o eliminadas. ExFlow poblará la factura con líneas interpretadas de los detalles de Importación OCR.

Si un usuario elimina accidentalmente todas las líneas, es posible usar "Obtener Líneas Interpretadas" para restablecer todos los cambios realizados después de la importación.

### Mostrar Reglas de Aprobación Disponibles
Ir a: ***Líneas de Importación --> Línea --> Mostrar Reglas de Aprobación Disponibles***<br/>
Esta función muestra todas las reglas de aprobación disponibles para la línea de documento seleccionada.

### Mostrar Propietarios de Dimensiones Actuales
Ir a: ***Líneas de Importación --> Línea --> Mostrar Propietarios de Dimensiones Actuales***<br/>
Ver los Propietarios de Dimensiones de ExFlow para la lista actual de aprobadores sugeridos.

### Mostrar Presupuesto
Si el Control de Presupuesto de G/L está activado, es posible ver el cálculo.
Lea más en la sección [***Control de Presupuesto de G/L***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/gl-budget-control)

## Verificaciones de Creación de Documentos

### Coincidir Moneda del Proveedor
Ir a: **Configuración de ExFlow --> Verificaciones de Creación de Documentos --> Coincidir Código de Moneda del Proveedor**

Si se necesita que ExFlow verifique que el código de moneda en cada factura importada coincida con el código de moneda predeterminado del proveedor, entonces se debe activar la configuración "Coincidir Moneda del Proveedor". Encuentre la configuración en Verificaciones de Creación de Documentos en la Configuración de ExFlow.

![Configuración de ExFlow - Verificaciones de Creación de Documentos](@site/static/img/media/exflow-setup-doc-creation-checks-001.png)

Cuando esta configuración está activa, ExFlow dará una advertencia para cada documento en el Diario de Importación donde la moneda del documento difiera de la moneda predeterminada del proveedor.

![Diario de Importación de ExFlow](@site/static/img/media/image227.png)

![Diario de Importación de ExFlow - Mensajes de advertencia](@site/static/img/media/image228.png)

ExFlow compara el contenido del campo Moneda en el documento en el Diario de Importación con la moneda predeterminada del proveedor (es decir, el contenido del campo Moneda en la tarjeta del proveedor).<br/>
Si el proveedor tiene una moneda en blanco (vacía), entonces ExFlow no realiza ninguna validación.

### Permitir Diferencia de IVA
Ir a: **Configuración de ExFlow --> Verificaciones de Creación de Documentos --> Asignación Automática de Diferencia de IVA para Creación**<br/>

Si Permitir Diferencia de IVA está activado en la Configuración de Compras y Pagos, el Redondeo de IVA se puede agregar en Estadísticas en el Diario de Importación antes de crear el documento.<br/>
La Diferencia Máxima de IVA se manejará mediante configuraciones en la Configuración de Contabilidad General o desde el Código de Moneda actual.

![Diario de Importación de ExFlow - Estadísticas de Factura de Compra](@site/static/img/media/image229.png)

A través de configuraciones, ExFlow puede asignar la Diferencia de IVA automáticamente. Entonces la Diferencia de IVA se distribuirá proporcionalmente a todas las líneas.

Active **"Asignación Automática de Diferencia de IVA para Creación"** en la Configuración de ExFlow en la sección Verificación de Creación de Documentos para el Diario de Importación.

Active **"Asignación Automática de Diferencia de IVA para Registro"** en la Configuración de ExFlow en la sección Verificaciones de Registro de Documentos para el Estado de Aprobación bajo Verificaciones de Registro de Documentos.

**Recomendado usar ambos.**<br/>
ExFlow agregará automáticamente la Diferencia de IVA si la diferencia de IVA está dentro de las configuraciones en la Configuración de Contabilidad General o desde el Código de Moneda actual.

Si el monto se cambia durante el flujo de aprobación, Business Central eliminará la Diferencia de IVA en la línea actualizada. Entonces ExFlow puede reasignar automáticamente al ejecutar Verificar Cambios en el Estado de Aprobación.

Si el monto del IVA en las líneas se cambia manualmente en la Tarjeta después de la creación del documento, entonces ExFlow preguntará:

*"¿Desea actualizar el Monto del IVA en el Estado de Aprobación de ExFlow desde el Monto del IVA de las líneas?"*<br/>
Responda Sí, para actualizar el monto total del IVA en el Estado de Aprobación.

![Factura de Compra o Tarjeta de Nota de Crédito - Actualizar Monto del IVA](@site/static/img/media/image230.png)

**Configuraciones recomendadas:**<br/>
Si trabaja con la Asignación Automática de Diferencia de IVA y Redondeo en Facturas/Notas de Crédito al registrar. Agregue SIN IVA en la Cuenta G/L utilizada para el redondeo.

La diferencia de IVA no está permitida en documentos que incluyan líneas con SOLO IVA. Solo si el IVA se calcula en las líneas.

La Asignación Automática anulará el Monto del IVA agregado manualmente en Estadísticas.

## FactBoxes en el Diario de Importación
A la derecha en el Diario de Importación hay útiles FactBoxes.

### Vista Previa de PDF
Cambiar tamaño en Vista Previa de PDF Presione - / + para disminuir o aumentar el tamaño del PDF.

![Diario de Importación de ExFlow](@site/static/img/media/image215.png)

Restablecer tamaño de FactBox Haga clic en "Restaurar".

![Diario de Importación de ExFlow - Vista Previa de PDF](@site/static/img/media/image216.png)

"Reducir Zoom", "Aumentar Zoom" y Restablecer Zoom

![Diario de Importación de ExFlow - Vista Previa de PDF](@site/static/img/media/image217.png)

Abra el PDF en una nueva pestaña separada para obtener una mejor vista de la imagen del documento.
![ExFlow Import Journal - PDF Preview](@site/static/img/media/open-new-001.png) 

Cambiar número de página del PDF use "Botones de Registro".

![Diario de Importación de ExFlow - Vista Previa de PDF](@site/static/img/media/image218.png)

Abrir archivo PDF en tamaño completo.

Ir a: ***Relacionado --> Archivos --> Mostrar Imagen del Documento (Ctrl+I)***

### Panel de Discusión (El mensaje se enviará cuando se cree el documento)
Cuando se ha agregado y enviado un comentario en el Panel de Discusión desde un documento en el Diario de Importación, solo se puede ver en el FactBox a la derecha marcado con el ID de Usuario creador, Fecha y Hora.

Si se menciona a un Usuario de ExFlow que es un usuario del sistema usando @, la notificación se mostrará en Business Central al iniciar sesión. También se puede enviar un mensaje de correo electrónico, pero no hasta que se cree el documento debido a que los Usuarios Web de ExFlow no pueden ver documentos o comentarios en el Diario de Importación.

En ExFlow Web el mensaje se mostrará en el Chat del Documento después de que se haya creado.

Lea más sobre configuraciones y cómo usar el Panel de Discusión en la sección [***Panel de Discusión / Chat y Comentarios de Línea***](https://docs.signupsoftware.com/business-central/docs/user-manual/approval-workflow/notifications-in-business-central#discussion-panel--chat-and-line-comments)

### Archivos de Documentos Entrantes
Ir a: ***FactBox --> Archivos de Documentos Entrantes --> Adjuntar Archivo***<br/>
Agregar Archivo Adjunto

Haga clic en "Elegir", busque el archivo para adjuntar y haga clic en "Abrir".

![Diario de Importación de ExFlow](@site/static/img/media/image219.png)

### Propuesta de Aprobación
Ver Aprobadores para la Línea de Documento actual.
Desde: ***Propuesta de Aprobación --> Mostrar Propuesta de Aprobación***<br/>
Los aprobadores se pueden agregar manualmente. Esto solo debe usarse en ocasiones especiales.

![Diario de Importación de ExFlow, FactBox, Propuesta de Aprobación](@site/static/img/media/image220.png)

![Propuesta de Aprobación](@site/static/img/media/image221.png)

### Detalles del Documento
Si el monto en el encabezado del documento y el monto total en las líneas del documento no tienen el mismo valor, entonces los Detalles del Documento pueden ayudar a ver la cantidad de diferencia y si se debe al Costo Unitario Directo excl. IVA, Costo Unitario Directo incl. IVA, monto del IVA o Prepago.

![Diario de Importación de ExFlow, FactBox, Propuesta de Aprobación](@site/static/img/media/image222.png)

### Mensajes de Advertencia
Si el Mensaje de Acción muestra "¡Hay mensajes de advertencia que aún no se han aceptado!" el mensaje se ve en el FactBox "Mensajes de advertencia". Realice los cambios apropiados o "Aceptar todas las advertencias" como en la imagen a continuación.

![Diario de Importación de ExFlow](@site/static/img/media/image224.png)

![Diario de Importación de ExFlow, FactBox, Mensajes de advertencia](@site/static/img/media/image225.png)

### Estadísticas del Proveedor e Historial del Proveedor de Compra
Encuentre información del Proveedor en los FactBoxes de Estadísticas del Proveedor e Historial del Proveedor de Compra.

!FactBox

## Columnas Web

### Descripción 2

Es posible usar personalizar y agregar el campo Descripción 2 a las líneas del Diario de Importación.

Para facturas emparejadas con PO, el valor en el campo Descripción 2 de la Línea de Orden de Compra/Recibo fluirá a la línea de factura correspondiente en el diario de importación.

Lo mismo para facturas de Costos/Gastos, el campo Descripción 2 estará disponible en el diario de importación para que los usuarios ingresen texto manualmente.

![Descripción 2](@site/static/img/media/import-journal-description-2.png)

Cualquier texto ingresado en el campo Descripción 2 será visible en ExFlow Web.

Para agregar la Columna Web Descripción 2, vaya a **Configuración de ExFlow --> Editar Columnas Web** y luego haga clic en ''Agregar Columna''.

![Descripción 2](@site/static/img/media/exflow-web-columns-add-description-2.png)

Lea más sobre Columnas Web en la sección [***ExFlow Web.***](https://docs.signupsoftware.com/business-central/docs/user-manual/technical/exflow-web#exflow-web)
