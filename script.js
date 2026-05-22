const messages = [

"💌 You are my favorite person ❤️",

"💖 Every heartbeat whispers your name ❤️",

"🌹 You make my world beautiful ❤️",

"💕 I love your smile sooo much ❤️",

"✨ You are magic in my life ❤️",

"❤️ My heart belongs to you ❤️",

"💞 Every moment with you is special ❤️",

"🥰 KANBGHIIIIIIIIIIIK ❤️"

];

let opened = 0;

function showWays(){

    document.getElementById("intro").classList.add("hidden");

    document.getElementById("ways").classList.remove("hidden");
}

function showWay1(){

    document.getElementById("ways").classList.add("hidden");

    document.getElementById("way1").classList.remove("hidden");
}

function openLetter(index){

    const box = document.getElementById("messageBox");

    box.innerHTML = messages[index];

    box.style.animation = "none";

    setTimeout(() => {

        box.style.animation = "fade 1s";

    },10);

    opened++;

    if(opened >= 8){

        document.getElementById("nextBtn").style.display = "block";
    }
}

function showWay2(){

    document.getElementById("ways").classList.add("hidden");

    document.getElementById("way1").classList.add("hidden");

    document.getElementById("way2").classList.remove("hidden");
}
