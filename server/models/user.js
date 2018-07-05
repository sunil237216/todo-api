var mongoose = require('mongoose');
var User =  mongoose.model('User',{
    email:{
        type:String,
        required:true,
        minlength:1,
        trim:true
    },
    password:{
        type:String,
        required:true

    }
});

module.exports =  {User};