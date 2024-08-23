import sequelize from "../config/db.config";
import { QueryTypes } from "sequelize";

export const getprofile = async (req, res, next) => {
    try {    
        const { userid } = req.body;
        console.log(userid);
        const joinSection: any = await sequelize.query(
            `SELECT userid,first_name,last_name,mobilephone,balance
            FROM user_member
            WHERE userid = :userid
            `,
            {
            replacements: {
                userid: userid
            },
                type: QueryTypes.SELECT,
                raw: true,
            }
        );
        return res.status(200).json({
                code: 200,
                message: "Success",
                data: joinSection[0]
        });
    } catch (err) {
          next(err);
    }
}