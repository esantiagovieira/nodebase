"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 8080 || process.env.PORT;
app.get("/", (req, res) => {
    res.send("Hi Motherfucker!");
});
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
exports.default = app;
//# sourceMappingURL=index.js.map