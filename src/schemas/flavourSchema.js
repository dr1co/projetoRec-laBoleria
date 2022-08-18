import joi from 'joi';

const flavourSchema = joi.object({
    name: joi.string().required().min(2)
});

export default flavourSchema;