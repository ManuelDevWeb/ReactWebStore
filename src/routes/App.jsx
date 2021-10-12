import React from "react";

// Importando React router
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Importando componentes
import { Layout } from "../containers/Layout";
import { Login } from "../containers/Login";
import { RecoveryPassword } from "../containers/RecoveryPassword";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";

// Importando estilos
import "../styles/global.css";

const App = () => {
  return (
    /* Permitiendo implementar router en el navegador */
    <BrowserRouter>
      <Layout>
        {/* Regresa la primera ruta que coincida. */}
        <Switch>
          {/* Manejando la forma en que trabajaremos con cada ruta */}
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/recovery-password" component={RecoveryPassword} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export { App };
