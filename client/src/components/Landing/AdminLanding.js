import { useState } from 'react';
import '../StudentDashboard/Home.css'
import Navbar from '../Navbar/Navbar';
import AdminSidebar from '../Faculty/AdminSidebar.js';
import AdminNavbar from '../Faculty/AdminNavbar';
import FacultyData from '../Faculty/FacultyData.js'
  
function AdminLanding() {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
        <>
        <div className="home">
            <AdminSidebar />
        <div className="homeContainer">
            <AdminNavbar />
      </div>
    </div>
        <FacultyData/>
        </>
    );
}
  
export default AdminLanding;