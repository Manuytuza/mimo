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

