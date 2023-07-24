import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";
import { intersectionObserver } from "./useIntersectionObserver";
gsap.registerPlugin(ScrollTrigger);

let lenis;

lenis = new Lenis({
  lerp: 0.2,
  smoothWheel: true,
});

lenis.on("scroll", () => ScrollTrigger.update());

const scrollFn = (time) => {
  lenis.raf(time);
  requestAnimationFrame(scrollFn);
};

requestAnimationFrame(scrollFn);

var viewport = window.innerWidth;
var mobile = 480;


const animatedSvgs = document.querySelectorAll('.box')
console.log(animatedSvgs)

const svgsTl = gsap.timeline()
animatedSvgs.forEach((anim) => {
  intersectionObserver(anim, { threshold: 0.8 }).then(() => {
      svgsTl.from(anim.children,{
        opacity:0,
        ease:"power3.inOut",
        duration:1,
        
      })
    })
})
const controlFeaturesContainer = document.querySelector('#controlFeatures')
const controlFeaturesBullets = document.querySelectorAll('.bullet-point')

console.log(controlFeaturesBullets)

const controlFeaturesTl = gsap.timeline()



controlFeaturesBullets.forEach((bullet) => {
  intersectionObserver(bullet, { threshold: 0.8 }).then(() => {
    controlFeaturesTl.from(bullet,{
      opacity:0,
      ease:"power3.inOut",
      duration:0.4,
      stagger:0.1
    })
  })
})






const titleHeader = document.querySelectorAll("#titleHead");
console.log(titleHeader);

titleHeader.forEach((t) => {
  const line = Splitting({
    target: t,
    by: "lines",
  });
  line.forEach((splitResult) => {
    const wrappedLines = splitResult.words
      .map(
        (wordsArr) => `
               <span class="word_wrap">
                     ${wordsArr.outerHTML}
                </span>`
      )
      .join("");
    splitResult.el.innerHTML = wrappedLines;
  });

  // gsap.set(t.querySelectorAll(".word"), {
  //     yPercent: 15,
  //     opacity: 0,
  //     rotateX: 50,
  //     transform: "translate(0,100%)"
  //     // transformStyle: "preserve-3d",
  // });
  intersectionObserver(t, { threshold: 0.8 }).then(() => {
    const elem = t.querySelectorAll(".word");
    gsap.fromTo(
      elem,
      {
        yPercent: 15,
        opacity: 0,
      
        transform: "translate(0,100%)",
      },
      {
        yPercent: 0,
        opacity: 1,
        // stagger: elem.length > 100 ? 0.02 : 0.03,
        stagger:0.02,
        // duration: elem.length > 100 ? 0.65 : 0.75,
        duration:0.4,
        ease: "easeOut",
        transform: "translate(0,0)",
      }
    );
  });
});

const jumbrtronPhone = document.querySelector(".showcaseJumbotron");

console.log(jumbrtronPhone);

const featuresShowcasePoints = Array.from(
  document.querySelectorAll(
    ".showcaseJumbotron__text-container--bullet-container__bullet"
  )
);

console.log(featuresShowcasePoints);

const tl = gsap.timeline();

intersectionObserver(jumbrtronPhone, { threshold: 0.1 }).then(() => {
  featuresShowcasePoints.forEach((showcase) =>
    tl.from(showcase, {
      opacity: 0,
      ease: "Power3.inOut",
      //   duration:1,
      stagger: 0.1,
      y: 70,
    })
  );

  gsap.from(jumbrtronPhone.children[0], {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "power3.inOut",
    scrollTrigger: {
      trigger: jumbrtronPhone,
    },
  });

  gsap.from(jumbrtronPhone.children[1].children[0].children[0], {
    y: 100,
    opacity: 0,
    delay: 0.5,
    duration: 1,
    ease: "power3.inOut",
    scrollTrigger: {
      trigger: jumbrtronPhone,
    },
  });
});


const year = document.querySelectorAll("#year");

year.forEach((y) => {
  y.innerHTML = new Date().getFullYear();
});


