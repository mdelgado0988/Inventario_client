import React from 'react'
import { useEffect, useState } from 'react'
import useAxiosPrivate from '../hooks/useAxiosPrivate';

const Usuarios = () => {
    const [usuarios, setUsuarios] = useState();

    const axios = useAxiosPrivate();

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const getUsuarios = async () => {
            try{
            
                const response = await axios.get('/usuario', {
                    signal: controller.signal
                });

                //console.log(response.data.data);
                isMounted && setUsuarios(response.data.data);

            }catch(error){
                console.log(`Error leyendo usuarios: ${error}`);
            }

        };

        getUsuarios();

        return () => {
            isMounted = false;
            controller.abort();
        };

    },[]);

    console.log(usuarios);

    return (
        <article>
            <h2>Usuarios</h2>
            {usuarios?.length
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