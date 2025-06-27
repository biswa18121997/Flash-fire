import React, { useState } from 'react'
import { X } from "lucide-react";

interface BookSlotFormProps {
  bookSlotFormStatus: boolean;  
  setBookSlotFormStatus: React.Dispatch<React.SetStateAction<boolean>>;
}

function BookSlotForm({bookSlotFormStatus, setBookSlotFormStatus}: BookSlotFormProps) {

    const [name, setName ] = useState('');
    const [email, setEmail ] = useState('');
    const [mobile, setMobile ] = useState('');
    const [comment, setComment] = useState('');
    const [responseFromServer, setResponseFromServer] = useState<any>(null);

    async function SendDataToServer(){
      let reqToServer = fetch('http://localhost:8086/',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({name, email, mobile, comment, sessionBooking: true})
            });
            let response = (await reqToServer).json();
            setResponseFromServer(response);
                                     
                            
    }
  return (
    <div className='w-screen h-screen'>
      <section className='w-1/2 h-[10vh] flex justify-between bg-neutral-400'>
          <img src='/Logo.jpeg' alt='LOGO' className='w-[10vw] h-[10vh]'/>
          <X size={24} onClick={()=>setBookSlotFormStatus(false)} className='z-20 text-red-700 border hover:text-white hover:bg-red-600 m-2 rounded-lg' />
      </section>

        <div>
            <h1>ENTER YOUR NAME : </h1>
            <input type="text" required placeholder='Enter Name' onChange={(e)=>setName(e.target.value)}/>
            <h1>ENTER YOUR E-mail : </h1>
            <input type="text" placeholder='Enter Your E-mail Address' onChange={(e)=>setEmail(e.target.value)} />
            <h1>ENTER YOUR MOBILE : </h1>
            <input onChange={(e)=>setMobile(e.target.value)} type="text" pattern="\d{10}" maxLength={10} minLength={10} required placeholder="Enter Mobile number" />
            <h1>Anything That will Help us Know you better :</h1>
            <textarea  placeholder='Enter Somthing that will help us know you better .' onChange={(e)=>setComment(e.target.value)} />
        </div>
        <button  onClick={SendDataToServer}>SUBMIT</button>

      
    </div>
  )
}

export default BookSlotForm
