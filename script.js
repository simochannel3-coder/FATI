const messages = [

"💌 Habibati wahoub hayaati Had nhaar mchi bhal ay nhar hit had nhar tzad 9amar dylii  ❤️",

"💖 Nti hya hyati w3mri lah ykhliiiiik liyaa ❤️",
"🌹 Mkntkhylch hyati bla bik ahbiba dyli kola 3am wnti b alf khiiir  ❤️",

"💕 Kanmoooot 3lik kanmoot 3la ri7aa dylk dhkt,3winaaatk w ydidatk w lips dylk Kanmot 3lik kamlaa bkol haja fik  ❤️",

"✨ Nti hyaa limzynaa liya hayati wmnwrahaa bla bik had hayaat mtswa wlo  ❤️",

"❤️ Fach knchofk frhana ktrd fiya rou7 wkaywlii nhari zwiin ajml haja w93aat fhyati hya awl nhar fkrt nhdr m3aak kanhmd lah hit hdrt m3aak hit ana db aktaar wahd fhad dnyaa frhaan hit 3ndo had jamaal whad ghzalaa fhayaatoo ❤️",


"💞 Mkrhtch fach nkon m3ak yhbs w9t hit m3aaak kanl9aa rahti wkn3iich m3aak f3alamk li mkhlinii aktr waaaahd mrtaa7 fhad dnyaa  ❤️",


"🥰 KANBGHIIIIIIIIIIIK WKANMOOOOOOOOOOOOOOOT 3LIIIIIIK WYKHLIIIIIIIK LIIIIIIIIYA❤️"

];

let clicked = 0;

function showWays(){

document.getElementById("intro").classList.add("hidden");

document.getElementById("ways").classList.remove("hidden");

}

function showWay1(){

document.getElementById("ways").classList.add("hidden");

document.getElementById("way1").classList.remove("hidden");

}

function showMessage(index){

document.getElementById("message").innerHTML =
messages[index];

clicked++;

if(clicked >= 8){

document.getElementById("continueBtn")
.classList.remove("hidden");

}

}

function showWay2(){

document.getElementById("way1").classList.add("hidden");

document.getElementById("ways").classList.add("hidden");

document.getElementById("way2").classList.remove("hidden");

}
