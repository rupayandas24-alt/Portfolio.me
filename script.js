const texts = [
    "AI Expert",
    "Creative Developer",
    "Digital Creator",
    "Future Builder"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

    if(count === texts.length){
        count = 0;
    }

    currentText = texts[count];

    letter = currentText.slice(0, ++index);

    document.querySelector(".typing-text").textContent = letter;

    if(letter.length === currentText.length){

        count++;
        index = 0;

        setTimeout(type, 1500);

    }else{

        setTimeout(type, 100);
    }

})();

const menuToggle = document.getElementById("menu-toggle");

const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const scrolled = (scrollTop / height) * 100;

    document.querySelector(".scroll-progress").style.width =
        scrolled + "%";
});

document.addEventListener("mousemove", (e) => {

    const glow = document.querySelector(".cursor-glow");

    glow.style.left = e.clientX + "px";

    glow.style.top = e.clientY + "px";
});

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".reveal").forEach((item) => {

    gsap.from(item, {

        opacity:0,
        y:60,
        duration:1,
        ease:"power3.out",

        scrollTrigger:{
            trigger:item,
            start:"top 85%"
        }

    });

});

tsParticles.load("particles-js", {

    particles: {

        number:{
            value:35
        },

        color:{
            value:"#6ea8ff"
        },

        size:{
            value:2
        },

        move:{
            speed:0.5
        },

        opacity:{
            value:0.3
        }
    }
});
