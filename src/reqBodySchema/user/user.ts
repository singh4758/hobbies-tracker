import Joi from 'joi';

export const userPostSchema = Joi.object({
  name: Joi.string().required(),
});

export const getUsers = Joi.object({
  limit: Joi.number(),
  skip: Joi.number()
});