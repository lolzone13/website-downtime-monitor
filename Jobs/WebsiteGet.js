const axios = require('axios');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');
const ef = require('../Utils/emailformat');

dotenv.config({ path: '../config/config.env' });

async function sendMail(userEmail, userDetails) {

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_APP_PASSWORD
        }
    });
    const newObj = {...userDetails, email: userEmail};
    const htmlBody = ef.emailFormat(userDetails);

    let info = transporter.sendMail({
        from: '"Website-Downtime-Monitor" <website-downtime@mail.com>', // sender address
        to: userEmail, // list of receivers
        subject: "Hello, some of your websites might be down!", // Subject line
        text: "Hello, some of your websites might be down! ", // plain text body
        html: htmlBody, // html body
    });

    console.log("Message sent: %s", info.messageId);




}

async function getWebsiteData(data, userEmail) {
    try {
        for (let i = 0; i < data.length; i++) {
            axios.get(data[i].url)
                .then(async (res) => {

                    let newStatus = 'Up';


                    if (data[i].status !== newStatus) {

                        const statusResponse = await axios.put(process.env.URL + '/api/websites' + '/' + data[i]._id);

                        if (statusResponse.success === false) console.log(statusResponse.error);
                        
                    }
                }).catch(async (err) => {
                    if (err.response) {
                        let newStatus = 'Down';

                        try {
                            if (data[i].status !== newStatus) {

                                const statusResponse = await axios.put(process.env.URL + '/api/websites' + '/update/' + data[i]._id);

                                if (statusResponse.success === false) console.log(statusResponse.error);
                                sendMail(userEmail, data[i]);
                            }
                        } catch (error) {
                            console.log('error');
                        }

                    }
                });




        }
    } catch (error) {
        console.log("Going to error", error.response.status);
    }
}


async function getURLS(url) {
    const URLs = []
    try {
        const response = await axios.get(url);
        const data = response.data.data;
        data.forEach(element => {
            element.websites.forEach(val => {
                URLs.push(val);

            })

        });

        return [URLs, response.data.data[0].email];
    } catch (error) {
        console.log(error);
    }

}

getURLS(process.env.URL + '/api/websites/all')
    .then(response => getWebsiteData(response[0], response[1]))
    .catch((err) => console.log(err.data));
    // refresh