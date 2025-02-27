---
title: Progressus
sidebar_position: 16
hide_title: true
custom_edit_url: null
---
## Progressus

Progressus es un complemento para funcionalidad extendida de Proyectos.

### Configuración de ExFlow

En la Configuración de ExFlow, como para el Código de Gasto PGS, Proyecto y Tarea del Proyecto y bajo Editar Columnas Web en ese orden.

Al agregar el Código de Gasto PGS, ExFlow agrega automáticamente Reglas de Codificación Denegadas para no usar el Código de Gasto PGS en el Tipo de Línea: Artículo, Recurso, Activos Fijos y Cargo (Artículo).

También agregue el Tipo de Pago de Gasto PGS para Documentos de Compra en la pestaña rápida Progressus.

![Configuración de ExFlow - Progressus](@site/static/img/media/exflow-setup-progressus-001.png)

Si es posible, agregue un Número de Tarea de Proyecto Predeterminado en Configuración de ExFlow --> General. Lea más sobre esto en **Número de Tarea de Proyecto Predeterminado**.

![Configuración de ExFlow - General](@site/static/img/media/exflow-setup-general-005.png)

### Reglas de Codificación Denegadas de ExFlow con Progressus

Al agregar un Proyecto en ExFlow Web, el aprobador también necesita agregar la Tarea del Proyecto y el Código de Gasto PGS si falta. Ahora la siguiente Regla de Codificación Denegada puede ser útil.

Un recordatorio para agregar la Tarea del Proyecto al usar Proyecto en ExFlow Web.

![Regla de Codificación Denegada de ExFlow](@site/static/img/media/image371.png)

Un recordatorio para agregar el Código de Gasto PGS al usar Cuenta G/L y Proyecto en ExFlow Web.

![Regla de Codificación Denegada de ExFlow](@site/static/img/media/image372.png)

Un recordatorio para agregar Proyecto al usar Cuenta G/L y Código de Gasto PGS en ExFlow Web.

![Regla de Codificación Denegada de ExFlow](@site/static/img/media/image373.png)

#### Trabajar con Recurso de Gasto en las líneas del documento en el Diario de Importación
También es posible utilizar los campos Recurso de Gasto, Fecha de Gasto y Facturable en el Diario de Importación. Estos campos deben agregarse manualmente a través de la personalización.

Facturable se actualizará desde el Número de Tarea del Proyecto. <br/>
Sin embargo, tenga en cuenta que si el tipo de línea es:<br/>
•	***Artículo***: entonces PGS Facturable se actualizará desde Artículo Facturable. <br/>
•	***Cuenta G/L***: entonces PGS Facturable se actualizará desde Gasto Facturable. <br/>

Esto se puede ajustar manualmente en las líneas. <br/>

Además, estos campos se pueden encontrar en las líneas de la mayoría de las páginas de ExFlow: Diario de Importación, Estado de Aprobación, Historial de Estado de Aprobación y Documentos Eliminados.

Además, no habrá actualización de precios a través de Progressus. Los precios permanecerán según lo interpretado.

#### Código de Compra de ExFlow para Progressus

El Código de Gasto PGS y el Tipo de Pago PGS también están disponibles en el Código de Compra de ExFlow.

### Código de Gasto de Progressus en ExFlow Web

Debido a las Reglas de Codificación Denegadas, el Aprobador necesita agregar Proyecto, Tarea del Proyecto y Código de Gasto PGS en ExFlow Web si falta. La Cuenta G/L se agregará o actualizará automáticamente desde la Configuración de Publicación de Gastos del Proyecto en Business Central.