var menuicon = document.querySelector('.menu-icon');
var ul = document.querySelector('.ul');

menuicon.addEventListener('click',()=>{

    if (ul.classList.contains('ativo')) {
        ul.classList.remove('ativo');
        document.querySelector('.menu-icon img').src = 'img/menu.png';
    }else{
        ul.classList.add('ativo');
        document.querySelector('.menu-icon img').src = 'img/close.png';
    }

})