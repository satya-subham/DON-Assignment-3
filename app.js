let input = document.querySelector('input');
let button = Array.from(document.querySelectorAll('button'));

button.map((button)=>{
    button.addEventListener('click', (event)=>{
        input.value += event.target.innerText;
        let key = event.target.innerText;
        
        if(key == 'C'){
            input.value = '';
        }
        if(key == '='){
            input,value = eval(input.value); 
        }
        if(key == 'DEL'){
            input.value = input.value.slice(0, -1);
        }
    })
})