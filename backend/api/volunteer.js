const router = require("express").Router();
const VolunteerRequest = require("../models/volunteer");

router.get("/", (req, res) => {
  console.log(req.body);
  VolunteerRequest.find((err, help) => {
    if (err) {
      console.log(err);
    } else {
      res.json(help);
    }
  });
});

router.post("/", (req, res) => {
  const data = req.body;
  console.log(data);
  // const newData = Object.keys(data[0]).filter((key)=> data[0][key] == true)
  const volunteerRequest = new VolunteerRequest({
    meals: data[0].meals,
    drinks: data[0].drinks,
    masks: data[0].masks,
    sanitizer: data[0].sanitizer,
    medicalSupplies: data[0].medicalSupplies,
    petCare: data[0].petCare,
    laundry: data[0].laundry,
    other: data[0].other,

    fullName: data[1].fullName,
    homeDistrict: data[1].homeDistrict,
    homeWard: data[1].homeWard,
    homeCity: data[1].homeCity,
    email: data[1].email,
    phone: data[1].phone,
    signature: data[1].signature,
    idDoctor: data[1].idDoctor,
  });
  volunteerRequest.save();
});

module.exports = router;
