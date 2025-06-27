import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import InterestedForm from "./components/InterestedForm";
import BookSlotForm from './components/BookSlotForm';

function App() {
  let [interestedFormStatus, setInterestedFormStatus] = useState(false);
  let [bookSlotFormStatus, setBookSlotFormStatus ] = useState(false);


  return (
    <div className="min-h-screen bg-white">
      <Navigation interestedFormStatus={interestedFormStatus} setInterestedFormStatus ={ setInterestedFormStatus} />
      {interestedFormStatus && <InterestedForm interestedFormStatus={interestedFormStatus } setInterestedFormStatus ={ setInterestedFormStatus} />}
     
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <Contact bookSlotFormStatus={bookSlotFormStatus} setBookSlotFormStatus={setBookSlotFormStatus}/>
       {bookSlotFormStatus && <BookSlotForm bookSlotFormStatus={bookSlotFormStatus } setBookSlotFormStatus ={ setBookSlotFormStatus} />}
    </div>
  );
}

export default App;