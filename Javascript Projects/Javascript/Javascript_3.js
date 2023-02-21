// This will output a list that states which character you have chosen //
function displayType(characters) {
    var characterType = characters.getAttribute("data-character-type");
    alert(characterType + " is from " + characters.innerHTML );
}
