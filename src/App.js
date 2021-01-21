import React from 'react'
import SectionOne from './components/SectionOne/SectionOne'
import SectionTwo from './components/SectionTwo/SectionTwo'
import SectionProject from './components/SectionProject/SectionProject'
import Contacts from './components/Contacts/Contacts'
import Footer from './components/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div>
      <SectionOne />
      <SectionTwo />
      <SectionProject />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
