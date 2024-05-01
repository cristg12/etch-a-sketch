function createDiv(n) {
    const container = document.querySelector("#mainDiv");
    
    // Crear filas
    for(let i = 0; i < n; i++) {
        let newRow = document.createElement("div");
        newRow.setAttribute("class", "parent");
        container.appendChild(newRow);
    }

    // Crear columnas dentro de cada fila
    let rows = document.querySelectorAll(".parent");
    rows.forEach(row => {
        for(let i = 0; i < n; i++) {
            let newColumn = document.createElement("div");
            newColumn.setAttribute("class", "child")
            row.appendChild(newColumn);
        }
    });
}

createDiv(16);
