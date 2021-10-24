(function (window) {
    'use strict';
    var App = window.App || {};

    function Validation(selector) {
        if (!selector) {
            console.log('no selector provided');
        }
    }

    var Validation = {
        isCompanyEmail: function(email) {
            return /.+@bignerdranch\.com$/.test(email);

        }
    };
    App.Validation = Validation;
    window.App = App;
})(window);