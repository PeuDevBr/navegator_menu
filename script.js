const list = document.querySelectorAll('.list');

function activeLink() {

    list.forEach((iten) => 
    iten.classList.remove('active'));
    this.classList.add('active');
}

list.forEach((iten) => 
iten.addEventListener('click', activeLink));