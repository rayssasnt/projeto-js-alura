// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML='Ecolha um número de 1 a 50';
let num_secreto = gerar_num();
let tentativas = 1

function exibirTXTnatela(tag , texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function mensagem(){
    exibirTXTnatela('h1' , 'Jogo do número secreto');
    exibirTXTnatela('p','Ecolha um número de 1 a 50');

}

mensagem();



function verificarChute(){
    let chute = document.querySelector('input').value;

    if (chute == num_secreto){
        exibirTXTnatela('h1','Parabéns, Acertou!!');

        const mensagem = tentativas == 1? "Você acertou de prima" : `Você acertou em ${tentativas} tentavivas`;
        
        exibirTXTnatela('p',`${mensagem}`);

        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        if (chute > num_secreto){
            exibirTXTnatela('p', 'O número secreto é MENOR');
        }
        else{
            exibirTXTnatela('p','O número secreto é MAIOR')
            
        }
        tentativas++
        limpar_campo();
    }
}

function gerar_num(){
    return parseInt(Math.random() * 50 +1)
    
}

function limpar_campo() {
    chute = document.querySelector('input');
    chute.value = '';
    
}

function novo_jogo(){
    num_secreto = gerar_num();
    limpar_campo();
    tentativas = 1;
    mensagem();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}


// var listagenerica = [];

// var ling_programa = ['JavaScript' , 'C' , 'C++' , 'Kotlin' , 'Python'];

// ling_programa.push('Java', 'Ruby' , 'Golang')
// console.log(ling_programa)

// console.log(ling_programa[0]);
// console.log(ling_programa[1]);
// console.log(ling_programa.pop());

