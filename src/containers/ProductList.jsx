import React from "react";

// Importando componentes
import { ProductItem } from "@components/ProductItem";

// Importando custom hooks
import { useGetProducts } from "@hooks/useGetProducts";

// Importando estilos
import "@styles/ProductList.scss";

const API = "http://api.escuelajs.co/api/v1/products";

const ProductList = () => {
  // Llamando el custom hook useGetProducts
  const products=useGetProducts(API);

  return (
    <section className="main-container">
      <div className="ProductList">
		  {
			  // Iterando sobre los productos
			  products.map((product)=>(
				<ProductItem key={product.id} product={product}/>
			  ))
		  }
      </div>
    </section>
  );
};

export { ProductList };
