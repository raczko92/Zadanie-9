const Start = document.querySelector("button[data-start]");
const Stop = document.querySelector("button[data-stop]");

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

function changer() {
    Interval = setInterval(() => {
    document.body.style.background = getRandomHexColor()
    }, 1000)
} 

function stoper() {
    clearInterval(Interval)
}

Start.addEventListener("click", changer );
Stop.addEventListener("click", stoper )