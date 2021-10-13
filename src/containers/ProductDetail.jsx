import React from 'react';

// Importando componentes
import {ProductInfo} from '@components/ProductInfo';

// Importando estilos
import '@styles/ProductDetail.scss';

// Importando imágenes
import imgClose from '@icons/icon_close.png';

const ProductDetail = () => {
    return (  
        <aside className="ProductDetail">
			<div className="ProductDetail-close">
				<img src={imgClose} alt="close" />
			</div>
			<ProductInfo />
		</aside>
    );
}
 
export {ProductDetail};