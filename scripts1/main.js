var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/new-picture3.jpg') {
      myImage.setAttribute ('src','images/new-picture3.jpg');
    } else {
      myImage.setAttribute ('src','images/new-picture3.jpg');
  }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'You become rich, ' + myName;
}

 if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'You become rich, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}