const boxes = document.querySelectorAll('.box');
const emojis = document.querySelectorAll('.emoji');

emojis.forEach(emoji => {
    emoji.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', e.target.id);
        setTimeout(() => {
            e.target.style.opacity = '0.5';
        }, 0);
    });

    emoji.addEventListener('dragend', (e) => {
        e.target.style.opacity = '1';
    });
});

boxes.forEach(box => {
    box.addEventListener('dragover', (e) => {
        if (box.children.length === 0) {
            e.preventDefault(); 
        }
    });

    box.addEventListener('dragenter', (e) => {
        if (box.children.length === 0) {
            box.classList.add('drag-over');
        }
    });

    box.addEventListener('dragleave', () => {
        box.classList.remove('drag-over');
    });

    box.addEventListener('drop', (e) => {
        e.preventDefault();
        box.classList.remove('drag-over');

        const id = e.dataTransfer.getData('text/plain');
        const draggedElement = document.getElementById(id);

        box.appendChild(draggedElement);
    });
});