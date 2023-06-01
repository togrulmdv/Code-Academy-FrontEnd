$(document).ready(function () {
    $("#submitButton").click(function () {
        var numberInput = $("#numberInput").val();
        var numberDisplay = $("#numberDisplay");

        var number = parseInt(numberInput);
        if (isNaN(number) || number > 100 || number < 0) {
            numberDisplay.html("Please enter a valid number");
            return;
        }

        numberDisplay.html("");

        for (var i = 1; i <= number; i++) {
            var span = $("<span>").text(i);

            if (i % 2 === 0) {
                span.addClass("orange");
            } else {
                span.addClass("green");
            }

            numberDisplay.append(span);
        }
    });
});

