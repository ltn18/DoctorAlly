const mongoose = require("mongoose")
const Schema = mongoose.Schema

const VolunteerSchema = new Schema({
  meals: Boolean,
  drinks: Boolean,
  masks: Boolean,
  sanitizer:Boolean, 
  medicalSupplies: Boolean,
  petCare: Boolean,
  laundry: Boolean,
  other: String,
  idDoctor:String,
  fullName: {
    type:String,
    required:true
  },

  homeDistrict:{
    type:String,
    required:true
  },

  homeWard:{
    type:String,
    required:true
  },

  homeCity:{
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
  },
  signature:{
    type:String,
    required:true
  }
})

const VolunteerRequest = mongoose.model("Volunteer", VolunteerSchema)
module.exports = VolunteerRequest