
const firstValue = parseFloat(document.getElementById("one").value);
const SecondValue = parseFloat(document.getElementById("two").value);
const thirdValue = parseFloat(document.getElementById("three").value);
const fourthValue = parseFloat(document.getElementById("four").value);
const fifthValue = parseFloat(document.getElementById("five").value);
const SixthValue = parseFloat(document.getElementById("six").value);
const SeventhValue = parseFloat(document.getElementById("seven").value);
const EighthValue = parseFloat(document.getElementById("eight").value);
const ninthValue = parseFloat(document.getElementById("nine").value);
const tenthValue = parseFloat(document.getElementById("ten").value);
const zero = parseFloat(document.getElementById("zero").value);

const result = document.getElementById("result").value;


// sign
const plus = document.getElementById('plus').value
const minus = document.getElementById('minus').value
const divide = document.getElementById('divide').value
const Multiply = document.getElementById('multiply').value

function results() {
  try {
    // if(plus == "+"){
    //   return value +=  
    // }
   

    document.getElementsByClassName("result")[0].innerHTML = sum;
  } catch (err) {
    console.log("Error", err);
  }
}
