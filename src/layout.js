import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './componentes/dashboard/navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './componentes/dashboard/style.css'

const layout = () => {
    return (
        <main className="App">
            <Container className='container_nav'>
                <Row className='row_nav'>
                    <Col sm={2}>
                        <NavBar></NavBar>
                    </Col>
                    <Col sm={10}>
                        <Outlet />
                    </Col>
                </Row>            
            </Container>            
        </main>
    );
};

export default layout;