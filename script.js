// Змінити колір фону сторінки
document.body.style.backgroundColor = 'lightblue';

var body = document.querySelector("body");
var colors = ["#008001", "#7fff00", "#006400", "#d7d7d7"];
var index = 0;
setInterval(function() {
  body.style.backgroundColor = colors[index];
  index = (index + 1) % colors.length;
}, 1000);

var div = document.createElement("div");
div.innerHTML = "Цей текст було додано за допомогою JavaScript";
document.body.appendChild(div);
