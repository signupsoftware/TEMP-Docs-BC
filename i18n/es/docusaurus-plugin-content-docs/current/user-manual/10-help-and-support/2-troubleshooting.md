---
title: Solución de Problemas
sidebar_position: 2
hide_title: true
custom_edit_url: null
---
## Solución de Problemas
<br/>

### Problemas Comunes de Configuración

#### **Problema:** El Grupo de Publicación de Prod. IVA es incorrecto.
**Solución:** El Grupo de Publicación de Prod. IVA se copia de la configuración de la Cuenta G/L. Si no hay un Grupo de Publicación de Prod. IVA en la Cuenta G/L, este grupo se copia del "Grupo de Publicación de Prod. IVA Estándar" en la "Configuración de ExFlow". Encuentre esta configuración en ***Configuración de ExFlow --> General.***
<br/>

#### **Problema:** El monto del IVA no es correcto.
**Solución:** Verifique que el monto en el encabezado del documento sea el mismo que en el documento PDF. Verifique que se esté utilizando el "Grupo de Publicación de Prod. IVA" correcto. Modifique las líneas si es necesario y verifique que las líneas del documento coincidan con el encabezado del documento.
<br/>

#### **Problema:** El usuario no puede ver documentos para la nueva empresa en ExFlow web.
**Solución:** Agregue el Nombre de la Empresa en Permisos en la Tarjeta de Usuario de ExFlow.
<br/>

### Mensajes de Acción Comunes

#### **Mensaje de Acción:** Ver línea para mensaje de acción específico.
**Mensaje de Acción en Líneas de Importación:** Faltan aprobadores.<br/>
**Solución:** Los aprobadores generalmente se agregan automáticamente mediante Reglas de Aprobación, etc. Si faltan, es posible agregar el Grupo de Aprobación en la línea del documento en el FactBox "Propuesta de Aprobación".
<br/>

#### **Mensaje de Acción:** El monto del IVA (1291,60) no es igual al total del IVA de las líneas (645,80).
**Solución:** Verifique si el monto del IVA está interpretado correctamente. Verifique las líneas de importación, ¿son correctos los "Grupos de Publicación de Prod. IVA"? Si no, cámbielos por los correctos.
<br/>

#### **Mensaje de Acción:** ¡Encabezado de Importación Duplicado en Lote de Diario OCR - ocurrencia 2!
**Solución:** El Número de Documento del Proveedor ya se ha utilizado en un documento de compra abierto, Diario de Importación o Factura de Compra Publicada. Si la línea es un duplicado real, elimine la línea del diario.

Si el número se ha utilizado antes y esto es correcto, tal vez una renta / seguro / suscripción, configure "Permitir Factura Duplicada" en Sí en la **Tarjeta de Configuración del Proveedor de ExFlow** en la pestaña General.
<br/>

#### **Mensaje de Acción:** ¡Esta factura está marcada como Factoring y no se permite crearla!
**Solución:** Si el usuario recibe este mensaje, debe asegurarse de que el Proveedor de Compra sea el Proveedor del cual compra los bienes, mientras que el "Proveedor de Pago" es el Proveedor de Factoring. Si este no es el caso, cambie el número del Proveedor.

La configuración del Proveedor de Factoring se puede encontrar en la **Tarjeta del Proveedor --> Relacionado --> Configuración del Proveedor de ExFlow.** 

Lea más sobre esto en la sección [***Configuración del Proveedor de ExFlow***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/vendor-setup#vendor-setup).
<br/>


#### **Mensaje de Acción**: El monto (XX) no es igual al total de las líneas (YY).
**Solución**: Mire la configuración en **Configuración de ExFlow -->** **Coincidencia de Órdenes --> Línea de Diferencia Automática**, las configuraciones pueden estar involucradas. La diferencia no corresponde a la configuración de "Monto Máximo de Diferencia (LCY)" o "Máxima Diferencia %". Modifique el monto en el encabezado o en las líneas.
<br/>

### Mensajes Relacionados con Órdenes
####  **Mensaje de Acción**: ¡La Orden de Documento XXX no existe!
**Solución**: Primero, verifique si este número de Orden es el mismo que en la imagen escaneada. Si esto es correcto, vaya a la columna "Número de Orden" y mire estos números de Órdenes.
<br/>

####  **Mensaje de Acción:** La Orden No XX no tiene líneas recibidas.
**Solución:** Cuando un usuario recibe un mensaje de que la orden no se puede hacer coincidir con la línea de recibo, esto debe manejarse en la Línea de la Orden de Compra. Tenga en cuenta que los recibos no se manejan en ExFlow.

Vaya a la Orden de Compra, por ejemplo, a través del "Número de Orden", asegúrese de que se haya realizado el recibo y publique el recibo.
<br/>

#### **Mensaje de Acción:** La línea con el Número de Orden XX no se puede hacer coincidir con una línea de recibo.
**Solución:** Cuando un usuario recibe un mensaje de que la orden no se puede hacer coincidir con la línea de recibo, esto debe manejarse en la Línea de la Orden de Compra. Tenga en cuenta que los recibos no se manejan en ExFlow.

Vaya a la Orden de Compra, por ejemplo, a través del Número de Orden, asegúrese de que se haya realizado el recibo y publique el recibo.

Aprenda más sobre el proceso de órdenes en la sección [***Proceso de Coincidencia de Órdenes de Compra***](https://docs.signupsoftware.com/business-central/docs/user-manual/approval-workflow/purchase-order-matching-process#purchase-order-matching-process).
<br/>

### Mensajes Relacionados con Proveedores

#### **Mensaje de Acción:** No se puede identificar al proveedor para el ID de Proveedor XXX.
**Solución:** Verifique el documento escaneado. ¿Está el ID de Proveedor interpretado correctamente? Verifique el Nombre, IBAN y las cuentas bancarias. Si no, modifique el número de ID del Proveedor.

¿Existe el Proveedor en Business Central? Si no, cree el Proveedor en Business Central.

Para ver los datos importados:<br/>
Vaya a: **Diarios de Importación de ExFlow -->** abra **Diario de Importación de ExFlow --> Relacionado --> Archivos --> Mostrar Detalles de Importación (OCR)**.
<br/>

### Mensajes Relacionados con Correos Electrónicos 

En la versión 19.3 de ExFlow/BC20, SMTP está obsoleto y se deben usar Cuentas de Correo Electrónico. Si no se configuran las Cuentas de Correo Electrónico, no se enviarán recordatorios por correo electrónico para documentos no aprobados, etc.
<br/>

#### **Mensaje de Acción:** La Cuenta de Correo Electrónico no está configurada
**Solución:** Verifique que una Cuenta de Correo Electrónico válida esté configurada y que el Escenario de Correo Electrónico tenga asignado "ExFlow Default".

Para preguntas relacionadas con Cuentas de Correo Electrónico, contacte a su Socio de Business Central.
<br/>

#### **Mensaje de Acción:** La función de Capacidades de Correo Electrónico Mejoradas no está habilitada
**Solución:** Las capacidades de correo electrónico mejoradas deben estar activadas. Asegúrese de que el Escenario de Correo Electrónico tenga asignado "ExFlow Default" tanto en Cuentas de Correo Electrónico como en Configuración de Correo Electrónico de ExFlow.
<br/>