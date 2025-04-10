---
title: Publicación Preliminar
sidebar_position: 23
hide_title: true
custom_edit_url: null
---
## Publicación Preliminar

Use la Publicación Preliminar de ExFlow para registrar costos e IVA al recibir y crear documentos. Registre sus costos e IVA directamente para generar informes financieros y fiscales con un esfuerzo mínimo.

Las Entradas de Libro Mayor de Proveedores publicadas se crearán en una cuenta de balance regular o en una cuenta de balance separada según su configuración y se incluirán en el Flujo de Caja.

Elija la Cuenta G/L por Tipo de Línea y Grupos de Publicación, o a una Cuenta Provisional. Las Entradas de Libro Mayor de Trabajos y los Diferimientos también están incluidos.

Una vez que el documento esté completamente aprobado y publicado, la Publicación Preliminar se revierte automáticamente.

La Publicación Preliminar solo está disponible para Facturas y Notas de Crédito activadas para la Aprobación de ExFlow.

### Configuración de ExFlow
Para poder realizar la publicación preliminar, ExFlow necesita los siguientes diarios y el Registro de Entrada (SweBase) debe estar deshabilitado.

![Configuración de ExFlow - Publicación Preliminar](@site/static/img/media/exflow-setup-preliminary-posting-001.png)

| Configuración de ExFlow - Publicación Preliminar  |	|
|:-|:-|
| **Publicación Preliminar:**          | Cuando la configuración a continuación esté hecha, active la Publicación Preliminar
|**Código de Fuente:**                   | Use uno existente o cree uno nuevo para facilitar el seguimiento
| **Plantilla de Diario General:**     | Use una existente o cree una nueva
| **Lote de Diario General:**        | Use uno existente o cree uno nuevo
| **En Espera:**                      | 1-3 letras que se agregarán en las Entradas de Libro Mayor de Proveedores para evitar pagos en documentos publicados preliminarmente que aún no están aprobados. El valor predeterminado al ejecutar el Asistente de ExFlow será **EXF**, pero se puede cambiar si es necesario.
| **Redondeo de Factura:**             | Si SweBase (para clientes suecos) está instalado, el Redondeo de Factura es visible y se usa solo para la Publicación Preliminar     <br/>Si SweBase no está instalado, será visible bajo Verificaciones de Publicación de Documentos y se usará tanto para la Publicación Preliminar como para la Publicación. El Redondeo de Factura no es obligatorio.  <br/>Para más información, vaya a la sección [***Redondeo de Factura a continuación***](https://docs.signupsoftware.com/business-central/docs/user-manual/approval-workflow/exflow-approval-status#invoice-rounding)
| **Descripción de Publicación:**          | Descripción al Publicar  <br/>El valor predeterminado al ejecutar el Asistente de ExFlow será **Publicado Preliminarmente**, pero se puede cambiar si es necesario
| **Descripción de Reversión:**          | Descripción al Revertir.   <br/>El valor predeterminado al ejecutar el Asistente de ExFlow será **Revertido Preliminarmente**, pero se puede cambiar si es necesario
| **Grupo de Publicación de Prod. IVA 0%:**   | Agregue un Grupo de Publicación de Prod. IVA con 0% para publicar preliminarmente sin IVA en lugar del Grupo de Publicación de Prod. IVA agregado en la línea del documento. Esta publicación se revertirá y la publicación del IVA se registrará con el Grupo de Publicación de Prod. IVA agregado a la factura solo en la publicación final.

### Configuración de Publicación Preliminar
Ir a: ***Configuración de ExFlow --> Relacionado --> Avanzado --> Configuración de Publicación Preliminar*** <br/>
Esta página se abrirá automáticamente al activar la Publicación Preliminar.

#### Elegir Opción de Publicación por Tipo de Línea

| Configuración de Publicación Preliminar de ExFlow   |	|
|:-|:-|
| **Cuenta Provisional:**      | La publicación se realizará según los grupos de publicación en la Configuración de Publicación General y la *Cuenta Provisional de Publicación Preliminar de ExFlow*
| **Cuenta de Compras:**     | Las líneas de documentos con Tipo de Línea G/L, la publicación se realizará en la cuenta G/L actual en la línea del documento   <br/>Para Artículo, Recurso, Activos Fijos y Cargos (Artículo) la publicación se realizará según los grupos de publicación en la Configuración de Publicación General. *Cuenta de Compras* para Facturas y *Cuenta de Nota de Crédito de Compras* para Notas de Crédito

![Configuración de Publicación Preliminar de ExFlow](@site/static/img/media/preliminary-posting-setup-001.png)

Toda la configuración necesaria para la Publicación Preliminar, Configuración de Publicación General y Configuración de Publicación de Proveedores, se puede acceder desde la Configuración de Publicación Preliminar de ExFlow. Lea más a continuación.

Después de cerrar la página de Publicación Preliminar, recibirá una pregunta si hay Facturas o Notas de Crédito en Estado de Aprobación.

![¿Desea Publicar Preliminarmente?](@site/static/img/media/preliminary-post-all-invoices-001.png)

Al elegir publicar preliminarmente todos los documentos en Estado de Aprobación, pueden aparecer mensajes de error. Vaya al Estado de Aprobación y corrija el error y publique preliminarmente manualmente por documento.

Lea más en la sección [***Estado de Aprobación***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/preliminary-posting#approval-status)

![Hay documentos que aún no se han publicado preliminarmente.](@site/static/img/media/documents-not-yet-preliminary-posted-001.png)

#### Configuración de Publicación General

Hay un acceso directo desde la Configuración Preliminar.

Cuentas G/L utilizadas para Artículo, Recurso, Activo Fijo y Cargo de Artículo cuando se selecciona **Cuenta de Compras** en la Opción de Publicación.

![Configuración de Publicación General - Cuenta de Compras](@site/static/img/media/general-posting-setup-001.png)

Cuentas G/L utilizadas cuando se selecciona **Cuenta Provisional** en la Opción de Publicación.

![Configuración de Publicación General - Cuenta Provisional](@site/static/img/media/general-posting-setup-002.png)

#### Grupos de Publicación de Proveedores

Hay un acceso directo desde la Configuración Preliminar.

Es posible Publicar Preliminarmente a una Cuenta de Pagos separada.

Agregue un nuevo Grupo de Publicación de Proveedores, uno o varios, y agréguelo a los grupos existentes en el campo Grupo de Publicación de Proveedores Preliminar de ExFlow. <br/>
Si el Grupo de Publicación de Proveedores se usa como Grupo de Publicación Preliminar de ExFlow, no se puede usar en ningún otro lugar.

Para usar la configuración estándar, deje el Grupo de Publicación de Proveedores Preliminar de ExFlow en blanco.

![Grupo de Publicación de Proveedores](@site/static/img/media/vendor-posting-groups-001.png)

### Funciones incluidas en la Publicación Preliminar

#### Cuentas G/L

La Publicación Preliminar se realizará según la configuración en la Configuración de Publicación Preliminar.

#### Fechas de Publicación

Fecha de Publicación del Documento y Fecha de IVA al crear el documento.

#### Serie de Números

Números de Publicación iguales a los Números de Publicación de Factura o Números de Publicación de Nota de Crédito en el documento.

#### Verificaciones de Publicación

Habrá control para Verificaciones de Creación de Documentos y Mover Diferimiento Adelante.

Pero también el siguiente control de Verificaciones de Publicación de Documentos en la Configuración de ExFlow:

Configuración de ExFlow - Verificaciones de Publicación de Documentos:

- No Publicar Cuenta Predefinida <br/>
- Verificar Monto Bruto <br/>
- Diferencia Máxima para Monto Bruto (LCY)

#### Entradas de Publicación incluidas en la Publicación Preliminar

Entradas incluidas en la Publicación Preliminar:

- Entrada G/L <br/>
- Entrada de IVA <br/>
- Entrada de Libro Mayor de Proveedores <br/>
- Detalle de Entrada de Libro Mayor de Proveedores <br/>
- Entrada de Libro Mayor de Trabajos <br/>
- Registro G/L

#### Entradas de Publicación no incluidas

Entradas no incluidas en la Publicación Preliminar:

- Factura/Nota de Crédito de Compra Publicada<br/>
- Entradas de Libro Mayor de Artículos <br/>
- Entrada de Valor (Artículo) <br/>
- Entrada de Libro Mayor de Recursos (Recurso) <br/>
- Entrada de Libro Mayor de Activos Fijos

### Funciones al revertir la Publicación Preliminar

La reversión se realizará cuando el documento esté aprobado, verificado y publicado finalmente o eliminado. La reversión se publicará como se mencionó anteriormente, pero con las siguientes diferencias:

#### Fecha de Publicación del Documento y Fecha de IVA

La reversión se publicará en las fechas de publicación actuales del documento. Por lo tanto, la reversión se puede realizar incluso después de cerrar el período.

#### Diferimientos

Si la fecha de publicación del diferimiento permitida está cerrada, la reversión de los diferimientos se publicará en la primera fecha de publicación del diferimiento permitida. Por lo tanto, la reversión de los diferimientos se puede realizar incluso después de cerrar el período.

### Flujo de Trabajo de Publicación Preliminar

#### Diario de Importación

Antes de crear el documento, se puede previsualizar la Publicación Preliminar.

Crear documento desde el Diario de Importación para publicar preliminarmente.

![Diario de Importación - Previsualizar Publicación](@site/static/img/media/import-journal-023-preview-posting.png)

#### Estado de Aprobación

En el Estado de Aprobación es posible ver si el documento ha sido publicado preliminarmente o no.

Para acceder a las funciones <br/>
Ir a: ***Estado de Aprobación de ExFlow --> Acciones --> Publicación Preliminar***

| Estado de Aprobación - Publicación Preliminar     |	|
|:-|:-|
| **Publicar:**             | La publicación solo se puede realizar una vez
| **Previsualizar Publicación:**  | Previsualizar Publicación antes de publicar
| **Revertir:**          | Para corregir la Publicación, Revertir, corregir el documento y publicar nuevamente
| **Buscar Entradas:**     | Buscar Entradas para Documentos Publicados Preliminarmente

![Estado de Aprobación de ExFlow - Preliminar](@site/static/img/media/approval-status-005-preliminary-posting.png)

#### Tarjeta de Factura y Nota de Crédito

Para poder Publicar Preliminarmente un documento, debe estar Activado para la Aprobación de ExFlow.

Si la Aprobación de ExFlow está desactivada, la Publicación Preliminar se revertirá. Y si se activa, la Factura/Nota de Crédito se publicará.

![Tarjeta de Factura](@site/static/img/media/purchase-invoice-001-preliminary-posting.png)

Todas las funciones en el Estado de Aprobación también están disponibles desde la Tarjeta. <br/>
Ir a: ***Acciones --> Publicación Preliminar***

![Tarjeta de Factura - Publicación Preliminar](@site/static/img/media/purchase-invoice-002-preliminary-posting.png)

#### Correcciones

Si la publicación necesita ser corregida, Revertir, corregir el documento y realizar una nueva Publicación Preliminar. Todas las publicaciones y reversiones utilizarán la Fecha de Publicación y la Fecha de IVA actuales.

#### Historial de Aprobación

Todas las publicaciones se pueden encontrar en Buscar entradas. Elimine el filtro en Fecha para mostrar todas.

#### Eliminar Documento

Al eliminar un Documento Publicado Preliminarmente, la reversión se realizará en la Fecha de Publicación y la Fecha de IVA actuales.

#### Documentos Eliminados de ExFlow

Al eliminar un documento o desactivar para la Aprobación de ExFlow, se guardará una copia del documento en Documentos Eliminados de ExFlow.

Para encontrar Entradas Publicadas Preliminarmente <br/>
Ir a: ***Relacionado --> Publicación Preliminar --> Buscar Entradas***

Elimine el filtro en Fecha para mostrar todas.

![Documentos Eliminados de ExFlow - Publicación Preliminar](@site/static/img/media/deleted-documents-001-find-entries.png)

#### Entradas de Libro Mayor de Proveedores

Al Publicar o Revertir una Publicación Preliminar, se publicará una Entrada de Libro Mayor de Proveedores y también se incluirá en el Flujo de Caja.

La Descripción de Publicación se agregará desde la Configuración de ExFlow.

![Entradas de Libro Mayor de Proveedores - Publicación Preliminar](@site/static/img/media/vendor-ledger-entries-002-preliminary-posting.png)

ExFlow Publicado Preliminarmente estará marcado y En Espera se agregará desde la Configuración de ExFlow y no se puede cambiar después de la publicación.

Las Entradas de Libro Mayor de Proveedores Publicadas Preliminarmente no se pueden usar para Aplicar Entradas desde Entradas de Libro Mayor de Proveedores o Diarios de Pago.

![Entradas de Libro Mayor de Proveedores - Publicación Preliminar](@site/static/img/media/vendor-ledger-entries-003-preliminary-posting.png)

Hay un filtro rápido agregado para ordenar o excluir Entradas Publicadas Preliminarmente.<br/>
Ir a: ***Relacionado --> Filtro de Publicación Preliminar de ExFlow***

Filtros de Publicación Preliminar:
- **Mostrar solo Publicadas/Revertidas Preliminarmente** <br/>
- **Excluir Publicadas/Revertidas Preliminarmente** <br/>
- **Mostrar todas** <br/>

![Entradas de Libro Mayor de Proveedores - Filtro de Publicación Preliminar de ExFlow](@site/static/img/media/vendor-ledger-entries-004-preliminary-posting.png)

#### Publicación Final

Después de que el documento esté Aprobado y Verificado, publique el documento como de costumbre y la Publicación Preliminar se revertirá en la Fecha de Publicación actual del documento.

La Entrada de Libro Mayor de Proveedores para la reversión se aplicará al documento Publicado Preliminarmente y el Monto Restante se establecerá en cero.

#### Informe de Estado de Aprobación

El Informe de Estado de Aprobación en el cierre mensual aún se puede usar.

Para la Publicación Preliminar, use la Opción de Publicación, Cuenta Provisional, en la Configuración de Publicación Preliminar y la misma Cuenta G/L para todas las publicaciones en la Configuración de Publicación General en la Cuenta Provisional de Publicación Preliminar de ExFlow.

Al crear el informe y las Entradas G/L, revierta la Publicación Preliminar utilizando la misma Cuenta G/L para la Cuenta de Balance.

Recupere Líneas de Líneas de Documentos de ExFlow y todos los documentos se publicarán con la codificación más reciente, incluso si no están completamente aprobados.

![Informe de Estado de Aprobación](@site/static/img/media/report-approval-status-001-preliminary-posting.png)

Para más información sobre el Informe de Estado de Aprobación, lea más en las secciones **Informes** e **Informe de Estado de Aprobación**.

#### ExFlow Cuentas por Pagar Preliminares

Este informe se basa en el informe estándar de Business Central con la opción de elegir filtro en documentos Publicados Preliminarmente de ExFlow.

![ExFlow Cuentas por Pagar Preliminares](@site/static/img/media/report-exflow-preliminary-accounts-payable-001.png)

#### ExFlow Cuentas por Pagar Antiguas

Este informe se basa en el informe estándar de Business Central con la opción de elegir filtro en documentos Publicados Preliminarmente de ExFlow.

![ExFlow Cuentas por Pagar Antiguas](@site/static/img/media/report-exflow-preliminary-accounts-payable-002.png)