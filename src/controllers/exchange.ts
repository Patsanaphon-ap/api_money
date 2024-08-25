import { CountryExchangeRate } from "../models";
import sequelize from "../config/db.config";
import { QueryTypes } from "sequelize";

export const getExchangeRate = async (req,res,next) => {
    try{
        const countryExchangeRate: any = await CountryExchangeRate.findAll({
            attributes: ['period','currency_id', 'country_name','currency_name_th','currency_name_eng','buying_sight','buying_transfer','selling','flag_path'],
            where: {
                is_active: true,
              },
        });
        return res.status(200).json({
            code: 200,
            message: "Success",
            data: countryExchangeRate
    });
    }catch(e){
        console.log(e)
    }
}

export const getHistory = async (req,res,next) => {
    try{
        const { keyword ,page,limit } = req.body;
        const getPerpage: any = await sequelize.query(
            `SELECT *
                        FROM history_transaction ht
                        WHERE ht.sender_id = :keyword OR receiver_id = :keyword
                        Order by ht.transaction_date DESC
                        LIMIT :limit OFFSET :offset;`,
            {
              replacements: {
                keyword: keyword,
                offset: (page - 1) * limit,
                limit: Number(limit),
              },
              type: QueryTypes.SELECT,
              raw: true,
            }
          );
          return res.status(200).json({
            code: 200,
            message: "Success",
            data: getPerpage
    });
    }catch(e){
        console.log(e);
        return res.status(400).json({
            code: 400,
            message: "Error"
     });
    }
}