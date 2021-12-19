const axios = require('axios');
const colors = require('colors');


const URLs = ['https://jsonplaceholder.typicode.com/todos/1', 'https://jsonplaceholder.typicode.com/todos/2']

async function getCustomerData() {
    try {
        for(let i = 0; i<URLs.length; i++) {
            const res = await axios.get(URLs[i]);
            console.log(`Status Code:  ${res.status} `.green);
        }
    } catch (error) {
        console.log(error);
    }
}

getCustomerData();