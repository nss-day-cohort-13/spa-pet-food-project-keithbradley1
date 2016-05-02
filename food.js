function productLists() {

      document.getElementById("dogFood").innerHTML =   this.responseText;

  };

// Create an XHR object
var myRequest = new XMLHttpRequest();

// XHR objects emit events when their operation is complete, or an error occurs
myRequest.addEventListener("load", productLists);
// myRequest.addEventListener("error", executeThisCodeIfXHRFails);

// Then tell the XHR object exactly what to do
myRequest.open("GET", "dogJSON.json");

// Tell the XHR object to start
myRequest.send();