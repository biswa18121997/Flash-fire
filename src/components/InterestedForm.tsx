// import React, { useState } from 'react'
// import { X } from "lucide-react";
// import { set } from 'mongoose';


// interface InterestedFormProps {
//   interestedFormStatus: boolean;
//   setInterestedFormStatus: React.Dispatch<React.SetStateAction<boolean>>;
// }
// function InterestedForm({interestedFormStatus, setInterestedFormStatus}: InterestedFormProps) {

//     const [responseFromServer, setResponseFromServer] = useState<any>(null);
//     const [name, setName ] = useState('');
//     const [email, setEmail ] = useState('');
//     const [mobile, setMobile ] = useState('');

//     async function SendDataToServer(){
//       let reqToServer = fetch('http://localhost:8086/',{
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({name, email, mobile})
//             });
//             let response = (await reqToServer).json();
//             setResponseFromServer(response);
                                     
                            
//     }

    
//   return (
//     <div className=' h-[100vh] w-full m-2 absolute z-50  bg-neutral-200/80 top-32 flex flex-col items-center  gap-2'>
//       <section className='w-1/2 h-[10vh] flex justify-between bg-neutral-400'>
//         <img src='/Logo.jpeg' alt='LOGO' className='w-[10vw] h-[10vh]'/>
//         <X size={24} onClick={()=>setInterestedFormStatus(false)} className='z-20 text-red-700 border hover:text-white hover:bg-red-600 m-2 rounded-lg' />
//       </section>
//       <div className='flex w-1/2'>
//        <div className='w-1/3 h-full '>
//           <img src='/Logo.jpeg' className=' w-full h-full' alt="" />
//         </div>
//          <div className=' flex flex-col w-2/3 p-4  border gap-4 bg-white/50'>
//             <h1>ENTER YOUR NAME : </h1>
//             <input type="text" className='rounded-lg p-2' required placeholder='Enter Name' onChange={(e)=>setName(e.target.value)}/>
//             <h1>ENTER YOUR E-mail : </h1>
//             <input type="text" className='rounded-lg p-2' placeholder='Enter Your E-mail Address' onChange={(e)=>setEmail(e.target.value)} />
//             <h1>ENTER YOUR MOBILE : </h1>
//             <input className='rounded-lg p-2' onChange={(e)=>setMobile(e.target.value)} type="text" pattern="\d{10}" maxLength={10} minLength={10} required placeholder="Enter Mobile number" />
//             <label htmlFor='checkbox' > <input id='checkbox' required type='checkbox' /> By clicking here, You agree to our Terms & Conditions.</label>
//         </div>
       
//       </div>
       
//         <button type='button' className='bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-2 rounded-full font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-200 block text-center mt-4' onClick={SendDataToServer}> Submit </button>
//         <p>{responseFromServer?.message}</p>

      
//     </div>
//   )
// }

// export default InterestedForm


import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AOS_Initializer from "../utils/AOS_Initializer.js";

interface InterestedFormProps {
  interestedFormStatus: boolean;
  setInterestedFormStatus: React.Dispatch<React.SetStateAction<boolean>>;
}

function InterestedForm({ interestedFormStatus, setInterestedFormStatus }: InterestedFormProps) {
  const [responseFromServer, setResponseFromServer] = useState<any>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');

  async function SendDataToServer() {
    const reqToServer = await fetch('http://localhost:8086/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, mobile })
    });
    const response = await reqToServer.json();
    setResponseFromServer(response);
  }
  useEffect(AOS_Initializer, []);

  return (
    <div data-aos='fade-top' className="fixed left-[15%] h-[75vh] top-[10vh] inset-0 z-50 bg-neutral-400/90 flex shadow-xl w-2/3 justify-center m-1/2">
      {/* Left Section */}
      <div className="w-1/2 bg-[#0f0d0e]/50 text-white flex flex-col justify-center items-center relative overflow-hidden p-10 bg-bottom bg-opacity-50 ">
        <div className="absolute top-6 right-6">
          <X onClick={() => setInterestedFormStatus(false)} className="text-white hover:text-red-500 cursor-pointer" size={28} />
        </div>

        <div className="z-10">
          <h2 className="text-2xl font-semibold mb-3">Discounts from leading student brands.</h2>
          <p className="text-sm text-gray-300">Your First Step To Land A Job In the U.S.A</p>
        </div>

        <div data-aos='fade-left' className="flex mt-10 gap-4 z-10">
          <img data-aos='fade-left' src="/images.jpg" alt="Sample" className="w-28 h object-cover rounded-lg shadow-md rotate-[-8deg]" />
          <img data-aos='slide-right' src="/Jobs-in-US-from-India-1024x538.jpg" alt="Sample" className="h-1/2 object-cover rounded-lg shadow-md rotate-[5deg]" />
        </div>

        <div className="absolute w-[200px] h-[200px] bg-orange-500 rounded-full right-[-50px] top-[50px]"></div>
        <div className="absolute w-[12px] h-[12px] bg-white rounded-full top-[30px] left-[45px]"></div>
      </div>

      {/* Right Section (Form) */}
      <div className="w-1/2 flex flex-col justify-center items-center px-16 relative">
        <h1 className="text-2xl font-semibold mb-1 text-neutral-900">Start Free Trial, our Team will Connect with You.</h1>
      
        <p className="text-sm text-gray-600 mb-8">Enter your details below</p>

        <div data-aos='fade-right' className="w-full flex flex-col gap-4">
          <input
            type="text"
            className="border rounded-lg px-4 py-3 focus:outline-orange-400"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            className="border rounded-lg px-4 py-3 focus:outline-orange-400"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="tel"
            className="border rounded-lg px-4 py-3 focus:outline-orange-400"
            placeholder="Mobile (10 digits)"
            maxLength={10}
            pattern="\d{10}"
            onChange={(e) => setMobile(e.target.value)}
          />

          <label className="text-sm flex gap-2 items-center">
            <input id="checkbox" required type="checkbox" />
            <span>By clicking here, you agree to our Terms & Conditions.</span>
          </label>

          <button
            type="button"
            onClick={SendDataToServer}
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-2 rounded-lg transition-all"
          >
            Submit
          </button>
        </div>

        {responseFromServer?.message && (
          <p className="mt-4 text-green-600">{responseFromServer.message}</p>
        )}
      </div>
    </div>
  );
}

export default InterestedForm;
