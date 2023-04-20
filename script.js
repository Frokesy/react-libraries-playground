const gl = gsap.timeline({ repeat: -1 });
//first gsap animation
//gsap.from(".circle", { duration: 3, x: -1000, y: 0, rotation: 360, scale: 2, ease: "ease", stagger: 0.25, repeat: 2 })

//copied from gsap docs
// gl.to(".circle-one", { x: 40, fill: 'blue', });
// gl.from(".circle-two", { x: -40, fill: 'blue', });
// gl.fromTo(".circle-three", { x: -40, fill: 'blue', }, { x: 40, fill: 'green' });
// gl.set(".circle-four", { x: 40, fill: 'blue', });


//worked with set and to methods
// gl.set(".circle", { rotation: 360, x: 150, yPercent: 50 })
// gl.to(".circle", { duration: 3, x: -300, y: 0, stagger: 0.5 })

//extensive play around fromTo
// gl.fromTo(".circle", { duration: 2, x: 600, y: 0, stagger: 0.25 }, { duration: 3, x: -600, y: 0, stagger: 0.5 })


//transform backgroundColors
// const bgTransformTl = gsap.timeline({ repeat: -1, defaults: { duration: 0.5 }, yoyo: true, ease: "ease" });
// bgTransformTl.to(".circle-one", { background: "#ff0" })
// bgTransformTl.to(".circle-two", { background: "#0f0" })
// bgTransformTl.to(".circle-three", { background: "#00f" })
// bgTransformTl.to(".circle-four", { background: "#f00" })

//loader animation
const loaderAnimation = gsap.timeline({ repeat: -1, defaults: { duration: 0.05 }, yoyo: true, ease: "easeIn" });
loaderAnimation.to(".loader-child", { opacity: "0.7", stagger: 0.25 })
loaderAnimation.to(".loader-child", { opacity: "0.3", stagger: 0.25 })

// let obj = { myNum: 10, myColor: "red" };
// gsap.to(obj, {
//     myNum: 200,
//     myColor: "blue",
//     onUpdate: () => console.log(obj.myNum, obj.myColor)
// });

//working with callBacks
// gsap.to(".box", {
//     duration: 3,
//     x: 1000,
//     ease: "easeIn",
//     onComplete: () => console.log("Tween is complete")
// })