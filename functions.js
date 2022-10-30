
let datos = document.querySelectorAll("input");
let btnSubmit = document.getElementById("submit") 
let result = document.getElementById("result"); 
let datos2 = document.querySelectorAll("select"); 

let salida = ""

btnSubmit.addEventListener('click', () => {

datos.forEach(p => { 
    if(p.type === "radio"){
        p.checked? salida+= p.value: salida+=""; 
    }else{
        salida+= p.value + "\n"; }
    })
    

datos2.forEach(p => { salida+= p.value +"\n"; })

//result.innerHTML += salida; 

})




