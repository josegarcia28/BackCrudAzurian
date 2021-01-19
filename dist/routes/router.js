"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = __importDefault(require("../controller/user"));
const router = express_1.Router();
router.post('/register', user_1.default.save);
router.get('/user/:id', user_1.default.detail);
router.get('/users/list', user_1.default.list);
router.put('/edit/:id', user_1.default.update);
router.delete('/remove/:id', user_1.default.delete);
exports.default = router;
