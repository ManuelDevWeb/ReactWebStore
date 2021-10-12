import React from 'react';

// Importando componentes
import {Layout} from '../containers/Layout';
import {Login} from '../containers/Login';

// Importando estilos
import '../styles/global.css';

const App = () => {
    return (
        <Layout>
            <Login />
        </Layout>
    )
}

export {App};
