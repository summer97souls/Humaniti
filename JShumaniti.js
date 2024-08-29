let TA = document.getElementById('TA');
let second = document.getElementById('second');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    let TAValue = value * 2.5;
    if (TAValue > 1000) TAValue = 1000;  

    let secondValue = value * -1.5;
    if (secondValue < -500) secondValue = -500;  

    TA.style.marginTop = TAValue + 'px';
    second.style.bottom = secondValue + 'px';
});

function scrolll() {
    var container = document.querySelector(".scroll-image");
    container.scrollBy({ left: -350, behavior: 'smooth' });
}

function scrollr() {
    var container = document.querySelector(".scroll-image");
    container.scrollBy({ left: 350, behavior: 'smooth' });
}

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navigation');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    let TAValue = value * 2.5;
    if (TAValue > 1000) TAValue = 1000;  

    let opacityValue = 1 - value / 350; 
    if (opacityValue < 0) opacityValue = 0; 
    
    TA.style.marginTop = TAValue + 'px';
    TA.style.opacity = opacityValue;

    let secondaryValue = TAValue;

})


document.addEventListener('DOMContentLoaded', () => {
    const Right = document.querySelector('.Right');

    function fadeInElement(element) {
        
        setTimeout(() => {
            element.style.opacity = 1;
            element.style.transform = 'translateY(0)';
        }, 100); 
    }

    fadeInElement(Right);
});

document.addEventListener('DOMContentLoaded', () => {
    const rightbottom = document.querySelector('.right-bottom');

    function fadeInElement(element) {
        
        setTimeout(() => {
            element.style.opacity = 1;
            element.style.transform = 'translateY(0)';
        }, 100); 
    }

    fadeInElement(rightbottom);
});

window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY;

    let rightElement = document.querySelector('.Right');
    let rightBottomElement = document.querySelector('.right-bottom');

    rightElement.style.right = (15 + scrollPosition * -1.69) + 'px'; 
    rightBottomElement.style.right = (20 + scrollPosition * -1.69) + 'px'; 
});

function openTab(evt, tabName) {

    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementsByClassName('tablinks')[1].click();
});

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementsByClassName('tablinks')[1].click(); 
});


function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";

    const footer = document.querySelector('.footer');
    if (tabName === 'Tab2') {
        footer.classList.add('shift-up');
    } else {
        footer.classList.remove('shift-up');
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementsByClassName('tablinks')[0].click(); 
});
