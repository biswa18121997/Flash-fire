import React, { useState } from 'react'
import { X } from "lucide-react";
import { set } from 'mongoose';


interface InterestedFormProps {
  interestedFormStatus: boolean;
  setInterestedFormStatus: React.Dispatch<React.SetStateAction<boolean>>;
}
function InterestedForm({interestedFormStatus, setInterestedFormStatus}: InterestedFormProps) {

    const [responseFromServer, setResponseFromServer] = useState<any>(null);
    const [name, setName ] = useState('');
    const [email, setEmail ] = useState('');
    const [mobile, setMobile ] = useState('');

    async function SendDataToServer(){
      let reqToServer = fetch('http://localhost:8086/',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({name, email, mobile})
            });
            let response = (await reqToServer).json();
            setResponseFromServer(response);
                                     
                            
    }

    async function handleInterestedForm(){

    }
  return (
    <div className=' h-screen bg-gray-500/20 relative top-32 flex flex-col items-center justify-center gap-4'>
      <section className='w-1/2 h-[10vh] flex justify-between bg-neutral-400'>
        <img src='/Logo.jpeg' alt='LOGO' className='w-[10vw] h-[10vh]'/>
        <X size={24} onClick={()=>setInterestedFormStatus(false)} className='z-20 text-red-700 border hover:text-white hover:bg-red-600 m-2 rounded-lg' />
      </section>
        <div className=' flex flex-col w-1/3 border gap-4'>
            <h1>ENTER YOUR NAME : </h1>
            <input type="text" required placeholder='Enter Name' onChange={(e)=>setName(e.target.value)}/>
            <h1>ENTER YOUR E-mail : </h1>
            <input type="text" placeholder='Enter Your E-mail Address' onChange={(e)=>setEmail(e.target.value)} />
            <h1>ENTER YOUR MOBILE : </h1>
            <input onChange={(e)=>setMobile(e.target.value)} type="text" pattern="\d{10}" maxLength={10} minLength={10} required placeholder="Enter Mobile number" />
            <label htmlFor='checkbox' > <input id='checkbox' required type='checkbox' /> By clicking here, You agree to our Terms & Conditions.</label>
        </div>
        <button type='button' onClick={SendDataToServer}> Submit </button>
        <p>{responseFromServer?.message}</p>

      
    </div>
  )
}

export default InterestedForm
