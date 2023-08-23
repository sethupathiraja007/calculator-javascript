let inputscreen = document.getElementById("input");

function display(num) {
  inputscreen.value += num;
}
function calculate() {
  try {
    inputscreen.value = eval(inputscreen.value);
  } catch (err) {
    alert("invalid input");
  }
}
function Clear() {
  inputscreen.value = inputscreen.value.slice(0, 0);
}
function del() {
  inputscreen.value = inputscreen.value.slice(0, -1);
}
