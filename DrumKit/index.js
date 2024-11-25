var numberOfDrumButtons = document.querySelectorAll(".drum").length;
var i = 0;

while (i < numberOfDrumButtons) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        alert("I got clicked!");
    });
    i++;
}

