"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const users = {
    name: "arunvasu",
    age: 22
};
app.get('/user/:id', (req, res) => {
    const { id } = req.params;
    res.json({
        userId: id
    });
});
app.get('/', (req, res) => {
    console.log(users);
    res.json(users);
});
app.listen(3000, () => {
    console.log('port is listeninng to 3000');
});
