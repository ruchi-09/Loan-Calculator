const loanAmount=document.getElementById("la")
const interestRate=document.getElementById("ir")
const monthstoPay=document.getElementById("mtp")
const calculate=document.getElementsByClassName("calculate")[0]
const clear=document.getElementsByClassName("clear")[0]
const monthlyPaymentDisplay = document.getElementById("mp");



calculate.addEventListener('click', ()=>{
    let LA =parseFloat(loanAmount.value);
    let IR =parseFloat(interestRate.value);
    let MTP=parseFloat(monthstoPay.value);

  if(!LA || !IR || !MTP){
    alert("Please enter valid values for all fields");
  }

  let r = (IR / 100) / 12;
  let M = (LA * r * Math.pow(1 + r, MTP)) / (Math.pow(1 + r, MTP) - 1);

  monthlyPaymentDisplay.innerHTML=`Monthly Payment = $ ${M.toFixed(2)}`;
  monthlyPaymentDisplay.style.color = "black"; // Set text color
});

//clear button

clear.addEventListener('click', () => {
    loanAmount.value = ''; 
    interestRate.value = ''; 
    monthstoPay.value = ''; 
    monthlyPaymentDisplay.innerHTML = 'Monthly Payment = '; 
});
