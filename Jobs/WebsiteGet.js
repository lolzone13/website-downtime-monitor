const axios = require('axios');


async function getCustomerData() {
    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
        console.log(res.status);
    } catch (error) {
        console.log(error);
    }
}

getCustomerData();