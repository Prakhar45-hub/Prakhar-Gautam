menu = document.querySelector('.menu')
my = document.querySelector('.my')
my1 = document.querySelector('.my')
navbar = document.querySelector('.navbar')
prakhar = document.querySelector('.prakhar')
rightnav = document.querySelector('.rightnav')
rightnav1 = document.querySelector('.rightnav1')
navlist = document.querySelector('.nav-list')



menu.addEventListener('click', ()=>{
    prakhar.classList.toggle('v-class-resp')
    navbar.classList.toggle('h-nav-resp')
    my.classList.toggle('z-class-resp')  
})

my.addEventListener('click', ()=>{
    rightnav.classList.toggle('z-class-resp')
    rightnav1.classList.toggle('z-class-resp') 
    menu.classList.remove("v-class-resp");
})