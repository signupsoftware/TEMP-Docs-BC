---
title: Reglas de Codificación de Denegación
sidebar_position: 8
hide_title: true
custom_edit_url: null
---
## Reglas de Codificación de Denegación

Ir a: ***Configuración \--\> Configuración Manual de ExFlow \--\> Reglas de Codificación de Denegación de ExFlow***

Las "Reglas de Codificación de Denegación" se pueden usar para restringir a los aprobadores de crear codificaciones inválidas en ExFlow Web.

Las Reglas de Codificación de Denegación se utilizan para prohibir que el aprobador en ExFlow Web agregue o apruebe valores de ciertas maneras. Por ejemplo, para bloquear las cuentas 5910..5999 en combinación con un valor de Departamento vacío.

| General      |	|
|:-|:-|
|**ID:**                            | Los números de ID se asignan a la regla de codificación en el orden en que se crean. Esto no tiene efecto en la priorización
| **Nombre:**                         | Nombre descriptivo para la regla
| **Activo:**                       | Si la regla está activa o no
| **Regla para:**                     | Agregar Todo para todos los tipos de documentos o elegir de la lista si esta Regla debe activarse solo para Cotización, Factura, Nota de Crédito u Orden
| **Desde Monto:**                  | Filtrar por monto total en el documento
| **Hasta Monto:**                    | Filtrar por monto total en el documento
| **Desde Monto de Línea:**             | Especifica si la regla de codificación solo debe aplicarse a las líneas del documento en un rango específico de monto de línea
| **Hasta Monto de Línea:**               | Especifica si la regla de codificación solo debe aplicarse a las líneas del documento en un rango específico de monto de línea
| **Mensaje de Validación:**           | Agregar una descripción opcional si es necesario
| **Se aplica a Grupos de Aprobación:**   | Especifica si la regla de codificación solo se aplica a grupos de aprobación específicos
| **Solo Aprobador Final:**          | Especifica si la regla de codificación solo debe aplicarse al aprobador final en el flujo de aprobación

![Tarjeta de Regla de Codificación de Denegación de ExFlow](@site/static/img/media/denying-coding-rule-001.png)