const btnToggle = document.getElementById('btnToggle');
const whiteBtn = document.getElementById('white');
const greenBtn = document.getElementById('green');
const pinkBtn = document.getElementById('pink');
const blueBtn = document.getElementById('blue');
const divText = document.getElementById('text');
const getNavToggle = document.querySelector(".nav-toggle");

let toggleNavStatus = false;
let backgroundColor = 'whitebackground';


function navToggle() {
    if (toggleNavStatus == false) {
        getNavToggle.style.display = "block";
        toggleNavStatus = true;

    } else {
        getNavToggle.style.display = "none";
        toggleNavStatus = false;
    }

    backgroundColor = document.body.className;      
}


function white () {
    document.body.classList.remove(backgroundColor);
    document.body.classList.add('whitebackground');
    divText.innerHTML = 'White';
    navToggle();
}

function green () {
    document.body.classList.remove(backgroundColor);
    document.body.classList.add('greenbackground');
    divText.innerHTML = 'Green';
    navToggle();
}

function pink () {
    document.body.classList.remove(backgroundColor);
    document.body.classList.add('pinkbackground');
    divText.innerHTML = 'Pink';
    navToggle();
}

function blue () {
    document.body.classList.remove(backgroundColor);
    document.body.classList.add('bluebackground');
    divText.innerHTML = 'Blue';
    navToggle();
}

btnToggle.addEventListener('click', navToggle);
whiteBtn.addEventListener('click', white);
greenBtn.addEventListener('click', green);
pinkBtn.addEventListener('click', pink);
blueBtn.addEventListener('click', blue);
document.body.classList.add('homecolor');
