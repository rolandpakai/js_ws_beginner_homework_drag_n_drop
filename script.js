// Create variables for the filled and empty elements
const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

// Add event listeners for the filled elements ('dragstart', 'dragend')

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

// Loop through the empties and call drag events (drag events: 'dragend', 'dragover', 'dragenter', 'dragleave', 'drop')

for (const empty of empties) {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}

// Create a function dragStart() which sets the 'hold' class and hide the original element with 'invisible' class

function dragStart() {
  this.className += ' hold';
  setTimeout(() => (this.className = 'invisible'), 0);
}

// Create a function dragEnd() that sets the class back to 'fill'

function dragEnd() {
  this.className = 'fill';
}

// Create functions for each drag events and add the classnames to each function where needed

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.className += ' hovered';
}

function dragLeave() {
  this.className = 'empty';
}

function dragDrop() {
  this.className = 'empty';
  this.append(fill);
}
