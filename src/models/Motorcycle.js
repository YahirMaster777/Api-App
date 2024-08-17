import { Schema, model } from "mongoose";

//Definicion del Schema
const MotoSchema = new Schema(
  {
    moto_id: {// id de la motocicleta
      type: Number,
      required: true,
      unique: true,
    },
    brand: String,// Marca o compañia que la fabrica
    model: String,// modelo de la moto 
    cc: Number, // Cilindrada del motor
    year:Date, //año de fabricacion
    vin:String //vin o numero de serie de la moto
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

//Exportando el modelo
export default model("motorcycle", MotoSchema);
