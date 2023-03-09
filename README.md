# Pokemon-app

>"Trabajo número 3 (Router II) de DesafioLatam para el módulo: React II (G27):"

## Características:

* El sistema consiste en una web, en la cual se debe seleccionar un Pokemon para obtener un listado de datos asociados. 

* La matriz de datos obtenidas para presentar los datos de cada Pokemón se obtienen de forma online a través de la PokeAPI[https://pokeapi.co/api/v2/pokemon/](https://pokeapi.co/api/v2/pokemon/)

* Se genera una nueva matriz para almacenar los datos requeridos de cada Pokemón en la lista (Id, nombre, dirección de la imagen).

* Se ordenan la matriz por nombre de cada Pokemón.

* Se generan las rutas para utilizar las distintas vistas a través de Browse Router (Home, Pokemones y Notfound).

* Se traspasa la nueva lista al componente PokemonesComp en la cual se genera un select con 100 Pokemones, al seleccionar uno, se vuelve a cargar la página con un Id como parámetro, lo cual permite realizar una nueva consulta a la PokeAPI para obtener los valores de las características del Pokemón seleccionado.   

## Nota: 

>En caso de instalar con npm el sistema se carga en la ruta: 

http://localhost:3000/pokemon-app

## Acceso web desde (Github Pages):

[https://leonardo-villagran.github.io/pokemon-app](https://leonardo-villagran.github.io/pokemon-app)

## Imágenes de las distintas vistas:

![https://github.com/Leonardo-villagran/pokemon-app/blob/main/src/assets/img/ejemplo01.jpg](https://github.com/Leonardo-villagran/pokemon-app/blob/main/src/assets/img/ejemplo01.jpg)

![https://github.com/Leonardo-villagran/pokemon-app/blob/main/src/assets/img/ejemplo01.jpg](https://github.com/Leonardo-villagran/pokemon-app/blob/main/src/assets/img/ejemplo02.jpg)

![https://github.com/Leonardo-villagran/pokemon-app/blob/main/src/assets/img/ejemplo01.jpg](https://github.com/Leonardo-villagran/pokemon-app/blob/main/src/assets/img/ejemplo03.jpg)