import Service from '../models/Service';
import { Request, Response } from 'express';

export const getService = async (req: Request, res: Response) => {
    const service = await Service.findById(req.params.id);
    res.json(service);
}

export const createService = async (req: Request, res: Response) => {
    const newService = new Service(req.body);
    await newService.save();
    res.json({ message: 'Service created' });
}

export const updateService = async (req: Request, res: Response) => {
    await Service.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: 'Service updated' });
}

export const deleteService = async (req: Request, res: Response) => {
    await Service.findByIdAndDelete(req.params.id);
    res.json({ message: 'Service deleted' });
}