---
title: Primer Aprobador
sidebar_position: 5
hide_title: true
custom_edit_url: null
---
## Copiar Primer Aprobador al Flujo de Aprobación

Ir a: **Configuración de ExFlow --> General --> Copiar Primer Aprobador al Flujo de Aprobación**

![Configuración de ExFlow](@site/static/img/media/first-approver-001.png)
<br/>

| Copiar Primer Aprobador al Flujo de Aprobación | 	|
|:-|:-|
| **Nunca:**                         | Al agregar un Primer Aprobador a un documento, este aprobador no aparecerá en el flujo de aprobación. <br/>En su lugar, se puede usar como un filtro para agregar una Regla de Aprobación. <br/>Si una Factura o Nota de Crédito se interpreta con referencia, la referencia puede aplicar un Primer Aprobador para activar una Regla de Aprobación. <br/><br/> **Ejemplo:** Cecilia ha pedido una computadora y la factura se interpreta con referencia a Cecilia. <br/> Se crea una Referencia de ExFlow con Cecilia como Primer Aprobador. <br/>Ahora podemos crear una Regla de Aprobación con filtro en Cecilia y construir el flujo de aprobación sin agregar a Cecilia como aprobadora.
| **Todos los Documentos**| El Primer Aprobador se agregará al flujo de aprobación antes de los Aprobadores de la Regla de Aprobación para todos los documentos. Cotización, Orden, Factura y Nota de Crédito. <br/>Si se trabaja con Aprobación de Cotización y Orden, no se recomienda Configurar al Usuario Actual como Primer Aprobador Predeterminado. Ya que el Comprador que crea y libera la Cotización/Orden también necesita aprobar el documento en la Aprobación de ExFlow. <br/><br/> **Ejemplo:** Una Factura se interpreta con referencia a Cecilia. <br/>Se crea una Referencia de ExFlow con Cecilia como Primer Aprobador. <br/>Ahora podemos enviar la factura a Cecilia y dejar que ella agregue la codificación para activar una regla de aprobación más adelante en el proceso de aprobación.
|**Facturas/Notas de Crédito**| El Primer Aprobador se agregará al flujo de aprobación solo para Facturas y Notas de Crédito. <br/>No para Órdenes y Cotizaciones.  <br/><br/> **Ejemplo:** Si Cecilia crea una Cotización de Compra o una Orden de Compra, ExFlow puede agregar al usuario actual como Primer Aprobador. <br/>Ahora podemos crear una Regla de Aprobación con filtro en Cecilia y construir el flujo de aprobación sin agregar a Cecilia como aprobadora. <br/>Cuando Cecilia libera el documento, no necesita aprobarlo ya que ella es quien lo crea y libera.


<br/>

### Configurar al Usuario Actual como Primer Aprobador Predeterminado para Orden/Cotización

Ir a: **Configuración de ExFlow --> Aprobación de Orden y Cotización --> Configurar al Usuario Actual como Primer Aprobador Predeterminado para Orden/Cotización**

Para Cotización de Compra y Órdenes, el Primer Aprobador puede ser agregado por ExFlow a nivel de línea.<br/>

El Usuario de ExFlow luego necesita ser asignado a un Usuario del Sistema para que ExFlow reconozca qué usuario agregar como Primer Aprobador.<br/>

![Configuración de ExFlow](@site/static/img/media/first-approver-003.png)<br/>


### Filtro de Primer Aprobador en una Regla de Aprobación de ExFlow

Habilite la función ''Copiar Primer Aprobador al Flujo de Aprobación'' si el "Filtro de Primer Aprobador" de la Regla de Aprobación debe ser agregado como primer aprobador a la propuesta de aprobación, para una línea de documento específica. <br/>

![Configuración de ExFlow](@site/static/img/media/first-approver-002.png)

<br/>

### Primer Aprobador en el Diario de Importación
El Primer Aprobador puede ser agregado al encabezado del documento en el Diario de Importación a través de [***Contrato de ExFlow***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/contract#contract) y [***Referencia de ExFlow***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/reference-codes#reference-codes) copiado a las líneas del documento.


#### Primer Aprobador en el Contrato de ExFlow
Al interpretar una referencia conectada a un Contrato de ExFlow, esto se puede usar para agregar el Primer Aprobador a las Facturas en el Diario de Importación. <br/> 

![Configuración de ExFlow](@site/static/img/media/first-approver-004.png)


#### Primer Aprobador en la Referencia de ExFlow
Al interpretar una Referencia de ExFlow, esto se puede usar para agregar el Primer Aprobador a la Factura o Nota de Crédito en el Diario de Importación. <br/> 

![Configuración de ExFlow](@site/static/img/media/first-approver-005.png)





