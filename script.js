//Create a webpage with a 16x16 grid of square divs
function createDiv(number){
    const container = document.querySelector("#container");

    const div = document.createElement("div");
    div.textContent = "   ." 
    console.log(`Επανάληψη: ${number}`);
    div.setAttribute("style", 
        `border: 1px solid  cadetblue;
         width: 20px; 
         max-width: 20px;
         background-color: blanchedalmond;
         color: blanchedalmond;`
    );
    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "black";
        div.style.color = "black";
    });
    // div.addEventListener("mousedown", () => {
    //     div.style.backgroundColor = "blanchedalmond";
    //     div.style.color = "blanchedalmond";
    // });

    container.appendChild(div)
}

function createCanvas(){
    for (let i = 0; i < 972; i++) {
        createDiv(i+1)
    }
}


createCanvas()