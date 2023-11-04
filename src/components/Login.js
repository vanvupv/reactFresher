import { useState } from "react"; 
import { flatMap } from "lodash";
import { loginApi } from "../service/userService";
import { toast } from "react-toastify";
import {
    BrowserRouter as Router, 
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
  
const Login = () => {
    // const navigate = userNavigate(); 

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isShowpassword, setisShowpassword] = useState(false);  
    const [loadingApi, setLoadingApi] = useState(false); 
    const [checkLogin, setCheckLogin] = useState(false); 

    const handleLogin = async () => {
        // console.log(">>> Check Click login")
        if(!email || !password){
            toast.error("Email/Password is required") 
            return; 
        }
        setLoadingApi(true); 
        let res = await loginApi(email, password); 
        // let res = await loginApi("eve.holt@reqres.in", password); 
        console.log(">>> Check res Login: ", res); 
        if(res && res.data && res.data.token){
            toast.success("Login Success!");  
            localStorage.setItem("token", res.data.token)
            setCheckLogin(true); 
        } else {
            // error
            if(res && res.status === 400){
                toast.error(res.data.error); 
            }
        }
        setLoadingApi(false); 

    } 

    return (<>
        <div className="login-container col-4">
            <div className="title">Log in</div>
            <div className="text">Email or Username</div>
            <input 
                type="text" 
                placeholder="Email or Username..." 
                value={email}
                onChange={(event) => setEmail(event.target.value)} 
                />
            <div>
            <input 
                type={isShowpassword === false ? "password" : "text"} 
                placeholder="Password..." 
                value={password}
                onChange={(event) => setPassword(event.target.value)}  
                /> 
            <div 
                className={isShowpassword === false ? "btn btn-warning" : "btn btn-danger"}  
                onClick={() => setisShowpassword(!isShowpassword) }
                >o</div> 
            </div>

            {loadingApi &&
            <div class="spinner-border" role="status"> 
                <span class="visually-hidden">Loading...</span>
            </div> } 
             
            <button 
                className={email && password ? "btn btn-primary" : ""}
                disabled={email && password ? false : true} 
                onClick={() => handleLogin()}
            >Login</button>  
            {checkLogin &&  <Redirect to="/" />} 
             
            <div className="btn btn-success"> 
                Go Back 
            </div>
        </div> 

    </>)
}

export default Login; 

