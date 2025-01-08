var bill1 = 275
var bill2 = 40
var bill3 = 430
function calculateTip(billAmount) {
    let tipRate;
    if (billAmount >= 50 && billAmount <= 300) {
        tipRate = 0.15; 
    } else {
        tipRate = 0.20;  
    }
    let tipAmount = billAmount * tipRate;
    let totalAmount = billAmount + tipAmount;
    console.log(`Giá hóa đơn là ${billAmount}, tiền tip là ${tipAmount.toFixed(2)}, và tổng giá trị là ${totalAmount.toFixed(2)}`);
}
calculateTip(275);  
calculateTip(40);   
calculateTip(430);  
