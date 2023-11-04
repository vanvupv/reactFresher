import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
// import axios from 'axios'; 
import { fetchAllUser } from '../service/userService';
import ReactPaginate from 'react-paginate'; 
import ModalAddNew from './ModalAddNew';
import ModalEditUser from './ModalEditUsers';
import ModalConfirm from './ModalConfirm';
import _, { map } from 'lodash'; 
import {CSVLink, CSVDownload} from 'react-csv'; 

const TableUsers = (props) => { 

    const [listusers, setListUsers] = useState([]); 
    // Get - Set Total User
    const [TotalUsers, setTotalUsers] = useState(0); 
    // Get - Set Total User
    const [TotalPages, setTotalPages] = useState(0);  

    // 
    const [isShowModalAddNew, setisShowModalAddNew] = useState(false); 

    // 
    const [isShowModalEdit, setisShowModalEdit] = useState(false)

    // 
    const [dataUserEdit, setdataUserEdit] = useState({})

    //
    const [isShowModalADelete, setisShowModalDelete] = useState(false); 
    const [dataUserDelete, setdataUserDelete] = useState({}) 


    //
    const [dataExport, setdataExport] = useState([]); 

    //
    const handleClose = () => {
      setisShowModalAddNew(false);  
      setisShowModalEdit(false); 
      setisShowModalDelete(false); 
    }

    //Update listUser
    const handleUpdateUser = (user) => { 
        setListUsers([user, ...listusers]); 
    }
    
    // Update User 
    const handleEditUserFromModal = (user) => {
        // let cloneListUsers = [...listusers]; 
        let cloneListUsers = _.cloneDeep(listusers); 
        let index = listusers.findIndex(item => item.id === user.id)
        cloneListUsers[index].first_name = user.first_name; 
        setListUsers(cloneListUsers); 
        
        // console.log(listusers, cloneListUsers); 
        // console.log(">>> Check User modal: ",user); 
        // console.log(">>> index: ", index);
    }   
    // 
    useEffect(() => {
        // Get API 
        getUsers(1)  
        
    }, [])

    const handlePageClick = (event) => { 
        console.log("Check event lib: ", event) 
        getUsers(+event.selected + 1)   
    }
 
    const handleEditUser = (user) => {
         console.log(user); 
         setdataUserEdit(user); 
         setisShowModalEdit(true); 
    }

    const getUsers = async (page) => {
        // Call API 
        let res = await fetchAllUser(page);  

        if(res && res.data && res.data.data) {
            setListUsers(res.data.data) 
            setTotalUsers(res.data.total) 
            setTotalPages(res.data.total_pages)  
        } 
        console.log(">>> Check res: ", res) 
        console.log(">>> Check Total User: ", res.data.total) 
    }

    const handleDeleteUser = (user) => {
        setisShowModalDelete(true);   
        // console.log(">>> Check user delete: ", user); 
        setdataUserDelete(user); 
    }

    const handleDeleteUserFormModal = (user) => { 
        // let cloneListUsers = [...listusers]; 
        let cloneListUsers = _.cloneDeep(listusers); 
        cloneListUsers = cloneListUsers.filter(item => item.id !== user.id); 
        setListUsers(cloneListUsers); 
    } 

    // Check data listUser
    // console.log(">>> Check check list user",listusers)  

    // Use react-csv
    // const csvData = [
    //     ["firstname", "lastname", "email"],
    //     ["Ahmed", "Tomi", "ah@smthing.co.com"],
    //     ["Raed", "Labes", "rl@smthing.co.com"],
    //     ["Yezzi", "Min l3b", "ymin@cocococo.com"]
    //   ]; 
    
      const getUsersExport = (event, done) => {
        let result = []; 
        if(listusers && listusers.length > 0) {
            result.push(["id","Email","First name", "Last name"]); 
            listusers.map((item, index) => {
                let arr = [];
                arr[0] = item.id;
                arr[1] = item.email;
                arr[2] = item.first_name;
                arr[3] = item.last_name;
                // arr[2] = item.first_name;
                result.push(arr); 
            })
            setdataExport(result); 
            done(); 
        }
      }

    return(
    <> 
        <div>
          List User: 
          <div>
            <button className='btn btn-success'
             onClick={() => setisShowModalAddNew(true)} 
            >+Add New User</button>
          </div>
          <div>
            <label 
                htmlFor='test'
                className='btn btn-warning'
                >+ Import CSV</label> 
            <input 
                id='test'
                type='file' 
                hidden></input>  

            {/* <button className='btn btn-warning'>+Import CSV</button>  */} 
            {/* <button className='btn btn-primary'>-Export CSV</button>  */} 
             
            <CSVLink  
            filename={"user.csv"} 
            className='btn btn-primary'
            asyncOnClick={true}
            onClick={getUsersExport}   
            // target='_blank'
            data={dataExport}
            >Export CSV</CSVLink>  
            {/* // or  */} 
            {/* <CSVDownload data={csvData} target="_blank" />;   */}
          </div>
        </div>
    <Table striped bordered hover>
        <thead>
            <tr>
            <th>ID</th>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th> 
            </tr>
        </thead> 
        <tbody> 
            {listusers && listusers.length > 0 &&
            listusers.map((item, index) => {
                return (
                    <tr key={`users-${index}`}>
                        <td>{item.id}</td>
                        <td>{item.email}</td>
                        <td>{item.first_name}</td>
                        <td>{item.last_name}</td> 
                        <td>
                            <button 
                            className='btn btn-warning' 
                            onClick={() => {handleEditUser(item)}} 
                            >Edit</button>  
                            <button 
                            onClick={() => {handleDeleteUser(item)}}   
                            className='btn btn-danger'>
                            Delete</button>
                        </td> 
                    </tr> 
                )
            })
            }   
        </tbody>  
    </Table>
    <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={TotalPages} 
        previousLabel="< previous"
        renderOnZeroPageCount={null}

        pageClassName='page-item'
        pageLinkClassName='page-link'
        previousLinkClassName='page-link'
        nextLinkClassName='page-link'
        breakClassName='page-item'
        breakLinkClassName='page-link'
        containerClassName='pagination'
        activeClassName='active' 
    />
    <ModalAddNew 
       show = {isShowModalAddNew} 
       handleClose = {handleClose}  
       handleUpdateUser = {handleUpdateUser} 
    />  
    <ModalEditUser 
    show={isShowModalEdit} 
    handleClose = {handleClose}  
    dataUserEdit={dataUserEdit} 
    handleEditUserFromModal = {handleEditUserFromModal}   
    /> 
    <ModalConfirm 
    show={isShowModalADelete}
    handleClose={handleClose} 
    dataUserDelete = {dataUserDelete} 
    handleDeleteUserFormModal = {handleDeleteUserFormModal} 
    />
    </> 
    ) 
}

export default TableUsers;  