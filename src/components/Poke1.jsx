import { useContext } from 'react';
import Context from "../Context/Context"
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


import "../assets/css/pokemon.css";

function PokemonDetails() {
    const [pokemonData, setPokemonData] = useState([]);
    const [nuevaMatriz, setNuevaMatriz] = useState([]);

    const { id } = useParams();
    const { nuevaLista } = useContext(Context);

    useEffect(() => {
        async function fetchPokemonData() {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const data = await response.json();
            setPokemonData(data['stats']);
        }
        fetchPokemonData();

    }, [id]);

    useEffect(() => {
        const nueva = pokemonData.map((producto1, index) => ({
            id: index,
            stats: producto1.stat.name,
            base: producto1.base_stat,
            url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/' + id + '.png',
        }));
        setNuevaMatriz(nueva);
    }, [pokemonData, id]);

    console.log('Pokemon seleccionado: ', nuevaMatriz);
    console.log('Lista seleccionada: ', nuevaLista);

    const imprimirNombre = () => {
        const filteredUsers = nuevaLista.filter(lista => lista.counter.toString() === id.toString());
        const arreglo =
            filteredUsers.map((productox) => {
                return (
                    <h1 >{productox.name.toUpperCase()}</h1>
                )
            });
        return arreglo;
    }
    const imprimir_foto = () => {

        const filteredUsers = nuevaLista.filter(lista => lista.counter.toString() === id.toString());
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

    return (
        <div>
            <Container className='container-fluid'>
                <Row >
                    <Col ></Col>
                    <Col >{imprimirNombre()}</Col>
                </Row>

            </Container>

            <Container >
                <Row className="justify-content-center">
                    <Col  lg >
                    <Card className='h-100 card-transparent'> 
                            <Card.Body className="text-center" >
                                <Card.Text >
                                {imprimir_foto()}
                                </Card.Text>

                            </Card.Body>
                        </Card>
                        </Col>
                        <Col  lg>
                        <Card className='h-100 card-transparent'> 
                            <Card.Body >
                                <Card.Text>
                                <ul>
                                    {imprimir()}
                                </ul>
                                </Card.Text>

                            </Card.Body>
                        </Card>
                        
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default PokemonDetails;
