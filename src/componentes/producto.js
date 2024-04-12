import React from 'react'
import { useState } from 'react'

const Productos = () => {
    const [productos, setProductos] = useState();

    return (
        <article>
            <h2>Productos</h2>
            {productos?.lenght
                ? (
                    <ul>
                        {productos.map((producto, i) => <li key={i}>{producto?.descripcion}</li>)}
                    </ul>
                ) : <p> No hay productos </p>
            }
        </article>
    );
};

export default Productos;