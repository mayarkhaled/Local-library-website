var mongoose = require('mongoose');
var moment = require('moment');

var schema = mongoose.Schema;
var AuthorSchema = new schema(
    {
        first_name : {type : String , required : true , maxlength : 100 },
        family_name : {type : String , required : true , maxlength : 100 },
        date_of_birth : {type : Date},
        date_of_death : {type : Date}, 
    }
);

//get user fullname
AuthorSchema.virtual('name').get(function(){
    var fullname = this.first_name + ' ' + this.family_name;
    return fullname;
});

//get user age
AuthorSchema.virtual('age').get(function(){
    var age = this.date_of_death + ' ' + this.date_of_birth;
    return age;
});

AuthorSchema.virtual('date_of_birth_formatted').get(function(){
    return moment(this.due_back).format('MMMM Do, YYYY');
})

AuthorSchema.virtual('date_of_death_formatted').get(function(){
    return moment(this.due_back).format('MMMM Do, YYYY');
  })

AuthorSchema.virtual('url').get(function () {
  return '/catalog/author/' + this._id;
});

module.exports = mongoose.model('Author' , AuthorSchema );