$(document).ready(() => {
    const titulos = []
    const niveis = []

    for (let j = 1; j < 13; j++) {
        let projeto = `
            <div class="contato1" id="entrachat">
                <img src="img/perfio.png" alt="">
                <h1>Pedro Jorge </h1>
            </div>
        `
        $('.contatos').append(projeto);
 
    }

    chatconversa = document.getElementById('abrir-chat-conversa')

    tamanho = document.querySelector('.card-chat')
    centro = document.querySelector('.centro')
    input = document.querySelector('.mandar')
    mais = document.querySelector('#minimiza')

    $("#entrachat").click(function() {
        chatconversa.style.display = 'flex'
    });

    $("#facharchat").click(function() {
        chatconversa.style.display = 'none'
    });

    $("#minimiza").click(function() {

        if(mais.name == 'desativo'){
            mais.src = 'img/icons8-mais.svg'
            mais.style.marginTop = '0'
            mais.style.height = '22px' 
            mais.style.width = '18px' 
            mais.name = 'ativo'
            centro.style.display ='none'
            input.style.display ='none'
            tamanho.style.height = '2.5rem'

        }else{
            mais.name = 'desativo'
            mais.src = 'img/minimize-window-svgrepo-com.svg'
            mais.style.marginTop = '-11px'
            mais.style.height = '1rem' 
            mais.style.width = '1rem'
            centro.style.display ='block'
            input.style.display ='flex' 
            tamanho.style.height = '26rem'
        }

    });


   
})

// ${titulos[j - 1]}

