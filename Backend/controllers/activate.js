const Account=require('../model/account.js')

const activation=async(req, res) => {
    try{
        const {email, status} = req.body;
        console.log(email);
        console.log(status);
        const user = await Account.findOne({email});
        
        user.status=false;
        if(status == "active")
        {
            user.status=true;
        }
        await user.save();

        res.status(200).json({
            message: "Successfully updated status"
        })

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

module.exports=activation;