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