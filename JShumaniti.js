let TA = document.getElementById('TA');
let second = document.getElementById('second');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    let TAValue = value * 2.5;
    if (TAValue > 1000) TAValue = 1000;  // Example boundary value

    // Limit the second element's movement
    let secondValue = value * -1.5;
    if (secondValue < -500) secondValue = -500;  // Example boundary value

    TA.style.marginTop = TAValue + 'px';
    second.style.top = secondValue + 'px';
});

function scrolll() {
    var container = document.querySelector(".scroll-image");
    container.scrollBy({ left: -350, behavior: 'smooth' });
}

function scrollr() {
    var container = document.querySelector(".scroll-image");
    container.scrollBy({ left: 350, behavior: 'smooth' });
}