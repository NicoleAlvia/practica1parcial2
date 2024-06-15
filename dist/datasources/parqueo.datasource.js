"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/datasources/parqueo.datasource.ts
const client_1 = require("@prisma/client");
const prismaParqueo = new client_1.PrismaClient();
exports.default = prismaParqueo;