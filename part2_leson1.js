const pointDolphins1 = [44, 23, 71]
const pointKoalas1 = [65, 54, 49]
const pointDolphins2 = [85, 54, 41]
const pointKoalas2 = [23, 34, 27]
function calculateAverage(scores) {
    const sum = scores.reduce((acc, score) => acc + score, 0);
    return sum / scores.length;
}
function checkWinner(pointDolphins, pointKoalas) {
    const avgDolphins = calculateAverage(pointDolphins);
    const avgKoalas = calculateAverage(pointKoalas);
    if (avgDolphins >= 2 * avgKoalas)
        // console.log('Dolphins win ( ${avgDolphins} vs ${avgKoalas})');
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);

    else if (avgKoalas >= 2 * avgDolphins)
        // console.log('Koalas win ( ${avgKoalas} vs ${avgDolphins})');
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
    else
        console.log("Khong co doi nao chien thang");

}
checkWinner(pointDolphins1, pointKoalas1);
checkWinner(pointDolphins2, pointKoalas2);