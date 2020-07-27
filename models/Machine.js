const mongoose = require("mongoose");

const machineSchema = new mongoose.Schema({
  code:String,
  type: {
      type:String,
      enum:['small','large','espresso']
  },
  model:{
    type:String,
    enum:['base','premium','deluxe'],
  },
  waterLine:Boolean
});

const Machine=mongoose.model('Machine',machineSchema);

module.exports.Machine=Machine;
