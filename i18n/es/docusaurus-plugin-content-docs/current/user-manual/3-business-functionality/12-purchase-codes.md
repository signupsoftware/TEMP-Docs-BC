---
title: Códigos de Compra
sidebar_position: 12
hide_title: true
custom_edit_url: null
---

## Códigos de Compra

Ir a: ***Configuración \--\> Configuración Manual de ExFlow \--\> Códigos de Compra de ExFlow***

Un Código de Compra de ExFlow se puede usar para agregar codificación en las líneas de factura automáticamente desde la Tarjeta de Configuración del Proveedor, Referencia, Contrato o Configuración de ExFlow. El Código de Compra de ExFlow puede dividir líneas en varios códigos de dimensión, Grupos de Publicación de Productos de IVA, etc.

### Crear un nuevo Código de Compra de ExFlow

#### General
Comience haciendo clic en "Nuevo". Ingrese un Código y una Descripción que se adapten al Código de Compra de ExFlow.

| General      |    |
|:-|:-|
| **Proponer Línea de IVA:**             | Esta configuración necesita ser establecida en la Configuración de ExFlow para el Grupo de Publicación de Productos de IVA 0% y el Grupo de Publicación de Productos de IVA 100%. Luego, se puede agregar automáticamente una línea separada para el Monto del IVA para un Código de Compra de ExFlow específico.
| **Verificación de Monto de Creación de Documento:**   | En la Configuración de ExFlow hay una configuración para Verificaciones de Creación de Documentos en Monto de Prueba. Con esta configuración, es posible un control de monto separado para un Código de Compra de ExFlow específico. <br/><br/>**Ninguno:** Sin verificación entre el monto en el encabezado y las líneas <br/> **Bruto:** Verifique solo el monto total incl. IVA entre el encabezado y las líneas <br/>**Neto+IVA:** Verifique tanto el monto excl. IVA como el monto del IVA entre el encabezado y las líneas <br/>**Configuración de ExFlow:** Use la configuración de la Configuración de ExFlow <br/><br/>

#### Líneas de Código de Compra de ExFlow

En las Líneas de Código de Compra de ExFlow, se pueden usar uno o más campos:

| Líneas de Código de Compra de ExFlow      | |
|:-|:-|
|**Tipo:**                      | Cuenta G/L, Artículo, Recurso, Activo Fijo o Cargo (Artículo)
| **No.:**                      | Seleccione de la lista
| **Descripción:**              | Cambie o use como se sugiere
| **Peso:**                     | El número en este campo especifica el número de partes asignadas a esta línea. Ejemplo: Si se ingresa 1 en este campo y tiene 3 otras líneas con un 1 en este campo también, asignará 1 parte del monto del costo del total de 4, es decir, 25%. Cuando se usa más de una fila y se selecciona el monto manualmente en el Diario de Importación de ExFlow, deje este campo vacío.
| **Peso de IVA:**              | Igual que el anterior, pero para IVA
| **Monto de Asignación:**      | Asigne un Monto fijo a la línea de la factura. Esta columna no se puede completar al mismo tiempo que cualquiera de las columnas de Peso.
| **% de Asignación:**          | Esta columna muestra el porcentaje calculado de la columna de Peso.
| **% de Asignación de IVA:**   | Igual que el anterior, pero para IVA
| **Grupo de Publicación de Productos de IVA:**  | Al usar este campo, anula el valor en Tipo/Número y "Grupo de Publicación de Productos de IVA Estándar" en "Configuración de ExFlow".
| **Código de Diferimiento:**   | Elija de la lista. La fecha de inicio del diferimiento se seleccionará automáticamente de la Tarjeta de Diferimiento.
| **No. de Proyecto:**          | Elija de la lista
| **No. de Tarea del Proyecto:**| Elija de la lista
| **Primer Aprobador:**         | Elija de la lista. Cómo se usa esto depende de la configuración en la Configuración de ExFlow.
| **Dimensiones:**              | Elija de la lista
| **Aprobación:**               | Especifica si la línea marcada debe enviarse para aprobación o no.

Aquí hay un ejemplo para dividir costos por departamento:

![Tarjeta de Código de Compra de ExFlow](@site/static/img/media/puchase-code-001.png)

En este ejemplo, el IVA en la Cuenta G/L tiene un peso del 50%, pero la Verificación de Monto siempre es para Bruto en lugar de mirar la Configuración de ExFlow. Esto puede ser útil en Suecia, donde el 50% del IVA es deducible. Interprete el IVA total y solo el 50% se agregará como una línea separada.

Esto puede ser útil cuando el IVA completo no es deducible en un caso específico, por ejemplo, Leasing de Automóviles en Suecia.

![Tarjeta de Código de Compra de ExFlow](@site/static/img/media/puchase-code-002.png)

Aquí hay un ejemplo de cómo configurar un Código de Compra de ExFlow si se necesita aprobación en el monto del IVA. Agregue la codificación solicitada y una línea separada con una cuenta G/L de IVA y marque manualmente la casilla de Aprobación.

Las líneas con un Peso establecido se marcarán automáticamente para Aprobación. La aprobación es opcional en las líneas con un Peso de IVA, así que recuerde marcar la casilla de Aprobación si se desea una aprobación en el IVA, en los Códigos de Compra de ExFlow seleccionados.

Agregue la codificación solicitada para la cuenta de costos (SIN IVA = Sin IVA en el Grupo de Publicación de Productos de IVA) y una línea separada con una cuenta G/L de IVA (SOLO = Solo IVA registrado manualmente en el Grupo de Publicación de Productos de IVA). Especifique un grupo de publicación de productos de IVA en las líneas si difiere de la configuración en la tarjeta de la cuenta G/L.

![Tarjeta de Código de Compra de ExFlow](@site/static/img/media/puchase-code-003.png)

Tenga en cuenta que, si las líneas de IVA siempre deben enviarse para aprobación, se puede utilizar la función ''Aprobar líneas de IVA''.

Lea más sobre esto en la sección [***Aprobar Líneas de IVA.***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/approve-vat-lines)


