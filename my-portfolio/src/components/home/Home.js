import React from 'react';
import { Fragment } from 'react';
import Footer from '../footer/Footer';
import { Helmet } from "react-helmet";



const Home = () => {
    return(
        <Fragment>
            <Helmet>
                <title>Emmanuel Gomez | Portfolio</title>
            </Helmet>
            <section className="section__home" id="home">
                <h1>Welcome to my portfolio</h1>
                <p>This is where i’m gonna put all my works and some ideas that i want to share with the world. Below you are gonna find some of my social medias so we can get in touch.</p>
            </section>
            <Footer />
        </Fragment>
    )
}


export default Home;