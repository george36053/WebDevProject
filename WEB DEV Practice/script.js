// HTML → bones
//
// CSS → clothes
//
// JavaScript → brain + muscles
//JavaScript decides what happens when the user interacts with it

//Common Data Types in JavaScript
//String	"Hello"	                  Text
//Number	42	                      Whole or decimal numbers
//Boolean	true / false	          True or false value
//Array     [1, 2, 3]	              Ordered list of values
//Object	{ name: "Kate", age: 25 } Key - value pairs
//Undefined	    let x;	              Variable declared but no value
//Null	    let y = null;	          Intentionally empty
let clicks = 0;

function changeTitle() {
    clicks += 1;
    document.getElementById("super-title").innerHTML =
        "my girlfriend is the best 💖 — Liked " + clicks + " times!";
}


let name = "Kate"; //String
let age = 23; //Number
let isStudent = true; //Boolean
const birthyear = 2002; //Constant
let city = "Hemet"; //String
let loveCount = 0;

document.getElementById("love-btn").onclick = function () {
    loveCount++;

    //update the title with milestones
    if (loveCount === 1) {
        document.getElementById("super-title").innerHTML = "I love you 💖";
    }
    else if (loveCount === 25) {
        document.getElementById("super-title").innerHTML = "I REALLY love you 💕";
    }
    else if (loveCount === 50) {
        document.getElementById("super-title").innerHTML = "You're my everything ❤️";
    }

//create a floating heart
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 90 + "vw";// random horizontal position
    heart.style.top = Math.random() * 90 + "vh"; // vertical
    document.getElementById("heart-container").appendChild(heart);

    // Remove heart after animation
    setTimeout(() => {
        heart.remove();
    }, 2000);
};