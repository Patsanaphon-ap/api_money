import { DataTypes } from 'sequelize';
import sequelize from "../config/db.config";

export const CountryExchangeRate = sequelize.define('CountryExchangeRate', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  period: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  currency_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  country_name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  currency_name_th: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  currency_name_eng: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  buying_sight: {
    type: DataTypes.DOUBLE,
    allowNull: true,
  },
  buying_transfer: {
    type: DataTypes.DOUBLE,
    allowNull: true,
  },
  selling: {
    type: DataTypes.DOUBLE,
    allowNull: true,
  },
  flag_path: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  is_active: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
  create_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  update_at: {
    type: DataTypes.DATE,
    allowNull: true,
  },
}, {
  tableName: 'country_exchange_rate',
  timestamps: false,
});
