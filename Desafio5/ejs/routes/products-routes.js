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



router.get('/ejs', (req, res) => {
    res.render('inicio', {type : 'formulario'});
});

router.get('/historial', async (req, res) => {
    const products = await container.getAll();
    res.render('inicio',  {type : 'historial', products});
});




module.exports = router;