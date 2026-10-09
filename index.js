//select element 
const insermentBtn = document.getElementById('incerment');
const decermentBtn = document.getElementById('decerment');
const resetBtn = document.getElementById('reset');
const countNumber = document.querySelector('.number--count');
let count =0;


const createColorCount = function(){
    countNumber.textContent =count;
         if(count>0){
        countNumber.style.color = "green"
    } 
    else if(count<0){
        countNumber.style.color = "red"
    }else{
        countNumber.style.color ="black"
    }
}
//increase Button
insermentBtn.addEventListener('click',function(e){
    e.preventDefault();
    count++;
    countNumber.textContent = count;
    createColorCount();

})


//decrese button 
decermentBtn.addEventListener('click',function(e){
    e.preventDefault();
    count--;
    countNumber.textContent =count;
    createColorCount();

})

//reset button 
resetBtn.addEventListener('click' , function(e){
    e.preventDefault();
    count = 0;
    countNumber.textContent = 0;
    createColorCount();
})
