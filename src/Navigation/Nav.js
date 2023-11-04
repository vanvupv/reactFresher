import { Link } from "react-router-dom"; 
import "../App.scss";  

 
const Nav = () => { 

    return (

    <div className="topnav">
        <Link className="active" to ="/">Home</Link>
        <Link to ="/todos">Todo List</Link> 
        <Link to ="/users">User</Link> 
        {/* <Link to ="/about">About</Link> */}
    </div>  
    )
}
  
export default Nav; 