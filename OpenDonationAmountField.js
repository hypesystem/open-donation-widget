var OpenDonationAmountField = function(domElement, moneyHandlers) {
    this.domElement = domElement;
    this.moneyHandlers = moneyHandlers || [];
    this.listeners = [];
    
    this.domElement.addEventListener("input", handleInputChange.bind(this));
};

OpenDonationAmountField.prototype.onChange = function(listener) {
    this.listeners.push(listener);
};

OpenDonationAmountField.prototype.triggerChangeHandlers = function() {
    handleInputChange.call(this);
};

function handleInputChange() {
    var amount = this.domElement.value;
    var rest = amount;
    var strings = [];
    this.moneyHandlers.forEach(function(moneyHandler) {
        var earnings = moneyHandler.getEarnings(amount, rest);
        rest = rest - earnings;
        strings.push(earnings.toFixed(2) + "$ (" + moneyHandler.toString() + ") -> " + moneyHandler.getName());
    });
    
    this.listeners.forEach(function(listener) {
        listener(strings);
    });
}

if(module && module.exports) {
    module.exports = OpenDonationAmountField;
}
