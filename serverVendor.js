const express = require("express"),
      morgan = require("morgan"),
      bodyParser = require("body-parser"),
      path = require("path"),
      mongoose = require("mongoose"),
      passport = require("passport"),
      // flash = require("connect-flash"),
      session = require("express-session"),
      cookieParser = require("cookie-parser");

mongoose.Promise = global.Promise;

const app = express(),
      port = process.env.PORT || 3000;

// Enable env variables
require('dotenv').config();

require("./vendors/passport")(passport);

app.use(morgan("dev"));
app.use(cookieParser());
app.use(bodyParser());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json()); // parse application/json



app.use(session({secret: "wewinthishackerthons"}));
app.use(passport.initialize());
app.use(passport.session());

require("./vendors/routes/routes")(app, path, passport);


const dbConnection = ( dbUrl = process.env.DB_URL) => {
    return mongoose.connect(dbUrl)
        .then( () => {
            console.log('Mongoose connection to bravesDb active.');
        })
        .catch(err => console.log(err));
};



let server;

const runServer = () => {
    return new Promise( (resolve, reject) => {

        resolve(server = app.listen(port, () => {
            console.log(`The server is running on port ${port}`)
            ;

        }));

    });
};

if (require.main === module ) {
    runServer()
        .then( () => {
            dbConnection();
        })
        .catch( (err) => console.log(err));
}