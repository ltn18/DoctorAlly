const router = require("express").Router()
const HelpRequest = require("../models/helpRequest")

router.get("/",(req,res)=>{
  HelpRequest.find((err, help)=>{
    if(err){
      console.log(err)
    }
    else{
      res.json(help)
    }
  })
})

router.post("/",(req,res)=>{
  const data = req.body 

  const newData = Object.keys(data[0]).filter((key)=> data[0][key] == true)

  const helpRequest = new HelpRequest({
    medicalSupplies: data[0].medicalSupplies,
    masks: data[0].masks,
    sanitizer: data[0].sanitizer,
    meals: data[0].meals,
    drinks: data[0].drinks,
    laundry: data[0].laundry,
    petCare: data[0].petCare,
    other: data[0].other,
    work: newData,
    doctorId: data[0].doctorId,
    HelpRequestedVolunteer:newData,

    fullName: data[1].fullName,
    location: data[1].location,
    medicalFacility: data[1].medicalFacility,
    jobTitle: data[1].jobTitle,
    email: data[1].email,
    phone: data[1].phone
  })
  helpRequest.save()
})

module.exports = router