// Get the input screen element by its ID
let inputscreen = document.getElementById("input");

// Function to display numbers and operators on the input screen
function display(num) {
  inputscreen.value += num;
}

// Function to perform calculation
function calculate() {
  try {
    inputscreen.value = eval(inputscreen.value);
  } catch (err) {
    alert("Invalid input");
  }
}

// Function to clear the input
function Clear() {
  inputscreen.value = "";
}

// Function to delete the last character
function del() {
  inputscreen.value = inputscreen.value.slice(0, -1);
}
