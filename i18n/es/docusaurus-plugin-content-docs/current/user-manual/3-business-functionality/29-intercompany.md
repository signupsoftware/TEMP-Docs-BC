---
title: Intercompany
sidebar_position: 29
hide_title: true
custom_edit_url: null
---
## Intercompany

ExFlow ahora admite la funcionalidad estándar de Intercompany de Business Central a nivel de línea. Los siguientes campos de Intercompany ahora están disponibles en todo el proceso de ExFlow: <br/>

•	Código de Socio IC<br/>
•	Tipo de Referencia de Socio IC<br/>
•	Referencia de Socio IC<br/>


### Intercompany en el Diario de Importación
Los campos IC ahora están disponibles en el diario de importación y se pueden agregar a la vista mediante la personalización del usuario. Los valores en los campos IC fluirán a la factura en Business Central cuando se cree.

Al procesar facturas de costos (no PO), los campos de intercompany se pueden completar manualmente para asignar una parte del costo a entidades relacionadas que se han configurado en BC como socios de intercompany.

Para facturas coincidentes con PO, si los campos IC están poblados en la orden de compra, los valores fluirán desde la PO a la línea de la factura.

![Diario de Importación de ExFlow](@site/static/img/media/intercompany-import-journal-001.png)

### Intercompany en el Estado de Aprobación
En el Estado de Aprobación, el usuario tiene visibilidad de los campos IC y los valores relacionados. Los campos IC se pueden agregar a la vista mediante la personalización del usuario.

![Estado de Aprobación de ExFlow](@site/static/img/media/intercompany-approval-status-001.png)


### Intercompany en ExFlow Web
Los campos Código de Socio IC y Referencia de Socio IC se pueden agregar como columnas en ExFlow Web. Los valores IC son visibles para el aprobador y, los aprobadores que tienen permisos para cambiar la codificación pueden actualizar los campos IC si es necesario.

![ExFlow Web](@site/static/img/media/intercompany-web-001.png)

### Intercompany en Documentos de Aprobación de ExFlow
Para los aprobadores que aprueban en Business Central, los campos IC ahora son visibles y editables en los Documentos de Aprobación de ExFlow (con los permisos requeridos).

![Documento de Aprobación](@site/static/img/media/intercompany-document-approval-001.png) 

Cuando un usuario ejecuta la función 'Verificar Cambios', se muestran los campos IC así como cualquier cambio realizado.

![Estado de Aprobación de ExFlow](@site/static/img/media/intercompany-approval-status-verify-002.png) 

### Intercompany en el Historial de Estado de Aprobación de ExFlow
Después de que un documento se publica, los campos Código de Socio IC y Referencia de Socio IC son visibles en el Historial de Estado de Aprobación de ExFlow.

![Historial de Estado de Aprobación de ExFlow](@site/static/img/media/intercompany-approval-status-history-003.png)