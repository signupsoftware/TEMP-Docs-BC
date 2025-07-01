---
title: Notas de la Versión
sidebar_position: 5
hide_title: true
custom_edit_url: null
---
## Notas de la Versión

### ExFlow 25.0.0.0 – Notas de la Versión <br/> 

#### Tipo de Versión
Versión Principal

#### Fecha de Lanzamiento
2025-04-17

#### Información de la Versión
Requiere BC 25.0 o posterior 

#### Correcciones

| Versión | Área | Descripción |
| :----------- | :-------------- | :-------------- |
| 25.0.246.47 | General | Se añadieron eventos que permiten a desarrolladores externos añadir campos adicionales al filtro de columnas para la exportación/importación de Excel del diario de importación.
| 25.0.246.47 | Importar diario | Se solucionó el problema por el cual las dimensiones del encabezado del diario de importación no se actualizaban correctamente para el código de referencia.
| 25.0.246.47 | ExFlow Web | Se solucionó el problema por el cual el aprobador omitía la nueva línea al usar la función "Proponer siempre nuevos aprobadores" y dividir la línea en ExFlow Web.
| 25.0.246.47 | Proveedor de licencias | Correcciones al optar por la suscripción a la licencia LP v3. Se mejoró el flujo del proceso para permitir que los usuarios se registren para una prueba de la nueva licencia v3.
| 25.0.246.47 | Pedido de venta | Se solucionó el problema por el cual las fechas de entrega de línea no se validaban en la configuración de mapeo de campos y, por lo tanto, no se actualizaban correctamente en la importación de órdenes de venta.
| 25.0.246.47 | Pedido de venta | Se solucionó el problema de funcionamiento incorrecto de los campos de dirección personalizados.
| 25.0.246.47 | Pedido de venta | Se añadieron nuevos campos Misc a la plantilla EDC de pedido de venta ExFlow (DED personalizado para NA). También se añadió una nueva configuración para restablecer la configuración de asignación de campos.
| 25.0.246.47 | Gestión de funciones | Se solucionó el problema de que la actualización de datos solo se programaba en la empresa actual en la nueva activación de Coincidencia de nuevos pedidos. También se añadieron mensajes mejorados para la activación/desactivación de funciones.
|25.0.246.31|4PS	|Diario de Importación - Copiar Valores de Cabecera a Factura/Nota de Crédito
|25.0.246.31|Documentos Confidenciales	|Prevención de escenario donde un documento confidencial podría ser descargado
|25.0.246.31|Script de Actualización	|Convierte campo Importe de Prueba vacío a 'De Configuración ExFlow' en Configuración de Proveedor de ExFlow
|25.0.246.31|Diario de Importación	|Si la configuración "Ignorar Líneas OCR" está siempre activa - El documento importado va al diario incorrecto
|25.0.246.19| Nuevo Emparejamiento de Pedidos |Solucionado problema donde Emparejar Documentos con: Pedido no convierte a Pedido y Recepción en las actuales Tarjetas de Configuración de Proveedor
|25.0.246.19| Configuración |Contabilización de PC con Asignación de Cargo de Artículo - "No se encontró Movimiento de Artículo" 
|25.0.246.19| Configuración |Solucionado problema para cuando los Envíos de Devolución de Compra son recogidos pero faltan cantidades
|25.0.246.14|4PS		|Cuentas WIP no eran visibles en la lista desplegable de ExFlow Web
|25.0.246.14|General		|Eventos de Recepción Automática añadidos 
|25.0.246.14|Script de Actualización		| Solucionado problema de validación de idioma en el script de actualización 
|25.0.246.14|Configuración |  Enlaces rotos de ''Leer Más'' fueron arreglados en ambos asistentes de emparejamiento de pedidos
| 25.0.246.7 | General | Usuario SISTEMA (trabajo del sistema) se cambia al usuario actual
| 25.0.246.7 | Proveedor de Licencias v3 | Se han añadido mejoras
| 25.0.246.7 | Proveedor de Licencias v3 | Cambio de nombre de SignUp a ExFlow
| 25.0.246.7 | Proveedor de Licencias | Se ha añadido enlace a la página en la vista general de Configuración de ExFlow AP
| 25.0.246.7 | 4PS | Diario de Importación - Se ha resuelto la creación de Líneas de Diferencia

<br/>

#### Nuevas Funcionalidades

| ID | Área | Descripción |
| :----------- | :-------------- | :-------------- | 
| 24166, 46179 | Nuevo Emparejamiento de Pedidos | Funcionalidad de emparejamiento de pedidos completamente nueva y enriquecida junto con un lugar de trabajo dedicado para Compradores
| 43932, 45416 | Proveedor de Licencias y Gestión de Funcionalidades | Un nuevo Proveedor de Licencias para soportar futuros modelos de licencia junto con Gestión de Funcionalidades para tener un control más granular sobre qué funcionalidades están habilitadas en diferentes escenarios
| 39209 | Nuevo Emparejamiento de Pedidos | Una nueva experiencia guiada por asistente para configurar ExFlow AP reemplazando muchas tareas manuales de ediciones anteriores
| 44723 | Configuración | Funcionalidad mejorada y seguimiento de los registros de Correo Electrónico de ExFlow
| 34279 | Localización en finlandés | Mejora en la localización FI: Número de Referencia Finlandés a Factura Propia
| 43229 | Estado de Aprobación | Dirección de Remisión predeterminada en la Tarjeta de Proveedor - no se muestra en las facturas de ExFlow
| 44384 | Web | Habilitar cambios de codificación para Documentos Confidenciales
| 44430 | Orden de Venta | Añadir nueva configuración en la Configuración de Importación de Orden de Venta de ExFlow - Mapeo de Orden de Venta
| 44877 | Técnico | Eventos requeridos para campos de mapeo de importación OCR personalizados
| 45879 | Nuevo Emparejamiento de Pedidos | Crear Asistente para el nuevo emparejamiento de PO (pedido)
| 45901 | Configuración | Asistente de Inicio Rápido - Añadir opción para cancelar o ejecutar más tarde
| 46121 | Diario de Importación | Mapeo del % VAT importado hacia grupos de publicación de productos VAT

<br/>

#### Mejoras

| ID| Área | Descripción |
| :----------- | :-------------- | :-------------- | 
| 44781 | Estado de Aprobación | Verificar documentos al usar la re-facturación en sueco - Mensaje de acción
| 45040 | Diario de Importación | Error de VAT en facturas NA con líneas gravables y no gravables
| 45483 | Estado de Aprobación | Actualización por lotes de la fecha de publicación - Fecha de publicación de diferimiento no activada - Actualiza el calendario de diferimiento
| 45599 | Diario de Importación | Asignación de Cargo de Artículo no funciona correctamente cuando la asignación se realiza antes de que el documento sea verificado
| 45157 | Orden de Venta | Importación de Ventas ExFlow - Crear Orden de Venta - Crea orden sin número de cliente - No se crean líneas de venta
| 45573 | Diario de Importación | Importación de Archivos ExFlow - Importar - La importación falla si hay PDFs sin xml
| 45111 | Diario de Importación | Mensaje de Error: Ocurrió un error y la transacción se detuvo. Contacte a su administrador o socio para obtener más ayuda
| 45361 | Técnico | Comunicación con Servicios - GetUserAgent - Contiene caracteres inválidos debido a que el ISV los añadió
| 41731 | ExFlow Web | Cambiar Tipo de Línea - varios problemas
| 46254 | Diario de Importación | Código de Compra de ExFlow y Misceláneas 1 y 2 - Misceláneas no excluidas al crear líneas
| 46025 | Diario de Importación | Abrir Visor de PDF en nueva pestaña - la imagen debe ser redimensionada cada vez que se abre y el PDF movido al Visor de PDF de la FactBox
| 43262 | PGS | PGS Cargo - PGS Cargo permanece sin marcar cuando se cambia el No. de G/L
| 45437 | ExFlow Web | ExFlow web - cambiar tipo de línea - El número estará en blanco

<br/> 
También se manejan correcciones de errores menores en la versión, pero no están en las notas de la versión.
<br/>

### ExFlow 24.1.0.0 – Notas de la Versión <br/>  

#### Tipo de Versión
Versión Menor 

#### Fecha de Lanzamiento
2024-12-10 

#### Información de la Versión
Requiere BC 24.0 o posterior 

#### Correcciones

| Versión | Área | Descripción | 
| :----------- | :-------------- | :-------------- | 
| 24.1.263.48 | General | Cambiar procedimiento interno CreateInvoicePeriod a procedimiento externo
| 24.1.263.48 | 4PS | Grupo de Aprobación de ExFlow - Opciones faltantes en Tipo de Aprobación Dinámico
| 24.1.263.48 | 4PS | Factura de Compra - Importe no actualizado
| 24.1.263.44 | 4PS | Error al crear un nuevo Usuario de ExFlow
| 24.1.263.44 | Configuración de Proveedor | Declaración incorrecta Siempre estaba configurada en la Sugerencia de Codificación Automática, cuando el registro de configuración de proveedor de ExFlow no existía
| 24.1.263.39 | 4PS | Nuevos eventos para 4PS añadidos
| 24.1.263.32 | 4PS | Nuevos eventos para 4PS añadidos
| 24.1.263.32 | Pebblestone | Problema al usar Pebblestone y ExFlow web
| 24.1.263.32 | Diario de Importación | Problema con Dimensiones Globales que se comportan incorrectamente al ser seleccionadas en el Diario de Importación
| 24.1.263.28 | 4PS | Nuevos eventos para 4PS y códigos de compra de ExFlow añadidos
| 24.1.263.28 | Asignación de Cargo de Artículo | Problema relacionado con la Asignación de Cargo de Artículo que no funciona antes de que el documento sea verificado
| 24.1.263.22 | Estado de Aprobación | El problema con los códigos de diferimiento en algunos escenarios específicos obteniendo una fecha de publicación incorrecta al ejecutar la función "Actualizar Fecha de Publicación por Lotes"
| 24.1.263.22 | Diario de Importación | El problema relacionado con la importación de solo archivos PDF a través de la Configuración de Importación de Archivos de ExFlow
| 24.1.263.22 | Orden de Venta | El problema de que no se podían crear Órdenes de Venta en algunos escenarios
| 24.1.263.18 | Re-Facturación | Problema donde en algunos casos el VAT era incorrecto en las Facturas de Venta generadas a partir de la Re-facturación
| 24.1.263.18 | Actualización | Problema donde ExFlow no podía ser actualizado a la última versión
| 24.1.263.18 | Progressus | Problema al ejecutar Progressus y ExFlow resultando en que a veces no se podía codificar la factura
| 24.1.263.9 | Mapeo de Importación OCR | Dos nuevos eventos disponibles para Mapeo de Importación OCR
| 24.1.263.9 | Estado de Aprobación | La Re-Facturación no funcionaba con el idioma sueco
| 24.1.263.9 | Progressus | Problema al usar ExFlow AP y Progressus donde a veces el campo "facturable" no se comportaba correctamente
| 24.1.263.9 | Publicación Preliminar | Problema con el Grupo de Publicación de Negocios VAT que no tiene una cuenta de redondeo al usar la Publicación Preliminar ahora funciona nuevamente como se esperaba

<br/> 

#### Nuevas Funcionalidades 

| ID| Área | Descripción | 
| :----------- | :-------------- | :-------------- |  
| 30556 | Diario de Importación | ExFlow mejorado para mapear hasta 8 campos de Cargo Misceláneo a códigos de compra
| 44644 | Diario de Importación | Nuevo evento añadido para la asignación de cargo de artículo en el Diario de Importación
| 42817 | Estado de Aprobación | Se añadió comando de acceso directo para Vista Previa de Publicación en Estado de Aprobación
| 44220 | Diario de Importación | Visor de PDF en navegador separado soportado nuevamente
| 32864 | Estado de Aprobación | FactBoxes de estadísticas de proveedores añadidas en Estado de Aprobación y Historial de Estado de Aprobación
| 40207 | Diario de Importación | Mejor coincidencia contra monedas en Validación de Pago
| 43588 | Estado de Aprobación | Se añadió función para revertir toda la codificación en documentos realizados en la web en Estado de Aprobación
 
<br/> 

#### Mejoras

| ID| Área | Descripción | 
| :----------- | :-------------- | :-------------- |  
| 43997	| Web		| Se resolvió el problema de que a veces la advertencia de tener un número mínimo de aprobadores no advertía 
| 44100	| Configuración		| Actualizaciones realizadas a EX BASE donde faltaban algunos permisos 
| 44288	| Diario de Importación	| Se solucionó el problema de que en algunos casos un recibo no podía ser emparejado cuando el mismo artículo se usaba en múltiples líneas 
| 42949	| Diario de Importación	| Se solucionó el problema de que a veces cuando se emparejaba un contrato, las dimensiones y la aprobación no seguían las configuraciones 
| 42062	| Web		| Se solucionó el problema cuando a veces no era posible aprobar Cargos de Artículo en la Web 

<br/>  

También se manejan correcciones de errores menores en la versión, pero no están en las notas de la versión. 

<br/> 

### ExFlow 24.0.0.0 – Notas de la Versión <br/> 
#### Tipo de Versión
Versión Principal

#### Fecha de Lanzamiento
2024-09-13

#### Información de la Versión
Requiere BC 23.0 o posterior 

#### Correcciones

| Versión | Área | Descripción |
| :----------- | :-------------- | :-------------- |
| 24.0.310.36 | Usuarios de ExFlow | El Correo Electrónico de Autenticación y el Correo Electrónico de Contacto ahora se pueden editar en los usuarios de ExFlow, esto es para clientes que no están usando office
| 24.0.310.33 | ExFlow Web | La búsqueda de administrador no puede abrir documentos en ExFlow web
| 24.0.310.31 | Grupo de Cuentas Automáticas | Problema relacionado con los Grupos de Cuentas Automáticas para BC 25
| 24.0.310.31 | Grupos de Entra | Grupos de Entra no se actualizan correctamente con ExFlow
| 24.0.310.31 | Búsqueda en Web de ExFlow | Mejora en la búsqueda de filtro de dimensión en ExFlow Web
| 24.0.310.20 | FI - Diario de Importación | Los clientes finlandeses ahora pueden importar líneas nuevamente, y el cálculo del Importe de Línea es correcto
| 24.0.310.20 | Re-Facturación | Nuevo evento añadido para habilitar más personalización de la Re-Facturación
| 24.0.310.20 | ExFlow Web | Múltiples mejoras en la búsqueda en ExFlow Web al usar filtros de dimensión en el Usuario de ExFlow
| 24.0.309.15 | Diario de Importación | Ahora se pueden manejar descuentos de línea negativos en el Diario de Importación
| 24.0.309.15 | Número Mínimo de Aprobadores | En algunos casos específicos la opción "Número Mínimo de Aprobadores" no funcionaba como se esperaba
| 24.0.310.12 | Diario de Importación | Posibilidad de cambiar descuentos incorrectos
| 24.0.310.12 | Emparejamiento de Pedidos | Correcciones menores al emparejamiento de pedidos donde ExFlow a veces no podía identificar la línea correcta
| 24.0.310.12 | Permisos | Conjuntos de permisos de ExFlow no contienen suficientes permisos

<br/>

#### Nuevas Funcionalidades

| ID | Área | Descripción |
| :----------- | :-------------- | :-------------- | 
| 31845 | Estado de Aprobación | Se añadió FactBox de PDF en la Página de Verificar Cambios
| 32005 | Recordatorios por Correo Electrónico | Se añadió nuevo Recordatorio por Correo Electrónico para Documentos En Espera
| 36272 | Informes | Mejoras en el Informe de Estado de Aprobación, ahora soporta diferentes monedas de una mejor manera al recalcular las líneas
| 36766 | Recordatorios por Correo Electrónico | Se añadió nuevo Recordatorio por Correo Electrónico, los Usuarios que crean la Orden de Compra/Quote ahora pueden recibir un recordatorio de que el documento ha sido completamente aprobado
| 38927 | Configuración | Se añadió posibilidad de bloquear la contabilización de documentos fuera de ExFlow, es decir, crear una Factura de Compra y luego contabilizarla eludiendo la necesidad de aprobación
| 40503 | Estado de Aprobación | Nueva función más grande añadida, establecer filtros sobre cuáles son los valores permitidos para ser cambiados en la web, si se establece ahora no se necesita verificación manual para estos valores al ejecutar Verificar cambios
| 39935 | Órdenes de Venta ExFlow | Soporte añadido para Dirección de Envío Personalizada
| 41637 | Órdenes de Venta ExFlow | Se añadió la opción de usar Serie de Números única para Órdenes de Venta creadas a través de Órdenes de Venta ExFlow
| 41640 | Órdenes de Venta ExFlow | Posibilidad de staging añadida para documentos que no deben ser creados automáticamente y en su lugar se ponen en espera, creando más control para Clientes específicos

<br/>

#### Mejoras

| ID | Área | Descripción |
| :----------- | :-------------- | :-------------- | 
| 40887 | Publicación Preliminar | Se solucionó el problema al trabajar con publicación preliminar y diferimientos, ahora el reverso se realiza en la fecha correcta
| 40197 | Localización en finlandés | Se resolvió el problema en la localización finlandesa donde en algunos casos se podía crear el documento sin un mensaje
| 40465 | Configuración | Se solucionó un problema en la Exportación/Importación de Configuración de ExFlow donde las dimensiones faltaban en los códigos de compra
| 40419, 40422 | Localización en español | Se solucionaron dos problemas en el lado técnico donde faltaban ID y se añadió el tipo de ID en el Diario de Importación
| 37501 | Configuración | Se resolvió el problema donde el Gerente de Proyecto no podía ser recuperado en flujos de aprobación dinámicos

<br/> 

### ExFlow 23.2.0.0 – Notas de la Versión <br/> 
#### Tipo de Versión
Versión Menor

#### Fecha de Lanzamiento
2024-05-24

#### Información de la Versión
Requiere BC 23.0 o posterior  

#### Correcciones

| Versión | Área | Descripción |
| :----------- | :-------------- | :-------------- |
| 23.2.34.17 | Publicación Preliminar | El problema con los diferimientos y la publicación preliminar
| 23.2.34.17 | Actualización | Las actualizaciones de BC fallan a veces debido a datos de ExFlow
| 23.2.34.20 | Informe de Estado de Aprobación | El problema cuando el informe de Estado de Aprobación de ExFlow no creaba el saldo periódico restante en la cuenta especificada
| 23.2.34.20 | Configuración | Método expuesto ''AddDocumentFromBlobs'' que reemplaza el método obsoleto ''AddDocumentFromStreams''
| 23.2.34.28 | América del Norte <br/> Grupo de Publicación Gen. | En entornos NA ExFlow requería que el Grupo de Publicación Gen. estuviera poblado en la Cuenta de G/L y Líneas de Activo Fijo en el Diario de Importación
| 23.2.34.28 | Publicación Preliminar | Los documentos publicados preliminarmente no se pueden revertir debido a la tasa de cambio ajustada en la entrada del libro mayor del proveedor. La publicación de la tasa de cambio ajustada ahora se revertirá en la fecha de publicación final
| 23.2.34.28 | Permisos | Un problema donde los usuarios con el conjunto de permisos EX ACCOUNTANT fueron denegados acceso a los Lotes de Diario de Importación de ExFlow
| 23.2.34.28 | Diario de Importación | Los descuentos de línea se calculaban dos veces en el Diario de Importación
| 23.2.34.28 | Documentos de Aprobación de BC | Aprobando documentos en Business Central con la misma funcionalidad que ExFlow Web respecto a la configuración en las Columnas de ExFlow "Actualizar Grupo de Publicación de Productos VAT" y "Actualizar Grupo de Publicación Gen."

