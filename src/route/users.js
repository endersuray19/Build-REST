"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const middlewares_1 = require("../middlewares");
exports.router = (0, express_1.Router)();
exports.router.use(middlewares_1.logger);
exports.router.get('/', middlewares_1.logger, middlewares_1.logger, (req, res) => {
    res.send({ message: 'get all data', timestamp: req.timestamp, data: [{ id: 1, result: 1 }, { id: 2, result: 2 }] });
});
exports.router.get('/users/:id', middlewares_1.logger, middlewares_1.logger, (req, res) => {
    res.send({
        message: 'get data by id',
        timestamp: req.timestamp,
        id: req.params.id,
        result: 1,
    });
});
exports.router.post('/', middlewares_1.validateUser, (req, res) => {
    const { operator, operator1, operator2 } = req.body;
    let result;
    switch (operator) {
        case '+':
            result = operator1 + operator2;
            break;
        case '-':
            result = operator1 - operator2;
            break;
        case '*':
            result = operator1 * operator2;
            break;
        case '/':
            result = operator1 / operator2;
            break;
    }
    console.log(req.body);
    res.send({
        message: 'Create a User',
        timestamp: req.timestamp,
        result,
    });
});
