const button = document.querySelector(".Button"); //Calculate button element

button.addEventListener("click", function(){
    
    const p = Number(document.querySelector(".Sum").value); //principle amount
    const r = Number(document.querySelector(".Interest_Rate").value); //Interest Rate
    const t = Number(document.querySelector(".Time_period").value); //Time period (in years)
    const n = Number(document.querySelector(".Compounded").value); //Number of times being compounded per year
    
    let amount = p*((1+(r/n)))**(n*t)
    let interest = amount - p;

    document.querySelector(".Amount").value = amount;
    document.querySelector(".CI").value = interest;
 
})
