import React from 'react';

// Importando estilos
import '@styles/NotFound.scss';

// Importando imágenes
import imgNotFound from '@logos/404Error.gif';

const NotFound = () => {
    return (  
        <div className="containerNotFound">
            <img src={imgNotFound} alt="Not Found" />
        </div>
    );
}
 
export {NotFound};