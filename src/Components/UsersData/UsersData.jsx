/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from 'react';

import './Users.css';

import { CgProfile } from "react-icons/cg";

const UsersData = ({ users, deleteUser, profilePicUploader }) => {



    const deleteUserHandler = (id) => {
        deleteUser(id);
    }

    const imageUploader = (e, id) => {
        const image = e.target.files[0];
        profilePicUploader(id, image)
    }



  return (
    <div className='grid-container' >
        { users.map((each, i) => {
            const {firstName, lastName,mobile,address, email, profilePic, _id  } = each
            return (
                <div key={i} className='d-flex justify-content-evenly align-items-center  profile-conatainer' >
                    <div>
                    {profilePic ?  <img className={profilePic ? 'profile' : '' }  src={profilePic} alt="pic" /> : <CgProfile size={250} />}
                    </div>
                    <div>
                        <h2>{firstName + lastName}</h2>
                        <h4>Phone: {mobile}</h4>
                        <h4>Email : {email}</h4>
                        <h6>Address : {address}</h6>
                        <input onChange={(e) => imageUploader(e, _id)} type="file" className='form-control' />
                        <div className='d-flex justify-content-between' >
                            <button className=' m-2 btn btn-warning' >Update</button>
                            <button onClick={() => deleteUserHandler(_id)} className=' m-2 btn btn-danger' >Delete</button>
                        </div>
                    </div>
                </div>
            )
        }) }
    </div>
  )
}

export default UsersData