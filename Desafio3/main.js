const Container = require('./Container');

const container = new Container();

const product = {
    title: 'Galletas',
    price: 60,
    thumbnail : 'galletaimage.png'
}
/*container.save(product).then(() =>{
    console.log('El producto se guardo con exito')
});*/
container.deleteById(1).then(() =>{
    console.log('El producto se borro con exito');
});
