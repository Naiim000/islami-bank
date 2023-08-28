document.getElementById('deposit').addEventListener('click',function(){
    const depositAmount=document.getElementById('get-deposit');
    const newTotalAmountString= depositAmount.value;
    const newTotalAmount=parseFloat(newTotalAmountString);
    const updatedDeposit=document.getElementById('deposit-amount');
    const prevDepositTotalString=updatedDeposit.innerText;
    const prevDepositTotal=parseFloat(prevDepositTotalString);
    updatedDeposit.innerText=newTotalAmount;
    const totalDeposit=prevDepositTotal+newTotalAmount;
    updatedDeposit.innerText=totalDeposit;
    const prevBalance=document.getElementById('Balance');
    const prevTotalBalanceString=prevBalance.innerText;
    const prevBalanceTotal=parseFloat(prevTotalBalanceString);
    const totalBalance=prevBalanceTotal+newTotalAmount;
    prevBalance.innerText=totalBalance;


   depositAmount.value=''; 
})