const express = require('express');
const app = express();
port = 4000;



const {body,validationResult} = require('express-validator');

app.use(express.json());

app.post("/validator-with-msg",[body("username").isEmail().withMessage("Não é um email valido"),
    body("password").isLength({min: 5}).withMessage("A senha deve conter no minimo 5 caracteres")],(req,res) =>{
    const erros = validationResult(req);
    if(!erros.isEmpty()){
        return res.status(400).json({erros: erros.array()});

    }
    res.json({msg:"sucesso"});
});

app.post("/user",[body("username").isEmail(),body("password").isLength({min: 5})],(req,res) =>{
    const erros = validationResult(req);
    if(!erros.isEmpty()){
        return res.status(400).json({erros: erros.array()});

    }
    res.json({msg:"sucesso"});
});

app.post("/custom-validator",[body("username").custom(value =>{

    if(value == 'yuran@gmail.com'){
        return Promise.reject("Ja existe uma Conta com esse Email")
    }

    })],(req,res) =>{
    const erros = validationResult(req);
    if(!erros.isEmpty()){
        return res.status(400).json({erros: erros.array()});

    }
    res.json({msg:"sucesso"});
});


app.listen(port, () =>{
    console.log(`rodando na porta ${port}`);
})