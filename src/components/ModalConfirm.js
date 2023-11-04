import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react';
import {deleteUser} from '../service/userService'; 
import { toast } from 'react-toastify';
 
const ModalConfirm = (props) => {
    const {show, handleClose, dataUserDelete, handleDeleteUserFormModal} = props;   
  
const confirmDelete = async () => {
    let res = await deleteUser(dataUserDelete.id); 
    console.log(">>> Check res delete: ", res);  
    if(res && res.status === 204) {
      toast.success("Delete User Success") 
      handleClose(); 
      handleDeleteUserFormModal(dataUserDelete); 
    } else {
      toast.error("Delete User ")
    }
}
 
    return(
        <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete User</Modal.Title> 
        </Modal.Header> 
        <Modal.Body>
              <div className='body-add-new'>
                  Delete The User ${dataUserDelete.email}?  
              </div>  
            </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => confirmDelete()}>    
            Confirm   
          </Button>
        </Modal.Footer>
      </Modal>
        </>
    )
}
 
export default ModalConfirm;   




