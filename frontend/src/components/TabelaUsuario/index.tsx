import axios from "axios";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Usuario } from "../../types/usuario";
import { BASE_URL } from "../../utils/api";

type Props = {
    usuario: Usuario;
    refresh: boolean;
    setRefresh: Function;
}

const TabelaUsuario = ({usuario, refresh, setRefresh} : Props) => {

  const excluir = async (usuarioId: number, nome: string) => {
    if (window.confirm(`Deseja realmente excluir o usuário ${nome}?`)) {
      axios.delete(`${BASE_URL}/usuarios/${usuarioId}`).then((response) => {
        setRefresh(!refresh);
      });
    }
  };

  return (
    <>
      <tr key={usuario.id}>
        <th scope="row">{usuario.id}</th>
        <td>{usuario.nome}</td>
        <td>{usuario.email}</td>
        <td align="right">
          <Link className="btn btn-primary" to={`/usuario/${usuario.id}`}>
            <i className="bi bi-pencil"></i>
          </Link>
          &nbsp;&nbsp;
          <Button onClick={() => excluir(usuario.id, usuario.nome)}>
            <i className="bi bi-trash"></i>
          </Button>
        </td>
      </tr>
    </>
  );
};

export default TabelaUsuario;
