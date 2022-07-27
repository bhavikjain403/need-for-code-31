import "./FacultyData.css";
import { DataGrid } from "@mui/x-data-grid";
import { ColValues, userRows} from "./ColValues";
import { useEffect, useState, useContext } from "react";

const Table = () => {
  const [data, setData] = useState({});
  useEffect( ()=>{
    const a= async ()=>{
      try{
        const response = await fetch("http://localhost:8080/student/getMarks", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token':localStorage.getItem('auth-token')
            },
        });
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
        Marks
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

export default Table;