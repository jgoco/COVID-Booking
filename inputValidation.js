const joi = require('@hapi/joi');

const registrationValidation = (formData) => {
    const registrationSchema = joi.object({
        firstName: joi.string().required(),
        lastName: joi.string().required(),
        email: joi.string().min(6).max(1024).required().email(),
        password: joi.string().min(6).max(1024).required(),
        registeredDate: joi.string()
    });
    return registrationSchema.validate(formData);
};

const loginValidation = (formData) => {
    const loginSchema = joi.object({
        email: joi.string().min(6).max(1024).required().email(),
        password: joi.string().min(6).max(1024).required()
    });
    return loginSchema.validate(formData);
}

module.exports.registrationValidation = registrationValidation;
module.exports.loginValidation = loginValidation;