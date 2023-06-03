import Joi from 'joi';

export const hobyPostSchema = Joi.object({
  hobbyName: Joi.string().required(),
  passionLevel: Joi.string().valid('Low', 'Medium', 'High', 'Very-High').required(),
  year: Joi.number().required(),
  userId: Joi.string().required(),
});

export const hobbyDeleteSchema = Joi.object({
  id: Joi.string().required(),
});