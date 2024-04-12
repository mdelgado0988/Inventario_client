import Nav from 'react-bootstrap/Nav'
import React from 'react'

function NavBar() {
    return (
        <Nav defaultActiveKey="home" className='flex-column text-align: left'>
            <Nav.Link href="/producto">Productos</Nav.Link>
            <Nav.Link href="/compra">Compras</Nav.Link>
            <Nav.Link href="/empleado">Empleados</Nav.Link>
            <Nav.Link href="/mesa">Mesas</Nav.Link>
            <Nav.Link href="/register">Nuevo Usuario</Nav.Link>
            <Nav.Link href="/usuario">Usuarios</Nav.Link>
        </Nav>
    )
}

export default NavBar