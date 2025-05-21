---
title: Configuración de Sugerencia de Codificación Automática
sidebar_position: 17
hide_title: true
custom_edit_url: null
---
## Configuración de Sugerencia de Codificación Automática

Vaya a: ***Configuración de ExFlow - Resumen --> Configuración de Sugerencia de Codificación Automática*** o busque ***Configuración de Sugerencia de Codificación Automática de ExFlow***

Esta función en ExFlow está diseñada para obtener sugerencias de codificación automáticas en el Diario de Importación basadas en documentos históricamente contabilizados y funciona tanto para facturas como para notas de crédito. Esto puede ser útil para empresas que tienen un historial de contabilización en Business Central pero recién comienzan a usar ExFlow.<br/>

*Sugerencia de Codificación Automática* puede proporcionar sugerencias de codificación si no se ha aplicado ningún otro tipo de sugerencia, como un Código de Compra de ExFlow o una Cuenta mayor predefinida. La Sugerencia de Codificación Automática actualiza continuamente las sugerencias de codificación después de contabilizar los documentos, para ofrecer siempre una sugerencia futura precisa.<br/>

**Nota importante:** Esta función solo admite Cuentas mayor, no otros tipos de línea. 

Los pasos para tener una correcta Sugerencia de Codificación Automática serían: <br/>
1. Tener un historial de documentos contabilizados <br/>
2. Crear IDs de conjunto de codificación<br/> 
3. Crear sugerencias<br/>
<br/>

O bien, dejar que ExFlow gestione la Sugerencia de Codificación Automática a través de [Actividades Periódicas](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/auto-coding-suggestion-setup#periodic-activities), donde los pasos consistirían en ejecutar los informes para:
* Crear IDs de conjunto de codificación <br/>
* Crear sugerencias de codificación automáticas<br/>

## Configuración 
### Añadir una nueva Sugerencia de Codificación Automática

Para comenzar con las Sugerencias de Codificación Automática, se deben añadir Tipo(s) de Origen. Puede ser un Proveedor, un Grupo de registro comercial general, un Grupo de registro de proveedor o elegir todos ellos como última opción.

![Configuración de Sugerencia de Codificación de ExFlow](@site/static/img/media/auto-coding-suggestion-003.png)

Añadir un tipo de origen también creará un ID de Configuración. El siguiente paso, después de añadir un Tipo de Origen, es hacer clic en ''Crear Sugerencia''. 

Ingrese ''Sugerencias'' para ver las sugerencias recién creadas. 

![Configuración de Sugerencia de Codificación de ExFlow](@site/static/img/media/auto-coding-suggestion-004.png)


| Cinta de opciones de Configuración de Sugerencia de Codificación Automática     |	|
|:-|:-|
| **Nuevo**:    | Añadir una nueva Sugerencia de Codificación
| **Editar Lista**:    | Editar la lista de Configuración de Sugerencia de Codificación
| **Eliminar**:    | Eliminar una Sugerencia de Codificación
| **Crear Sugerencia**:    | Este botón recorre la configuración y añade Sugerencias al ID de Sugerencia
| **Sugerencias:**          | Muestra el ID de Sugerencia creado para la Configuración seleccionada
| **Eliminar Sugerencias:**   | Elimina los IDs de Sugerencia
| **Historial de Documentos de Codificación:**   | Abre la página de Historial de Documentos de Sugerencia de Codificación Automática de ExFlow
| **Agrupar Documentos Por:**   | Abre la Lista de Agrupación de Sugerencia de Codificación Automática de ExFlow
| **Aplicar Campos:**   | Abre la Configuración de Transferencia de Campos de Sugerencia de Codificación Automática



#### Configuración Avanzada
Active la opción **''Mostrar Configuración Avanzada''** en la página de Configuración de Sugerencia de Codificación Automática para obtener una vista completa de la página, si es necesario añadir una configuración más avanzada.

![Configuración de Sugerencia de Codificación de ExFlow](@site/static/img/media/coding-suggestion-setup-001.png)

<br/>

| Configuración de Sugerencia de Codificación Automática --> Nuevo/Editar Lista      |	|
|:-|:-|
| **ID de Configuración:**                                          |Especifica el ID de la configuración de sugerencia de codificación.
| **Tipo de Origen:**                                          |Grupo de registro comercial general, Grupo de registro de proveedor, Proveedor o Todos. Esto definirá la agrupación de Sugerencias creadas por ExFlow
| **Nº de Origen:**                                            | Esto definirá qué Nº del "Tipo de Origen" específico en el que se debe utilizar esta configuración. <br/>Si el Nº de Origen se deja vacío para el Tipo de Origen Proveedor, la agrupación se realiza por Proveedor para todos los Proveedores. <br/>Al crear un ID de configuración con "Tipo de Origen" Proveedor y "Nº de Origen" en blanco, se crearán sugerencias de codificación de todos los proveedores, donde las sugerencias siempre se filtrarán por proveedor


<br/>

### Activación de Sugerencia de Codificación Automática
Vaya a: **Configuración de ExFlow --> Sugerencia de Codificación Automática**

Active esta función en la Configuración de ExFlow habilitándola para todos los Proveedores o Proveedores Seleccionados.

Al activar "Proveedores Seleccionados", es necesario habilitar también "Sugerir Codificación Automática para Documento Importado" para los proveedores, en la tarjeta [***Configuración de Proveedor de ExFlow***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/vendor-setup) que debe tener esta función habilitada. 

![Configuración de ExFlow - Sugerencia Automática](@site/static/img/media/exflow-setup-automatic-suggestion-001.png)

| Sugerencia de Codificación Automática     |	|
|:-|:-|
| **Agrupación de Documentos en Líneas de Sugerencia con Importe:**    | Especifica cómo se agruparán los documentos basándose en el importe del documento. Se pueden establecer las siguientes opciones: ''Más Cercano al Valor Promedio, Más Cercano al Valor Inferior y Más Cercano al Valor Superior''. 
| **Decisión de Sugerencia de Codificación Automática Basada en el Importe:**           | Especifica cómo se elegirá la línea de sugerencia basándose en el importe del documento. Se pueden establecer las siguientes opciones: ''Más Cercano al Valor Promedio, Más Cercano al Valor Inferior y Más Cercano al Valor Superior''.
| **Sugerir Codificación Automática para Documento Importado:**           | Especifica cómo se utilizará la sugerencia de codificación automática. Se pueden establecer las siguientes opciones: ''Nunca, Siempre y Proveedores Seleccionados''.
| **Calcular Sugerencias Automáticas Desde Fecha:**                          | Especifica la fecha de inicio del documento que se utilizará en las sugerencias de codificación automática.
| **Sugerir Importe de Codificación Automática desde ID de Conjunto de Codificación:**       | Especifica si los importes se sugerirán automáticamente en las líneas creadas desde el ID de Conjunto de Codificación. Se pueden establecer las siguientes opciones: ''Nunca, Siempre y Proveedores Seleccionados''.

<br/>


## Actividades Periódicas
Vaya a: **Actividades Periódicas de ExFlow**

Para aplicar la Sugerencia de Codificación Automática, es necesario ejecutar las funciones **IDs de Conjunto de Codificación de ExFlow para Sugerencias de Codificación Automática** y **Creación de Sugerencias de Codificación Automática de ExFlow**. <br/>

![medio](@site/static/img/media/exflow-meny-auto-coding-001.png) 

El primer uso de la Sugerencia de Codificación Automática requerirá que ambos trabajos (Informe 12013594 y 12013593) se ejecuten al menos una vez. Después de esto, la recurrencia puede ajustarse en las entradas correspondientes de la Cola de Trabajos.

El Informe 12013594 actualizará la agrupación del ID de Conjunto de Codificación en las Líneas de Sugerencia de Codificación Automática de ExFlow. Luego, el Informe 12013593 (Configuración de Sugerencia de Codificación de ExFlow - Actualizar – Proyecto) puede utilizarse para actualizar la ''Configuración de Sugerencia de Codificación Automática de ExFlow''. Se recomienda utilizar ambos informes una vez al día, después del horario de oficina.


## Flujo de trabajo


### Diario de Importación

#### Crear Líneas con Sugerencia Automática

Vaya a: **Diarios de Importación de ExFlow** 

Edite la lista del diario y habilite **Crear Líneas con Sugerencia Automática** para activar esta función para un Diario de Importación específico y tener un diario dedicado para Sugerencias de Codificación Automática.

![Diarios de Importación de ExFlow](@site/static/img/media/import-journals-008.png)

<br/>

#### Sugerir Codificación Automática para Documento Importado


#### Manualmente desde el Diario de Importación

##### Sugerencia de Codificación Automática - Elección Manual
Vaya a: ***Diario de Importación --> Inicio --> Sugerencia de Codificación Automática - Elección Manual***

Abre la lista de Sugerencia de Codificación Automática relacionada con el documento seleccionado.

La Elección Manual da la opción de navegar a través de diferentes IDs de Conjunto de Codificación y elegir manualmente una sugerencia de codificación.

Esta página mostrará la mejor coincidencia para la codificación de la factura que se seleccionó antes de presionar el botón para elegir manualmente la sugerencia de codificación. En la esquina derecha es posible ver la codificación de las Líneas de Sugerencia de Codificación seleccionadas para ese ID de Configuración específico.

![Sugerencia de Codificación de ExFlow para Diario de Importación](@site/static/img/media/auto-coding-suggestion-001.png)

|Sugerencia de Codificación Automática - Elección Manual     | |
|:-|:-|
|Aplicar ID de Conjunto de Codificación| Esto aplicará la codificación vista en la esquina derecha a la factura.
|Mostrar Líneas de Documento| Abrirá la página de Documento de Sugerencia de Codificación de ExFlow. 
|Mostrar Todo|Esto mostrará todos los IDs de Configuración para la posibilidad de elegir manualmente una codificación sugerida para, por ejemplo, otro proveedor.
|Mostrar Sugerencia Inicial| Esto volverá a la sugerencia inicial mostrada cuando la página se abrió por primera vez.


###### Documento de Sugerencia de Codificación de ExFlow

En esta página, la codificación se muestra con más detalle. También es posible comparar las Líneas Sugeridas con las líneas Actuales en la factura.

|Sugerencia de Codificación Automática - Automática    | |
|:-|:-|
|Aplicar Codificación Sugerida| Esto aplica la codificación sugerida a la factura.
|Sugerir Última Codificación|Esto aplica la codificación del último documento contabilizado de ese proveedor.
|Sugerir Codificación Preseleccionada| Esto sugiere la codificación que se originó como la selección en la ventana anterior.
|Sugerir Codificación Automática| Esto sugerirá la codificación automática basada en la Configuración de Sugerencia Automática.

![Documento de Sugerencia de Codificación de ExFlow](@site/static/img/media/auto-coding-suggestion-002.png)

#### Sugerencia de Codificación Automática - Automática
Vaya a: ***Diario de Importación --> Inicio --> Sugerencia de Codificación Automática - Automática***

Aplica la codificación de línea elegida por el algoritmo de sugerencia.

Esto introducirá una codificación basada en la información de la factura. Elegirá la codificación basada en la Configuración de Codificación Automática.