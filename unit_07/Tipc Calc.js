var amount;

var tip;
var tip1;
var tip2;

function submit() {
    amount = document.getElementById("Amount").value;
    alert("Amount has been entered");
    return amount;
    
}


function Tip5() {
    tip = (amount / 100) * 5;
    tip = tip.toFixed(2);
    document.getElementById('input').innerHTML = "£" + tip;
}


function Tip10() {
     tip = (amount / 100) * 10;
     tip = tip.toFixed(2);
    document.getElementById('input').innerHTML = "£" + tip;
}


function Tip25() {
     tip = (amount / 100) * 25;
     tip = tip.toFixed(2);
     document.getElementById('input').innerHTML = "£" + tip;

}


function bigTip() {
    tip1=(amount/ 100)*25;
    tip2=(amount/100)*10 +2;
    if ( tip1 > tip2 ) {
        tip= tip1;
        tip= tip.toFixed(2);
        document.getElementById('input').innerHTML = "£" + tip;
} else {
    tip = tip2;
    tip = tip.toFixed(2);
    document.getElementById('input').innerHTML = "£" + tip;
}
}
