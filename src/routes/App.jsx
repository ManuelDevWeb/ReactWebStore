import React from "react";
// Importando React router
import { BrowserRouter, Switch, Route } from "react-router-dom";
// Importando context
import {AppContext} from "@context/AppContext";
// Importando custom hooks
import {useInitialState} from "@hooks/useInitialState";

// Importando componentes
import { Layout } from "@containers/Layout";
import { Home } from "@pages/Home";
import { Login } from "@pages/Login";
import { RecoveryPassword } from "@pages/RecoveryPassword";
import { SendEmail } from "@pages/SendEmail";
import { NewPassword } from "@pages/NewPassword";
import { MyAccount } from "@pages/MyAccount";
import { CreateAccount } from "@pages/CreateAccount";
import { Checkout } from "@pages/Checkout";
import { Orders } from "@pages/Orders";
import { NotFound } from "@pages/NotFound";



// Importando estilos
import "../styles/global.css";

const App = () => {
  const initialState=useInitialState();
  return (
    // Conectando nuestra App al context
    <AppContext.Provider value={initialState}>
    {/* Permitiendo implementar router en el navegador */}
    <BrowserRouter>
      <Layout>
        {/* Regresa la primera ruta que coincida. */}
        <Switch>
          {/* Manejando la forma en que trabajaremos con cada ruta */}
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/recovery-password" component={RecoveryPassword} />
          <Route exact path="/send-email" component={SendEmail} />
          <Route exact path="/new-password" component={NewPassword} />
          <Route exact path="/account" component={MyAccount} />
          <Route exact path="/signup" component={CreateAccount} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/orders" component={Orders} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
    </AppContext.Provider>
  );
};

export { App };
