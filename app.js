'use strict';

//random function taken from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random (which was given by Nicholas)
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

/*
==================
notes and hints:
-will need to use DOM for getting it to show lists on sales page
==================
*/

//array of cookies purch
var allStoresCookiesPurchArray = [];

var firstAndPikeStore = {
  minCust: 23,
  maxCust: 65,
  aveCookie: 6.3
  //randCustPerHr: getRandomInt(23,65) 

};
//calc cookies per hour and put in array
var firstAndPikeCookiesPurchArray = [];
var firstAndPikeCookiesPurchTotal = 0;
for (var i = 0; i< 14; i++) {
  //calcs random cust number with the cookie ave
  //how do I make it reset it's random
  var firstAndPikeCookiesPurch = firstAndPikeStore.aveCookie * (getRandomInt(firstAndPikeStore.minCust, firstAndPikeStore.maxCust))
  //console.log('cokkie ave: ' + firstAndPikeStore.aveCookie);
  //console.log('rand cust: ' + firstAndPikeStore.randCustPerHr);
  //console.log('cookie ave per day: ' + firstAndPikeCookiesPurch);

  //this puts it into the store's array
  firstAndPikeCookiesPurchArray[i] = firstAndPikeCookiesPurch;
  
  //this is for the store total
  //console.log('store total (before adding new total): ' + firstAndPikeCookiesPurchTotal);
  firstAndPikeCookiesPurchTotal = firstAndPikeCookiesPurchTotal + firstAndPikeCookiesPurch;
  console.log('array: ' + firstAndPikeCookiesPurchArray);
  //console.log('store total (after adding new total): ' + firstAndPikeCookiesPurchTotal);
}

//get it to write to the html
var liItem = document.getElementsByClassName('timeList');
for (var j=0; j < firstAndPikeCookiesPurchArray.length; j++) {
  //console.log('i made it into j for loop');
  if ((j+6) > 12) {
    //console.log('i made it in AM if loop');
    liItem[j].item = (j+6) + 'am: ' + firstAndPikeCookiesPurchArray[j] + ' cookies'
    console.log(liItem[j].item);
  } else {
    //console.log('I made it into the PM if loop');
    liItem[j].item = (j+6-12) + 'pm: ' + firstAndPikeCookiesPurchArray[j] + ' cookies'
    console.log(liItem[j].item);
  }
}

//firstAndPikeCookiesPurchArray.appendChild(ulel);

// var seatacAirportStore {
//   minCust: 3,
//   maxCust: 24,
//   aveCookie: 1.2
//   randCustPerHr: getRandomInt(this.minCust, this.maxCust)
// };

// var seattleCenterStore {
//   minCust: 11,
//   maxCust: 38,
//   aveCookie: 3.7
//   randCustPerHr: getRandomInt(this.minCust, this.maxCust)

// };

// var capitolHillStore {
//   minCust: 20,
//   maxCust: 38,
//   aveCookie: 2.3
//   randCustPerHr: getRandomInt(this.minCust, this.maxCust)

// };

// var alikStore {
//   minCust: 2,
//   maxCust: 16,
//   aveCookie: 4.6
//   randCustPerHr: getRandomInt(this.minCust, this.maxCust)
// };

