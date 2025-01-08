var massMarks=78
var massJohn=92
var heightMarks= 1.76
var heightJohn= 1.95

var massMarks2=95
var massJohn2=85
var heightMarks2= 1.88
var heightJohn2= 1.76
// var BMI = mass/(height*height)
var BMIMarks = massMarks/(heightMarks*heightMarks)
var BMIJohn = massJohn/(heightJohn*heightJohn)

var BMIMarks2 = massMarks2/(heightMarks2*heightMarks2)
var BMIJohn2 = massJohn2/(heightJohn2*heightJohn2)
console.log("BMI Marks",BMIMarks)
console.log("BMI John",BMIJohn)
console.log("so sanh BMIMarks co lon hon BMI cua John hay khong trong data1",(BMIMarks>BMIJohn))

console.log("BMI Marks",BMIMarks2)
console.log("BMI John",BMIJohn2)
console.log("so sanh BMIMarks co lon hon BMI cua John hay khong trong data2",(BMIMarks2>BMIJohn2))