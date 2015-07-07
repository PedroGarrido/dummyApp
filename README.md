# DummyApp #

Aplicación web que permite realizar búsquedas aplicando diferentes filtros (ciudad, año y género de la población).
Esta información procede de una base de datos no relacional almacenada en MongoLabs.

# Introduction

Este proyecto está generado a través de '**yo angular-fullstack**' (https://github.com/DaftMonk/generator-angular-fullstack) version 2.0.13.


##Setup Project

En primer lugar, es necesario instalarse los paquetes bower y npm. A través de '**bower install**' y '**npm install**'.

## Build & development

Ejecutar '**grunt serve**' para lanzar la aplicación.


# About the development

## Architecture

Relativo a la arquitectura que se ha seguido, en la carpeta 'app' se pueden observar la estructura que sigue este proyecto. Destacan:

## Client

### Services
Continene todas las API's que se comuniquen con servicios externos.
En concreto, 'externalServiceApi' se encarga de llamadas puras a la Api, mientras que 'mazeApi' y 'userApi' se encargan de la comunicación entre la lógica de negocio de la aplicación y la 'externalServiceApi'.

De esta manera lo que se consigue es que cualquier cambio futuro que se pueda ocurrir en la API externa, afecte lo menos posible a la aplicación.

### Modules
Cada uno de los módulos es una ruta a la que se puede navegar (definida en el 'app.js'). Están compuestos por:

* **controller.js**: Se encarga de toda la lógica de negocio que se va a manejar en una ruta concreto.
* **template.html**: Template que se renderiza tras navegar a su ruta.
* **style.css**: Hoja de estilo específica de este módulo que es cargada desde el main.css.

### Styles
Contiene hojas de estilos genéricas que afectan a todo el proyecto.
Desde aquí se importan las hojas de estilo de los módulos que se deseen.

## Server

## Libraries
