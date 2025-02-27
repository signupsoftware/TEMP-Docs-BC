---
title: Almacenamiento de Blobs Genérico
sidebar_position: 4
hide_title: true
custom_edit_url: null
---
## Almacenamiento de Blobs Genérico

### Introducción
ExFlow actualmente utiliza la base de datos de Business Central para almacenar documentos importados. Los documentos son principalmente XML y PDF. También podrían ser otros formatos, como DOCX o PNG.<br/>
Cuando se utiliza Business Central para el almacenamiento, el espacio asignado tiende a expandirse radicalmente según la cantidad de facturas que el cliente reciba. Dado que los documentos importados pueden contener imágenes, el espacio asignado en BC Online se expandirá radicalmente.
Es necesario poder almacenar documentos importados en ubicaciones alternativas para un almacenamiento más económico o eficiente.

### General
Los blobs son archivos en un sentido más tradicional de pensar. Sin embargo, un blob es el contenido de algo que pensamos como un archivo. Un archivo está más relacionado con los metadatos como Nombre, Fecha de Creación, Fecha de Modificación, Tipo de Contenido y más. Los blobs son secuencias binarias de datos que los metadatos describen. Los metadatos nos dirán a nosotros o a la aplicación que usa el blob cómo usar el contenido.

Para manejar los blobs de manera más eficiente, deben abstraerse de la aplicación. Entonces, cuando ExFlow solicita un blob, obtendrá metadatos y el contenido binario. La fuente real es desconocida para la aplicación.

La solución propuesta utiliza múltiples capas para abstraer y aislar la funcionalidad.<br/><br/>

#### Aplicación ExFlow
La aplicación que hará uso de los blobs leyendo, escribiendo, eliminando y listando blobs, o archivos si lo desea.<br/><br/>

#### Gestión de Almacenamiento
Maneja dónde, cuándo y cómo se almacena un blob. La gestión de caché y almacenamiento se maneja en esta capa. La transferencia de blobs y la obtención de blobs se realiza en esta capa.<br/><br/>

#### Implementación de Almacenamiento (Interfaz de Almacenamiento)
Esta es la implementación de un tipo de almacenamiento. Las funciones a implementar son las más primitivas, como Obtener o Poner.


### Arquitectura
La arquitectura para el Almacenamiento de Blobs aislará la aplicación de la forma en que se acceden a los blobs.<br/><br/>

#### Aplicación ExFlow
En Business Central, los blobs se almacenan en campos de blobs en tablas. Cuando se lee un blob, se utilizan flujos para extraer datos del blob. Cuando se escribe un blob, se utilizan flujos para escribir datos en una tabla.
Actualmente, los blobs se utilizan o se refieren en las siguientes áreas:
* Complemento PDF de ExFlow
* Adjuntos de Documentos Entrantes
    - InStream
    - OutStream
* Atajo Ctrl+I en ExFlow para descargar el adjunto principal al ordenador local
* Hacer clic en un nombre de archivo en Business Central para descargar cualquier adjunto al ordenador local<br/><br/>

**Aislamiento:** Cualquier solicitud para leer un blob se enviará a través de la Gestión de Almacenamiento que devolverá el blob. El blob puede ser devuelto como un flujo, o descargado al cliente.

Cualquier solicitud para guardar un blob se enviará a través de la Gestión de Almacenamiento. La referencia será SystemId junto con TableID y FieldID para hacer posible "almacenar" dos blobs en la misma tabla y aún usar el almacenamiento externo.

La funcionalidad de blobs imitará principalmente los métodos estándar de blobs si tienen sentido para su uso.<br/><br/>

#### Gestión de Almacenamiento
La Gestión de Almacenamiento (SM) expondrá funciones para leer o escribir blobs, ya sea directamente o a través de la escucha de eventos.

Business Central desencadena eventos cuando se leen blobs, antes de que se extraigan datos del almacenamiento primario más común, el Adjunto de Documentos Entrantes.

SM mantendrá una caché de blobs en uso. Los blobs en uso pueden ser blobs relacionados con el Diario de Importación o el Estado de Aprobación, por nombrar algunos. Los blobs también pueden ser utilizados en áreas archivadas como Facturas de Compra Publicadas o Entradas de Proveedores.

Cuando se solicita un blob relacionado con documentos publicados, el blob se obtiene del almacenamiento de blobs y se almacena en caché localmente, luego se devuelve a la aplicación. El blob se retendrá en caché durante un tiempo bien definido según la configuración.

Los blobs solicitados para áreas como el Diario de Importación se retendrán en el Adjunto de Documentos Entrantes hasta que la factura haya sido publicada. En ese momento, el Adjunto de Documentos Entrantes se marcará como inválido y se eliminará de manera programada por una Tarea Programada. Si se solicita un blob relacionado con una entrada recién publicada y la entrada en caché aún existe, el blob no se obtiene nuevamente y la entrada en caché se establece como válida y permanecerá válida durante el tiempo establecido en la configuración.

La convención de nombres de blobs será genérica donde los detalles del blob se almacenan en una tabla separada que contendrá el nombre del blob. El blob necesita seguir una convención de nombres genérica para no tener problemas con la longitud del nombre del archivo, por ejemplo. Un nombre recomendado es GUID donde partes de él pueden ser utilizadas como ruta.<br/><br/>

#### Implementación de Almacenamiento
El almacenamiento físico de blobs se realiza utilizando una Interfaz en Business Central. Una Interfaz es una abstracción sin código, puede verse como una definición de una API. La Interfaz solo contiene firmas de funciones. Depende de los implementadores agregar el código para soportar la Interfaz.

La Interfaz define una o más funciones sobrecargadas relacionadas con Obtener, Poner, Existir, Listar y Eliminar. La Interfaz también define funciones sobrecargadas relacionadas con la Configuración, funciones como GetFieldCaption, SetFieldValue y GetFieldValue.

![Blob Storage](@site/static/img/media/blob-storage-001.png)


### Configuración de Almacenamiento de Blobs
Ir a: ***Configuración de ExFlow --> Acciones --> Funciones --> Gestión de Almacenamiento de Blobs*** (--> Configuración de Almacenamiento)

La configuración para el Almacenamiento de Blobs se basa en la Interfaz definida hacia la Implementación de Almacenamiento. La Configuración de Almacenamiento de Blobs es genérica y general. Contiene algunos campos de texto genéricos como Código, Descripción y Fuente de Blob.

La configuración para el Almacenamiento de Blobs se basa en la Interfaz definida hacia la Implementación de Almacenamiento. La Configuración de Almacenamiento de Blobs es genérica y general. No contiene ningún campo específico de implementación genérico aparte de Descripción y Tipo de Almacenamiento.

La implementación ejecutará su propia configuración contra sus propias tablas según sea necesario. Dado que la implementación puede requerir OAuth u otro tipo de autenticación, depende de la implementación implementar eso. Una implementación de la interfaz puede optar por guardar todos los parámetros de configuración dentro del Almacenamiento Aislado.

Los valores mínimos de Configuración de Almacenamiento de Blobs son Código, Descripción, Tipo de Almacenamiento de Blobs y si está habilitado o no.

Puede haber más de una Configuración de Almacenamiento de Blobs por Tipo de Almacenamiento de Blobs, depende del uso.

![Storage Setup](@site/static/img/media/storage-setup-001.png)

En el ejemplo, la implementación elegida es "Contenedor de Azure"

El Contenedor de Azure presentará una configuración que recopila la información necesaria para la implementación al presionar Configuración.

Depende de la implementación almacenar los parámetros de una manera relevante utilizando tablas físicas, almacenamiento aislado o cualquier otro medio.

Todos los campos en la Configuración de Almacenamiento de Blobs son irrelevantes para ExFlow o la Gestión de Almacenamiento de Blobs y solo tienen sentido para la implementación. La implementación utiliza la Configuración de Almacenamiento de Blobs para saber qué configuración usar y obtener de su propio almacenamiento, tabla o almacenamiento aislado. Entonces, cuando se hace una llamada a la Interfaz Get(Name, …), la implementación hará la configuración necesaria y las conexiones para hacer posible obtener el blob solicitado.

En este caso, la Gestión de Almacenamiento es agnóstica al almacenamiento físico, no sabe cómo obtener el archivo o blob, dejará eso a la implementación.

Una llamada de Gestión de Almacenamiento a Get(Name, …) se comportará de la misma manera y devolverá el blob sin importar si la implementación es Contenedor de Azure, Base de Datos, Azure Share, Sistema de Archivos Local, Amazon WS, Dropbox o cualquier otra forma de manejar blobs técnicamente.

### Gestión de Almacenamiento
La Gestión de Almacenamiento (SM) expondrá funcionalidad general para que la aplicación use para obtener, establecer, listar o eliminar blobs basados en una combinación de clave/nombre. SM restaurará el blob a su ubicación original cuando se solicite.

SM almacenará o almacenará en caché blobs localmente en una tabla dentro de la funcionalidad de Almacenamiento de Blobs para hacer que la gestión de blobs sea rápida para la aplicación.

Los blobs en caché se guardan solo por un tiempo limitado según lo establecido en la configuración. Las limitaciones pueden ser, pero no se limitan a, Días o Área Funcional.<br/><br/>

#### Caché en Días
Para áreas que no son de naturaleza temporal, como documentos publicados, la caché se puede configurar para que las entradas en caché expiren dentro de los días establecidos. Una vez que se ha alcanzado el número de días, las entradas en caché se invalidan. Un trabajo programado eliminará las entradas inválidas de la caché.<br/><br/>

#### Caché por Área Funcional
El archivado de blobs solo será relevante para documentos publicados, ya que los documentos relacionados con el Diario de Importación o el Estado de Aprobación requieren acceso inmediato.<br/><br/>

#### Caché en Número de Entradas
Para la caché relacionada con áreas funcionales o en general, una filosofía de almacenamiento en caché puede ser mantener como máximo 1000 entradas en caché. Cada vez que se obtiene un blob de la caché, se actualiza una marca de tiempo de Último Uso. Último Uso se puede usar como referencia cuando el número de entradas excede el valor establecido en la configuración. Esas entradas son eliminadas por un trabajo programado. Puede haber un búfer dinámico cuando el número de entradas en caché es mayor que el límite establecido.

La Caché en Número de Entradas probablemente solo se aplicará a entradas válidas. Las entradas inválidas se eliminarán de todos modos por el trabajo programado de manera regular.<br/><br/>

#### Detalles de Almacenamiento de ExFlow

Muestra los detalles actuales del almacenamiento del adjunto de documento entrante en Business Central. Los detalles incluyen la fecha en que el documento se almacenó en el almacenamiento de blobs, la última fecha de acceso y la lista de documentos entrantes que aún están en Business Central con System Id como el identificador.

#### Funciones Adicionales
La Gestión de Almacenamiento puede implementar funciones adicionales para acelerar el manejo de blobs u otras funcionalidades.<br/>

**Proceso de Limpieza de Caché**<br/>
Habilitar la limpieza manual de la caché.

**Paradigma de Caché**<br/>

  - ***Entradas de Pre-Fetch***<br/>
      Pre-poblar la caché con entradas en el Adjunto de Documento Entrante, ya que eso acelerará el acceso al blob, ya que estará disponible de inmediato.

  - ***Bajo Demanda***<br/>
    Solo obtener y poblar la caché una vez que se solicite el blob. Puede que no sea una característica viable, pero es una característica de todos modos.<br/>

**Migración de Documentos**<br/>
La Gestión de Almacenamiento puede implementar la migración de documentos de un Tipo de Almacenamiento de Blobs a otro, o de un Tipo de Almacenamiento de Blobs del mismo tipo al almacenamiento de destino. La migración puede ser directamente compatible para leer blobs desde un Contenedor de Azure temporal (propiedad del socio o SignUp) en un Contenedor de Azure permanente (propiedad del cliente).

**Reubicación de Almacenamiento**<br/>
La Gestión de Almacenamiento puede implementar un movimiento de un Tipo de Almacenamiento de Blobs a otro. El cliente está utilizando el Tipo de Almacenamiento de Base de Datos y desea moverse a un Contenedor de Azure. Por lo tanto, la Gestión de Almacenamiento emite un Get(Name, …) del Tipo de Almacenamiento de Base de Datos y luego emite un Put(Name, …) al Contenedor de Azure, para cada blob.<br/><br/>
Sería posible dejar de usar el almacenamiento externo utilizando una función para copiar/mover blobs desde el almacenamiento externo al Adjunto de Documento Entrante nuevamente.