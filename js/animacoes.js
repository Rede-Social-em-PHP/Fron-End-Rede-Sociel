// abiri perfio do menu //
cardperdioabre = document.getElementById('infoperfio')
sobe = document.querySelector('.sobe')

$("#perfio").click(function() {
    if(cardperdioabre.name == "fechadoinfo"){
        cardperdioabre.style.display = 'flex'
        cardperdioabre.name = 'abertoinfo'
        sobe.style.marginTop = '2rem'

        notificacaoperfio.style.display = 'none'
        notificacaoperfio.name = 'fechadonotificacao'
        publicarperfio.style.display = 'none'
        publicarperfio.name = 'fechadopublicar'
       
    }else{
        cardperdioabre.style.display = 'none'
        cardperdioabre.name = 'fechadoinfo'
        sobe.style.marginTop = '7rem'
    }
});

// abiri notificação do menu //

notificacaoperfio = document.getElementById('notificacaoperfiomenu')
sobe2 = document.querySelector('.sobe2')

$("#notificacaoperfio").click(function() {
    if(notificacaoperfio.name == "fechadonotificacao"){
        notificacaoperfio.style.display = 'flex'
        notificacaoperfio.name = 'abertonotificacao'
        sobe2.style.marginTop = '2rem'

        cardperdioabre.style.display = 'none'
        cardperdioabre.name = 'fechadoinfo'
        publicarperfio.style.display = 'none'
        publicarperfio.name = 'fechadopublicar'
       
    }else{
        notificacaoperfio.style.display = 'none'
        notificacaoperfio.name = 'fechadonotificacao'
        sobe2.style.marginTop = '7rem'
    }
});


// abiri publicar do menu //

publicarperfio = document.getElementById('publicar')
sobe3 = document.querySelector('.sobe3')

$("#publicarperfio").click(function() {
    if(publicarperfio.name == "fechadopublicar"){
        publicarperfio.style.display = 'flex'
        publicarperfio.name = 'abertopublicar'
        sobe3.style.marginTop = '2rem'

        cardperdioabre.style.display = 'none'
        cardperdioabre.name = 'fechadoinfo'
        notificacaoperfio.style.display = 'none'
        notificacaoperfio.name = 'fechadonotificacao'
       
    }else{
        publicarperfio.style.display = 'none'
        publicarperfio.name = 'fechadopublicar'
        sobe3.style.marginTop = '7rem'
    }
});

//animações do menu mobile //


homeanime = document.getElementById('home-anime')
pesqanime = document.getElementById('pesq-anime')
pubanime = document.getElementById('pub-anime')
notanime = document.getElementById('not-anime')
perfilanime = document.getElementById('perfil-anime')


$("#home-anime-click").click(function() {
    homeanime.style.fontSize= '31px' 
    pesqanime.style.fontSize= '24px' 
    pubanime.style.fontSize= '24px' 
    notanime.style.fontSize= '24px' 
    perfilanime.style.width= '24px'
    perfilanime.style.height= '24px' 
});

$("#pesq-anime-click").click(function() {
    pesqanime.style.fontSize= '31px' 
    homeanime.style.fontSize= '24px'
    pubanime.style.fontSize= '24px' 
    notanime.style.fontSize= '24px' 
    perfilanime.style.width= '24px'
    perfilanime.style.height= '24px' 
});

$("#pub-anime-click").click(function() {
    pubanime.style.fontSize= '31px' 
    pesqanime.style.fontSize= '24px'
    homeanime.style.fontSize= '24px' 
    notanime.style.fontSize= '24px' 
    perfilanime.style.width= '24px'
    perfilanime.style.height= '24px' 
});

$("#not-anime-click").click(function() {
    notanime.style.fontSize= '31px' 
    pubanime.style.fontSize= '24px' 
    pesqanime.style.fontSize= '24px'
    homeanime.style.fontSize= '24px' 
    perfilanime.style.width= '24px'
    perfilanime.style.height= '24px' 

});

$("#perfil-anime-click").click(function() {
    perfilanime.style.width= '31px'
    perfilanime.style.height= '31px' 
    pubanime.style.fontSize= '24px' 
    pesqanime.style.fontSize= '24px'
    homeanime.style.fontSize= '24px' 
    notanime.style.fontSize= '24px'  
});


// botao do seguir perfil //

btnseguir = document.getElementById('botaoseguir')

$("#seguir").click(function() {
    if(btnseguir.name == "nseguindo"){
        btnseguir.style.backgroundColor = 'white'
        btnseguir.style.color='black'
        btnseguir.style.transition='1s' 
        btnseguir.name = 'sseguindo'
        btnseguir.innerHTML = 'Seguindo'
       
    }else{
        btnseguir.style.backgroundColor = 'transparent'
        btnseguir.style.color='white'
        btnseguir.style.transition='1s' 
        btnseguir.name = 'nseguindo'
        btnseguir.innerHTML = 'Seguir'

    }
});
