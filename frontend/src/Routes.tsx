import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import UsuarioForm from "./pages/UsuarioForm";

const Routes = () => {
  return (
    <>
      <Header />

      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Main />
          </Route>
          <Route path="/usuario" exact>
            <UsuarioForm />
          </Route>
          <Route path="/usuario/:usuarioId" exact>
            <UsuarioForm />
          </Route>
        </Switch>
      </BrowserRouter>

      <Footer />
    </>
  );
};

export default Routes;
