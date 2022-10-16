haveNumbers = (input) =>{
    const numbers= ["1","2","3","4","5","6","7","8","9","0"];
    for(let i = 0 ; i < input.length ; i++){
        if(numbers.includes(input[i])){
            return true;
        }
    }
    return false;
}

validateTextField = (elementId) =>{
    let input = document.getElementById(elementId).value;
    let textMessage = elementId == "form-name" ? "nombre" : "apellido";
    let error = elementId == "form-name" ? "error-name" : "error-lastname";
    if(haveNumbers(input)){
        document.getElementById(error).innerHTML = `El ${textMessage} no puede contener numeros`;
    }else{
        document.getElementById(error).innerHTML = " ";
    }
}

validate = () =>{
    validateTextField("form-name");
    validateTextField("form-lastname");   
}