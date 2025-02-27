---
title: Exportar/Importar Configuraciones
sidebar_position: 32
hide_title: true
custom_edit_url: null
---
## Exportar/Importar datos de ExFlow

Ir a: **Configuración de ExFlow --> Acciones --> Funciones --> Exportar/Importar Configuraciones** 

![Exportar/Importar Configuración](@site/static/img/media/export-import-exflow-setup-001.png)

|Exportar/Importar Configuración de ExFlow |    |
|:-|:-|
|**Exportar**| Exportar datos seleccionados de la tabla de configuración de ExFlow
|**Importar**|  Importar datos seleccionados de la tabla de configuración de ExFlow
|**Seleccionar Todo**|  Seleccionar todas las secciones para exportar
|**Desmarcar Todo**|  Deseleccionar todas las secciones
|**Listar Errores de Importación**|  Ver una lista de errores de la última importación
|**Eliminar Errores de Importación**|  Eliminar errores listados de la última importación
<br/>

### Exportar datos
Es posible tanto importar como exportar datos de ExFlow a través de esta función. Esto puede ser conveniente cuando, por ejemplo, se necesita exportar datos como Códigos de Compra Estándar de ExFlow o quizás la Configuración de Proveedores de ExFlow de una base de datos a otra.

Simplemente habilite esas configuraciones para exportar y luego ExFlow descargará un archivo .json para importar en la otra base de datos.<br/> <br/>
![Exportar/Importar Configuración](@site/static/img/media/export-import-exflow-setup-002.png)

<br/>

### Importar datos
Importe los datos en el otro entorno seleccionando las tablas relevantes y haga clic en ''Importar'' para cargar el archivo .json.  <br/>

![Exportar/Importar Configuración](@site/static/img/media/export-import-exflow-setup-003.png)

Si ocurren errores durante este proceso, todos se listarán bajo ''Lista de Errores de Importación''. Maneje el error e importe el archivo nuevamente. Use ''Eliminar Errores de Importación'' para limpiar la lista, si es necesario.