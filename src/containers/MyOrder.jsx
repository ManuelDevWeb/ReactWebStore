import React from 'react';

// Importando componentes
import {OrderItem} from '@components/OrderItem';

// Importando estilos
import '@styles/MyOrder.scss';

// Importando imágenes
import imgArrow from '@icons/flechita.svg';

const MyOrder = () => {
    return (  
        <aside className="MyOrder">
			<div className="title-container">
				<img src={imgArrow} alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				<OrderItem />
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>$560.00</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
    );
}
 
export {MyOrder};