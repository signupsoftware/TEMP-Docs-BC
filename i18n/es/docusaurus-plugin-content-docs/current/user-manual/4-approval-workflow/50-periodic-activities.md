---
title: Actividades Periódicas
sidebar_position: 50
hide_title: true
custom_edit_url: null
---
## Actividades Periódicas

### Trabajo de Escalación

Ir a: ***Actividades Periódicas \--\> Trabajo de Escalación de ExFlow***

Para ejecutar el trabajo de escalación, necesita estar activado.

Este trabajo aprobará automáticamente los documentos vencidos del usuario y agregará un nuevo aprobador desde la configuración. La configuración general se realiza desde "Configuración de ExFlow" y/o por Usuario de ExFlow desde "Grupo de Aprobación de ExFlow".

El trabajo puede ejecutarse cuando el usuario hace clic en "Verificar Cambios" en el Estado de Aprobación, ejecutando el informe manualmente (ID de Informe 12013629) o configurando una Entrada de Cola de Trabajos (CU 12057074) en el estándar de Business Central.

#### Configuración de ExFlow

Ir a: ***Configuración --> Configuración de ExFlow --> Escalación***

![Configuración de ExFlow - Escalación](@site/static/img/media/exflow-setup-escalation-002.png)

|Escalación|| 
|:-|:-| 
|**Días Antes de Escalación**| Calculado desde cuando el usuario recibió el documento para aprobación. <br/><br/> ("Fecha de Cambio de Estado" en "Aprobadores de Línea de Documento" en "Estado de Aprobación.<br/> La fecha del servidor establece la "Fecha de Cambio de Estado".) <br/><br/> Lea más sobre esto en la sección [***Escalación***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/approval-groups#escalation)
|**Gerente Superior**| Usuario que recibirá todas las facturas vencidas. El aprobador superior necesita tener el mismo o mayor permiso ya que el permiso no se hereda en ExFlow.
|**Código de Calendario Base**| Especifica el código de calendario base que debe usarse para calcular los días laborables al escalar. Si no se agrega un calendario base, no se incluyen los sábados y domingos.
|**Texto de Escalación**| Especifica el texto que debe usarse para las líneas de aprobadores escalados. La información interna se completará en Comentarios.
|**Ejecutar al Verificar Cambios**| Ejecutar el trabajo de escalación al usar Verificar Cambios en el Estado de Aprobación.
|**Aprobador del Sistema**| Especifica el id del aprobador para el aprobador del sistema que se usa al aprobar automáticamente las facturas escaladas.
|**Resaltar Documentos Rechazados y Vencidos**| Active esta configuración para cambiar el texto de los documentos rechazados y/o vencidos en el Estado de Aprobación a rojo, haciéndolos más fáciles de detectar.
|**Número de Días Vencidos Antes de Resaltar**| Establezca un número de días cuando el documento debe presentarse con texto rojo en el Estado de Aprobación. El número de días opera en relación con la fecha de vencimiento del documento. "0" resaltará el documento en la fecha de vencimiento.

#### Grupo de Aprobación de ExFlow

Ir a: ***Configuración \--\> Configuración Manual de ExFlow \--\> Grupos de Aprobación de ExFlow***

Use la configuración de escalación en el Grupo de Aprobación de ExFlow si se necesita una configuración separada.

![Grupo de Aprobación de ExFlow](@site/static/img/media/image324.png)

#### Estado de Aprobación

Si "Ejecutar al Verificar Cambios" está seleccionado en la Configuración de ExFlow, el trabajo de escalación se ejecutará cuando el usuario haga clic en Verificar Cambios en el Estado de Aprobación.

#### Iniciar Trabajo de Escalación de ExFlow

Ir a: ***Actividades Periódicas --> Trabajo de Escalación de ExFlow***

Ejecute el Trabajo de Escalación de ExFlow (ID de Informe 12013629) manualmente o configure el trabajo (CU 12057074) en "Entradas de Cola de Trabajos" en el estándar de Business Central.

![Informe - Iniciar Trabajo de Escalación de ExFlow](@site/static/img/media/image325.png)

#### Ejemplo con Usuarios y una Configuración General de Escalación en la Configuración de ExFlow

En este ejemplo, CC (Cecilia Cederbaum) es el aprobador actual y no hay configuración de Escalación en el Grupo de Aprobación de CC. El segundo aprobador es EE (Erik Eriksson).

![Estado de Aprobación de ExFlow](@site/static/img/media/image326.png)

El Trabajo de Escalación aprobará automáticamente a CC y agregará un nuevo aprobador, FM (Gerente de Finanzas), desde la Configuración de ExFlow ya que el número de días entre la fecha del documento y hoy es más de 5 días.

(Configuración, ver imagen arriba en Trabajo de Escalación de ExFlow \--\> Configuración de ExFlow).

![Estado de Aprobación de ExFlow](@site/static/img/media/image327.png)

#### Ejemplo con Usuarios que tienen Configuraciones de Escalación en el Grupo de Aprobación

En este ejemplo, el primer y actual aprobador es FF (Filippa von Fersen). FF tiene una configuración de Escalación en el Grupo de Aprobación.

(Configuración, ver imagen arriba en Trabajo de Escalación de ExFlow - Grupo de Aprobación de ExFlow)

El segundo aprobador es EE (Erik Eriksson).

![Estado de Aprobación de ExFlow](@site/static/img/media/image328.png)

El Trabajo de Escalación aprobará automáticamente a FF y agregará un nuevo aprobador, CFO, desde la Configuración de Escalación en el Grupo de Aprobación de FF. Ya que el número de días entre el documento y hoy es más de 3 días. EE aún debe aprobar después de CFO.

![Estado de Aprobación de ExFlow](@site/static/img/media/image329.png)

### Enviar Correos Electrónicos por Lotes

Ir a: ***Actividades Periódicas \--\> Enviar Correos Electrónicos por Lotes de ExFlow***

Enviar Correos Electrónicos por Lotes generalmente se ejecuta automáticamente a través de Entradas de Cola de Trabajos en el estándar de Business Central. Pero si es necesario, ejecute el trabajo manualmente.

![Enviar Correos Electrónicos por Lotes de ExFlow](@site/static/img/media/image330.png)

Esta función también se puede encontrar en "Configuración de Correo Electrónico de ExFlow".

![Configuración de Correo Electrónico de ExFlow](@site/static/img/media/image331.png)

Enviar recordatorios a usuarios específicos desde la lista de "Usuarios de ExFlow".

![Usuarios de ExFlow](@site/static/img/media/image332.png)

Para enviar un recordatorio a todos los usuarios actuales para un documento específico, ejecute el informe desde el Estado de Aprobación de ExFlow marcando la línea del documento y "Enviar Recordatorio".

![Estado de Aprobación de ExFlow](@site/static/img/media/image333.png)

### Importar Documentos por Lotes

Ir a: ***Actividades Periódicas \--\> Importar Documentos por Lotes de ExFlow***

Este informe es otra forma de importar todos los documentos en el Diario de Importación y también se puede usar para ejecutarse automáticamente a través de Entradas de Cola de Trabajos en el estándar de Business Central.

![Informe - Importar Documentos por Lotes de ExFlow](@site/static/img/media/image334.png)

### Asignar Reemplazos

Ir a: ***Actividades Periódicas \--\> Asignar Reemplazos de ExFlow***

Desde Asignar Reemplazos, los aprobadores pueden ser agregados temporalmente o eliminados.

Seleccione Acción Agregar o Eliminar.

Agregar Aprobador.

Agregar Reemplazar con Usuario.

La Fecha de Inicio y la Fecha de Fin solo se pueden usar si la Acción está seleccionada para Agregar.

Esta misma función se puede encontrar en Usuario de ExFlow.

![Informe - Asignar Reemplazos de ExFlow](@site/static/img/media/image335.png)

### Entradas de Re-Facturación

La información sobre las facturas a enviar al Cliente se puede encontrar en Entradas de Re-Facturación de ExFlow.

Lea más sobre esto en la sección [***Re-Facturación.***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/re-invoicing#re-invoicing)

### Sugerencia de Codificación Automática

Para aplicar la Sugerencia de Codificación Automática, es necesario ejecutar las funciones IDs de Conjunto de Codificación de ExFlow para Sugerencias de Codificación Automática y Crear Sugerencias de Codificación Automática de ExFlow.

![Actividades Periódicas - Sugerencias de Codificación Automática](@site/static/img/media/exflow-menu-005-periodic-activities.png) <br/><br/> Lea más sobre esto en la sección [***Configuración de Sugerencia de Codificación Automática***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/auto-coding-suggestion-setup#auto-coding-suggestion-setup)