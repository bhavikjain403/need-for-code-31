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
  
function StudentLanding() {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
        <div style={{
            display: 'block', width: "100%"
        }}>
            <Navbar color="dark" dark expand="md">
                <NavbarBrand href="/">STUDENT</NavbarBrand>
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
    );
}
  
export default StudentLanding;