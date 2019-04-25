const card = document.getElementById('card');
const canvas = document.getElementById('canvas');

card.addEventListener('dragstart', (ev) => {
    console.info('%c Drag start', 'color: green');
    ev.dataTransfer.setData('text/plain', ev.target.id);
    ev.dataTransfer.dropEffect = 'move';
});

canvas.addEventListener('dragover', (ev) => {
    ev.preventDefault();
    console.info('%c Drag over', 'color: blue', ev.clientX, ev.clientY);
    card.style.display = 'none';
});

canvas.addEventListener('drop', (ev) => {
    ev.preventDefault();
    console.info('%c Dropped', 'color: green', ev.clientX, ev.clientY);
    card.style.left = `${ev.clientX}px`;
    card.style.top = `${ev.clientY}px`;
    card.style.display = 'block';
});

if ('serviceWorker' in navigator) {
    console.info('%cSW: Attempting registration', 'color: green');
    navigator.serviceWorker.register('/html5dnd/sw.js', { scope: '/html5dnd/' })
        .then(reg => {
            console.info('%cSW: Registration - successfully registered', 'color: green');
        })
        .catch(err => {
            console.error('SW: Registration - registration failed', err);
        });
}

