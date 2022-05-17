import React, { Fragment } from 'react';
import Footer from '../footer/Footer';
import RightArrow from '../../assets/images/arrow-right-solid.svg';
import LandingPageImg from '../../assets/images/9e3bd8127399839.614113df90751.png';
import ApiMundoseImg from '../../assets/images/ApiMundosE.png';
import SimpleCalculatorImg from '../../assets/images/SimpleCalculator.png';
import ShopCartImg from '../../assets/images/ShopCart.png';
import { Helmet } from "react-helmet";



const Projects = () => {
    return(
        <Fragment>
            <Helmet>
                <title>Emmanuel Gomez | Projects</title>
            </Helmet>
            <section className="section__works" id="works">
                <h2>Let’s see some of my own projects</h2>
                <div className="works__container">
                    <div className="works__div--right">
                        <div className="works__img--right">
                            <h4>Landing Page</h4>
                            <p>Single page made it with React.js, personalized with Sass preprocessor and Bootstrap. The contact form connects you, through axios, with an Api that sends you a confirmation email.</p>
                            <a href="https://github.com/Emmago13/MundosE/tree/master/my-app" target="_blank" rel="noreferrer" className="a--disable">
                                <p>Check the code</p>
                                <img src={RightArrow} alt="Right arrow" />
                            </a>
                        </div>
                        <a href="https://egmyapp.netlify.app/" target="_blank" rel="noreferrer">
                            <img src={LandingPageImg} alt="Landing page " />
                        </a>
                    </div>
                    <div className="works__div--left">
                        <a href="https://egmundoseapi.herokuapp.com/" target="_blank" rel="noreferrer" className='img--disable' >
                            <img src={ApiMundoseImg} alt="Api project "/>
                        </a>
                        <div className="works__img--left">
                            <h4>Api</h4>
                            <p>This Api let you send a confirmation email and save the data in a database for whoever use a form. It's made it in PHP, especifically through the Laravel framework.</p>
                            <a href="https://github.com/Emmago13/MundosE-backend" target="_blank" rel="noreferrer" className="a--disable">
                                <p>Check the code</p>
                                <img src={RightArrow} alt="Right arrow" />
                            </a>
                        </div>
                    </div>
                    <div className="works__div--right">
                        <div className="works__img--right">
                            <h4>Simple Calculator</h4>
                            <p>Simple calculator made it with HTML5, Sass preprocessor and vanilla Javascript. It let you make simple operations and shows you the result in a easy and efficient way.</p>
                            <a href="https://github.com/Emmago13/Calculator" target="_blank" rel="noreferrer" className="a--disable">
                                <p>Check the code</p>
                                <img src={RightArrow} alt="Right arrow" />
                            </a>
                        </div>
                        <a href="https://egcalculator.vercel.app/" target="_blank" rel="noreferrer">
                            <img src={SimpleCalculatorImg} alt="Simple calculator " />
                        </a>
                    </div>
                    <div className="works__div--left">
                        <a href="https://shop-cart-photography.vercel.app/" target="_blank" rel="noreferrer">
                            <img src={ShopCartImg} alt="Photography Shop Cart" />
                        </a>
                        <div className="works__img--left">
                            <h4>Photography Store</h4>
                            <p>Photography shopping cart that let's you select, modify the quantity and delete the diferents elementes in the store. Made it with HTML5, Css3 and vanilla Javascript.</p>
                            <a href="https://github.com/Emmago13/Shop-Cart" target="_blank" rel="noreferrer" className="a--disable">
                                <p>Check the code</p>
                                <img src={RightArrow} alt="Right arrow" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </Fragment>
    )
}


export default Projects;