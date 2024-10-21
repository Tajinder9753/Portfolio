// require module
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser');
const compress = require('compression');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const assetsRouter = require("./asset-router");
const app = express()
const userRoutes = require('./routes/User.js');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
// Server static file
app.use("/",assetsRouter);

// API endpoint
app.get('/api/v1', (req, res) => {
    res.json({
      proect:"React Project",
      from:"COMP229"
    });
});

app.use(cookieParser())
app.use(compress())
app.use(helmet())
app.use(cors())

app.use('/api', userRoutes);

app.use("/",express.static(path.join(__dirname,"public")));


// Extract routes from React/Client
app.get('/*',function (req,res){
  res.sendFile(path.join(__dirname,"../public","index.html"))
});

module.exports = app;