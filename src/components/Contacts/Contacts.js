import React from 'react'
import './Contacts.css'

const Contacts = () => {
    return (
        <section>
            <div id='contact'>
                <div className='container'>
                    <div className='title text-center title-design mtitle'>
                        Contact
                    </div>
                    <p className='text-center mail mContact'>
                        <i class="fas fa-envelope"></i> alvin16paala@gmail.com<br />
                        <i class="fas fa-phone"></i> (+63)935-283-8741
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Contacts
