$(document).ready(() => {
    const titulos = []
    const niveis = []

    for (let j = 1; j < 13; j++) {
        let projeto = `
            <div class="blocos-notificacao">
                <img src="img/perfio.png" alt="">
                <p><sapan class="nomeuser" id="">Pedro Louco</sapan>começou a seguir você.</p>
            </div>
        `
        $('.elementos-notificacao').append(projeto);
 
    }

})