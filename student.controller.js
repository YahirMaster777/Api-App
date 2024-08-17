import studentDao from "../daos/students.dao.js";

// co
export const getAll = async (req, res) => {
  studentDao.getAll().then((students) => {
      res.json(students);
    }).catch((error) => {
      res.json({ message: error });
    });
};

export const insertOne = (req, res) => {
  studentDao.insertOne(req.body).then((student) => {
      res.json(student);
    })
    .catch((error) => res.json({ message: error }));
};

export const getOne = (req, res) => {
    studentDao
        .getOne(req.params.id)
        .then(student => {
            student != null ? res.json(student) : res.json({message: "Estudiante no encontrado"})
            res.json(student)
        })
    .catch(error => console.log(error))
}
