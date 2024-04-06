const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;
function handleCheck(e) {
  let inBetween = false;
if (e.shiftkey && this.checked) {
  //
  checkboxes.forEach(checkbox => {
    console.log(checkbox);
  });
}

  lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
