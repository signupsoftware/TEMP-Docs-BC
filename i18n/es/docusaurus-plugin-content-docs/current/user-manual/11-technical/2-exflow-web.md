---
title: ExFlow Web 
sidebar_position: 2
hide_title: true
custom_edit_url: null
---

## ExFlow Web

<br/>
¿Interesado en leer y aprender todo sobre ExFlow web? <br/> <br/>  

 [***¡Toda la información necesaria sobre ExFlow Web se puede encontrar aquí!***](https://docs.exflow.cloud/web) <br/><br/> 

### Editar Columnas Web en Business Central
Use la función **Editar Columnas Web** para gestionar las Columnas Web de ExFlow. <br/>

Ir a **Configuración de ExFlow --> Editar Columnas Web** 

![Configuración de ExFlow](@site/static/img/media/exflow-setup-edit-web-columns.png) 

| Editar Columnas Web      |   | 
|:-|:-|
|**Agregar Columna**| Agregar una nueva columna a ExFlow Web
|**Modificar Columna**| Actualizar una columna actual de ExFlow Web
|**Columnas de ExFlow**| Manejar cambios en las columnas de ExFlow Web

![Configuración de ExFlow](@site/static/img/media/exflow-setup-edit-web-columns-001.png)


Las Columnas Web que existen y son visibles en ExFlow web, tienen tanto la casilla de ‘’Visibilidad Actual’’ como la casilla de ‘’Existente’’ marcadas. 

Si se necesita agregar una columna para los aprobadores web, simplemente seleccione el código de la columna web y luego haga clic en ''Agregar Columna''.

Es posible ocultar una columna web existente en ExFlow Web eligiendo ‘’Oculto’’ y luego haciendo clic en ‘’Modificar Columna’’. En este ejemplo, la casilla de ‘’Visibilidad Actual’’ para la columna ‘’Tarea del Proyecto’’ se desmarcará.  

![Configuración de ExFlow](@site/static/img/media/exflow-setup-edit-web-columns-002.png)


### Columnas de ExFlow
 
Ir a **Configuración de ExFlow --> Editar Columnas Web --> Columnas de ExFlow** 

![Configuración de ExFlow](@site/static/img/media/exflow-setup-exflow-columns-001.png)

Abra Columnas de ExFlow y edite la lista si se necesita hacer algún cambio en las columnas.

![Configuración de ExFlow](@site/static/img/media/exflow-setup-exflow-columns-002.png)

|Columnas de ExFlow||
|:-|:-|
|**ID**|Especifica el ID de la columna.
|**Código**| Especifica el Código
|**Dimensión**| Una dimensión de la Configuración del Libro Mayor se puede agregar como columna web de ExFlow.
|**Fuente**| Copia del valor del Código.
|**Formato** |El formato en que el valor y la descripción se envían a ExFlow web.
|**Usar Autocompletar**| La casilla marcada toma el Tipo de Datos especificado. La casilla desmarcada = texto libre como una descripción.
|**Orden de Clasificación**| Orden de clasificación en todas las columnas web (excepto en Tipos de Línea).
|**Expr de Visualización del Documento**| Puede determinar si la columna debe ser usable para ciertos tipos de documentos.
|**Expr de Visualización de Línea**| Permite a ExFlow web saber que es un tipo de línea y qué tipo de línea es.
|**Tipo de Datos**| Si debe ser una fecha o decimal mostrado en ExFlow web, entonces esto necesita tener un valor (Descripción tiene ‘’system.String’’).
|**Es Disparador de Autocompletar**| Seleccione si, por ejemplo, una cuenta seleccionada debe enviar actualizaciones de valores de dimensión desde la configuración estándar de cuentas de Business Central (BC Predeterminado). También se puede configurar como ‘’Inactivo’’ y ‘’Personalizado’’.
|**Copiar valor al dividir la línea**| Especifica si los valores deben copiarse al dividir una línea.
|**Actualizar Grupo de Publicación de Prod. IVA Desde No.**| Especifica si el Grupo de Publicación de Prod. IVA debe tomarse de la tarjeta No.
|**Actualizar Grupo de Publicación de Prod. Gen. Desde No.**| Especifica si el Grupo de Publicación de Prod. Gen. debe tomarse de la tarjeta No.
|**Bloquear Columna**| Especifica si los valores deben bloquearse y no ser editables.
|**Número de Valores a Enviar**| Se utiliza para mejorar el rendimiento. Si se selecciona como 100, entonces ExFlow solo enviará los primeros 100 valores según el filtro actual.