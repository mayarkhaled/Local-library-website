var mongoose = require('mongoose');
const Author = require('./author');
const Genre = require('./genre');
var schema = mongoose.Schema;

var bookSchema = new schema({
    title : {type : String , required : true},
    author : {type : schema.Types.ObjectId , required : true , ref : Author},
    summary : {type : String , required : true},
    isbn : {type: String, required: true},
    genre : [{type: schema.Types.ObjectId, ref: Genre}]
});

bookSchema.virtual('url').get(function(){
    return '/catalog/book/' + this._id;
}); 

//Export model
module.exports = mongoose.model('Book', bookSchema);