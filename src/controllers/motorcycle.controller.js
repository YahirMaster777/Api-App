import motoDao from "../daos/motorcycle.dao.js";


// Devuelve todos las motocicletas que esten en la collecion
export const getAll = async (req, res) => {
  motoDao.getAll().then((motorcycles) => {
      res.json(motorcycles);
    }).catch((error) => {
      res.json({ message: error });
    });
};



// funcion para insertar una motocicleta la base de datos
export const insertOne = (req, res) => {
  motoDao.insertOne(req.body).then((motorcycle) => {
      res.json(motorcycle);
    })
    .catch((error) => res.json({ message: error }));
};

// Comprueba si la motocicleta existe y la envía como una respuesta JSON. Si la motocicleta no se encuentra,
// envía un mensaje de error personalizado como una respuesta JSON. Si se produce un error durante el proceso de recuperación, registra el error en la consola.
export const getOne = (req, res) => {
  motoDao.getOne(req.params.id).then(motorcycle => {
      motorcycle != null 
      ? res.json(motorcycle) // operador ternario regresa la motocicleta
      : res.json({ message: "Motocicleta no encontrada" }) // mensaje personalizado como json 
      res.json(motorcycle)
    })
    .catch(error => console.log(error))
}
