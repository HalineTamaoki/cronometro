//declaração botoes//
const botaoStart = document.getElementById('botao-iniciar')
const botaoPause = document.getElementById('botao-pausar')
const botaoStop = document.getElementById('botao-zerar')

//declaração tempo//
let mil = 0
let seg = 0
let min = 0
let cron;

//mouseover e mouseout botao start//
function mouseoverStart(){
    botaoStart.style.backgroundColor="#117711";
    tooltip();
}
function mouseoutStart(){
    botaoStart.style.backgroundColor="#339933";
}

//mouseover e mouseout botao pausar//
function mouseoverPause(){
    botaoPause.style.backgroundColor="#771111";
    tooltip()
}
function mouseoutPause(){
    botaoPause.style.backgroundColor="#993333";
}

//mouseover e mouseout botao zerar//
function mouseoverStop(){
    botaoStop.style.backgroundColor="#999999";
    tooltip()
}
function mouseoutStop(){
    botaoStop.style.backgroundColor="#AAAAAA";
}

//ativar botoes//
botaoStart.addEventListener('click', start);
botaoPause.addEventListener('click', pause);
botaoStop.addEventListener('click', stop);

//ativar botoes pelo teclado//
let comecou=false
window.onkeydown = function (event){
    if (event.which == 32 && !comecou){
        start()
    }
    
    if (event.which == 13){
        pause()
    }
    
    if (event.which == 16){
        stop()
    }
}

//funcoes botoes//
function start(){
    comecou = true
    trocaBotoes()
    cron=setInterval(()=>{timer();transcrever()},10)
}

function pause(){
    comecou = false
    trocaBotoes()
    clearInterval(cron)
}

function stop(){
    comecou = false
    clearInterval(cron);
    mil=0;
    seg=0;
    min=0;
    transcrever()
    botaoPause.classList.add('botao-hidden');
    botaoStart.classList.remove('botao-hidden')
}

//funcao trocar botoes//
function trocaBotoes(){
    botaoPause.classList.toggle('botao-hidden');
    botaoStart.classList.toggle('botao-hidden')
}

//function que faz rodar cronometro//
function timer(){
    mil++;

    if(mil===100){
        seg++;
        mil=0
    }

    if(seg>=60){
        min++;
        seg=0
    }
}

//function que transcreve para o html//
function transcrever(){
    let texto = (min<10 ? '0'+min:min)+ ":"+ (seg<10 ? '0'+seg:seg)+":"+(mil<10 ? '0'+mil:mil)
    document.getElementById('texto-botao').innerHTML= texto
}