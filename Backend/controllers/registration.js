const Account=require('../model/account.js');
const bcrypt=require('bcrypt');

const signup = async(req, res) => {
    try {
        const {password, email, name} = req.body;
        const atIndex = email.indexOf('@');
        const username = email.substring(0, atIndex);

        await Account.create({username,password,email,name});
        
        res.status(200).json({
            success: true,
            message: 'Signed Up successfully',
        });
    }
    catch(err)
    {
        console.log(err);
        res.status(400).json({
            success: false,
            message: 'Something went wrong',
    });
    }
}

module.exports=signup;