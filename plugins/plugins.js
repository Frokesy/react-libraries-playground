// //Draggable plugins
// Draggable.create(".box", { inertia: true, bounds: "body" });
// Draggable.create(".box", { bounds: "body" });
// Draggable.create(".box", { inertia: true, bounds: "body", type: "rotation" });


//register the plugin (just once)
gsap.registerPlugin(MotionPathPlugin);

gsap.set(".astronaut", { scale: 0.3, autoAlpha: 1 });

gsap.to(".astronaut", {
    duration: 5,
    ease: "power1.inOut",
    immediateRender: true,
    motionPath: {
        path: "#path",
        align: "#path",
        alignOrigin: [0.5, 0.5],
        autoRotate: 90
    }
});

// MotionPathHelper.create(".astronaut");