const axios = require('axios');
const colors = require('colors');
const dotenv = require('dotenv');


dotenv.config({ path: '../config/config.env' });



async function getWebsiteData(data) {
    const defectiveWebsites = [];
    try {
        for(let i = 0; i<data.length; i++) {
            const res = await axios.get(data[i].url);
            console.log(`${data[i].name}   Status Code:  ${res.status} `.green);
            if (res.status !== 200) {
                defectiveWebsites.push(data[i]);
            }
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
            URLs.push(element)
        });
        

        return URLs;
    } catch (error) {
        console.log(error.red);
    }

}

getURLS(process.env.URL + '/api/websites').then(response => getWebsiteData(response).then((response) => {
    
}));
