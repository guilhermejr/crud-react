import { useParams, Link, useHistory } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../utils/api";

interface Parametro {
  usuarioId: string;
}

const UsuarioForm = () => {
  let { usuarioId } = useParams<Parametro>();
  let history = useHistory();

  useEffect(() => {
    if (usuarioId) {
      axios.get(`${BASE_URL}/usuarios/${usuarioId}`).then((response) => {
        setId(response.data.id);
        setNome(response.data.nome);
        setEmail(response.data.email);
      });
    }
  }, [usuarioId]);

  const [id, setId] = useState(0);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  const salvar = async () => {
    if (id) {
      axios
        .put(`${BASE_URL}/usuarios/${id}`, { id, nome, email })
        .then((response) => {
          history.push("/");
        });
    } else {
      axios.post(`${BASE_URL}/usuarios`, { nome, email }).then((response) => {
        history.push("/");
      });
    }
  };

  return (
    <main>
      <Container>
        <h2 className="my-3">Usuário</h2>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            salvar();
          }}
        >
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              autoFocus
              type="text"
              required
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>E-mail</Form.Label>
            <Form.Control
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <div className="text-center">
            <Link className="btn btn-secondary" to="/">
              Voltar
            </Link>
            &nbsp;&nbsp;
            <Button variant="primary" type="submit">
              Salvar
            </Button>
          </div>
        </Form>
      </Container>
    </main>
  );
};

export default UsuarioForm;
