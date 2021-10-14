import React, {useState} from 'react';

// Importando estilos
import '@styles/ProductItem.scss';

// Importando imágenes
import imgAdd from '@icons/bt_add_to_cart.svg';

const ProductItem = ({title, price, images}) => {
	// Manejando el estado del carrito de productos
	const [cart, setCart]=useState([]);

	// Función que se ejecuta al darle click al logo add del producto
	const handleClick=()=>{
		setCart([]);
	}

    return (  
        <div className="ProductItem">
			<img src={images[0]} alt={title} />
			<div className="product-info">
				<div>
					<p>${price}</p>
					<p>{title}</p>
				</div>
				<figure onClick={handleClick}>
					<img src={imgAdd} alt="" />
				</figure>
			</div>
		</div>
    );
}
 
export {ProductItem};