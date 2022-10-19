// Character list. Each house has a name and a code
const houses = [
  {
    code: "ST",
    name: "Stark"
  },
  {
    code: "LA",
    name: "Lannister"
  },
  {
    code: "BA",
    name: "Baratheon"
  },
  {
    code: "TA",
    name: "Targaryen"
  }
];

// Return an array of characters belonging to a house
const getCharacters = houseCode => {
  switch (houseCode) {
    case "ST":
      return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
    case "LA":
      return ["Tywin", "Cersei", "Jaime", "Tyrion"];
    case "BA":
      return ["Robert", "Stannis", "Renly"];
    case "TA":
      return ["Aerys", "Daenerys", "Viserys"];
    default:
      return []; // Empty array
  }
};
var gotHouses = document.querySelector( '#house' );
var characters = document.querySelector( '#characters' );

for( house of houses ) {
  let option = document.createElement( 'option' );
  option.value = house.code;
  option.innerText = house.name;
  gotHouses.append( option );
}

gotHouses.addEventListener( 'change', function() {
  let e = document.getElementById( "house" );
  let selectedHouseCode = e.value;
  let selectedHouseName = e.options[e.selectedIndex].text;
  let chars = getCharacters( selectedHouseCode );
  characters.innerHTML = '';
  for( var i = 0; i < chars.length; i++ ) {
    let character = document.createElement( 'li' );
    character.innerText = chars[i];
    characters.append( character );
  }

});