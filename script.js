"use strict";
const btn = document.querySelectorAll(".btn");
const boxs = document.querySelectorAll(".inputs");
let drag;

// Add inputs
btn.forEach(function (ele) {
  ele.onclick = function () {
    ele.previousElementSibling.innerHTML += `<div class="items-input" draggable="true">
            <input type="text"
            value= "" />
            <i class="edit fa-solid fa-pen"></i>
            <i class="del fa-solid fa-trash"></i>
          </div>
  `;
  };
  dragItem();
});

// Delete inputs
document.addEventListener("click", function (e) {
  if (e.target.className == "del fa-solid fa-trash") {
    e.target.parentNode.remove();
  }
});

// Drag inputs
function dragItem() {
  let inputItem = document.querySelectorAll(".items-input");
  inputItem.forEach((item) => {
    item.addEventListener("dragstart", function () {
      drag = item;
      console.log(drag);
    });

    item.addEventListener("dragend", function () {
      console.log("end");
    });
  });
  console.log(inputItem);
}
