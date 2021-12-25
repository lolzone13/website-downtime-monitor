const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const Bree = require('bree');


const connectDB = require('./config/db');


dotenv.config({ path: './config/config.env' });


const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());

connectDB();

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}


const websites = require('./Routes/Websites.js');


app.use('/api/websites', websites);


const bree = new Bree({
    jobs: [        
        {
            name : 'WebsiteGet',
            interval : '20s'
        }
    ]
});
bree.start();



app.listen(PORT, ()=> {
    console.log(` Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.blue.italic.bold);
})

