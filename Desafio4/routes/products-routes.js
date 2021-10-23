const {Router} = require('express');
const Container = require('../model/Container');

const container = new Container();
const router = Router();

router.post('/', async (req, res) => {
    let {title, price, thumbnail} = req.body;
    if(!thumbnail){
        thumbnail = `${title}.png`
    }
    const producto = {
        title,
        price,
        thumbnail
    }
    const id = await container.save(producto);
    producto.id = id;
    res.json({
        producto
    })
});

router.get('/', async (req, res) => {
    const products = await container.getAll();
    res.json({
        products
    })
});

router.get('/:id', async (req, res) => {
    const {id} = req.params;
    const product = await container.getById(id);
    if(!product){
        return res.status(400).json({
            error : 'producto no encontrado'
        })
    }
    res.json({
        product
    })
});

router.put('/:id', async (req, res) => {
    let {title, price, thumbnail} = req.body;
    if(!thumbnail){
        thumbnail = `${title}.png`
    }
    const {id} = req.params;
    const product = await container.updateProduct(id, {title, price, thumbnail});
    if(!product){
        return res.status(400).json({
            error : 'producto no encontrado'
        })
    }
    res.json({
        product
    })
})

router.delete('/:id', async (req, res) => {
    const {id} = req.params;
    const product = await container.deleteById(id);
    if(!product){
        return res.status(400).json({
            error : 'producto no encontrado'
        })
    }
    res.json({
        product
    })
})

module.exports = router;