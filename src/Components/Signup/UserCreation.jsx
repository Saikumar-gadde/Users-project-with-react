import React, { useState, useEffect } from 'react';

import './UserCreation.css'
import { toast } from 'react-toastify';

const UserCreation = ({createUser }) => {


    const [userInfo, setUsreInfo] = useState({
        firstName: '',
        lastName : '',
        email : '',
        mobile : '',
        address: ''
    });

    const changeHandler = (e) => {
        const { value, name } = e.target;

        setUsreInfo({
            ...userInfo,
            [name] : value
        })
    }

    const clickHandler =(e) => {
        e.preventDefault();

        const {firstName, lastName, email, mobile, address} = userInfo
        
        let checking = [firstName,lastName ,email ,mobile, address]

        if(checking.includes('')){
            return toast.error("Please fill the all the inputs...")
        } else {
            createUser(userInfo, setUsreInfo);

        }

    }
   

  return (
    <div>
        <form className='text-center w-50 m-auto'>
            <input onChange={changeHandler} name='firstName'  className='form-control user-creation' type="text" placeholder='First name' />
            <input onChange={changeHandler} name='lastName'  className='form-control user-creation' type="text" placeholder='Last name' />
            <input onChange={changeHandler} name='email'  className='form-control user-creation' type="text" placeholder='Email' />
            <input onChange={changeHandler} name='mobile' className='form-control user-creation' type="text" placeholder='Mobile' />
            <input onChange={changeHandler} name='address' className='form-control user-creation' type="text" placeholder='Address' />
            <input onChange={changeHandler} name='password' className='form-control user-creation' type="password" placeholder='Password' />
            <button onClick={clickHandler} className='btn btn-success w-50' >Create an account</button>
        </form>
    </div>
  )
}

export default UserCreation;