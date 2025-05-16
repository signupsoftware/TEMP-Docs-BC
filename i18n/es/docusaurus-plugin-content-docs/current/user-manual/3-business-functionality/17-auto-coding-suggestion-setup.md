---
title: Configuración de Sugerencia de Codificación Automática
sidebar_position: 17
hide_title: true
custom_edit_url: null
---
## Configuración de Sugerencia de Codificación Automática

Ir a: ***Configuración de AP de ExFlow - Descripción general --> Configuración de Sugerencia de Codificación Automática de ExFlow***<br/>

Esta función en ExFlow está diseñada para poder obtener sugerencias de codificación automáticas en el Diario de Importación basadas en documentos publicados históricamente y funciona tanto para facturas como para notas de crédito. Esto puede ser útil para empresas que tienen historial de publicaciones en Business Central pero que acaban de comenzar a usar ExFlow.<br/>

Esta función solo admite Cuentas G/L, no otros tipos de líneas.

*Auto Coding Suggestion* puede dar sugerencias de codificación si no se ha aplicado otro tipo de sugerencia, como un Código de Compra de ExFlow o una Cuenta G/L Predefinida. <br/>

La Sugerencia de Codificación Automática actualiza continuamente las sugerencias de codificación después de publicar los documentos, para siempre dar una sugerencia futura precisa.<br/>

Para poder usar esta función, vaya a **Configuración de Sugerencia de Codificación Automática de ExFlow:** <br/>

![Menú de ExFlow](@site/static/img/media/exflow-meny-auto-coding-001.png) <br/>


### Agregar una Nueva Sugerencia de Codificación Automática

Habilite la **''Mostrar Configuración Avanzada''** en la página de Configuración de Sugerencia de Codificación Automática, para obtener la vista completa de la página:

![Configuración de Sugerencia de Codificación de ExFlow](@site/static/img/media/coding-suggestion-setup-001.png)

Tenga en cuenta que los dos últimos campos en la imagen anterior (''Agrupar por Moneda'' y ''Agrupar por Referencia'') están ocultos por defecto y se pueden agregar mediante la personalización de la página.

| Cinta de Configuración de Sugerencia de Codificación Automática     |	|
|:-|:-|
| **Nuevo**:    | Agregar una nueva Sugerencia de Codificación
| **Editar Lista**:    | Editar la lista de Configuración de Sugerencia de Codificación
| **Eliminar**:    | Eliminar una Sugerencia de Codificación
| **Crear Sugerencia**:    | Este botón recorre la configuración y agrega Sugerencias al ID de Sugerencia
| **Sugerencias:**          | Esto muestra el ID de Sugerencia creado para la Configuración seleccionada
| **Eliminar Sugerencias:**   | Esto elimina los ID de Sugerencia
| **Historial de Documentos de Codificación:**   | Abre la página de Historial de Documentos de Sugerencia de Codificación Automática de ExFlow
| **Agrupar Documentos Por:**   | Abre la Lista de Agrupación de Sugerencias de Codificación Automática de ExFlow
| **Aplicar Campos:**   | Abre la Configuración de Campos de Transferencia de Sugerencia de Codificación Automática

<br/>

| Configuración de Sugerencia de Codificación Automática --> Nuevo/Editar Lista      |	|
|:-|:-|
| **ID de Configuración:**                                          |Especifica el ID de la configuración de sugerencia de codificación.
| **Tipo de Fuente:**                                          |Grupo de Publicación General de Negocios, Grupo de Publicación de Proveedores, Proveedor o Todos. Esto definirá la agrupación de Sugerencias creadas por ExFlow
| **No. de Fuente:**                                            | Esto definirá qué No. del "Tipo de Fuente" específico en el que se debe usar esta configuración. <br/>Si el No. de Fuente se deja vacío para el Tipo de Fuente Proveedor, la agrupación se hace por Proveedor para todos los Proveedores.   <br/>Al crear un ID de configuración como "Tipo de Fuente" Proveedor y "No. de Fuente" en blanco, se crearán sugerencias de codificación de cada proveedor, donde las sugerencias siempre se filtrarán por proveedor
| **Descripción:**                                          | Texto descriptivo. (100 caracteres máx.)
| **Multiplicador de Días:**                                      | Esto define cuán severamente el número de días desde la última factura para esa configuración afectará la prioridad para la codificación sugerida a utilizar. Cuanto mayor sea el número, mayor será el multiplicador. El multiplicador debe ser un valor negativo. Por ejemplo, -10 tiene una mayor influencia que -1
| **Multiplicador de Ocurrencia:**                                | Esto define cuán severamente el número de facturas en el ID de Sugerencia dentro de esta configuración afectará la prioridad para la codificación sugerida a utilizar. Cuanto mayor sea el número, mayor será el multiplicador. El multiplicador debe ser un valor negativo. Por ejemplo, -10 tiene una mayor influencia que -1
| **Rango de Monto %:**                                       |Esto define el porcentaje (más/menos) del monto a aplicar para el ID de Sugerencia en el que se guardará una codificación específica para un documento
| **Número Mínimo de Documentos para la Validez de la Sugerencia:**  | El número mínimo de documentos que deben agregarse al ID de Configuración de Sugerencia para que una sugerencia de ese ID de Sugerencia se elija automáticamente
| **Agrupar por Moneda:**                                   | Esto define si la agrupación debe hacerse con moneda. <br/><br/> Este campo está oculto por defecto, agregue este campo a través de la personalización de la página, si es necesario.
| **Agrupar por Referencia**:                                  | Esto define si la agrupación debe hacerse especificada con Códigos de Referencia de ExFlow. <br/><br/> Este campo está oculto por defecto, agregue este campo a través de la personalización de la página, si es necesario.


<br/>

### Habilitar Sugerencia de Codificación Automática

#### Configuración de ExFlow

Active esta función en la Configuración de ExFlow habilitando esta función para todos los Proveedores o Proveedores Seleccionados.

Al activar "Proveedores Seleccionados", también es necesario habilitar "Usar Sugerencia de Codificación Automática" para los proveedores, en la tarjeta de [***Configuración de Proveedores de ExFlow***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/vendor-setup) que deben tener esta función habilitada.

![Configuración de ExFlow - Sugerencia Automática](@site/static/img/media/exflow-setup-automatic-suggestion-001.png)

| Configuración de ExFlow --> Sección de Sugerencia de Codificación Automática     |	|
|:-|:-|
| **Agrupación de Documentos en Líneas de Sugerencia con Monto:**    | Especifica cómo se agruparán los documentos según el monto del documento.
| **Decisión de Sugerencia de Codificación Automática Basada en el Monto:**           |Especifica cómo se elegirá la línea de sugerencia según el monto del documento
| **Sugerir Codificación Automática para Documento Importado:**           | Especifica cómo se utilizará la sugerencia de codificación automática
| **Calcular Sugerencias Automáticas Desde la Fecha:**                          | Especifica la fecha de inicio del documento que se utilizará en las sugerencias de codificación automática.
| **Sugerir Monto de Codificación Automática desde el ID de Conjunto de Codificación:**       | Especifica si los montos se sugerirán automáticamente en las líneas creadas desde el ID de Conjunto de Codificación

<br/>

#### Diario de Importación

Habilite **Crear Líneas con Sugerencia Automática** para activar esta función para un Diario de Importación específico.

![Diarios de Importación de ExFlow](@site/static/img/media/import-journals-008.png)

<br/>

#### Actividades Periódicas

Para aplicar la Sugerencia de Codificación Automática, es necesario ejecutar las funciones **ID de Conjunto de Codificación de ExFlow para Sugerencias de Codificación** y **Creación de Sugerencias de Codificación Automática de ExFlow**. <br/>

El primer uso de la sugerencia de codificación automática necesitará que ambos trabajos se ejecuten al menos una vez. Después de eso, la recurrencia se puede ajustar en las Entradas de la Cola de Trabajos correspondientes.

![Actividades Periódicas](@site/static/img/media/exflow-menu-005-periodic-activities.png)