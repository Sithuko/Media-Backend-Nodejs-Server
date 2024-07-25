require('dotenv').config();
let express = require('express');
let app = express();

app.listen(process.env.PORT,()=>{
    console.log(`Server is running at port ${process.env.PORT}`);
})