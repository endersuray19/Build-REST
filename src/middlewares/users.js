"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUser = validateUser;
function validateUser(req, res, next) {
    const { operator, operator1, operator2 } = req.body;
    if (!operator || !operator1 || !operator2) {
        res.status(400).send({ message: 'Bad request' });
        return;
    }
    next();
}
