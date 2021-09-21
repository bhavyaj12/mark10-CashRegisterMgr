const billAmnt = document.querySelector("#bill-amt");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#chk-btn");
const msg = document.querySelector("#error-msg");

checkButton.addEventListener("click", function validateInput() {
    msg.style.display = "none";
    if(billAmnt.value > 0) {
        if(cashGiven.value > 0 && (cashGiven.value >= billAmnt.value)) {
            const returnAmt = cashGiven.value - billAmnt.value;
            calculateChange(returnAmt);
        } else {
            showMsg("Invalid Cash Given, must be equal to or more than Bill Amount and cannot be negative or zero");
        }

    } else {
        showMsg("Invalid Bill Amount, cannot be negative or zero");
    }
});

function calculateChange() {

}

function showMsg(message) {
    msg.style.display = "block";
    msg.innerText = message;
}