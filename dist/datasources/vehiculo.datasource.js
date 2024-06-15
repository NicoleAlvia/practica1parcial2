"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/datasources/vehiculo.datasource.ts
const client_1 = require("@prisma/client");
const prismaVehiculo = new client_1.PrismaClient();
exports.default = prismaVehiculo;