"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = __importDefault(require("../model/user.model"));
class UserController {
    static save(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var params = req.body;
            // try{
            //     var val_name = !validator.isEmpty(params.name);
            //     var val_edad = !validator.isEmpty(params.edad);
            //     var val_username = !validator.isEmpty(params.username);
            // } catch(err) {
            //     return res.json({
            //         status: 'Faltan datos por enviar'
            //     });
            // }
            // if(val_name && val_edad && val_username){
            console.log(params.name);
            try {
                let user = yield user_model_1.default.create(params);
                if (user) {
                    return res.status(200).send({
                        status: 'success',
                        mensaje: 'Se ha creado correctamente',
                        user
                    });
                }
            }
            catch (error) {
                console.log(error);
                return res.status(400).send({
                    status: 'error',
                    mensaje: 'Error de creacion'
                });
            }
            //}
        });
    }
    static update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let params = req.body;
            let id = req.params.id;
            // try{
            //     var val_name = !validator.isEmpty(params.name);
            //     var val_edad = !validator.isEmpty(params.edad);
            //     var val_username = !validator.isEmpty(params.username);
            // } catch(err) {
            //     return res.json({
            //         status: 'Faltan datos por enviar'
            //     });
            // }
            // if(val_name && val_edad && val_username){
            //console.log(params.name);
            try {
                let user = yield user_model_1.default.update(params, { where: { id: id } });
                if (user) {
                    return res.status(200).send({
                        status: 'success',
                        mensaje: 'se ha actualizado correctamente',
                        user
                    });
                }
                else {
                    console.log('error');
                    return res.status(400).send({
                        status: 'error',
                        mensaje: 'Problemas al actualizar'
                    });
                }
            }
            catch (error) {
                console.log(error);
                return res.status(400).send({
                    status: 'error',
                    mensaje: 'Error en actualizacion'
                });
            }
            //}
        });
    }
    static delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let id = req.params.id;
            try {
                let user = yield user_model_1.default.destroy({ where: { id: id } });
                if (user) {
                    return res.status(200).send({
                        status: 'success',
                        mensaje: 'se ha eliminado correctamente',
                        user
                    });
                }
                else {
                    console.log('error');
                    return res.status(400).send({
                        status: 'error',
                        mensaje: 'Problemas al eliminar'
                    });
                }
            }
            catch (error) {
                console.log(error);
                return res.status(400).send({
                    status: 'error',
                    mensaje: 'Error al eliminar'
                });
            }
        });
    }
    static list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let users = yield user_model_1.default.findAll();
                return res.status(200).send({
                    status: 'success',
                    users
                });
            }
            catch (error) {
                return res.status(400).send({
                    status: 'error',
                    mensaje: 'Error al listar'
                });
            }
        });
    }
    static detail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let id = req.params.id;
            try {
                let users = yield user_model_1.default.findOne({ where: { id: id } });
                return res.status(200).send({
                    status: 'success',
                    users
                });
            }
            catch (error) {
                return res.status(400).send({
                    status: 'error',
                    mensaje: 'Error al listar'
                });
            }
        });
    }
}
exports.default = UserController;
