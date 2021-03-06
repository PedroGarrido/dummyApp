# DummyApp #

Aplicación web que permite realizar búsquedas aplicando diferentes filtros (ciudad, año y género de la población).
Esta información procede de una base de datos no relacional almacenada en MongoLabs.

# Introduction

Este proyecto está generado a través de '**yo angular-fullstack**' (https://github.com/DaftMonk/generator-angular-fullstack) version 2.0.13.


### Setup Project

En primer lugar, es necesario instalarse los paquetes bower y npm. A través de '**bower install**' y '**npm install**'.

### Build & development

Ejecutar '**grunt serve**' para lanzar la aplicación.


# About the development

**Keywords:** AngularJS, Node.JS, ExpressJS, Mongo, MongoLabs, Bootstrap, D3.js, Google Maps

## Architecture
Respecto a la arquitectura que se ha seguido en este proyecto, hablamos de una arquitectura cliente - servidor, en el que la base de datos se encuentra en remoto (MongoLabs).
Por ello, se debe analizar por separado el cliente y  el servidor.

### Client
Respecto a la arquitectura del cliente, se puede observar la estructura que sigue este proyecto a través de la carpeta 'app'. Destacan:

#### Services
Continene todas las API's que se comuniquen con servicios externos. En este caso úniamente tenemos un 'service', denominado 'cities.service que se encarga de todas las llamadas a nuestro servidor.

#### Modules
Cada uno de los módulos es una ruta a la que se puede navegar (definida en el 'app.js'). Están compuestos por:

* **controller.js**: Se encarga de toda la lógica de negocio que se va a manejar en una ruta concreto.
* **template.html**: Template que se renderiza tras navegar a su ruta.
* **style.css**: Hoja de estilo específica de este módulo que es cargada desde el app.css.

#### App.js
Contiene la definición de rutas de nuestra aplicación y las relaciona con cada uno de los módulos anteriormente mencionados.

#### App.scss
Contiene hojas de estilos genéricas que afectan a todo el proyecto.
Desde aquí se importan las hojas de estilo de los módulos que se deseen.

### Server
Respecto a la arquitectura seguida para el desarrollo del sevidor, destaca:
* '**routes.js**': Donde damos de alta a los EndPoints que usarán los clientes del servidor.
* '**/config**': Donde mantenemos la configuración del proyecto para cada uno de los entornos donde queramos desplegar el mismo, en principio, únicamente se usa 'development'. Dentro de esta configuración se encuentra, por ejemplo, la configuración para conectar con la base de datos alojada en MongoLabs.
* '**api/cities**': En la carpeta Api, mantendremos toda la lógica de negocio del servidor. En concreto en 'api/cities', recogemos las peticiones por parte del cliente, las procesamos, realizamos las respectivas peticiones a la base de datos, las tratramos y envíamos la respuesta al cliente.

#### Api
El endPoint creado para dar soporte al cliente es **/api/cities**

* '**/**': Devuelve un array de String con todas las ciudades almacenadas.
* '**/:id**': Devuelve un array de String con los años registrados referentes a una ciudad identificada por su nombre('id').
* '**/:city/:year/:gender**': Devuelve un array del objeto 'population' (que posee los atributos: age, gender, count).
* '**/all**': Devuelve la base de datos por completo.
