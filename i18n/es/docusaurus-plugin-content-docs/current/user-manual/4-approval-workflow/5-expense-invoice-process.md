---
title: Proceso de Factura de Gastos
sidebar_position: 5
hide_title: true
custom_edit_url: null
---
## Proceso de Factura de Gastos

Este capítulo da un ejemplo de un flujo de facturas en ExFlow desde la importación hasta la aprobación y publicación en ExFlow / Business Central.

Los siguientes pasos se realizan desde el "Diario de Importación de ExFlow" --> "Estado de Aprobación de ExFlow" y el paso final será ver la factura publicada en el "Historial de Estado de Aprobación de ExFlow".

**Pasos en el Diario de Importación de ExFlow**

Paso 1 Importar Documento

Paso 2 Verificar y manejar el "Mensaje de Acción". Si está en blanco, pasar al Paso 4

Paso 3 Cuando se haya realizado la acción, verificar y ver si se han tomado todas las acciones.

Paso 4 Crear Factura o Nota de Crédito

### Importar y manejar una Factura de Compra de Gastos

La importación de facturas se realiza desde el "Diario de Importación de ExFlow". Importar documentos ya sea a todos los diarios o abrir e importar documentos en un diario específico.

Esta parte describe la forma de importar desde un diario creado para usar solo para "Facturas de Gastos".

Seleccione un diario y ábralo haciendo clic en "Editar Diario" o haciendo clic en el nombre.

![Diarios de Importación de ExFlow](@site/static/img/media/image277.png)

Paso 1 -- Importar Documento

Ir a: ***Acciones --> Importar --> Importar Documentos...***

Cuando se realiza la importación, se crea una nueva línea.

![Diario de Importación de ExFlow](@site/static/img/media/image278.png)

Paso 2 -- Verificar y manejar "Mensajes de Acción".

En este ejemplo no hay reglas de aprobación predefinidas, por lo que los Aprobadores deben ser agregados manualmente a la Línea de Factura.

![Diario de Importación de ExFlow](@site/static/img/media/image279.png)

Seleccione: ***Línea --> Mostrar Propuesta de Aprobación***

![Diario de Importación de ExFlow - Líneas de Importación](@site/static/img/media/image280.png)

Agregue uno o varios aprobadores.

![Diario de Importación de ExFlow - Líneas de Importación - Propuesta de Aprobación](@site/static/img/media/image281.png)

En el FactBox a la derecha, los aprobadores se actualizarán en la "Propuesta de Aprobación".

![Diario de Importación de ExFlow - FactBox - Propuesta de Aprobación](@site/static/img/media/image282.png)

Paso 3 -- Verificar Documento

Ir a: ***Proceso --> Verificar Documento / Verificar Documentos por Lotes***

Cuando se hayan manejado todos los mensajes de acción, "Verificar Documento" para ver si el mensaje de acción está vacío y, por lo tanto, listo para ser creado.

Paso 4 -- Crear Documento

Ir a: ***Crear --> "Crear Facturas/Notas de Crédito por Lotes"... / "Crear Factura/Nota de Crédito"***

Crear factura o nota de crédito haciendo clic en "Crear Factura/Nota de Crédito".

![Diario de Importación de ExFlow](@site/static/img/media/image283.png)

![Diario de Importación de ExFlow - Documento convertido](@site/static/img/media/image284.png)