const express = require('express');
const app = express();
port = 4000;



const {body,validationResult} = require('express-validator');

app.use(express.json());

app.post("/user",[body("username").isEmail(),body("password").isLength({min: 5})],(req,res) =>{
    const erros = validationResult(req);
    if(!erros.isEmpty()){
        return res.status(400).json({erros: erros.array()});

    }
    res.json({msg:"sucesso"});
});


app.listen(port, () =>{
    console.log(`rodando na porta ${port}`);
})