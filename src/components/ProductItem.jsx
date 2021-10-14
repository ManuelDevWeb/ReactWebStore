import React, { useContext} from 'react';

// Importando context
import {AppContext} from '@context/AppContext';

// Importando estilos
import '@styles/ProductItem.scss';

// Importando imágenes
import imgAdd from '@icons/bt_add_to_cart.svg';

const ProductItem = ({product}) => {
	const {title, price, images}=product;

	// Destructurando elementos a utilizar del context
	const {addToCart}=useContext(AppContext);

	// Función envia el producto a la función addToCart al darle click al logo add del producto
	const handleClick=(item)=>{
		addToCart(item)
	}

    return (  
        <div className="ProductItem">
			<img src={images[0]} alt={title} />
			<div className="product-info">
				<div>
					<p>${price}</p>
					<p>{title}</p>
				</div>
				<figure onClick={()=>handleClick(product)}>
					<img src={imgAdd} alt="" />
				</figure>
			</div>
		</div>
    );
}
 
export {ProductItem};