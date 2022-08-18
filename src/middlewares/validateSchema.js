export default function validateSchema(schema) {
    return (req, res, next) => {
        const { body } = req;

        const { error } = schema.validate(body, { abortEarly: false});

        if (error) {
            return res.status(400).send("On validateSchema" + error.details.map(detail => detail.message));
        }

        next();
    }
}