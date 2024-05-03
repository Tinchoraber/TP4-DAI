import provinces from '../entities/province';
import pkg from 'pg';
const { Client, Pool } = pkg;

export default class ProvinceRepository {
    getAllAsync = async () => {
        return provinces;
    }

    getByIdAsync = async (id) => {
        const province = provinces.find(province => province.id === id);
        return province ? province : null;
    }

    createAsync = async (entity) => {
        provinces.push(entity);
        return entity;
    }

    updateAsync = async (entity) => {
        const index = provinces.findIndex(province => province.id === entity.id);
        if (index !== -1) {
            provinces[index] = entity;
            return entity;
        } else {
            return null; // No se encontró la provincia para actualizar
        }
    }

    deleteByIdAsync = async (id) => {
        const index = provinces.findIndex(province => province.id === id);
        if (index !== -1) {
            const deletedProvince = provinces.splice(index, 1);
            return deletedProvince[0];
        } else {
            return null; // No se encontró la provincia para eliminar
        }
    }
}
