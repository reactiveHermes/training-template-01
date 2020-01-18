//обьект содержит в себе свойства, методы
//HTMLобьект содержит свойства, методы, события
//свойства это переменная которая хранит любое значение
//методы это действия (функции)
//события начинаються с ON


const playIcon = document.querySelector('.button_play');
const video = document.querySelector('.video');
const videoWrapper = document.querySelector('.wrapper-video');

playIcon.onclick = (event) => {
    playIcon.style.display = 'none';
    video.controls = true;
    video.play();
}