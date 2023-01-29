function my_Dictionary() {
    var Animal = {
        Species: "Cat",
        color: "white",
        breed: "siamese",
        age: 4,
        sound: "Meow"
    };

    delete Animal.sound;

    document.getElementById("Dictionary").innerHTML = Animal.sound;
}