import Motorcycle from "../models/Motorcycle.js";

const motoDao = {};

//Devuelve todas las colleciones
motoDao.getAll = async () => {
  return await Motorcycle.find();
};


//funcion que se utiliza para crear una nueva collecion
motoDao.insertOne = async motorcycle => {
    return await Motorcycle.create(motorcycle)
}

//Funcion que se utiliza para buscar una collecion por id
motoDao.getOne = async id => {
    return await Motorcycle.findOne({moto_id: id})
}

export default motoDao;