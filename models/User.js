const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    email: {type: String, require: true, unique: true},
    password: {type: String, require: true,},
    //!
    basket: [{type:Types.ObjectId}, ]
})
module.exports = model("User", schema)