class Usuario {
    constructor(nombre, apellido, libros = [], mascotas = []) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullname (){
        return `${this.nombre} ${this.apellido}`
    }

    addMascota(nombre= ''){
        this.mascotas.push(nombre);
    }

    countMascotas(){
        return this.mascotas.length;
    }

    addBook(nombre= '', autor = ''){
        this.libros.push({nombre, autor});
    }

    getBookNames(){
        return this.libros.map((ob)=> {
            return ob.nombre;
        })
    }
}


const user = new Usuario('Adrian', 'Llanos', [{nombre: 'Libro', autor: 'Bele'}], ['Joaquin', 'Cremoso', 'Kiss']);

user.addBook('Castigo', 'Romer');
user.addBook('Maze', 'August');
user.addMascota('Gatillo');

console.log(user.getFullname());
console.log(user.countMascotas());
console.log(user.getBookNames());