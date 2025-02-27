---
title: Asistente de Coincidencia de Órdenes
sidebar_position: 26
hide_title: true
custom_edit_url: null
---
## Asistente de Coincidencia de Órdenes

Este manual de usuario es su guía para configurar ExFlow y hacer coincidir fácilmente las facturas con las órdenes de compra. Diseñado con simplicidad en mente, el Asistente de Coincidencia de Órdenes hace que el proceso sea sencillo y fácil de usar.

Busque el Asistente de Coincidencia de Órdenes de ExFlow.

![Asistente de Coincidencia de Órdenes - Búsqueda](@site/static/img/media/order-matching-wizard-001-search.png)


### Coincidencia por Encabezado o Línea
El primer paso para configurar el Asistente de Coincidencia de Órdenes es determinar si la coincidencia de facturas con órdenes de compra se debe realizar a nivel de encabezado o de línea.

**Coincidencia a Nivel de Encabezado:**<br/>
Si elige la coincidencia a nivel de encabezado, la Coincidencia de Órdenes comparará el total general de la factura con el valor total disponible de la orden de compra.

Este método es adecuado cuando los detalles de los artículos o servicios individuales en la factura no necesitan coincidir con artículos específicos en la orden de compra, o si la información de la línea de la factura es demasiado pobre para una coincidencia precisa.


**Coincidencia a Nivel de Línea:**<br/>
Si elige la coincidencia a nivel de línea, la Coincidencia de Órdenes comparará cada línea de factura interpretada con los artículos correspondientes en la orden de compra.

Este enfoque asegura que cada artículo o servicio individual en la factura coincida con precisión con el artículo correspondiente en la orden de compra.

La coincidencia de líneas utiliza información interpretada como la cantidad de la factura, el precio unitario, el total de la línea y más, para obtener una coincidencia precisa con la línea correspondiente de la orden de compra y poder identificar cualquier discrepancia.

### Coincidir Documentos Con
El siguiente paso es determinar cómo se deben hacer coincidir las facturas con las órdenes de compra en relación con los recibos de compra.
Hay tres opciones a considerar:

**Recibo:**<br/>
Seleccione esta opción si desea que las facturas se hagan coincidir solo con órdenes de compra que tengan recibos de compra asociados.

Asegurándose de que los artículos se reciban y registren en el almacén y se alineen con la factura, antes de hacer coincidir la factura y enviarla para su aprobación y publicación final.

**Orden:**<br/>
Elija esta opción si desea que las facturas se hagan coincidir con las órdenes de compra independientemente de si hay un recibo de compra asociado.

Esto permite que las facturas se hagan coincidir incluso si no se ha confirmado la recepción de bienes o servicios, proporcionando flexibilidad en su proceso de coincidencia.

Útil en escenarios como envío directo o cuando los recibos de compra no están disponibles, o se requieren para hacer coincidir completamente la factura y enviarla para su aprobación y publicación.

**Orden y Recibo:**<br/>
Si prefiere una combinación de las dos opciones anteriores, seleccione esta opción.

En este caso, las facturas se pueden hacer coincidir con órdenes de compra con o sin recibos de compra asociados, proporcionando la máxima flexibilidad en los escenarios de coincidencia.

Posible hacer coincidir líneas de factura con órdenes de compra con y sin líneas de artículos recibidos. También hace posible hacer coincidir líneas de factura con líneas de artículos parcialmente recibidos en la orden y enviarlas para su aprobación y publicación.

### Aprobar Automáticamente Facturas Coincidentes
**Nunca:**<br/>
Seleccione esta opción si desea que todas las facturas coincidentes pasen por un proceso de aprobación manual. En este caso, ninguna factura se aprobará automáticamente, independientemente de cualquier diferencia o umbral.

**Si la Diferencia está dentro de la Tolerancia:**<br/>
Elija esta opción si desea que las facturas coincidentes se aprueben automáticamente solo cuando la diferencia entre la factura y la orden de compra esté dentro del umbral o tolerancia especificada para la aprobación automática.

Esta opción permite un procesamiento eficiente de facturas con discrepancias menores, asegurando que solo las diferencias significativas requieran aprobación manual.

**Si la Orden Coincidente está Aprobada:**<br/>
Esta opción agrega una capa adicional de aprobación al requerir que la orden coincidente haya sido revisada y aprobada a través de ExFlow, asegurando que las facturas se aprueben automáticamente solo cuando la autorización necesaria esté en su lugar.

![Asistente de Coincidencia de Órdenes - General](@site/static/img/media/order-matching-wizard-002-general.png)

### Monto Máximo para Aprobación Automática
Si ha permitido la aprobación automática de facturas coincidentes, aquí es donde puede especificar el monto máximo para la aprobación automática. Este parámetro define el umbral por encima del cual las facturas requerirán aprobación manual, independientemente de los resultados de la coincidencia.

### Advertencia de Violación de Tolerancia
Habilite esta configuración si desea que los contadores reciban una advertencia durante la importación de facturas coincidentes de compra cuando haya discrepancias superiores a su tolerancia permitida para la aprobación automática.
De cualquier manera, si esta configuración está habilitada o no, las discrepancias superiores a su tolerancia permitida siempre requerirán que la línea de la factura sea aprobada manualmente.

### Desviación del Costo Unitario Directo (%) y Desviación del Costo Unitario Directo (Monto LCY)
Defina los umbrales de desviación para el costo unitario directo de las líneas de factura en comparación con las líneas de la orden coincidente. Estos umbrales determinan las diferencias permitidas entre la factura y la orden de compra para la aprobación automática.

![Asistente de Coincidencia de Órdenes – Aprobación Automática](@site/static/img/media/order-matching-wizard-003-auto-approval.png)

### Manejo Automático de Diferencias
La funcionalidad de Manejo Automático de Diferencias permite que ExFlow sugiera automáticamente una línea de diferencia si se identifican costos adicionales o inesperados, como flete u otros cargos, durante la coincidencia de órdenes.
Puede elegir si ExFlow debe sugerir una línea de factura del tipo de línea Cargo de Artículo o Cuenta G/L.
Luego, especifique qué Cuenta G/L o qué Cargo de Artículo usar para la línea sugerida.

### Monto Máximo de Diferencia (LCY) y Máxima Diferencia %
Es donde puede especificar una tolerancia permitida para la línea de diferencia sugerida automáticamente para la aprobación automática.

![Asistente de Coincidencia de Órdenes - Otros](@site/static/img/media/order-matching-wizard-004-other.png)

### Publicar Automáticamente Recibos de Compra
La función "Publicar Automáticamente Recibos de Compra" permite la publicación automática de recibos de compra en el proceso de coincidencia. Sin embargo, tenga en cuenta que esta función solo se puede utilizar al hacer coincidir facturas con **“Orden”** o **“Orden y Recibo”**.

Hacer coincidir facturas utilizando la lógica **“Orden”** o **“Orden y Recibo”**, permite que ExFlow haga coincidir completamente y envíe una factura para su aprobación y publicación. Sin embargo, Business Central siempre requiere que los Recibos de Compra se publiquen antes de que la factura coincidente pueda ser publicada y para que la Orden de Compra sea facturada.

Esta configuración permite que ExFlow Publique y Facture automáticamente la cantidad aprobada de las líneas de factura coincidentes. Se ejecuta una vez que la factura tiene el estado "Lista para Publicar" en el Estado de Aprobación.
Con esta configuración deshabilitada, se requiere que publique los recibos de compra manualmente.

![Asistente de Coincidencia de Órdenes – Publicar Automáticamente Recibo de Compra](@site/static/img/media/order-matching-wizard-005-automatically-post-purchase-receipt.png)


### Completar el Asistente
Haga clic en "Finalizar" para cerrar el Asistente y aplicar la configuración.

![Asistente de Coincidencia de Órdenes – Completar el Asistente](@site/static/img/media/order-matching-wizard-006-complete.png)

### Configuración de ExFlow
Los campos en la Configuración de ExFlow que se ven afectados por el Asistente de Coincidencia de Órdenes se seleccionan en la imagen a continuación:

![Asistente de Coincidencia de Órdenes – Configuración de ExFlow](@site/static/img/media/exflow-setup-po-matching-001.png)