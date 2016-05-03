
var dogRequest = new XMLHttpRequest() ;
var catRequest = new XMLHttpRequest() ;
var dogLoc = document.getElementById("dogFood")
var catLoc = document.getElementById("catFood")


function dogLists(argument) {
  var dogData = JSON.parse(this.responseText).dog_brands ;
  for (var i = 0; i < dogData.length; i++) {
    // console.log( dogData[i] ) ;
    var callData = "<h2>" + dogData[i].name + "</h2>"

    var dogType = dogData[i].types ;
    for (var k = 0; k < dogType.length; k++) {
      var dogVol = dogType[k].volumes;
      var callType = "<h4>" + dogType[i].type + "</h4>"

      // console.log( dogVol);
      var callNamePrice = "";
      for (var b = 0; b < dogVol.length; b++) {
        dogVol[b];
        callNamePrice += "<p>" + dogVol[b].name + "</p>" + "<p>$" + dogVol[b].price + "</p>"

        // console.log( dogVol[b].name);
      }
    };
      dogLoc.innerHTML += "<div>" + callData + callType  + callNamePrice + "</div>";

  };
};





function catLists(argument) {
  var catData = JSON.parse(this.responseText).cat_brands ;
  console.log(callData);
  for (var i = 0; i < catData.length; i++) {
    // console.log( catData[i] ) ;
    var callData = "<h2>" + catData[i].name + "</h2>"

    var catType = catData[i].types ;
    for (var k = 0; k < catType.length; k++) {
      var catVol = catType[k].volumes;
      var callType = "<h4>" + catType[i].type + "</h4>"

      // console.log( catVol);
      var callNamePrice = "";
      for (var b = 0; b < catVol.length; b++) {
        catVol[b];
        callNamePrice += "<p>" + catVol[b].name + "</p>" + "<p>$" + catVol[b].price + "</p>"

        // console.log( catVol[b].name);
      }
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
