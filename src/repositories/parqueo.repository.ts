import prisma from '../datasources/vehiculo.datasource';
import { Parqueo } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';

export class ParqueoRepository {
  async findAll(): Promise<Parqueo[]> {
    return prisma.parqueo.findMany({ where: { estado: 'Activo' } });
  }

  async create(data: { Parqueo: string, Descripcion: string, estado: string }): Promise<Parqueo> {
    return prisma.parqueo.create({
      data: { Id: uuidv4(), ...data },
    });
  }

  async update(id: string, data: { Parqueo: string, Descripcion: string, estado: string }): Promise<Parqueo> {
    return prisma.parqueo.update({
      where: { Id: id },
      data,
    });
  }

  async delete(id: string): Promise<Parqueo> {
    return prisma.parqueo.update({
      where: { Id: id },
      data: { estado: 'Eliminado' },
    });
  }
}
