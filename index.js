import express from "express";
import cors from "cors";
//import ProvinceRouter from "./src/controllers/province-controller.js"
import provinces from "./src/entities/province.js";
import ValidacionesHelper from "./src/helpers/validaciones-helper.js";
import validacionesHelper from "./src/helpers/validaciones-helper.js";
const app = express();
const port = 3000; // El puerto 3000 (http://localhost:3000)
// Agrego los Middlewares
app.use(cors()); // Middleware de CORS.
app.use(express.json()); // Middleware para parsear y comprender JSON.
//
// Endpoints (todos los Routers)
//
//app.use("/api/province", ProvinceRouter);
//
// Inicio el Server y lo pongo a escuchar.
//
app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})

app.get('/api/province', (req, res) => { 
    res.status(200).send(provinces);
})

app.get('/api/province/:id', (req, res) => { 
    const id = ValidacionesHelper.getIntegerOrDefault(req.params.id, 0);
    const province = provinces.find(province => province.id === id);
    if(province){
        res.status(200).send(province);
    }
    else{
        res.status(404).send('Not Found');
    }

    
})


app.post('/api/province', (req, res) => {
    let objRecibido = req.body;
    const newId = provinces.length + 1
    const nuevaProvincia = {
        "id": newId, 
        "name": ValidacionesHelper.getStringorDefault(objRecibido.name, ""),
        "full_name": ValidacionesHelper.getStringOrDefault(objRecibido.full_name,""),
        "latitude": ValidacionesHelper.getIntegerOrDefault(objRecibido.latitude, 0),
        "longitude": ValidacionesHelper.getIntegerOrDefault(objRecibido.longitude, 0),
        "display_order": ValidacionesHelper.getIntegerOrDefault(objRecibido.display_order, 0)
    }
    if(!objRecibido.name || objRecibido.name.length < 3){
        res.status(400).json({error: "El nombre de la provincia es obligatorio y debe tener al menos 3 caracteres."})
    }
    else{
         provinces.push(nuevaProvincia);
        res.status(201).json(nuevaProvincia);
    }
   
})

app.put('/api/province', (req, res) =>
{
    let objRecibido = req.body;
    const provinceUpdate = provinces.find(province => province.id === objRecibido.id);
    provinceUpdate.name = validacionesHelper.getStringOrDefault(objRecibido.name,"");
    provinceUpdate.full_name = validacionesHelper.getStringOrDefault(objRecibido.full_name,"");
    provinceUpdate.latitude = validacionesHelper.getIntegerOrDefault(objRecibido.latitude,0);
    provinceUpdate.longitude = validacionesHelper.getIntegerOrDefault(objRecibido.longitude,0);
    provinceUpdate.display_order = validacionesHelper.getIntegerOrDefault(objRecibido.display_order,0);
    if (!provinceUpdate) {
        res.status(404).json({ error: "Provincia no encontrada" });
    }
    if(!objRecibido.name || objRecibido.name.length < 3){
        res.status(400).json({error: "El nombre de la provincia es obligatorio y debe tener al menos 3 caracteres."})
    }
    else{
        res.status(201).json(provinceUpdate);
    }
    
})

app.delete('/api/province/:id', (req, res) =>
{
    const id = validacionesHelper.getIntegerOrDefault(req.params.id);

    const index = provinces.findIndex(province => province.id === id);
    
    if (index !== -1) {
        provinces.splice(index, 1);
        res.status(200).json({ message: "Provincia eliminada correctamente." });
    } else {
        res.status(404).json({ error: "Provincia no encontrada." });
    }
})