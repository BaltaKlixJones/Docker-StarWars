# Docker-StarWars

## Bienvenido/a al proyecto!
Este repositorio contiene una aplicación que utiliza la arquitectura de microservicios con MongoDB, Docker y 
se despliega en Google Cloud mediante máquinas virtuales (VMs).

## Arquitectura de Microservicios
La arquitectura de microservicios es un enfoque para desarrollar aplicaciones como un conjunto de servicios pequeños e independientes, 
cada uno ejecutándose en su propio proceso y comunicándose entre sí a través de protocolos ligeros como HTTP o mensajería. 
Cada microservicio se enfoca en una tarea específica y se puede desarrollar, probar, desplegar y escalar de forma independiente.

En este proyecto, he implementado una arquitectura de microservicios para una aplicación utilizando MongoDB como base de datos.

## MongoDB
MongoDB es una base de datos NoSQL orientada a documentos. Es altamente escalable, flexible y permite el almacenamiento de datos estructurados y no estructurados.
En ésta aplicación, utilizamos MongoDB para almacenar y gestionar la información de nuestros microservicios.

## Docker
Docker es una plataforma de contenedores que permite empaquetar una aplicación y sus dependencias en una unidad estándar llamada contenedor.
Estos contenedores son aislados y portables, lo que facilita la implementación y ejecución de aplicaciones en diferentes entornos.
En ésta proyecto, se utilizó Docker para empaquetar y distribuir cada uno de los microservicios junto con sus dependencias, 
lo que simplifica su despliegue y gestión.


## Despliegue en Google Cloud
Google Cloud es una plataforma de servicios en la nube que ofrece una amplia gama de servicios para desarrollar, 
desplegar y escalar aplicaciones. 
En este proyecto, utilicé Google Cloud para desplegar nuestras máquinas virtuales (VMs) que ejecutan los microservicios Dockerizados
y se comunican con la base de datos MongoDB.

## URL del Despliegue en Google Cloud
El proyecto está alojado en la siguiente URL: http://34.125.143.172:8000/

A continuación, se detallan las rutas disponibles en el proyecto:

Para acceder a la información de los personajes: http://34.125.143.172:8000/characters 

Para acceder a la información de los planetas: http://34.125.143.172:8000/planets 

Para acceder a la información de las películas: http://34.125.143.172:8000/films 

