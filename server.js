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
const helmet = require('helmet');
const path = require('path');

dotenv.config({ path: './config/config.env' });


const PORT = process.env.PORT || 5000;
const app = express();


// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    cors({
        origin: process.env.CLIENT_URL, // <-- location of the react app were connecting to
        credentials: true,
    })
);
app.use(helmet());
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
            interval: '900s'
        }
    ]
});
bree.start();

// serve static assets
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'Client', 'build', 'index.html'));
    })
}


app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.blue.italic.bold);
})

