// 26-6(Get user deposit and set total deposit value)
document.getElementById('btn-deposit').addEventListener('click',function(){
    const depositAmount=document.getElementById('deposit-input');
    // for input field we have to use .value for getting the value inside the input field
    const newDepositString=depositAmount.value;
    const newDeposit=parseFloat(newDepositString);

    // get the current depost total
    const depositTotalElement=document.getElementById('deposit-total');
    const previousDepositTotalString=depositTotalElement.innerText;
    const previousDepositTotal=parseFloat(previousDepositTotalString);

    // 26-7(Update deposit and balance and handle string add)
    const currentDepositTotal=previousDepositTotal+newDeposit;
    depositTotalElement.innerText=currentDepositTotal;

    // total-balance
    const currentBalance=document.getElementById('total-balance');
    const currentBalanceString=currentBalance.innerText;
    const balance=parseFloat(currentBalanceString);

    const newTotalBalance=balance+newDeposit;
    currentBalance.innerText=newTotalBalance;
})