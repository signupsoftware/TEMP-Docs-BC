---
title: Informes
sidebar_position: 3
hide_title: true
custom_edit_url: null
---
## Informes

Vaya a Informes de ExFlow para generar informes. Los informes se dividen en secciones según lo siguiente:

![Informe - Estado de Aprobación de ExFlow](@site/static/img/media/reports-homepage-001.png)


## Informes --> Documentos

| Informes --> Documentos |  | 
|:-|:-|
| **Estado de Aprobación de ExFlow:**        | Seguimiento del Estado de Aprobación, al final del mes use el informe para acumular costos pendientes
| **Documentos de Aprobación Publicados de ExFlow:**        | Ver documentos aprobados publicados por aprobador
| **Documentos Abiertos de ExFlow:**        | Ver documentos actuales abiertos de ExFlow
| **Historial de Aprobación de Documentos de ExFlow:**        | Ver documentos de ExFlow publicados
| **Documentos de ExFlow por Empresa:**        | Estadísticas de ExFlow en todas las empresas para comparar el año actual con el año pasado
| **Documentos del Diario de Importación de ExFlow con Errores:**        | Exporta la lista de documentos del diario de importación (y líneas relacionadas) con error
| **Cuentas por Pagar Preliminares de ExFlow:**        | Ver informe de Cuentas por Pagar con posibilidad de filtrar en Publicado Preliminarmente
| **Cuentas por Pagar Envejecidas de ExFlow:**        | Ver informe de Cuentas por Pagar Envejecidas de ExFlow

<br/>

### Estado de Aprobación de ExFlow

Vaya a: ***Informes de ExFlow \--\> Documentos \--\> Estado de Aprobación de ExFlow***

Este informe muestra todos los documentos que están pendientes de aprobación y aún no se han publicado. Use, por ejemplo, el filtro en Fecha de Vencimiento para ver documentos de un período específico. En la pestaña "Opciones" seleccione qué documentos imprimir.

![Informe - Estado de Aprobación de ExFlow](@site/static/img/media/reports-approval-status-001.png)


#### Registrar Costos Preliminares

Este informe también se puede usar para llenar un Diario General con entradas que se pueden publicar para registrar costos preliminares (por Compras) para documentos que aún no están finalmente certificados. En el ejemplo a continuación, ocurrirá lo siguiente:

- Para todas las líneas de documentos **Activas** (es decir, aún pendientes de aprobación) de tipo **Cuenta G/L** se crea un registro en el Diario General y el lote predeterminado.

- La línea tendrá la Fecha de Publicación establecida en **2021-03-31**.

- El número de Cuenta G/L se agregará desde la línea de compra y el saldo para la Cuenta G/L se establecerá en **2445**.

- También se creará una publicación inversa con fecha de publicación **2021-04-01** en la misma Cuenta G/L pero con signos opuestos.

- Todas las líneas que tengan una Fecha de Inicio de Diferimiento establecida para acumulación después de 2021-03-31 no se incluirán. Esto se debe a que el campo **"Excluir Monto de Diferimiento que ocurra después de la Fecha de Publicación:"** está marcado.

![Informe - Estado de Aprobación de ExFlow](@site/static/img/media/reports-approval-status-002.png)

![Informe - Estado de Aprobación de ExFlow](@site/static/img/media/image379.png)


##### Otras Configuraciones de Integración de Líneas del Diario

###### Opciones

**Incluir solo Líneas de G/L:**

Incluir solo Cuentas G/L en la sugerencia del Diario General. Si no se selecciona, se incluirán todos los tipos de líneas. Los artículos serán reemplazados por Cuentas G/L que se seleccionan en función de las Configuraciones de Publicación General.

**Excluir Líneas No Aprobadas:**

Dejar esta opción sin seleccionar incluirá todas las Facturas/Notas de Crédito y Líneas no solo en el Estado de Aprobación de ExFlow. Seleccionar esta opción asegurará que solo se incluyan las Líneas de Factura/Nota de Crédito generadas por ExFlow.

**Tasa de Cambio de Moneda Basada en:**

Las Facturas/Notas de Crédito en otras monedas que no sean la moneda local (LCY) deben convertirse a LCY.

Fecha de trabajo: La tasa de cambio de moneda se calcula en función de la fecha de trabajo de Business Central.

Fecha de publicación del documento: La tasa de cambio se calcula en función de la fecha de publicación de cada documento fuente.

Factor de moneda del encabezado de compra: Se utiliza la tasa de cambio (existente) del documento fuente.

###### Integración de Líneas del Diario

**Copiar Dimensiones:**

Copiar dimensiones a las líneas sugeridas del Diario General desde los documentos de origen.

**Sobrescribir Cuenta G/L desde la Línea de Compra:**

La opción en blanco sugerirá la Cuenta G/L desde la línea de compra de origen.

Siempre: Reemplazar todas las Cuentas G/L con la Cuenta G/L seleccionada a continuación.

Cuando la Línea tiene la Cuenta Predefinida: Solo reemplazar las Cuentas G/L desde las Líneas de Compra si son iguales a la Cuenta Predefinida.

**Sobrescribir Cuenta G/L:**

La Cuenta G/L utilizada para la configuración anterior.

**Excluir Monto de Diferimiento que ocurra después de la Fecha de Publicación:**

Sí: Las líneas con Fecha de Inicio de Diferimiento después de la Fecha de Publicación no se incluirán.

No: Se incluirán todas las publicaciones de diferimiento.

**Publicar el monto restante del Diferimiento:**

Publicar los montos restantes de diferimiento debido a las Plantillas de Diferimiento en la Cuenta G/L seleccionada a continuación.

**Cuenta para el monto restante del Diferimiento:**

La Cuenta G/L utilizada para la configuración anterior.

**Opción de Publicación para Artículos:**

Las opciones son Completa o Solo Cuenta de Inventario.

**Publicar Información del Proyecto**

Especifica si la información del proyecto debe incluirse al crear la línea.

**Crear Línea del Diario con Código de Moneda**

Especifica si la línea del diario creada debe crearse con el código de moneda original. La tasa de cambio se calculará a partir de la configuración en ***Opciones --> Tasa de Cambio de Moneda Basada en***

![Informe - Estado de Aprobación de ExFlow](@site/static/img/media/image381.png)

Agregar otros filtros necesarios:

![Informe - Estado de Aprobación de ExFlow](@site/static/img/media/reports-approval-status-003.png)
<br/>

### Documentos de Aprobación Publicados de ExFlow

Ir a: ***Informes de ExFlow \--\> Documentos \--\> Documentos de Aprobación Publicados de ExFlow***

El informe "Documentos de Aprobación Publicados de ExFlow" muestra documentos agrupados por aprobador. También puede incluir documentos que han sido publicados y/o con filtro para solo un aprobador. Se puede exportar a Excel.

![Informe - Documentos de Aprobación Publicados de ExFlow](@site/static/img/media/image382.png)

![Informe - Documentos de Aprobación Publicados de ExFlow](@site/static/img/media/image383.png)
<br/>

### Documentos Abiertos de ExFlow

Ir a: ***Informes de ExFlow \--\> Documentos \--\> Documentos Abiertos de ExFlow***

Este informe se puede usar para ver Documentos Abiertos para un Grupo de Aprobación específico o varios.

![Informe - Documentos Abiertos de ExFlow](@site/static/img/media/image384.png)

![Informe - Documentos Abiertos de ExFlow](@site/static/img/media/image385.png)
<br/>

### Historial de Aprobación de Documentos de ExFlow

Ir a: ***Informes de ExFlow \--\> Documentos \--\> Historial de Aprobación de Documentos de ExFlow***

Este informe se puede usar para ver el Historial de Aprobación en "Documentos Publicados" para Grupos de Aprobación y Aprobadores.

![Informe - Historial de Aprobación de Documentos de ExFlow](@site/static/img/media/image386.png)

![Informe - Historial de Aprobación de Documentos de ExFlow](@site/static/img/media/image387.png)

Este informe también proporciona información si una factura ha sido aprobada automáticamente contra una orden de compra o un contrato. La última columna a la derecha muestra: "No. de Contrato" para el Documento, "No. de Orden" para las Líneas y "Aprobado Automáticamente" para las Líneas de Aprobación.
<br/>

### Documentos de ExFlow por Empresa

Ir a: ***Informes de ExFlow \--\> Documentos \--\> Documentos de ExFlow por Empresa***

Este informe se puede usar para ver el número de documentos de ExFlow por Empresa y el número de Aprobadores por empresa.

![Informe - Documentos de ExFlow por Empresa](@site/static/img/media/image388.png)

![Informe - Documentos de ExFlow por Empresa](@site/static/img/media/image389.png)

<br/>

### Documentos del Diario de Importación de ExFlow con Errores
Ir a: ***Informes de ExFlow \--\> Documentos \--\> Documentos del Diario de Importación de ExFlow con Errores***

Descargue un archivo de Excel con todos los documentos del Diario de Importación con error. 
Elija si desea habilitar ''Todas las Líneas'', y también si un ''Nombre de Lote del Diario'' específico, luego haga clic en OK para descargar el archivo. 

![Informe - Informe de ExFlow](@site/static/img/media/reports-import-journal-001.png)
<br/>

### Cuentas por Pagar Preliminares de ExFlow
Ir a: ***Informes de ExFlow \--\> Documentos \--\> Cuentas por Pagar Preliminares de ExFlow***

Genere un informe con filtro en Publicación Preliminar. Especifique si desea que el informe muestre todos los documentos, solo Documentos Publicados Preliminarmente, o sin Documentos Publicados Preliminarmente.

También es posible filtrar por No. de Proveedor, etc.

![Informe - Informe de ExFlow](@site/static/img/media/reports-documents-preliminary-001.png)

En el ejemplo a continuación, el informe muestra solo Documentos Publicados Preliminarmente sin ningún otro filtro establecido.

![Informe - Informe de ExFlow](@site/static/img/media/reports-documents-preliminary-002.png)
<br/>

### Cuentas por Pagar Envejecidas de ExFlow
Ir a: ***Informes de ExFlow \--\> Documentos \--\> Cuentas por Pagar Envejecidas de ExFlow***

Genere un informe de Envejecimiento de Documentos y deje que ExFlow especifique si el envejecimiento se calculará a partir de la fecha de vencimiento, la fecha de publicación o la fecha del documento, entre otros filtros.

![Informe - Informe de ExFlow](@site/static/img/media/reports-documents-aged-accounts-001.png)

En el ejemplo a continuación, el informe se genera con el filtro: ''Envejecimiento por: Fecha de Vencimiento'' y ''Tipo de Encabezado'' establecido como ''Intervalo de Fechas'', y también para excluir documentos publicados preliminarmente.

![Informe - Informe de ExFlow](@site/static/img/media/reports-documents-aged-accounts-002.png)

<br/><br/>

## Informes --> Usuario de ExFlow

| Informes --> Usuario |  | 
|:-|:-|
| **Usuarios de ExFlow:**        | Usuarios de ExFlow y sus detalles en todas las empresas
| **Seguimiento de Aprobación de ExFlow:**        | Ver documentos actuales de ExFlow por usuario
| **Estadísticas de Aprobadores de ExFlow:**        | Ver el rendimiento del aprobador
| **Reemplazos de Usuarios de ExFlow:**        | Ver reemplazos para todos los usuarios de ExFlow
| **Datos Relacionados con el Usuario de ExFlow GDPR:**        | Ver dónde se utilizan los datos personales en ExFlow 

<br/>

### Usuarios de ExFlow

Ir a: ***Informes de ExFlow \--\> Usuario \--\> Usuarios de ExFlow***

Este informe muestra tanto los Usuarios de ExFlow como la Configuración de Usuarios para todas las empresas.
Incluye diferentes opciones de filtro.

![Informe - Usuarios de ExFlow](@site/static/img/media/image390.png)

![Informe - Usuarios de ExFlow](@site/static/img/media/image391.png)
<br/>

### Seguimiento de Aprobación de ExFlow

Ir a: ***Informes de ExFlow --> Usuarios --> Seguimiento de Aprobación de ExFlow***

Este informe se puede usar para hacer un seguimiento de los Aprobadores con líneas de documentos no aprobadas. Agregue un filtro para un "Grupo de Aprobación" específico.

![Informe - Seguimiento de Aprobación de ExFlow](@site/static/img/media/image392.png)

![Informe - Seguimiento de Aprobación de ExFlow](@site/static/img/media/image393.png)
<br/>

### Estadísticas de Aprobadores de ExFlow

Ir a: ***Informes de ExFlow \--\> Usuario \--\> Estadísticas de Aprobadores de ExFlow***

Este informe proporciona a los administradores/usuarios estadísticas sobre los Aprobadores, por ejemplo, "Número de líneas aprobadas, Promedio de días de aprobación".

![Informe - Estadísticas de Aprobadores de ExFlow](@site/static/img/media/image394.png)

![Informe - Estadísticas de Aprobadores de ExFlow](@site/static/img/media/image395.png)
<br/>

### Reemplazos de Usuarios de ExFlow

Ir a: ***Informes de ExFlow \--\> Usuario \--\> Reemplazos de Usuarios de ExFlow***

Este informe muestra los Reemplazos de Usuarios para diferentes usuarios en diferentes períodos. Los administradores/usuarios pueden filtrar por un usuario específico o por "Todos los Usuarios".

![Informe - Reemplazos de Usuarios de ExFlow](@site/static/img/media/image396.png)

![Informe - Reemplazos de Usuarios de ExFlow](@site/static/img/media/image397.png)
<br/>

### Datos Relacionados con el Usuario de ExFlow GDPR

Ir a: ***Informes de ExFlow \--\> Usuario \--\> Datos Relacionados con el Usuario de ExFlow GDPR***

Este informe muestra todos los datos relacionados con GDPR para un Usuario específico.

![Informe - Datos Relacionados con el Usuario de ExFlow GDPR](@site/static/img/media/image398.png)

![Informe - Datos Relacionados con el Usuario de ExFlow GDPR](@site/static/img/media/image399.png)
<br/><br/>

## Informes --> Reglas de Aprobación

| Informes --> Reglas de Aprobación |  | 
|:-|:-|
| **Reglas de Aprobación de ExFlow:**        | Vista detallada de todas las Reglas de Aprobación definidas para el flujo de trabajo de ExFlow
| **Reglas de Aprobación de ExFlow por Usuario:**        | Ver Reglas de Aprobación por usuario
| **Lista de Reglas de Aprobación de ExFlow:**        | Ver lista de Reglas de Aprobación

<br/>

### Reglas de Aprobación de ExFlow

Ir a: ***Informes de ExFlow \--\> Reglas de Aprobación \--\> Reglas de Aprobación de ExFlow***

Este informe muestra "Reglas de Aprobación" por empresa. Hay diferentes opciones de filtro, como "Proveedor" o "Valor de Dimensión" que también se pueden aplicar.

Marque la casilla "Mostrar Líneas de Grupo de Aprobación" para agregar información de líneas de grupo de aprobación en el informe.

![Informe - Reglas de Aprobación de ExFlow](@site/static/img/media/image400.png)

![Informe - Reglas de Aprobación de ExFlow](@site/static/img/media/image401.png)
<br/>

### Reglas de Aprobación de ExFlow por Usuario

Ir a: ***Informe de ExFlow \--\> Reglas de Aprobación \--\> Reglas de Aprobación de ExFlow por Usuario***

Este informe muestra "Reglas de Aprobación por Usuario" con opciones de filtro por "Empresa", "ID de Usuario", nombre, etc. Los administradores/usuarios también pueden incluir Reemplazos de Usuarios para una fecha específica.

![Informe - Reglas de Aprobación de ExFlow por Usuario](@site/static/img/media/image402.png)

![Informe - Reglas de Aprobación de ExFlow por Usuario](@site/static/img/media/image403.png)

<br/>

### Lista de Reglas de Aprobación de ExFlow
Ir a: Informe de ExFlow --> Reglas de Aprobación --> Lista de Reglas de Aprobación de ExFlow

Genere un informe basado en todas las reglas de aprobación o reglas seleccionadas.

![Informe - Lista de Reglas de Aprobación de ExFlow](@site/static/img/media/reports-approval-rules-list-001.png)

![Informe - Lista de Reglas de Aprobación de ExFlow](@site/static/img/media/reports-approval-rules-list-002.png)
