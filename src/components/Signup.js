import SignupForm from './SignupForm';
import { useState } from 'react';
import Axios from 'axios';
import {useNavigate} from "react-router-dom";

function SignUp(){
    const[arr,setArr]=useState([]);
    const navigate= useNavigate();

    //Declaring a argument function
    const getState=(childData)=>{
        setArr(childData);
    }

    const handleSubmit = () => {
        const data={name: arr[0],email:arr[1],password:arr[2]};
        Axios.post("http://localhost:4000/auth/register",data)
        .then((res)=>{
            if (res.status===201|200){
                alert("Record Added bruh");
                navigate("/login");
            }
            else
                Promise.reject();
        })
        .catch((err)=>alert(err));
    }

    return(
        <form onSubmit={handleSubmit}>
            <SignupForm getState={getState}/>
        </form>
    )
}

export default SignUp;