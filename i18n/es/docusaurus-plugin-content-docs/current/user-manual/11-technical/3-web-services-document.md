---
title: Servicios Web - EXFID
sidebar_position: 3
hide_title: true
custom_edit_url: null
---
## Servicios Web - EXFID

### Introducción
ExFlow depende de la importación de documentos desde una multitud de fuentes, Sistema de Archivos Local, Almacenamiento en Azure o Servicios Web. En este documento, se describirán los Servicios Web; funcionalidad, configuración, uso y código de ejemplo como un proyecto en C#/.NET 4.8 y Visual Studio 2019 para integrarse con él. La codificación se puede realizar en cualquier lenguaje que soporte solicitudes de Servicios Web utilizando el protocolo SOAP. El código de ejemplo listado se puede convertir fácilmente a VB.Net.<br/>
El uso de Servicios Web permite a los integradores de terceros o socios de Business Central enviar facturas electrónicas a ExFlow utilizando un protocolo estandarizado.

### General
La importación de facturas en ExFlow generalmente requiere dos archivos, uno XML que contiene la factura en una estructura conocida y el archivo PDF que contiene una presentación de la factura. El archivo PDF puede ser opcional si existe un archivo XSL que pueda generar un HTML convertible a PDF.

El uso de Servicios Web para la importación se inicia externamente y no por ExFlow o cualquier Entrada de Cola de Trabajos. Los sistemas externos se conectan a los Servicios Web en Business Central e invocan métodos para cargar documentos en Documentos Entrantes y Adjuntos de Documentos Entrantes. Al activar la importación en ExFlow, los documentos se procesan en función de los Documentos Entrantes importados por el Servicio Web.

### Business Central / ExFlow
Instale ExFlow y ejecute el Asistente para obtener una configuración. Importe una Definición de Intercambio de Datos (DED) útil, ya sea una de ExFlow o use una DED existente en Business Central.<br/><br/>

#### Configuración de ExFlow
En la Configuración de ExFlow, establezca un valor en el campo “Tipo de Intercambio de Datos Web Def.”, seleccionando de la lista de Tipos de Intercambio de Datos. Si no hay ninguno disponible, ejecute “Importar Definiciones de Intercambio de Datos” e importe una o más Definiciones de Intercambio de Datos.

![Configuración de ExFlow OCR Import](@site/static/img/media/exflow-setup-ocr-import-002.png)<br/><br/>


#### Diario de Importación
Cree o configure un Diario de Importación de ExFlow para procesar lo que se importa a través del Servicio Web EXFID.
* Cree un nuevo Diario de Importación de ExFlow
* Establezca un Nombre y Descripción
* Establezca el Tipo de Fuente en Servicio Web

![Diarios de Importación de ExFlow](@site/static/img/media/import-journals-002.png)

Procese las facturas importadas a través del Servicio Web ejecutando “Importar Documentos” en el Diario de Importación de ExFlow recién creado o ejecutando “Importación por Lotes de Documentos”.