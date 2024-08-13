let myInput = document.getElementById("myInput");
let addBtn = document.getElementById("addBtn");
let resultDiv = document.getElementById("resultDiv");

addBtn.addEventListener("click", () => {
  let list = document.createElement("li");
  list.classList.add("paragraph-styling");
  list.style.color = "violet";
  list.style.fontSize = "20px";
  list.style.padding = "3px 40px";
  list.style.listStylePosition = "inside";
  list.style.listStyleType = "decimal";

  list.innerText = myInput.value;

  resultDiv.appendChild(list);
  myInput.value = " ";

  list.addEventListener("click", function () {
    list.style.textDecoration = "line-through";
  });

  list.addEventListener("dblclick", () => {
    resultDiv.removeChild(list);
  });
});
