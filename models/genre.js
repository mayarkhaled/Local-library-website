var mongoose = require('mongoose');

var schema = mongoose.Schema;

var genreschema = new schema({
    category : {type : String , required : true , minlength : 3 , maxlength : 100}
});


// Virtual for bookinstance's URL
genreschema.virtual('url')
.get(function () {
  return '/catalog/genre/' + this._id;
});

//Export model
module.exports = mongoose.model('Genre', genreschema);