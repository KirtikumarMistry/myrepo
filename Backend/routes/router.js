const express=require('express');
const router=express.Router();

const signup=require('../controllers/registration.js');
const activation=require('../controllers/activate.js');

router.post("/signup", signup);
router.put("/activate", activation);

module.exports=router;