import prisma from '../datasources/vehiculo.datasource';
import { Vehiculo } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';

export class VehiculoRepository {
  async findAll(): Promise<Vehiculo[]> {
    return prisma.vehiculo.findMany({
      where: { estado: 'Activo' },
      include: { Espacio_parqueo: true, Parqueo: true },
    });
  }

  async create(data: { Espacio_parqueoId: string, ParqueoId: string, Descripcion: string, Placa: string, estado: string }): Promise<Vehiculo> {
    return prisma.vehiculo.create({
      data: {
        Id: uuidv4(),
        ...data,
        Espacio_parqueo: { connect: { Id: data.Espacio_parqueoId } },
        Parqueo: { connect: { Id: data.ParqueoId } },
      },
    });
  }
}
