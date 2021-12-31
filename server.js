const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const Bree = require('bree');
const { urlencoded } = require('express');
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
// app.use(
//     session({
//         secret: "6d49c532a2bc96deec2dc48f1f72c9f6",
//         resave: true,
//         saveUninitialized: true,
//     })
// );


// app.use(cookieParser("6d49c532a2bc96deec2dc48f1f72c9f6"));
// app.use(passport.initialize());
// app.use(passport.session());

// require("./config/passportConfig")(passport);




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



app.listen(PORT, () => {
    console.log(` Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.blue.italic.bold);
})

