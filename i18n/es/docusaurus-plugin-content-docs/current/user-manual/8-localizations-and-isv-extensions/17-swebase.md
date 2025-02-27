---
title: SweBase
sidebar_position: 17
hide_title: true
custom_edit_url: null
---
## SweBase

ExFlow también tiene soporte para algunas funcionalidades que se encuentran en la extensión SweBase.

Para preguntas relacionadas con SweBase, contacte a su socio de Business Central.

### Referencia de Pago -- No. OCR

El campo No. OCR puede ser interpretado e importado o agregado manualmente en el campo "No. de Documento del Proveedor 2" del Diario de Importación.

Al crear un documento, esto se agregará en el campo No. OCR en el encabezado del documento. Después de la publicación, el No. OCR se puede encontrar en las Entradas del Libro Mayor del Proveedor.

La funcionalidad para manejar el No. OCR en la solución de pago se encuentra en la extensión SweBase.

### Registro de Entrada

El Registro de Entrada se puede activar desde la Configuración de ExFlow y luego se publicará automáticamente a nivel de línea al crear el documento desde el Diario de Importación.

Al publicar el Documento, los registros de entrada se revertirán en la misma fecha que la fecha de publicación.

Y si se elimina un documento registrado de entrada, se revertirá en la fecha de publicación.

Se requiere la configuración de registro de entrada en la Configuración de SweBase y "Mantener Fecha de Publicación después del Registro de Entrada" configurado en verdadero.

Para poder publicar el Registro de Entrada con redondeo, agregue la Configuración de Publicación de IVA de Entrada.

#### Mensajes de advertencia para el Registro de Entrada

Si no es posible registrar automáticamente debido a un error, existe la posibilidad de personalizar una columna llamada "Omitir Registro Automático de Entradas" en el encabezado del Diario de Importación. Habilite esta función y el documento se puede crear sin registro de entrada. El registro de entrada se puede publicar manualmente desde la Tarjeta en su lugar.

![Diario de Importación de ExFlow -- Omitir Registro Automático de Entradas](@site/static/img/media/image368.png)

### Nota de Bienes

El campo Nota de Bienes puede ser interpretado e importado o agregado manualmente en el Diario de Importación.

Esto se puede usar para texto libre pero no se muestra en ExFlow Web.

### Fecha de Publicación Extendida para Publicación con Diferimiento

En la Configuración de SweBase hay una configuración para extender la "Fecha de Publicación Permitida" al publicar Diferimiento.

Esto permitirá al Administrador Verificar y Crear Documento en el Diario de Importación. También, Verificar y Publicar en el Estado de Aprobación.

### Actualizar Grupo de Publicación de Productos de IVA

En SweBase hay una función utilizada para revertir la responsabilidad fiscal sobre ciertos bienes y servicios.

La misma función se puede usar en el Diario de Importación de ExFlow para actualizar la Publicación de Productos de IVA debido a la Configuración de SweBase.