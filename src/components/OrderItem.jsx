import React from 'react';

// Importando estilos
import '@styles/OrderItem.scss';

// Importando imágenes
import imgClose from '@icons/icon_close.png';

const OrderItem = () => {
    return (  
        <div className="OrderItem">
			<figure>
				<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike" />
			</figure>
			<p>Bike</p>
			<p>$30,00</p>
			<img src={imgClose} alt="close" />
		</div>
    );
}
 
export {OrderItem};