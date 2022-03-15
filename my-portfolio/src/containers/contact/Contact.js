import React, { Fragment, useState } from 'react';
import Footer from '../../components/footer/Footer';
import contactImg from '../../assets/images/undraw_personal_email_re_4lx7 (1).svg';



const Contact = () => {

    const [dataForm, setDataForm] = useState({});


    const handleChange = (e) => {
        setDataForm((prevData) => {
            return{
                ...prevData,
                [e.target.name] : e.target.value,
            }
        })
        console.log(dataForm);
    }





    return(
        <Fragment>
            <section className="section__contact" id="contact">
                <div className="div__form">
                    <form action="" method="post">
                        <label for="inputName" className="label--chl__1">
                            <input onChange={e => handleChange(e)} type="text" id="inputName" name="name" placeholder="Name" required />
                            <span>Name</span>
                            {/* <div className="validation">* Required</div> */}
                        </label>
                        <label for="inputEmail" className="label--chl__2">
                            <input onChange={e => handleChange(e)} type="email" id="inputEmail" name="email" placeholder="Email" required />
                            <span>Email</span>
                            {/* <div className="validation">* Required</div> */}
                        </label>
                        <label for="inputTel" className="label--chl__3">
                            <input onChange={e => handleChange(e)} type="tel" id="inputTel" name="phone" placeholder="Phone" />
                            <span>Phone</span>
                        </label>
                        <label for="inputMessage" className="label--chl__4">
                            <textarea onChange={e => handleChange(e)} name="message" id="inputMessage" cols="30" rows="10" placeholder="Message" required></textarea>
                            <span>Message</span>
                            {/* <div className="validation">* Required</div> */}
                        </label>
                        <button type="submit"><span>Send Message</span></button>
                    </form>
                </div>
                <div className="div__img">
                    <h2>Let's get in touch!</h2>
                    <p>If you are interested in work with me or just talk you can email<br/> me or contact me through one of the social medias below.</p>
                    <img src={contactImg} alt="contactImg" title="image from unDraw" />
                </div>
            </section>
            <Footer />
        </Fragment>
    )
}


export default Contact;