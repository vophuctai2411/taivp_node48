import initModels from "../models/init-models.js";
import connect from "../models/connect.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import transporter from "../config/transporter.js";
import {createAccessToken} from "../config/jwt.js"

const models = initModels(connect)

const register = async (req, res) => {
    try{
        const {full_name, email, pass_word} = req.body;
        const userExists = await models.users.findOne({
            where: {
                email: email
            }
        })

        if(userExists){
            res.status(400).json({message: "Tai khoan da ton tai"});
            return;
        }

        const hashPassword = bcrypt.hashSync(pass_word, 10)

        const result =  models.users.create({
            full_name: full_name,
            email: email,
            pass_word: hashPassword
        })

        //gui mail chao mung
        const welcomeMail = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Welcome to Our Website",
            html: `
            <h1>Welcome ${full_name} to our website</h1>
            `
        }

        transporter.sendMail(welcomeMail, (err, info)=> {
            if(err) return res.status(500).json({message: "Gui mail that bai"}, err);
            res.status(200).json("Gui mail thanh cong")
        })

       // res.send(result.toJson())

       } catch(error) {
        res.send(error)
    }
}

const login = async (req, res) => {
    try{
        const {email, pass_word} = req.body;
        const userExists = await models.users.findOne({
            where: {
                email: email
            }
        });

       
        if(!userExists){
            res.status(400).json({message: "Email chua ton tai de dang ki su dung"});
            return;
        }


        const isMatch = bcrypt.compareSync(pass_word, userExists.dataValues.pass_word)
        
        console.log(pass_word, userExists.dataValues, isMatch)
        if(!isMatch){
            res.status(400).json({message: "Tai khoan hoac Mat khau khong hop le"});
            return;
        }

        const payload = {
            userId: userExists.user_id
        }

        const accessToken = createAccessToken(payload)

        res.status(200).json({message: "dang nhap thanh cong", token: accessToken})


       } catch(error) {
        res.send(error)
    }
}

export {register, login}