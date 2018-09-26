'use strict';

//i made a new app.js to see if it needed a new file to apply it's changes, it did not work
//nicolas said we could work on debugging it on 9-29-18 sat lab

//make objects using constructor functions

function Store(name, minCust, maxCust, aveCookies) {
  this.name = name;
  this.minCustPerHr = minCust;
  this.maxCustPerHour = maxCust;
  this.aveCookiesPerCustPerSale = aveCookies;
}

//adding methods for object constructor function



//creating objects
var pikeAndFirstStore = Store('First and Pike', 23, 65, 6.3);
var seaTacStore = Store('Sea Tac', 3, 24, 1.2);
var seattleCenterStore = Store('Seattle Center', 11, 38, 3.7);
var capitolHillStore = Store('Capitol Hill', 20, 38, 2.3);
var alkiStore = Store('Alki', 2, 16, 4.6);