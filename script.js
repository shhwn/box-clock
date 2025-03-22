const blackBox = document.getElementById("time");
blackBox.style.backgroundColor = "black";
blackBox.style.width = "300px";
blackBox.style.height = "300px";
blackBox.style.fontFamily = "Sans-serif";

var timeDisplay = document.getElementById("time");

function Time() {
    var dateString = new Date().toLocaleTimeString("en-US", {
        timeZone: "America/New_York"
    });
    var formattedString = dateString.replace(", ", " - ");
    timeDisplay.innerHTML = formattedString;
}

setInterval(Time, 1000);

blackBox.addEventListener("mouseenter", function () {
    let hue = 0;
    let saturation = 50;
    let lightness = 75;
    let intervalId = setInterval(function () {
        hue = (hue + 350) % 365;
        blackBox.style.backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    }, 175);
    blackBox.dataset.intervalId = intervalId;
});

blackBox.addEventListener("mouseleave", function () {
    clearInterval(blackBox.dataset.intervalId);
    blackBox.style.backgroundColor = "black";
});

blackBox.addEventListener("touchstart", function () {
    let hue = 0;
    let saturation = 50;
    let lightness = 75;
    let intervalId = setInterval(function () {
        hue = (hue + 350) % 365;
        blackBox.style.backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    }, 175);
    blackBox.dataset.intervalId = intervalId;
});

document.addEventListener("touchstart", function () {
    clearInterval(blackBox.dataset.intervalId);
    blackBox.style.backgroundColor = "black";
});