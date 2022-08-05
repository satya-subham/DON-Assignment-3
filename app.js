let display = document.getElementsByClassName('display');
let button = Array.from(document.querySelectorAll('button'));

button.map((button)=>{
    button.addEventListener('click', (event)=>{
        display.innerText += event.target.innerText;
        let key = event.target.innerText;
        if(key == '1' || key == '2' || key == '3' || key == '4' || key == '5' || key == '6' || key == '7' || key == '8' || key == '9' || key == '0'){
            display.innerText += key;
        }
        if(key == 'C'){
            display.innerText = '';
        }
        if(key == '='){
            display.innerText = eval(input.value); 
        }
        if(key == 'DEL'){
            display.innerText = display.innerText.slice(0, -1);
        }
    })
})