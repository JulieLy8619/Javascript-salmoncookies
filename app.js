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
for (var i = 0; i< 15; i++) {
  //calcs random cust number with the cookie ave
  //need to work on fixing random so it is a method
  var firstAndPikeCookiesPurch = firstAndPikeStore.aveCookie * (getRandomInt(firstAndPikeStore.minCust, firstAndPikeStore.maxCust))
  //console.log('cokkie ave: ' + firstAndPikeStore.aveCookie);
  //console.log('rand cust: ' + firstAndPikeStore.randCustPerHr);
  //console.log('cookie ave per day: ' + firstAndPikeCookiesPurch);

  //this puts it into the store's array
  firstAndPikeCookiesPurchArray[i] = firstAndPikeCookiesPurch;
  
  //this is for the store total
  //console.log('store total (before adding new total): ' + firstAndPikeCookiesPurchTotal);
  firstAndPikeCookiesPurchTotal = firstAndPikeCookiesPurchTotal + firstAndPikeCookiesPurch;
  //console.log('array: ' + firstAndPikeCookiesPurchArray);
  //console.log('store total (after adding new total): ' + firstAndPikeCookiesPurchTotal);
}

//get it to write to the html
var liItem = document.getElementsByClassName('firstAndPikeTimeList');
for (var j=0; j < firstAndPikeCookiesPurchArray.length; j++) {
  //console.log('i made it into j for loop');
  if ((j+6) < 12) {
    //console.log('i made it in AM if loop');
    liItem[j].item = (j+6) + 'am: ' + firstAndPikeCookiesPurchArray[j] + ' cookies'
    //console.log(liItem[j].item);
    liItem[j].firstChild.nodeValue = liItem[j].item;
  } else if (j+6 === 12) {
    liItem[j].item = (j+6) + 'pm: ' + firstAndPikeCookiesPurchArray[j] + ' cookies'
    //console.log(liItem[j].item);
    liItem[j].firstChild.nodeValue = liItem[j].item;
  } else {
    //console.log('I made it into the PM if loop');
    liItem[j].item = (j+6-12) + 'pm: ' + firstAndPikeCookiesPurchArray[j] + ' cookies'
    //console.log(liItem[j].item);
    liItem[j].firstChild.nodeValue = liItem[j].item;
  }
}

//get total to write to page
var liTotalItem = document.getElementById('firstAndPikeTotaloflist');
//console.log(liTotalItem);
liTotalItem.textContent = 'Total: ' + firstAndPikeCookiesPurchTotal + ' cookies';

//================================
//================================
var seatacAirportStore = {
  minCust: 3,
  maxCust: 24,
  aveCookie: 1.2
  //randCustPerHr: getRandomInt(this.minCust, this.maxCust)
};
//calc cookies per hour and put in array
var seatacAirportCookiesPurchArray = [];
var seatacAirportCookiesPurchTotal = 0;
for (var i = 0; i< 15; i++) {
  //calcs random cust number with the cookie ave
  var seatacAirportCookiesPurch = seatacAirportStore.aveCookie * (getRandomInt(seatacAirportStore.minCust, seatacAirportStore.maxCust))

  //this puts it into the store's array
  seatacAirportCookiesPurchArray[i] = seatacAirportCookiesPurch;
  
  //this is for the store total
  seatacAirportCookiesPurchTotal = seatacAirportCookiesPurchTotal + seatacAirportCookiesPurch;
  //console.log('array: ' + seatacAirportCookiesPurchArray);
}

//get it to write to the html
var liItem = document.getElementsByClassName('seaTacTimeList');
for (var j=0; j < seatacAirportCookiesPurchArray.length; j++) {
  if ((j+6) < 12) {
    liItem[j].item = (j+6) + 'am: ' + seatacAirportCookiesPurchArray[j] + ' cookies'
    liItem[j].firstChild.nodeValue = liItem[j].item;
  } else if (j+6 === 12) {
    liItem[j].item = (j+6) + 'pm: ' + seatacAirportCookiesPurchArray[j] + ' cookies'
    liItem[j].firstChild.nodeValue = liItem[j].item;
  } else {
    liItem[j].item = (j+6-12) + 'pm: ' + seatacAirportCookiesPurchArray[j] + ' cookies'
    liItem[j].firstChild.nodeValue = liItem[j].item;
  }
}

//get total to write to page
var liTotalItem = document.getElementById('seaTacTotaloflist');
//console.log(liTotalItem);
liTotalItem.textContent = 'Total: ' + seatacAirportCookiesPurchTotal + ' cookies';

//================================
//================================
var seattleCenterStore = {
  minCust: 11,
  maxCust: 38,
  aveCookie: 3.7
  //randCustPerHr: getRandomInt(this.minCust, this.maxCust)
};
//calc cookies per hour and put in array
var seattleCenterCookiesPurchArray = [];
var seattleCenterCookiesPurchTotal = 0;
for (var i = 0; i< 15; i++) {
  //calcs random cust number with the cookie ave
  var seattleCenterCookiesPurch = seattleCenterStore.aveCookie * (getRandomInt(seattleCenterStore.minCust, seattleCenterStore.maxCust))

  //this puts it into the store's array
  seattleCenterCookiesPurchArray[i] = seattleCenterCookiesPurch;
  
  //this is for the store total
  seattleCenterCookiesPurchTotal = seattleCenterCookiesPurchTotal + seattleCenterCookiesPurch;
}

//get it to write to the html
var liItem = document.getElementsByClassName('seattleCenterTimeList');
for (var j=0; j < seattleCenterCookiesPurchArray.length; j++) {
  if ((j+6) < 12) {
    liItem[j].item = (j+6) + 'am: ' + seattleCenterCookiesPurchArray[j] + ' cookies'
    liItem[j].firstChild.nodeValue = liItem[j].item;
  } else if (j+6 === 12) {
    liItem[j].item = (j+6) + 'pm: ' + seattleCenterCookiesPurchArray[j] + ' cookies'
    liItem[j].firstChild.nodeValue = liItem[j].item;
  } else {
    liItem[j].item = (j+6-12) + 'pm: ' + seattleCenterCookiesPurchArray[j] + ' cookies'
    liItem[j].firstChild.nodeValue = liItem[j].item;
  }
}

//get total to write to page
var liTotalItem = document.getElementById('seattleCenterTotaloflist');
liTotalItem.textContent = 'Total: ' + seattleCenterCookiesPurchTotal + ' cookies';

//================================
//================================
var capitolHillStore = {
  minCust: 20,
  maxCust: 38,
  aveCookie: 2.3
  //randCustPerHr: getRandomInt(this.minCust, this.maxCust)
};
//calc cookies per hour and put in array
var capitolHillCookiesPurchArray = [];
var capitolHillCookiesPurchTotal = 0;
for (var i = 0; i< 15; i++) {
  //calcs random cust number with the cookie ave
  var capitolHillCookiesPurch = capitolHillStore.aveCookie * (getRandomInt(capitolHillStore.minCust, capitolHillStore.maxCust))

  //this puts it into the store's array
  capitolHillCookiesPurchArray[i] = capitolHillCookiesPurch;
  
  //this is for the store total
  capitolHillCookiesPurchTotal = capitolHillCookiesPurchTotal + capitolHillCookiesPurch;
}

//get it to write to the html
var liItem = document.getElementsByClassName('capHillTimeList');
for (var j=0; j < capitolHillCookiesPurchArray.length; j++) {
  if ((j+6) < 12) {
    liItem[j].item = (j+6) + 'am: ' + capitolHillCookiesPurchArray[j] + ' cookies'
    liItem[j].firstChild.nodeValue = liItem[j].item;
  } else if (j+6 === 12) {
    liItem[j].item = (j+6) + 'pm: ' + capitolHillCookiesPurchArray[j] + ' cookies'
    liItem[j].firstChild.nodeValue = liItem[j].item;
  } else {
    liItem[j].item = (j+6-12) + 'pm: ' + capitolHillCookiesPurchArray[j] + ' cookies'
    liItem[j].firstChild.nodeValue = liItem[j].item;
  }
}

//get total to write to page
var liTotalItem = document.getElementById('capHillTotaloflist');
liTotalItem.textContent = 'Total: ' + capitolHillCookiesPurchTotal + ' cookies';

//================================
//================================
var alikStore = {
  minCust: 2,
  maxCust: 16,
  aveCookie: 4.6
  //randCustPerHr: getRandomInt(this.minCust, this.maxCust)
};
//calc cookies per hour and put in array
var alikCookiesPurchArray = [];
var alikCookiesPurchTotal = 0;
for (var i = 0; i< 15; i++) {
  //calcs random cust number with the cookie ave
  var alikCookiesPurch = alikStore.aveCookie * (getRandomInt(alikStore.minCust, alikStore.maxCust))

  //this puts it into the store's array
  alikCookiesPurchArray[i] = alikCookiesPurch;
  
  //this is for the store total
  alikCookiesPurchTotal = alikCookiesPurchTotal + alikCookiesPurch;
}

//get it to write to the html
var liItem = document.getElementsByClassName('alkiTimeList');
for (var j=0; j < alikCookiesPurchArray.length; j++) {
  if ((j+6) < 12) {
    liItem[j].item = (j+6) + 'am: ' + alikCookiesPurchArray[j] + ' cookies'
    liItem[j].firstChild.nodeValue = liItem[j].item;
  } else if (j+6 === 12) {
    liItem[j].item = (j+6) + 'pm: ' + alikCookiesPurchArray[j] + ' cookies'
    liItem[j].firstChild.nodeValue = liItem[j].item;
  } else {
    liItem[j].item = (j+6-12) + 'pm: ' + alikCookiesPurchArray[j] + ' cookies'
    liItem[j].firstChild.nodeValue = liItem[j].item;
  }
}

//get total to write to page
var liTotalItem = document.getElementById('alkiTotaloflist');
liTotalItem.textContent = 'Total: ' + alikCookiesPurchTotal + ' cookies';


