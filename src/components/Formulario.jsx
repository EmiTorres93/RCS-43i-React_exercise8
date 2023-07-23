import { Form, Button } from "react-bootstrap";

const Formulario = () => {
  const datos = {
    nombre: "",
    apellido: "",
    dni: "",
    email: "",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let check = false;
    for (let dato in datos) {
      if (datos[dato] === "") {
        check = true;
      }
    }

    if (check) {
      alert("Completar todos los datos");
    } else {
      alert("Datos enviados");
    }
  };

  const handleChange = (e) => {
    datos[e.target.name] = e.target.value;
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            name="nombre"
            type="text"
            placeholder="Escribe tu nombre completo"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            name="apellido"
            type="text"
            placeholder="Escribe tu Apellido"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="">
          <Form.Label>DNI</Form.Label>
          <Form.Control
            name="dni"
            type="number"
            placeholder="Escribe tu DNI"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default Formulario;
