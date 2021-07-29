// a
function temperatureConverter(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outputCelsius").innerHTML = (valNum-32) / 1.8;
}

// b

const massLucas = "95";
const heightLucas = "1.20";

const massJohn = "70";
const heightJohn = "1.60";

const BMILucas = massLucas/heightLucas*2;
const BMIJohn = massJohn/(heightJohn*heightJohn);
const LucasHigherBMI = BMILucas > BMIJohn;
const JohnHigherBMI = BMIJohn > BMILucas;
console.log(BMILucas, BMIJohn, LucasHigherBMI);



if ( BMILucas > BMIJohn) {
  console.log(`The BMI of Lucas is ${BMILucas},
    The BMI of John is ${BMIJohn},
    Lucas has a higher BMI than John, that is ${LucasHigherBMI}`);
    }
    else {
      console.log(`The BMI of Lucas is ${BMILucas},
        The BMI of John is ${BMIJohn},
        John has a higher BMI than Lucas, that is ${JohnHigherBMI}`);
  }

// c
const nets  = [96, 108, 89];

function getAvg(nets) {
  const total = nets.reduce((acc, c) => acc + c, 0);
  return total / nets.length;
}
const averagen = getAvg(nets);
console.log(averagen);


const knicks  = [88, 91, 110];

function getAvg(knicks) {
  const total = knicks.reduce((acc, c) => acc + c, 0);
  return total / knicks.length;
}
const averagek = getAvg(knicks);
console.log(averagek);

if (averagen > averagek) {
  console.log(`Nets win the game!`);
} else if (averagen < averagek) {
  console.log(`knicks win the game!`);
} else {
  console.log(`the game is tied!`);
}
