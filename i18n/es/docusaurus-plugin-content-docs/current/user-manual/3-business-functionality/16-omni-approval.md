---
title: Aprobación OMNI
sidebar_position: 16
hide_title: true
custom_edit_url: null
---
## Aprobación OMNI

La Aprobación OMNI de ExFlow es una forma para que los usuarios de Business Central aprueben diferentes funciones en ExFlow, es decir, Contratos de ExFlow y Reglas de Aprobación de ExFlow. Esto significa que un Contrato o una Regla de Aprobación no se pueden usar en ExFlow antes de que estén completamente aprobados.

### Configuración de Documentos OMNI de ExFlow

Ir a: ***Configuración --> Aprobación OMNI de ExFlow --> Configuración de Documentos OMNI de ExFlow***

En la Configuración de Documentos OMNI de ExFlow hay dos tipos diferentes de OMNI, Contrato y Regla de Aprobación.

Se requiere una configuración para el Tipo OMNI, en este caso un Contrato.

El Tipo OMNI es el área que requerirá aprobación. Es posible establecer el número mínimo de aprobadores. Cuando se marca "Requiere Aprobación", todos los contratos recién creados requerirán aprobación.

Habilite "Permitir Aprobación Concurrente" si todos los Grupos de Aprobación deben poder aprobar el documento al mismo tiempo o ir al primer usuario de Business Central en la lista.

![Configuración de Documentos OMNI de ExFlow - Contrato](@site/static/img/media/omni-document-setup-001.png)

El mismo tipo de configuración debe hacerse para el Tipo OMNI "Regla de Aprobación" si se necesita una aprobación en una Regla de Aprobación de ExFlow antes de que pueda ser utilizada.

![Configuración de Documentos OMNI de ExFlow - Regla de Aprobación](@site/static/img/media/omni-document-setup-002.png)

### Reglas de Aprobación OMNI de ExFlow

Ir a: ***Configuración --> Aprobación OMNI de ExFlow --> Regla de Aprobación OMNI de ExFlow***

La Regla de Aprobación OMNI de ExFlow permite diferentes reglas de aprobación para los diferentes tipos de OMNI "Contrato" y "Regla de Aprobación".

#### **Regla de Aprobación OMNI de ExFlow para Contratos**

Agregue "Contrato" como "Tipo de Documento OMNI" y nómbrelo. Al igual que con las reglas de aprobación regulares, se puede establecer la prioridad. Cuando se establecen los Filtros de Reglas de Aprobación y las Líneas de Reglas de Aprobación, el usuario de Business Central puede habilitar la Regla de Aprobación OMNI.

![Regla de Aprobación OMNI de ExFlow - Contrato](@site/static/img/media/omni-approval-rule-001.png)

Establezca los filtros haciendo clic en ***Administrar \--\> Establecer Filtros*** bajo Filtros de Reglas de Aprobación.

Agregue los filtros necesarios para usar en la Regla de Aprobación actual.

![Regla de Aprobación OMNI de ExFlow - Página de Filtros](@site/static/img/media/omni-filter-page-001.png)

La Dimensión del Contrato también se puede agregar haciendo clic en Establecer Filtros, como se mencionó anteriormente, o haciendo clic en la celda de Filtro.

![Regla de Aprobación OMNI de ExFlow - Página de Filtros](@site/static/img/media/omni-approval-rule-filters-001.png)

Enumere a los aprobadores en el mismo orden en que serán aprobados bajo las Líneas de Reglas de Aprobación.

![Regla de Aprobación OMNI de ExFlow - Líneas de Reglas de Aprobación](@site/static/img/media/omni-approval-rule-lines-001.png)

Cuando se agreguen el Filtro de Reglas de Aprobación y las Líneas de Reglas de Aprobación, se puede habilitar la Regla de Aprobación OMNI de ExFlow.

#### **Regla de Aprobación OMNI de ExFlow para Reglas de Aprobación**

Agregue "Reglas de Aprobación" como "Tipo de Documento OMNI" y nómbrelo. Al igual que con las reglas de aprobación regulares, se puede establecer la prioridad. Cuando se establecen los Filtros de Reglas de Aprobación y las Líneas de Reglas de Aprobación necesarias, el usuario de Business Central puede habilitar la Regla de Aprobación OMNI manualmente.

![Regla de Aprobación OMNI de ExFlow -- Regla de Aprobación](@site/static/img/media/omni-approval-rule-002.png)

Seleccione una Regla de Aprobación de ExFlow existente o cree una nueva regla según el estándar regular de ExFlow.

Lea más sobre esto en la sección **"Regla de Aprobación de ExFlow"**.

![Regla de Aprobación de ExFlow -- Página de Filtros](@site/static/img/media/omni-approval-rule-003.png)

Agregue el Filtro requerido. Cuando la regla esté lista y habilitada manualmente, se enviará para aprobación al usuario(s) de Business Central.

![Regla de Aprobación OMNI de ExFlow](@site/static/img/media/omni-approval-rule-004.png)

Si el usuario de Business Central cierra la página sin habilitar la regla de Aprobación OMNI de ExFlow, aparecerá la siguiente pregunta: *"¿Desea habilitar la Regla de Aprobación OMNI de ExFlow?"*.

Todas las Reglas de Aprobación OMNI de ExFlow se pueden ver en la lista de Reglas de Aprobación OMNI de ExFlow.

![Lista de Reglas de Aprobación OMNI de ExFlow](@site/static/img/media/omni-approval-rules-001.png)

### Estado de Aprobación OMNI de ExFlow

Ir a: ***Configuración --> Aprobación OMNI de ExFlow --> Estado de Aprobación OMNI de ExFlow***

El usuario de Business Central puede ver todos los documentos pendientes de aprobación en la Aprobación OMNI de ExFlow. También es posible ver documentos aprobados, reenviados y rechazados. Cuando el estado de un documento es "Aprobado", el documento está listo para ser utilizado en ExFlow.

![Estado de Aprobación OMNI de ExFlow](@site/static/img/media/omni-approval-status-001.png)

Ir a **Abrir Tarjeta** para abrir el Contrato de ExFlow.

Para cambiar el flujo de aprobación en un documento, ir a: ***Tarjeta de Aprobación***

Desde esta página es posible abrir la tarjeta original, cambiar a una regla de aprobación diferente y agregar/eliminar aprobadores. También es posible reiniciar la aprobación de todas las líneas o de una línea seleccionada.

![Documento OMNI de ExFlow](@site/static/img/media/omni-approval-document-001.png)

### Documentos de Aprobación OMNI de ExFlow

Ir a: ***Configuración --> Aprobación OMNI de ExFlow --> Documentos de Aprobación OMNI de ExFlow***

En los Documentos de Aprobación OMNI de ExFlow, el usuario específico de Business Central puede ver todos sus documentos pendientes de aprobación en "Mis Aprobaciones Actuales". También es posible ver las aprobaciones futuras e históricas del usuario de Business Central.

![Documentos de Aprobación OMNI de ExFlow](@site/static/img/media/omni-approval-documents-001.png)

Abrir Tarjeta para ver la tarjeta original, en este caso redirigirá a Contrato de ExFlow 2.

El documento de Contrato OMNI puede ser aprobado, rechazado o reenviado por el usuario correspondiente de Business Central.

Utilice el Panel de Discusión para escribir comentarios y mencionar a otros usuarios de Business Central.

Para ver el flujo de aprobación actual de un documento específico, vaya a FactBox bajo "Aprobadores".

Cuando el usuario de Business Central ADMIN haya aprobado, el Documento de Aprobación se moverá a "Mis Aprobaciones Históricas" y pasará al siguiente usuario de Business Central ESSENTIAL en el flujo de aprobación.

![Documentos de Aprobación OMNI de ExFlow - Mis Aprobaciones Históricas](@site/static/img/media/omni-approval-documents-002.png)

Cuando todos los aprobadores hayan aprobado, el Estado cambiará a Aprobado en los Documentos de Aprobación OMNI de ExFlow.

Simplemente haga clic en "Aprobar" para aprobar la Regla de Aprobación.

![Documentos de Aprobación OMNI de ExFlow](@site/static/img/media/omni-approval-documents-003.png)

Cuando se aprueba una regla de aprobación, el Estado cambiará de "No aprobado" a "Aprobado" en los Documentos de Aprobación OMNI de ExFlow y también en la lista de Reglas de Aprobación de ExFlow.

![Lista de Reglas de Aprobación de ExFlow](@site/static/img/media/approval-rules-001.png)

Desde la lista de Reglas de Aprobación de ExFlow también es posible hacer clic en la Tarjeta de Aprobación OMNI de ExFlow para ver el Documento OMNI de ExFlow.

![Documento OMNI de ExFlow - Regla de Aprobación Aprobada](@site/static/img/media/omni-document-001.png)