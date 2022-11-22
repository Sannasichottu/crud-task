const express = require("express");
const router = express.Router();
const User = require("./userSchema");

//create
router.post("/create",async(req,res) => {
    console.log(req.body)
    var data = new User({
        firstname: req.body.firstname,
        middlename: req.body.middlename,
        lastname : req.body.lastname,
        dob : req.body.dob,
        email : req.body.email,
        phone : req.body.phone,
        occupation : req.body.occupation,
        company : req.body.company
    })
    await data.save()
    res.json(data)
})

//get all
router.get("/",async(req,res)=> {
    var all = await User.find()
    res.json(all)
})

//update
router.put("/update",async(req,res)=> {
    var update = await User.updateOne
    ({_id:req.body._id},{
        $set: {
            firstname: req.body.firstname,
        middlename: req.body.middlename,
        lastname : req.body.lastname,
        dob : req.body.dob,
        email : req.body.email,
        phone : req.body.phone,
        occupation : req.body.occupation,
        company : req.body.company
        }
    })
    res.json(update)
})


//delete
router.delete("/delete/:id",async(req,res)=> {
    console.log(req.params)
    var delData = await User.findByIdAndRemove({_id:req.params.id}).then(()=>{
        res.json("User deleted")
    })
})

module.exports = router;