---
title: Número Mínimo de Aprobadores
sidebar_position: 6
hide_title: true
custom_edit_url: null
---
## Número Mínimo de Aprobadores
Se puede agregar una verificación para el Número Mínimo de Aprobadores en ExFlow Web y también activarse para el Diario de Importación.

En el Diario de Importación, el Número Mínimo de Aprobadores debe ser agregado antes de que el documento pueda ser creado.<br/>
Para ExFlow Web, la verificación se realiza para el último aprobador.

El Propietario del Presupuesto agregado como último aprobador cuando se trabaja con el Control de Presupuesto G/L no está incluido en el Número Mínimo de Aprobadores.


### Configurar el Número Mínimo de Aprobadores
Ir a: ***Configuración de ExFlow --> Verificaciones de Publicación de Documentos***

Ingrese "Número Mínimo de Aprobadores". Esto activará una verificación para el último aprobador en el flujo de aprobación. El Propietario del Presupuesto no está incluido.

Ir a: ***Configuración de ExFlow --> Verificaciones de Creación de Documentos***

Para activar también una verificación del Número Mínimo de Aprobadores en el Diario de Importación, active "Verificar Número Mínimo de Aprobadores" en Verificaciones de Creación de Documentos y agregue el número de aprobadores como se indicó anteriormente.


![Configuración de ExFlow](@site/static/img/media/exflow-setup-doc-creation-doc-posting-checks-001.png)


### Flujo de Trabajo para el Número Mínimo de Aprobadores
Si se activa la Verificación del Número Mínimo de Aprobadores para el Diario de Importación, el documento no puede ser creado hasta que se agregue el Número Mínimo de Aprobadores o más al flujo de aprobación.

Durante el flujo de aprobación, el número de aprobadores puede cambiar. Debido a esto, se realiza una verificación cuando el último aprobador aprueba el documento.

Si el número de aprobadores, incluido el aprobador actual, es menor que el configurado en la Configuración de ExFlow, se da un error indicando que se deben agregar más aprobadores antes de que el aprobador actual pueda aprobar.


![Configuración de ExFlow](@site/static/img/media/dynamic-error-web-001.png)

