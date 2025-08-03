let gamesequence = [];
let usersequence = [];
let btns = ["red", "yellow", "green", "purple"];
let h2 = document.querySelector("h2");
let level = 0;
let started = false;
document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game has been started")
        started = true;
        levelup();
    }
})

function btnflash(btn) {
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 250);
}

function userpress(btn) {
    btn.classList.add("userpress");
    setTimeout(() => {
        btn.classList.remove("userpress");
    }, 250);
}
function levelup() {
    usersequence = [];
    level++;
    h2.innerText = `Level ${level}`;

    // random button choose 
    let randinx = Math.floor(Math.random() * 4);
    let randcolor = btns[randinx];
    gamesequence.push(randcolor);
    console.log(gamesequence);
    let randbutton = document.querySelector(`.${randcolor}`);

    btnflash(randbutton);


}
function checkAns(indx) {
    console.log("current level is :", level);

    if (gamesequence[indx] == usersequence[indx]) {
        if (usersequence.length == gamesequence.length) {
            setTimeout(levelup, 1000);
        }
    } else {
        h2.innerHTML = `Game over!! your score was <b>${level}</b> <br>please press any key to restart`
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        gamereset();
    }

}
function btnpress() {
    console.log("button has been presssed");
    let btn = this;
    userpress(btn);
    usercolor = btn.getAttribute("id");
    usersequence.push(usercolor);
    checkAns(usersequence.length - 1);
}
let allbtns = document.querySelectorAll(".btn");
for (const btns of allbtns) {
    btns.addEventListener("click", btnpress);

}

function gamereset() {
    started = false;
    usersequence = [];
    gamesequence = [];
    level = 0;

}