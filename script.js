 function createDiv (n) {
    const container = document.querySelector("#mainDiv");
    
    for(i=0; i<n; i++){
        let newRow= document.createElement("div")
        let id = i;
        newRow.setAttribute("id", id)
        container.appendChild(newRow)

        
    }

    for(a=0; a<n; i++){
        let newColumn = document.createElement("div")
        newRow.appendChild(newColumn)
    }
    

 }

 createDiv(16)