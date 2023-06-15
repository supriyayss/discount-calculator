

const bill = document.querySelector("#billAmount");
const discount = document.querySelector('#percentage');
const calculator = document.querySelector('#calculate');
const total = document.querySelector('#total');

calculator.addEventListener('click',()=> {
    const billValue = bill.value;
    const discountValue = discount.value;
   
  
    const valid = isValid(discountValue, billValue);
    if(valid){
        const discountAmount = billValue - (billValue* discountValue/100);
    
        total.innerHTML = `Total Discount Amount = = ${discountAmount}`;
    }else{
        alert("Entered correct amount");
    }

   

});

function isValid(discount,bill){
    if(discount < 0 || discount > 100 || isNaN(bill) || bill <= 0 ){
        return false
    }
    return true;
}


