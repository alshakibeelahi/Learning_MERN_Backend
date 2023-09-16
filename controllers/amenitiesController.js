const { addAmenities, getAmenitiesAll, getAmenitiesById, deleteAmenitiesById, updateAmenitiesById, getAllAmenities } = require('../service/amenitiesService')
const createAmenities = async (req, res) => {
  try {
    console.log(req.body)
    const amenities = await addAmenities(req.body)
    if(amenities!=null){
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
const getAmenities = async (req, res) => {

  try {
    const amenitiess = await getAllAmenities()
    res.status(200).json({ amenitiess })
  } catch (error) {
    console.log(error)
  }
}

const getById = async (req, res) => {
  console.log('hittted'+req.params.id)
  try {
    const id = req.params.id
    const amenities = await getAmenitiesById(id)
    res.status(200).json({ amenities })
  } catch (err) {

  }
}
const updateAmenities = async (req, res) => {
  try {
    const id = req.params.id;
    const amenities = await getAmenitiesById(id);
    //console.log(id, amenities)
    if (amenities != null) {
      const newAmenities = {
        name: req.body.name
      };
      const options = { new: true };
      //console.log(newAmenities)
      const updatedAmenities = await updateById(id, newAmenities, options);
      res.status(200).json({ amenities: updatedAmenities });
    } else {
      res.status(400).json({ message: "Amenities not found" });
    }
  } catch (error) {
    //console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

const deleteAmenities = async (req, res) => {
  try {
    const id = req.params.id
    const amenities = await deleteAmenitiesById(id)
    res.status(200).json({ amenities })
  } catch (err) {

  }
}

module.exports = { createAmenities, getAmenities, updateAmenities, getAmenitiesById, deleteAmenities }