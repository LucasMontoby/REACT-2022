import React from 'react';

const Title = () => {

    const saludo      = "¡Hola Mundo!";
    const placeholder = "Primer nombre";

    return(
        <div>
            <h1>{ saludo }</h1>
            <input type="text" placeholder={ placeholder } />
            <hr />
        </div>
    );

}

export default Title;