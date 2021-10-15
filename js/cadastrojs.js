class validator{

    constructor(){
        this.validations = [

        ]
    }

    // iniciar a validação de todos os campos
    validate(form){

        // pegar os inputs

        let inputs = form.getElementByTageName("input");

        console.log(inputs)

        // tml colection  -> array

        let inputsarray = [...inputs];

        console.log(inputsarray)
        

    }

}


let form = document.getElementById("register-form");
let submit = document.getElementById("btn-submit");

let validator = new validator();

// evento que dispara as validações 

submit.addEventListener ("click", function(e){
    e.preventDefault();

    console.log("funcionou");

    validator.valiate(form);

})