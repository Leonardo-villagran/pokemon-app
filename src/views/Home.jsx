import image_pastel from "../assets/img/mp.png";
import { Container } from "react-bootstrap";

//Vista de datos del home
const Home = () => {
  return (
    <Container className="text-center">
      <h1 className="pt-5">
        Bienvenido <span className="fw-bold">Maestro Pokemon</span></h1>
      
      <img className="imagen_home" src={image_pastel} alt={'foto'}/>
      <h2 className="pt-5 fw-bold">El lugar de los Pokemones felices.</h2>
    </Container>
  );
};
export default Home;