define(["require", "local/AmountField", "local/MoneyHandler"], function(require, AmountField, MoneyHandler) {
    var moneyHandlers = [
        new MoneyHandler("Payments Provider", 5, 0.25),
        new MoneyHandler("Platform", 2, 0),
        new MoneyHandler("Creator")
    ];
    var inputBox = document.querySelectorAll(".open-donation.donation-input")[0];
    var input = new AmountField(inputBox, moneyHandlers);
    var explainerBox = document.querySelectorAll(".open-donation.monetary-transparency-explainer")[0];
    input.onChange(function(strings) {
        explainerBox.innerHTML = "";
        strings.forEach(function(str) {
            explainerBox.innerHTML += "<div>" + str + "</div>";
        });
    });
    input.triggerChangeHandlers();
});
