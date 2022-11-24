let btnSend = document.getElementById("btnSend");
let qty = document.getElementById("qty");
let divCalc = document.getElementById("divCalc");
let divResult = document.getElementById("divResult");
let max = 0;
let min = 0;

btnSend.addEventListener("click", function(e) {
    notesAlumn();
    btnSend.style.display = "none";
    qty.disabled = true;
    notesCalc();
    //const inputLabel = document.createAttribute("label");
});

function notesAlumn () {
    console.log(qty.value);
    for (let i = 1; i <= qty.value; i++) {
        const inputBox = document.createElement("input");
        const salto = document.createElement("p");
        inputBox.type = "number";
        inputBox.maxLength = "2";
        inputBox.id = "notesAlumn";
        inputBox.className = "notesAlumn";
        inputBox.placeholder = "Alumno " + i;
        divCalc.appendChild(salto);
        divCalc.appendChild(inputBox);
        console.log(i);
    }
    const btnNotes = document.createElement("input");
    const salto = document.createElement("p");
    btnNotes.type = "submit";
    btnNotes.id = "btnNotes";
    btnNotes.value = "Calcular";
    divCalc.append(salto);
    divCalc.append(btnNotes);
}

function notesCalc(){ 
    let btnNotes = document.getElementById("btnNotes");

    btnNotes.addEventListener("click", function(e) {
        let notesAlumn = document.getElementsByClassName("notesAlumn");
        let prom = 0;
        var alumnos = [];

        for (let i = 0; i < notesAlumn.length; i++ ) {
            if (notesAlumn[i].value == "") {
                 notesAlumn[i].value = 0;
                 console.log(notesAlumn[i].value);
            }
            console.log(notesAlumn[i].value);
            prom = prom + parseFloat(notesAlumn[i].value); 
            console.log(prom);
            alumnos.push(parseFloat(notesAlumn[i].value));
        }
        prom = prom / notesAlumn.length;
        prom = prom.toFixed(2);
        console.log(prom);
        console.log(alumnos);
        max = Math.max.apply(Math, alumnos);
        min = Math.min.apply(Math, alumnos);
        console.log(alumnos.indexOf(max));
        console.log(alumnos.indexOf(min));
        dataCalc(max, min, prom);
        
    });
}   

function dataCalc(a, b, c) {
    console.log(a + " " + b);
    const labelProm = document.createElement("p");
    const labelMax = document.createElement("p");
    const labelMin = document.createElement("p");
    const textMax = document.createTextNode("Calificación mas alta: " + a);
    const textMin = document.createTextNode("Calificación mas baja: " + b);
    const textProm = document.createTextNode("El promedio es: " + c);
    
    divResult.innerHTML = "";
    labelProm.classname = "prom";
    divResult.appendChild(labelProm);
    labelProm.appendChild(textProm);
    labelMax.className = "max";
    divResult.appendChild(labelMax);
    labelMax.appendChild(textMax);
    labelMin.className = "min";
    divResult.appendChild(labelMin);
    labelMin.appendChild(textMin);
    divResult.style.display = "block";
}
