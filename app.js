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
Store.prototype.calcCookiesSalePerHr = function () {
  var randAmt = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHr + 1) + this.minCustPerHr);
  return Math.round(randAmt * this.aveCookiesPerCustPerSale);
};
//builds an array of the cookies sold each hour
Store.prototype.buildCookiesSoldEachHrArray = function() {
  for (var k = 0; k < 16; k++) {
    var tempCalcCookiesPerHr = this.calcCookiesSalePerHr();
    this.cookiesSoldEachHr.push(tempCalcCookiesPerHr);
    this.objTotalCookiesSaleForDayVari = this.objTotalCookiesSaleForDayVari + tempCalcCookiesPerHr;
  }
};

//rendering back to site
Store.prototype.rendersHours = function() {
  //ref a section in the HTML
  this.calcCookiesSalePerHr();
  var storesContainer = document.getElementById('stores');
  var headerElement = document.createElement('h2');
  headerElement.textContent= this.name;
  storesContainer.appendChild(headerElement);

  var ulEl= document.createElement('ul');
  var listItemEltotal = document.createElement('li');

  for (var y = 0; y < this.cookiesSoldEachHr.length; y++) { 
    var listItemEl = document.createElement('li');
    if ((y+6) < 12) {
      listItemEl.textContent = ((y+6) + 'am: ' + this.cookiesSoldEachHr[y] + ' cookies');
    } else if (y+6 === 12) {
      listItemEl.textContent = ((y+6) + 'pm: ' + this.cookiesSoldEachHr[y] + ' cookies');
    } else {
      listItemEl.textContent = ((y+6-12) + 'pm: ' + this.cookiesSoldEachHr[y] + ' cookies');
    }
    ulEl.appendChild(listItemEl);
  }

  listItemEltotal.textContent = ('Total: ' + this.objTotalCookiesSaleForDayVari + ' cookies');
  ulEl.appendChild(listItemEltotal);

  storesContainer.appendChild(ulEl);
};

//funcion to build header
//need to figure out how to put in first blank cell in header
//need to combine rendersTableHeader with rendersTableRows
Store.prototype.rendersTableHeader = function() {
  var tableHeaderEl = document.getElementById('tablehead');
  var trEl = document.createElement('tr');
  //var tableRowTotalEl = document.createElement('tr');
  //var tableHeaderTotal = document.createElement('th');

  for (var m = -1; m < this.cookiesSoldEachHr.length; m++) {
    var thEl = document.createElement('th'); 
    //need to figure out space at begining of time array so it's not right above store names
    if (m < 0) {
      thEl.textContent = ('Store Name: ');
    } else if ((m+6) < 12) {
      thEl.textContent = ((m+6) + ':00 am');
    } else if (m+6 === 12) {
      thEl.textContent = ((m+6) + ':00 pm');
    } else if ((m+6) < 21) {
      thEl.textContent = ((m+6-12) + ':00 pm');
    } else {
      thEl.textContent = 'Total';
    }
    trEl.appendChild(thEl);
  }
  tableHeaderEl.appendChild(trEl);
};

//function to build store rows
Store.prototype.rendersTableRows = function() {
  var tableRowEl = document.getElementById('tabledetails');
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  //var arrayForTotalsForAllStoresPerHour= [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

  trEl.appendChild(thEl); 
  for (var r = 0; r < (this.cookiesSoldEachHr.length + 1); r++) { //why does this one need the length+1, while renderstableheader function didn't need the length +1
    if (r < this.cookiesSoldEachHr.length) {
      thEl.textContent = this.name;
      var tdEl = document.createElement('td');
      tdEl.textContent = (this.cookiesSoldEachHr[r]);
    } else {
      tdEl.textContent = this.objTotalCookiesSaleForDayVari;
    }
    trEl.appendChild(tdEl);
  }
  tableRowEl.appendChild(trEl);
};

var handleMakeNewStore = function (submitEvent) {
  submitEvent.preventDefault();
  submitEvent.stopPropagation();//this is just for habit right now, this doesn't do anything to this code currently
  //console.log(submitEvent.target.name.value);
  var newAddingStore;
  var newStoreName = submitEvent.target.storename.value;
  var newStoreMin = submitEvent.target.storemin.value;
  var newStoreMax = submitEvent.target.storemax.value;
  var newStoreAveCookies = submitEvent.target.storeave.value;

  //console.log(submitEvent.target.storename.value);

  //console.log(newStoreName, newStoreMin, newStoreMax, newStoreAveCookies);

  newAddingStore = new Store(newStoreName, newStoreMin, newStoreMax, newStoreAveCookies);
  //console.log(newAddingStore);
  storeArray.push(newAddingStore);
  console.log('in handle ' + storeArray);
};

var newStoreForm = document.getElementById('newstoregenerator');
newStoreForm.addEventListener('submit', handleMakeNewStore);


//creating objects
var pikeAndFirstStore = new Store('First and Pike', 23, 65, 6.3);
var seaTacStore = new Store('Sea Tac', 3, 24, 1.2);
var seattleCenterStore = new Store('Seattle Center', 11, 38, 3.7);
var capitolHillStore = new Store('Capitol Hill', 20, 38, 2.3);
var alkiStore = new Store('Alki', 2, 16, 4.6);


var storeArray = [pikeAndFirstStore, seaTacStore, seattleCenterStore, capitolHillStore,alkiStore];
//var arrayForTotalsForAllStoresPerHour= [];
var arrayForTotalsForAllStoresPerHour= [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

for (var i = 0; i < storeArray.length; i++) {
  storeArray[i].calcCookiesSalePerHr();
  storeArray[i].buildCookiesSoldEachHrArray();
  storeArray[i].rendersTableRows();

  //calcs correct for the totals per hour for all the stores, need to figure out how to print this to screen, maybe a function that takes in array arrayForTotalsForAllStoresPerHour as a parameter and prints it to screen?
  for (var q = 0; q < storeArray[i].cookiesSoldEachHr.length; q++) {
    //console.log('i is ' + i);
    //console.log('i made it into for loop, q is ' + q);
    arrayForTotalsForAllStoresPerHour[q] = arrayForTotalsForAllStoresPerHour[q] + storeArray[i].cookiesSoldEachHr[q];
    //console.log('inside for loop ' + arrayForTotalsForAllStoresPerHour);
  }

  //console.log('outside for loop ' + arrayForTotalsForAllStoresPerHour);
}
pikeAndFirstStore.rendersTableHeader();
//this needs to run after the arrays are build in the above for loop
//just need it to render once, currently only assuming they are open for specific hours, else need to do something to determine who is open the longest and have it fill in blank per store who isn't open during the hours the longer open store is open



