'use strict';


/*==================
functions
====================
*/

//random function taken from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random (which was given by Nicholas)
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}



function calcAndDisplayCoookies(storeObject, storeClassId, storeId) {
  var storeCookiesPurchArray = [];
  var storeCookiesPurchTotal = 0;
  for (var i = 0; i< 15; i++) {
  //calcs random cust number with the cookie ave
    var storeCookiesPurch = storeObject.aveCookie * (getRandomInt(storeObject.minCust, storeObject.maxCust))

    //this puts it into the store's array
    storeCookiesPurchArray[i] = storeCookiesPurch;
    
    //this is for the store total
    storeCookiesPurchTotal = storeCookiesPurchTotal + storeCookiesPurch;
  }

  //get it to write to the html
  var liItem = document.getElementsByClassName(storeClassId);
  for (var j=0; j < storeCookiesPurchArray.length; j++) {
    if ((j+6) < 12) {
      liItem[j].item = (j+6) + 'am: ' + storeCookiesPurchArray[j] + ' cookies'
      liItem[j].firstChild.nodeValue = liItem[j].item;
    } else if (j+6 === 12) {
      liItem[j].item = (j+6) + 'pm: ' + storeCookiesPurchArray[j] + ' cookies'
      liItem[j].firstChild.nodeValue = liItem[j].item;
    } else {
      liItem[j].item = (j+6-12) + 'pm: ' + storeCookiesPurchArray[j] + ' cookies'
      liItem[j].firstChild.nodeValue = liItem[j].item;
    }
  }

  //get total to write to page
  var liTotalItem = document.getElementById(storeId);
  liTotalItem.textContent = 'Total: ' + storeCookiesPurchTotal + ' cookies';
}

/*==================
Objects
====================
*/
var firstAndPikeStore = {
  name: 'First and Pike' //created in class for DOM things
  minCust: 23,
  maxCust: 65,
  aveCookie: 6.3,
  //randCustPerHr: getRandomInt(this.minCust, this.maxCust) 
  cookiesSoldEachHr: [] //class suggested added to object
};
//this is the random function we used in class
//wanted obj name so it was tied to the object, vs a function
//this adds it to the object as a method, but we didn't write it above because it is hard to track the curly brackets
firstAndPikeStore.CalcCustPerHr = function () {
  var randAmt = Math.floor (Math.random() * (this.max - this.min + 1) + this.min);
  return math.round(randAmt * this.aveCookie);
}
//another method added to object
firstAndPikeStore.calcCookiesSoldEachHr = function() {
  for (var k = 0; k < 15; k++) {
    this.calcCookiesSoldEachHr.push(this.CalcCustPerHr());
  }

}

//rendering back to site
firstAndPikeStore.rendersHours = function() {
  //ref a section in the HTML
  this.calcCookiesSoldEachHr();
  var storesContainer = document.getElementById('stores');
  var headerElement = document.createElement('h2');
  headerElement.textContent= this.name;
  storesContainer.appendChild(headerEl);

  var ulEl= document.createElement('ul');

  for (var y in this.cookiesSoldEachHr) { 
    //this is the same as
    // for (var = y; y < this.cookiesSoldEachHours.length; y++)
    var listItemEl = document.createElement('li');
    listItemEl.textContent = this.cookiesSoldEachHr[y];
    ulEl.appendChild(listItemEl);

  }
  storesContainer.appendChild(ulEl);
}

var seatacAirportStore = {
  minCust: 3,
  maxCust: 24,
  aveCookie: 1.2 //ave cookies per customer
  //randCustPerHr: getRandomInt(this.minCust, this.maxCust)
};

var seattleCenterStore = {
  minCust: 11,
  maxCust: 38,
  aveCookie: 3.7
  //randCustPerHr: getRandomInt(this.minCust, this.maxCust)
};

var capitolHillStore = {
  minCust: 20,
  maxCust: 38,
  aveCookie: 2.3
  //randCustPerHr: getRandomInt(this.minCust, this.maxCust)
};

var alikStore = {
  minCust: 2,
  maxCust: 16,
  aveCookie: 4.6
  //randCustPerHr: getRandomInt(this.minCust, this.maxCust)
};

/*==================
Global variables
====================
*/
//array of cookies purch
var allStoresCookiesPurchArray = [];

//array of objects for function
var allObjects = [firstAndPikeStore, seatacAirportStore, seattleCenterStore, capitolHillStore, alikStore];

//array of store's class IDs for DOM for function
var allStoreClassIds = ['firstAndPikeTimeList', 'seaTacTimeList', 'seattleCenterTimeList', 'capHillTimeList', 'alkiTimeList'];

//array of store's ID;s for DOm for function
var allStoreIds = ['firstAndPikeTotaloflist', 'seaTacTotaloflist', 'seattleCenterTotaloflist', 'capHillTotaloflist', 'alkiTotaloflist'];


for (var m = 0; m < allObjects.length; m++) {
  calcAndDisplayCoookies(allObjects[m], allStoreClassIds[m], allStoreIds[m]);
}
