//fazer função de autenticação

const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;


exports.checkAuth = (req, res, next) => {
    const authHeader = req.get('authorization');
    if (!authHeader) {
        return res.status(401).send({
            message: 'Sem autorizacao',
            statusCode: 401
        });
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).send({
            message: "erro no token"
        })
    }//se não houver token, erro
    try {
        jwt.verify(token, SECRET, (err) => {
            if (err) {
                return res.status(401).send({
                    message: "Nao autorizado"
                })
            }//se der erro na verificação, retorna o erro
            next();
        })
    } catch (err) {
        console.error(err)
    }
}