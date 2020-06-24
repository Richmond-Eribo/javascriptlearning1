// const button = document.querySelector('button');

// button.addEventListener('click', () => {
//     console.log('you click me');
// });



const items = document.querySelectorAll('li');


items.forEach(item => {
    item.addEventListener('click', () => {
        // console.log ('item clicked');
        item.style.textDecoration = 'line-through';
    });
});