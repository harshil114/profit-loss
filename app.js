const buyPrice = document.querySelector('#initial-price')
const stockQuantity= document.querySelector('#number-of-stocks')
const currentPrice = document.querySelector('#current-price')
const calculateBtn = document.querySelector('#calculate-btn')
const result = document.querySelector('#output')

calculateBtn.addEventListener("click",submitHandler)

function submitHandler(){
    result.style.display = "none";
    const ip = Number(buyPrice.value);
    const qty = Number(stockQuantity.value);
    const cp = Number(currentPrice.value); 
    calculateProfitAndLoss(ip,qty,cp);

}

function calculateProfitAndLoss(initial,quantity,current){

    if(initial>current){
        const loss = (initial - current)*quantity;
        const lossPercentage = (loss/initial)*100;
        showMessage(`loss is ${loss} and percent is ${lossPercentage}%`)
        result.style.color="red";
    }else if(current>initial){
        const profit=(current - initial)*quantity;
        const profitPercentage = (profit/initial)*100;
        showMessage(`Profit is ${profit} and percent is ${profitPercentage}%`) 
        result.style.color="green";

    }else{
        showMessage('all are equals');
        result.style.color="orange";

    }
}
function showMessage(message){
    result.style.display = "block";
    result.innerText = message;
}