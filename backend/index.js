const express = require("express")
const app = express()
require("./Conn/db.js");
const port = 8000


app.listen(port,()=>{
    console.log(`server listen on the port ${port}`)
})