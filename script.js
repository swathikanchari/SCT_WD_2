let timer;
let seconds = 0;
let running = false;

const display = document.getElementById("display");
const laps = document.getElementById("laps");

function updateDisplay() {
    let hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
    let mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    let secs = String(seconds % 60).padStart(2, '0');

    display.textContent = `${hrs}:${mins}:${secs}`;
}

document.getElementById("start").onclick = function () {
    if (!running) {
        running = true;
        timer = setInterval(() => {
            seconds++;
            updateDisplay();
        }, 1000);
    }
};

document.getElementById("pause").onclick = function () {
    clearInterval(timer);
    running = false;
};

document.getElementById("reset").onclick = function () {
    clearInterval(timer);
    running = false;
    seconds = 0;
    updateDisplay();
    laps.innerHTML = "";
};

document.getElementById("lap").onclick = function () {
    if (running) {
        let li = document.createElement("li");
        li.textContent = display.textContent;
        laps.appendChild(li);
    }
};

updateDisplay();