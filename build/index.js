"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const logger_1 = __importDefault(require("./middleware/logger"));
const imageUtils_1 = require("./utils/imageUtils");
const app = (0, express_1.default)();
const port = 3000;
app.get('/api/images', logger_1.default, (req, res) => {
    (0, imageUtils_1.resizeImage)(req.query.filename, {
        size: {
            width: Number.parseInt(req.query.width) || 200,
            height: Number.parseInt(req.query.height) || 200,
        },
    })
        .then((file) => {
        res.sendFile(file);
    })
        .catch((err) => {
        res.status(400).send(err.message);
    });
});
app.listen(port, () => {
    console.log(`server started at localhost:${port}`);
});
