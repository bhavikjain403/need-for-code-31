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
import TeacherNavbar from '../Faculty/TeacherNavbar';
import TeacherSidebar from '../Faculty/TeacherSidebar';
import StudentData from '../Student/StudentData';

function TeacherLanding() {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
        <>
        <div className="home">
            <TeacherSidebar />
        <div className="homeContainer">
            <TeacherNavbar />
            <StudentData/>
      </div>
    </div>
       </>
    );
}
  
export default TeacherLanding;