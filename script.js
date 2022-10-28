const draggableElement = document.querySelector(".fill");
const emptyElements = document.querySelectorAll(".empty")

function dragStart(e){
    e.dataTransfer.setData("text/plain", draggableElement.className);
    draggableElement.classList.add("hold");
    setTimeout(() => (draggableElement.className = 'invisible'), 0);
}
function dragEnd(e){
    e.preventDefault();
    draggableElement.className = "fill";
}
function dropZoneDragOver(e, dropZone){
    e.preventDefault();
    
}
function dropZoneDrop(e, dropZone){
    
    const droppedElementClass = e.dataTransfer.getData("text/plain");
    dropZone.appendChild(draggableElement);
    dropZone.classList.remove("hovered");
}
function dropZoneDragLeave(e, dropZone){
    dropZone.classList.remove("hovered");
}
function dropZoneDragEnter(e, dropZone){
    e.preventDefault();
    dropZone.classList.add("hovered");
}

draggableElement.addEventListener("dragstart", e => {
    dragStart(e);
});
draggableElement.addEventListener("dragend", e => { 
    dragEnd(e);
});

for (const dropZone of emptyElements){

    dropZone.addEventListener("dragover", e => {    
        dropZoneDragOver(e, dropZone);
    });
    dropZone.addEventListener("drop", e => {
        dropZoneDrop(e, dropZone);
    });

    dropZone.addEventListener("dragleave", e => {
        dropZoneDragLeave(e, dropZone);
    });

    dropZone.addEventListener("dragenter", e => {
        dropZoneDragEnter(e, dropZone);
    });

}