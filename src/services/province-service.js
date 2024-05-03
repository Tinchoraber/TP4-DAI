import ProvinceRepository from '../repositories/province-repository.js';

export default class ProvinceService {
    // Clase con lógica de negocio.
    
    getAllAsync = async () => {
        const repo = new ProvinceRepository();
        const returnArray = await repo.getAllAsync();
        return returnArray;
    }

    getByIdAsync = async (id) => {
        const repo = new ProvinceRepository();
        const entity = await repo.getByIdAsync(id);
        return entity;
    }

    createAsync = async (entity) => {
        const repo = new ProvinceRepository();
        const createdEntity = await repo.createAsync(entity);
        return createdEntity;
    }

    updateAsync = async (entity) => {
        const repo = new ProvinceRepository();
        const updatedEntity = await repo.updateAsync(entity);
        return updatedEntity;
    }

    deleteByIdAsync = async (id) => {
        const repo = new ProvinceRepository();
        const deletedEntity = await repo.deleteByIdAsync(id);
        return deletedEntity;
    }
}
