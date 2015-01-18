var _ = require("underscore");
var AmountField = require("./AmountField.js");
var MoneyHandler = require("./MoneyHandler.js");

var OpenDonationForm = function(inputField, outputWrapper, options) {
    var defaultOptions = {
        
    };
    this.options = _.extend(defaultOptions, options);
    
    if(!options.moneyHandlers) {
        throw new Error("moneyHandlers option missing (and is required)");
    }
    
    var moneyHandlers = mapMoneyHandlers.call(this, options.moneyHandlers);
    this.inputField = new AmountField(inputField, moneyHandlers);
};

function mapMoneyHandlers(moneyHandlersData) {
    return _.map(moneyHandlersData, function(entry) {
        return new MoneyHandler(entry.name, entry.percentage, entry.fee);
    });
}

if(typeof module !== "undefined") {
    module.exports = OpenDonationForm;
}
if(define) {
    define(OpenDonationForm);
}
