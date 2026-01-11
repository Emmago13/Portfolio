import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://egomezapi.netlify.app/',
    headers: {'Content-Type': 'application/json'}
})

const sendForm = async (data) => {
    try {
        const response = await instance({
            method: 'POST',
            url: 'mailer/post-contact-form',
            data: data,
        
        })
        return response;
    } catch (err) {
        if (err.response) {
            return err.response;
        }
        return err.message;
    }
}


export default sendForm;