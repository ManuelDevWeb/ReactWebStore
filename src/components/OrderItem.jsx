import React, {useContext} from 'react';

// Importando context
import {AppContext} from '@context/AppContext';

// Importando estilos
import '@styles/OrderItem.scss';

// Importando imágenes
import imgClose from '@icons/icon_close.png';

const OrderItem = ({product}) => {
	const {title, price, images}=product;

	// Destructurando elementos a utilizar del context
	const {removeFromCart}=useContext(AppContext);

	// Función para eliminar productos de la orden cuando demos click en el icono de la X
	const handleRemove=(product)=>{
		removeFromCart(product);
	}

    return (  
        <div className="OrderItem">
			<figure>
				<img src={images[0]} alt={title} />
			</figure>
			<p>{title}</p>
			<p>${price}</p>
			<img src={imgClose} alt="close" onClick={()=>handleRemove(product)} />
		</div>
    );
}
 
export {OrderItem};