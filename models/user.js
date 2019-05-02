var mongoose = require ('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');


var User = new Schema ({

    firstname: {
      type: String,
        default: ''
    },
    lastname: {
      type: String,
        default: ''
    },
    admin:   {
        type: Boolean,
        default: false
    }
});

// Add in username and password support
User.plugin(passportLocalMongoose);

//Export Schemaname, Schema
module.exports = mongoose.model('User', User);