import React from 'react'
import './SectionOne.css'

const sectionOne = () => {
    return (
        <section>
            <div id='one' className='jumbotron'>
                <div className='container'>
                <h1 className='one-title mb-5 headline mh'>Hi, my name is <span style={{color:'#00cdac'}}>Alvin Paala</span><br />
                I'm a Web Developer.</h1>
                <p className='know-more headline-button mh-button'>
                    <div class="button" id="button-2">
                        <div id="slide"></div>
                        <a href="#two"><b>Know more</b></a>
                    </div>
                </p>
                </div>
            </div>
        </section>
    )
}

export default sectionOne
