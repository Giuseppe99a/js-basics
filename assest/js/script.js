
var container = document.createElement("div")
container.className = "container";
var number =document.createElement("var")
number.id="value";
number.textContent="0";
container.appendChild(number);
document.body.appendChild(container);


var container = document.createElement("div");
container.className = "container";
var plusBtn = document.createElement("button");
plusBtn.id = "plus";
plusBtn.textContent = "+";
container.appendChild(plusBtn);
document.body.appendChild(container);
plusBtn.addEventListener('click', plusEvent); 
function plusEvent() {
  const elem = document.getElementById("Counter");
  value++;
  number.innerHTML = value;
}

var minusBtn = document.createElement("button");
minusBtn.id = "minus";
minusBtn.textContent = "-";
container.appendChild(minusBtn);
document.body.appendChild(container);
minusBtn.addEventListener('click', minusEvent);
function minusEvent() {
  const elem = document.getElementById("Counter");
  value--;
  number.innerHTML = value;
}  


var container = document.createElement("div");
container.className = "container";
var resetBtn = document.createElement("button");
resetBtn.id = "reset";
resetBtn.textContent = "AZZERRA";
container.appendChild(resetBtn);
document.body.appendChild(container);
resetBtn.addEventListener('click', resetEvent);
function resetEvent() {
  const elem = document.getElementById("Counter");
  value = 0;
  number.innerHTML = value;
} 