const tripDistEl = document.getElementById("trip-distance")
const fuelEffEl = document.querySelector("#fuel-efficency")
const fuelCostEl = document.querySelector("#fuel-cost")
const calculateBtnEl = document.querySelector("#calculateBtn")

calculateBtn.addEventListener("click", (event) => {
    event.preventDefault();
    if(tripDistEl.value === ""){
        alert("Enter trip distance value");
    }
    else{
        const disanceKM = tripDistEl.value;
        const fuelEfficiency = fuelEffEl.value;
        const fuelCost = fuelCostEl.value;
        
        const result = (disanceKM / fuelEfficiency) * fuelCost
        
        // Mileage: 20.83
        
        const finalCost = "Your fuel cost is around will be: $" + result;
        console.log(finalCost);
        alert(finalCost);
    }
    
})



