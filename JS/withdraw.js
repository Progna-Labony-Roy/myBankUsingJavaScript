// 26-8 Money withdraw and reduce balance for withdraw

document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawAmount=document.getElementById('withdraw-input');
    // for input field we have to use .value for getting the value inside the input field
    const newWithdrawString=withdrawAmount.value;
    const newWithdraw=parseFloat(newWithdrawString);

    // get the current depost total
    const withdrawTotalElement=document.getElementById('withdraw-total');
    const previousWithdrawTotalString=withdrawTotalElement.innerText;
    const previousWithdrawTotal=parseFloat(previousWithdrawTotalString);

    // 26-7(Update deposit and balance and handle string add)
    const currentWithdrawTotal=previousWithdrawTotal+newWithdraw;
    withdrawTotalElement.innerText=currentWithdrawTotal;

    // total-balance
    const currentBalance=document.getElementById('total-balance');
    const currentBalanceString=currentBalance.innerText;
    const balance=parseFloat(currentBalanceString);

    const newTotalBalance=balance-newWithdraw;
    currentBalance.innerText=newTotalBalance;
})