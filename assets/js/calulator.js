function results() {
  try {
    const firstValue = parseFloat(document.getElementById("num1").value);
    console.log(firstValue);
    const SecondValue = parseFloat(document.getElementById("num2").value);
    console.log(SecondValue);
    const sum = firstValue + SecondValue;

    console.log(sum);
    document.getElementsByClassName("result")[0].innerHTML = sum;
  } catch (err) {
    console.log("Error", err);
  }
}
