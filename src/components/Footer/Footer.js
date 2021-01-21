import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <section>
            <div id='footer'>
                <div className='container text-center'>
                    <a href='#one' className='text-light'><i class="fas fa-chevron-up"></i></a>
                    <hr />
                    <span style={{color: 'gray',fontSize: '.8rem'}}>© 2021 | Alvin Paala</span>
                </div> 
            </div>
        </section>
    )
}

export default Footer
