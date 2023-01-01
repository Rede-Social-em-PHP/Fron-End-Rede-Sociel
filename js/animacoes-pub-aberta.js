card2 = document.querySelector('.cardtrespontos2')

$("#trespontos2").click(function() {
    if(card2.name == "fechado2"){
        card2.style.display = 'block'
        card2.name = 'aberto2'
       
    }else{
        card2.style.display = 'none'
        card2.name = 'fechado2'
    }
});


