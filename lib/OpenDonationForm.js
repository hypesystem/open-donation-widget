var OpenDonationForm = function(inputField, outputWrapper, options) {
    var defaultOptions = {
        moneyHandlers: [ { name: "" } ]
    };
    this.options = _.extend(defaultOptions, options);
    
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
