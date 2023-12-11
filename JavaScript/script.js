const navbar = document.getElementById('navbar');
const btnNavBar = document.querySelector(".bars");
btnNavBar.onclick=()=>{
    const navBarMobile = document.querySelector(".nav_bar");
    navBarMobile.classList.toggle("active")
    if(document.body.scrollTop === 0 && document.documentElement.scrollTop === 0){
        navbar.classList.add('scrolled');
    }
};

window.onscroll = function(){
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
        navbar.classList.add('scrolled');
    }else{
        navbar.classList.remove('scrolled');
    }
}
//AOS
AOS.init({
    duration:1500,
});

const $days = document.getElementById('days'),
$hours = document.getElementById('hours'),
$minutes = document.getElementById('minutes'),
$seconds = document.getElementById('seconds'),
$finalMessage = document.querySelector('.final-sms');

//fecha a futuro
const countdownDate = new Date('Feb 10, 2024 00:00:00').getTime();

let interval = setInterval(function(){
    // Obtener fecha actual y milisegundos
    const now = new Date().getTime();

    // Obtener la distancias entre ambas fechas
    let distance = countdownDate - now;

    // Calculos a dias-horas-minutos-segundos
    let days = Math.floor(distance / (1000 * 60 * 60 *24));
    let hours = Math.floor((distance % (1000 *60 *60 *24 )) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 *60 *60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 *60)) / (1000));

    //Escribimos Resultados
    $days.innerHTML = days;
    $hours.innerHTML = hours;
    $minutes.innerHTML = minutes;
    $seconds.innerHTML = ('0' + seconds).slice(-2);

    //cuando llegue a 0
    if(distance < 0) {
        clearInterval(interval);
        $finalMessage.style.transform = 'traslateY(0)' ;
    }
}, 1000)