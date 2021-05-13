import axios from "axios";
import { BASE_URL } from "../../utils/api";
import { Usuario } from "../../types/usuario";
import { useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import TabelaUsuarioVazia from "../../components/TabelaUsuarioVazia";
import TabelaUsuario from "../../components/TabelaUsuario";

const Main = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([
    { id: 0, nome: "", email: "" },
  ]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    axios.get(`${BASE_URL}/usuarios`).then((response) => {
      setUsuarios(response.data);
    });
  }, [refresh]);

  return (
    <main>
      <Container>
        <h2 className="my-3">Lista de usuários</h2>
        <Table striped hover>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nome</th>
              <th scope="col">E-mail</th>
              <th scope="col">&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.length === 0 && <TabelaUsuarioVazia />}
            {usuarios.map((usuario) => <TabelaUsuario key={usuario.id} usuario={usuario} refresh={refresh} setRefresh={setRefresh} />)}
          </tbody>
        </Table>
        <div className="text-center">
          <Link className="btn btn-primary my-3" to="/usuario">
            Novo usuário
          </Link>
        </div>
      </Container>
    </main>
  );
};

export default Main;
