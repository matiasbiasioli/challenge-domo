let mainDiv = document.querySelector('.mainDiv');
let navbarToggler = document.querySelector('.navbar-toggler');
let movePosition = false;

navbarToggler.addEventListener('click', ()=>{
    if (!movePosition){
        mainDiv.classList.add('mainDivNavPosition');
    } else {
        mainDiv.classList.remove('mainDivNavPosition')
    }
    movePosition = !movePosition;
})


//Animations with AOS
AOS.init();


