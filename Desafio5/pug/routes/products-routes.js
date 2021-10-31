const {Router} = require('express');
const Container = require('../model/Container');

const container = new Container();
const router = Router();

router.post('/', async (req, res) => {
    let {title, price, thumbnail} = req.body;

    const producto = {
        title,
        price,
        thumbnail
    }
    const id = await container.save(producto);
    producto.id = id;
    return res.render('level')
});



router.get('/pug', (req, res) => {
    res.render('level');
});
router.get('/historial', async (req, res) => {
    const products = await container.getAll();
    res.render('historial', {products});
});




module.exports = router;