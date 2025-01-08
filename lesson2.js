
let dolphinsdata1=[96,108,89]
let koalasdata1=[88,91,110]
let dolphinsdata2=[97,112,101]
let koalasdata2=[109,95,123]
let dolphinsdata3=[97,112,101]
let koalasdata3=[109,95,106]

function calculateAverage(scores) {
  const sum = scores.reduce((acc, score) => acc + score, 0);
  return sum / scores.length;
}

function checkWinner(dolphinsScores, koalasScores) {
  const dolphinsAverage = calculateAverage(dolphinsScores);
  const koalasAverage = calculateAverage(koalasScores);
  
  console.log(`Diem trung binh cua Dolphins: ${dolphinsAverage}`);
  console.log(`Diem trung binh cua Koalas: ${koalasAverage}`);

  if (dolphinsAverage >= 100 && koalasAverage >= 100) {
    if (dolphinsAverage === koalasAverage) {
      console.log("Hòa! Cả hai đội đều có điểm trung bình lớn hơn hoặc bằng 100.");
    } else if (dolphinsAverage > koalasAverage) {
      console.log("Dolphins chiến thắng!");
    } else {
      console.log("Koalas chiến thắng!");
    }
  } else {
    console.log("Không đội nào giành chiến thắng vì điểm trung bình của cả hai đội đều chưa đủ 100.");
  }
}

console.log("Dữ liệu 1:");
checkWinner(dolphinsdata1, koalasdata1);

console.log("\nDữ liệu Thưởng 1:");
checkWinner(dolphinsdata2, koalasdata2);

console.log("\nDữ liệu Thưởng 2:");
checkWinner(dolphinsdata3, koalasdata3);
