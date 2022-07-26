import "./FacultyData.css";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows} from "../../datatablesource";
import { useState } from "react";
import { Modal, Button, ModalHeader, ModalBody } from "reactstrap";
import TeacherRegister from "../Landing/TeacherRegister";

const FacultyData = () => {
  const [data, setData] = useState(userRows);
  const [modal, setModal] = useState(false);

  const toggleModal=()=>{
    setModal(!modal)
  }

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Remove
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Professor
        <Modal isOpen={modal}>
            <ModalHeader toggle={toggleModal}>Add New Professor</ModalHeader>
            <ModalBody><TeacherRegister/></ModalBody>
        </Modal>
            <Button outline onClick={toggleModal}>
            <span className='fa fa-pencil'>Add New Professor</span>
            </Button>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default FacultyData;