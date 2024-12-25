const validate = (schema) => async (req,res,next) => {
    try {
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next();
    } catch (err) {
        const status = 422;
        const message = "fill the details Properly";
        // console.log(err);
        const extraDetails= err.errors[0].message;
        // res.status(400).json({msg : msgs});
        const error = {
            status, message,extraDetails,
        };
        console.log(error);
        next(error);
    }
};

module.exports = validate;