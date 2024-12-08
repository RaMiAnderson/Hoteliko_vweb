const express = require('express');
const app = express();



// Middleware pour parser les données POST
app.use(express.urlencoded({ extended: true }));
// Middleware pour parser les JSON
app.use(express.json());
// Middleware pour Cors
const cors = require("cors");
app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    Credential: true
}));




//DATABASE
const {initDataBase} = require("./database/databaseConnector");
initDataBase();


//Route

const routes = require("./routes/routes");
const { errorMiddleware } = require('./middlewares/errorHandler');
app.use(routes);


app.get("/", (req, res) => {
    res.send("Hello world");
});


//add Tmp Admin
    /*const addAdmin = require("./controller/addAdminController");
    let tmpAdmin = {
        Nom : "Rakoto",
        Prenom : "Rabe",
        Genre : "Homme",
        Username : "RakRabe",
        Password: "Rab1234#"
    } 
    addAdmin.addAdminCtrller(tmpAdmin);*/


//Port app 
app.use(errorMiddleware)
let port = process.env.PORT || 8011;
app.listen(port, ()=>  {
    console.log("Server in http://localhost:" + port);
});