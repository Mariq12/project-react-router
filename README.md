# <p align="center">PROJECT REACT ROUTER</p>
## Descripción
Proyecto React realizado en el "Curso de React Router: Navegación en una SPA" de Alura Latam.
## Instalación de dependencias

    npm i axios
    npm i json-server
    npm i react-router-dom

## Instalaciones para el servidor

    npm install -g json-server

## Comandos
Para levantar la aplicación

    npm start

Abre [http://localhost:3000](http://localhost:3000)

Para levantar el servidor:

    npx json-server --watch .\db.json --port=5000

Se levanta el servidor en el puerto 5000

    [1] Endpoints:
    [1] http://localhost:5000/categories
    [1] http://localhost:5000/posts

[http://localhost:5000/categories](http://localhost:5000/categories)
[http://localhost:5000/posts](http://localhost:5000/posts)

### Opcional
1. Instalar el paquete cooncurrently con el comando:

    npm i concurrently

*Para ejecutar comandos smultaneos*.

En el Package.json se agrega en scripts:

    "json-server": "json-server --watch ./db.json --port=5000",
    "start:all": "concurrently \"npm start\" \"npm run json-server\""

Quedarías así: 

    "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "json-server": "json-server --watch ./db.json --port=5000",
    "start:all": "concurrently \"npm start\" \"npm run json-server\""
    },

2. Ejecutar:

    npm install

*instalará todas las dependencias enumeradas en tu package.json.*

3. Ejecutar los scripts

Para iniciar solo el servidor de desarrollo de React:

        npm start

Para iniciar solo json-server:

        npm run json-server

Para iniciar ambos servidores al mismo tiempo:

        npm run start:all
---
