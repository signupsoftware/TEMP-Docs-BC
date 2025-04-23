---
title: Requisitos Técnicos para ExFlow Business Central Online
sidebar_position: 3
hide_title: true
custom_edit_url: null
---

## ExFlow Business Central Online

La siguiente información describe los requisitos técnicos para ejecutar ExFlow AP Business Central Online en Dynamics 365 Business Central Online utilizando ExFlow Data Capture como la solución OCR.

ExFlow Business Central Online se ejecuta en la plataforma Dynamics 365 Business Central Online y sigue los requisitos técnicos de Microsoft para Dynamics 365 Business Central Online.

Lea sobre los requisitos mínimos para usar Business Central [***aquí***](https://docs.microsoft.com/en-us/dynamics365/business-central/product-requirements).<br/>

### Especificaciones Técnicas

*Integración ExFlow Data Capture (si aplica):* <br/>
* Servicio web para exportar datos de proveedores<br/>
* Servicio web para importar imágenes y datos de facturas escaneadas.<br/>

*Integración ExFlow Cloud (Aprobación web):*<br/>
* ExFlow BC Online publica un servicio web para que ExFlow Cloud pueda recuperar datos de facturas y proveedores, etc.<br/>
* ExFlow BC Online tiene un servicio web para importar todos los datos que han sido cambiados durante el proceso de aprobación web.<br/>

### Licenciamiento
Tenga en cuenta que el Cliente es responsable de tener las licencias y acuerdos de soporte correctos con Microsoft. Si no está seguro, por favor contacte a su socio de implementación de Dynamics 365 Business Central.<br/>

### ExFlow Cloud
En ExFlow Cloud, los usuarios finales pueden aprobar facturas en cualquier dispositivo, ya sea móvil, tableta o computadora. ExFlow Cloud es un servicio en la nube que se ejecuta en Microsoft Azure.

ExFlow Cloud requiere acceso a los servicios web de ExFlow Business Central Online para comunicarse. Esta comunicación debe estar encriptada.

*La opción de comunicación disponible entre ExFlow Cloud y ExFlow Business Central Online es:* HTTPS a un punto final público <br/><br/>

#### Software Cliente de ExFlow Cloud
Los clientes pueden ser Windows 7 o posterior, Apple Mac, iPad, iPhone con iOS, tabletas y teléfonos Android con la última versión de los sistemas operativos.<br/>

*Navegadores web compatibles (las últimas versiones):*<br/>
* Google Chrome (recomendado)<br/>
* Microsoft Edge<br/>
* Safari<br/><br/>

### Limitaciones de Tamaño de Archivo

* ExFlow Data Capture: [***Visite el sitio web de Tungsten***](https://docs.readsoftonline.com/help/eng/partner/reference/c_system_limitations.html)<br/>
* ExFlow Business Central y Comunicación Web de ExFlow: El límite de tamaño de archivo adjunto actual está establecido en 10 MB.
