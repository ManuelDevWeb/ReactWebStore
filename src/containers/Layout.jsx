import React from "react";

// Importando componentes
import {Header} from '@components/Header';

const Layout = ({ children }) => {
  return (
    <div className="Layout">
			<Header />
			{children}
		</div>
  )
};

export { Layout };
