
var dogRequest = new XMLHttpRequest() ;
var catRequest = new XMLHttpRequest() ;
var dogLoc = document.getElementById("dogFood");
var catLoc = document.getElementById("catFood");


function dogLists() {
  var dogData = JSON.parse(this.responseText).dog_brands ;
  for (var i = 0; i < dogData.length; i++) {
    // console.log( dogData[i] ) ;
    var callData = "<h2>" + "<p>" + "Dog Food Brands" + "</p>" + dogData[i].name + "</h2>";

    var dogType = dogData[i].types ;
    console.log(dogData[i].types );
    for (var k = 0; k < dogType.length; k++) {

      var callType;
      callType += "<h4>" + "<p>" + dogType[k].type + "</p>" + "</h4>";

      var dogVol = dogType[k].volumes;

      console.log( callType);

      var callNamePrice;

      for (var b = 0; b < dogVol.length; b++) {
        dogVol[b];
        callNamePrice += "<p>" + dogVol[b].name + ":" + " $" + dogVol[b].price + "</p>";

        console.log( dogVol[b].name);
      }
    };
      dogLoc.innerHTML += "<div>" + callData + callType  + callNamePrice + "</div>";
    };
};

function catLists() {
  var catData = JSON.parse(this.responseText).cat_brands ;

  for (var i = 0; i < catData.length; i++) {
    // console.log( catData[i] ) ;
    var callData = "<h2>" + "<p>" + "Cat Food Brand" + "</p>"  + catData[i].name + "</h2>";

    var catType = catData[i].types ;
    for (var k = 0; k < catType.length; k++) {
      var catVol = catType[k].volumes;
      var callType = "<h4>" + catType[i].type + "</h4>";

      // console.log( catVol);
      var callNamePrice = "";
      for (var b = 0; b < catVol.length; b++) {
        catVol[b];
        callNamePrice += "<p>" + catVol[b].name + ": " + " $" + catVol[b].price + "</p>";
        console.log( catVol[b].name);
      };
    };
      catLoc.innerHTML += "<div>" + callData + callType  + callNamePrice + "</div>";

  };
};


catRequest.addEventListener("load", catLists);
catRequest.open("GET", "catJSON.json");
catRequest.send();

dogRequest.addEventListener("load", dogLists);
dogRequest.open("GET", "dogJSON.json");
dogRequest.send();

