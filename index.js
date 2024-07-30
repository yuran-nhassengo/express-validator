const express = require('express');
port = 4000;

const {body,validationResult} = require('express-validator');

app.use(express.json());



const app = express();

app.listen(port, () =>{
    console.log(`rodando na porta ${port}`);
})