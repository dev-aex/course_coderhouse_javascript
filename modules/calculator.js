const CALCULATOR_INPUT = document.querySelector(".calculator__input");

CALCULATOR_INPUT.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    showResults();
  }
});

CALCULATOR_INPUT.addEventListener("keydown", function (e) {
  let REGEX = /^[a-zA-Z&_=#@!¡\,<>{}\[\]¿?;:'"\\|`$]$/;

  if (e.key === " ") {
    e.preventDefault();
  } else if (REGEX.test(e.key)) {
    e.preventDefault();
  }
});

function writeDigit(digit) {
  CALCULATOR_INPUT.value += digit;
}

function cleanDigits() {
  CALCULATOR_INPUT.value = "";
}

function showResults() {
  CALCULATOR_INPUT.value = eval(CALCULATOR_INPUT.value);
}

function deleteDigit() {
  let value = CALCULATOR_INPUT.value.trim();
  if (value.length > 0) {
    value = value.slice(0, -1);
    CALCULATOR_INPUT.value = value;
  }
}
