const filledElement = document.querySelector('.fill');
const emptyElements = document.querySelectorAll('.empty');

filledElement.addEventListener('dragstart', dragStart);
filledElement.addEventListener('dragend', dragEnd);

function dragStart()
{
    this.className += ' hold';
    setTimeout(() => this.className = 'invisible', 0);
}

function dragEnd()
{
    this.className = 'fill';
}

for (const emptyElement of emptyElements)
{
    //not needed, but homework mentions it:
    //emptyElement.addEventListener('dragend', dragEnd);
    emptyElement.addEventListener('dragover', dragOver);
    emptyElement.addEventListener('dragenter', dragEnter);
    emptyElement.addEventListener('dragleave', dragLeave);
    emptyElement.addEventListener('drop', dragDrop);
}

function dragOver(e)
{
    e.preventDefault();
}

function dragEnter(e)
{
    e.preventDefault();
    this.className += ' hovered';
}

function dragLeave()
{
    this.className = 'empty';
}

function dragDrop()
{
    this.className = 'empty';
    this.append(filledElement);
}