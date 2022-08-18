import joi from 'joi';

const cakeSchema = joi.object({
    flavourId: joi.number().required(),
    name: joi.string().min(2),
    price: joi.number().greater(0),
    image: joi.string().required(),
    description: joi.string()
});

export default cakeSchema;