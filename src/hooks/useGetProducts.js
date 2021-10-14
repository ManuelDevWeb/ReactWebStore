import { useEffect, useState } from "react";
import axios from "axios";

// Hook personalizado para el llamado a la API
const useGetProducts = (API) => {
    // Manejando el estado products, el cual contiene el listado de productos
    const [products, setProducts] = useState([]);

    // Manejando el efecto que tendra este componente, llamado de API sólo una vez
    useEffect(async() => {
        const response = await axios(API);
        setProducts(response.data);
    }, []);

    return products;
}

export { useGetProducts };