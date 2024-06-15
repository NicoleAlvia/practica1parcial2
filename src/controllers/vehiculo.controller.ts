import { Request, Response } from 'express';
import { VehiculoRepository } from '../repositories/vehiculo.repository';
import { describe } from 'node:test';

const vehiculoRepository = new VehiculoRepository();

export const getVehiculo = async (req: Request, res: Response) => {
  const vehiculos = await vehiculoRepository.findAll();
  res.json(vehiculos);
};

export const createVehiculo = async (req: Request, res: Response) => {
  const { Espacio_parqueoId, ParqueoId, Descripcion, Placa, estado } = req.body;
  const vehiculo = await vehiculoRepository.create({ Espacio_parqueoId, ParqueoId, Descripcion, Placa, estado });
  res.json(vehiculo);
};

export const updateVehiculo = async (req: Request, res: Response) => {
  const { Espacio_parqueoId, ParqueoId, Descripcion, Placa, estado } = req.body;
  const vehiculo = await vehiculoRepository.update({ Espacio_parqueoId, ParqueoId, Descripcion, Placa, estado });
  res.json(vehiculo);
};

export const deleteVehiculo = async (req: Request, res: Response) => {
    const { Espacio_parqueoId, ParqueoId, Descripcion, Placa, estado } = req.body;
    const vehiculo = await vehiculoRepository.delete({ Espacio_parqueoId, ParqueoId, Descripcion, Placa, estado });
    res.json(vehiculo);
  };