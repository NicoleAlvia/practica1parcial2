"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehiculoRepository = void 0;
const vehiculo_datasource_1 = __importDefault(require("../datasources/vehiculo.datasource"));
const uuid_1 = require("uuid");
class VehiculoRepository {
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return vehiculo_datasource_1.default.registro.findMany({
                where: { estado: 'Activo' },
                include: { Espacio_parqueo: true, Parqueo: true },
            });
        });
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return vehiculo_datasource_1.default.vehiculo.create({
                data: Object.assign(Object.assign({ Id: (0, uuid_1.v4)() }, data), { Espacio_parqueo: { connect: { Id: data.Espacio_parqueoId } }, Parqueo: { connect: { Id: data.ParqueoId } } }),
            });
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return vehiculo_datasource_1.default.vehiculo.update({
                where: { Id: id },
                data: Object.assign(Object.assign({}, data), { Espacio_parqueo: { connect: { Id: data.Espacio_parqueoId } }, Parqueo: { connect: { Id: data.ParqueoId } } }),
            });
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return vehiculo_datasource_1.default.vehiculo.update({
                where: { Id: id },
                data: { estado: 'Eliminado' },
            });
        });
    }
}
exports.VehiculoRepository = VehiculoRepository;
