### TESTMGPANELBACKEND

Este es un proyecto de Node.js que utiliza Express como framework web y Mongoose para conectarse a una base de datos MongoDB. También utiliza variables de entorno para almacenar información sensible y scripts para facilitar el desarrollo.

Se separaron responsabilidades en diferentes componentes como lo indica el CleanCode y se trato de moduladizar al maximo como tambien estandarizar al maximo estos ultimos

## Requisitos previos

Antes de ejecutar el proyecto, asegúrate de tener lo siguiente instalado en tu computadora:

- Node.js
- MongoDB
- Express
- Visual Studio Code (o cualquier otro editor de texto)

## Instalación
1. Clona el repositorio de GitHub y abre el directorio en tu editor de texto.
2. Abre la terminal de Visual Studio Code y navega hasta el directorio del proyecto.
  - cd el-path-hacia-tu-repositorio
3. Instala las dependencias necesarias.
  - npm i
4. Crea un archivo .env en el directorio raíz del proyecto y agrega las siguientes variables de entorno:
  - ORIGIN="puerto-para-los-cors"
  - URI_MONGO="uri-de-la-base-de-datos-mongodb"
  
5. Ejecuta el proyecto.  
  - npm run dev (El repositorio se va a levantar en el puerto 7124)
  
## Endpoits del CRUD
 - Crear un nuevo usuario 
   metodo post
   http://localhost:7124/register + {name:"nombre de tu usuario", email="email de tu usuario"}
 
 - Ver todos los usuarios
   metodo get
   http://localhost:7124
   
 - Buscar un usuario especifico
   metodo get
   http://localhost:7124/user?email="email" o name="nombre"
  
 - Modificar un usuario 
   metodo put
   http://localhost:7124/user/eamil("email del usuario que quieres modificar")
   y body {name="", email=""}
    
 - Eliminar usuario
   metodo delete
   http://localhost:7124/user/eamil("email del usuario que quieres eliminar")
 
  
