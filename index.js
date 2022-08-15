/*Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:

- Tu nombre (string)

- Tu edad (number)

- ¿Eres desarrollador? (boolean)

- Tu fecha de nacimiento (Date)

- Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)*/ 

 var arreglo = ['Camila Paz', 21, true, Date(2001, 3, 3)];
 const libro = {
     titulo : 'Harry Potter y el prisionero de Azkaban',
     autor : 'J.k. Rowling',
     fecha : Date(2004, 5, 11),
     url : 'https://es.wikipedia.org/wiki/Harry_Potter_y_el_prisionero_de_Azkaban_(pel%C3%ADcula)'
 }
 
 arreglo.push(libro);
 console.log(arreglo);