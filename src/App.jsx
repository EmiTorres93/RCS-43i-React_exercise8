import { Container } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Titulo from "./components/Titulo";
import Formulario from "./components/Formulario";

function App() {
  return (
    <>
      <Container className="m-5">
        <Titulo></Titulo>
        <Formulario></Formulario>
      </Container>
    </>
  );
}

export default App;
