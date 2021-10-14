import React, { useContext } from "react";

// Importando context
import { AppContext } from "@context/AppContext";

// Importando componentes
import { OrderItem } from "@components/OrderItem";

// Importando estilos
import "@styles/MyOrder.scss";

// Importando imágenes
import imgArrow from "@icons/flechita.svg";

const MyOrder = () => {
  // Destructurando elementos a utilizar del context
  const {
    state: { cart },
  } = useContext(AppContext);

  // Función para calcular el valor total a pagar
  const sumTotal=()=>{
    const reducer= (acumulator, currentProduct)=>(
      acumulator+currentProduct.price
    );

    const sum=cart.reduce(reducer,0);

    return sum;
  }

  return (
    <aside className="MyOrder">
      <div className="title-container">
        <img src={imgArrow} alt="arrow" />
        <p className="title">My order</p>
      </div>
      <div className="my-order-content">
        {
          // Iterando sobre los elementos que hay en el cart del initialState
          cart.map((product) => (
            <OrderItem key={`orderItem-${product.id}`} product={product} />
          ))
        }
        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>${sumTotal()}</p>
        </div>
        <button className="primary-button">Checkout</button>
      </div>
    </aside>
  );
};

export { MyOrder };
