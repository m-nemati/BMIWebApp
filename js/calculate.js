function bmiCalculate() {
  var bmi;
  var bmiValue = document.getElementById("bmiValue"); // for show value of calculated BMI

  // Get Inputs
  var weight = parseFloat(document.getElementById("userWeight").value);
  var height = parseFloat(document.getElementById("userHeight").value);

  if (isNaN(height) || isNaN(weight)) {
    document.getElementById("result").innerHTML =
      "لطفاً مقادیر صحیح را برای وزن و قد وارد نمایید.";
    return;
  }

  height /= 100; // Convert cm to m

  //Calculate BMI Index
  bmi = (weight / (height * height)).toFixed(1);

  bmiValue.textContent = bmi;

  if (bmi < 18.5) {
    category = "کمبود وزن";
    document.getElementById("result").style.backgroundColor = "#29c5ff";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    category = "وزن نرمال ";
    document.getElementById("result").style.backgroundColor = "#3edc81";
  } else if (bmi >= 25 && bmi <= 29.9) {
    category = "اضافه وزن";
    document.getElementById("result").style.backgroundColor = "#f1892d";
  } else {
    category = "چاقی بیش از حد";
    document.getElementById("result").style.backgroundColor = "#D73C2C";
  }

  document.getElementById("category").textContent = category;
}
