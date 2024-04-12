import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './style.css'
import * as formik from 'formik'
import * as yup from 'yup'
import submitPOST from '../../api/submit'
import useAuth from '../../hooks/useAuth'

function Login(){  

    const { setAuth } = useAuth();

    const Navigate = useNavigate();
    const Location = useLocation();
    const from = Location.state?.from?.pathname || '/';
    const { Formik } = formik;

    const schema = yup.object().shape({
        usuario: yup.string().required(),
        clave: yup.string().required(),
    }); 

    const submit = async (e) => {
        const response = await submitPOST(e, '/usuario/login',
        JSON.stringify( { username: e.usuario, clave: e.clave }));

        const token = response?.data?.data?.accessToken;
        const username = response?.data?.data?.username;
        const uniqueid = response?.data?.data?.uniqueid;

        // console.log(token);
        // console.log(username);
        // console.log(uniqueid);

        setAuth({ username, uniqueid, token });
        Navigate(from, { replace: true });

    };

    return (
        <Formik
            validationSchema={schema}
            onSubmit={submit}
            initialValues={{
                usuario: '',
                clave: '',
            }}
        >
            {({ handleSubmit, handleChange, values, touched, errors }) => (
                <div className='login template d-flex justify-content-center align-items-center 100-w vh-100 bg-primary'>                        
                    <Form noValidate onSubmit={handleSubmit} className='form_container p-5 rounded bg-white'>
                        <h3 className='text-center'>Iniciar sesión</h3>
                        <Form.Group className='mb3' controlId='FormikUsuario'>
                            <Form.Label>Usuario</Form.Label>
                            <Form.Control type='text' placeholder='Nombre de usuario' name="usuario"
                                isInvalid={!!errors.clave} onChange={handleChange} value={values.usuario} />
                            <Form.Control.Feedback type='invalid'>Campo requerido</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className='mb3' controlId='FormikClave'>
                            <Form.Label>Usuario</Form.Label>
                            <Form.Control type='password' placeholder='Contraseña' name="clave"
                                isInvalid={!!errors.clave} onChange={handleChange} value={values.clave} />
                            <Form.Control.Feedback type='invalid'>Campo requerido</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <div className='d-grid'>
                                <Button type='submit' variant="primary">Iniciar sesión</Button>
                            </div>
                        </Form.Group>
                    </Form>        
                </div>
            )}            
        </Formik>        
    )
}

export default Login