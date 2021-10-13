import React, {useState} from 'react';

// Importando estilos
import '@styles/ProductItem.scss';

// Importando imágenes
import imgAdd from '@icons/bt_add_to_cart.svg';

const ProductItem = () => {
	// Maneando el estado del carrito de productos
	const [cart, setCart]=useState([]);

	// Función que se ejecuta al darle click al logo add del producto
	const handleClick=()=>{
		setCart([]);
	}

    return (  
        <div className="ProductItem">
			<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
			<div className="product-info">
				<div>
					<p>$120,00</p>
					<p>Bike</p>
				</div>
				<figure onClick={handleClick}>
					<img src={imgAdd} alt="" />
				</figure>
			</div>
		</div>
    );
}
 
export {ProductItem};