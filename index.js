const textareaE1 = document.getElementById("textarea")
const totalCounterE1 = document.getElementById
("Totalcounter")
const remainingCounterE1 = document.getElementById("Totalremaining")
textareaE1.addEventListener("keyup",()=>{
    updateCounter()
})
updateCounter()
function updateCounter(){
    totalCounterE1.innerText = textareaE1.value.length
    remainingCounterE1.innerText=textareaE1.getAttribute("maxLength") - textareaE1.value.length;
}