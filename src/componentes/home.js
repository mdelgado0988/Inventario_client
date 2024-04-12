import React from 'react'
import NavBar from './dashboard/navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './dashboard/style.css'

const Home = () => {
    return (
        <Container className='container_nav'>
            <Row className='row_nav'>
                <Col sm={2}>
                    <NavBar></NavBar>
                </Col>
                <Col sm={10}><h3>hola mundo</h3></Col>
            </Row>            
        </Container>
    )
};

export default Home