let screen = document.getElementById('screen');
let btn = document.querySelectorAll('button');
let screenvalue = ' ';

for(item of btn){
    item.addEventListener('click', (e) => {
        btnText = e.target.innerText;
        console.log(btnText);
       
        if(btnText == 'C'){
            screenvalue= " ";
            screen.value = screenvalue;
        }
        else if(btnText =='='){
            screen.value = eval(screenvalue);
        }
        else if(btnText == '%'){
            screenvalue = 'sorry we are working on this'
            screen.value= screenvalue;
        }
        else{
            screenvalue += btnText;
            screen.value= screenvalue;
        }
    })
}
