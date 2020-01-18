const headerBurger = document.querySelector('.header__burger');
const navList = document.querySelector('.nav__list');

headerBurger.onclick = () => {

    if (navList.style.display == 'block') {
        navList.style.display = 'none';
    }else{
        navList.style.display = 'block';
    }
}
