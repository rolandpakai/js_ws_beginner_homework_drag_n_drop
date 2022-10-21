const image = document.querySelector('.image')
const targets = document.querySelectorAll('.dropZone')

image.addEventListener('dragstart', (event) => {
    event.target.classList.add('holding');
    setTimeout(() => {event.target.classList.remove('holding','image'); event.target.classList.add('invisible')}, 0)
  })
  
image.addEventListener('dragend', (event) => {
    event.target.classList.remove('holding','invisible');
    event.target.classList.add('image')
  })


for(const dropZone of targets) {

    dropZone.addEventListener('dragover', (event) => 
    {event.preventDefault()})

    dropZone.addEventListener('dragenter', (event) => 
    {event.preventDefault(); 
    event.target.classList.add('hovered')})


    dropZone.addEventListener('dragleave', (event) => 
    {event.target.classList.remove('hovered')})

    dropZone.addEventListener('drop', (event) => 
    {event.target.classList.remove('hovered');
    dropZone.append(image)})

}


