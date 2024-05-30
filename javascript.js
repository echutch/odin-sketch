

const container = document.querySelector(".container");

for (let i = 0; i < 16; i++) {
    let line = document.createElement("div");
    line.classList.add("line");
    container.appendChild(line);

    for (let j = 0; j < 16; j++) {
        let box = document.createElement("div");
        box.classList.add("box");
        line.appendChild(box); 
    }
}

setBoxes();
setButton();

function setBoxes() {
    const boxes = document.querySelectorAll(".box");

    boxes.forEach((box) => {
        box.addEventListener("mouseenter", function (e) {
            e.target.style.background = "black";
        });
    });
}

function setButton() {
    const button = document.querySelector(".title");
    button.addEventListener("click", () => {
        const boxes = document.querySelectorAll(".box");
        boxes.forEach((box) => {
            box.remove();
        });

        const lines = document.querySelectorAll(".line");
        lines.forEach((line) => {
            line.remove();
        });



        let size = window.prompt("Set new size: ");

        while (size > 100 || size < 1) {
            size = window.prompt("Set new size: ");
        }

        let padding = ((800/size) - 2 - 2.8) / 2;
        padding = padding.toString() + "px";

        for (let i = 0; i < size; i++) {
            let line = document.createElement("div");
            line.classList.add("line");
            container.appendChild(line);
    
            for (let j = 0; j < size; j++) {
                let box = document.createElement("div");
                box.classList.add("box");
                line.appendChild(box); 
                box.style.padding = padding;
            }
        }

        setBoxes();
    });
}











