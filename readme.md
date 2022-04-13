# API Airbnb

Se tiene una base de datos de pruebas sobre información de propiedades airbnb.

## Actividad
Completar el api en nodejs enviada con los siguientes endpoints.
Para cada endpoint y algoritmos a realizar debe de implementar las funciones y propiedades de javascript.


0. GET: /api/v1/airbnb/all-properties
> Este endpoint se entrega funcionando el cúal consulta 100 propiedades airbnb.
Si desea modificar la cantidad de propiedades para realizar pruebas de forma más rápida puede actualizar la variable de entorno DEFAULT_LIMIT_PROPERTIES


1. GET: /api/v1/airbnb/types
> Este endpoint debe de obtener el listado de los diferentes tipos de propiedades la cual se encuentra en la propiedad del json `property_type`

2. GET: /api/v1/airbnb/reviews 
> Este endpoint debe de consultar las 20 propiedades de airbnb con mayor número de reseñas. Propiedad `number_of_reviews` contiene el número de reseñas de cada propiedad.
Retornar por cada propiedad las siguientes propiedades
`name, beds, number_of_reviews, price`

3. GET: /api/v1/airbnb/beds/:nro_beds
> Este endpoint debe de consultar las {nro_beds} de propiedades que tengan mayor número de camas. Propiedad `beds` indica el número de camas por cada propiedad.
Retornar por cada propiedad las siguientes propiedades
`name, beds, number_of_reviews, price`


## Requisitos Entrega
- Realizar la entrega en un repositorio de github.
- Realizar mínimamente 3 commits al repositorio.
- Realizar los 3 endpoints solicitados.
- Realizar colección en el postman y subirla al repositorio.
- Documentar el código