document.getElementById('Withdraw-btn').addEventListener('click',function(){
    const withdrawAmount=document.getElementById('please-withdraw');
    const newTotalWithdrawString= withdrawAmount.value;
    const newTotalWithdraw=parseFloat(newTotalWithdrawString);
    const updatedWithdraw=document.getElementById('withdraw');
    const prevWithdrawTotalString=updatedWithdraw.innerText;
    const prevWithdrawTotal=parseFloat(prevWithdrawTotalString);
    updatedWithdraw.innerText=newTotalWithdraw;
    const totalWithdraw=prevWithdrawTotal+newTotalWithdraw;
    updatedWithdraw.innerText=totalWithdraw;
    const prevBalance=document.getElementById('Balance');
    const prevTotalBalanceString=prevBalance.innerText;
    const prevBalanceTotal=parseFloat(prevTotalBalanceString);
    const totalBalance=prevBalanceTotal-newTotalWithdraw;
    prevBalance.innerText=totalBalance;


   withdrawAmount.value=''; 
})