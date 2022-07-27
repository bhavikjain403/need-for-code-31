import "./StudentData.css";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect } from "react";
import { userColumns } from "../../DummyStudent";
import { useState } from "react";

const StudentData = () => {
  const [data, setData] = useState({});
  useEffect( ()=>{
    const a= async ()=>{
      try{
        const response = await fetch("http://localhost:8080/teacher/getAllStu", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token':localStorage.getItem('auth-token')
            },
        });
        console.log(response)
        const json = await response.json()
        console.log(json);
        setData(json)
    }catch(error){
        console.log(error)
    }
    }
    a()
  },[])

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Student
      </div>
      <DataGrid
        className="datagrid"
        getRowId={(row) => row._id}
        rows={data}
        columns={userColumns}
        pageSize={9}
        rowsPerPageOptions={[9]}
      />
    </div>
  );
};

export default StudentData;