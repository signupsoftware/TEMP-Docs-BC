---
title: Proponer Líneas de IVA
sidebar_position: 34
hide_title: true
custom_edit_url: null
---
## Proponer Líneas de IVA

Ir a: **Configuración de ExFlow --> General --> Proponer Líneas de IVA** 

Habilite la configuración ''Proponer Líneas de IVA'' si todas las líneas de IVA deben crearse automáticamente al importar facturas o si se debe utilizar el manejo estándar de IVA de Business Central.

Si se utiliza esta configuración, los campos Grupo de Publicación de Prod. IVA 0% y Grupo de Publicación de Prod. IVA 100% deben configurarse en la Configuración de ExFlow.

![Proponer Líneas de IVA](@site/static/img/media/exflow-setup-propose-vat-lines-001.png)

Las líneas de IVA también se pueden proponer automáticamente a través de un Código de Compra de ExFlow. Simplemente habilite ''Proponer Línea de IVA'' en la tarjeta del Código de Compra de ExFlow.

![Proponer Líneas de IVA](@site/static/img/media/exflow-setup-approval-vat-lines-003.png)

ExFlow creará entonces una línea de IVA separada en las Líneas del Diario de Importación para el documento de compra junto con la codificación seleccionada.

La línea de cuenta de costo, en este ejemplo, se configurará para excluir el IVA (SIN IVA), ya que ExFlow establecerá una línea de IVA separada.

![Proponer Líneas de IVA](@site/static/img/media/exflow-setup-propose-vat-lines-002.png)

Por defecto, las líneas de IVA no están incluidas en el flujo de trabajo de aprobación. Sin embargo, hay una función alternativa disponible para este propósito. Lea más en la sección [***Aprobar Líneas de IVA***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/approve-vat-lines) para obtener más información.