
var myRequest = new XMLHttpRequest();
var myRequest = new XMLHttpRequest();


function dogLists(argument) {
  for (var i = 0; i < dogFood.length; i++) {
    dogFood[i]

      document.getElementById("dogFood").innerHTML = this.responseText ;
      var data = JSON.parse(this.responseText);

    };
  };





function catLists() {

      document.getElementById("catFood").innerHTML = this.responseText ;
      var data = JSON.parse(this.responseText) ;
  };


myRequest.addEventListener("load", catLists);
myRequest.open("GET", "catJSON.json");
myRequest.send();

myRequest.addEventListener("load", dogLists);
myRequest.open("GET", "dogJSON.json");
myRequest.send();
