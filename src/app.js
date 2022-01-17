import express from "express";
import exphbs from "express-handlebars";
import { engine } from "express-handlebars";
import indexRoutes from "./routes/index.routes";
import path from "path";
import morgan from "morgan";

const app = express();

//Ubicacion de la carpeta views
app.set("views", path.join(__dirname, "views"));
//Esto permite utilizar archivos .hbs

//Motor de plantilla
app.engine(
  ".hbs",
  engine({
    //esto de abajo trae la ruta de donde viene el index - solo la primer linea
    layoutsDir: path.join(app.get("views"), "layouts"),
    //aca puedo ir cargando las carpetas que voy creando con los directorios, como partials
    partialsDir: path.join(app.get("views"), "partials"),
    defaultLayout: "main",
    extname: ".hbs",
  })
);

app.set("view engine", ".hbs");

//morgan me deja ver las peticiones en la consola
app.use(morgan('dev'));

//esto me trae lo los campos del formulario POST
app.use(express.urlencoded({ extended: false }));

//Rutas
app.use(indexRoutes);

//static files - utilizando el static diciendole que el directorio es "public".
app.use(express.static(path.join(__dirname, "public")));

export default app;
