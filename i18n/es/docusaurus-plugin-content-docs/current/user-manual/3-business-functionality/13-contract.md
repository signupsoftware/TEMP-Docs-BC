---
title: Contrato
sidebar_position: 13
hide_title: true
custom_edit_url: null
---
## Contrato

Ir a: ***Configuración \--\> Configuración Manual de ExFlow \--\> Contratos de ExFlow***

El Contrato de ExFlow se puede usar para llevar un registro de las facturas recibidas y faltantes para los Contratos y también puede aprobar automáticamente las facturas coincidentes. Comience creando un nuevo Contrato haciendo clic en "Nuevo".

Para configurar y aprobar Contratos, lea más en la sección [***Aprobación OMNI***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/omni-approval).

### General
En esta sección, agregue información general para este contrato específico, Proveedor, Flujo de Aprobación y Codificación.

|General |  |
|:-|:-|
| **Número de Contrato**:                   | Asignado automáticamente en el orden en que se crean
| **Número de Proveedor**:                  | Seleccione el Proveedor de la lista
| **Nombre del Proveedor**:                 | Muestra el nombre del Número de Proveedor seleccionado
| **Número de Contrato Externo**:           | Referencia que se puede interpretar en la Factura para coincidir con un Contrato específico<br/> Si se crea un código de referencia, el Número de Contrato Externo ya no se puede cambiar.<br/>Para actualizar, cambie el Número de Contrato Externo y presione enter<br/>
| **Mensaje**:                              | No se le permite actualizar el Número de Contrato Externo. ¿Desea agregar una Referencia Relacionada en su lugar?<br/>Responda Sí y la Referencia Relacionada se agregará automáticamente en la Tarjeta de Referencias
| **Inactivado**:                           | Sí o No. Para coincidir una factura, el contrato debe estar activo
| **Copiar Adjunto a Factura Coincidente**: | Sí o No. Si es sí, agregue un adjunto
| **Referencia Creada**:                    | Si se crea una referencia, el código de referencia se mostrará con un enlace a la Tarjeta de Referencias de ExFlow
| **Código de Compra de ExFlow**:           | Agregue el Código de Compra de ExFlow y las líneas de factura se crearán automáticamente en el Diario de Importación
| **Primer Aprobador**:                     | Especifica el primer aprobador que debe usarse en las Facturas coincidentes. Debido a la configuración en “Copiar Primer Aprobador al Flujo de Aprobación” en la Configuración de ExFlow, el Primer Aprobador se puede usar como Aprobador o para definir una regla de aprobación con coincidencia en el Filtro de Primer Aprobador
| **Regla de Aprobación**:                  | Especifica la regla de aprobación que debe usarse cuando una Factura coincide con este Contrato<br/> Agregue una Regla de Aprobación específica para que siempre se use para este Contrato. El Flujo de Aprobación no se actualizará incluso si la codificación se cambia en el proceso de aprobación<br/> El Primer Aprobador también se puede usar como filtro para agregar automáticamente una Regla de Aprobación a la Factura, pero en ese caso no se puede usar la Regla de Aprobación en el Contrato de ExFlow
| **Código de Comprador**:                  | Especifica un Código de Comprador que debe aplicarse cuando una factura coincide con este Contrato. Se puede usar para definir una regla de aprobación si no se agrega ninguna Regla de Aprobación arriba
| **Descripción de Referencia**:            | Especifica la descripción agregada a la referencia<br/> Al actualizar la descripción, la descripción de la Referencia creada se actualizará automáticamente
| **Factura de Autoliquidación**:           | Para crear Facturas de Autoliquidación se necesita agregar archivos adjuntos en PDF
| **Crear Factura de Autoliquidación**:     | Seleccione cómo crear Facturas de Autoliquidación<br/>- **Por Periodo:** Una Factura por periodo hasta la fecha de hoy<br/> - **Todas:** Una Factura por periodo para todos los periodos creados
| **Número de Factura del Proveedor**:      | Esto creará el Número de Factura del Proveedor para las Facturas de Autoliquidación

![Contrato de ExFlow](@site/static/img/media/contract-general-001.png)


### Términos Generales
Bajo Términos Generales, agregue totales para este contrato específico.

|Términos Generales|  |
|:-|:-|
| **Válido desde Fecha y Válido hasta Fecha**: | Términos del contrato<br/> Si se crean Periodos de Facturación, la Fecha de Válido hasta se puede usar para extender los Periodos de Facturación<br/> Lea más abajo en la sección [***Periodos de Facturación***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/contract#extend-contract-with-invoice-periods)
| **Código de Moneda**:                        | El Código de Moneda que se utilizará al facturar el contrato
| **Monto Total del Contrato (Moneda Neta)**:  | Especifica el monto total del contrato incluyendo tolerancias.

![Contrato de ExFlow](@site/static/img/media/contract-general-terms-001.png)

### Periodicidad
Agregue el monto de la factura, la periodicidad y el número de facturas por periodo.
Cuando se trabaja con Periodos de Facturación, esta sección solo se usa para copiar valores cuando se crean los periodos.

|Periodicidad |  |
|:-|:-|
| **Periodo de Facturación**:                 | Si el periodo de facturación es, por ejemplo, por trimestre = 3M o cada mes = 1M
| **Fecha de Inicio del Periodo**:            | Fecha de inicio para la próxima factura
| **Fecha de Fin del Periodo**:               | Se calcula automáticamente debido al Periodo de Facturación
| **Fechas de coincidencia basadas en**:      | Fecha de Registro, Fecha del Documento o Fecha de Vencimiento
| **Número de Facturas en el Periodo:**       | Especifica el número de facturas que se esperan durante el periodo de facturación
| **Verificar Periodos**:                     | Sí o No. Especifica si se debe verificar el periodo del contrato. Si está inactivado, no habrá verificación por factura, solo para los totales del contrato bajo Términos Generales
| **Monto Máximo de la Factura (Moneda Neta)**:| Especifica el monto máximo para cualquier factura conectada a este contrato.
| **Porcentaje de Tolerancia**:               | Se utilizará junto con el Monto de Tolerancia y hará posible coincidir y aprobar automáticamente las facturas coincidentes dentro de las tolerancias<br/> Si se agregan Periodos de Contrato, se necesita agregar tolerancia para cada periodo
| **Monto de Tolerancia**:                    | Se utilizará junto con el Porcentaje de Tolerancia y hará posible coincidir y aprobar automáticamente las facturas coincidentes dentro de las tolerancias<br/> Si se agregan Periodos de Contrato, se necesita agregar tolerancia para cada periodo
| **Código de Términos de Pago**:             | Utilizado para este Contrato específico en lugar de copiarlo de la Tarjeta del Proveedor actual

![Estado de Aprobación de ExFlow](@site/static/img/media/contract-periodicity-001.png)

### Periodos de Facturación
Los Periodos de Facturación se pueden usar para coincidir facturas con diferentes montos o tolerancias por periodo, pero también para enviar recordatorios si falta una Factura para un periodo específico.<br/>
Para las Facturas de Autoliquidación es necesario llevar un registro de las facturas creadas.

#### Crear Periodo de Factura
Ir a: ***Contrato de ExFlow --> Periodos de Factura --> Líneas --> Crear Periodos de Factura***<br/>
Los Periodos de Factura se pueden crear automáticamente utilizando Válido Desde y Hasta Fecha junto con Periodos de Factura.<br/>
Al crear las líneas, el Monto del Periodo se calcula a partir del "Monto Máximo de la Factura (Moneda Neta)" multiplicado por el "Número de Facturas en el Periodo" bajo Periodicidad.

Si falta el Monto Máximo de la Factura, el cálculo se realiza a partir del Monto Total del Contrato (Moneda Neta) dividido por el Número de periodos.

Las Tolerancias y el Código de Términos de Pago se copiarán de la Periodicidad.

![Periodos de Factura del Contrato de ExFlow](@site/static/img/media/contract-invoice-periods-001.png)

|Periodos de Factura |  |
|:-|:-|
| **Fecha de Inicio del Periodo**:                        | Cada periodo tiene una fecha de inicio y finalización. La fecha de finalización se calcula a partir de la siguiente fecha de inicio -1 día. Las facturas se emparejarán con el periodo debido a la configuración en “Fecha de Coincidencia Basada en” para el contrato actual. La Fecha de Inicio del Periodo también se utiliza como fecha del documento de la factura y fecha de registro al crear Facturas de Autoliquidación
| **Monto del Periodo (Moneda Neta)**:             | El Monto del Periodo es el monto máximo por periodo. No se calcula el número de facturas. Para las Facturas de Autoliquidación solo habrá una Factura por línea de Periodo de Factura
| **Porcentaje de Tolerancia**:                     | Esto se utilizará junto con el Monto de Tolerancia y hará posible coincidir y aprobar automáticamente las facturas coincidentes dentro de las tolerancias. Se pueden agregar diferentes tolerancias por periodo
| **Código de Términos de Pago**:                       | El Código de Términos de Pago en el Contrato de ExFlow reemplazará los Términos de Pago de la Tarjeta del Proveedor. Se pueden agregar diferentes términos de pago por periodo
| **Factura de Autoliquidación Creada**:             | Se establecerá en verdadero si se crea una Factura de Autoliquidación para ese periodo específico. Si el documento se elimina en el Diario de Importación o en el Estado de Aprobación, se establecerá automáticamente en falso y se podrá crear nuevamente la Factura de Autoliquidación
| **Monto de Factura Coincidente (Moneda Neta)**:    | Totales del monto de la factura por periodo coincidente en el Diario de Importación. Al personalizar, se puede agregar el Monto (Moneda Local Neta)<br/> Haga clic en el monto para ver todas las Facturas y expanda la vista para ver todas las líneas por Factura
| **Monto No Registrado (Moneda Neta)**:         | Totales del monto de la factura creada pero no registrada por periodo coincidente en el Estado de Aprobación. Al personalizar, se puede agregar el Monto No Registrado (Moneda Local Neta)<br/> Haga clic en el monto para ver todos los documentos y expanda la vista para ver todas las líneas por documento
| **Monto Registrado (Moneda Neta)**: | Totales de los montos de las facturas registradas coincidentes por periodo en el Historial del Estado de Aprobación. Al personalizar, se puede agregar el Monto Registrado (Moneda Local Neta)<br/> Haga clic en el monto para ver todos los documentos y expanda la vista para ver todas las líneas por documento

![Periodos de Factura del Contrato de ExFlow](@site/static/img/media/contract-invoice-periods-002.png)

Para ver los totales facturados, consulte [***FactBox --> Detalles --> Estadísticas del Contrato de Compra***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/contract#factbox--details--purchase-contract-statistic) a continuación.

### Extender Contrato con periodos de factura
Para extender un contrato que contiene periodos, agregue una nueva "Fecha Válida Hasta" en Términos Generales y actualice los valores que se copian de la Periodicidad.

![Extender Periodos del Contrato de ExFlow](@site/static/img/media/contract-extend-001.png)

### Recordatorio de Factura
Hay una función para enviar recordatorios para contratos que tienen periodos de factura y Configuración de Correo Electrónico de ExFlow.
Lea más en la sección [***Recordatorios por Correo Electrónico --> Recordatorio de Factura de Contrato***](https://docs.exflow.cloud/business-central/docs/user-manual/approval-workflow/email-reminders#contract-invoice-reminder)

|Recordatorio de Factura |  |
|:-|:-|
| **Enviar Recordatorio**:            | Active para enviar Recordatorio por Correo Electrónico o Notificaciones. Para poder enviar correos electrónicos y/o Notificaciones de BC, el Usuario de ExFlow necesita tener acceso a Correo Electrónico/Notificaciones para Recordatorio de Factura de Contrato.<br/> Lea más en la sección [***Usuario de ExFlow***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/exflow-user#add-a-new-user-manually)
| **Grupos de Aprobación**:          | Agregue Grupos de Aprobación para este contrato específico. Si no hay ninguno, los recordatorios se envían a "Grupos de Aprobación" en la Configuración de Correo Electrónico de ExFlow
| **Periodo de Recordatorio de Factura**:  | Use la fórmula de fecha estándar calculada en la Fecha de Inicio del Periodo para especificar cuándo la factura está atrasada
| **Direcciones de Correo Electrónico Fijas**:    | Para enviar recordatorios a usuarios fuera de ExFlow para este contrato específico. Si no hay ninguno, los recordatorios se envían a "Direcciones de Correo Electrónico Fijas" en la Configuración de Correo Electrónico de ExFlow

### Recordatorio de Contrato
El Recordatorio de Contrato es para enviar recordatorios antes de que el contrato expire. Cuando es el momento de revisar o cancelar el Contrato.

|Recordatorio de Contrato |  |
|:-|:-|
| **Periodo de Recordatorio de Contrato**:     | Especifica el periodo antes de la Fecha de Finalización del Contrato, para enviar un recordatorio.
| **Usuario a Recordar**:               | Usuario de ExFlow al que se deben enviar los recordatorios. Este usuario específico se mostrará en la lista de Contratos de ExFlow para una mejor visión general.
| **Recordatorio enviado**:                | Fecha y hora en que se envió el Recordatorio de Contrato.
| **Correo Electrónico del Usuario**:                   | Dirección de correo electrónico a la que se envió el recordatorio.

![Estado de Aprobación de ExFlow](@site/static/img/media/contract-contract-reminder-001.png)

### Coincidencia
Active si la factura coincidente debe ser aprobada automáticamente

|Recordatorio de Contrato |  |
|:-|:-|
| **Aprobación Automática de Factura Coincidente**: | Para la aprobación automática, cree una Regla de Aprobación con aprobadores que coincidan con la información del Contrato y active "Aprobación Automática de Facturas Coincidentes en el Contrato"

![Estado de Aprobación de ExFlow](@site/static/img/media/contract-matching-001.png)

### Función - Crear Referencia de Contrato
Haga clic en "Crear Referencia de Contrato" para crear el Número de Contrato Externo como una Referencia de ExFlow. Esto ahora se puede usar para la interpretación y coincidencia en el Diario de Importación.

![Menú del Contrato de ExFlow](@site/static/img/media/contract-menu-001.png)

### Función - Mostrar Adjuntos
Use esta función para mostrar los adjuntos del contrato.

![Menú del Contrato de ExFlow](@site/static/img/media/contract-menu-002.png)

### Función - Acciones – Crear Factura de Autoliquidación
Use esta función para crear una Factura de Autoliquidación solo para el contrato actual.

![Crear Factura de Autoliquidación del Contrato de ExFlow](@site/static/img/media/contract-menu-actions-001.png)

Esto también se puede hacer automáticamente usando una cola de trabajos. Lea más en la sección [***Configuración de Contrato de Autoliquidación***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/contract#self-billing-contract-setup)

### Función - Copiar Contrato
Use esta función para copiar el contenido de un contrato existente a un nuevo contrato creado.<br/>

Si usa la función “Copiar Contrato”, hay algunos campos que no se copiarán.
-   **Número de Contrato Externo**: Necesita ser único por Proveedor.
-   **Inactivado**: Puede usarse en Contratos de Plantilla y no se copiará.
-   **Referencia Creada**: La Referencia está relacionada con el Número de Contrato Externo y necesita ser creada para cada nuevo contrato.
-   **Copiar Adjuntos a Factura Coincidente**: Los Adjuntos necesitan ser agregados a cada Contrato.
-   **Factura de Autoliquidación**: Necesita haber un PDF como adjunto antes de que se pueda activar la Autoliquidación. Los adjuntos no se copian.
-   **Periodos de Factura**: Se pueden crear desde la función “Crear Periodos de Factura” debido a que los periodos no se actualizarán si las Fechas o Montos no son los mismos que los copiados.

![Menú del Contrato de ExFlow](@site/static/img/media/contract-menu-003.png)

### Función - Relacionado – Dimensiones
Elija el/los código(s)/valor(es) de dimensión que se deben usar en la factura del contrato.

![Dimensiones del Contrato de ExFlow](@site/static/img/media/contract-menu-related-001.png)

### FactBox – Detalles – Estadísticas del Contrato de Compra
En FactBox Estadísticas del Contrato de Compra se muestran todas las facturas relacionadas en el Diario de Importación, Estado de Aprobación e Historial del Estado de Aprobación en total.

|Estadísticas del Contrato de Compra |  |
|:-|:-|
| **Monto de Factura Coincidente (Moneda Neta)**:    | Totales del monto de la factura coincidente en el Diario de Importación. Al personalizar, se puede agregar el Monto (Moneda Local Neta)<br/> Haga clic en el monto para ver todos los documentos y expanda la vista para ver todas las líneas por documento
| **Monto No Registrado (Moneda Neta)**:         | Totales del monto de la factura creada pero no registrada coincidente en el Estado de Aprobación. Al personalizar, se puede agregar el Monto No Registrado (Moneda Local Neta)<br/> Haga clic en el monto para ver todos los documentos y expanda la vista para ver todas las líneas por documento
| **Monto Registrado (Moneda Neta)**:             | Totales de los montos de las facturas registradas coincidentes por periodo en el Historial del Estado de Aprobación. Al personalizar, se puede agregar el Monto Registrado (Moneda Local Neta).<br/> Haga clic en el monto para ver todos los documentos y expanda la vista para ver todas las líneas por documento

![Detalles del FactBox del Contrato de ExFlow](@site/static/img/media/contract-factbox-details-001.png)

### FactBox – Adjuntos y Notas
El número de adjuntos y notas agregados para el contrato actual se puede ver en el encabezado.
Agregue adjuntos o notificaciones haciendo clic como en la imagen a continuación.

![Adjuntos del FactBox del Contrato de ExFlow](@site/static/img/media/contract-factbox-attachments-001.png)

#### Adjuntos
Los adjuntos se pueden agregar haciendo clic en el Número de Documentos. Si los adjuntos deben agregarse a la factura coincidente, se debe activar “Copiar Adjuntos a Factura Coincidente”.


#### Notas
Las notas agregadas a un Contrato de ExFlow no se copiarán a ningún documento.

### Flujo de Trabajo del Contrato
Cómo trabajar con los Contratos de ExFlow.
1.  Comience creando un contrato como se indicó anteriormente
2.  Crear Referencia de Contrato (Referencia de ExFlow)<br/><br/>
Si la factura está dentro de las fechas y tolerancias de monto, el siguiente flujo de trabajo se puede realizar automáticamente por ExFlow debido a la configuración.<br/>
3.  Interpretar Factura con Número de Contrato Externo como Referencia
4.  Importar Documento al Diario de Importación<br/>
La factura se emparejará con el Contrato de ExFlow
5.  Crear Factura
6.  Registrar documento
 
### Seguimiento de Contratos sin Periodos de Factura
Para los Contratos sin Periodos de Factura, el seguimiento se puede realizar desde ***FactBox --> Detalles --> Estadísticas del Contrato de Compra***.

![Estadísticas de Compra del Contrato de ExFlow](@site/static/img/media/contract-factbox-details-002.png)

Haga clic en el Monto para obtener más detalles de la factura.

![Estadísticas del Contrato de ExFlow](@site/static/img/media/contract-statistic-001.png)

Extienda las facturas para ver las líneas

![Estadísticas del Contrato de ExFlow](@site/static/img/media/contract-statistic-002.png)

### Seguimiento de Contratos con Periodos de Factura
Si el contrato contiene Periodos de Factura, el seguimiento se puede realizar por periodo como se muestra a continuación. Pero también, para el Contrato total como se indicó anteriormente.
Haga clic en el Monto para obtener más detalles de la factura.

![Periodos del Contrato de ExFlow](@site/static/img/media/contract-invoice-periods-003.png)

### Contrato de Autoliquidación
El Contrato de Autoliquidación es útil para pagos regulares a un proveedor específico sin recibir ninguna factura. La creación de facturas de compra se puede hacer automáticamente o manualmente por contrato.

### Configuración del Contrato de Autoliquidación
Para la Autoliquidación hay algunas configuraciones opcionales que pueden ser útiles.<br/>
Ir a: ***Configuración --> Configuración Manual de ExFlow --> Contratos (Lista)--> Relacionado --> Configuración del Contrato***

![Configuración del Contrato de ExFlow](@site/static/img/media/contracts-contract-setup-001.png)

#### Procesamiento en Segundo Plano

|Procesamiento en Segundo Plano |  |
|:-|:-|
| **Entrada Activa de Cola de Trabajos Recurrente de Autoliquidación**: | Para activar una Cola de Trabajos para crear automáticamente todas las Facturas de Autoliquidación

#### Series de Números

|Números de Factura de Autoliquidación |  |
|:-|:-|
| **Números de Factura de Autoliquidación**:                    | Agregue una Serie de Números separada para las Facturas de Autoliquidación para llevar un seguimiento. <br/>Si no se agrega una Serie de Números, se utilizarán los Números Estándar de Negocios
| **Números de Factura Registrada de Autoliquidación**:             | Agregue una Serie de Números separada para las Facturas Registradas de Autoliquidación para llevar un seguimiento. <br/>Si no se agrega una Serie de Números, se utilizarán los Números Estándar de Negocios.

![Configuración del Contrato de ExFlow](@site/static/img/media/contract-setup-001.png)

### Diario de Importación para Facturas de Autoliquidación
Al usar personalizar en los Diarios de Importación, es posible activar un diario específico para las Facturas de Autoliquidación creadas. Las facturas también se pueden crear automáticamente utilizando "Crear Documentos Automáticamente".<br/><br/>
![Diarios de Importación de ExFlow](@site/static/img/media/import-journals-001-self-billing-invoices.png)

### Crear Facturas de Autoliquidación
Para poder crear una Factura de Autoliquidación, se necesitan algunas configuraciones en el Contrato de ExFlow.

#### Activar para Autoliquidación
1.  Active la Factura de Autoliquidación y agregue un documento PDF que se agregará al crear facturas.
2.  Crear Facturas de Autoliquidación<br/>
***- Por Periodo:*** – para crear periodos de factura hasta la fecha de hoy<br/>
***- Todas:*** – para crear facturas para todos los periodos en el contrato
3.  Número de Factura del Proveedor – Agregue la configuración para agregar el Número de Factura del Proveedor.<br/>
***- Número de Contrato Externo con sufijo Fecha de Inicio del Periodo***<br/>
***- Serie de Números de Autoliquidación***<br/>Agregue o cree una Serie de Números en Números de Factura del Proveedor.

![Autoliquidación del Contrato de ExFlow](@site/static/img/media/contract-self-billing-001.png)

#### Agregar Periodos de Factura
Agregue Periodos de Factura manualmente o utilizando la función Crear Periodos de Factura.

![Periodos de Factura del Contrato de ExFlow](@site/static/img/media/contract-invoice-periods-001.png)

#### Crear Facturas de Autoliquidación Automáticamente
Lea más en la sección [***Configuración del Contrato de Autoliquidación***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/contract#self-billing-contract-setup)

#### Crear Facturas de Autoliquidación Manualmente
Lea más en la sección [***Crear Factura de Autoliquidación***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/contract#function---actions--create-self-billing-invoice)

<br/>

### Razón para la Aprobación de Factura Coincidente del Contrato en ExFlow Web

En cualquier caso de desviaciones, el documento coincidente del contrato permanecerá en el Diario de Importación con un Mensaje de Acción que indica que ''Hay mensajes de advertencia que aún no se han aceptado'' y, por lo tanto, el documento no se puede aprobar automáticamente cuando se crea.

El mensaje de acción se mostrará si, por ejemplo, el monto del contrato es mayor de lo esperado u otros escenarios que se desvían de los criterios de configuración del contrato.

![Contrato de ExFlow](@site/static/img/media/contracts-web-001.png)

Si el documento es correcto y debe ser creado, el usuario de AP debe aceptar el mensaje de acción.

El mensaje de acción se copiará al Panel de Discusión cuando se cree el documento.

![Contrato de ExFlow](@site/static/img/media/contracts-web-002.png)

En el Panel de Discusión en el Estado de Aprobación, el documento coincidente del contrato tendrá una ''Advertencia de Contrato'', y puede verse así:<br/> *''Advertencia de Contrato: El monto de la factura supera el Monto de la Factura del Periodo de 1 000 para el Contrato 2.''*

![Contrato de ExFlow](@site/static/img/media/contracts-web-003.png)

El mismo mensaje se mostrará como un mensaje de chat para el aprobador web, para que el aprobador web sepa que este documento es un documento coincidente del contrato y por qué este documento específico necesita su aprobación.

![Contrato de ExFlow](@site/static/img/media/contracts-web-004.png)
