
let pizzaButtons = document.querySelectorAll('#pizzaDiv > button');
let actionBtn = document.querySelector('#actionBtn');
let infoText = document.querySelector('#info');
let itemCount = 0;
let totalItems = pizzaButtons.length;

for (let i = 0; i < pizzaButtons.length; i++) { // using for loop as per class example instead of forEach
  pizzaButtons[i].addEventListener('click', function () {
    checkItem(Number(this.value));
  });
}

function checkItem(idx) {
  if (pizzaButtons[idx].getAttribute('src') === 'done') { // Using 'src' as per the class example instead of 'data-state'
    if (itemCount > 0) itemCount--;
    pizzaButtons[idx].setAttribute('src', 'undone');
    pizzaButtons[idx].classList.remove('done');
  } else {
    itemCount++;
    pizzaButtons[idx].setAttribute('src', 'done');
    pizzaButtons[idx].classList.add('done');
  }

  updateInfoText();
  toggleActionButton();
}

function updateInfoText() {
  infoText.textContent = itemCount + " of " + totalItems + " items selected!";
}

function toggleActionButton() {
  if (itemCount === totalItems) {
    actionBtn.textContent = 'Order Now';
    actionBtn.removeAttribute('disabled');
  } else if (itemCount > 0) {
    actionBtn.textContent = 'Reset';
    actionBtn.removeAttribute('disabled');
  } else {
    actionBtn.textContent = 'Reset';
    actionBtn.setAttribute('disabled', '');
  }
}

function handleAction() {
  if (itemCount === totalItems) {
    window.location.assign('thankyou.html');
  } else {
    itemCount = 0;
    for (let i = 0; i < pizzaButtons.length; i++) {
      pizzaButtons[i].classList.remove('done');
      pizzaButtons[i].setAttribute('src', 'undone');
    }
    updateInfoText();
    toggleActionButton();
  }
}