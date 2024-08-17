import mongoose from "mongoose";

mongoose
  .connect("mongodb+srv://yair:1234@marvin-215040.x3kti.mongodb.net/?retryWrites=true&w=majority&appName=Marvin-215040")
  .then(() => console.log("Conectado a mongodb")) //Se corrige el error en el mongodb atlas
  .catch((error) => console.log("Error al conectar", error));

export default mongoose