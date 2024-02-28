//arrays + fuction

let peet =["perla","rat","coli"];
function elegir(animal) {
    console.log(animal[0])   
}

elegir(peet);

//obejtos +metodo

const tecdata = {
    name:"manuel",
    age:23,
    display: function (rat)  {
        if (rat===true) {
            console.log("felicidades te asendieron")
        }   else {
            console.log("sorry")
        }
    } 
};

tecdata.display(true);

function evolucion(dios,fuerza) {
    if (dios==="Dios" && fuerza==="alta") {
        console.log("lograremos evolucionar con Dios" );
    } else if (dios==="Dios"&& fuerza==="baja") { console.log("DIOS no puede actuar sin nuestra desicion");
    } else { console.log("necesitamos a DIOS y 100% de fuerzas")}
}
evolucion("Dios","alta");

