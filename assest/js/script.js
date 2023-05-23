const number = document.getElementById('Counter');



function add() {
  value++;
  number.innerHTML = value;
}
function subtract() {
  value--;
  number.innerHTML = value;
}
function reset() {
  value = 0;
  number.innerHTML = value;
}


// Creazione del elemento <div> con classe "container"
var container = document.createElement("div");
container.className = "container";

// Creazione del pulsante con ID "reset"
var resetBtn = document.createElement("button");
resetBtn.id = "reset";
resetBtn.textContent = "AZZERRA";

// Aggiunta del pulsante all'elemento <div>
container.appendChild(resetBtn);

// Aggiunta dell'elemento <div> al documento
document.body.appendChild(container);

resetBtn.addEventListener('click', resetEvent);

let value = 0;

function resetEvent() {
  const elem = document.getElementById("Counter");
  value = 0;
  number.innerHTML = value;
}
{
var container = document.createElement("div");
container.className = "container";

// Creazione del pulsante con ID "reset"
var resetBtn = document.createElement("button");
resetBtn.id = "Plus";
resetBtn.textContent = "+";

// Aggiunta del pulsante all'elemento <div>
container.appendChild(PlusBtn);

// Aggiunta dell'elemento <div> al documento
document.body.appendChild(container);

resetBtn.addEventListener('click', PlusEvent); }



function PlusEvent() {
  const elem = document.getElementById("Counter");
  value++;
  number.innerHTML = value;
}
{
var container = document.createElement("div");
container.className = "container";

// Creazione del pulsante con ID "reset"
var resetBtn = document.createElement("button");
resetBtn.id = "Minus";
resetBtn.textContent = "-";

// Aggiunta del pulsante all'elemento <div>
container.appendChild(MinusBtn);

// Aggiunta dell'elemento <div> al documento
document.body.appendChild(container);

resetBtn.addEventListener('click', MinusEvent);
}


function MinusEvent() {
  const elem = document.getElementById("Counter");
  value--;
  number.innerHTML = value;
}