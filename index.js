let answer=Math.floor(Math.random()*10+1);
let guess=0;
submit=document.getElementById('submit');
submit.onclick = ()=>{
    
    let number=document.getElementById('number').value;
    guess+=1;
    if(number==answer){
    alert(`Congrats ! You guessed correct number , in ${guess} guesses.`)
    guess=0;
    return;
    
}
answer>number?alert('Too Low'):alert('Too High')
}