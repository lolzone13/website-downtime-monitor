const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const Bree = require('bree');
const session = require('express-session');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const connectDB = require('./config/db');


dotenv.config({ path: './config/config.env' });


const PORT = process.env.PORT || 5000;

const app = express();


// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    cors({
        origin: "http://localhost:3000", // <-- location of the react app were connecting to
        credentials: true,
    })
);

app.use(cookieParser());
app.use(session({
    secret: process.env.EXPRESS_SESSION_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge:  24 * 60 * 60 * 1000 }
  }));

app.use(passport.initialize());
app.use(passport.session());

// END OF MIDDLEWARE

connectDB();

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}


const websites = require('./Routes/Websites.js');
const login = require('./Routes/Login.js');



app.use('/api/websites', websites);
app.use('/auth', login);

const bree = new Bree({
    jobs: [
        {
            name: 'WebsiteGet',
            interval: '30s'
        }
    ]
});
bree.start();



app.listen(PORT, () => {
    console.log(` Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.blue.italic.bold);
})

