function Animal_Function() {
    var Animal_Output;
    var Animals = document.getElementById("Animal_Input").value;
    var Animal_string = " is a great animal ";
    switch(Animals) {
        case "Cat":
        Animal_Output = "Cat" + Animal_string;
    break;
    case "Fox":
        Animal_Output = "Fox" + Animal_string;
    break;
    case "Elephant":
        Animal_Output = "Elephant" + Animal_string;
    break;
    case "Dog":
        Animal_Output = "Dog" + Animal_string;
    break;
    case "Lion":
        Animal_Output = "Lion" + Animal_string;
    break;
    default:
        Animal_Output = "Please enter an animal exactly as written on the above list.";
    }

    document.getElementById("Output").innerHTML = Animal_Output;
}

function Hello_World_Function () {
    var A = document.getElementsByClassName("Click");

    // This will make the first header's text display to "the text has changed" //
    A[0].innerHTML = "The text has changed!";
}

var c = document.getElementById("Canvas");
var ctx = c.getContext("2d");
var grd = ctx.createLinearGradient(0, 0, 800, 0);

// this will create a black and white gradiant // 

grd.addColorStop(0, "black");
grd.addColorStop(1, "white");
ctx.fillStyle = grd
ctx.fillRect(0, 0, 500, 250);
ctx.beginPath();
ctx.arc(250, 125, 40, 0, 2 * Math.PI);
ctx.fillStyle = "red";
ctx.fill();
ctx.stroke();

