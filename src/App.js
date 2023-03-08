// Importación del menú
import React, { useState, useEffect } from 'react';
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Pokemones from "./views/Pokemones";
import Pokemon from "./views/Pokemon";
import NotFound from "./views/NotFound";
import Footer from "./views/Footer";

import  Context  from "./Context/Context";


import "./assets/css/pokemon.css";

function App() {

  const [pokemonList, setPokemonList] = useState([]);
  const [nuevaLista, setNuevaLista] = useState([]);

  useEffect(() => {
    async function fetchPokemonList() {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=100&offset=0');
        const data = await response.json();
        setPokemonList(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchPokemonList();

    
  }, []);

  useEffect(() => {
    const itemsWithCounter = pokemonList.map((item, index) => {
      return { ...item, 
        counter: index + 1,
        url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/' + (index+1) + '.png', };
    });

    const sortedData = itemsWithCounter.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });


    setNuevaLista(sortedData);
  }, [pokemonList]);


  const globalState = { nuevaLista, setNuevaLista };
   //<BrowserRouter basename='/pokemones'>
  return (
    <div className="App">
      <Context.Provider value={ globalState }>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Pokemones" element={<Pokemones />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/Pokemon/:id" element={<Pokemon />} />
        </Routes>
      </BrowserRouter>
      </Context.Provider>
      <Footer />
    </div>
  );
}

export default App;
