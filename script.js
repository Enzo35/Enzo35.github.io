

//gsap.registerPlugin(SplitText);
gsap.from(".box", { 
  x: -100,
});

gsap.to(".box", { 
  x: 500,
});

gsap.from("#presentation_card", {
    y:500,
});

gsap.to("#presentation_card", {
    y:-100,
});


gsap.to(".preloader_revealer", {
        clipPath: "circle(100% at 50% 50%)",
        duration: 1,
        stagger: 0.25,
        ease: "power2.inOut",
})

gsap.to(".preloader_revealer", {
        clipPath: "circle(100% at 50% 50%)",
        duration: 1,
        stagger: 0.25,
        ease: "power2.inOut",
})

document.fonts.ready.then(() => {
    const tl = gsap.timeline({ delay: 0.5});

    tl.to(".preloader_revealer", {
        clipPath: "circle(100% at 50% 50%)",
        duration: 1,
        stagger: 0.25,
        ease: "power2.inOut",
    })

});


