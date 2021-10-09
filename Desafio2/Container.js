const fs = require('fs');

class Container {
    constructor() {
        this.path = 'database.txt';
        this.id = 0;
    }
    async save (product = {}){
        let products;
        if(this.id === 0) {
            products = await this.getAll();
            if(products.length !== 0){
                const lastProduct = products[products.length-1];
                this.id = lastProduct.id + 1;
            }else{
                this.id = 1;
            }
        }
        product.id = this.id;
        this.id++;
        products.push(product);
        await fs.promises.writeFile(this.path, JSON.stringify(products));
    }

    async getById(id = 1){
        const products = await this.getAll();
        return products.find( product => product.id === id);
    }

    async getAll(){
        if(!fs.existsSync(this.path)){
            return [];
        }
        try {
            const data = await fs.promises.readFile(this.path, 'utf-8');
            return JSON.parse(data);
        }catch (e){
            await fs.promises.writeFile(this.path, JSON.stringify([]));
            return [];
        }
    }

    async deleteById (id = 1){
        let products = await this.getAll();
        let deleteProductId;
        if (products){
            products.map( (product, index) => {
                if(product.id === id){
                    deleteProductId = index;
                }
            });
        }
        products = products.slice(deleteProductId, 1);
        await fs.promises.writeFile(this.path, JSON.stringify(products));
    }

    async deleteAll(){
        await fs.promises.writeFile(this.path, JSON.stringify([]));
    }
}

module.exports = Container;