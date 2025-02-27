---
title: Aprobar Líneas de IVA
sidebar_position: 35
hide_title: true
custom_edit_url: null
---
## Aprobar Líneas de IVA

Ir a: **Configuración de ExFlow --> Aprobación --> Aprobar Líneas de IVA** 

Habilite la configuración ''Aprobar Líneas de IVA'' si las líneas de IVA deben incluirse en el flujo de aprobación por defecto. 

![Aprobar Líneas de IVA](@site/static/img/media/exflow-setup-approval-vat-lines-001.png)

ExFlow enviará entonces las líneas de IVA para su aprobación al(los) aprobador(es) elegido(s) según el flujo de aprobación. 

![Aprobar Líneas de IVA](@site/static/img/media/exflow-setup-approval-vat-lines-004.png)

En caso de uso del Código de Compra de ExFlow en el encabezado, la configuración será ignorada. Con esta función habilitada, aún funciona agregar una codificación en un Código de Compra de ExFlow con línea de IVA donde la casilla de Aprobación no está marcada. En este caso, las líneas de IVA no se incluirán en el flujo de aprobación.

![Aprobar Líneas de IVA](@site/static/img/media/exflow-setup-approval-vat-lines-002.png)

La funcionalidad ''Proponer Líneas de IVA'' se puede combinar con ''Aprobar Líneas de IVA'' si siempre se deben crear líneas de IVA separadas e incluirse en el flujo de aprobación para todos los documentos de compra. Lea más sobre esta función en la sección [***Proponer Líneas de IVA.***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/propose-vat-lines)