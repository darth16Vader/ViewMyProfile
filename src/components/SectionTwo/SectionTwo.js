import React from 'react'
import './SectionTwo.css'
import img from '../../assets/IMG_8208.jpg'


const SectionTwo = () => {
    return (
        <section>
            <div id='two'>
                <div className='container pt-4'>
                    <div className='title text-center title-design mtitle'>
                        About me
                    </div>
                    <div className='row'>
                        <div className='col-md-6 col-sm-12 wrapper-image'>
                            <img className="img-fluid rounded shadow-lg myImage mImage" 
                                height="auto" 
                                width="300px" 
                                src={img} 
                                alt="Profile"
                                >
                            </img>
                        </div>
                        <div className='col-md-6 col-sm-12 myImageInfo mInfo'>
                            <p className='aboutme-text pt-3'>
                                I'm a industrious person and dedicated profession
                                front-end developer/user interface designer. I always 
                                continue to learn how to improve the processes and 
                                practice with new ideas of programming, concept and other methods.
                            </p>
                            <p className='aboutme-text'>
                                My main experience is in front-end development but I also have passion in back-end, 
                                I believe having experience in both design and development allows for making the most optimal user experiences.
                            </p>
                            <p className='know-more'>
                                <div className="button-sec" id="button-sec-2">
                                    <div id="slide-sec"></div>
                                    <a target='_blank' rel="noreferrer" href="https://drive.google.com/file/d/1MwhGqWBSVZv77Ypycpmcs1uXbuoC49k0/view?usp=sharing"><b>View resume</b></a>
                                </div>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionTwo
