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
var mobile = 1023;

// ----top Section Animations --- //

const navbar = document.querySelector(".navbar");
const titleContainer = document.querySelector(
  ".titleSection__page-container--container"
);
const titleTextContainer = document.querySelector(".title-cont");
const partnersMarquee = document.querySelector(".partners");
const titleTl = gsap.timeline();

gsap.from(navbar.children, {
  yPercent: 200,
  ease: "power3.inOut",
  duration: 1.2,
  opacity: 0,
});

intersectionObserver(titleTextContainer, { threshold: 0.8 }).then(() => {
  gsap.from(titleTextContainer.children, {
    yPercent: 200,
    ease: "power3.inOut",
    duration: 1.2,
    opacity: 0,
  });
});

titleTl
  .from(
    titleContainer.children[1].children,
    {
      yPercent: 200,
      ease: "power3.inOut",
      duration: 1.2,
      opacity: 0,
    },
    "<0.1"
  )
  .from(
    titleContainer.children[2],
    {
      y: 200,
      ease: "power3.inOut",
      duration: 1.2,
      opacity: 0,
    },
    "<0.1"
  );

const subContainer = document.querySelector(".subSection__section-container");
const subTitleContainer = document.querySelector(
  ".subSection__section-container--hero-text-container"
);
const subTl = gsap.timeline();

subTl.from(subTitleContainer.children[0].children, {
  yPercent: 200,
  ease: "power3.inOut",
  duration: 1.8,
  opacity: 0,
  scrollTrigger: {
    trigger: subContainer,
    scrub: 1,
    start: "top bottom+=20%",
    end: "center top+=50%",
  },
});

// ---showcase --//

const showcaseTitles = Array.from(document.querySelectorAll(".showcaseTitle"));
const financeShowcaseContainer = document.querySelector(
  ".showcaseSection__finance-showcase-container"
);
const animatedSvgs = document.querySelectorAll(".box");

showcaseTitles.forEach((title) => {
  gsap.from(title.children, {
    yPercent: 200,
    ease: "power3.inOut",
    duration: 1.8,

    opacity: 0,
    scrollTrigger: {
      trigger: title,
      scrub: 2,
      start: "top bottom+=20%",
      end: "center top+=20%",
    },
  });
});

gsap.from(financeShowcaseContainer.children[0].children[1], {
  x: 300,
  opacity: 0,
  duration: 1,
  ease: "power3.inOut",
  scrollTrigger: {
    trigger: financeShowcaseContainer.children[0].children[1],
  },
});

gsap.from([financeShowcaseContainer.children[1].children], {
  y: 200,
  ease: "power3.inOut",
  duration: 1,
  opacity: 0,
  stagger: 0.1,
  scrollTrigger: {
    trigger: financeShowcaseContainer.children[1],
  },
});

const svgsTl = gsap.timeline();
animatedSvgs.forEach((anim) => {
  gsap.from(
    anim.children,
    {
      opacity: 0,
      ease: "power3.inOut",
      duration: 1,
      delay: 1.1,
      scrollTrigger: {
        trigger: anim,
      },
    },
    "<0.1"
  );
});

//  --showcase banner

const jumbrtronPhone = document.querySelector(".showcaseJumbotron");
const featuresShowcasePoints = Array.from(
  document.querySelectorAll(
    ".showcaseJumbotron__text-container--bullet-container__bullet"
  )
);

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
      scrub: 0.1,
      start: "top bottom+=20%",
      end: "center top+=20%",
    },
  });
});

// ----

//  ---Faq Section

const faqSection = document.querySelector(".faqSection");

gsap.from(faqSection.children, {
  yPercent: 200,
  opacity: 0,
  ease: "power3.inOut",
  duration: 1,
  stagger: 0.1,
  scrollTrigger: {
    trigger: faqSection.children,
    scrub: 2,
    // scrub:0.1,
    // start: "top bottom+=20%",
    // end: "center top+=20%",
  },
});
// ---

// ----quotes banner

const quotesBanner = document.querySelector(".quoteJumbotron");

gsap.from(quotesBanner.children[0].children, {
  yPercent: 200,
  opacity: 0,
  ease: "power3.inOut",
  duration: 1,
  stagger: 0.1,
  scrollTrigger: {
    trigger: quotesBanner.children[0].children,
    // scrub:0.1,
    start: "top bottom+=20%",
    end: "top+=20 top+=20%",
  },
});

gsap.from(quotesBanner.children[1].children[0], {
  width: "1rem",
  duration: 2,
  ease: "power3.inOut",
  opacity: 0,
  scrollTrigger: {
    trigger: quotesBanner.children[1].children[0],
  },
});

// ----

// -----subscribe section

const subscribeContainer = document.querySelector(
  ".subscribeSection__container"
);

gsap.from(subscribeContainer.children[0].children, {
  yPercent: 200,
  ease: "power3.inOut",
  duration: 1.8,

  opacity: 0,
  scrollTrigger: {
    trigger: subscribeContainer.children[0].children,
    scrub: 0.1,
    start: "top bottom+=50%",
    end: "center top+=20%",
  },
});

///

const year = document.querySelectorAll("#year");

year.forEach((y) => {
  y.innerHTML = new Date().getFullYear();
});

// device based animation

if (viewport > mobile) {
  gsap.from(partnersMarquee, {
    xPercent: -50,
    opacity: 0,
    duration: 5,
    ease: "power3.inOut",
    overflowX: "hidden",
    scrollTrigger: {
      trigger: partnersMarquee,
      scrub: 4,
      start: "top bottom+=20%",
      end: "center top+=20%",
    },
  });
}

if (mobile > viewport) {
  gsap.from(quotesBanner.children[0].children, {
    yPercent: 200,
    opacity: 0,
    ease: "power3.inOut",
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
      trigger: quotesBanner.children[0].children,
      start: "top bottom+=90%",
      end: "center+=20 top+=10%",
    },
  });
}
