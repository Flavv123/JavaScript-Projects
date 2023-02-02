// This will display the data type of number //
document.write(typeof 3);

// Challenge 6 //
// This will display NaN//
function my_Function() {
    document.getElementById("Test").innerHTML = 0/0;
}


// This will result true as the string data type is not a number //

document.getElementById("Test").innerHTML = isNaN('This is a string');

// This will result false as 007 is a number // 

document.getElementById("Test").innerHTML = isNaN('007 + "<br>');



// Will display the number infinity //

document.write( "<br>" + 2E310 + "<br>" );

// Will display the number -infity //

document.write(-3E310 + "<br>" ) ;

// This wil display true //

document.write( "<br>" + 12 > 2 + "<br>");


// This wil display false //

document.write( "<br>" +  10 < 2 + "<br>");

// This will add add the 2 numbers and display the result //

console.log(2 + 2);

// This will display the string and the number which equal to 105 //

document.write("<br>" + "10" + 5 + "<br>");

// This will display false //

console.log(15 < 4);

// This will return true //

document.write( 10 == 10 );


// This will return false //

document.write( 10 == 20 );

// This will return true //

document.write(  10 === 10 );

// This will return false //

document.write ( "12" === 10);


// This will return false //

document.write ( "10" === 10);

// This will return false //

document.write ( 12 === 10);

// This will return true //


document.write(5 > 2  &&  10 > 4);

// This will return false //


document.write(5 < 2  &&  10 < 5);


// This will return true //

document.write( 10 > 2  || 11 < 3);


// This will return false //

document.write( 10 > 2  || 11 > 3);


// This will display True // 

function not_Function() {
    document.getElementById("Not").innerHTML =  ! (5 > 10);
}

// This will display False because it's a double negative // 

function not_Function() {
    document.getElementById("Not").innerHTML =  ! (20 > 10);
}
