const { addResident, getResidentAll, getResidentById, deleteResidentById, updateResidentById, getAllResident } = require('../service/residentService')
const createResident = async (req, res) => {
  try {
    const resident = await addResident(req.body)
    if(resident!=null){
      res.status(200).json({ message: "add successfull" })
    }
    else{
      res.status(500).json({message:"something went wrong"})
    }
    // console.log(req.body)
  } catch (error) {
    console.log(error)
  }
}
const getResident = async (req, res) => {

  try {
    const residents = await getAllResident()
    res.status(200).json({ residents })
  } catch (error) {
    console.log(error)
  }
}

const getById = async (req, res) => {
  console.log('hittted'+req.params.id)
  try {
    const id = req.params.id
    const resident = await getResidentById(id)
    res.status(200).json({ resident })
  } catch (err) {

  }
}
const updateResident = async (req, res) => {
  try {
    const id = req.params.id;
    const resident = await getResidentById(id);
    //console.log(id, resident)
    if (resident != null) {
      const newResident = {
        name: req.body.name
      };
      const options = { new: true };
      //console.log(newResident)
      const updatedResident = await updateById(id, newResident, options);
      res.status(200).json({ resident: updatedResident });
    } else {
      res.status(400).json({ message: "Resident not found" });
    }
  } catch (error) {
    //console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

const deleteResident = async (req, res) => {
  try {
    const id = req.params.id
    const resident = await deleteResidentById(id)
    res.status(200).json({ resident })
  } catch (err) {

  }
}

module.exports = { createResident, getResident, updateResident, getResidentById, deleteResident }