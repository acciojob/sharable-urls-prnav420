// your code here
document.addEventListener("DOMContentLoaded", function() {
var name = document.getElementById("name");
var year = document.getElementById("year");
var h3 = document.getElementById("h3");
var btn = document.getElementById("button");

var form = document.querySelector("form");

function res(event) {
  event.preventDefault();
  var namecontent = name.value;
  var yearcontent = year.value;
  var h3cont = "https://localhost:8080/";

  if (namecontent && yearcontent) {
    h3cont += "?name=" + namecontent + "&year=" + yearcontent;
  } else if (namecontent && !yearcontent) {
    h3cont += "?name=" + namecontent;
  } else if (!namecontent && yearcontent) {
    h3cont += "?year=" + yearcontent;
  }
 
  h3.textContent = h3cont;
}

form.addEventListener("submit", res);
});
