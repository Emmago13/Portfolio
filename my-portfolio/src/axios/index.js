import axios from 'axios';


const instance = axios.create({
    baseURL: 'http://localhost:8000/',
    headers: {'Content-Type': 'application/json'}
})

const sendForm = async (data) => {
    const response = await instance({
        method: 'POST',
        url: 'post',
        data: data,
    });
    return response;
}

export default sendForm;