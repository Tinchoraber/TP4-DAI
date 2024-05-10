import ProvinceRepository from '../repositories/province-repository.js';

export default class ProvinceService {
    // Clase con lógica de negocio.

    getAllAsync = async () => {
        const repo = new ProvinceRepository();
        const provincesArray = await repo.getAllAsync();
        let arrayRes;
        if (provincesArray != '') {
            arrayRes = [provincesArray, 200];
        }
        else {
            arrayRes = ["No hay provincias", 404];
        }
        return arrayRes;
    }

    getByIdAsync = async (id) => {
        const repo = new ProvinceRepository();
        const provincesArray = await repo.getByIdAsync(id);
        let arrayRes;
        if (provincesArray != '') {
            arrayRes = [provincesArray, 200];
        }
        else {
            arrayRes = ["No se encuentra la provincia", 404];
        }
        return arrayRes;
    }

    createAsync = async (body) => {
        const repo = new ProvinceRepository();
        let arrayRes = await repo.createAsync(body);
        return arrayRes;
    }

    updateAsync = async (entity) => {
        const repo = new ProvinceRepository();
        let arrayRes = await repo.updateAsync(entity);
        return arrayRes;
    }

    deleteByIdAsync = async (id) => {
        const repo = new ProvinceRepository();
        let arrayRes = await repo.deleteByIdAsync(id);
        return arrayRes;
    }
}
