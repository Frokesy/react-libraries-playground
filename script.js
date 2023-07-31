import { Typed } from "typed.js";

const element = document.getElementById("element");
const typed = new Typed(element, {
    strings: ["<i>First</i> sentence.", "&amp; a second sentence."],
    typeSpeed: 50,
});

element.innerText(typed);

console.log(element);