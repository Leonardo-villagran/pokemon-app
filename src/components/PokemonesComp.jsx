import React, { useState, useContext, useEffect } from 'react';
import Context from "../Context/Context"
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import "../assets/css/pokemon.css";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function PokemonList() {
  const { id } = useParams();
  const { nuevaLista } = useContext(Context);

  const [selectedPokemon, setSelectedPokemon] = useState('');
  const [pokemonData, setPokemonData] = useState([]);
  const [nuevaMatriz, setNuevaMatriz] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPokemonData() {
      if (id) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        setPokemonData(data['stats']);
      }
    }
    fetchPokemonData();
  }, [id]);

  useEffect(() => {
    const nueva = pokemonData.map((producto1, index) => ({
      id: index,
      stats: producto1.stat.name,
      base: producto1.base_stat,
    }));
    setNuevaMatriz(nueva);
  }, [pokemonData, id]);

  const handleViewDetails = (event) => {
    event.preventDefault();
    navigate(`/Pokemones/${selectedPokemon}`);
  }

  const imprimirNombre = () => {
    const filteredUsers = nuevaLista.filter(lista => lista.name.toString() === id.toString());
    const arreglo =
      filteredUsers.map((productox, index) => {
        return (
          <h1 key={index}>{productox.name.toUpperCase()}</h1>
        )
      });
    return arreglo;
  }
  const imprimir_foto = () => {

    const filteredUsers = nuevaLista.filter(lista => lista.name.toString() === id.toString());
    console.log("Filtrado: ", filteredUsers);

    const arreglo =
      filteredUsers.map((productox, index) => {
        return (
          <img key={index} className='peque' src={productox.url} alt="foto"></img>
        )
      });
    return arreglo;
  }

  const imprimir = () => {
    const arreglo =
      nuevaMatriz.map((productox, index) => (
        <li className='letra' key={index}>{productox.stats}{':'} {productox.base}</li>
      ));

    return arreglo;
  }
  console.log('Lista Pokemona: ', nuevaLista);
  console.log('Estadísticas pokemonas: ', pokemonData);
  console.log('Pokemon seleccionado: ', selectedPokemon);
  console.log('id: ', id);

  const imprimirProcesado = () => {
    return (
      <>
        <Container className='container-fluid'>
          <Row >
            <Col >{imprimirNombre()}</Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg >
              <Card className='h-100 card-transparent2'>
                <Card.Body className="text-left" >
                  <Card.Text className="text-left">
                    {imprimir_foto()}
                  </Card.Text>

                </Card.Body>
              </Card>
            </Col>
            <Col lg>
              <Card className='h-100 card-transparent4'>
                <Card.Body >
                  <Card.Text>
                    {imprimir()}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    )
  }

  const imprimirSelect = () => {
    return (
      <>
        <h1 className="p-3" >Seleccionar un Pokemón de la siguiente lista:</h1>
        <Container className='container-fluid'>
          <Row className="justify-content-center">
            <Col lg >
              <Card className='h-100 card-transparent4'>
                <Card.Body className="text-center" >
                  <Card.Text >
                    <div>
                      <select className="form-select form-select-lg mb-3 p-3" aria-label="form-select-lg example" value={selectedPokemon} onChange={(event) => setSelectedPokemon(event.target.value)} >
                        <option value="" defaultValue disabled>Listado de Pokemones</option>
                        {nuevaLista.map((pokemon, index) => (
                          <option key={index} value={pokemon.name}>{pokemon.name}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <button className="btn btn-warning m-2 p-4 " onClick={handleViewDetails}><h3>Ver detalles</h3></button>
                    </div>
                  </Card.Text>

                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

      </>
    )
  }



  return (
    <div className="d-block text-center">
      {(id) ? imprimirProcesado() : imprimirSelect()}
    </div>
  );
}

export default PokemonList;
