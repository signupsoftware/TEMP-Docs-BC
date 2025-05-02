---
title: Códigos de Compra
sidebar_position: 12
hide_title: true
custom_edit_url: null
---
## Códigos de Compra
 
Vaya a: ***Configuración de ExFlow - Descripción general --> Códigos de Compra de ExFlow***
 
Un Código de Compra de ExFlow puede utilizarse para añadir codificación en líneas de factura automáticamente desde la Ficha de Configuración de Proveedor, Referencia, Contrato o Configuración de ExFlow. El Código de Compra de ExFlow puede dividir líneas en varios códigos de dimensión, Grupos de Registro de IVA de Producto, etc.
 
### Crear un nuevo Código de Compra de ExFlow
 
#### General
Comience haciendo clic en "Nuevo". Introduzca un Código y Descripción que se adapte al Código de Compra de ExFlow.
 
| General      |    |
|:-|:-|
| **Proponer Línea de IVA:**             | Esta configuración necesita ajustes en la Configuración de ExFlow para Grupo de Registro de IVA de Producto 0% y Grupo de Registro de IVA de Producto 100%. Entonces se puede añadir automáticamente una línea separada para el Importe de IVA para un Código de Compra de ExFlow específico
| **Verificación de Importe en Creación de Doc.:**   | En la Configuración de ExFlow hay un ajuste para Verificaciones de Creación de Doc. en Importe de Prueba. Con esta configuración es posible un control de importe separado para un Código de Compra de ExFlow específico. <br/><br/> **Ninguno:** Sin verificación entre importe en cabecera y líneas <br/> **Bruto:** Verifica solo el importe total incl. IVA entre cabecera y líneas <br/>**Neto+IVA:** Verifica tanto el importe excl. IVA como el importe de IVA entre cabecera y líneas <br/>**Configuración de ExFlow:** Utiliza la configuración de la Configuración de ExFlow <br/><br/>
 
#### Líneas de Código de Compra de ExFlow
 
En las Líneas de Código de Compra de ExFlow, se pueden utilizar uno o más campos. El Código de Compra de ExFlow también puede utilizarse para Proveedores con la configuración ''Precios con IVA incluido'' habilitada en la Ficha de Proveedor. 
 
| Líneas de Código de Compra de ExFlow      | |
|:-|:-|
|**Tipo:**                      | Cuenta del Libro Mayor, Artículo, Recurso, Activo Fijo o Cargo (Artículo)
| **Nº:**                      | Seleccione de la lista
| **Descripción:**              | Cambie o use según lo sugerido
| **Peso:**                   | El número en este campo especifica la cantidad de partes asignadas a esta línea. Ejemplo: Si se ingresa 1 en este campo y tiene otras 3 líneas con un 1 en este campo también, asignará 1 parte del importe del coste del total de 4, así que 25%. Cuando se utiliza más de una fila y se selecciona el importe manualmente en el Diario de Importación de ExFlow, deje este campo vacío
| **Peso de IVA**:               | Igual que el anterior, pero para el IVA
| **Importe de Asignación Excl. IVA (LCY)**:        | Asigne un importe fijo en LCY a la línea del documento. Esta columna no puede ser rellenada al mismo tiempo que cualquiera de las columnas de Peso.
| **% de Asignación:**             | Esta columna muestra el porcentaje calculado a partir de la columna de Peso
| **% de Asignación de IVA:**         | Igual que el anterior, pero para el IVA
| **Grupo de Registro de IVA de Producto:**  | Al usar este campo, sobrescribe el valor en Tipo/Nº y "Grupo de Registro de IVA de Producto Estándar" en "Configuración de ExFlow"
| **Código de Diferimiento:**            | Elija de la lista. La fecha de inicio del diferimiento se seleccionará automáticamente de la Ficha de Diferimiento
| **Nº de Proyecto:**                  | Elija de la lista
| **Nº de Tarea de Proyecto:**             | Elija de la lista
| **Primer Aprobador:**           | Elija de la lista. Cómo se usa esto depende de la configuración en Configuración de ExFlow.
| **Dimensiones:**               | Elija de la lista
| **Aprobación**:                 | Especifica si la línea marcada debe enviarse para aprobación o no

 
Aquí hay un ejemplo para dividir costos por departamento:
 
![ExFlow Purchase Code Card](@site/static/img/media/puchase-code-001.png)
 
En este ejemplo, el IVA en la Cuenta del Libro Mayor tiene un peso del 50%, pero la Verificación de Importe siempre es para Bruto en lugar de mirar la Configuración de ExFlow. Esto puede ser útil en Suecia, donde el 50% del IVA es deducible. Interprete el IVA total y solo el 50% se añadirá como una línea separada.
 
Esto puede ser útil cuando el IVA completo no es deducible en un caso específico, por ejemplo, Leasing de Coches en Suecia.
 
![ExFlow Purchase Code Card](@site/static/img/media/puchase-code-002.png)
 
Aquí hay un ejemplo de cómo configurar un Código de Compra de ExFlow si se necesita aprobación en el importe del IVA. Añada la codificación solicitada y una línea separada con una cuenta de IVA del Libro Mayor y marque manualmente la casilla de Aprobación.

Las líneas con un Peso establecido se marcarán automáticamente para Aprobación. La aprobación es opcional en las líneas con un Peso de IVA, así que recuerde marcar la casilla de Aprobación si se desea una aprobación en el IVA, en los Códigos de Compra de ExFlow seleccionados.

Añada la codificación solicitada para la cuenta de costos (SIN IVA = Sin IVA en el Grupo de Registro de IVA de Producto) y una línea separada con una cuenta de IVA del Libro Mayor (SOLO = Solo IVA registrado manualmente en el Grupo de Registro de IVA de Producto). Especifique un grupo de registro de IVA de producto en las líneas si difiere de la configuración en la ficha de la cuenta del Libro Mayor.

Si las líneas de IVA siempre deben enviarse para aprobación, se puede utilizar la función ''Aprobar líneas de IVA''.

Lea más sobre esto en la sección [***Aprobar Líneas de IVA.***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/approve-vat-lines)