import React from 'react'
import './SectionProject.css'
import itecWebsite from '../../assets/i-tec.png'
import toolLife from '../../assets/toolalgo-login.png'
import psms from '../../assets/psms.png'
import cleanroom from '../../assets/cleanroom.png'
import proshop from '../../assets/proshop.png'
import proshopAcc from '../../assets/proshop-acc.png'
import myRecipe from '../../assets/myrecipe.png'
import bottleLine from '../../assets/bottleline.png'
import oven from '../../assets/oven.png'

import Tilt from 'react-tilt'


const SectionProject = () => {
    return (
        <section>
            <div className='container mt-4' id='three'>
                <div className='title text-center title-design mtitle'>
                    Projects
                </div>

                <div className='row mb-5'>
                    <div className='col-md-4 col-sm-12 info-project mInfo'>
                        <h3 className='font-weight-bold mb-3'>I-Tec Website</h3>
                        <p className='mb-3'>
                            An advertising company website that has a product for 
                            selling and also a guest can inquire for the price and availability of the item. It is also responsive website for phone compatibility.
                        </p>
                        <div className="button-third mb-3" id="button-third-2">
                            <div id="slide-third"></div>
                            <a target="_blank" href="https://i-tecsystems.net/"><b>See Live</b></a>
                        </div>
                    </div>
                    <div className='col-md-8 col-sm-12 mpImage'>
                        <Tilt className="Tilt img-project" options={{ max : 5, scale: 1, speed: 10}} >
                            <img className='img-fluid' src={itecWebsite} alt='itec website' data-tilt/>
                        </Tilt>
                    </div>
                </div>

                <div className='row mb-5'>
                    <div className='col-md-4 col-sm-12 info-project mInfo'>
                        <h3 className='font-weight-bold mb-3'>Tool Life Monitoring System</h3>
                        <p className='mb-3'>
                        It is web base application that can monitor of how many chipset are made inside the factory, also it can tell if the chipset is defective.
                        </p>
                    </div>
                    <div className='col-md-8 col-sm-12 mpImage'>
                        <Tilt className="Tilt img-project" options={{ max : 5, scale: 1, speed: 10}} >
                            <img className='img-fluid' src={toolLife} alt='itec website' data-tilt/>
                        </Tilt>
                    </div>
                </div>
                
                <div className='row mb-5'>
                    <div className='col-md-4 col-sm-12 info-project mInfo'>
                        <h3 className='font-weight-bold mb-3'>Project/Service Monitoring System</h3>
                        <p className='mb-3'>
                        This web app has an add edit delete program, A user can manage the project of the company, how many days alloted in it, the reimbursement of employees. 
                        Info of employees like when they started the company, how many projects handled. Also, has user level in it like who is the super admin.
                        </p>
                    </div>
                    <div className='col-md-8 col-sm-12 mpImage'>
                        <Tilt className="Tilt img-project" options={{ max : 5, scale: 1, speed: 10}} >
                            <img className='img-fluid' src={psms} alt='itec website' data-tilt/>
                        </Tilt>
                    </div>
                </div>

                <div className='row mb-5'>
                    <div className='col-md-4 col-sm-12 info-project mInfo'>
                        <h3 className='font-weight-bold mb-3'>Class 10k Clean Room Monitoring System</h3>
                        <p className='mb-3'>
                        This clean room monitoring, It has a hardware that can track the temperature, humidity of the air and differential pressure.
                        </p>
                    </div>
                    <div className='col-md-8 col-sm-12 mpImage'>
                        <Tilt className="Tilt img-project" options={{ max : 5, scale: 1, speed: 10}} >
                            <img className='img-fluid' src={cleanroom} alt='itec website' data-tilt/>
                        </Tilt>
                    </div>
                </div>

                <div className='row mb-5'>
                    <div className='col-md-4 col-sm-12 info-project mInfo'>
                        <h3 className='font-weight-bold mb-3'>Proshop</h3>
                        <p className='mb-3'>
                        The Proshop is an e-commerce(online shopping), I just created it for learning deep in redux. 
                        You can add edit delete the items, can signin or register for user and it has ratings.
                        </p>
                    </div>
                    <div className='col-md-8 col-sm-12 mpImage'>
                        <Tilt className="Tilt img-project" options={{ max : 5, scale: 1, speed: 10}} >
                            <img className='img-fluid' src={proshop} alt='itec website' data-tilt/>
                        </Tilt>
                    </div>
                </div>

                <div className='row mb-5'>
                    <div className='col-md-4 col-sm-12'>
                    </div>
                    <div className='col-md-8 col-sm-12 mpImage'>
                        <Tilt className="Tilt img-project" options={{ max : 5, scale: 1, speed: 10}} >
                            <img className='img-fluid' src={proshopAcc} alt='itec website' data-tilt/>
                        </Tilt>
                    </div>
                </div>

                <div className='row mb-5'>
                    <div className='col-md-4 col-sm-12 info-project mInfo'>
                        <h3 className='font-weight-bold mb-3'>MyRecipe</h3>
                        <p className='mb-3'>
                        It is made in react that has react router dom and bootstrap react for table and
                        phone compatibility. It shows the recipe when you click the picture and has servings, preparation time and cooking time.
                        </p>
                    </div>
                    <div className='col-md-8 col-sm-12 mpImage'>
                        <Tilt className="Tilt img-project" options={{ max : 5, scale: 1, speed: 10}} >
                            <img className='img-fluid' src={myRecipe} alt='itec website' data-tilt/>
                        </Tilt>
                    </div>
                </div>

                <div className='row mb-5'>
                    <div className='col-md-4 col-sm-12 info-project mInfo'>
                        <h3 className='font-weight-bold mb-3'>Bottle Line Efficiency</h3>
                        <p className='mb-3'>
                        This is web app in asia's brewery that monitor 
                        how many drinks or bottles are made, it can tell also the expiration of liquid inside the bottle, if it is clean to drink.(not published)
                        </p>
                    </div>
                    <div className='col-md-8 col-sm-12 mpImage'>
                        <Tilt className="Tilt img-project" options={{ max : 5, scale: 1, speed: 10}} >
                            <img className='img-fluid' src={bottleLine} alt='itec website' data-tilt/>
                        </Tilt>
                    </div>
                </div>

                <div className='row mb-5'>
                    <div className='col-md-4 col-sm-12 info-project mInfo'>
                        <h3 className='font-weight-bold mb-3'>Centralized Oven Temperature Monitoring</h3>
                        <p className='mb-3'>
                        It is Web Based App in laguna. The system will tell how much degrees needed for the item. It can tell when the machine is running or need to fix.
                        </p>
                    </div>
                    <div className='col-md-8 col-sm-12 mpImage'>
                        <Tilt className="Tilt img-project" options={{ max : 5, scale: 1, speed: 10}} >
                            <img className='img-fluid' src={oven} alt='itec website' data-tilt/>
                        </Tilt>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionProject
