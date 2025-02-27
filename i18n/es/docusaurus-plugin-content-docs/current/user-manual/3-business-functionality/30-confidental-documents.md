---
title: Documentos Confidenciales
sidebar_position: 30
hide_title: true
custom_edit_url: null
---
## Documentos Confidenciales

Hay ocasiones en las que es necesario enviar documentos confidenciales para su aprobación en ExFlow Web solo a usuarios específicos. Estos documentos no deben ser accesibles ni buscables para otros usuarios que no formen parte del proceso de aprobación.

Ir a: **Configuración de ExFlow --> Documentos Confidenciales** 

Para poder trabajar con la funcionalidad confidencial, se debe cargar un PDF de plantilla para ocultar la imagen del documento confidencial original a los usuarios no confidenciales. 

No será posible crear y enviar documentos marcados como confidenciales para su aprobación sin tener una imagen de plantilla PDF cargada. 

Haga clic en los tres puntos para adjuntar la plantilla seleccionada.

![Documentos Confidenciales](@site/static/img/media/exflow-setup-confidential-documents-001.png)

Si se necesitan hacer cambios en la plantilla PDF después, por ejemplo, descargar la plantilla actual cargada o reemplazar la plantilla actual, simplemente vuelva a los tres puntos y realice los cambios necesarios. 

![Documentos Confidenciales](@site/static/img/media/exflow-setup-confidential-documents-002.png)

| Reemplazar PDF Original con |    |
|:-|:-|
|**Descargar PDF Actual**                               | Seleccione esta opción para descargar la imagen PDF actual cargada.
|**Reemplazar PDF Actual**                               | Seleccione esta opción para reemplazar la imagen PDF actual cargada.
|**Eliminar PDF Actual**                               | Seleccione esta opción para eliminar la imagen PDF actual cargada. Observe que al eliminar esta plantilla, todas las imágenes PDF de documentos marcados como Confidenciales se mostrarán para todos los usuarios.

### Acceso Confidencial
Para poder trabajar con Documentos Confidenciales y ver la imagen del documento en Business Central, el usuario de ExFlow debe tener un usuario del sistema asociado y se debe otorgar acceso confidencial. <br/>

#### Proporcionar Acceso Confidencial

Para obtener acceso, vaya a la **tarjeta de usuario de ExFlow** y habilite la casilla de verificación **‘’Acceso a Documento Confidencial’’**. Al habilitar esto, se establecerá automáticamente un Conjunto de Permisos de Usuario llamado EX CONFIDENTIAL en la tarjeta de usuario del sistema asociada. 

![Documentos Confidenciales](@site/static/img/media/exflow-user-confidential-access-001.png)

El Acceso Confidencial se puede establecer para todas las empresas o para empresas seleccionadas. Elija ‘’Sí’’ para dar acceso a todas las empresas o elija ‘’No’’ para dar acceso a una empresa específica.

![Documentos Confidenciales](@site/static/img/media/exflow-user-confidential-access-002.png)

Si un usuario obtuvo accidentalmente acceso confidencial a todas las empresas en lugar de a una empresa específica, simplemente desmarque la casilla de verificación para eliminar el acceso confidencial y vuelva a seleccionar la empresa específica. El conjunto de permisos en el usuario del sistema asociado se actualizará instantáneamente. 

![Documentos Confidenciales](@site/static/img/media/exflow-user-confidential-access-003.png)

El usuario de ExFlow a continuación ahora tiene acceso para ver todos los documentos confidenciales solo en la empresa SignUp. 

![Documentos Confidenciales](@site/static/img/media/exflow-user-confidential-access-004.png)

#### Sustitutos
No se admite agregar un usuario no confidencial como sustituto de un usuario confidencial, esto para preservar las imágenes de los documentos confidenciales. 

### Aprobación Confidencial 

Los documentos confidenciales deben tener un flujo de aprobación confidencial. No se puede aplicar un flujo de aprobación regular. 

#### Crear un Flujo de Aprobación Confidencial

Vaya a una Regla de Aprobación de ExFlow regular para crear reglas que se aplicarán a Documentos Confidenciales.
Los Documentos Confidenciales requieren una Regla de Aprobación marcada como ‘’Aprobación Confidencial’’. 

Cuando la Aprobación Confidencial está habilitada en una regla de aprobación, se establecerá un filtro en las Líneas de la Regla de Aprobación para que solo los Grupos de Aprobación con Acceso Confidencial puedan agregarse al flujo de aprobación confidencial. 

Habilitar la Aprobación Confidencial también deshabilitará automáticamente la regla de aprobación. La razón es que las Aprobaciones Confidenciales deben elegirse manualmente y no configurarse dinámicamente. 

Según esta regla de la Agencia de Pensiones, solo Jane está configurada para aprobar los próximos documentos de pensiones en ExFlow Web. 

![Documentos Confidenciales](@site/static/img/media/approval-rule-confidential-approval-001.png)


### Flujo de Trabajo Confidencial 
Tanto los usuarios con acceso confidencial como los que no lo tienen pueden trabajar con Documentos Confidenciales en Business Central. Sin embargo, solo los usuarios con acceso pueden ver la imagen PDF del documento original. 

A continuación, se mostrará un ejemplo para ambos tipos de usuarios: con acceso a documentos confidenciales y sin acceso a documentos confidenciales. 

Los campos confidenciales están ocultos por defecto en todas las páginas de ExFlow. Para comenzar, use Personalizar para agregar el campo **‘’Documento Confidencial’’** al encabezado del diario de importación y otras páginas relevantes. 

![Documentos Confidenciales](@site/static/img/media/import-journal-confidential-001.png)

Si un documento debe manejarse como un documento confidencial, simplemente habilite la casilla de verificación ‘’Documento Confidencial’’ en el documento elegido. 

Cuando el documento está marcado como Confidencial, las reglas de aprobación regulares no serán aplicables, y la lista de reglas de aprobación se filtrará en reglas donde ''Aprobación Confidencial'' esté habilitada. 

Para este ejemplo a continuación, solo dos reglas confidenciales son aplicables.

Las reglas de aprobación marcadas como confidenciales deben seleccionarse manualmente. Para repetir, estas reglas no son dinámicas y, por lo tanto, no se aplicarán automáticamente a los documentos en el diario de importación. 

![Documentos Confidenciales](@site/static/img/media/import-journal-confidential-002.png)

No es obligatorio establecer una regla de aprobación, aún es posible agregar aprobadores manualmente en la Propuesta de Aprobación, si los usuarios tienen acceso a documentos confidenciales. Los usuarios no confidenciales no serán aplicables y, por lo tanto, no serán seleccionables. 

Además, no será posible elegir un grupo de aprobación que contenga tanto usuarios confidenciales como no confidenciales. 

Ilustremos un ejemplo. Si un documento importado ya tiene una regla de aprobación aplicada con un flujo de aprobación propuesto, y un usuario habilita la casilla de verificación Documento Confidencial, entonces aparecerá esta pregunta: 

![Documentos Confidenciales](@site/static/img/media/import-journal-confidential-003.png)

Los usuarios sin acceso a Documentos Confidenciales serán eliminados del flujo de aprobación. Solo los usuarios con acceso permanecerán si se agregan manualmente al flujo.

Dado que Alicia y Theodora no son usuarios con acceso, serán eliminadas. 

Use una ‘’regla confidencial’’ (aprobación confidencial) o agregue usuarios autorizados como aprobadores manualmente y cree el documento como de costumbre. El documento se enviará al aprobador elegido.  <br/>


#### Re-Facturación de Documentos Confidenciales
La funcionalidad de Documentos Confidenciales no se puede usar junto con la Re-Facturación. El siguiente Mensaje de Acción aparecerá en las Líneas del Diario de Importación si es así: ''La funcionalidad de Re-Facturación no se puede usar junto con Documentos Confidenciales''


#### Automatizar Documentos Confidenciales en la Configuración del Proveedor 
Si todos los documentos de un determinado proveedor deben ser confidenciales y tienen el mismo flujo de aprobación y codificación, etc., esto se puede arreglar fácilmente desde la Tarjeta de Configuración del Proveedor, entre otras características de automatización actuales para hacer que el flujo de trabajo confidencial sea eficiente y confiable. 

Sin embargo, si el proveedor no está marcado para manejar Documentos Confidenciales, entonces no es posible utilizar un flujo de trabajo confidencial automatizado. 

![Documentos Confidenciales](@site/static/img/media/vendor-setup-confidential-001.png)

### Documentos Confidenciales en Estado de Aprobación
Como se mencionó, los usuarios con acceso a documentos confidenciales pueden ver y trabajar con los documentos confidenciales de otros en Business Central, como de costumbre.

![Documentos Confidenciales](@site/static/img/media/confidential-documents-approval-status-001.png)

### Flujo de Trabajo como un Usuario no Confidencial
Los usuarios sin acceso a documentos confidenciales no podrán ver la imagen PDF original en la Vista Previa del PDF. 

Los usuarios no confidenciales solo pueden ver la imagen de la plantilla PDF según lo que se haya agregado en la configuración de ExFlow. Esto se debe al propósito de ocultar y proteger la imagen del documento original. 

En este ejemplo, esta será su imagen para ver:

![Documentos Confidenciales](@site/static/img/media/import-journal-confidential-004.png)

Si el usuario hace clic en mostrar imagen del documento o usa el atajo Ctrl+I, se mostrará el siguiente mensaje:

![Documentos Confidenciales](@site/static/img/media/import-journal-confidential-005.png)

#### Deseleccionar un documento o proveedor marcado como Confidencial
Los usuarios no confidenciales pueden habilitar ''Documento Confidencial'' para un Proveedor en la Configuración del Proveedor, pero no lo contrario.

Además, si un documento es etiquetado erróneamente como "Documento Confidencial" por un usuario no confidencial, solo un usuario con acceso puede revertirlo. Cuando eso se haga, y un usuario verifique el documento, ExFlow aplicará automáticamente una regla de aprobación regular de manera dinámica, si existe una regla aplicable.

![Documentos Confidenciales](@site/static/img/media/import-journal-confidential-006.png)

### Documentos Confidenciales en la web de ExFlow 
A diferencia de trabajar en Business Central con documentos confidenciales, la web es más limitada.

Cuando un documento se envía para aprobación, el aprobador web puede ver fácilmente que este documento es confidencial mediante una etiqueta visible junto al número del documento. 
![Documentos Confidenciales](@site/static/img/media/confidential-documents-web-001.png)

Los usuarios no pueden cambiar la codificación, agregar aprobadores ni reenviar el documento confidencial a otro usuario. Un documento confidencial solo puede ser aprobado, rechazado o puesto en espera.

En el ejemplo a continuación, el aprobador intenta ingresar una dimensión y recibe este mensaje de error, ya que no se permiten cambios en la codificación. 

![Documentos Confidenciales](@site/static/img/media/confidential-documents-web-002.png)

Tampoco está permitido buscar otro documento confidencial en el que los usuarios mismos no formen parte del flujo de aprobación.

Por ejemplo, si un aprobador (independientemente del acceso confidencial) intenta buscar un documento confidencial sin estar involucrado en el flujo, el resultado de la búsqueda estará en blanco. 

![Documentos Confidenciales](@site/static/img/media/confidential-documents-web-003.png)
