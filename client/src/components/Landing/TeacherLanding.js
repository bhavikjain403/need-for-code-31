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
import { Link } from 'react-router-dom';
import StudentData from '../Student/StudentData';

function TeacherLanding() {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
        <>
        <div style={{
            display: 'block', width: "100%"
        }}>
            <Navbar color="dark" dark expand="md">
                <NavbarBrand href="/">TEACHER</NavbarBrand>
                <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <Link className='nav-link' to="/calendar">Calendar</Link>
                        </NavItem>
                        </Nav>
                </Collapse>
            </Navbar>
        </div >
        <StudentData/>
        </>
    );
}
  
export default TeacherLanding;