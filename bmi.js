const weight = process.argv[2];
const height = process.argv[3];

function calculateBmi(weight, height) {
  const bmi = weight / (height * height);
  console.log(bmi);

  if(bmi < 18){
    console.log("Under weight");
  }else if(bmi >= 18 && bmi <= 24){
    console.log("Standard");
  }else if(bmi >= 25 && bmi <= 30){
    console.log("Over weight")
  }else{
    console.log("Onek moda");
  }
}

calculateBmi(weight, height);
