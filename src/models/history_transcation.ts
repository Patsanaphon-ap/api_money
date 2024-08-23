import { DataTypes } from 'sequelize';
import sequelize from "../config/db.config";

export const HistoryTransaction = sequelize.define('HistoryTransaction', {
    transaction_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    sender_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    receiver_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    amount: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true, // Optional field
    },
    transaction_date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
    }
}, {
    tableName: 'history_transaction',
    timestamps: false, 
});
