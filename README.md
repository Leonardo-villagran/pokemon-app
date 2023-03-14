# Pokemon-app

>"Trabajo número 3 (Router II) de DesafioLatam para el módulo: React II (G27):"

## Características:

* El sistema consiste en una web, en la cual se debe seleccionar un Pokemón para obtener un listado de datos asociados. 

* La matriz de datos obtenidas para presentar los datos de cada Pokemón se obtienen de forma online a través de la PokeAPI [https://pokeapi.co/api/v2/pokemon/](https://pokeapi.co/api/v2/pokemon/)

* Se genera una nueva matriz para almacenar los datos requeridos de cada Pokemón en la lista (Id, nombre, dirección de la imagen).

* Se ordena la matriz por nombre de cada Pokemón.

* Se generan las rutas para utilizar las distintas vistas a través de Browse Router (Home, Pokemones y Notfound).

* Se traspasa la nueva lista al componente PokemonesComp en la cual se genera un select con 100 Pokemones, al seleccionar uno, se vuelve a cargar la página con un Id como parámetro, lo cual permite realizar una nueva consulta a la PokeAPI para obtener los valores de las estadísticas del Pokemón seleccionado y los datos que faltan se obtienen de la matriz original.

* Cuando se selecciona un Pokemón a través de un select, se utiliza el parámetro id con el nombre del Pokemón (almacenado en un estado llamado selectedPokemon), para navegar a la ruta que imprime sus datos. Ejemplo: navigate(`/Pokemones/${selectedPokemon}`.

* Si se ingresa un nombre que no está en la API, a través de la barra de direcciones del navegador, aparecerá un mensaje que dice no existe en la base de datos.

* Si se ingresa un número en vez de un nombre, a través de la barra de direcciones del navegador, también se buscará el Pokemón asociado a ese id.  

## Nota: 

>En caso de instalar con npm el sistema se carga en la ruta: 

http://localhost:3000/pokemon-app

## Acceso web desde (Github Pages):

[https://leonardo-villagran.github.io/pokemon-app](https://leonardo-villagran.github.io/pokemon-app)

## Imágenes de las distintas vistas:

![https://github.com/Leonardo-villagran/pokemon-app/blob/main/src/assets/img/ejemplo01.jpg](https://github.com/Leonardo-villagran/pokemon-app/blob/main/src/assets/img/ejemplo01.jpg)

![https://github.com/Leonardo-villagran/pokemon-app/blob/main/src/assets/img/ejemplo02.jpg](https://github.com/Leonardo-villagran/pokemon-app/blob/main/src/assets/img/ejemplo02.jpg)

![https://github.com/Leonardo-villagran/pokemon-app/blob/main/src/assets/img/ejemplo03.jpg](https://github.com/Leonardo-villagran/pokemon-app/blob/main/src/assets/img/ejemplo03.jpg)