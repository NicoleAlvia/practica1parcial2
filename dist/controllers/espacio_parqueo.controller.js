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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEspacio_parqueo = exports.updateEspacio_parqueo  = exports.createEspacio_parqueo = exports.getEspacio_parqueo = void 0;
const espacio_parqueo_repository_1 = require("../repositories/espacio_parqueo.repository");
const espacio_parqueoRepository = new espacio_parqueo_repository_1.Espacio_parqueoRepository();
const getEspacio_parqueo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const espacio_parqueo = yield espacio_parqueoRepository.findAll();
    res.json(espacio_parqueo);
});
exports.getEspacio_parqueo = getEspacio_parqueo;
const createEspacio_parqueo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { Descripcion, estado } = req.body;
    const espacio_parqueo = yield espacio_parqueoRepository.create({ Descripcion, estado });
    res.json(espacio_parqueo);
});
exports.createEspacio_parqueo = this.createEspacio_parqueo;
const updateEspacio_parqueo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { Descripcion, estado } = req.body;
    const espacio_parqueo = yield espacio_parqueoRepository.update(id, { Descripcion, estado });
    res.json(espacio_parqueo);
});
exports.updateEspacio_parqueo = updateEspacio_parqueo;
const deleteEspacio_parqueo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const espacio_parqueo = yield espacio_parqueoRepository.delete(id);
    res.json(espacio_parqueo);
});
exports.deleteEspacio_parqueo = deleteEspacio_parqueo;
