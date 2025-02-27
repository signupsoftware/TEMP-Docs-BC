---
title: Control Presupuestario G/L
sidebar_position: 24
hide_title: true
custom_edit_url: null
---
## Control Presupuestario G/L

Cuando se trabaja con el presupuesto del libro mayor en Business Central estándar, solo hay herramientas para comparar las entradas del libro mayor publicadas con el presupuesto. Ninguna antes de la publicación.<br/>

Con el Control Presupuestario G/L de ExFlow, los usuarios pueden realizar un seguimiento del presupuesto para Facturas de Compra y Notas de Crédito antes de la publicación. También, al aprobar en ExFlow Web.

### Asistente de Control Presupuestario de ExFlow
Cómo comenzar con el Control Presupuestario G/L de ExFlow paso a paso.<br/>

Ir a: ***Configuración --> Asistentes de ExFlow --> Asistente de Control Presupuestario de ExFlow***<br/><br/>


#### Calcular Control Presupuestario G/L

Elija la opción preferida para calcular el Control Presupuestario G/L:

1.	**Mensual**<br/>
Calcular y comparar la publicación con el presupuesto por mes

2.	**Hasta el Mes de Publicación**<br/>
Calcular y comparar la publicación G/L con el presupuesto desde el inicio del presupuesto hasta el final del mes de publicación del documento

3.	**Total**<br/>
Calcular y comparar la publicación G/L con el presupuesto desde la fecha de inicio hasta la fecha de finalización en la configuración del período presupuestario

![Asistente de Control Presupuestario de ExFlow](@site/static/img/media/budget-control-wizard-001.png)<br/><br/>

#### Dimensiones Globales
Elija dimensiones globales para el control presupuestario del libro mayor. Es posible ignorar dimensiones o elegir una u otra, o ambas.

![Asistente de Control Presupuestario de ExFlow](@site/static/img/media/budget-control-wizard-002.png)<br/><br/>

#### Períodos Presupuestarios G/L
Se necesitan Períodos Presupuestarios G/L para que ExFlow sepa con qué presupuesto comparar la publicación.
Haga clic en “Agregar Períodos Presupuestarios” para seleccionar el período y el presupuesto.
Agregue la Fecha de Inicio, la Fecha de Finalización y el Presupuesto con el que comparar.

![Asistente de Control Presupuestario de ExFlow](@site/static/img/media/budget-control-wizard-003.png)

![Asistente de Control Presupuestario de ExFlow](@site/static/img/media/gl-budget-period-setup-001.png)<br/><br/>

#### Agregar Columnas Web
Agregará las columnas web necesarias a la Columna de ExFlow. Si las columnas se agregan, no se pueden eliminar desde el Asistente de Control Presupuestario.<br/>
Para eliminar columnas, vaya a: ***Configuración de ExFlow --> Relacionado --> Avanzado --> Columnas***

![Asistente de Control Presupuestario de ExFlow](@site/static/img/media/budget-control-wizard-004.png)<br/><br/>

#### Advertencias
La notificación en % se utiliza para advertir a los aprobadores cuando se está cerca de alcanzar el presupuesto. Cuando el monto de la línea supera el porcentaje de notificación, mostrará el % del Presupuesto Usado y el Monto del Presupuesto Restante en negrita en Business Central.

![Asistente de Control Presupuestario de ExFlow](@site/static/img/media/budget-control-wizard-005.png)<br/><br/>

#### Advertencias en el Diario de Importación
Active las advertencias en el Diario de Importación, tanto para la Advertencia en % como para el Monto sobre el Presupuesto. Estas advertencias se pueden aceptar en el Diario de Importación para enviar el documento para aprobación.

![Asistente de Control Presupuestario de ExFlow](@site/static/img/media/budget-control-wizard-006.png)<br/><br/>

#### Propietario del Presupuesto
Agregue un grupo de aprobación para el Propietario del Presupuesto para aprobar cuando se exceda el presupuesto del libro mayor (más del 100%). El Propietario del Presupuesto se agregará al flujo de aprobación como último aprobador. Si está vacío, no se agregarán aprobadores de presupuesto al flujo de aprobación.<br/><br/>

#### Tolerancia de Aprobación
La tolerancia de aprobación se verifica por línea de documento.
Mantenga tanto el Monto como el Porcentaje lo más bajos posible. Esto se debe a que el Monto y el porcentaje son por combinación de cuenta G/L y dimensión.

![Asistente de Control Presupuestario de ExFlow](@site/static/img/media/budget-control-wizard-007.png)<br/><br/>

#### Procesamiento en Segundo Plano
La actualización de los Totales del Presupuesto G/L de ExFlow a partir de las Entradas del Libro Mayor se puede hacer al publicar desde el Estado de Aprobación o configurando una cola de trabajos.

**Con Cola de Trabajos:** Actualizar agregando una Cola de Trabajos programada.

**Al Publicar desde el Estado de Aprobación:** Actualizar al publicar desde el Estado de Aprobación.

![Asistente de Control Presupuestario de ExFlow](@site/static/img/media/budget-control-wizard-008.png)<br/><br/>

#### Finalizar y actualizar configuración
Haga clic en "Finalizar" para cerrar el Asistente de Control Presupuestario de ExFlow y aplicar la configuración.

![Asistente de Control Presupuestario de ExFlow](@site/static/img/media/budget-control-wizard-009.png)

### Configuración del Control Presupuestario G/L de ExFlow
Para configurar manualmente, revisar o actualizar la configuración, vaya a Configuración del Control Presupuestario G/L de ExFlow.<br/>
Ir a: ***Configuración --> Configuración Manual de ExFlow --> Configuración del Control Presupuestario de ExFlow***<br/><br/>

#### General

| General | |
|:-|:-|
| **Activo:**                   | Para habilitar o deshabilitar el Control Presupuestario G/L de ExFlow. <br/> Para deshabilitar las Columnas de ExFlow, vaya a: ***Configuración de ExFlow --> Relacionado --> Avanzado --> Columnas***
| **Cálculo del Presupuesto G/L:**   | Elija la opción preferida para calcular el Control Presupuestario G/L: <br/><br/> 1.	**Mensual**<br/> Calcular y comparar la publicación con el presupuesto por mes. <br/><br/> 2. **Hasta el Mes de Publicación**<br/> Calcular y comparar la publicación G/L con el presupuesto desde el inicio del presupuesto hasta el final del mes de publicación del documento. <br/><br/> 3. **Total**<br/> Calcular y comparar la publicación G/L con el presupuesto desde la fecha de inicio hasta la fecha de finalización en la configuración del período presupuestario.<br/><br/>
|**Dimensión Global 1:**        | Elija dimensiones globales para el control presupuestario del libro mayor. Ignore dimensiones o elija una u otra, o ambas.
| **Dimensión Global 2:**       | Elija dimensiones globales para el control presupuestario del libro mayor. Ignore dimensiones o elija una u otra, o ambas.

![Configuración del Control Presupuestario G/L de ExFlow](@site/static/img/media/gl-budget-control-setup-001.png)<br/><br/>

#### Advertencias
| Advertencias | |
|:-|:-|
| **Notificación en %:**            | Para advertir a los aprobadores cuando se está cerca de alcanzar el presupuesto. Cuando el monto de la línea supera el porcentaje de notificación, mostrará el % del Presupuesto Usado y el Monto del Presupuesto Restante en negrita en Business Central
| **Advertencia sobre Notificación:**    | Active las advertencias en el Diario de Importación para la Advertencia en %. Las advertencias se pueden aceptar en el Diario de Importación para enviar el documento para aprobación
| **Advertencia sobre Presupuesto:**          | Active las advertencias en el Diario de Importación si la codificación está sobre el Presupuesto. Las advertencias se pueden aceptar en el Diario de Importación para enviar el documento para aprobación

![Configuración del Control Presupuestario G/L de ExFlow](@site/static/img/media/gl-budget-control-setup-002.png)<br/><br/>

#### Aprobación
| Aprobación | |
|:-|:-|
| **Propietario del Presupuesto:**         | Agregue un grupo de aprobación para el propietario del presupuesto para aprobar cuando se exceda el presupuesto del libro mayor (más del 100%). El Propietario del Presupuesto se agregará al flujo de aprobación como último aprobador. Si está vacío, no se agregarán aprobadores de presupuesto al flujo de aprobación
| **Tolerancia de Aprobación:**   | La tolerancia de aprobación se verifica por línea de documento. Mantenga tanto el Monto como el Porcentaje lo más bajos posible. Esto se debe a que el Monto y el porcentaje son por combinación de cuenta G/L y dimensión

![Configuración del Control Presupuestario G/L de ExFlow](@site/static/img/media/gl-budget-control-setup-003.png)<br/><br/>

#### Procesamiento en Segundo Plano
La actualización de los Totales del Presupuesto G/L de ExFlow a partir de las Entradas del Libro Mayor se puede hacer al publicar desde el Estado de Aprobación o configurando una cola de trabajos. Los totales se utilizan para resumir todas las Entradas G/L por Año, Mes y Combinación de Dimensión Global.

| Procesamiento en Segundo Plano | |
|:-|:-|
| **Con Cola de Trabajos:**                       | Actualizar agregando una Cola de Trabajos programada
| **Al Publicar desde el Estado de Aprobación:**    | Actualizar al publicar desde el Estado de Aprobación

![Configuración del Control Presupuestario G/L de ExFlow](@site/static/img/media/gl-budget-control-setup-004.png)<br/><br/>

#### Función – Configuración del Control Presupuestario G/L
Se necesitan Períodos Presupuestarios G/L para que ExFlow sepa con qué presupuesto comparar la publicación.

![Configuración del Control Presupuestario G/L de ExFlow](@site/static/img/media/gl-budget-control-setup-function-001.png)

Haga clic en “Nuevo” y seleccione la Fecha de Inicio, la Fecha de Finalización y el Código de Presupuesto G/L.

![Configuración del Período Presupuestario de ExFlow](@site/static/img/media/gl-budget-period-setup-001.png)<br/><br/>

#### Función - Agregar Columnas Web
Agregará las columnas web necesarias a la Columna de ExFlow.<br/>
Para deshabilitar las Columnas de ExFlow, vaya a: ***Configuración de ExFlow --> Relacionado --> Avanzado --> Columnas.***

![Configuración del Control Presupuestario G/L de ExFlow](@site/static/img/media/gl-budget-control-setup-function-002.png)

![Configuración del Control Presupuestario G/L de ExFlow](@site/static/img/media/columns-are-added-001.png)<br/><br/>

#### Función - Actualizar Totales del Presupuesto G/L
La primera vez que se comience con el Control Presupuestario G/L de ExFlow, o al cambiar la configuración, puede ser útil acelerar el cálculo para el Control Presupuestario.

![Configuración del Control Presupuestario G/L de ExFlow](@site/static/img/media/gl-budget-control-setup-function-003.png)

Esto se puede hacer ejecutando la actualización ahora o en la fecha y hora seleccionadas.

![Configuración del Control Presupuestario G/L de ExFlow](@site/static/img/media/update-gl-budget-totals-001.png)

### Flujo de Trabajo del Control Presupuestario G/L de ExFlow
#### Comenzar con la configuración
La Configuración del Control Presupuestario G/L de ExFlow debe estar activada como se mencionó anteriormente.<br/><br/>

#### Cálculos
El cálculo utiliza la Fecha de Publicación en el documento, el Presupuesto agregado en la Configuración del Período Presupuestario para Facturas y Notas de Crédito.

Los documentos se incluyen desde el Diario de Importación, el Estado de Aprobación y los creados manualmente en Business Central (fuera del Flujo de Aprobación de ExFlow).

Se realiza por Cuenta G/L de Estado de Resultados y Combinación de Dimensión Global en la Configuración del Control Presupuestario G/L.<br/>
No hay cálculo presupuestario para Cuentas G/L de Balance.

Para Artículos, Activos Fijos, Recursos y Cargos (Artículo), el cálculo se realiza desde la Cuenta de Compra o la Cuenta de Nota de Crédito de Compra en la Configuración de Publicación General.<br/><br/>

#### Columnas en Líneas
| Columnas en Líneas | |
|:-|:-|
| **Monto Restante:**     | Muestra el Monto del Presupuesto Restante calculado como se mencionó anteriormente
| **% del Presupuesto Usado:**        | Muestra el porcentaje del presupuesto usado calculado como se mencionó anteriormente

![Diario de Importación de ExFlow](@site/static/img/media/import-journal-004-budget-control.png)

**Estado Detallado del Presupuesto:** Al usar Diferimiento o Grupos de Cuentas Automáticas en una línea de documento, puede haber varios períodos y cuentas G/L. El Estado Detallado del Presupuesto mostrará el Estado: 
- **Dentro del Presupuesto**
- **Advertencia**
- **Dentro de la Tolerancia**
- **Sobre el Presupuesto**
- **Presupuesto Faltante**


El estado mostrará el nivel de advertencia más alto de las Líneas Detalladas. Haga clic en el estado del presupuesto para mostrar las Líneas Detalladas del Presupuesto y el Monto Restante junto con el % del Presupuesto Usado.

![Diario de Importación de ExFlow](@site/static/img/media/import-journal-005-budget-control.png)

![Diario de Importación de ExFlow](@site/static/img/media/view-budget-detailed-lines-001.png)<br/><br/>

#### Función - Mostrar Presupuesto
Para mostrar cómo ExFlow ha calculado el Monto del Presupuesto Restante y el % del Presupuesto Usado, haga clic en mostrar Presupuesto.<br/>
Ir a: ***Línea --> Mostrar Presupuesto***

![Diario de Importación de ExFlow](@site/static/img/media/import-journal-006-budget-control.png)

El Resumen del Presupuesto de ExFlow es un resumen de cómo y de dónde se calcula el presupuesto.
Haga clic en **Monto** para cada línea para obtener información más detallada a nivel de transacción.

![Resumen del Presupuesto](@site/static/img/media/budget-overview-001.png)<br/><br/>

#### Diario de Importación
Si las Advertencias están activadas en la Configuración del Control Presupuestario G/L de ExFlow, aparecerán en el FactBox del Diario de Importación para el Mensaje de Advertencia. Dependiendo de la configuración, tanto la Advertencia sobre Notificación como la Advertencia sobre Presupuesto pueden mostrarse para una o varias líneas.

![Diario de Importación de ExFlow](@site/static/img/media/import-journal-007-warning-messages.png)

Todos los mensajes de advertencia se pueden aceptar para enviar el documento para aprobación.

![Mensajes de Advertencia](@site/static/img/media/warning-messages-001.png)<br/><br/>

#### ExFlow Web
En ExFlow Web se activarán las tres columnas. Monto Restante, % del Presupuesto Usado y Estado Detallado del Presupuesto.
Pero los aprobadores no pueden ver el cálculo o el Estado Detallado del Presupuesto.
Al cambiar la codificación o dividir la línea, haga clic en guardar y abra el documento nuevamente para ver los valores presupuestarios actualizados.

![ExFlow Web](@site/static/img/media/web-001-budget-control.png)<br/><br/>

#### Estado de Aprobación
Si la línea está sobre el presupuesto y el Propietario del Presupuesto está agregado en la Configuración del Control Presupuestario G/L de ExFlow, este grupo de aprobadores se agregará como último aprobador. Pero no hasta que el último aprobador en el flujo de aprobación haya aprobado. 
Esto se debe a que la codificación en la línea puede cambiar durante el flujo de aprobación y la línea puede ya no estar sobre el presupuesto.
Al agregar al Propietario del Presupuesto como aprobador en el flujo de aprobación, se marcará como “Creado en” Control Presupuestario.

![Estado de Aprobación de ExFlow](@site/static/img/media/approval-status-001.png)