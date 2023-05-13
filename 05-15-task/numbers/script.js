document.getElementById("submitButton").addEventListener("click", function () {
    var numberInput = document.getElementById("numberInput");
    var numberDisplay = document.getElementById("numberDisplay");

    var number = parseInt(numberInput.value);
    if (isNaN(number) || number > 100 || number < 0) {
    numberDisplay.innerHTML = "Please enter a valid number";
    return;
}

numberDisplay.innerHTML = "";

for (var i = 1; i <= number; i++) {
    var span = document.createElement("span");
    span.textContent = i;

    if (i % 2 === 0) {
        span.classList.add("orange");
    } else {
        span.classList.add("green");
    }

    numberDisplay.appendChild(span);
}
});
