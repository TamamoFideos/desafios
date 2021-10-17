const express = require('express');
const {request, response} = require("express");
const Container = require('../Desafio2/Container')

const app = express();
const container = new Container();


app.get('/productos', async (req = request, res = response) => {
    const products =  await container.getAll();
    res.json({
        products
    })
});

app.get('/productoRandom', async (req, res) => {
    const products = await container.getAll();
    const random = Math.floor(Math.random() * products.length)
    const producto = products[random];
    res.json({
        producto
    })
})

const PORT = 8080;
const server = app.listen(PORT, () =>{
    console.log('Servidor en el puerto: ',PORT);
})
