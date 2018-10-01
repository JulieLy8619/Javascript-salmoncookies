'use strict';


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
  for (var k = 0; k < 15; k++) {
    var tempCalcCookiesPerHr = this.calcCookiesSalePerHr();
    this.cookiesSoldEachHr.push(tempCalcCookiesPerHr);
    this.objTotalCookiesSaleForDayVari = this.objTotalCookiesSaleForDayVari + tempCalcCookiesPerHr;
  }
};

//funcion to build header
Store.prototype.rendersTableHeader = function() {
  var tableHeaderEl = document.getElementById('tablehead');
  var trEl = document.createElement('tr');

  for (var m = -1; m < this.cookiesSoldEachHr.length; m++) {
    var thEl = document.createElement('th');
    if (m < 0) {
      thEl.textContent = ('Store Name: ');
    } else if ((m+6) < 12) {
      thEl.textContent = ((m+6) + ':00 am');
    } else if (m+6 === 12) {
      thEl.textContent = ((m+6) + ':00 pm');
    } else if ((m+6) < 20) {
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

  trEl.appendChild(thEl); 
  for (var r = 0; r < (this.cookiesSoldEachHr.length + 1); r++) {
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


//creating objects
var pikeAndFirstStore = new Store('First and Pike', 23, 65, 6.3);
var seaTacStore = new Store('Sea Tac', 3, 24, 1.2);
var seattleCenterStore = new Store('Seattle Center', 11, 38, 3.7);
var capitolHillStore = new Store('Capitol Hill', 20, 38, 2.3);
var alkiStore = new Store('Alki', 2, 16, 4.6);


var storeArray = [pikeAndFirstStore, seaTacStore, seattleCenterStore, capitolHillStore, alkiStore];
var arrayForTotalsForAllStoresPerHour= [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];


//adds up the columns for the totals line
var allStoresSalesByHour = function(renderStoreArrays) {
  for (var i = 0; i < (renderStoreArrays.length); i++) {
    for (var q = 0; q < renderStoreArrays[i].cookiesSoldEachHr.length; q++) {
      if (q < renderStoreArrays[i].cookiesSoldEachHr.length - 1) {
        arrayForTotalsForAllStoresPerHour[q] = arrayForTotalsForAllStoresPerHour[q] + renderStoreArrays[i].cookiesSoldEachHr[q];
      } else { //this is summing the line total
        arrayForTotalsForAllStoresPerHour[q] = arrayForTotalsForAllStoresPerHour[q]+ renderStoreArrays[i].objTotalCookiesSaleForDayVari;
      }
    }
  }
};

//function to render footer row
var tablefooterEl = document.getElementById('tablefoot');
var rendersTableFooter = function(paramArrayForTotalsForAllStoresPerHour) {
  var trFootEl = document.createElement('tr');
  var trfooterheaderEl = document.createElement('th');

  for (var g = -1; g < paramArrayForTotalsForAllStoresPerHour.length; g++) {
    if (g < 0) {
      trfooterheaderEl.textContent = ('Total: ');
      trFootEl.appendChild(trfooterheaderEl);
    } else {
      var tdFootEl = document.createElement('td');
      tdFootEl.textContent = paramArrayForTotalsForAllStoresPerHour[g];
      console.log(tdFootEl);
      trFootEl.appendChild(tdFootEl);
    }
  }
  tablefooterEl.appendChild(trFootEl);
};

//this walks through the store array and builds it (does random, make array, and renders
var renderStores = function(renderStoreArrays) {
  for (var i = 0; i < renderStoreArrays.length; i++) {
    renderStoreArrays[i].calcCookiesSalePerHr();
    renderStoreArrays[i].buildCookiesSoldEachHrArray();
    renderStoreArrays[i].rendersTableRows();
  }
  pikeAndFirstStore.rendersTableHeader();
};

//currently only assuming they are open for specific hours, else need to do something to determine who is open the longest and have it fill in blank per store who isn't open during the hours the longer open store is open


var handleMakeNewStore = function (submitEvent) {
  submitEvent.preventDefault();
  submitEvent.stopPropagation();
  var newAddingStore;
  var newStoreName = submitEvent.target.storename.value;
  var newStoreMin = submitEvent.target.storemin.value;
  var newStoreMax = submitEvent.target.storemax.value;
  var newStoreAveCookies = submitEvent.target.storeave.value;

  newAddingStore = new Store(newStoreName, newStoreMin, newStoreMax, newStoreAveCookies);
  //console.log(newAddingStore);
  storeArray.push(newAddingStore);
  newAddingStore.calcCookiesSalePerHr();
  newAddingStore.buildCookiesSoldEachHrArray();
  newAddingStore.rendersTableRows();
  arrayForTotalsForAllStoresPerHour= [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  allStoresSalesByHour(storeArray);
  tablefooterEl.deleteRow(0); //TA david gave me this, I understand what it does. (it is deleting the row at position 0)
  rendersTableFooter(arrayForTotalsForAllStoresPerHour);
};

var newStoreForm = document.getElementById('newstoregenerator');
newStoreForm.addEventListener('submit', handleMakeNewStore);

renderStores(storeArray);
allStoresSalesByHour(storeArray);
rendersTableFooter(arrayForTotalsForAllStoresPerHour);

//personal stretch goal, if i really want to try to verify they put in valid min and max, hint: validate
