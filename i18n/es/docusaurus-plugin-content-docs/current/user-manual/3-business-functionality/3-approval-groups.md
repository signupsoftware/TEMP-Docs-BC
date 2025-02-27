---
title: Grupos de Aprobación
sidebar_position: 3
hide_title: true
custom_edit_url: null
---

## Grupos de Aprobación

Ir a: ***Configuración --> Configuración Manual de ExFlow --> Grupos de Aprobación de ExFlow***

Como se menciona en Nuevo Usuario, los Grupos de Aprobación se crean automáticamente cuando se crea un nuevo usuario. Los grupos personales no deben ser modificados (excepto para agregar reemplazantes).


### Crear un Nuevo Grupo de Aprobación

Además, es posible configurar grupos lógicos, como Grupos de Aprobación del Departamento de Compras o del Departamento de TI con uno o más usuarios.

Solo un usuario en este grupo puede aprobar, pero todos los usuarios recibirán y podrán encontrar el documento en la carpeta Recientes en ExFlow Web.

| General   |   |
|:-|:-|
|**Código:**                                  | Agregue un Código que describa el Grupo de Aprobación. Si no se excluye, este Código es visible en ExFlow Web al reenviar y agregar aprobadores
| **Nombre:**                                 | Agregue un nombre que describa el Código
| **Bloqueado:**                              | Si el Grupo de Aprobación ya no debe ser utilizado.
| **Excluir de la lista de usuarios de la web:**     | Para excluir este grupo de aprobación en la lista de usuarios al reenviar y agregar aprobadores en ExFlow Web. Un Grupo de Aprobación con Tipo de Aprobación Dinámica no puede ser agregado manualmente en el flujo de aprobación en ExFlow Web. Excluir de la lista de usuarios de la web se activará automáticamente al seleccionar un Tipo de Aprobación Dinámica
| **Aprobación Automática:**                         | Agregue un Grupo de Aprobación Automática al usar Aprobación Automática en la Conciliación de Pedidos o la conciliación contra Contrato. Si se agregan Miembros del Grupo de Aprobación, el documento aparecerá como aprobado en la carpeta “Recientes” en ExFlow Web
| **Comentario de Aprobación Automática:**                 | Agregue un comentario que se copiará al Comentario en la Línea del Documento.

![Tarjeta del Grupo de Aprobación de ExFlow](@site/static/img/media/approval-group-001-header.png)


### Grupo de Aprobación con Tipo de Aprobación Dinámica

Es posible agregar aprobadores automáticamente dependiendo de diferentes codificaciones en la Línea del Documento.

| Tipo de Aprobación Dinámica   |   |
|:-|:-|
| **Tipo de Aprobación Dinámica:**                | Este campo contiene múltiples opciones que pueden ser utilizadas para diferentes Flujos de Aprobación Dinámica. Todas las opciones requieren configuración única y, cuando se seleccionan, no es posible agregar Miembros del Grupo de Aprobación   <br/> Lea más sobre la configuración y las opciones de flujo de aprobación dinámica para dimensiones, proyectos y compradores en la sección [***Reglas de Aprobación --> Flujo de Aprobación Dinámica para Propietarios de Dimensiones,***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/approval-rules#dynamic-approval-flow-for-dimension-owners) [***Proyectos,***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/approval-rules#dynamic-approval-flow-for-projects) o [***Compradores***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/approval-rules#dynamic-approval-flows-purchasers)
| **Excluir de la lista de usuarios de la web:**     | Se seleccionará automáticamente ya que este Grupo de Aprobadores no debería poder agregarse manualmente desde ExFlow Web
| **Miembros del Grupo de Aprobación:**               | No debería haber Usuarios de ExFlow agregados en Miembros del Grupo de Aprobación

![Grupo de Aprobación de ExFlow - Persona Responsable](@site/static/img/media/approval-group-002-person-responsible.png)


### Escalación

Si un aprobador no aprueba documentos a tiempo, existe una función para escalar documentos al gerente.

El Gerente puede ser agregado para todos los aprobadores en la Configuración de ExFlow o por Grupo de Aprobación y ejecutar el trabajo manualmente o automáticamente con la Cola de Trabajos.

Lea más sobre la configuración y cómo configurar la Cola de Trabajos en la sección [***Flujo de Aprobación --> Actividades Periódicas --> Trabajo de Escalación***](https://docs.exflow.cloud/business-central/docs/user-manual/approval-workflow/periodic-activities#escalation-job)

| Escalación   |   |
|:-|:-|
| **Gerente:**                  | Agregue el Gerente para este Grupo de Aprobación específico
| **Días antes de la escalación:**   | Agregue el número de días antes de la escalación


### Miembros del Grupo de Aprobación

Es posible agregar varios aprobadores en un Grupo de Aprobación. Solo un usuario en este grupo puede aprobar, pero todos los usuarios recibirán y podrán encontrar el documento en la carpeta Recientes en ExFlow Web.

| Miembros del Grupo de Aprobación   |   |
|:-|:-|
| **Fecha de inicio y fin:**     | se utiliza para el aprobador que está reemplazando temporalmente a otro aprobador. Use la función para agregar reemplazantes desde ExFlow Web, Asignar Reemplazante o desde la Tarjeta de Usuario de ExFlow            <br/> Lea más en la sección [***Funcionalidad Empresarial --> Usuario de ExFlow --> Agregar un Reemplazante Durante el Tiempo de Vacaciones***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/exflow-user#add-a-replacer-during-vacation-time) y [***Flujo de Aprobación --> Actividades Periódicas --> Asignar Reemplazantes***](https://docs.exflow.cloud/business-central/docs/user-manual/approval-workflow/periodic-activities#assign-replacers)

![Miembros del Grupo de Aprobación](@site/static/img/media/approval-group-003-lines.png)

Un Grupo de Aprobación requiere al menos un usuario.

![Sin Miembros del Grupo de Aprobación](@site/static/img/media/approval-group-006-no-members.png)


