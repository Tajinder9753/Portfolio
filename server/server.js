const express = require('express')
const path = require('path')
const app = express()
const assetsRouter = require("./asset-router")


//server static file 
app.use("/",express.static(path.join(__dirname,"public")))
app.use("/src", assetsRouter);
//API endpoint 
app.get('/api/v1', (req, res) => {
    res.json({
        proect:"React Project",
        from:"COMP 229"
    });
});

//extract routes from React / client side 
app.get('/*', (req, res) =>{
    res.sendFile(path.join(__dirname, "../public", "index.html"))
});

app.listen(3000)
console.log('server is running on port 3000');