const express=require('express');
const cors=require('cors');
const app=express();

require("dotenv").config();
app.use(cors());
const port=process.env.PORT || 4000;

app.use(express.json());

const dbConnect=require('./config/database.js');
dbConnect();

const router=require('./routes/router.js');
const { updateOne } = require('./model/account.js');
app.use("/smp",router);

app.listen(port, (req,res) => {
    console.log(`Server is running on port ${port}`);
})



//%199zR85