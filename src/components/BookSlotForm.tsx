import React, { useState } from 'react'

function BookSlotForm() {

    const [name, setName ] = useState('');
    const [email, setEmail ] = useState('');
    const [mobile, setMobile ] = useState('');
    const [comment, setComment] = useState('');

    async function handleBookSlotForm(){

    }
  return (
    <div className='w-screen h-screen'>
        <div>
            <h1>ENTER YOUR NAME : </h1>
            <input type="text" required placeholder='Enter Name' onChange={(e)=>setName(e.target.value)}/>
            <h1>ENTER YOUR E-mail : </h1>
            <input type="text" placeholder='Enter Your E-mail Address' onChange={(e)=>setEmail(e.target.value)} />
            <h1>ENTER YOUR MOBILE : </h1>
            <input onChange={(e)=>setMobile(e.target.value)} type="text" pattern="\d{10}" maxlength="10" minlength="10" required placeholder="Enter Mobile number" />
        </div>
        {/* <button type='button' onClick={handleInterestedForm}></button> */}

      
    </div>
  )
}

export default InterestedForm
