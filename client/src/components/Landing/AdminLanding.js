import { useState } from 'react';
import {
    Navbar,
    NavItem,
    NavbarToggler,
    Collapse,
    NavLink,
    Nav,
    NavbarBrand
} from 'reactstrap';
import FacultyData from '../Faculty/FacultyData.js'
  
function AdminLanding() {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
        <>
        <div style={{
            display: 'block', width: "100%"
        }}>
            <Navbar color="dark" dark expand="md">
                <NavbarBrand href="/">ADMIN</NavbarBrand>
                <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="#">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Login</NavLink>
                        </NavItem>
                        </Nav>
                </Collapse>
            </Navbar>
        </div >
        <FacultyData/>
        </>
    );
}
  
export default AdminLanding;