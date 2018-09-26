'use strict';

//i made a new app.js to see if it needed a new file to apply it's changes, it did not work
//nicolas said we could work on debugging it on 9-29-18 sat lab

//make objects using constructor functions

function Store(name, minCust, maxCust, aveCookies) {
  this.name = name;
  this.minCustPerHr = minCust;
  this.maxCustPerHour = maxCust;
  this.aveCookiesPerCustPerSale = aveCookies;
  this.cookiesSoldEachHr = [];
}

//adding methods for object constructor function
//random function we built in class
//calcs random customer per hour AND mults it against ave cookies so we  get random cookie sales per hr
Store.prototype.CalcCookiesSalePerHr = function () {
  var randAmt = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHr + 1) + this.minCustPerHr);
  return Math.round(randAmt * this.aveCookiesPerCustPerSale);
}
//builds an array of the cookies sold each hour
Store.prototype.buildCookiesSoldEachHrArray = function() {
  for (var k = 0; k < 15; k++) {
    this.cookiesSoldEachHr.push(this.CalcCookiesSalePerHr());
  }

}

//rendering back to site
Store.prototype.rendersHours = function() {
  //ref a section in the HTML
  this.CalcCookiesSalePerHr();
  var storesContainer = document.getElementById('stores');
  var headerElement = document.createElement('h2');
  headerElement.textContent= this.name;
  storesContainer.appendChild(headerElement);

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

//creating objects
var pikeAndFirstStore = new Store('First and Pike', 23, 65, 6.3);
var seaTacStore = new Store('Sea Tac', 3, 24, 1.2);
var seattleCenterStore = new Store('Seattle Center', 11, 38, 3.7);
var capitolHillStore = new Store('Capitol Hill', 20, 38, 2.3);
var alkiStore = new Store('Alki', 2, 16, 4.6);

var storeArray = [pikeAndFirstStore, seaTacStore, seattleCenterStore, capitolHillStore,alkiStore];

for (var i = 0; i < storeArray.length; i++) {
  storeArray[i].CalcCookiesSalePerHr();
  storeArray[i].buildCookiesSoldEachHrArray();
  storeArray[i].rendersHours();
}