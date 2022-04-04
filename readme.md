Autor: Domenje Carlos R. - 2022

# Challenge Conexa - Nodejs - Expressjs

Crear un proyecto llamado "Back", que sea creado con Express de Node, el cual brindara una API REST JSON.
 

## Introduccion 🚀
Para el proyecto hay que tener en cuenta las siguientes consideraciones: 
- Debe tener un servicio de login.
- Debe devolver una lista de [post] la cual debe consumir a la API: https://jsonplaceholder.typicode.com/posts
- Debe devolver una lista de [photos], el cual debe consumir a la API: https://jsonplaceholder.typicode.com/photos
-  Esta lista debe tener paginación de 10 en 10, haciendo uso de LIMIT y OFFSET.
- Todos los llamados a api deben ser a través del back.
- Hacer uso de JWT para el proceso de autenticación.
- Aplicar las prácticas más usadas a nivel de desarrollo, al igual que librerías que sean de mucha utilidad para que muestren la calidad de tu trabajo. 
- Subir a un repositorio público
- Deployar en heroku o simil

Mira **Despliegue** para conocer como desplegar el proyecto.


### Pre-requisitos 📋

[NodeJs](https://nodejs.org/es/download/) Para realizar el deploy de la aplicacion.

[Npm](https://docs.npmjs.com/cli/install) Para realizar la instalacion de paquetes utilizacion por la aplicacion.

[Postman](https://www.postman.com/) Para realizar el testing de las apis desarrolladas.

[Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) es necesario si quiere realizar por linea de comandos el clone del repositorio.

Descargar o clonar el repositorio del proyecto.
```
git clone https://github.com/carlosdomenje/backend-test-conexa.git

```

## Despliegue 📦
Puede utilizar las apis desde Heroku ingresando la url:
```
https://api-backend-cdomenje.herokuapp.com/
```
Luego en el proyecto, dirigirse a:

```
cd testing
```
Ejecutar el archivo con el software **Postman**


De forma local, debera realizar los siguientes pasos:
Para realizar el despliegue de la aplicacion primero debera ingresar a la carpeta del proyecto:

```
cd backend-test-conexa
```

Abrir una terminal y ejecutar:

```
touch .env
```

Dentro del archivo .env debera colocar las siguiente variables de entorno, que son variables utilizadas para testing y no para produccion. 

```
PORT=3001
API_VERSION=v1
JWT_SECRET=jwt-secret-12345
URL_POST=https://jsonplaceholder.typicode.com/posts
URL_PHOTOS=jsonplaceholder.typicode.com
NODE_ENV=testing
```

Luego debera ejecutar los siguientes comandos:

```
npm install

npm test
```
Dentro de **postman**, debera configurar la url como:
```
localhost:3001
```

Para realizar las pruebas de las diferentes apis y su funcionalidad puede dirigirse a la carpeta **testing** del proyecto donde encontrará las diferentes funciones en un archivo para postman.


## Herramientas utilizadas 🛠️

* [NodeJS](https://nodejs.org/en/)
* [Postman](https://www.postman.com/)

## Contribuir 🖇️

Puede contribuir realizando un pull request con las sugerencias al proyecto.


## Versionado 📌

Se utiliza [Git](https://git-scm.com/) para el versionado.


## Licencia 📄

Este proyecto está bajo la Licencia GPL.
