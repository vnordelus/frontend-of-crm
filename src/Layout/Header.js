import React from 'react'
import {Navbar, Nav, NavLink} from 'react-bootstrap'
import './Layout.css'

export const Header = () => {
    return (
        <Navbar  collapseOnSelect
          bg="info"
          varient="dark"
          expand="md">
            <Navbar.Brand>
              CRM App
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
             <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="ms-auto" >
                   <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                   <Nav.Link href="/dashboard">Tickets</Nav.Link>
                   <Nav.Link href="/dashboard">Signout</Nav.Link>
               </Nav>
             </Navbar.Collapse>
        </Navbar>
    )
}
export default Header