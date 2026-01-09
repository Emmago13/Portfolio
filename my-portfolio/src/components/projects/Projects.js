import React, { Fragment } from 'react';
import Footer from '../footer/Footer';
import LandingPageImg from '../../assets/images/9e3bd8127399839.614113df90751.png';
import ApiMundoseImg from '../../assets/images/ApiMundosE.png';
import SimpleCalculatorImg from '../../assets/images/SimpleCalculator.png';
import ShopCartImg from '../../assets/images/ShopCart.png';
import { Helmet } from "react-helmet";
import ProjectsItems from '../../containers/projectsItems/ProjectsItems';
const landingDescription = 'Single page made it with React.js, personalized with Sass preprocessor and Bootstrap. The contact form connects you, through axios, with an Api that sends you a confirmation email.';
const apiDescription = "This Api let you send a confirmation email and save the data in a database using a form. It's made it in PHP, especifically through the Laravel framework.";
const shopDescription = "Photography shopping cart that let's you select, modify the quantity and delete the diferents elementes in the store. Made it with HTML5, Css3 and vanilla Javascript.";
const calcDescription = 'Simple calculator made it with HTML5, Sass preprocessor and vanilla Javascript. It let you make simple operations and shows you the result in a easy and efficient way.';



const Projects = () => {
    return(
        <Fragment>
            <Helmet>
                <title>Emmanuel Gomez | Projects</title>
            </Helmet>
            <section className="section__works" id="works">
                <h2>Let’s see some of my own projects</h2>
                <div className="works__container">
                    <ProjectsItems
                        classNameDiv="works__div--right"
                        classNameImg="works__img--right"
                        urlGithub="https://github.com/Emmago13/MundosE/tree/master/my-app"
                        name='Landing Page'
                        url="https://egmyapp.netlify.app/"
                        imagen={LandingPageImg}
                        description={landingDescription}/>
                    <ProjectsItems
                        classNameDiv="works__div--left"
                        classNameImg="works__img--left"
                        urlGithub="https://github.com/Emmago13/MundosE-backend"
                        name="Api"
                        url="https://egmundose.herokuapp.com/"
                        imagen={ApiMundoseImg}
                        description={apiDescription}/>
                    <ProjectsItems
                        classNameDiv="works__div--right"
                        classNameImg="works__img--right"
                        urlGithub="https://github.com/Emmago13/Calculator"
                        name='Simple Calculator'
                        url="https://egcalculator.vercel.app/"
                        imagen={SimpleCalculatorImg}
                        description={calcDescription}/>
                    <ProjectsItems
                        classNameDiv="works__div--left"
                        classNameImg="works__img--left"
                        urlGithub="https://github.com/Emmago13/Shop-Cart"
                        name="Photography Store"
                        url="https://shop-cart-photography.vercel.app/"
                        imagen={ShopCartImg}
                        description={shopDescription}/>
                </div>
            </section>
            <Footer />
        </Fragment>
    )
}


export default Projects;