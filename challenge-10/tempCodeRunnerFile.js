    operationSignal = '-'
    var subtraction = calculator(num1, num2);
    if(subtraction){
        num1 = 8;
        num2 = 5;
        console.log(showOperationMessage(operationSignal, num1, num2),sum(num1, num2));    
    }else{
        console.log(showErrorMessage(operationSignal));

    }