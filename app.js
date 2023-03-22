const displayElement = document.querySelector(".display")
const minusElement = document.querySelector(".minus")
const plusElement = document.querySelector(".plus")

let count = 0;

updateDisplay();

plusElement.addEventListener("click", ()=>{
    count++;
updateDisplay();

})

minusElement.addEventListener("click", ()=>{
    count--;
updateDisplay();
    
})

function updateDisplay(){
    displayElement.innerHTML = count;
}