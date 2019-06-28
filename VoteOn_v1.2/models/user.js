var mongoose              = require("mongoose"),
    passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: String,
    email : {type: String, unique: true, required: true},
    username: {type: String, unique: true, required: true},
    password : String,
    isAdmin :{type : Boolean, default: false},
    vote: {type : Boolean, default: false},
    privateKey: String,
    
});
UserSchema.plugin(passportLocalMongoose);
module.exports= mongoose.model("User", UserSchema);