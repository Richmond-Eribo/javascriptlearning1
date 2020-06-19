let ul = document.querySelector(".people");

const people = ['john' , 'marvellous' , 'james' , 'whsies'];

let html = ``;

people.forEach(function (person){

    html += `<li> ${person} for this book </li>`
} 
);

ul.innerHTML = html;

