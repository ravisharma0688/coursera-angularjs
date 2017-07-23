(function () {
'use strict';
angular.module('ShoppingListCheckOff', [])
       .controller('ToBuyController', ToBuyController)
       .controller('AlreadyBoughtController', AlreadyBoughtController)
       .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject =['ShoppingListCheckOffService'];

function ToBuyController (ShoppingListCheckOffService) {
  var buyItem = this;
  //BuyItem.itemName = "";
//  BuyItem.itemQuantity = "";
  buyItem.items = ShoppingListCheckOffService.addItems();
  //BuyItem.addItem = function () {
  //  ShoppingListCheckOffService.addItem(itemAdder.itemName, itemAdder.itemQuantity);
//  }
  buyItem.removeItem = function(itemIndex){
       ShoppingListCheckOffService.boughtItem(itemIndex);
   };
}

AlreadyBoughtController.$inject =['ShoppingListCheckOffService'];
function AlreadyBoughtController (ShoppingListCheckOffService) {
  var boughtItem = this;
  boughtItem.items = ShoppingListCheckOffService.boughtItems();
}

function ShoppingListCheckOffService(){
  var service=this;
  //service.addItem = function (itemName, quantity) {
//    var item = {
//      name: itemName,
//      quantity: quantity
//    };
//    items.push(item);
//  };
  var addItems = [{name: "Cookies", quantity: 10},
                  {name: "Potatos", quantity: 5},
                  {name: "Chocolates", quantity: 5},
                  {name: "Bringles", quantity: 10},
                  {name: "Pineapples", quantity: 5},
                  {name: "Capsicum", quantity: 5}];
      //items.push(item);

   var boughtItems = [];

  service.boughtItem = function(itemIndex) {
  		boughtItems.push(addItems[itemIndex]);
  		addItems.splice(itemIndex, 1);
  		};

  service.boughtItems = function(){
  	return boughtItems;
  		};
  service.addItems = function (){
    return addItems;
     };

}

})();
