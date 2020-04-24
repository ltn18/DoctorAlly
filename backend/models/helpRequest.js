const mongoose = require("mongoose")
const Schema = mongoose.Schema

const HelpRequestSchema = new Schema({
  medicalSupplies:Boolean,
  masks: Boolean,
  sanitizer: Boolean,
  meals: Boolean,
  drinks: Boolean,
  laundry: Boolean,
  petCare:Boolean,
  other: String,
  describeRequest:String,
  work: [String],
  offerNumb: Number,

  fullName: {
    type:String,
    required:true
  },
  location:{
    type:String,
    required:true
  },
  medicalFacility:{
    type:String,
    required:true
  },
  jobTitle:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  phone:{
    type:Number,
    required:true
  }
})

const HelpRequest = mongoose.model("HelpRequest", HelpRequestSchema)
module.exports = HelpRequest