'use strict';

angular.module('broce')
  .controller('OrderFormController', [OrderFormController]);


function OrderFormController () {
  var vm = this;
  vm.showOrder = true;


  vm.orderForm = {
    poNumber: 123,
    purchaserName: 'John Smith',
    orderInfo: [
      {
        machineSerial: 123456,
        parts: [
          {
            partNumber: 123,
            quantity: 2
          },
          {
            partNumber: 456,
            quantity: 4
          }
        ]
      },
      {
        machineSerial: 098765,
        parts: [
          {
            partNumber: 098,
            quantity: 11
          },
          {
            partNumber: 765,
            quantity: 18
          }
        ]
      }
    ]
  };

}
