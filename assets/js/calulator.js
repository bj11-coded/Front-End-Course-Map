function ErrorHandling () {
  try{
    const errors = document.calculator.result.value;
    if(/[\+\-\*\/],{2,}/.test(errors)){
      throw new Error ('Invalid Inupt');
    }
    if(errors.trim() === ''){
      throw new Error ('Empty Input');
    }
    if ( errors >= 20){
      throw new Error ('Input is too large');
    }
    if (errors === 'Infinity'){
      throw new Error ('Division by zero is not allowed');
    }
    const resu = eval(errors);
    document.calculator.result.value = resu;
  }catch(err){
    err.message;
    document.calculator.result.value = err;
  }
}