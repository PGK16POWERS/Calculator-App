const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config();

const port = process.env.PORT;

// USE 
app.use(express.static("public"));

app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname, "public","index.html"));
});


app.listen( port, ()=>{
    console.log(`Server is running ${port}`)
})