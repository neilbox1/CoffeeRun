(function (window) {
    'use strict';
    var FORM_SELECTOR = '[data-coffee-order="form"]';
    var CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';
    var SERVER_URL = 'http://coffeerun-v2-rest-api.herokuapp.com/api/coffeeorders';
    var App = window.App;
    var Truck = App.Truck;
    var DataStore = App.DataStore;
    var FirebaseConfig = App.FirebaseConfig
    var FormHandler = App.FormHandler;
    var CheckList = App.CheckList;
    var remoteDS = new FirebaseDataStore;
    var myTruck = new Truck('ncc-1701', remoteDS);
    var Validation = App.Validation;
    window.myTruck = myTruck;
    var FirebaseDataStore = App.FirebaseDataStore;

    var checkList = new CheckList(CHECKLIST_SELECTOR);
    checkList.addClickHandler(myTruck.deliverOrder.bind(myTruck));
    var formHandler = new FormHandler(FORM_SELECTOR);

    formHandler.addSubmitHandler(function (data) {
        return myTruck.createOrder.call(myTruck, data);
            checkList.addRow.call(checkList, data);
    });

    formHandler.addInputHandler(Validation.isCompanyEmail);
    console.log(formHandler);
})(window);