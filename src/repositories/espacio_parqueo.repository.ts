import prisma from '../datasources/espacio_parqueo.datasource';
import { Espacio_parqueo } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';

export class Espacio_parqueoRepositoryRepository {
  async findAll(): Promise<Espacio_parqueo[]> {
    return prisma.espacio_parqueo.findMany({ where: { estado: 'Activo' } });
  }

  async create(data: { Descripcion: string, estado: string }): Promise<Espacio_parqueo> {
    return prisma.espacio_parqueo.create({
      data: { Id: uuidv4(), ...data },
    });
  }

  async update(id: string, data: { Descripcion: string, estado: string }): Promise<Espacio_parqueo> {
    return prisma.espacio_parqueo.update({
      where: { Id: id },
      data,
    });
  }

  async delete(id: string): Promise<Espacio_parqueo> {
    return prisma.espacio_parqueo.update({
      where: { Id: id },
      data: { estado: 'Eliminado' },
    });
  }
}
