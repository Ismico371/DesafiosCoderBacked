class Usuario{
  constructor(nombre, apellido, mascotas, libros){
    this.nombre = nombre;
    this.apellido = apellido;
    this.mascotas = mascotas ||[];
    this.libros = libros||[];
  }
}

getFullname(){
  return console.log("Mi nombre completo es ${this.nombre}{this.apellido}");
}

addMascota(nuevaMascota){
  this.mascotas.push(nuevaMascota);
}

count.Mascota(){
  return console.log("La cantidad de mascotas es ${this.mascotas.length}");
}

addBook(nombre, autor){
  this.libros.push({nombre:nombre, autor;autor});
}

getBookNames(){
  const nombreLibro =[]
  this.libros.map(libro=>
                 nombreLibro.push(libro.nombre)
                 )
  return console.log("los libros son: ${nombreLibro}");
}

const usuario = new Usuario("Isaac", "Correa", ["Gato", "Perro"], [{nombre: "Fundacion e imperio", autor: "Isaac Asimov"}, {nombre: "Terapia", autor: "Sebastian Fitzek"}]);

usuario.getFullname();
usuario.addMascota("loro");
console.log(usuario.mascotas);
usuario.counMascota();
ususario.addBook("A sangre fría", "Thruman Capote");
usuario.getBookNames();
