

//gsap.registerPlugin(SplitText);

const tl_presentation = gsap.timeline({ delay: 0.5});
const tl_card = gsap.timeline({ delay: 3 })

tl_presentation.to(".preloader_revealer", {
    clipPath: "circle(100% at 50% 50%)",
    duration: 1,
    stagger: 0.25,
    ease: "power2.inOut",
})

tl_presentation.to(".preloader_bg", {
    opacity: 0,
})

tl_presentation.set(".preloader_revealer", { display: "none" })


tl_card.from("nav", {
    y:-500,
    opacity: 0,
    duration: 0.25,
});

tl_card.from("#presentation_card", {
    y:500,
    opacity: 0,
    duration: 1,
});