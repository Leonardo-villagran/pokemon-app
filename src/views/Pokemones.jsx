import { Container } from "react-bootstrap";
import PokemonesComp from "../components/PokemonesComp";
import "../assets/css/pokemon.css";

//Vista del dropdown para la selección de Pokemones.
const Navigation = () => {
  
  return (
    <Container className="pt-5">
      <PokemonesComp />
    </Container>
  );
};
export default Navigation;
