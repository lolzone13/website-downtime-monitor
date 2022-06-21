const axios = require('axios');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');
const ef = require('../Utils/emailformat');


dotenv.config({ path: '../config/config.env' });

async function sendMail(userDetails) {

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_APP_PASSWORD
        }
    });
    ef.emailFormat(userDetails);
    console.log('hello', userDetails);
    // let info = await transporter.sendMail({
    //     from: 'Website-Downtime-Monitor', // sender address
    //     to: userDetails.userEmail, // list of receivers
    //     subject: "Hello, some of your websites might be down!", // Subject line
    //     text: "Hello, some of your websites might be down! ", // plain text body
    //     html: `<b>Website <a href=${userDetails.url}>${userDetails.name}</a> is down! </b>`, // html body
    // });

    // console.log("Message sent: %s", info.messageId);




}



var currentdate = new Date(); 
var dateNow =  currentdate.getDate() + "/" + (currentdate.getMonth()+1)  + "/" + currentdate.getFullYear();
var timeNow = currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds();




async function getWebsiteData(users) {
    
    try {
        users.map(async (item) => {
            const data = item.websites;
            
            const sites = data.map(async (ele) =>{
                
                const res = await axios.get(ele.url);
                //console.log(res);
                let newStatus = (res.status === 200) ? 'Up' : 'Down';
                if (ele.status !== newStatus) {
                    const statusResponse = await axios.put(process.env.URL + '/api/websites' + '/' + ele._id);
                    
                                            
                    const emailObject = {
                        website: ele,
                        status: newStatus,
                        date: dateNow,
                        time: timeNow
                    }
                    console.log(emailObject);
                    return emailObject;
                }                  
            }); 
            console.log('sites', sites);
            const downSites = await Promise.all(sites);
            console.log('downsites',downSites);
            if (downSites.length > 0) {
                const userDetails = {
                    userEmail: item.userEmail,
                    downSites: downSites
    
                }
                sendMail(userDetails);
            }



        });
    } catch (error) {
        console.log("Going to error", error.response.status);
    }
}


async function getURLS(url) {
    const URLs = [];
    try {
        const response = await axios.get(url);
        const data = response.data.data;
        data.forEach(element => {
            const deets = {
                userEmail: element.email,
                websites: element.websites
            }
            URLs.push(deets);
        });
        //console.log(URLs);

        return URLs;
    } catch (error) {
        console.log(error);
    }

}

getURLS(process.env.URL + '/api/websites/all')
    .then(response => getWebsiteData(response))
    .catch((err) => console.log(err.data));
    // refresh
