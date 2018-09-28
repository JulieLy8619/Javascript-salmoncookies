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
  this.objTotalCookiesSaleForDayVari = 0;
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
    var tempCalcCookiesPerHr = this.CalcCookiesSalePerHr();
    this.cookiesSoldEachHr.push(tempCalcCookiesPerHr);
    this.objTotalCookiesSaleForDayVari = this.objTotalCookiesSaleForDayVari + tempCalcCookiesPerHr;
  }
}

//calc and/or store total for a store (walks through array and adds it up)

// Store.prototype.totalCookiesSaleForDay = function() {
//   var totalCookiesSaleForDayVari = 0;
//   //started at 1 of array so I could add one before to current
//   for (var m = 1; m < this.cookiesSoldEachHr.length; m++) {
//     console.log('made it to day cookies for loop '+ m);
//     var totalCookiesSaleForDayVari = 0;
//     totalCookiesSaleForDayVari= this.cookiesSoldEachHr[(m-1)] + this.cookiesSoldEachHr[m]; 
//     this.objTotalCookiesSaleForDayVari = totalCookiesSaleForDayVari;
//   }
// }

//rendering back to site
Store.prototype.rendersHours = function() {
  //ref a section in the HTML
  this.CalcCookiesSalePerHr();
  var storesContainer = document.getElementById('stores');
  var headerElement = document.createElement('h2');
  headerElement.textContent= this.name;
  storesContainer.appendChild(headerElement);

  var ulEl= document.createElement('ul');

  for (var y = 0; y < this.cookiesSoldEachHr.length; y++) { 
    //this is the same as
    // for (var = y; y < this.cookiesSoldEachHours.length; y++)
    var listItemEl = document.createElement('li');
    
      if ((y+6) < 12) {
        //console.log('if ' + y);
        listItemEl.textContent = ((y+6) + 'am: ' + this.cookiesSoldEachHr[y] + ' cookies');
        console.log('if ' + listItemEl.textContent);
        //ulEl.appendChild(listItemEl);
      } else if (y+6 === 12) {
        //console.log('else if ' + y);
        listItemEl.textContent = ((y+6) + 'pm: ' + this.cookiesSoldEachHr[y] + ' cookies');
        console.log('else if ' + listItemEl.textContent);
        //ulEl.appendChild(listItemEl);
      } else {
        //console.log('else ' + y);
        listItemEl.textContent = ((y+6-12) + 'pm: ' + this.cookiesSoldEachHr[y] + ' cookies');
        console.log('else ' + listItemEl.textContent);
        //ulEl.appendChild(listItemEl);
      }

      
      //ulEl.appendChild(listItemEl);
    
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
  //console.log(i);
  console.log(storeArray[i].name);
  storeArray[i].CalcCookiesSalePerHr();
  storeArray[i].buildCookiesSoldEachHrArray();
  console.log('cookie array ' + storeArray[i].cookiesSoldEachHr);
  storeArray[i].rendersHours();
  console.log(storeArray[i].objTotalCookiesSaleForDayVari);
  // storeArray[i].totalCookiesSaleForDay();
  // console.log('total cookies for the day ' + storeArray[i].objTotalCookiesSaleForDayVari);
}