const mongoose = require("mongoose");

const podSchema = new mongoose.Schema({
  code:String,
  type: {
    type:String,
    enum:['small','large','espresso']
  },
  flavor:String,
  packageSize:String
});

const Pod=mongoose.model('Pod',podSchema);

module.exports.Pod=Pod;
