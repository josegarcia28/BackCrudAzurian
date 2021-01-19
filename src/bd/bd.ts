import {Sequelize} from "sequelize"

export const sequelize = new Sequelize('azurian_prueba', 'root', '', {
   host: 'localhost',
   dialect: 'mysql',
   logging: true
});