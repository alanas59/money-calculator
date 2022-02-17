// get income amount
function getIncome(){
   const incomeField= document.getElementById("income-amount");
   const incomeAmount=parseFloat(incomeField.value);
   if(incomeAmount<0 || isNaN(incomeAmount))
   {
       document.getElementById("income-error").style.display="block";
   }
   else{
       return incomeAmount;
   }

    
}



// get total expenses

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
    }
    else if(isNaN(foodCost) || isNaN(rentCost) || isNaN(clothsCost))
    {
       document.getElementById("expenses-error").style.display="block";    
    }
    else{
        return foodCost + rentCost + clothsCost;
    }
    
    

}

// get balance


document.getElementById("calculate-btn").addEventListener("click",function(){
    const incomeAmount=getIncome();
    const totalCost=getExpenses();
    console.log(incomeAmount,totalCost);
    if(totalCost>incomeAmount)
    {
        document.getElementById("balance-error").style.display="block"
    }
    else{
        const totalBalance=incomeAmount - totalCost;
        document.getElementById("total-expenses").innerText=totalCost;
        document.getElementById("total-balance").innerText=totalBalance;
    }

});