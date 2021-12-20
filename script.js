let input = document.getElementById("input");
let button = document.getElementById("button");
let div = document.getElementById("div");
button.addEventListener("click", task);
let array = [];
let arrayData = JSON.parse(localStorage.getItem("data"));
Array.prototype.push.apply(array, arrayData);
for (element of array) {
    div.innerHTML = div.innerHTML + "<h1></h1>";
    div.children[div.children.length - 1].innerHTML = element;
}
function task() {
    div.innerHTML = div.innerHTML + "<h1></h1>";
    div.children[div.children.length - 1].innerHTML = input.value;
    array.push(input.value);
    localStorage.setItem("data", JSON.stringify(array));
}