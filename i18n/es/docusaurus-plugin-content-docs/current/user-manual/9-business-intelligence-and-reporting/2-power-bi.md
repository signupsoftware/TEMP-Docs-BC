---
title: Power BI
sidebar_position: 2
hide_title: true
custom_edit_url: null
---
## Power BI

Hay configuraciones y plantillas preparadas para analizar datos de ExFlow con Power BI. Dado que el tema es extenso, SignUp también ha publicado un [***Artículo de la Base de Conocimientos***](https://support.signupsoftware.com/knowledgebase/article/KA-01291) específico que cubre la integración. El Artículo de la Base de Conocimientos se puede encontrar en el Portal de Soporte por los Usuarios del Portal de Soporte. Las Plantillas de Power BI (BCO/BC Onprem) también pueden ser encontradas por los Socios en el [***Portal de Socios.***](https://azuresignup.sharepoint.com/sites/Signupsoftware/SitePages/BC-POWER-BI.aspx?xsdata=MDV8MDJ8fDU2YzBmOTZlYjUxZjRmMjg0MzNmMDhkYzg0NmE3MmIwfDg3NzkxMTdkNzcyZTRlYTU5NGVjNDRhMWExZDA0MjdifDB8MHw2Mzg1MzA4Mzk5MDUzMjE3OTF8VW5rbm93bnxWR1ZoYlhOVFpXTjFjbWwwZVZObGNuWnBZMlY4ZXlKV0lqb2lNQzR3TGpBd01EQWlMQ0pRSWpvaVYybHVNeklpTENKQlRpSTZJazkwYUdWeUlpd2lWMVFpT2pFeGZRPT18MXxMMk5vWVhSekx6RTVPbUZpTVRJNU1EWXlNVEExWlRSaFkyTTVaR05pWVRBNE1EUTFNR1JpTkRSbVFIUm9jbVZoWkM1Mk1pOXRaWE56WVdkbGN5OHhOekUzTkRnM01UZzVPRFExfDY3MTk3NmJkNzFmZTQ4YmQ0MzNmMDhkYzg0NmE3MmIwfDIyZmJkZjM2ZjZhNTRjNjE5MzIxYWNkOTY5YTFmYThl&sdata=UkdFQTF4T2Vra3R2Vk5sMUYxTXpWbkdZcXE4OEUxZ3h1WEZhcUhlN0NpMD0%3D&ovuser=8779117d-772e-4ea5-94ec-44a1a1d0427b%2Csofia.nikolic%40signupsoftware.com&OR=Teams-HL&CT=1717489911732&clickparams=eyJBcHBOYW1lIjoiVGVhbXMtRGVza3RvcCIsIkFwcFZlcnNpb24iOiI0OS8yNDA1MDMwNzYxNCIsIkhhc0ZlZGVyYXRlZFVzZXIiOmZhbHNlfQ%3D%3D)

Desde una perspectiva de configuración, se pueden publicar todos los Servicios Web necesarios en una empresa eligiendo "Crear Servicios Web de Power BI".

Vaya a: **Configuración de ExFlow --> Acciones --> Funciones --> Power BI --> Crear Servicios Web de Power BI**

Para eliminar los Servicios Web de Power BI existentes, seleccione "Eliminar Servicios Web de Power BI".

Vaya a: **Configuración de ExFlow --> Acciones --> Funciones --> Power BI --> Eliminar Servicios Web de Power BI**

En las Configuraciones de Power BI también es posible descargar el archivo de plantilla de Power BI y durante esa configuración ahora hay una manera más fácil de recuperar la cadena de URL (Fuente de Datos BC) que se utilizará durante la configuración de Power BI en Power BI Desktop. Estas configuraciones están cubiertas en el Artículo de la Base de Conocimientos.

![Configuración de ExFlow -- Power BI](@site/static/img/media/exflow-setup-general-006-power-bi.png)

### Acceder a Documentos Publicados en Business Central desde Power BI Desktop

Desde la versión 21.1 de ExFlow es posible crear enlaces en Power BI a documentos de compra publicados. Es necesario tener acceso a la página específica en Business Central para poder ver el documento. Para utilizar esta funcionalidad, asegúrese de que se utilicen los últimos servicios web de Power BI de ExFlow eliminándolos y creándolos nuevamente. En el último archivo de plantilla de Power BI de ExFlow, hay un informe preparado llamado Documentos Publicados.

![Power BI Desktop](@site/static/img/media/image375.png)

Haga clic en el Enlace del Documento para acceder a la tarjeta del documento publicado en el Historial de Estado de Aprobación de ExFlow.

![Tarjeta de Factura Publicada](@site/static/img/media/image376.png)