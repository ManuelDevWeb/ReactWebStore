import { useState } from 'react';

const initialState = {
    cart: [],
}

// Hook personalizado con las funcionalidades de la aplicación
const useInitialState = () => {
    // Manejando el estado del initialState
    const [state, setState] = useState(initialState);

    // Función para agregar productos al carro
    const addToCart = (payload) => {
        setState({
            // Conservando la información que hay en initialState
            ...state,
            // Conservando la información que hay en el cart del initialState y agregando el nuevo producto
            cart: [...state.cart, payload]
        })
    }

    return {
        state,
        addToCart
    }
}

export { useInitialState };