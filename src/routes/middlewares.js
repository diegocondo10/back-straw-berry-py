import { validationResult } from 'express-validator';

export const bodyValidator = (req, res, next) => {
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }
  next();
};

export const processQuery = (items = []) => {
  return items.map(processObject);
};

export const processObject = (item) => {
  const id = item._id;
  delete item._doc._id;
  return { id, ...item._doc };
};
