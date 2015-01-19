var _ = require("underscore");
var AmountField = require("./AmountField.js");
var MoneyHandler = require("./MoneyHandler.js");

var OpenDonationForm = function(inputField, outputWrapper, options) {
    var defaultOptions = {
        moneyHandlers: [ { name: "" } ]
    };
    this.options = options ? _.extend(defaultOptions, options) : defaultOptions;
    
    var moneyHandlers = mapMoneyHandlers.call(this, this.options.moneyHandlers);
    this.inputField = new AmountField(inputField, moneyHandlers);
    this.inputField.onChange(function(strings) {
        outputWrapper.innerHTML = "";
        strings.forEach(function(str) {
            outputWrapper.innerHTML += "<div>" + str + "</div>";
        });
    });
    this.inputField.triggerChangeHandlers();
};

function mapMoneyHandlers(moneyHandlersData) {
    return _.map(moneyHandlersData, function(entry) {
        return new MoneyHandler(entry.name, entry.percentage, entry.fee);
    });
}

if(typeof module !== "undefined") {
    module.exports = OpenDonationForm;
}
