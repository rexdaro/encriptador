



//referencias del html

const btnEncriptar = document.querySelector('#encriptar');
const btnDesencriptar = document.querySelector('#desencriptar');
const btnCopiar = document.querySelector('#copiar');


const encriptar = (info) => {

    



   
}




//eventos

btnEncriptar.addEventListener('click', function(){

    let informacion = document.getElementById('input').value;
    let frase = informacion.split('');
    let nuevaFrase = [];
    let encriptado = '';
    let letras = ['a','b','c','d','e','f','g','h', 'i', 'j','k',
    'l', 'm', 'n', 'ñ', 'o','p','q','r','s','t','u','v', 'w','x',
    'y', 'z', ' ', '?','a','b','c','d','e','f','g','h', 'i', 'j','k',
    'l', 'm', 'n', 'ñ', 'o','p','q','r','s','t','u','v', 'w','x',
    'y', 'z', ' ', '?','a','b','c','d','e','f','g','h', 'i', 'j','k',
    'l', 'm', 'n', 'ñ', 'o','p','q','r','s','t','u','v', 'w','x',
    'y', 'z', ' ', '?','a','b','c','d','e','f','g','h', 'i', 'j','k',
    'l', 'm', 'n', 'ñ', 'o','p','q','r','s','t','u','v', 'w','x',
    'y', 'z', ' ', '?','a','b','c','d','e','f','g','h', 'i', 'j','k',
    'l', 'm', 'n', 'ñ', 'o','p','q','r','s','t','u','v', 'w','x',
    'y', 'z', ' ', '?','a','b','c','d','e','f','g','h', 'i', 'j','k',
    'l', 'm', 'n', 'ñ', 'o','p','q','r','s','t','u','v', 'w','x',
    'y', 'z', ' ', '?','a','b','c','d','e','f','g','h', 'i', 'j','k',
    'l', 'm', 'n', 'ñ', 'o','p','q','r','s','t','u','v', 'w','x',
    'y', 'z', ' ', '?','a','b','c','d','e','f','g','h', 'i', 'j','k',
    'l', 'm', 'n', 'ñ', 'o','p','q','r','s','t','u','v', 'w','x',
    'y', 'z', ' ', '?','a','b','c','d','e','f','g','h', 'i', 'j','k',
    'l', 'm', 'n', 'ñ', 'o','p','q','r','s','t','u','v', 'w','x',
    'y', 'z', ' ', '?','a','b','c','d','e','f','g','h', 'i', 'j','k',
    'l', 'm', 'n', 'ñ', 'o','p','q','r','s','t','u','v', 'w','x',
    'y', 'z', ' ', '?','a','b','c','d','e','f','g','h', 'i', 'j','k',
    'l', 'm', 'n', 'ñ', 'o','p','q','r','s','t','u','v', 'w','x',
    'y', 'z', ' ', '?','a','b','c','d','e','f','g','h', 'i', 'j','k',
    'l', 'm', 'n', 'ñ', 'o','p','q','r','s','t','u','v', 'w','x',
    'y', 'z', ' ', '?','a','b','c','d','e','f','g','h', 'i', 'j','k',
    'l', 'm', 'n', 'ñ', 'o','p','q','r','s','t','u','v', 'w','x',
    'y', 'z', ' ', '?','a','b','c','d','e','f','g','h', 'i', 'j','k',
    'l', 'm', 'n', 'ñ', 'o','p','q','r','s','t','u','v', 'w','x',
    'y', 'z', ' ', '?','a','b','c','d','e','f','g','h', 'i', 'j','k',
    'l', 'm', 'n', 'ñ', 'o','p','q','r','s','t','u','v', 'w','x',
    'y', 'z', ' ', '?','a','b','c','d','e','f','g','h', 'i', 'j','k',
    'l', 'm', 'n', 'ñ', 'o','p','q','r','s','t','u','v', 'w','x',
    'y', 'z', ' ', '?','a','b','c','d','e','f','g','h', 'i', 'j','k',
    'l', 'm', 'n', 'ñ', 'o','p','q','r','s','t','u','v', 'w','x',
    'y', 'z', ' ', '?','a','b','c','d','e','f','g','h', 'i', 'j','k',
    'l', 'm', 'n', 'ñ', 'o','p','q','r','s','t','u','v', 'w','x',
    'y', 'z', ' ', '?','a','b','c','d','e','f','g','h', 'i', 'j','k',
    'l', 'm', 'n', 'ñ', 'o','p','q','r','s','t','u','v', 'w','x',
    'y', 'z', ' ', '?','a','b','c','d','e','f','g','h', 'i', 'j','k',
    'l', 'm', 'n', 'ñ', 'o','p','q','r','s','t','u','v', 'w','x',
    'y', 'z', ' ', '?','a','b','c','d','e','f','g','h', 'i', 'j','k',
    'l', 'm', 'n', 'ñ', 'o','p','q','r','s','t','u','v', 'w','x',
    'y', 'z', ' ', '?','a','b','c','d','e','f','g','h', 'i', 'j','k',
    'l', 'm', 'n', 'ñ', 'o','p','q','r','s','t','u','v', 'w','x',
    'y', 'z', ' ', '?','a','b','c','d','e','f','g','h', 'i', 'j','k',
    'l', 'm', 'n', 'ñ', 'o','p','q','r','s','t','u','v', 'w','x',
    'y', 'z', ' ', '?','a','b','c','d','e','f','g','h', 'i', 'j','k',
    'l', 'm', 'n', 'ñ', 'o','p','q','r','s','t','u','v', 'w','x',
    'y', 'z', ' ', '?','a','b','c','d','e','f','g','h', 'i', 'j','k',
    'l', 'm', 'n', 'ñ', 'o','p','q','r','s','t','u','v', 'w','x',
    'y', 'z', ' ', '?','a','b','c','d','e','f','g','h', 'i', 'j','k',
    'l', 'm', 'n', 'ñ', 'o','p','q','r','s','t','u','v', 'w','x',
    'y', 'z', ' ', '?','a','b','c','d','e','f','g','h', 'i', 'j','k',
    'l', 'm', 'n', 'ñ', 'o','p','q','r','s','t','u','v', 'w','x',
    'y', 'z', ' ', '?','a','b','c','d','e','f','g','h', 'i', 'j','k',
    'l', 'm', 'n', 'ñ', 'o','p','q','r','s','t','u','v', 'w','x',
    'y', 'z', ' ', '?','a','b','c','d','e','f','g','h', 'i', 'j','k',
    'l', 'm', 'n', 'ñ', 'o','p','q','r','s','t','u','v', 'w','x',
    'y', 'z', ' ', '?','a','b','c','d','e','f','g','h', 'i', 'j','k',
    'l', 'm', 'n', 'ñ', 'o','p','q','r','s','t','u','v', 'w','x',
    'y', 'z', ' ', '?','a','b','c','d','e','f','g','h', 'i', 'j','k',
    'l', 'm', 'n', 'ñ', 'o','p','q','r','s','t','u','v', 'w','x',
    'y', 'z', ' ', '?','a','b','c','d','e','f','g','h', 'i', 'j','k',
    'l', 'm', 'n', 'ñ', 'o','p','q','r','s','t','u','v', 'w','x',
    'y', 'z', ' ', '?',];
    

    for (let i = 0; i < frase.length; i++){
         // nuevaFrase += frase[i] + letras[i+1];
         nuevaFrase.push(frase[i]);
         nuevaFrase.push(letras[i+1]);
    }
    for(let i = 0; i < nuevaFrase.length; i++){
        encriptado += nuevaFrase[i];
    }
    


    console.log(encriptado);
    document.querySelector('#input').value = encriptado;
    
})

btnDesencriptar.addEventListener('click', function(){

    let informacion = document.getElementById('input').value;
    let frase = informacion.split('');
    let nuevaFrase = [];
    let desencriptado = '';

    

    for (let i = 0; i < frase.length; i++){
        if ((i % 2) == 0) {
            nuevaFrase.push(frase[i]);
        }          
    }
    
    for(let i = 0; i < nuevaFrase.length; i++){
        desencriptado += nuevaFrase[i];
    }
    console.log(desencriptado);
    
    document.querySelector('#input').value = desencriptado;
})

btnCopiar.addEventListener('click', function(){



    let informacion = document.getElementById('input').value;

    navigator.clipboard.writeText(informacion);


    console.log('estoy copiando')
    
    
})