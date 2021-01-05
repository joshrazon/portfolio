import './style.css';
import reactIcon from './img/react-icon-min.png';
import './img/bakery-thumb-min.jpg'
gsap.registerPlugin(ScrollTrigger);

const htmlReactIcon = document.getElementById("react-icon");
htmlReactIcon.src = reactIcon;

// Hero Animations
gsap.from(".hero", {
  opacity: 0,
  duration: 1.5,
  ease: "back.out",
  y: 40,
  scrollTrigger: {
    trigger: ".hero",
    toggleActions: "restart none restart none"
  },
});


// nav scroll animations
const project = document.getElementById("project");
const about = document.getElementById("about");
const contact = document.getElementById("contact");
const home = document.getElementById("home");

home.onclick = () => gsap.to(window, { duration: 1.5, ease: "back.out", scrollTo: { y: "#hero", offsetY: 90 } });
project.onclick = () => gsap.to(window, { duration: 1.5, ease: "back.out", scrollTo: { y: "#project-section", offsetY: 90 } });
about.onclick = () => gsap.to(window, { duration: 1.5, ease: "power4", scrollTo: { y: "#about-section", offsetY: 90 } });
contact.onclick = () => gsap.to(window, { duration: 1.5, ease: "power4", scrollTo: { y: "#contact-section", offsetY: 90 } });


// Arrows animation
let tl = new TimelineMax({ defaults: { repeat: -1, repeatDelay: 1, duration: 1.5, stagger: 0.1, opacity: 1 } });
tl.to(".arrow", { opacity: 0, duration: 1.5 });

// nav hamburger
const bars = document.getElementById("bars");
function animateBars() {
  const navLink = document.querySelector("#nav-link");
  if (navLink.style.display === "inline-block") {
    navLink.style.display = "none";
  } else {
    navLink.style.display = "inline-block";
  }
}

bars.onclick = animateBars;

// nav highlight
gsap.to("#project", {
  scrollTrigger: {
    trigger: ".showcase",
    toggleActions: "restart reset restart reset",
    start: "20px 80%",
    end: "bottom 60%"
  },
  duration: .5,
  color: "#00adb5"
});

gsap.to("#about", {
  scrollTrigger: {
    trigger: "#about-section",
    toggleActions: "restart reset restart reset",
    start: "20px 80%",
    end: "bottom 25%"
  },
  duration: .5,
  color: "#00adb5"
});

gsap.to("#contact", {
  scrollTrigger: {
    trigger: "#contact-section",
    toggleActions: "restart reset restart reset",
    start: "20px 80%",
    end: "bottom 60%",
  },
  duration: .5,
  color: "#00adb5"
});


// shocase animations
gsap.from(".showcase-container-l", {
  opacity: 0,
  y: 60,
  x: -40,
  duration: 1.5,
  ease: "power4",
  scrollTrigger: {
    trigger: ".showcase-container-l",
    end: "bottom 15%",
    toggleActions: "restart none restart none",
  }
});

gsap.from(".showcase-container-r", {
  opacity: 0,
  y: 60,
  x: 40,
  duration: 1.5,
  ease: "power4",
  scrollTrigger: {
    trigger: ".showcase-container-r",
    toggleActions: "restart none restart none",
    end: "bottom 15%"
  }
})