// part a

  function calculateTip() {
  var billAmt = document.getElementById("billamt").value;
  var serviceQual = document.getElementById("serviceQual").value;
  //validate input
  if (billAmt === "" || serviceQual == 0) {
    alert("Please enter values");
    return;
  }

  var total = (billAmt * serviceQual);
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;
  }
  document.getElementById("totalTip").style.display = "none";
  document.getElementById("each").style.display = "none";
  document.getElementById("calculate").onclick = function() {
    calculateTip();

  };

// 2
//   myString = data.map(function(value){
//    return typeof value === 'string' ? "'" + value + "'" : value;
//  }).join(', ');
//
// console.log(myString);

// part b

function temperatureConverter(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outputCelsius").innerHTML = (valNum-32) / 1.8;
}
function temperatureConverterb(valNumb) {
  valNumb = parseFloatb(valNumb);
  document.getElementByIdb("outputFahrenheit").innerHTML = (valNumb * 1.8) + 32;
}
// Part c

const nets  = [44, 23, 71];

function getAvg(nets) {
  const total = nets.reduce((acc, c) => acc + c, 0);
  return total / nets.length;
}
const averagen = getAvg(nets);
console.log(averagen);


const knicks  = [65, 54, 49];

function getAvg(knicks) {
  const total = knicks.reduce((acc, c) => acc + c, 0);
  return total / knicks.length;
}
const averagek = getAvg(knicks);
console.log(averagek);

if (averagen > (averagek+ averagek)) {
  console.log(`Nets win the game!`);
} else if (averagen < averagek) {
  console.log(`knicks win the game!`);
} else {
  console.log(`the game is tied!`);
}



// part d
function calTip(billValue) {
  let tip = billValue > 50 && billValue < 300 ? billValue * .15 : billValue* .20;
  let totalV = billValue + tip;
  // total.push(totalV);
  tips.push(tip);
  return tip;
}

const bill = [125,55,44];
const tips=[18.75, 8.25,8.8];
const bills = [calTip(bill[0]),calTip(bill[1]),calTip(bill[2])];
const total= [];
console.log(bills);
console.log(tip);


//
// const bills = [125,555,44];
// const tips = [ , , , ]
// const bills =
// console.log(bills, tips, finalbill);
// calTip()+,calTip()
