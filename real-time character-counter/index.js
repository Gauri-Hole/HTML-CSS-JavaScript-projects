const textaeraEl = document.getElementById("textarea");
const totalCounterEl = document.getElementById("total-counter")
const remainingCounterEl = document.getElementById("remaining-counter")

textaeraEl.addEventListener("keyup", () => {
    updateCounter()
})
updateCounter();

function updateCounter() {
    totalCounterEl.innerText = textaeraEl.value.length;
    ;
    remainingCounterEl.innerText = textaeraEl.getAttribute("maxLength") -
        textaeraEl.value.length;
}
