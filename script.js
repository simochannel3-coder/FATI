const messages = [

"🌹 You are the most beautiful thing my heart has ever known.",

"💖 Every moment with you feels magical and unforgettable.",

"✨ Your smile is brighter than all the stars in the sky.",

"💕 Loving you is the best feeling in my whole life.",

"❤️ Happy Birthday to the person who makes my world beautiful.",

"🌸 If love had a face, it would look exactly like you."

];

/* START */
function showChoices(){

    document.getElementById("startScreen")
    .style.display = "none";

    document.getElementById("choices")
    .style.display = "block";

}

/* WAY 1 */
function showWay1(){

    document.getElementById("choices")
    .style.display = "none";

    document.getElementById("lettersContainer")
    .style.display = "flex";

}

/* OPEN MESSAGE */
function openMessage(index){

    document.getElementById("messagePopup")
    .style.display = "flex";

    document.getElementById("messageText")
    .innerHTML = messages[index];

}

/* CLOSE */
function closePopup(){

    document.getElementById("messagePopup")
    .style.display = "none";

}

/* WAY 2 */
function showWay2(){

    const popup = document.getElementById("popup");

    popup.style.display = "flex";

    popup.innerHTML = `
        <div class="heart-container">
            <div class="heart"></div>
            <h1 class="love-text">
                KANBGHIIIIIIIIIIIK ❤️
            </h1>
        </div>
    `;
}
