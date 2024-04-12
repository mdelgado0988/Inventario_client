import React from 'react'
import { useEffect, useState } from 'react'
import submitGET from '../api/submitGet';

const Usuarios = () => {
    const [usuarios, setUsuarios] = useState();

    useEffect(() => {
        let isMouted = true;
        const controller = new AbortController();

        const getUsuarios = async () => {

            const response = await submitGET('/usuario', {
                signal: controller.signal
            });

            console.log(response.data);
            isMouted && setUsuarios(response.data);

        };

        getUsuarios();

        return () => {
            isMouted = false;
            controller.abort();
        };

    });

    return (
        <article>
            <h2>Usuarios</h2>
            {usuarios?.lenght
                ? (
                    <ul>
                        {usuarios.map((usuario, i) => <li key={i}>{usuario?.username}</li>)}
                    </ul>
                ) : <p> No hay productos </p>
            }
        </article>
    );
};

export default Usuarios;