
const main = document.getElementById('main');

const sectionAdd = document.createElement('section');
const h1Add = document.createElement('h1');
h1Add.innerText = 'kichu List';
sectionAdd.appendChild(h1Add);

const ulAdd = document.createElement('ul');
const liAdd2 = document.createElement('li');
liAdd2.innerText = 'ami 2';
ulAdd.appendChild(liAdd2);

const liAdd3 = document.createElement('li');
liAdd3.innerText = 'ami 3';
ulAdd.appendChild(liAdd3);






// aita dara parent er maje chaild add kora 
main.appendChild(sectionAdd);
// tar porer onso add kora holo 
sectionAdd.appendChild(ulAdd);

