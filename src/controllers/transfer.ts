import sequelize from "../config/db.config";
import { HistoryTransaction,user_member } from "../models";
import { QueryTypes } from "sequelize";



export const getReceiverProfile = async (req, res, next) => {
    try {    
        const { receiverid,} = req.body;
        const t = await sequelize.transaction();

        // update sender amount
        const userprofile: any = await sequelize.query(
            `SELECT first_name
            FROM user_member
            WHERE userid = :receiverid `,
            {
                replacements: {
                    receiverid: receiverid,
                },
                type: QueryTypes.SELECT,
                raw: true,
            }
          );
        return res.status(200).json({
            code: 200,
            message: "Success",
            data: userprofile[0]
        });
      
    } catch (err) {
          next(err);
    }
}

export const gettransfer = async (req, res, next) => {
    try {    
        const { sendid ,receieveid ,amount ,description} = req.body;
        const t = await sequelize.transaction();

        // update sender amount
        const [senderResult]  = await sequelize.transaction(function (t) {
            return  user_member.update(
                { balance: sequelize.literal(`balance - ${amount}`), updateat: sequelize.literal('CURRENT_TIMESTAMP') },
                { where: { userid: sendid }, transaction: t }
            );
        });

        if (senderResult === 0) {
            throw new Error('Sender not found or insufficient funds');
        }

        // Add amount to the receiver
        const [receiverResult] = await user_member.update(
            { balance: sequelize.literal(`balance + ${amount}`), updateat: sequelize.literal('CURRENT_TIMESTAMP') },
            { where: { userid: receieveid }, transaction: t }
        );

        if (receiverResult === 0) {
            throw new Error('Receiver not found');
        }

        // Insert into history_transaction
        await sequelize.transaction(function (t) {
            return  HistoryTransaction.create({
                sender_id: sendid,
                receiver_id: receieveid,
                amount: amount,
                description: description
            });
        });

        const userprofile: any = await sequelize.query(
            `SELECT userid, first_name, balance
            FROM user_member
            WHERE userid = :sendid `,
            {
                replacements: {
                    sendid: sendid,
                },
                type: QueryTypes.SELECT,
                raw: true,
            }
          );

          const receiverprofile: any = await sequelize.query(
            `SELECT userid, first_name
            FROM user_member
            WHERE userid = :receiverid `,
            {
                replacements: {
                    receiverid: receieveid,
                },
                type: QueryTypes.SELECT,
                raw: true,
            }
          );

        if (receiverResult === 0) {
            throw new Error('Receiver not found');
        }

        // Commit the transaction
        await t.commit();
        console.log(userprofile)
        let data = {
            sendid: userprofile[0].userid,
            sendName: userprofile[0].first_name,
            current: userprofile[0].balance,
            receiverid: receiverprofile[0].userid,
            receiverName: receiverprofile[0].first_name,
            sendamount: amount,
        };

        return res.status(200).json({
            code: 200,
            message: "Success",
            data: data
        });
      
    } catch (err) {
        console.log(err)
        return res.status(400).json({
            code: 400,
            message: err,
        })
    }
}