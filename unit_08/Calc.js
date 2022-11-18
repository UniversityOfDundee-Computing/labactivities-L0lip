var amount = 0;

var tip;
var tip1;
var tip2;

function A0() {
    amount = 0
    $("#bill").html("£" + amount);
}

function A050() {
    amount = amount + 0.50;
    $("#bill").html("£" + amount);
}

function A1() {
    amount = amount + 1;
    $("#bill").html("£" + amount);
}

function A5() {
    amount = amount + 5;
    $("#bill").html("£" + amount);
}

function A10() {
    amount = amount + 10;
    $("#bill").html("£" + amount);
}

function A25() {
    amount = amount + 25;
    $("#bill").html("£" + amount);
}

function A50() {
    amount = amount + 50;
    $("#bill").html("£" + amount);
}

function A75() {
    amount = amount + 75;
    $("#bill").html("£" + amount);
}

function A100() {
    amount = amount + 100;
    $("#bill").html("£" + amount);
}

function Tip5() {
    tip = (amount / 100) * 5;
    tip = tip.toFixed(2);
    choice();
    $("#input").html("£" + tip);

}

function Tip10() {
    tip = (amount / 100) * 10;
    tip = tip.toFixed(2);
    choice();
    $("#input").html("£" + tip);
}

function Tip25() {
    tip = (amount / 100) * 25;
    tip = tip.toFixed(2);
    choice();
    $("#input").html("£" + tip);

}

function bigTip() {
    tip1 = (amount / 100) * 25;
    tip2 = (amount / 100) * 10 + 2;
    if (tip1 > tip2) {
        tip = tip1;
        tip = tip.toFixed(2);
        choice();
        $("#input").html("£" + tip);
    } else {
        tip = tip2;
        tip = tip.toFixed(2);
        choice();
        $("#input").html("£" + tip);
    }
}

function choice(){
    if (tip > 25){
        css25()
    } else {
        if (tip>10) {
            css10()
        } else {
            css5()
        }
    }
}

function css25(){
    $('#input').css('color', 'red');
    $('#input').css('background-color', 'green')
   
}

function css10(){
    $('#input').css('color', 'orange')
    $('#input').css('background-color', 'red')
}

function css5(){
    $('#input').css('color', 'green')
     $('#input').css('background-color', 'blue')
}