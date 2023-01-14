var inputs = [].slice.call(document.querySelectorAll('#franchise')),
  button = document.querySelector('#franchise-button');

inputs.forEach(function (el) {
  el.addEventListener('input', checkInputs, false);
});
function checkInputs() {
  var empty = inputs.filter(function (el) {
    return el.value.trim() === '';
  }).length;
  button.disabled = empty !== 0;
  console.log(button);
}
checkInputs();
