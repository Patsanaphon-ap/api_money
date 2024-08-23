import DataTypes  from 'sequelize';
import sequelize from "../config/db.config";

export const user_member = sequelize.define(
    "user_member", 
    {
        userid: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: true, 
        },
        firstname: {
            type: DataTypes.STRING,
            allowNull: true, 
        },
        mobilephone: {
            type: DataTypes.STRING,
            allowNull: true, 
        },
        balance: {
            type: DataTypes.DOUBLE,
            allowNull: true,
        },
        createat: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false,
        },
        updateat: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: null,
        }
    }, 
    {
        timestamps: false, 
        freezeTableName: true,
    },
);

