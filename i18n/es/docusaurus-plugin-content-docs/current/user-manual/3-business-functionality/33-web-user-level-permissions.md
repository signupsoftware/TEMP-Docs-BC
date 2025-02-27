---
title: Permisos de Nivel de Usuario Web
sidebar_position: 33
hide_title: true
custom_edit_url: null
---
## Permisos de Usuario Web

Ir a: **Permisos de Nivel de Usuario Web de ExFlow** 

Todos los usuarios de ExFlow necesitan tener un rol de permiso web establecido en la tarjeta de usuario de ExFlow para poder trabajar con la aprobación en ExFlow web y Business Central.<br/><br/>
Vaya a Permisos de Nivel de Usuario Web para obtener una mejor visión general de todos los permisos de usuario web.


<br/>
 

|Permisos de Nivel de Usuario Web |    |
|:-|:-|
|**Editar Lista**| Editar la lista de permisos de nivel de usuario web
|**Acciones --> Funciones --> Inicializar configuración**|  Restablecer todos los cambios en los permisos de nivel de usuario web a los valores predeterminados.

<br/>



![permisos de usuario web](@site/static/img/media/exflow-web-user-level-permissions-001.png)


Actualmente, hay disponibles los siguientes cuatro Permisos de Nivel de Usuario:<br/>


| Nivel de Usuario Web |    |
|:-|:-|
|**Aprobador**| El aprobador puede Aprobar, Rechazar o poner un documento en Espera. El aprobador solo tiene acceso a documentos donde el aprobador está incluido en el flujo de aprobación. No se permiten cambios en el documento.
|**Aprobador (Poder)**|  Mismos permisos que el Aprobador. Agregar y Reenviar a otro Aprobador. Se permite agregar o cambiar la codificación, es decir, Cuenta G/L o Dimensiones.
|**Aprobador (Súper)**|  Mismos permisos que el Usuario Poder. El usuario puede ver todos los documentos aprobados en el Historial de ExFlow.
|**Admin**|  Permiso de administrador en ExFlow Web. Este usuario puede realizar configuraciones que se aplican a todos los Aprobadores en ExFlow Web.

<br/>

Si se necesita hacer algún cambio en los permisos, por ejemplo, para permitir la codificación para todos los usuarios con permiso de Aprobador, es posible editar la lista y habilitar la casilla de verificación ''Permitir Codificación''. <br/>

![permisos de usuario web](@site/static/img/media/exflow-web-user-level-permissions-002.png)


Lea más sobre cómo manejar los permisos web y aplicarlos a los usuarios de ExFlow en la sección [***Agregar acceso a la empresa y rol de permiso web bajo Permisos***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/exflow-user#add-company-access-and-web-permission-role-under-permissions)