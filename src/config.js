import { config } from "dotenv";

config();
//esto de abajo conecta a otra base de datos local, si el archivo .env no se encuentra con los datos de la abse de datos.
export const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/test";

  //exporta el puerto
  export const PORT = process.env.PORT || 3000;