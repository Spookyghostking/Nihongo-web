function clickman(event) {
  let element = event.target;
  if (element.className === 'correct') {
    element.style.backgroundColor = "blue";
    document.querySelector("#correctness_meter").value = "correct"
  } else if (element.className === 'incorrect') {
    element.style.backgroundColor = "red";
    document.querySelector(".correct").style.backgroundColor = "blue";
    document.querySelector("#correctness_meter").value = "incorrect"
  };
  if (element.className === 'correct' || element.className === "incorrect") {
    document.removeEventListener("click", clickman);
    document.querySelector("#submut_answer").disabled = false;
  };
};


document.addEventListener("click", clickman);
