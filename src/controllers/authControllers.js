// fazer função de login
const UserSchema = require('../models/userSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const SECRET = process.env.SECRET;

const login = async (req, res) => {
    try {
        const user = await UserSchema.findOne({ email: req.body.email });
        console.log("User:", user);
        if (!user) {
            return res.status(404).send({
                message: 'Usuário não encontrado',
                email: `${req.body.email}`
            });
        }
        const validPassword = bcrypt.compareSync(req.body.password, user.password)
        console.log("User", user)
        if (!validPassword) {
            return res.status(401).send({
                message: "Senha invalida",
                statusCode: 401
            })
        }

        const token = jwt.sign({ name: user.name }, SECRET);
        console.log("Token gerado: ", token)
        res.status(200).send({
            message: "Login efetuado com sucesso",
            token
        })
    } catch (err) {
        console.error(err)
    }
}
module.exports = {
    login
};
