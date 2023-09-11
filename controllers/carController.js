const { addCar, getCarAll, getCarById, deleteCarById, updateCarById, getAllCar } = require('../service/carService')
const createCar = async (req, res) => {
  try {
    console.log(req.body)
    const car = await addCar(req.body)
    if(car!=null){
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
const getCar = async (req, res) => {

  try {
    const cars = await getAllCar()
    res.status(200).json({ cars })
  } catch (error) {
    console.log(error)
  }
}

const getById = async (req, res) => {
  console.log('hittted'+req.params.id)
  try {
    const id = req.params.id
    const car = await getCarById(id)
    res.status(200).json({ car })
  } catch (err) {

  }
}
const updateCar = async (req, res) => {
  try {
    const id = req.params.id;
    const car = await getCarById(id);
    //console.log(id, car)
    if (car != null) {
      const newCar = {
        name: req.body.name
      };
      const options = { new: true };
      //console.log(newCar)
      const updatedCar = await updateById(id, newCar, options);
      res.status(200).json({ car: updatedCar });
    } else {
      res.status(400).json({ message: "Car not found" });
    }
  } catch (error) {
    //console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

const deleteCar = async (req, res) => {
  try {
    const id = req.params.id
    const car = await deleteCarById(id)
    res.status(200).json({ car })
  } catch (err) {

  }
}

module.exports = { createCar, getCar, updateCar, getCarById, deleteCar }