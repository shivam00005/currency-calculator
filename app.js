const currency_one = document.getElementById('select-one');
const currency_two = document.getElementById('select-two');
const amount_one = document.getElementById('amount-one');
const amount_two = document.getElementById('amount-two');
const rate = document.getElementById('rate');
const swap = document.getElementById('swap');

//fatch exchage rate call the dom
function calculate(){
  const currencyEL_one = currency_one.value;
  const currencyEL_two = currency_two.value;
  
  fetch(`https://api.exchangerate-api.com/v4/latest/${currencyEL_one}`)
  .then(res => res.json())
  .then(data =>{ //{console.log(data)}
  const rateEL = data.rates[currencyEL_two];
   
   rate.innerText = `1 ${currencyEL_one} = ${rateEL} ${currencyEL_two} `;
  
    amount_two.value = (amount_one.value * rateEL).toFixed(2);
  });
}
  //eventlisteners
currency_one.addEventListener('change', calculate);
amount_one.addEventListener('input', calculate);
currency_two.addEventListener('change', calculate);
amount_two.addEventListener('input', calculate);
swap.addEventListener('click',()=>{
  const temp = currency_one.value;
  currency_one.value = currency_two.value;
  currency_two.value = temp;
  calculate();
});
calculate();