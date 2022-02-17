// get income amount
function getIncome(){
   const incomeField= document.getElementById("income-amount");
   const incomeAmount=parseFloat(incomeField.value);
   if(incomeAmount<0 || isNaN(incomeAmount))
   {
       document.getElementById("income-error").style.display="block";
       return 0;
      
   }
   else{
       return incomeAmount;
   }

    
}
//get total expenses amount
function getExpenses(){
   
    const foodField=document.getElementById("food-cost");
    const foodCost=parseFloat(foodField.value);

    const rentField=document.getElementById("rent-cost");
    const rentCost=parseFloat(rentField.value);

    const clothsField=document.getElementById("cloths-cost");
    const clothsCost=parseFloat(clothsField.value);

    if(foodCost<0 || rentCost<0 || clothsCost<0)
    {
       document.getElementById("expenses-error").style.display="block";  
       return 0;
      
    }
    else if(isNaN(foodCost) || isNaN(rentCost) || isNaN(clothsCost))
    {
       document.getElementById("expenses-error").style.display="block";   
       return 0; 
    }
    else{
        return foodCost + rentCost + clothsCost;
    }
    
    

}
// get saving amount %
function savingMoney(){
    const savingInput=document.getElementById("save-input");
    const savingAmount=parseFloat(savingInput.value);
    if(savingAmount<0 || isNaN(savingAmount))
    {
        document.getElementById("saving-input-error").style.display="block";
        return 0;
    }
    else{
        return savingAmount;
    }
}
// calculate button event  listener
document.getElementById("calculate-btn").addEventListener("click",function(){
    const incomeAmount=getIncome();
    const totalCost=getExpenses();
  
    if(totalCost>incomeAmount)
    {
        document.getElementById("balance-error").style.display="block"
    }
    else{
        const totalBalance=incomeAmount - totalCost;
        document.getElementById("total-expenses").innerText=Math.round(totalCost);
        document.getElementById("total-balance").innerText=Math.round(totalBalance);
    }

});
// save button event  listener
document.getElementById("save-btn").addEventListener("click",function(){
   const savingAmount=(savingMoney()/100)*getIncome();
   const totalBalance=getIncome()-getExpenses();
   if(savingAmount>totalBalance)
   {
       document.getElementById("saving-amount-error").style.display="block";
   }
   else{
     const remainingAmount =totalBalance - savingAmount
     document.getElementById("saving-amount").innerText=Math.round(savingAmount);
     document.getElementById("remaining-amount").innerText=Math.round(remainingAmount);
   }
});

