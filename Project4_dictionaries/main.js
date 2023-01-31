// This will create a dictionary with different values //

function my_Dictionary() {
    var Animal = {
        Species: "Cat",
        color: "white",
        breed: "siamese",
        age: 4,
        sound: "Meow"
    };

    // This will delete the Animal.sound value //

    delete Animal.sound;

    // This outputs the value of animal.sound.

    document.getElementById("Dictionary").innerHTML = Animal.sound;
}