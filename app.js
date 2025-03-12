document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('table-container');

    const table = document.createElement('table');
    for (let i = 0; i <= 10; i++) {
        const row = document.createElement('tr');

        for (let j = 0; j <= 10; j++) {
            const cell = i === 0 || j === 0 ? document.createElement('th') : document.createElement('td');

            if (i === 0 && j === 0) {
                cell.textContent = 'x';
            } else if (i === 0) {
                cell.textContent = j;
            } else if (j === 0) {
                cell.textContent = i;
            } else {
                cell.textContent = i * j;
            }

            row.appendChild(cell);
        }

        table.appendChild(row);
    }

    container.appendChild(table);

    const textElement = document.getElementById('text');
    const button = document.getElementById('toggle-color-btn');

    let isColorChanged = false;
    const initialColor = "black";
    const newColor = "red";

    button.addEventListener('click', () => {
        textElement.style.color = isColorChanged ? initialColor : newColor;
        isColorChanged = !isColorChanged;
    });

    const imageElement = document.getElementById('random-image');
    const randomNumber = Math.floor(Math.random() * 9) + 1;
    imageElement.src = `images/${randomNumber}.jpg`;
});