import React from 'react';

// Importando componentes
import {ProductItem} from '@components/ProductItem';

// Importando estilos
import '@styles/ProductList.scss';

const ProductList = () => {
    return (  
        <section className="main-container">
			<div className="ProductList">
				<ProductItem />
			</div>
		</section>
    );
}
 
export {ProductList};