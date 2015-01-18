var MoneyHandler = function(name, percentage, fee) {
    this.name = name;
    this.percentage = percentage;
    this.fee = fee;
}

MoneyHandler.prototype.getEarnings = function(amount, rest) {
    if(!this.percentage && !this.fee) {
        return rest;
    }
    return (this.percentage * amount * 0.01) + this.fee;
};

MoneyHandler.prototype.toString = function() {
    if(this.fee && this.percentage) {
        return this.percentage + "% + " + this.fee + "$";
    }
    if(this.fee) {
        return this.fee + "$";
    }
    if(this.percentage) {
        return this.percentage + "%";
    }
    return "rest";
};

MoneyHandler.prototype.getName = function() {
    return this.name;
};

if(module && module.exports) {
    module.exports = MoneyHandler;
}
