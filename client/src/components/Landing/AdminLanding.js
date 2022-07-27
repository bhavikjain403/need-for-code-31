import '../StudentDashboard/Home.css'
import Navbar from '../Navbar/Navbar';
import AdminSidebar from '../Faculty/AdminSidebar.js';
import AdminNavbar from '../Faculty/AdminNavbar';
import FacultyData from '../Faculty/FacultyData.js'
  
function AdminLanding() {
  
    return (
        <>
        <div className="home">
            <AdminSidebar />
        <div className="homeContainer">
            <AdminNavbar />
      </div>
    </div>
        </>
    );
}
  
export default AdminLanding;