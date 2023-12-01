const validateBody = joiSchema => async (req, res, next) => {
    try {
        await joiSchema.validateAsync(req.body);
        return next();
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = validateBody;
