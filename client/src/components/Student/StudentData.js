import "./StudentData.css";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows} from "../../DummyStudent";
import { useState } from "react";
import { Modal, Button, ModalHeader, ModalBody } from "reactstrap";
import StudentRegister from "../Landing/StudentRegister";

const StudentData = () => {
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
        Student
        <Modal isOpen={modal}>
            <ModalHeader toggle={toggleModal}>Add New Student</ModalHeader>
            <ModalBody><StudentRegister/></ModalBody>
        </Modal>
            <Button outline onClick={toggleModal}>
            <span className='fa fa-pencil'>Add New Student</span>
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

export default StudentData;