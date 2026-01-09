import React, { Fragment, useState } from 'react';
import Footer from '../../components/footer/Footer';
import contactImg from '../../assets/images/undraw_personal_email_re_4lx7 (1).svg';
import { Helmet } from "react-helmet";
import sendForm from '../../axios/index';


const Contact = () => {

    const [dataForm, setDataForm] = useState({});
    const [error,setError] = useState(false);
    const [nameValidated,setNameValidated] = useState(true);
    const [emailValidated,setEmailValidated] = useState(true);
    const [messageValidated,setMessageValidated] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const [validMessage, setValidMessage] = useState('Send Message');


    const handleChange = (e) => {
        const dataName = e.target.name;
        const dataValue = e.target.value;
        setDataForm((prevData) => {
            return{
                ...prevData,
                [dataName] : dataValue,
            }
        })
        if(dataName === 'name') {
            setNameValidated(true);
        }else if(dataName === 'email') {
            setEmailValidated(true);
        }else if(dataName === 'message'){
            setMessageValidated(true);
        }
    }



    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        
        if(form.checkValidity() === false) {
            setError(true);
            setNameValidated(false);
            setEmailValidated(false);
            setMessageValidated(false);
            setErrorMessage('Complete required fields');
            setTimeout(()=>{
                setError(false);
                setNameValidated(true);
                setEmailValidated(true);
                setMessageValidated(true);
            }, 4000)
        }else{
            const response = await sendForm(dataForm);
            if(response.status === 200) {
                setNameValidated(true);
                setEmailValidated(true);
                setMessageValidated(true);
                setError(false);
                setValidMessage('Message sent');
                setTimeout(() => {setValidMessage('Send Message')}, 3000)
                form.reset();

            }else if(response.status === 400){
                setError(true);
                setErrorMessage(response.data.error);
                setNameValidated(false);
                setEmailValidated(false);
                setMessageValidated(false);
            }
        }

    }



    return(
        <Fragment>
            <Helmet>
                <title>Emmanuel Gomez | Contact</title>
            </Helmet>
            <section className="section__contact" id="contact">
                <div className="div__form">
                    <form noValidate method="POST" onSubmit={(e)=>handleSubmit(e)}>
                        <label for="inputName" className="label--chl__1">
                            <input
                            onChange={(e)=>handleChange(e)}
                            type="text" 
                            id="inputName" 
                            name="name" 
                            placeholder="Name" 
                            required />
                            <span className={!nameValidated ? 'invalid' : null} >
                                Name
                            </span>
                            <div className={!nameValidated ? 'required' : 'no__required'} >
                                * Required
                            </div>
                        </label>
                        <label for="inputEmail" className="label--chl__2">
                            <input 
                            onChange={(e)=>handleChange(e)}
                            type="email" 
                            id="inputEmail" 
                            name="email" 
                            placeholder="Email" 
                            required />
                            <span className={!emailValidated ? 'invalid' : null} >
                                Email
                            </span>
                            <div className={!emailValidated ? 'required' : 'no__required'} >
                                * Required
                            </div>
                        </label>
                        <label for="inputMessage" className="label--chl__4">
                            <textarea 
                            onChange={(e)=>handleChange(e)}
                            name="message" 
                            id="inputMessage" 
                            cols="30" rows="10" 
                            placeholder="Message" 
                            required >
                            </textarea>
                            <span className={!messageValidated ? 'invalid' : null} >
                                Message
                            </span>
                            <div className={!messageValidated ? 'required' : 'no__required'} >
                                * Required
                            </div>
                        </label>
                        <div className={error ? 'error__show' : null} >{errorMessage}</div>
                        <button type="submit" className={validMessage === 'Message sent' ? 'button__valid' : null}>
                            <span>{validMessage}</span>
                        </button>
                    </form>
                </div>
                <div className="div__img">
                    <h2>Let's get in touch!</h2>
                    <p>If you are interested in work with me or just talk you can email<br/> me or contact me through one of the social medias below.</p>
                    <img src={contactImg} alt="girl handling a giant phone and a letter" title="image from unDraw" />
                </div>
            </section>
            <Footer />
        </Fragment>
    )
}


export default Contact;