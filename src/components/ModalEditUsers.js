import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react';
import { useEffect, useState } from 'react';
import {postCreateUser, pustUpdateUser} from '../service/userService'; 
import {toast } from 'react-toastify';


const ModalEditUser = (props) => {
    const {show, handleClose, dataUserEdit, handleEditUserFromModal} = props;  
    const [name, setName] = useState(""); 
    const [job, setJob] = useState(""); 

// console.log(">>> Check props: ", dataUserEdit); 

const handleEditUser = async (id) => {
  // console.log(">>> check name: ", name); 
  // console.log(">>> Check job: ", job); 
  let res = await pustUpdateUser(id, name, job); 
  // console.log(">>> Check res: ", res); 
  // console.log(">>> Check res.data: ", res.data);   
  // console.log(">>> Chech res.data.updateAt: ", res.data.updatedAt); 
  if(res && res.data && res.data.updatedAt){ 
    // success 
    // console.log(">>> Handle User : ")
    handleEditUserFromModal({
      first_name: name,
      id:dataUserEdit.id  
    })
  
    handleClose();
    toast.success("Update Success User");  

  } 
}

useEffect(()=> {
  if(show){
    setName(dataUserEdit.first_name); 
  }

},[dataUserEdit]) 

    return(
        <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header> 
        <Modal.Body>
  <div className="mb-3">
    <label className="form-label">Name</label> 
    <input 
        type="text" 
        className="form-control" 
        value={name}
        onChange={(event) => setName(event.target.value)} 
        /> 
  </div>
  <div className="mb-3">
    <label className="form-label">Job</label>
    <input 
        type="text" 
        className="form-control" 
        value={job} 
        onChange={(event) => setJob(event.target.value)} 
        />  
  </div>

            </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleEditUser(dataUserEdit.id)}>   
            Confirm 
          </Button>
        </Modal.Footer>
      </Modal>
        </>
    )
}
 
export default ModalEditUser;  




