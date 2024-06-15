import { Request, Response } from 'express';
import { ParqueoRepository } from '../repositories/parqueo.repository';

const parqueoRepository = new ParqueoRepository();

export const getParqueo = async (req: Request, res: Response) => {
  const parqueo = await parqueoRepository.findAll();
  res.json(parqueo);
};

export const createParqueo = async (req: Request, res: Response) => {
  const { Parqueo,  estado } = req.body;
  const parqueo = await parqueoRepository.create({ Parqueo, estado });
  res.json(parqueo);
};

export const updateParqueo = async (req: Request, res: Response) => {
  const { Parqueo,  estado } = req.body;
  const parqueo = await parqueoRepository.update({ Parqueo, estado });
  res.json(parqueo);
};

export const deleteParqueo = async (req: Request, res: Response) => {
    const { Parqueo,  estado } = req.body;
    const parqueo = await parqueoRepository.delete({ Parqueo, estado });
    res.json(parqueo);
  };
  