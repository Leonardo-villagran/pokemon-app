import React,  { useState, useContext } from 'react';
import Context from "../Context/Context"
import { useNavigate } from 'react-router-dom';

function PokemonList() {
  
  const {nuevaLista} = useContext(Context);
  
  const [selectedPokemon, setSelectedPokemon] = useState('');
  const navigate = useNavigate();

  const handleSelectChange = (event) => {
    setSelectedPokemon(event.target.value);
  }

  const handleViewDetails = () => {
    navigate(`/Pokemon/${selectedPokemon}`);
  }
  console.log('Lista Pokemona: ', nuevaLista);
  console.log('Pokemon seleccionado: ', selectedPokemon);
  return (
    <div className="d-block text-center">
      <h1 className="p-3" >Seleccionar un Pokemón de la siguiente lista:</h1>
      <div>
      <select className="dropdown-toggle p-1" onChange={handleSelectChange} value={selectedPokemon}>
        <option value="" defaultValue disabled>Listado de Pokemones</option>
        {nuevaLista.map((pokemon, index) => (
          <option key={index} value={pokemon.counter}>{pokemon.name}</option>
        ))}
      </select>
      </div>
      <div>
      <button  className="btn btn-warning m-2 " onClick={handleViewDetails}>Ver detalles</button>
      </div>
      
    </div>
  );
}

export default PokemonList;
