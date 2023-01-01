$(document).ready(() => {
    for (let j = 1; j < 13; j++) {
        let projeto = `
            <a href="chat-mobile.html">
                <div class="contato1" id="entrachat">
                    <img src="../img/perfio.png" alt="">
                    <h1>Pedro Jorge </h1>
                </div>
            </a>
        `
        $('.contatos-mobile').append(projeto);
 
    }

})


abrecard = document.getElementById('dentrocard')

$("#abrecardtrespontos").click(function() {
    if(abrecard.name =="fechadoponto"){
        abrecard.style.display = 'flex'
        abrecard.name = 'abertoponto'
    }else{
        abrecard.style.display = 'none'
        abrecard.name = 'fechadoponto'
    }
});