const counts = {
    incrementB: document.querySelector('[data-action="increment"]'),
    decrementB: document.querySelector('[data-action="decrement"]'),
    value: document.querySelector("#value"),
  };

  let counterValue = 0;
  function incrClick() {
    counterValue += 1;
    counts.value.textContent = counterValue;
  }
  function decrClick() {
    counterValue -= 1;
    counts.value.textContent = counterValue;
  }
  counts.incrementB.addEventListener("click", incrClick);
  counts.decrementB.addEventListener("click", decrClick);