import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom";
import { settoken } from "../slices/loginslice";


const Login = ()=>{
    const navigate = useNavigate();
    const [userid,setUserid] = useState();
    const [pass,setPass] = useState();
    const Baseurl ="https://vg4op6mne2.execute-api.ap-south-1.amazonaws.com/dev/"
    const dispatch = useDispatch();

    const handlelogin=async(e)=>{
        console.log(userid,pass);
        try{
            let response = await axios.post(
                `${Baseurl}api/v1/admin/login`,
                {
                    
                        "email": "admin@gmail.com",
                        "password": "admin@1234",
                    
                }
              );
              console.log(response.data.accessToken,"hua");
              response = response.data.accessToken;
              dispatch(settoken(response));
              navigate("/dashboard");

        }catch(e){
            console.log(e);
        }
    }


    return (
        <>
            <div className="login">
                <input type="text" placeholder="User ID" value={userid} onChange={(e)=>setUserid(e.target.value)}/>
                <input type="text" placeholder="Password" value={pass} onChange={(e)=>setPass(e.target.value)}/>
                <button onClick={(e)=>handlelogin(e)}>Sign In</button>
                {/* <button onClick={()=>navigate("/dashboard")}>Sign In</button> */}
            </div>
        </>
    )
}

export default Login;