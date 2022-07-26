import "./FacultyData.css";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows} from "../../DummyTeacher";
import { useEffect, useState, useContext } from "react";
import teacher from "../../contexts/Teacher/TeacherContext";
import { Modal, Button, ModalHeader, ModalBody } from "reactstrap";
import TeacherRegister from "../Landing/TeacherRegister";

const FacultyData = () => {
  const [data, setData] = useState(userRows);
  const te=useContext(teacher)
  useEffect( ()=>{
    const a= async ()=>{
      try{
        const response = await fetch("http://localhost:8080/admin/getAllTeach", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token':localStorage.getItem('auth-token')
            },
        });
        const json = await response.json()
        te.setTe(json)
        console.log(json);
    }catch(error){
        console.log(error)
    }
    }
    a()
  },[])

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Professor
      </div>
      <DataGrid
        className="datagrid"
        rows={te.te}
        columns={userColumns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default FacultyData;