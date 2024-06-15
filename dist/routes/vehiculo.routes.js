"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const vehiculo_controller_1 = require("../controllers/vehiculo.controller");
const router = (0, express_1.Router)();
router.get('/vehiculos', vehiculo_controller_1.getVehiculos);
router.post('/vehiculos', vehiculo_controller_1.createVehiculo);
router.put('/vehiculos/:id', vehiculo_controller_1.updateVehiculo);
router.delete('/vehiculos/:id', vehiculo_controller_1.deleteVehiculo);
exports.default = router;