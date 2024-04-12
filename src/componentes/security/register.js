import React, { useRef, useState, useEffect } from 'react'
import './style.css'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import * as formik from 'formik'
import * as yup from 'yup'
import submitPOST from '../../api/submit'

function Register(){  

    const { Formik } = formik;

    const schema = yup.object().shape({
        usuario: yup.string().required(),
        clave: yup.string().required(),
        claveConfirma: yup.string().required(),
        activo: yup.bool(),
    });

    const submit = async (e) => {
        await submitPOST(e, '/usuario',
            JSON.stringify( { username: e.usuario, clave: e.clave }));
    };

    return (
        <Formik
            validationSchema={schema}
            onSubmit={submit}
            initialValues={{
                usuario: '',
                clave: '',
                claveConfirma: '',
                activo: false,
            }}
        >
            {({ handleSubmit, handleChange, values, touched, errors }) => (
                <div className='login template d-flex justify-content-center align-items-center 100-w vh-100 bg-primary'>                        
                    <Form noValidate onSubmit={handleSubmit} className='form_container p-5 rounded bg-white'>
                        <h3 className='text-center'>Nuevo usuario</h3>
                        <Form.Group className='mb3' controlId='FormikUsuario'>
                            <Form.Label>Usuario</Form.Label>
                            <Form.Control type='text' placeholder='Nombre de usuario' name="usuario"
                                isInvalid={!!errors.clave} onChange={handleChange} value={values.usuario} />
                            <Form.Control.Feedback type='invalid'>Campo requerido</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className='mb3' controlId='FormikClave'>
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type='password' placeholder='Contraseña' name="clave"
                                isInvalid={!!errors.clave} onChange={handleChange} value={values.clave} />
                            <Form.Control.Feedback type='invalid'>Campo requerido</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className='mb3' controlId='FormikClaveConfirma'>
                            <Form.Label>Confirmar Contraseña</Form.Label>
                            <Form.Control type='password' placeholder='Contraseña' name="claveConfirma"
                                isInvalid={!!errors.claveConfirma} onChange={handleChange} value={values.claveConfirma} />
                            <Form.Control.Feedback type='invalid'>Campo requerido</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className='mb3' controlId='FormikActivo'>
                            <Form.Label>¿Activo?</Form.Label>
                            <Form.Check name="activo" onChange={handleChange} value={values.claveConfirma} />
                        </Form.Group>
                        <Form.Group>
                            <div className='d-grid'>
                                <Button type='submit' variant="primary">Registrarse</Button>
                            </div>
                        </Form.Group>
                    </Form>        
                </div>
            )}            
        </Formik>        
    )
}

export default Register