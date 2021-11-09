const openIcon = document.querySelector('.fa-bars')
const closeIcon = document.querySelector('.fa-times-circle')
const mobileBg = document.querySelector('.mobile-bg')
const mobileNav = document.querySelector('.mobile-nav')

openIcon.addEventListener('click', ()=> {
    mobileBg.classList.toggle('display-none');
    mobileNav.classList.remove('slide-out');
    mobileNav.classList.toggle('slide-in');
    openIcon.classList.toggle('display-none');
    closeIcon.classList.toggle('display-none')
    setTimeout(() => {
      closeIcon.classList.toggle('display-none')
  },600);
});

closeIcon.addEventListener('click', () => {
    setTimeout(() => {
        mobileBg.classList.toggle('display-none');
        openIcon.classList.toggle('display-none');
    },500);
    mobileNav.classList.toggle('slide-in');
    mobileNav.classList.toggle('slide-out');
});

var menuHeader = document.getElementById("menuHeader");
var foto = document.getElementById("foto");
var main = document.getElementById("main");
var menuContacts = document.getElementById("menuContacts");
var adress = document.getElementById("headerAdress");
var workTime = document.getElementById("workTime");
var workTimeFooter = document.getElementById("workTimeFooter");
var book = document.getElementById("book");
var mobileMenu = document.getElementById("mobileMenu");
var mobileFoto = document.getElementById("mobileFoto");
var mobileMain = document.getElementById("mobileMain");
var mobileContacts = document.getElementById("mobileContacts");
var photoGallery = document.getElementById("photoGallery");

var buttonEn = document.getElementById("trans")
var buttonUkr = document.getElementById("ukr")

buttonEn.onclick = function() {
menuHeader.innerText = "Menu";
foto.innerText = "Foto";
main.innerText = "Main";
menuContacts.innerText = "Contacts";
adress.innerText = "s.Mynay str.Transportnux bydivelnukiv 6a";
workTime.innerText = "Mn-Sn: 10:00-24:00";
workTimeFooter.innerText = "Mn-Sn: 10:00-24:00";
book.innerText = "Reserve";
ukr.innerText = "UKR";
mobileMenu.innerText = "Menu";
mobileFoto.innerText = "Foto";
mobileMain.innerText = "Main";
mobileContacts.innerText = "Contacts";
photoGallery.innerText = "Photo Gallery";
}

buttonUkr.onclick = function() {
menuHeader.innerText = "Меню";
foto.innerText = "Фото";
main.innerText = "Головна";
menuContacts.innerText = "Контакти";
adress.innerText = "с.Минай вул.Транспортних будівельників 6а";
workTime.innerText = "Пн-Нд: 10:00-24:00";
workTimeFooter.innerText = "Пн-Нд: 10:00-24:00";
book.innerText = "Забронювати";
ukr.innerText = "УКР"
mobileMenu.innerText = "Меню";
mobileFoto.innerText = "Фото";
mobileMain.innerText = "Головна";
mobileContacts.innerText = "Контакти";
photoGallery.innerText = "Фото Галерея"
}



