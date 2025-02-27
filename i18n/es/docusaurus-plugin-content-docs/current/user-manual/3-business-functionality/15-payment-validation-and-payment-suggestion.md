---
title: Validación de Pago y Sugerencia de Pago
sidebar_position: 15
hide_title: true
custom_edit_url: null
---
## Validación de Pago y Sugerencia de Pago

Para poder trabajar con la validación de pagos, la cuenta (bancaria) debe ser interpretada en ExFlow Data Capture y se deben configurar los ajustes a continuación.

Permita que ExFlow valide que la cuenta bancaria interpretada exista en las cuentas bancarias del proveedor actual. Y si ISV SweBase está instalado, sugiera la cuenta bancaria del proveedor validada al documento para pagos.

La validación de pagos y la sugerencia de cuenta bancaria del destinatario se pueden habilitar para todos los proveedores y deshabilitar para proveedores seleccionados. O simplemente habilitar para proveedores específicos.


### Configurar Validación de Pago / Sugerencia de Cuenta Bancaria del Destinatario

#### Configurar ExFlow Data Capture

El campo *“Pay-to-Account”* en ExFlow Data Capture debe agregarse en la sección del encabezado del documento.

#### Validación de Pago en Configuración de ExFlow

Comience activando la Configuración de Validación de Pago. Esto habilitará la Validación de Pago para todos los proveedores.

Ir a: **Configuración de ExFlow --> Relacionado --> Avanzado --> Configuración de Validación de Pago** o a través de **Configuración de ExFlow --> General**

![Configuración de ExFlow - Configuración de Validación de Pago](@site/static/img/media/exflow-setup-general-002-payment-validation-setup.png)


Agregue campos de la cuenta bancaria del proveedor que deben validarse contra el valor interpretado.

Haga clic en Nuevo o Editar Lista y seleccione los campos necesarios:

![Configuración de Validación de Pago de ExFlow](@site/static/img/media/payment-validation-setup-001.png)
 <br/>


#### Sugerir Cuenta Bancaria del Destinatario en Configuración de ExFlow
La Validación de Pago debe estar habilitada y ISV SweBase instalado.

Para poder usar Sugerir Cuenta Bancaria del Destinatario para todos los proveedores:<br/>

Ir a: **Configuración de ExFlow --> General** y habilitar Sugerir Cuenta Bancaria del Destinatario

![Configuración de ExFlow - Validación de Pago y Sugerir Cuenta Bancaria del Destinatario](@site/static/img/media/exflow-setup-general-003.png)

<br/>

### Configuración de Proveedores de ExFlow
#### Validación de Pago

Agregue el proveedor editando la lista o haciendo clic en Nuevo.

Seleccione el proveedor en la lista y el valor en el campo Validación de Pago.

![Configuración de Proveedores de ExFlow](@site/static/img/media/vendor-setup-list-payment-validation.png)

O abra la Tarjeta de Configuración del Proveedor:

![Tarjeta de Configuración del Proveedor de ExFlow](@site/static/img/media/Vendor-setup-card-003.png)

| Validación de Pago|  |
|:-|:-|
| **Desde Configuración de ExFlow**:              | Usar la misma configuración que en Configuración de ExFlow
| **Sí**:                         | Habilitar Validación de Pago para este proveedor específico, sin importar la configuración en Configuración de ExFlow
| **No**:                         | Deshabilitar Validación de Pago para este proveedor específico, sin importar la configuración en Configuración de ExFlow
<br/>

#### Sugerir Cuenta Bancaria del Destinatario
La Validación de Pago debe estar habilitada y ISV SweBase instalado.<br/>

Agregue el proveedor editando la lista o haciendo clic en Nuevo.<br/>

Seleccione el proveedor en la lista y el valor en el campo Sugerir Cuenta Bancaria del Destinatario.

| Sugerir Cuenta Bancaria del Destinatario |  |
|:-|:-|
| **Desde Configuración de ExFlow**:           | Usar la misma configuración que en Configuración de ExFlow
| **Sí**:                         | Habilitar Sugerir Cuenta Bancaria del Destinatario para este proveedor específico, sin importar la configuración en Configuración de ExFlow
| **No**:                         | Deshabilitar Sugerir Cuenta Bancaria del Destinatario para este proveedor específico, sin importar la configuración en Configuración de ExFlow

<br/>

### Validación de Pago / Sugerir Cuenta Bancaria del Destinatario en el Diario de Importación

Cuando la Validación de Pago está habilitada, ExFlow comparará el valor interpretado en Pay-to-Account en ExFlow Data Capture con las cuentas bancarias del proveedor actual.

El valor interpretado se compara sin caracteres especiales y el valor debe existir en uno o más de los campos seleccionados agregados en la Configuración de Validación de Pago.

El Pay-to-Account interpretado se mostrará en el encabezado en el Diario de Importación (Número de Cuenta de Validación de Pago), junto con la Cuenta Bancaria del Destinatario seleccionada si está habilitada.

Cuando se selecciona la Cuenta Bancaria del Destinatario, se dará prioridad a la moneda interpretada y a la cuenta de pago. Si no existe una cuenta bancaria del proveedor con la moneda actual, se seleccionará la cuenta bancaria sin moneda.

![Diario de Importación de ExFlow - Número de Cuenta de Validación de Pago](@site/static/img/media/import-journal-024.png)

Desde el Diario de Importación es posible abrir las Tarjetas de Cuenta Bancaria del Proveedor.
Use el campo Cuenta Bancaria del Destinatario o: <br/>
Ir a: **Diario de Importación --> Relacionado --> Documento --> Cuenta Bancaria del Proveedor**

![Diario de Importación de ExFlow - Cuenta Bancaria del Destinatario](@site/static/img/media/import-journal-025.png)


### Mensajes de Advertencia
Si la cuenta interpretada no coincide con la cuenta bancaria del proveedor actual, o si falta la cuenta, se mostrará un mensaje de advertencia en "Mensajes de Advertencia" a la derecha de los FactBoxes.

![Diario de Importación de ExFlow - Mensajes de advertencia para Validación de Pago y Sugerencia de Pago](@site/static/img/media/warning-messages-002.png)

Lo mismo ocurre con la Sugerencia de Pago, si esta función está activada en Configuración de ExFlow.

Los mensajes de advertencia a continuación se activarán al interpretar una cuenta (bancaria) en ExFlow Data Capture (e importar) que no coincida con el Código de Cuenta Bancaria Preferida establecido en la tarjeta del proveedor en ExFlow Business Central.

![Diario de Importación de ExFlow - Cuenta Bancaria del Destinatario](@site/static/img/media/payment-suggestion-001.png)

Con estas advertencias, ExFlow dará la oportunidad de verificar el documento para asegurarse de que todo esté correcto antes de la creación, o si se necesitan ajustes.

Si no es necesario corregir nada, simplemente haga clic en ''Aceptar todas las advertencias'' para continuar.

![Diario de Importación de ExFlow - Cuenta Bancaria del Destinatario](@site/static/img/media/payment-suggestion-002.png)



### Ignorar Validación de Pago o Sugerencia de Pago en un Diario dedicado
Si una o ambas configuraciones mencionadas anteriormente están habilitadas, pero hay una necesidad de trabajar con documentos manuales en el Diario de Importación donde, por ejemplo, falta una cuenta bancaria interpretada, existe la posibilidad de tener un diario manual dedicado que omitirá la validación y no dará mensajes de advertencia sobre la Validación de Pago ni la Sugerencia de Pago en el Diario de Importación.
 
![Diarios de Importación de ExFlow - Ignorar Validación de Pago e Ignorar Sugerencia de Pago](@site/static/img/media/import-journals-007.png)