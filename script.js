const messages = [

"💌 You are my favorite person ❤️",

"💖 Every heartbeat whispers your name ❤️",

"🌹 You make my world beautiful ❤️",

"💕 I love your smile sooo much ❤️",

"✨ You are magic in my life ❤️",

"❤️ KANBGHIIIIIIIIIIIK ❤️"

];

function openLetter(index){

    const messageBox = document.getElementById("messageBox");

    messageBox.innerHTML = messages[index];

    if(index === 5){

        document.getElementById("way2Btn").style.display = "inline-block";

    }
}

function showHeart(){

    document.body.innerHTML = `

    <div class="heart-container">

        <div class="heart"></div>

        <h1 class="love-text">
            KANBGHIIIIIIIIIIIK ❤️
        </h1>

    </div>

    `;
}
