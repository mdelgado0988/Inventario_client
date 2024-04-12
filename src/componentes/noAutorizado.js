import { useNavigate } from 'react-router-dom'
import React from 'react'
import Button from 'react-bootstrap/Button'

const NoAutorizado = () => {

    const navigate = useNavigate()
    const goBack = navigate(-1);

    return (
        <section>
            <h1>No Autorizado</h1>
            <br />
            <p>Ud no tiene acceso a este módulo, contacte a su administrador</p>
            <div className='flexGrow'>
                <Button onClick={goBack}>Volver</Button>
            </div>
        </section>
    );

};

export default NoAutorizado;