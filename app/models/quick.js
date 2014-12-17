// app/models/quick.js
// grab the mongoose module
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// define our nums model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('World',
  new Schema({ id : Number, randomNumber: Number } )
  , 'World');
