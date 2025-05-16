---
title: Notas de la Versión
sidebar_position: 5
hide_title: true
custom_edit_url: null
---
## Notas de la Versión


### ExFlow 25.0.0.0 – Notas de la Versión <br/>
**Tipo de versión:** <br/>
Versión mayor

**Fecha de lanzamiento:** <br/>
2025-04-17

**Información de la versión:** <br/>
Requiere BC 25.0 o posterior <br/>

#### Correcciones

| Versión | Área | Descripción |
| :----------- | :-------------- | :-------------- |
| 25.0.246.7 | General | El usuario SYSTEM (trabajo del sistema) se ha cambiado al usuario actual.
| 25.0.246.7 | Proveedor de licencias v3 | Se han añadido mejoras.
| 25.0.246.7 | Proveedor de licencias v3 | Cambio de nombre de SignUp a ExFlow.
| 25.0.246.7 | Proveedor de licencias | Se ha añadido un enlace a la página de configuración de ExFlow AP.
| 25.0.246.7 | 4PS | Se ha solucionado el problema de la creación de líneas de diferencia en el diario de importación.
|25.0.246.14|4PS |Las cuentas WIP no eran visibles en la lista desplegable de ExFlow Web
|25.0.246.14|General |Se añadieron eventos de recepción automática
|25.0.246.14|Script de actualización | Se solucionó un problema de validación de idioma en el script de actualización
|25.0.246.14|Gestión de funciones | Se añadió el estado de actualización de datos y se solucionó el problema con las opciones de filtro del diario de importación
|25.0.246.14|Configuración | Se solucionaron los enlaces "Leer más" que no funcionaban en ambos asistentes de coincidencia de pedidos
|25.0.246.19| Coincidencia de nuevos pedidos |Se solucionó el problema por el cual la función "Asociar documentos con: Pedido" no se convertía en Pedido y Recibo en las tarjetas de configuración de proveedores actuales.
|25.0.246.19| Configuración |Contabilización de órdenes de compra con asignación de cargo por artículo: "No se encontró ninguna entrada en el libro mayor de artículos".
|25.0.246.19| Configuración |Se solucionó el problema que sucedía cuando se recolectaban envíos de órdenes de devolución de compra, pero faltaban cantidades.


**Nuevas funcionalidades** <br/>

| ID | Área | Descripción |
| :----------- | :-------------- | :-------------- |
|24166, 46179 |Nueva conciliación de pedidos |Funcionalidad completamente nueva y mejorada de conciliación de pedidos junto con un entorno de trabajo dedicado para compradores.|
|43932, 45416 |Proveedor de licencias y gestión de funciones |Un nuevo proveedor de licencias para soportar futuros modelos de licenciamiento junto con gestión de funciones para tener un control más detallado sobre qué funciones se habilitan en diferentes escenarios.|
|39209 |Nueva conciliación de pedidos |Una nueva experiencia guiada por asistente para configurar ExFlow AP, reemplazando muchas tareas manuales de versiones anteriores.|
|44723 |Configuración |Funcionalidad y seguimiento mejorados en los registros de correo electrónico de ExFlow.|
|34279 |Localización finlandesa |Mejora en la localización de FI: número de referencia finlandés en la autofactura.|
|43229 |Estado de aprobación |Dirección de envío predeterminada en la ficha del proveedor: no se muestra en las facturas de ExFlow.|
|44384 |Web |Habilitar cambios de codificación para documentos confidenciales.|
|44430 |Pedido de ventas |Nueva configuración en la importación de pedidos de ventas de ExFlow: asignación de pedidos de ventas.|
|44877 |Técnico |Eventos requeridos para campos personalizados en el mapeo de importación OCR.|
|45879 |Nueva conciliación de pedidos |Crear asistente para la nueva conciliación de órdenes de compra (PO).|
|45901 |Configuración |Asistente de inicio: añadir opción para cancelar o ejecutar más tarde.|
|46121 |Diario de importación |Mapeo del % de IVA importado hacia los grupos de contabilización de productos de IVA.|

**Mejoras/Ampliaciones** <br/>

| ID | Área | Descripción |
| :----------- | :-------------- | :-------------- |
|44781 |Estado de aprobación |Verificar documentos al usar refacturación en sueco – mensaje de acción.|
|45040 |Diario de importación |Error de IVA en facturas NA con líneas imponibles y no imponibles.|
|45483 |Estado de aprobación |Actualización por lotes de fecha de contabilización – la fecha de devengo no se activa – actualiza el cronograma de devengo.|
|45599 |Diario de importación |Asignación de cargos de artículo no funciona correctamente si se realiza antes de verificar el documento.|
|45157 |Pedido de ventas |Importación de ventas de ExFlow – Crear pedido de ventas – crea pedido sin número de cliente – no se crean líneas de venta.|
|45573 |Diario de importación |Importación de archivos ExFlow – la importación falla si hay archivos PDF sin XML.|
|45111 |Diario de importación |Mensaje de error: Ocurrió un error y la transacción se detuvo. Contacte con su administrador o socio para más ayuda.|
|45361 |Técnico |Comunicación con servicios – GetUserAgent – contiene caracteres inválidos añadidos por el ISV.|
|41731 |Web |ExFlow Web – cambiar tipo de línea – varios problemas.|
|46254 |Diario de importación |Código de compra ExFlow y Misc 1 & 2 – los campos Misc no se excluyen al crear líneas.|
|46025 |Diario de importación |Abrir visor de PDF en nueva pestaña – la imagen debe redimensionarse cada vez que se abre y el PDF se mueve al visor de PDF en el FactBox.|
|43262 |PGS |PGS cobrable – permanece sin marcar cuando se cambia la cuenta G/L.|
|45437 |Web |ExFlow Web – cambiar tipo de línea – el número queda en blanco.|

<br/>
También se han corregido errores menores que no se detallan en estas notas de versión.



### ExFlow 24.1.0.0 – Notas de la Versión <br/> 
**Tipo de Lanzamiento:** <br/>
Lanzamiento Menor

**Fecha de Lanzamiento:** <br/>
2024-12-10


**Información del Lanzamiento:** <br/>
Requiere BC 24.0 o posterior <br/>

Cambiar el procedimiento interno CreateInvoicePeriod a un procedimiento externo se agregó en 24.1.263.48

4PS - ExFlow Approval Group - Opciones faltantes en el tipo de aprobación dinámica se resolvió en 24.1.263.48

4PS - Factura de compra - El importe no actualizado se resolvió en 24.1.263.48

4PS - El error al crear un nuevo usuario de ExFlow se resolvió en 24.1.263.44

La instrucción incorrecta Siempre se estableció en la sugerencia de codificación automática, cuando el registro de configuración del proveedor de ExFlow no existía se resolvió en 24.1.263.44

Nuevos eventos para 4PS añadidos en 24.1.263.39

Nuevos eventos para 4PS añadidos en 24.1.263.32

El problema al usar Pebblestone y ExFlow web se resuelve en 24.1.263.32

El problema con las dimensiones globales que se comportan incorrectamente al seleccionar en el diario de importación se resuelve en 24.1.263.32

Nuevos eventos para 4PS y códigos de compra de ExFlow agregados en 24.1.263.28

El problema relacionado con la asignación de cargo de artículo que no funciona antes de que se verifique el documento se resuelve en 24.1.263.28

El problema con los códigos de diferimiento en algunos escenarios específicos que obtenían una fecha de publicación incorrecta al ejecutar la función "Actualización por Lotes de la Fecha de Publicación" se ha resuelto en 24.1.263.22

El problema relacionado con la importación de solo archivos PDF a través de la Configuración de Importación de Archivos de ExFlow se ha resuelto en 24.1.263.22

El problema de que no se podían crear Órdenes de Venta en algunos escenarios se ha resuelto en 24.1.263.22

El problema donde en algunos casos el IVA era incorrecto en las Facturas de Venta generadas a partir de la Re-facturación se ha resuelto en 24.1.263.18

El problema donde ExFlow no se podía actualizar a la última versión se ha resuelto en 24.1.263.18

El problema al ejecutar Progressus y ExFlow que resultaba en que a veces no se podía codificar la factura se ha resuelto en 24.1.264.18

Dos nuevos eventos disponibles para el Mapeo de Importación OCR - Añadido en 24.1.263.9

La re-facturación no funcionaba con el idioma sueco en el Estado de Aprobación - Resuelto en 24.1.263.9

Se ha corregido el problema al usar ExFlow AP y Progressus donde a veces el campo "cobrable" no se comportaba correctamente - Resuelto en 24.1.263.9

El problema con el Grupo de Publicación de IVA de Negocios que no tenía una cuenta de redondeo al usar la Publicación Preliminar ahora funciona nuevamente como se pretendía - Resuelto en 24.1.263.9

**Nuevas Funciones** <br/> 

| ID| Área | Descripción |
| :----------- | :-------------- | :-------------- | 
|30556	|Diario de Importación|	Se mejoró ExFlow para mapear hasta 8 campos de Cargos Misceláneos a códigos de compra.
|44644|	Diario de Importación	|Nuevo evento añadido para la asignación de cargos de artículos en el Diario de Importación
|42817| Estado de Aprobación	|Se añadió un comando de acceso directo para la Vista Previa de la Publicación en el Estado de Aprobación
|44220|	Diario de Importación	|El visor de PDF en un navegador separado es compatible nuevamente
|32864|	Estado de Aprobación|FactBoxes de estadísticas del proveedor añadidos en el Estado de Aprobación y en el Historial del Estado de Aprobación
|40207|	Diario de Importación	|Mejor coincidencia contra monedas en la Validación de Pagos
|43588|	Estado de Aprobación	|Se añadió una función para revertir toda la codificación en documentos realizados en la web en el Estado de Aprobación

<br/>

**Mejoras/Mejoras**<br/> 

| ID| Área | Descripción |
| :----------- | :-------------- | :-------------- | 
|43997|	Web|	Se resolvió el problema de que a veces la advertencia de tener un número mínimo de aprobadores no advertía.
|44100|	Configuración|	Se realizaron actualizaciones en EX BASE donde faltaban algunos permisos 
|44288|	Diario de Importación	|Se corrigió el problema de que en algunos casos no se podía coincidir un recibo cuando el mismo artículo se usaba en múltiples líneas
|42949|	Diario de Importación|	Se corrigió el problema de que a veces cuando se coincidía un contrato, las dimensiones y la aprobación no seguían las configuraciones.
|42062|	Web|	Se corrigió el problema cuando a veces no era posible aprobar Cargos de Artículos en la Web

<br/> 
Las correcciones menores de errores también se manejan en el lanzamiento pero no en las notas de la versión.
<br/>

### ExFlow 24.0.0.0 – Notas de la Versión <br/> 
**Tipo de Lanzamiento:** <br/>
Lanzamiento Mayor

**Fecha de Lanzamiento:** <br/>
2024-09-13


**Información del Lanzamiento:** <br/>
Requiere BC 23.0 o posterior <br/>

El correo electrónico de autenticación y el correo electrónico de contacto ahora se pueden editar en los usuarios de ExFlow, esto es para clientes que no usan Office - cambiado en 24.0.310.36 <br/>

El problema de búsqueda de administrador que no podía abrir documentos en ExFlow web se resolvió en 24.0.310.33 <br/>

El problema relacionado con los grupos de Auto Acc para BC 25 se resolvió en 24.0.310.31 <br/>

Los grupos de Entra no se actualizaban correctamente con ExFlow resuelto en 24.0.310.31 <br/>

La búsqueda de filtro de dimensión en ExFlow Web mejorada en la versión 24.0.310.31 <br/>

Los clientes finlandeses ahora pueden importar líneas nuevamente y el cálculo del Monto de la Línea es correcto - resuelto en 24.0.310.20<br/>

Se añadió un nuevo evento para permitir más personalización de la Re-Facturación - añadido en 24.0.310.20<br/>

Múltiples mejoras en la búsqueda en ExFlow Web al usar filtros de dimensión en el Usuario de ExFlow - mejorado en 24.0.310.20<br/>

Los descuentos negativos en línea ahora se pueden manejar en el Diario de Importación en 24.0.309.15<br/>

En algunos casos específicos, la opción "Número Mínimo de Aprobadores" no funcionaba como se pretendía, esto se ha resuelto en 24.0.309.15<br/>

Poder cambiar descuentos incorrectos se resolvió en 24.0.310.12<br/>

Correcciones menores en la coincidencia de órdenes donde a veces ExFlow no podía identificar la línea correcta se resolvió en 24.0.310.12<br/>

Los conjuntos de permisos de ExFlow que no contenían suficientes permisos se resolvieron en 24.0.310.12<br/>

<br/>

**Nuevas Funciones** 

| ID| Área | Descripción |
| :----------- | :-------------- | :-------------- | 
|31845|	Estado de Aprobación|	Se añadió FactBox de PDF en la Página de Verificación de Cambios
|32005|	Recordatorios por Correo Electrónico|	Se añadió un nuevo Recordatorio por Correo Electrónico para Documentos en Espera
|36272|	Informes|	Mejoras realizadas en el Informe de Estado de Aprobación, ahora soportando diferentes monedas de una mejor manera al recalcular las líneas 
|36766|	Recordatorios por Correo Electrónico	|Se añadió un nuevo Recordatorio por Correo Electrónico, los usuarios que crean la Orden de Compra/Cotización ahora pueden recibir un recordatorio de que el documento ha sido completamente aprobado.
|38927|	Configuración|	Se añadió la posibilidad de bloquear la publicación de documentos fuera de ExFlow, es decir, crear una Factura de Compra y luego publicarla omitiendo la necesidad de aprobación.
|40503|	Estado de Aprobación|	Se añadió una nueva función más grande, establecer filtros sobre qué valores permitidos se pueden cambiar en la web, si se establece ahora no es necesario un chequeo manual para estos valores al ejecutar Verificar cambios.
|39935|	Órdenes de Venta de ExFlow|	Se añadió soporte para Dirección de Envío Personalizada 
|41637|	Órdenes de Venta de ExFlow|	Se añadió la opción de usar Series de Números únicas para Órdenes de Venta creadas a través de Órdenes de Venta de ExFlow
|41640|	Órdenes de Venta de ExFlow|	Se añadió la posibilidad de poner en espera documentos que no deben ser creados automáticamente y en su lugar establecerlos en espera, creando más control para clientes específicos. 

<br/>

**Mejoras/Mejoras**<br/> 

| ID| Área | Descripción |
| :----------- | :-------------- | :-------------- | 
|40887| Publicación Preliminar|	Se corrigió el problema al trabajar con la publicación preliminar y los diferimientos, ahora la reversión se realiza en la fecha correcta.
|40197| Localización finlandesa|	Se resolvió el problema en la localización finlandesa donde en algunos casos se podía crear el documento sin un mensaje.
|40465|	Configuración|	Se corrigió un problema en la Exportación/Importación de Configuración de ExFlow donde las dimensiones faltarían en los códigos de compra.
|40419, 40422|	Localización española|	Se corrigieron dos problemas en el lado técnico donde faltaban IDs y se añadió el tipo de ID en el Diario de Importación
|37501|	Configuración|	Se resolvió el problema donde no se podía recuperar al Gerente de Proyecto en los flujos de aprobación dinámicos


<br/>


### ExFlow 23.2.0.0 – Notas de la Versión <br/> 
**Tipo de Lanzamiento:** <br/>
Lanzamiento Menor

**Fecha de Lanzamiento:** <br/>
2024-05-24

**Información del Lanzamiento:** <br/>
Requiere BC 23.0 o posterior <br/>

El problema con los diferimientos y la publicación preliminar se ha solucionado en 23.2.34.17

Las actualizaciones de BC que fallaban a veces debido a los datos de ExFlow se han solucionado en 23.2.34.17

El problema cuando el informe de Estado de Aprobación de ExFlow no creaba el saldo periódico restante en la cuenta especificada se ha solucionado en 23.2.34.20

Se ha añadido el método ''AddDocumentFromBlobs'' que reemplaza el método obsoleto ''AddDocumentFromStreams'' en 23.2.34.20

En los entornos de NA, ExFlow requería que el Grupo de Publicación de Prod. Gen. estuviera poblado en la Cuenta G/L y en las Líneas de Activos Fijos en el Diario de Importación. Este problema se ha resuelto en 23.2.34.28    

Los documentos publicados preliminarmente no se pueden revertir debido a la tasa de cambio ajustada en la entrada del libro mayor del proveedor. La publicación de la tasa de cambio ajustada ahora se revertirá en la fecha de publicación final, resuelto en 23.2.34.28

Se ha resuelto un problema donde los usuarios con el conjunto de permisos EX ACCOUNTANT no tenían acceso a los Lotes del Diario de Importación de ExFlow en 23.2.34.28

Los descuentos en línea se calculaban dos veces en el Diario de Importación, esto se ha resuelto en 23.2.34.28

Aprobar documentos en Business Central con la misma funcionalidad que ExFlow Web respecto a la configuración en Columnas de ExFlow "Actualizar Grupo de Publicación de Prod. IVA" y "Actualizar Grupo de Publicación de Prod. Gen." se ha añadido en 23.2.34.28

Se ha añadido soporte para la Publicación Preliminar sin IVA en 23.2.34.28


**Mejoras/Mejoras**<br/> 

| ID| Área | Descripción |
| :----------- | :-------------- | :-------------- | 
|39085|	Diario de Importación|	Se resolvió el problema relacionado con la importación del formato OIOUBL
|40104|	Diario de Importación|	Gran mejora en el rendimiento al trabajar con la coincidencia de múltiples líneas
|39999|	Diario de Importación|	Se resolvió un problema donde las facturas con artículos de servicio a veces no se podían crear desde el Diario de Importación
|39764|	Diario de Importación|	Ahora ExFlow soportará las dimensiones en las cuentas también en la publicación en segundo plano.
|39492|	Diario de Importación|	Se resolvió un problema con el código del método de pago al trabajar con notas de crédito. Anteriormente no lo recogía correctamente.
|39085|	Diario de Importación|	Se resolvió el problema relacionado con la importación del formato OIOUBL
|40104|	Diario de Importación|	Gran mejora en el rendimiento al trabajar con la coincidencia de múltiples líneas


<br/> <br/>

### ExFlow 23.1.0.0 – Notas de la Versión <br/> 
**Tipo de Lanzamiento:** <br/>
Lanzamiento Menor

**Fecha de Lanzamiento:** <br/>
2024-03-26


**Información del Lanzamiento:** <br/>
Requiere BC 23.0 o posterior <br/>

Se añadió nuevamente el soporte para la Re-Facturación de otros tipos de líneas hacia la cuenta G/L. - Solucionado en 23.1.282.13

Se añadieron nuevas tablas con permiso de lectura para EX BASE - Solucionado en 23.1.282.13

Se mejoró la funcionalidad existente "Retraso de Coincidencia" en la Configuración de ExFlow, ahora se mostrará un mensaje de error diferente si la fecha del documento o la fecha de vencimiento están dentro de la fórmula de fecha. Esto hará que sea más fácil usar esta funcionalidad para que los clientes sepan qué documentos necesitan su atención. - Solucionado en 23.1.282.13
<br/>

**Nuevas Funciones** 

| ID| Área | Descripción |
| :----------- | :-------------- | :-------------- | 
| 11392 | Web                   | Se añadió soporte para Facturas Confidenciales en ExFlow Web y Business Central
| 25408	| Web	                | Mejorando la funcionalidad existente de Re-Facturación con múltiples nuevas características
| 27791	| Técnico               | Se añadió soporte para Tablas de ExFlow en la Búsqueda de Datos de BC
| 28316	| Web                   | Se añadió soporte básico para la Intercompañía estándar de BC en ExFlow
| 30635	| Web                   | Se añadió el código de motivo en ExFlow Web para Documentos coincidentes de Órdenes de Compra
| 32203	| Configuración         | Mejoras en el Registro de Auditoría de ExFlow, posibilidad de generar PDF con el flujo de aprobación
| 35216	| Diario de Importación | El Código del Comprador ahora se puede mostrar a través de personalización en el Diario de Importación
| 35729	| Captura de Datos de ExFlow | Se añadió la posibilidad de no sincronizar proveedores específicos con la Captura de Datos de ExFlow, esto se hace a través de la Configuración del Proveedor de ExFlow
| 36300	| Configuración         | Se añadió la posibilidad de establecer el tipo de mensaje predeterminado para los Proveedores, solo disponible en la localización FI
| 39171	| Técnico               | Se añadió una nueva consulta para poder manejar Notas de Crédito y Facturas para Power BI



<br/> 

**Mejoras/Mejoras**<br/> 

| ID| Área | Descripción |
| :----------- | :-------------- | :-------------- | 
| 36337  | Configuración       | Se corrigió el problema de que la Notificación de Orden No Recibida a veces dejaba de funcionar
| 38656  | Configuración       | Se corrigió el problema con la publicación preliminar que anteriormente no permitía la reversión cuando había un proveedor de pago diferente
| 38566  | Configuración       | Se corrigió el problema con el trabajo de importación que creaba múltiples entradas de cola de trabajos incorrectamente
| 38346  | Configuración       | Se resolvió el problema de que la descripción de referencia en el contrato no se movía a la tarjeta de referencia
| 37306  | Diario de Importación| El Código del Método de Pago no se establecía correctamente en las Notas de Crédito. Este problema solo estaba en el entorno de EE. UU. y CA
| 37110  | OMNI                | Se resolvió el problema cuando algunos usuarios no podían acceder al contrato para poder aprobarlo completamente
| 36966  | Configuración       | El problema de que los adjuntos en algunos casos recibían el tipo "Otro" se ha resuelto
| 37654  | Configuración       | Se añadió soporte para usar el Número de Tarea del Trabajo en el intercambio de datos para ExFlow


<br/> <br/>

### ExFlow 23.0.329.0 – Notas de la Versión<br/> 
**Tipo de Lanzamiento:** <br/>
Lanzamiento Mayor

**Fecha de Lanzamiento:** <br/>
2024-01-11

**Información del Lanzamiento:** <br/>
Requiere BC 23.0 o posterior <br/><br/>
El problema de que las actualizaciones de Business Central ocasionalmente encontraban fallos debido a un error relacionado con ExFlow se ha resuelto en la versión 23.0.329.3.  <br/>

El problema de que el Nombre del Proveedor no se mostraba en la Configuración del Proveedor de ExFlow se ha resuelto en la versión 23.0.329.14.  <br/>

El problema de que la Descripción 2 no soportaba el mismo número de caracteres en Business Central que en ExFlow Web se ha resuelto en la versión 23.0.329.14. <br/>

**Nuevas Funciones** 

| ID| Área | Descripción |
| :----------- | :-------------- | :-------------- | 
| 19664 | Configuración | Todas las configuraciones anteriores de ExFlow en la tarjeta del Proveedor, así como las Opciones Avanzadas del Proveedor de ExFlow, se han movido a la Configuración del Proveedor de ExFlow
 30367 | Configuración| Todas las configuraciones anteriores de ExFlow en la tarjeta del Proveedor, así como las Opciones Avanzadas del Proveedor de ExFlow, se han movido a la Configuración del Proveedor de ExFlow
30676|Coincidencia de PO|Se añadieron campos adicionales en los Documentos de Aprobación de ExFlow en Business Central, lo que facilita la aprobación de facturas que están emparejadas con una PO
31319|Web|Se añadió soporte para campos de impuestos adicionales en ExFlow Web para la localización de EE. UU. y CA
32226|Diario de Importación|El Mensaje de Factura se llenará con el Número de Factura del Proveedor si el Mensaje de Factura está vacío - solo en la localización FI
34703|Configuración|Las Cuentas de EDC, el Almacenamiento BLOB de ExFlow y las Configuraciones de Importación de Archivos de ExFlow se deshabilitarán automáticamente cada vez que se cree una copia de sandbox
34979|Configuración|Las líneas importadas con el valor de 0.00 se eliminarán automáticamente cuando se importen. Solo aplicable para el tipo de línea de Artículo
36206|Técnico|Se añadió la opción de importar todos los PDF a todas las empresas al importar documentos durante la actualización de NAV a BC
36629|Configuración|Se añadió una nueva configuración en "Aprobación de Órdenes y Cotizaciones" - "Solo recibir Orden Aprobada". Cuando está habilitado, las Órdenes de Compra no podrán ser recibidas mientras la Orden de Compra no esté completamente Aprobada en ExFlow. Esta configuración solo es aplicable cuando la Aprobación de Órdenes de Compra en ExFlow está habilitada

<br/> 

**Mejoras/Mejoras**<br/> 

| ID| Área | Descripción |
| :----------- | :-------------- | :-------------- | 
36410|Configuración|Traducción de Correo Electrónico Mejorada para Órdenes No Recibidas - Resuelto el problema relacionado con la traducción de correos electrónicos para Órdenes No Recibidas
32724|Informes|Mejora en la Precisión de la Publicación Final para Cuentas de Puente - Se implementaron correcciones para situaciones en las que habilitar "Excluir Líneas Periódicas con Fecha de Inicio después de la Fecha de Publicación" y "Publicar el Saldo Periódico Restante en una Cuenta Separada" en el informe de Estado de Aprobación podría resultar en publicaciones finales incorrectas para cuentas de puente
34522, 36785, 37027|Coincidencia de PO|Funcionalidad de Coincidencia de PO Optimizada - Múltiples mejoras en la coincidencia de PO, incluida la capacidad de emparejar el mismo artículo varias veces en diferentes líneas en la orden de compra
34900|Configuración|Sincronización de Datos Maestros del Proveedor Simplificada - Resuelto un problema que ocasionalmente impedía el uso manual de la sincronización de Datos Maestros para proveedores a la Captura de Datos de ExFlow
35139|Configuración|Asistente de Inicio Mejorado de ExFlow - Los trabajos creados automáticamente se han eliminado del Asistente de Inicio de ExFlow, permitiendo a los usuarios Administradores Delegados ejecutar el asistente con mayor control y facilidad.
35228|Aprobación|Control de Flujo de Aprobación Mejorado - Los flujos de aprobación ahora solo se iniciarán una vez que la Orden de Compra/Cotización sea liberada, evitando flujos no deseados. Además, los usuarios ahora pueden modificar los flujos de aprobación cuando el estado está Abierto, ofreciendo mayor flexibilidad, especialmente al trabajar con Grupos de Aprobación Automática
35323|Diario de Importación|Resuelto el Problema de Entrada Repetitiva en la Cola de Trabajos - El trabajo 881 que se añadía continuamente a las entradas de la cola de trabajos se ha resuelto con éxito

 <br/> <br/>

### ExFlow 22.2.110.0 – Notas de la Versión<br/> 
**Tipo de Lanzamiento:** <br/>
Lanzamiento Menor

**Fecha de Lanzamiento:** <br/>
2023-09-27

**Información del Lanzamiento:** <br/>
Requiere BC 22.1 o posterior<br/><br/>
Se resolvieron varios problemas relacionados con el trabajo con múltiples pagos anticipados en la versión 22.2.110.11.

La sincronización de Datos Maestros del Proveedor no funcionaba con la nueva integración de EDC al usar el idioma sueco, resuelto en la versión 22.2.110.11.
Las Facturas de Compra no se podían publicar, resuelto en la versión 22.2.110.14.

No se podía aprobar en ciertas localizaciones desde la página de Documentos de Aprobación de ExFlow, resuelto en la versión 22.2.110.22.

No se podía crear Sugerencias de Codificación Automática, así como mejoras menores, resuelto en la versión 22.2.110.22.

La unidad de medida se eliminaba al crear documentos al trabajar con Progressus, resuelto en la versión 22.2.110.32.

Se añadió un nuevo evento relacionado con la línea de compra importada en la versión 22.2.110.42.

Las colas de trabajos se eliminaron al ejecutar el asistente de ExFlow, ahora los socios con Administrador Delegado podrán ejecutar el asistente en la versión 22.2.110.42.

Se añadieron dos nuevos eventos relacionados con la actualización de dimensiones y la coincidencia de órdenes en la versión 22.2.110.46.

Se añadió un nuevo evento para la búsqueda en ExFlow web en la versión 22.2.110.57.


**Nuevas Funciones** 

| ID| Área | Descripción |
| :----------- | :-------------- | :-------------- | 
|32727| Coincidencia de Contratos|  Se añadió un recordatorio para facturas faltantes/esperadas según las líneas del Contrato (períodos)
32727|  Coincidencia de Contratos|  Crear Contrato rápidamente desde la Factura añadido a Acciones en el Diario de Importación
32727|  Coincidencia de Contratos|  Grupo de Auto Acc. añadido a las Estadísticas del Contrato y al Historial del Estado de Aprobación
32747|  General|    Se añadieron tablas adicionales de ExFlow a la configuración de Exportación/Importación
32823|  Almacenamiento de Facturas|    Se añadió soporte nativo para almacenamiento externo en SharePoint
32920|  Coincidencia de PO|    Soporte para recordatorios en Órdenes con líneas no recibidas en el Estado de Aprobación
32923|  Coincidencia de PO|    El Número de Orden ya no se llena al procesar cargos adicionales de línea de factura
32817|  Importación de Órdenes de Venta| Se mejoró la precisión de la coincidencia de la ubicación de envío del cliente al importar Órdenes de Venta
34604|  Importación de Órdenes de Venta| Se mejoró la precisión para la coincidencia del contacto del cliente al importar Órdenes de Venta

<br/> 

**Mejoras/Mejoras**<br/> 

| ID| Área | Descripción |
| :----------- | :-------------- | :-------------- | 
|34515  | Aprobación|             El control sobre el número mínimo de aprobadores causa problemas si la línea se envía para aprobación en una cuenta ficticia con solo el primer aprobador
|32757  |Estado de Aprobación|       La Publicación por Lotes restablece cualquier filtro en la página
|34112   |Diario de Importación|       Los encabezados de columna a veces no responden al desplazamiento horizontal 
|34358  |Diario de Importación|        Error al crear una factura con asignación de cargo de artículo desde el Diario de Importación
|34694 |Diario de Importación|         [Localización BE] Mensaje de error: 'El Mensaje Estructurado falló…' al controlar el campo de referencia de pago 
|34698 |Almacenamiento de Facturas|        Configuración adicional para comprometer cierto número de imágenes de facturas en lotes al habilitar
|32315  |Cola de Trabajos|             La cola de trabajos crea múltiples entradas innecesarias para CU 12057075
|33739  |Visor de PDF|            La vista previa de PDF a veces corta el texto en las facturas en el Diario de Importación y el Estado de Aprobación
|32386  |Coincidencia de PO|           Problema al crear documentos donde una línea de cargo de artículo se lista por encima de las líneas de artículos a las que está asignada
|32820  |Coincidencia de PO|           Código de Error: '...DB:recordExists' a veces al importar documentos para la coincidencia de PO
|34206  |Coincidencia de PO|           La línea de factura está conectada al número de recibo posterior incorrecto
|34547  |Coincidencia de PO|           La factura final de pago anticipado no se calcula correctamente si se usa una moneda diferente a la LCY
|33248  |Búsqueda|                Mensaje de error: 'La longitud de la cadena...' al aplicar filtro en aprobador y proveedor
|33150  |Asistentes|               Enlaces de video rotos en el asistente de coincidencia de PO
|34515  |Aprobación|              El control sobre el número mínimo de aprobadores causa problemas si la línea se envía para aprobación en una cuenta ficticia con solo el primer aprobador
|32757  |Estado de Aprobación|       La Publicación por Lotes restablece cualquier filtro en la página


 <br/> <br/>


 ### ExFlow 22.1.204.0 – Notas de la Versión<br/> 
**Tipo de Lanzamiento:** <br/>
Lanzamiento Menor

**Fecha de Lanzamiento:** <br/>
2023-08-29

**Información del Lanzamiento:** <br/>
Requiere BC 22.1 o posterior

No se pueden importar facturas si se ha eliminado el trabajo programado para el Servicio OCR, resuelto en 22.1.204.5.

El monto calculado incorrectamente para facturas de pago anticipado al usar una moneda diferente a LCY se ha corregido en 22.1.204.8.

No se puede actualizar desde una versión anterior de BC y NAV a BC Online, resuelto en 22.1.204.11.

**Nuevas Funciones** 

| ID| Área | Descripción |
| :----------- | :-------------- | :-------------- | 
|29378| Aprobación|   Siempre verificar el número mínimo de aprobadores cuando el último usuario está aprobando
|30565| Aprobación|   Restringir la Impresión/Envío de la Orden de Compra que está habilitada para ExFlow, si el documento no está completamente aprobado
|29382| Estado de Aprobación| Posibilidad de devolver la línea del documento a cualquier aprobador al rechazar cambios
|31251| General|    Soporte para el Grupo de Auto Acc. como una característica
|29364| Diario de Importación| Enviar notificaciones de chat a los usuarios de BC desde el Diario de Importación
|28139| Diario de Importación| [Localización de EE. UU.] Campos relacionados con el IRS 1099 añadidos al Diario de Importación

<br/> 

**Mejoras/Mejoras**<br/> 

| ID| Área | Descripción |
| :----------- | :-------------- | :-------------- | 
|32670| Aprobación|   El Grupo de Auto Acc. no se modifica al cambiar la cuenta G/L en ExFlow web
|33312| Estado de Aprobación| El Estado del Documento no se actualiza en el Estado de Aprobación cuando los documentos emparejados con PO están completamente aprobados
|28805| General |No se pueden editar líneas en una Orden de Compra no liberada, si se le asignará un Grupo de Aprobación 
|33306| General |Error al agregar/modificar nuevas líneas en una Orden de Compra, si se aplica el código del Comprador
|33272| Importación  |Mensaje de error: "Ha modificado el Código de Área Fiscal" al importar documentos por lotes en algunos escenarios
|32474| Diario de Importación  |El monto del pago anticipado en la factura final se calcula incorrectamente si las facturas anteriores incluyen IVA
|30913| Diario de Importación  |No es posible usar la línea de Propuesta de IVA si se ha aplicado un número de PO 
|33055| Diario de Importación  |Error al agregar aprobadores adicionales manualmente en la Propuesta de Aprobación, si ya se ha aplicado una regla de Aprobación
|33062| Diario de Importación  |Mensaje de Error: El Tipo no debe estar en la Línea del Documento de Compra de ExFlow si las Sugerencias de Codificación Automática están habilitadas
|30145| Diario de Importación  |Los valores de dimensión aplicados desde el mapeo de Importación OCR no se muestran en las líneas del documento hasta que se haya abierto la página de Entradas de Conjunto de Dimensiones
|32113| Diario de Importación  |Todos los lotes del Diario de Importación se procesan, no solo el seleccionado, al ejecutar Importar Documentos
|33244| Diario de Importación  |[Localización de EE. UU. y CA] El Código de Área Fiscal no se llena correctamente desde el Proveedor/Ubicación al documento en algunos escenarios
|33724| Diario de Importación  |[Localización de BE] Los usuarios con el conjunto de permisos EX ACCOUNTANT pueden experimentar errores de permisos al importar documentos
|33269| Coincidencia de PO |Si el Documento de Coincidencia está configurado para Recibo, la factura aún se empareja incorrectamente con la línea de la Orden
|26078| Códigos de Compra  |[Localización de EE. UU. y CA] Se añadieron el Código de Área Fiscal y el Código de Grupo Fiscal al Código de Compra de ExFlow
|29827| Búsqueda  |Búsqueda lenta en BC y tiempos de espera en ExFlow web al filtrar solo en valores de línea 

 <br/> <br/>

### ExFlow 22.0.274.0 – Notas de la Versión<br/> 
**Tipo de Lanzamiento:** <br/>
Lanzamiento Mayor

**Fecha de Lanzamiento:** <br/>
2023-06-19

**Información del Lanzamiento:** <br/>
Requiere BC 22.1 o posterior.

Varios problemas con la coincidencia de PO resueltos en 22.0.274.5

El Comprador y el Coordinador de Compras faltaban en la configuración de Correo Electrónico, corregido en 22.0.274.5

No es posible instalar la última versión, corregido en 22.0.274.12

Factura Preliminar publicada al coincidir PO, corregido en 22.0.274.12

Error "El ID de Rol de Administrador Predeterminado debe tener un valor" al activar una nueva clave de licencia, corregido en 22.0.274.12

Problema al actualizar líneas de documentos si se ha publicado un recibo después de la importación, corregido en 22.0.274.14

Publicación Preliminar activada después de la actualización a 22, corregido en 22.0.274.19

El Estado del Documento no se actualiza en el Estado de Aprobación cuando los documentos emparejados con PO están completamente aprobados, corregido en 22.0.274.25

La propuesta de aprobación en el diario de importación da un mensaje de error al agregar aprobadores, corregido en 22.0.274.25

**Nuevas Funciones** 

| ID| Área | Descripción |
| :----------- | :-------------- | :-------------- | 
|11088| Localización|           Soporte para la localización de Bélgica
|18732| Registro de Auditoría|              Registro de Auditoría detallado añadido como una nueva función. Ver los cambios en los documentos en una vista general basada en los estados y acciones de la factura, o profundizar para ver los cambios detallados de cada campo.
|25219| Almacenamiento de Facturas|        Almacenamiento Externo añadido como una nueva función. Ahora es posible almacenar las imágenes de sus facturas en un almacenamiento externo como Azure Blob storage. Al publicar, la imagen de la factura se eliminará de la base de datos y se almacenará externamente. El marco también se puede extender para usar con otros servicios de almacenamiento como Sharepoint, AWS, carpeta local, etc.
|26367| Controles de Presupuesto|        Controles de Presupuesto G/L añadidos como una nueva función. Activar ejecutando el asistente para los Controles de Presupuesto de ExFlow. Los controles se realizan contra el presupuesto G/L en la cuenta G/L en combinación con dimensiones globales. Los aprobadores recibirán advertencias en el diario de importación o durante la aprobación, y automáticamente se puede agregar un aprobador específico al flujo de trabajo de aprobación si se excede una combinación de publicación de presupuesto.
|28612| Asistentes|                El asistente de instalación de ExFlow ha sido rediseñado y mejorado. Ahora también incluirá la configuración de usuarios, referencias de usuarios, flujos de trabajo de aprobación, sugerencias de codificación automática, trabajos programados y configuración del Servicio OCR.
|28937| Importación|                 Obtener adjuntos de una fuente externa basada en referencia en XML. Solicitado específicamente para FINVOICE
|29354| General|                Soporte para el Centro de Responsabilidad en ExFlow
|30199| Codificación Automática|            Precisión mejorada
|30262| Asistentes|                Nuevo asistente para activar y configurar la coincidencia de PO
|30290| Coincidencia de PO|            Restringir la posibilidad de emparejar una factura con una Orden de Compra abierta, o una Orden de Compra que no ha sido aprobada si está activada para la Aprobación de ExFlow.
|30312| Coincidencia de PO|            Posibilidad de procesar cargos adicionales de línea para una factura emparejada con PO.
|30457| General|                Soporte para IVA no deducible y parcialmente deducible. Recomendamos encarecidamente no activar esta función en Business Central ya que hay problemas críticos para documentos en otras monedas que no sean LCY.
|27288| Coincidencia de Contratos|      Los contratos de ExFlow ahora se han mejorado con períodos de facturación, que se pueden crear manualmente o desde la Periodicidad. Los períodos de facturación se pueden configurar para generar facturas de compra con el propósito de auto-facturación.
|27355| Usuarios|                  Seleccionar y crear múltiples usuarios de ExFlow desde la lista de usuarios de BC.
|29858| Referencias|             Se ha añadido una nueva opción para crear automáticamente una referencia para nuevos usuarios de ExFlow en la configuración de ExFlow. Desde las listas de usuarios de ExFlow, también puede crear referencias por lotes para todos los usuarios existentes de ExFlow.
|30309| Coincidencia de PO|            Posibilidad de especificar tipos de líneas que pueden ser recibidas e facturadas automáticamente por ExFlow, en la configuración de ExFlow
|30666| General|                Las descripciones emergentes de las páginas más utilizadas ahora están vinculadas directamente a las secciones relevantes en el manual del usuario en docs.signupsoftware.com
|31703| Coincidencia de Contratos|      Razón para la aprobación manual de una factura emparejada con contrato añadida al documento en ExFlow web.
|27693| Codificación Automática|            El proveedor se añadió a la agrupación para Sugerencias de Codificación Automática.
|29371| Búsqueda|                 Ahora es posible buscar por nombre del proveedor Y número del proveedor buscando 'Proveedor' en ExFlow web.

<br/> 

**Mejoras/Mejoras**<br/> 

| ID| Área | Descripción |
| :----------- | :-------------- | :-------------- | 
|30359| Aprobación|           La fecha de publicación ahora se actualiza correctamente en la Orden de Compra al publicar una factura de pago anticipado, así como las fechas de IVA que se asignan incorrectamente desde el encabezado de la orden.
|30642| Coincidencia de PO|        Obtener Recibo/Envío de Devolución/Líneas de Orden no muestra la Cantidad para documentos en estado de Aprobación.
|29979| Proveedor|             Business Central se bloquea al crear un nuevo proveedor y abrir todos los grupos de publicación, específicamente cuando la Configuración de ExFlow "Crear ID de Proveedor Automáticamente" está configurada en "Preguntar".
|30300| Diario de Importación|     Si no se habilita la 'Publicación Directa' en la cuenta G/L configurada para Pagos Anticipados en la configuración de Publicación General, se recibe un mensaje de error que dice "No se encuentra la cuenta G/L" al crear una factura de Pago Anticipado.
|30399| Diario de Importación|     No es posible emparejar líneas de factura con líneas de PO en el diario de importación si ya hay otras facturas con líneas emparejadas con las mismas líneas de PO.
|30431| General|            No es posible acceder a la Configuración de ExFlow si el ID de Rol Base predeterminado está en blanco.
|30448| Aprobación|           La Aprobación de ExFlow no se establece en sí por defecto si se copia una Orden de Compra.
|30660| Usuarios|              No es posible crear un nuevo usuario de ExFlow para el Administrador Delegado si la dirección de correo electrónico utilizada para la autenticación no es válida.
|30663| Correos Electrónicos|             Las notificaciones por correo electrónico para nuevos comentarios añadidos al Panel de Discusión en el diario de importación no se envían.
|30715| Aprobación|           No es posible publicar una factura de pago anticipado del 100% debido a un error relacionado con el Monto Bruto.
|30725| Aprobación|            Si las cantidades se ajustan manualmente en una nota de crédito que está conectada a una orden de devolución, la cantidad utilizada en el seguimiento de artículos provendrá de la Orden de Devolución en lugar de la nota de crédito.
|30959| Correos Electrónicos|             Las notificaciones por correo electrónico deben estar deshabilitadas en las empresas de prueba
|30960| Visor de PDF|         Alguna información desaparece de ciertos PDFs.
|30961| Aprobación|           Las facturas a veces se quedan atascadas en estado 'inactivo' si el monto está por debajo del 'Monto Mínimo de Aprobación de Documento (LCY)'
|30968| Aprobación|           Se requiere el Grupo de Publicación de Producto General en la cuenta G/L asociada con el Grupo de Publicación de FA
|30971| Configuración|              Las líneas se ignoran para proveedores específicos si 'Ignorar líneas OCR' está configurado en Sí en la Configuración de ExFlow pero Nunca en las opciones avanzadas del proveedor para un proveedor específico.
|30972| Diario de Importación|     [Localización de IT] - Falta el campo 'Fecha de Operación Ocurrida' en el encabezado del documento Ex.
|31059| Correos Electrónicos|             No se pueden enviar recordatorios en el documento emparejado en línea, si el número de PO se interpreta en el nivel del encabezado.
|31143| Aprobación|           La aprobación automática en la Orden de Compra no funciona al usar la configuración del usuario o el código del comprador.
|31171| Aprobación|           No es posible editar el Calendario de Diferimiento en el diario de importación
|31190| Diario de Importación|     [Localización de EE. UU.] - Falta el grupo de publicación de productos generales en la factura incluso si está configurado como predeterminado en la Configuración de ExFlow.
|31243| Diario de Importación|     La fecha de vencimiento no se calcula correctamente para algunos escenarios
|31279| Verificar Cambios|     El procedimiento para publicar recibos automáticamente a veces falla y podría resultar en que los recibos se publiquen nuevamente en la próxima ejecución.
|31341| Diario de Importación|     Las líneas del documento se eliminan al cambiar el tipo de documento.
|31443| Aprobación|           El documento no es visible en la bandeja de entrada si se pone 'En Espera' y se reenvía a un nuevo aprobador.
|31793| Coincidencia de PO|        Es posible publicar una factura sin recibo si se usa 'Orden y Recibo' como opción de coincidencia.
|31990| Coincidencia de PO|        El número de recibo no se añade si se obtienen recibos manualmente desde acciones en el diario de importación.
|31997| Coincidencia de PO|        Las líneas de recibo añadidas desde el número de PO en el encabezado se eliminan si se obtienen recibos manualmente desde acciones en el diario de importación.
|31622| Coincidencia de PO|        La coincidencia contra múltiples recibos de compra no funciona si se activa la 'Coincidencia de Múltiples Líneas'.