const { addRentRequest, getAll, getRequestById, deleteById, updateById } = require('../service/rentRequestService')
const {getCarById,updateCarById} = require('../service/carService')

const createRentRequest = async (req, res) => {
  try {
    const rentRequest = await addRentRequest(req.body)
    if(rentRequest!=null){
      const car = await getCarById(rentRequest.carId)
      car.reqCount++
      console.log(car)
      const options = { new: true };
      const updateCar = await updateCarById(car._id, car, options)
      res.status(200).json(rentRequest)
    }
    else{
      res.status(500).json({message:"something went wrong"})
    }
  } catch (error) {
    console.log(error)
  }
}
const getRentRequest = async (req, res) => {

  try {
    const rentRequests = await getAll()
    rentRequests.forEach(rentRequest => {
      const url = `http://localhost:3000/uploads/rentRequests/${rentRequest.image}`;
      rentRequest.image = url;
    });
    res.status(200).json({ rentRequests })
  } catch (error) {
    console.log(error)
  }
}

const getRentRequestById = async (req, res) => {
  console.log('hittted'+req.params.id)
  try {
    const id = req.params.id
    const rentRequest = await getRequestById(id)
    const url = `http://localhost:3000/uploads/rentRequests/`+rentRequest.image
    rentRequest.image=url
    res.status(200).json({ rentRequest })
  } catch (err) {

  }
}
const updateRentRequest = async (req, res) => {
  try {
    const id = req.params.id;
    const rentRequest = await getRequestById(id);
    //console.log(id, rentRequest)
    if (rentRequest != null) {
      const newRentRequest = {
        name: req.body.name
      };
      const options = { new: true };
      //console.log(newRentRequest)
      const updatedRentRequest = await updateById(id, newRentRequest, options);
      res.status(200).json({ rentRequest: updatedRentRequest });
    } else {
      res.status(400).json({ message: "RentRequest not found" });
    }
  } catch (error) {
    //console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

const deleteRentRequest = async (req, res) => {
  try {
    const id = req.params.id
    const rentRequest = await deleteById(id)
    res.status(200).json({ rentRequest })
  } catch (err) {

  }
}

module.exports = { createRentRequest, getRentRequest, updateRentRequest, getRentRequestById, deleteRentRequest }