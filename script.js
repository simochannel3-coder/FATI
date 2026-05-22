const messages = [

"🌹 You are the most beautiful thing my heart has ever known.",

"💖 Every moment with you feels magical and unforgettable.",

"✨ Your smile is brighter than all the stars in the sky.",

"💕 Loving you is the best feeling in my whole life.",

"❤️ Happy Birthday to the person who makes my world beautiful.",

"🌸 If love had a face, it would look exactly like you."

];

function startWay1(){

    document.getElementById("buttons").style.display="none";

    document.getElementById("lettersContainer").style.display="flex";

}

let openedLetters = 0;

function openLetter(element,index){

    if(!element.classList.contains("done")){

        openedLetters++;

        element.classList.add("done");

    }

    document.querySelectorAll('.envelope').forEach(e=>{
        e.classList.remove('open');
    });

    element.classList.add("open");

    document.getElementById("popup").classList.add("show");

    document.getElementById("popupText").innerHTML = messages[index];

    if(openedLetters === 6){

        document.getElementById("nextWay")
        .style.display="block";

    }

}

function closePopup(){

    document.getElementById("popup").classList.remove("show");

}

function showWay2(){

    document.getElementById("lettersContainer").style.display="none";

    document.getElementById("nextWay").style.display="none";

    document.getElementById("way2").style.display="flex";

}

function createHeart(){

    const heart = document.createElement("div");

    heart.classList.add("heart");

    const hearts = ["❤️","💖","💕","🌸","✨"];

    heart.innerHTML = hearts[Math.floor(Math.random()*hearts.length)];

    heart.style.left = Math.random()*100 + "vw";

    heart.style.fontSize = (Math.random()*30 + 18) + "px";

    heart.style.animationDuration = (Math.random()*5 + 5) + "s";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },10000);

}

setInterval(createHeart,250);
