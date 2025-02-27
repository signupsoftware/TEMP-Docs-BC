---
title: Reglas de Codificación de Usuario
sidebar_position: 7
hide_title: true
custom_edit_url: null
---
## Reglas de Codificación de Usuario

Ir a: ***Configuración \--\> Configuración Manual de ExFlow \--\> Reglas de Codificación de Usuario de ExFlow***

Si un aprobador debe poder hacer cambios de codificación en la línea de la factura en ExFlow Web, se pueden usar las Reglas de Codificación de Usuario de ExFlow para decidir/restringir qué valores puede seleccionar.

Los administradores pueden crear Reglas de Codificación de Usuario para usuarios individuales o grupos de usuarios. La regla de codificación debe aplicarse al Usuario de ExFlow haciendo referencia al ID.

Cada columna visible en ExFlow Web puede ser modificada. Elija si el aprobador debe poder seleccionar "Todos", "Ninguno" o un filtro de valores "Rango de Texto".

La "Regla de Codificación de Usuario" en el ejemplo a continuación permite al aprobador cambiar el valor de la columna "Departamento" a "VENTAS".

| General      |	|
|:-|:-|
|**ID:**        | Los números de ID se asignan a la regla de codificación en el orden en que se crean. Esto no tiene efecto en la priorización
| **Nombre:**     | Nombre descriptivo para la regla
| **Activo:**   | Si la regla está activa o no

![Tarjeta de Regla de Codificación de Usuario de ExFlow](@site/static/img/media/user-coding-rules-001.png)

Cuando se crea la Regla de Codificación de Usuario, vaya a la Tarjeta de Usuario de ExFlow y aplique el ID de la Regla de Codificación en el usuario seleccionado para la empresa específica. Un usuario de ExFlow solo puede tener un conjunto de Reglas de Codificación de Usuario por empresa.