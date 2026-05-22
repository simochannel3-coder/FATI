const way2Btn = document.getElementById("way2");
const popup = document.getElementById("popup");

way2Btn.addEventListener("click", () => {
    popup.innerHTML = `
        <div class="heart-container">
            <div class="heart"></div>
            <h1 class="love-text">KANBGHIIIIIIIIIIIK ❤️</h1>
        </div>
    `;
});
