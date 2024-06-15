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
exports.deleteParqueo = exports.updateParqueo = exports.createParqueo = exports.getParqueo = void 0;
const parqueo_repository_1 = require("../repositories/parqueo.repository");
const parqueoRepository = new parqueo_repository_1.ParqueoRepository();
const getParqueo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const parqueo = yield parqueoRepository.findAll();
    res.json(parqueo);
});
exports.getParqueo = getParqueo;
const createParqueo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { Parqueo, estado } = req.body;
    const parqueo = yield parqueoRepository.create({ Parqueo, estado });
    res.json(parqueo);
});
exports.createParqueo = createParqueo;
const updateParqueo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { Parqueo, estado } = req.body;
    const parqueo = yield parqueoRepository.update(id, { Parqueo, estado });
    res.json(parqueo);
});
exports.updateParqueo = updateParqueo;
const deleteParqueo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const parqueo = yield parqueoRepository.delete(id);
    res.json(parqueo);
});
exports.deleteParqueo = deleteParqueo;