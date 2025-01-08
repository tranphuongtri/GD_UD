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

//cai tien
console.log("Cai tien")
check1=BMIMarks>BMIJohn
if(check1==true){
    console.log("BMI cua Marks cao hon BMI cua John")
}else{
    console.log("BMI cua Marks thap hon BMI cua John")
}
check2=BMIMarks2>BMIJohn2
if(check2==true){
    console.log("BMI cua Marks cao hon BMI cua John")
}else{
    console.log("BMI cua Marks thap hon BMI cua John")
}
//v2
console.log("Cai tien v2")
hon1="BMI cua Marks "+ BMIMarks+" cao hon BMI cua John "+ BMIJohn
thua1="BMI cua Marks"+ BMIMarks+" thap hon BMI cua John "+ BMIJohn
hon2="BMI cua Marks "+ BMIMarks2+" cao hon BMI cua John " +BMIJohn2
thua2="BMI cua Marks "+ BMIMarks2+" thap hon BMI cua John " +BMIJohn2
check1=BMIMarks>BMIJohn
if(check1==true){
    console.log(hon1)
}else{
    console.log(thua1)
}
check2=BMIMarks2>BMIJohn2
if(check2==true){
    console.log(hon2)
}else{
    console.log(thua2)
}

