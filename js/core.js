// $(function () {
//     function myRandom(from, to) {
//         return Math.floor((Math.random() * (to - from + 1)) + from);
//     }

//     function myRandom2(from, to) {
//         return Math.floor((Math.random() * (to - from + 1)) + from);
//     }

//     function myRandom3(from, to) {
//         return Math.floor((Math.random() * (to - from + 1)) + from);
//     }

//     setInterval(function () { $('#number').text(myRandom(1, 30)); }, 86400);
//     setInterval(function () { $('#number2').text(myRandom2(1, 30)); }, 86400);
//     setInterval(function () { $('#number3').text(myRandom3(1, 30)); }, 86400);
// });

// (function () {
//     var options = {
//         whatsapp: "+996707887449‬", // WhatsApp number
//         call: "+996707887449‬", // Call phone number
//         call_to_action: "заказать портер  такси", // Call to action
//         button_color: "#A8CE50", // Color of button
//         position: "right", // Position may be 'right' or 'left'
//         order: "whatsapp,call", // Order of buttons
//     };
//     var proto = document.location.protocol, host = "getbutton.io", url = proto + "//static." + host;
//     var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
//     s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
//     var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
// })();

const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;

// Клонируем меню, чтобы задать свои стили для мобильной версии
const menu = document.querySelector("#menu").cloneNode(1);

// При клике на иконку hamb вызываем ф-ию hambHandler
hamb.addEventListener("click", hambHandler);

// Выполняем действия при клике ..
function hambHandler(e) {
  e.preventDefault();
  // Переключаем стили элементов при клике
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}

// Здесь мы рендерим элементы в наш попап
function renderPopup() {
  popup.appendChild(menu);
}

// Код для закрытия меню при нажатии на ссылку
const links = Array.from(menu.children);

// Для каждого элемента меню при клике вызываем ф-ию
links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

// Закрытие попапа при клике на меню
function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}
// Initialization for ES Users
import { Dropdown, Collapse, initMDB } from "mdb-ui-kit";

initMDB({ Dropdown, Collapse });
