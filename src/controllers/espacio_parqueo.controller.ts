import { Request, Response } from 'express';
import { Espacio_parqueoRepository } from '../repositories/espacio_parqueo.repository';

const espacio_parqueoRepository = new Espacio_parqueoRepository();

export const getEspacio_parqueo = async (req: Request, res: Response) => {
  const espacio_parqueo = await espacio_parqueoRepository.findAll();
  res.json(espacio_parqueo);
};

export const createEspacio_parqueo = async (req: Request, res: Response) => {
  const { Descripcion, estado } = req.body;
  const espacio_parqueo = await espacio_parqueoRepository.create({ Descripcion, estado });
  res.json(espacio_parqueo);
};

export const updateEspacio_parqueo = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { Descripcion, estado } = req.body;
  const espacio_parqueo = await espacio_parqueoRepository.update(id, { Descripcion, estado });
  res.json(espacio_parqueo);
};

export const deleteEspacio_parqueo = async (req: Request, res: Response) => {
  const { id } = req.params;
  const espacio_parqueo = await espacio_parqueoRepository.delete(id);
  res.json(espacio_parqueo);
};
