conteiner = document.getElementById('container')
local = document.getElementById('local')

$("#entra-story").click(function() {
    conteiner.style.display = 'none'
    local.style.display = 'flex'
});

$("#fechar-story").click(function() {
    conteiner.style.display = 'flex'
    local.style.display = 'none'
});

//curtio
imgstory = document.getElementById('imgcoracaostory')

    $("#curtidastory").click(function() {
        if(imgstory.name =="semcutirstory"){
            imgstory.src = 'img/heart-pintado.svg'
            imgstory.name = 'curtidostory'
        }else{
            imgstory.src = 'img/heart-svgrepo-com.svg'
            imgstory.name = 'semcutirstory'
        }
    });