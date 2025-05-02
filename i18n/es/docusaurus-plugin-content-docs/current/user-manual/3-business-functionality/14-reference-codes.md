---
title: Códigos de Referencia
sidebar_position: 14
hide_title: true
custom_edit_url: null
---
## Códigos de Referencia

Ir a: ***Configuración de ExFlow - Descripción general --> Códigos de Referencia de ExFlow***

Si se realiza una interpretación de la Referencia antes de importar el documento de la Factura en el Diario de Importación de ExFlow, entonces la referencia se puede usar para activar, por ejemplo, un flujo de aprobación. Cuando se encuentra una referencia, se puede aplicar un flujo de aprobación ya sea con el Primer Aprobador o una Regla de Aprobación.

Si se encuentra una referencia en el documento importado, ese valor de referencia también se guarda en la factura de compra/nota de crédito y en la factura de compra/nota de crédito publicada.

La referencia puede agregar un Código de Compra de ExFlow predefinido utilizado para asignar codificación a las líneas de la factura (cuenta G/L, dimensiones, etc.).

Es posible usar una combinación de Referencia y Número de Proveedor. Cuando se interpreta una Referencia para un Proveedor específico, se debe usar un flujo de aprobación especial. Además, edite la lista y agregue, por ejemplo, una dimensión o un Código de Comprador a la Referencia de ExFlow marcada. También es posible vincular múltiples referencias relacionadas al mismo Código de Referencia para facilitar la administración de los Códigos de Referencia.

![Códigos de Referencia de ExFlow](@site/static/img/media/reference-codes-001.png)


### Crear un Nuevo Código de Referencia de ExFlow desde el Diario de Importación

Si el valor de la referencia es una nueva referencia, al hacer clic en el botón de asistencia (en el campo de Referencia):

![Campo de Referencia](@site/static/img/media/reference-code-001.png)

ExFlow preguntará si se debe crear una nueva referencia:

![Crear nueva referencia](@site/static/img/media/reference-code-is-missing-001.png)

Al seleccionar "Sí", se abrirá una tarjeta de código de referencia de ExFlow vacía donde se puede agregar información adicional a la referencia:

![Tarjeta de Código de Referencia de ExFlow](@site/static/img/media/reference-code-002.png)

Si el campo de Referencia de ExFlow está vacío, haga clic en "Nuevo" o "Editar Lista" e ingrese la información directamente en la línea. Una ruta alternativa es hacer clic en "Editar" para abrir la tarjeta de referencia y editar la información allí.

Para agregar una referencia relacionada al Código de Referencia, haga clic en "Valores de Referencia Relacionados de ExFlow" y Editar Líneas.

![Códigos de Referencia de ExFlow](@site/static/img/media/reference-codes-002.png)

Ingrese el nuevo valor:

![Tarjeta de Código de Referencia de ExFlow](@site/static/img/media/reference-code-003-related-reference-values.png)

Luego cierre y este nuevo valor estará relacionado con el Código de Referencia actual.

![Códigos de Referencia de ExFlow](@site/static/img/media/reference-codes-003.png)

Si es necesario agregar un código de referencia a un código ya existente pero en su lugar como un valor de referencia, es posible hacerlo con la opción "Reasignar a Otro Código de Referencia". Esto bloqueará el Código de Referencia original y pondrá todos los valores de referencia relacionados al nuevo Código de Referencia. Este cambio también se puede hacer dentro de la Tarjeta de Código de Referencia.

![Tarjeta de Código de Referencia de ExFlow](@site/static/img/media/reference-codes-004.png)


### Crear Referencia Automáticamente desde el Usuario de ExFlow
Ir a: ***Configuración de ExFlow --> Usuarios --> Crear Referencias de ExFlow automáticamente***

En la Configuración de ExFlow hay una configuración "Crear Código de Referencia de ExFlow automáticamente" que crea automáticamente un Código de Referencia de ExFlow cuando se crea un nuevo Usuario de ExFlow.

Cuando se crea un nuevo Usuario de ExFlow, se crea un Código de Referencia de ExFlow con el mismo "Código de Referencia" que el "Nombre de Usuario" y el Usuario de ExFlow actual se agrega automáticamente como Primer Aprobador.

El Código de Referencia de ExFlow se creará solo cuando la configuración "Crear Referencia de ExFlow automáticamente" esté habilitada, y si la empresa actual existe en "Permisos de Usuario de ExFlow" en la tarjeta de Usuario de ExFlow.

![Configuración de Usuarios de ExFlow](@site/static/img/media/exflow-setup-users-002.png)

Es posible crear códigos de Referencia de ExFlow para todos los usuarios ya existentes utilizando "Crear Referencia de ExFlow en Lote" desde la página de Usuarios de ExFlow. Los códigos de Referencia de ExFlow se crearán para todos los usuarios que tengan la empresa actual en "Permisos de Usuario de ExFlow" en la tarjeta de Usuario de ExFlow.

Además, el Código de Referencia de ExFlow se puede crear solo para un Usuario de ExFlow seleccionado desde la página de Usuario de ExFlow, o la tarjeta de Usuario de ExFlow utilizando "Crear Referencia de ExFlow".

![Configuración de Usuarios de ExFlow](@site/static/img/media/exflow-users-002.png)