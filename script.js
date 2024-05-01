 function createDiv (n) {
    const container = document.querySelector("#mainDiv");
    
    for(i=0; i<n; i++){
        let newRow= document.createElement("div")
        let id = i;
        newRow.setAttribute("class", "parent")
        container.appendChild(newRow)
        
    }

    let rows = document.querySelectorAll(".parent");
    rows.forEach(row => {
        for(let i = 0; i < n; i++) {
            let newColumn = document.createElement("div");
            
            row.appendChild(newColumn);
        }
    });
    

 }

 createDiv(16)