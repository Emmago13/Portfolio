import React, { Fragment } from 'react';
import Footer from '../footer/Footer';
import AboutImg from '../../assets/images/undraw_hello_re_3evm.svg';
import { WavyLink} from "react-wavy-transitions";
import { Helmet } from "react-helmet";



const About = () => {
    return(
        <Fragment>
            <Helmet>
                <title>Emmanuel Gomez | About</title>
            </Helmet>
            <section className="section__about" id="about">
                <div>
                    <h2>Who I am</h2>
                    <img src={AboutImg} alt="about-img_mobile" title="image from unDraw" />
                    <p>
                        Hey! I am Emmanuel Gomez, a 22 year old React frontend developer who is discovering the world of web development. I started this road more than a year ago and it’s been an awesome time working and learning about this amazing career.    
                    </p>
                    <p>
                        I'm trying to help people making life easier through the browser, working with designers and bringing ideas to life. I’m naturally curious and always learning something.
                    </p>
                    <p>
                        I have experience working with HTML5, Css3, Sass, Bootstrap, JavaScript, React.js, PHP and the framework Laravel.
                    </p>
                    <h4>If you are interested on collaborating or just talk </h4>
                    <WavyLink to="/contact" waveColor="#9C2D41" ><span>Start a conversation</span></WavyLink>
                </div>
                <img src={AboutImg} alt="about-img" title="image from unDraw" />
            </section>
            <Footer />
        </Fragment>
    )
}


export default About;