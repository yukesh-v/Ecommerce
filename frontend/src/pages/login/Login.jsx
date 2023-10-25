import React, { useState } from 'react'
import '../login/Login.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BsEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import {toast} from 'react-toastify';
import { useDispatch } from 'react-redux';
import { login } from '../../features/AuthSlice';
const Login = () => {

  const [forget, setforget] = useState(true);
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [hide, sethide] = useState(true)
  const navigate = useNavigate()
  const dispatch = useDispatch();

  function handlesubmit(e) {
    e.preventDefault()
    axios.post("http://localhost:4000/Login", { email, password })
      .then((result) => {
        if (result.data.email === email) {
          navigate("/")
          dispatch(login(result.data.Firstname));
         
        } else {
          toast.info(result.data,{
            position:"top-center"
          });
        }
      })
      .catch(err => console.log(err))
  }
  function forgetsubmit(e) {
    e.preventDefault()
    axios.post("http://localhost:4000/forget-password", { email })
      .then((result) => {
        toast.info(result.data,{
          position:'top-right',
        });
      })
      .catch(err => toast.info(err,{
        position:'top-right'
      }));
  }


  return (
    <>
      <div className='login'>
        <div className='title'><h4>Account</h4></div>
      </div>
      {forget ?
        <div className='form text-center w-50'>
          <form onSubmit={handlesubmit}>
            <h4 className='mb-4 text-center'>Log In To Your Account</h4>
            <div className='text-center' >
              <input className="mb-3 w-75" placeholder='Email' type='email' autoComplete='on' onChange={(e) => setEmail(e.target.value)}></input>
            </div>
            <div className='text-center position-relative'>
              <input className="mb-3 w-75" placeholder='Password' type={hide ? "Password" : "text"} onChange={(e) => setPassword(e.target.value)}></input>
              <span className='hide position-absolute' onClick={() => sethide(!hide)}>{hide ? <BsEyeFill /> : <BsFillEyeSlashFill />}</span>
            </div>
            <p className='text-start mb-4' onClick={() => { setforget(false) }}><u>Forget Your Password</u></p>
            <button className='algin-item-center w-75 p-2 mb-3'>SIGN IN</button><br></br>
            <Link to="/Register" className='mt-3'>No account yet? Create an account</Link>
          </form>
        </div> :
        <div className='form text-center w-50'>
          <form onSubmit={forgetsubmit}>
            <h4 className='mb-3 text-center'>Forget Password</h4>
            <p className='ps-2'> We will send you an email to reset your password</p>
            <div className='text-center' >
              <input className="mb-3 w-75" placeholder='Email' type='email' onChange={(e) => setEmail(e.target.value)}></input>
            </div>
            <button className='algin-item-center w-75 p-2 mb-3'>SEND</button><br></br>
            <Link to="/Login" onClick={() => { setforget(true) }} className='mt-3'>Cancel</Link>
          </form>
        </div>}
    </>
  )
}

export default Login