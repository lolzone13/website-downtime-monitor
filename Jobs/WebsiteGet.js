const axios = require('axios');
const dotenv = require('dotenv');


dotenv.config({ path: '../config/config.env' });



async function getWebsiteData(data) {
    try {
        for(let i = 0; i < data.length; i++) {
            const res = await axios.get(data[i].url);
            console.log(res);
            let newStatus = (res.status === 200) ? 'Up' : 'Down';
            console.log(data[i].name, newStatus);
            if (data[i].status !== newStatus) {
                const statusResponse = await axios.put(process.env.URL + '/api/websites' + '/' + data[i]._id);

                if (statusResponse.success === false) console.log(statusResponse.error);
            }

        }
    } catch (error) {
        console.log("Going to error",  error.response.status);
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
        console.log(error);
    }

}

getURLS(process.env.URL + '/api/websites')
    .then(response => getWebsiteData(response))
    .catch((err) => console.log(err));
    // refresh
      