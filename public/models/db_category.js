var mongoose = require('mongoose');   // ican make a model AND USE DB FUNCTIONS?????? WTF

schema = mongoose.Schema({

title : {
type : String, required: true
},

slug : {
type : String, required: true
}

});
 module.exports = mongoose.model('category_database',schema);
