

var container = document.createElement("div");
container.className = "container";

// Creazione del pulsante con ID "reset"
var plusBtn = document.createElement("button");
plusBtn.id = "plus";
plusBtn.textContent = "+";

// Aggiunta del pulsante all'elemento <div>
container.appendChild(plusBtn);

// Aggiunta dell'elemento <div> al documento
document.body.appendChild(container);

plusBtn.addEventListener('click', plusEvent); 



function plusEvent() {
    value=0;
  const elem = document.getElementById("Counter");
  value++;
  number.innerHTML = value;
}


var container = document.createElement("div");
container.className = "container";

// Creazione del pulsante con ID "reset"
var minusBtn = document.createElement("button");
minusBtn.id = "Minus";
minusBtn.textContent = "-";

// Aggiunta del pulsante all'elemento <div>
container.appendChild(minusBtn);

// Aggiunta dell'elemento <div> al documento
document.body.appendChild(container);

minusBtn.addEventListener('click', minusEvent);



function minusEvent() {
    value=0;
  const elem = document.getElementById("Counter");
  value--;
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


function resetEvent() {
  const elem = document.getElementById("Counter");
  value = 0;
  number.innerHTML = value;
} 