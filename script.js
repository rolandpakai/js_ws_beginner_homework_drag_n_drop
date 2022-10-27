const draggableElement = document.querySelector(".fill");

draggableElement.addEventListener("dragstart", e => {
    e.dataTransfer.setData("text/plain", draggableElement.className);
    console.log(draggableElement.className);

});

for (const dropZone of document.querySelectorAll(".empty")){
    dropZone.addEventListener("dragover", e => {
        e.preventDefault();
        dropZone.classList.add("hovered");
    });
    dropZone.addEventListener("drop", e => {
        e.preventDefault();

        const droppedElementClass = e.dataTransfer.getData("text/plain");
        dropZone.appendChild(draggableElement);
        dropZone.classList.remove("hovered");
       
    });
    dropZone.addEventListener("dragleave", e => {
        e.preventDefault();
        dropZone.classList.remove("hovered");
    });

}