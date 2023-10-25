import React, { useState } from 'react'
import "./Register.css"
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'
import {BsEyeFill,BsFillEyeSlashFill} from 'react-icons/bs';
import {toast} from 'react-toastify';

const Register = () => {

    const [Firstname, setFirstname] = useState()
    const [Lastname, setLastname] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [hide,sethide] = useState(true)
    const navigate = useNavigate()

function handlesubmit(e){
    e.preventDefault()
     axios.post("http://localhost:4000/user",{Firstname,Lastname,email,password})
    .then((result) => {
      if(result.data === "success"){
        navigate("/Login")
        toast.success("successfully Register",{
            position:"top-center"
        });
      }else{
        toast.info(result.data,{
            position:"top-center"
        });
      }
})
    .catch(err=> console.log(err))
}
    
   return (

        <>
            <div className='login '>
                <div className='title'><h4>Create Account</h4></div>
            </div>
            <div className='form text-center w-50'>
                <form onSubmit={handlesubmit}>
                    <h4 className='mb-4 text-center'>Create Account</h4>
                    <div className='text-center' >
                        <input className="mb-4 w-75 " placeholder='First Name' type='text' autoComplete='on' onChange={(e) => setFirstname(e.target.value)}></input>
                    </div>
                    <div className='text-center' >
                        <input className="mb-4 w-75" placeholder='Last Name' type='text' autoComplete='on' onChange={(e) => setLastname(e.target.value)}></input>
                    </div>
                    <div className='text-center' >
                        <input className="mb-4 w-75" placeholder='Email' type='email' onChange={(e) => setEmail(e.target.value)}></input>
                    </div>
                    <div className='text-center position-relative'>
                        <input className="mb-4 w-75" placeholder='password' type={hide?"Password":"text"} onChange={(e) => setPassword(e.target.value)}></input>
                        <span className='hide position-absolute' onClick={()=> sethide(!hide)}>{hide?<BsEyeFill />:<BsFillEyeSlashFill />}</span>
                    </div>
                    <button className='algin-item-center w-75 p-2 mb-3'>CREATE</button><br></br>
                    <Link to="/" className='mt-3'>Return To Home</Link>
                </form>
            </div>
        </>
    )
}

export default Register