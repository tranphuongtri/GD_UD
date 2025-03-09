const bills = [125, 555, 44];
// function calcTip(bill) {
//     const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
//     const total = bill + tip;
//     console.log(`bill ${bill}, tip ${tip}, total ${total}`)
// }
// bills.forEach(calcTip);
function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
}
const tips = bills.map(calcTip);
const totals = bills.map((bill, index) => bill + tips[index])
console.log("Bills:", bills);
console.log("Tips:", tips);
console.log("Total: ", totals)

