let title = document.querySelector('.title');
let btn = document.querySelector('.btn');
let menu = document.querySelector('.liste');
let listsLi = document.querySelectorAll('.liste Li');
let count = 1;

menu.addEventListener('click', (e) => {
    if(e.target.tagName === 'LI') {
       title.innerHTML = e.target.innerHTML;

       e.target.parentElement.querySelectorAll('.selected').forEach(el => {
        el.classList.remove('selected');
       })

       e.target.classList.add('selected');
    }
})

btn.addEventListener('click', function () {
    menu.innerHTML += `<li>new Text ${count++} </li>`;
    })



