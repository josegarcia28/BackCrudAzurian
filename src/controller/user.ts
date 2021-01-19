import { Request, Response } from 'express';
import validator from 'validator';
import User from '../model/user.model';

export default class UserController {
 
    static async save(req: Request, res: Response){
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
            try{
                let user = await User.create(params);
                if(user){
                    return res.status(200).send({
                        status: 'success',
                        mensaje: 'Se ha creado correctamente',
                        user
                    }); 
                } 
            } catch(error) {
                console.log(error);
                return res.status(400).send({
                    status: 'error',
                    mensaje: 'Error de creacion'
                }); 
            }

        //}
 
    }

    static async update(req: Request, res: Response){
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
            try{
                let user = await User.update(params,{where: {id: id}});
                if(user){
                    return res.status(200).send({
                        status: 'success',
                        mensaje: 'se ha actualizado correctamente',
                        user
                    }); 
                } else {
                    console.log('error');
                    return res.status(400).send({
                        status: 'error',
                        mensaje: 'Problemas al actualizar'
                    });
                }
            } catch(error) {
                console.log(error);
                return res.status(400).send({
                    status: 'error',
                    mensaje: 'Error en actualizacion'
                }); 
            }

        //}
 
    }

    static async delete(req: Request, res: Response){
        let id = req.params.id;
        try{
            let user = await User.destroy({where: {id: id}});
            if(user){
                return res.status(200).send({
                    status: 'success',
                    mensaje: 'se ha eliminado correctamente',
                    user
                }); 
            } else {
                console.log('error');
                return res.status(400).send({
                    status: 'error',
                    mensaje: 'Problemas al eliminar'
                });
            }
        } catch(error) {
            console.log(error);
            return res.status(400).send({
                status: 'error',
                mensaje: 'Error al eliminar'
            }); 
        }

    }

    static async list(req: Request, res: Response){
        try{
            let users = await User.findAll();
            return res.status(200).send({
                status: 'success',
                users
            });
        } catch (error){
            return res.status(400).send({
                status: 'error',
                mensaje: 'Error al listar'
            }); 
        }
       
    }

    static async detail(req: Request, res: Response){
        let id = req.params.id;
        try{
            let users = await User.findOne({where: {id: id}});
            return res.status(200).send({
                status: 'success',
                users
            });
        } catch (error){
            return res.status(400).send({
                status: 'error',
                mensaje: 'Error al listar'
            }); 
        }
       
    }

}