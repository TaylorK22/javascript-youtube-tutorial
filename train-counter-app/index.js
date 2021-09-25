//document.getElementById("count").innerText = 6
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el")
let count = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  let counter =" " + count + " -"
  saveEl.textContent += counter
  countEl.textContent = 0
  count = 0
  console.log(count)
}

