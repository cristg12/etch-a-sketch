const button = document.querySelector("button");

button.addEventListener("click", (event) => {
    let divs = prompt("How many squares per side?");
    const container = document.querySelector("#mainDiv");

    // Limpiar el contenedor eliminando todos los hijos
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // Llamar a la función para crear las divisiones
    createDiv(divs);
});

function createDiv(divs) {
    const container = document.querySelector("#mainDiv");

    // Crear filas
    for (let i = 0; i < divs; i++) {
        let newRow = document.createElement("div");
        newRow.setAttribute("class", "parent");
        container.appendChild(newRow);
    }

    // Crear columnas dentro de cada fila
    let rows = document.querySelectorAll(".parent");
    rows.forEach(row => {
        for (let i = 0; i < divs; i++) {
            let newColumn = document.createElement("div");
            newColumn.setAttribute("class", "child")
            row.appendChild(newColumn);
        }
    });

    // Agregar evento de mouseover a las nuevas columnas
    let newColumn = document.querySelectorAll(".child")
    newColumn.forEach(column => {
        column.addEventListener("mouseover", (event) => {
            column.style.backgroundColor = "blue";
        });
    });
}

// Llamar a createDiv una vez para generar el contenido inicial
createDiv(4); // Esto generará 4x4 cuadrados inicialmente
