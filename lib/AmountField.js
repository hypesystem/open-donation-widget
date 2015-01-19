var AmountField = function(domElement, moneyHandlers) {
    this.domElement = domElement;
    this.moneyHandlers = moneyHandlers || [];
    this.listeners = [];
    
    this.domElement.addEventListener("input", handleInputChange.bind(this));
};

AmountField.prototype.onChange = function(listener) {
    this.listeners.push(listener);
};

AmountField.prototype.triggerChangeHandlers = function() {
    handleInputChange.call(this);
};

function handleInputChange() {
    var amount = parseFloat(this.domElement.value);
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

if(typeof module !== "undefined") {
    module.exports = AmountField;
}
