"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/datasources/espacio_parqueo.datasource.ts
const client_1 = require("@prisma/client");
const prismaEspacio_parqueo = new client_1.PrismaClient();
exports.default = prismaEspacio_parqueo;