import {Router} from 'express';
import ProvinceService from './../services/province-service.js';


const router = Router();
const svc = new ProvinceService(); // Instanciación del service.



function ProvinceRouter() 
{
    router.get('/api/provinces', async (req, res) => {
        const returnArray = await svc.getAllAsync();
        if (returnArray != null){
            res.status(200).json(returnArray);
        } else {
            res.status(500).send(`Error interno.`);
        }
    });
    
    router.get('/api/province/:id', async (req, res) => {
        const id = ValidacionesHelper.getIntegerOrDefault(req.params.id, 0);
        const province = await svc.getByIdAsync(id);
        if(province){
            res.status(200).json(province);
        } else {
            res.status(404).send('Not Found');
        }
    });
    
    router.post('/api/province', async (req, res) => {
        const newProvince = req.body;
        const createdProvince = await svc.createAsync(newProvince);
        res.status(201).json(createdProvince);
    });
    
    router.put('/api/province/:id', async (req, res) => {
        const id = ValidacionesHelper.getIntegerOrDefault(req.params.id);
        const updatedProvince = await svc.updateAsync({ id, ...req.body });
        if (updatedProvince) {
            res.status(200).json(updatedProvince);
        } else {
            res.status(404).json({ error: "Provincia no encontrada" });
        }
    });
    
    router.delete('/api/province/:id', async (req, res) => {
        const id = ValidacionesHelper.getIntegerOrDefault(req.params.id);
        const deletedProvince = await svc.deleteByIdAsync(id);
        if (deletedProvince) {
            res.status(200).json({ message: "Provincia eliminada correctamente." });
        } else {
            res.status(404).json({ error: "Provincia no encontrada." });
        }
    });
}
export default ProvinceRouter


