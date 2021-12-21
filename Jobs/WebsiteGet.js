const axios = require('axios');
const colors = require('colors');




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


async function getURLS(url) {
    const URLs = []
    try {
        const response = await axios.get(url);
        
        const data = response.data.data;
        data.forEach(element => {
            URLs.push(element.url);
        });


        return URLs;
    } catch (error) {
        console.log(error.red);
    }

}


getURLS('http://localhost:5000/api/websites');