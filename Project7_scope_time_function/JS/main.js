// Global Variable //

var x = 10;
function Add_numbers_1(){
    document.write( 20 + x + "<br>");
}
function Add_numbers_2(){
    document.write(x + 100);
}

Add_numbers_1();
Add_numbers_2();


// This will output x is not defined in the console for Add_numbers_2 //

function Add_numbers_1() {
    var x = 10;
    document.write(20 + x + "<br>");
}
function Add_numbers_2 (){
    document.write(x + 100);
}


Add_numbers_1();
Add_numbers_2();


function Add_numbers_1() {
    var x = 10;
    console.log(15 + x);
}

function Add_numbers_2() {
    // To solve the problem we would write the below code // 
    // var x = 10; // 
    console.log( x + 100);
}

Add_numbers_1();
Add_numbers_2();


function get_date() {

    if(new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you doing?";
    }
}





function Age_Function() {
    Age = document.getElementById("Age").value;
    if(Age >= 18) {
        Enter = "You are old enough to enter!";
    }
    else {
        Enter = "You are not old enough to enter!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Enter;
}


function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if(Time < 12 == Time > 0){
        Reply = "It is morning time";
    }
    else if (Time > 12 == Time < 18){
        Reply = "It is the afternoon";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}