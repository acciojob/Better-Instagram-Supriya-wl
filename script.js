//your code here
let draggableItem = null;

// Add event listener to all the draggable items
document.querySelectorAll('.draggable').forEach(item => {
  item.addEventListener('dragstart', dragStart);
  item.addEventListener('dragover', dragOver);
  item.addEventListener('dragenter', dragEnter);
  item.addEventListener('dragleave', dragLeave);
  item.addEventListener('drop', drop);
  item.addEventListener('dragend', dragEnd);
});

// Drag Start
function dragStart(e) {
  draggableItem = e.target;
  setTimeout(() => {
    e.target.classList.add('invisible');
  }, 0);
}

// Drag Over
function dragOver(e) {
  e.preventDefault();
}

// Drag Enter
function dragEnter(e) {
  e.preventDefault();
  this.classList.add('hovered');
}

// Drag Leave
function dragLeave(e) {
  this.classList.remove('hovered');
}

// Drop
function drop(e) {
  this.classList.remove('hovered');
  if (draggableItem !== this) {
    let temp = draggableItem.innerHTML;
    draggableItem.innerHTML = this.innerHTML;
    this.innerHTML = temp;
  }
}

// Drag End
function dragEnd(e) {
  e.target.classList.remove('invisible');
  draggableItem = null;
}
