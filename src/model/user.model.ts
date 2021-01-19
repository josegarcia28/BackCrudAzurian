import { Model, DataTypes } from "sequelize";
import { sequelize } from '../bd/bd';

interface UserInstance {
    id?: number | null
    nombre: string
    edad: number
    username: string
}
export default class User extends Model implements UserInstance{
    public id!: number; 
    public nombre!: string;
    public edad!: number
    public username!: string
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
          }, 
        nombre: {
            type: new DataTypes.STRING(128),
            allowNull: false,
        },
        edad: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        username: {
            type: new DataTypes.STRING(128),
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: "users",
        timestamps: false
    }
)