---
title: Omitir Verificación de Cambios
sidebar_position: 36
hide_title: true
custom_edit_url: null
---
## Omitir Verificación de Cambios

Ir a: **Configuración de ExFlow --> Verificaciones de Publicación de Documentos --> Omitir Verificación de Cambios** 

Esta función se puede utilizar para automatizar el proceso de publicación de facturas para documentos aprobados, permitiendo que los valores especificados en las columnas web de ExFlow omitan el paso de 'Verificar Cambios' en el Estado de Aprobación.

![Configuración de ExFlow](@site/static/img/media/exflow-setup-bypass-verify-changes-001.png)

Cuando se habilita en la Configuración de ExFlow, se abre una nueva página que consiste en una lista que muestra las columnas web y un campo de filtro para agregar/editar valores que se omitirán en “Estado de Aprobación -> Verificar Cambios”.  

Desde esta página es posible agregar los valores permitidos para ser omitidos. Por ejemplo, en el siguiente ejemplo se han elegido las cuentas de costos 5910..6230 como valores permitidos. El aprobador web podrá cambiar la Cuenta G/L dentro de este filtro dado.

Otra configuración que debe establecerse para que esto funcione es un asterisco (*) como valor permitido para la Descripción de la Columna Web. En este ejemplo, se cambiará la descripción de la Cuenta G/L, de ahí la importancia de agregar un asterisco como valor permitido. La misma lógica se aplicará para otros Tipos de Línea con una descripción, de lo contrario, ExFlow no omitirá los cambios de código en el Estado de Aprobación.

![Configuración de ExFlow](@site/static/img/media/exflow-setup-bypass-verify-changes-002.png)

Si el Código de Columna Web ''Descripción'' no es visible en la ''Configuración de Omitir Verificación de Cambios de ExFlow'', entonces la columna Descripción debe agregarse a la web de ExFlow. Lea más sobre cómo agregar columnas de ExFlow en la sección [ExFlow Web](https://docs.signupsoftware.com/business-central/docs/user-manual/technical/exflow-web#exflow-web)

Si el aprobador web realiza algún cambio de código dentro del filtro dado, entonces el documento aprobado se omitirá de ser actualizado manualmente por el personal de AP en el Paso de Verificar Cambios en el Estado de Aprobación.

![Configuración de ExFlow](@site/static/img/media/exflow-setup-bypass-verify-changes-003.png)

El documento final aprobado cambiará de estado de “Aprobado” a “Listo para publicar”. 

![Configuración de ExFlow](@site/static/img/media/exflow-setup-bypass-verify-changes-004.png)

Es posible automatizar aún más habilitando “Verificar Cambios Automáticamente” en Configuración de ExFlow –-> [***Procesamiento en Segundo Plano***](https://docs.signupsoftware.com/business-central/docs/user-manual/approval-workflow/exflow-approval-status#background-processing)