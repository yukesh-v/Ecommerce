import React, { useState } from 'react'
import '../login/Login.css'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import {toast} from 'react-toastify';
import { BsEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';

const ResetPassword = () => {
  const [password, setPassword] = useState()
  const [hide, sethide] = useState(true)
  const {id,token} = useParams()
  const navigate = useNavigate()

  function forgetsubmit(e) {
    e.preventDefault()
    axios.post(`http://localhost:4000/reset-password/${id}/${token}`, { password })
      .then((result) => {
        if(result.data === "success"){
            navigate("/Login")
            toast.success("successfully changed ",{
              position:"top-center"
            });
        }else{
          toast.info(result.data,{
            position:"top-center"
          });
        }
        
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      <div className='login'>
        <div className='title'><h4>Account</h4></div>
      </div>
        <div className='form text-center w-50'>
          <form onSubmit={forgetsubmit}>
            <h4 className='mb-3 text-center'>Reset Your Password</h4>
            <p className='ps-2'> Enter New password</p>
            <div className='text-center position-relative'>
              <input className="mb-3 w-75" placeholder='Password' type={hide ? "Password" : "text"} onChange={(e) => setPassword(e.target.value)}></input>
              <span className='hide position-absolute' onClick={() => sethide(!hide)}>{hide ? <BsEyeFill /> : <BsFillEyeSlashFill />}</span>
            </div>
            <button className='algin-item-center w-75 p-2 mb-3' id="liveToastBtn">SUBMIT</button><br></br>
            <Link to="/Login" className='mt-3'>Cancel</Link>
          </form>
        </div>
    </>
  )
}

export default ResetPassword