const button1 = document.getElementById("saffron");

button1.addEventListener('click', function (e) {
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    let ripples = document.createElement('span');
    ripples.style.left = x + "px";
    ripples.style.top = y + "px";

    this.appendChild(ripples);

    setTimeout(() => {
        ripples.remove();
    }, 1000);
})

const button2 = document.getElementById("white");

button2.addEventListener('click', function (e) {
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    let ripples = document.createElement('code');
    ripples.style.left = x + "px";
    ripples.style.top = y + "px";

    this.appendChild(ripples);

    setTimeout(() => {
        ripples.remove();
    }, 1000);
})

const button3 = document.getElementById("green");

button3.addEventListener('click', function (e) {
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    let ripples = document.createElement('select');
    ripples.style.left = x + "px";
    ripples.style.top = y + "px";

    this.appendChild(ripples);

    setTimeout(() => {
        ripples.remove();
    }, 1000);
})