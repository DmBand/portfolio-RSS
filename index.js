'use strict'
import i18Obj from "./translate.js";

const hamburger = document.querySelector('.header-burger');
const navList = document.querySelector('.header-list');
const body = document.querySelector('body');

function toggleMenu() {
    hamburger.classList.toggle('active');
    navList.classList.toggle('active');
    body.classList.toggle('lock')
}
hamburger.addEventListener('click', toggleMenu);
navList.addEventListener('click', toggleMenu);


// _____PORTFOLIO____________
const portfolioBtn = document.querySelectorAll('.btn-portfolio');
const portfolioImg = document.querySelectorAll('.portfolio-img');


const portfolioBtns = document.querySelector('.portfolio-buttons');

const changeImage = function changeImage(event) {
    if (event.target.classList.contains('btn-portfolio')) {
        const season = event.target.dataset.season;
        portfolioImg.forEach(
            (img, index) => (img.src = `./assets/img/${season}/${index + 1}.jpg`));
        portfolioBtn.forEach(
            (btn) => btn.classList.remove('active'));
        event.target.classList.add('active');
    }
};

portfolioBtns.addEventListener('click', changeImage);

//Кеширование

function preloadSummerImages(folderName) {
    for (let i = 1; i <= 6; i++) {
        const img = new Image();
        img.src = `./assets/img/${folderName}/${i}.jpg`;
    }
}

const seasons = ['winter', 'spring', 'summer', 'autumn'];

seasons.forEach(elem => preloadSummerImages(elem))

//_____________________________

//___TRANSLATION____________

const ru = document.querySelector('.ru');
const en = document.querySelector('.en');

function getTranslate(lang) {
    const dataList = document.querySelectorAll('[data-i18n]')
    dataList.forEach((el) => {
        el.textContent = i18Obj[lang][el.dataset.i18n]
    });
}

ru.addEventListener('click', () => {
    getTranslate('ru');
    en.classList.remove('active')
    ru.classList.add('active')
})

en.addEventListener('click', () => {
    getTranslate('en');
    ru.classList.remove('active')
    en.classList.add('active')
})

//__________THEME_________

const themeBtn = document.querySelector('.theme-btn');
const allElements = ['.skills', '.section-title', '.item-title', '.item-description', '.portfolio', '.video', '.price', '.btn-portfolio',
    '.price-title', '.price-description'];

function theme() {
    allElements.forEach((elem) => {
        const oneElem = document.querySelectorAll(elem);
        oneElem.forEach((elem2) => {
            elem2.classList.toggle('light-theme')
        });
    })
    themeBtn.classList.toggle('active')
}


const themeBtn1 = document.querySelector('.theme-btn');
const titles = ['.title-wrapper']

function titleTheme() {
    titles.forEach((elem) => {
        const oneElem = document.querySelectorAll(elem);
        oneElem.forEach((elem2) => {
            elem2.classList.toggle('light-theme-title')
        })
    })
}

themeBtn.addEventListener('click', theme);
themeBtn1.addEventListener('click', titleTheme);

//______________________