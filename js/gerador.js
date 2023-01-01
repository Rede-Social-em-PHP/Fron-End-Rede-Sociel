$(document).ready(() => {
    const titulos = []
    const niveis = []

    for (let j = 1; j < 5; j++) {
        let projeto = `
            <div class="card1">
                <div class="info">
                    <div class="conteudo-info">
                        <div class="usuario-pub">
                            <img src="img/perfio.png" alt="">
                            <div class="textos-info">
                                <p>felipe</p>
                            </div>
                        </div>
                        <div class="trespontos" id="trespontos">
                            <svg aria-label="Mais opções" class="_ab6- __web-inspector-hide-shortcut__" color="#8e8e8e" fill="#8e8e8e" height="24" role="img" viewBox="0 0 24 24" width="24">
                                <circle cx="12" cy="12" r="1.5"></circle>
                                <circle cx="6" cy="12" r="1.5"></circle>
                                <circle cx="18" cy="12" r="1.5"></circle>
                            </svg>
                        </div>
                    </div>

                </div>
                <div class="conteudo">
                    <div class="relacao">
                        <div class="alinha-cardtrsponto">
                            <div class="cardtrespontos" name="fechado">
                                <div class="opicao1">
                                    <div class="dentro-opcao">
                                        <img src="img/bookmark-svgrepo-com.svg" alt="">
                                        <h1>Salvar publicação</h1>
                                    </div>
                                    <div class="dentro-opcao">
                                        <img src="img/bookmark-svgrepo-com.svg" alt="">
                                        <h1>Ativar notificações</h1>
                                    </div>
                                    <div class="dentro-opcao">
                                        <img src="img/bookmark-svgrepo-com.svg" alt="">
                                        <h1>Ocultar publicação</h1>
                                    </div>
                                    <div class="dentro-opcao">
                                        <img src="img/bookmark-svgrepo-com.svg" alt="">
                                        <h1>Deixar de Seguir</h1>
                                    </div>
                                    <div class="dentro-opcao">
                                        <img src="img/bookmark-svgrepo-com.svg" alt="">
                                        <h1>Denunciar publicação</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src="img/night_city_window_rain.jpg" alt="" >
                    </div>
                </div>
                <div class="interacoes">
                    <div class="tresantes">
                        <button class="curtida" id="curtio">
                            <img id="img-coracao" name="semcutir" src="img/heart-svgrepo-com.svg" alt="">
                        </button>
                        <button class="chats-pub" id="chatpub">
                            <img src="img/chat-round-svgrepo-com.svg" alt="">
                        </button>
                        <button class="compartlhar">
                            <img src="img/share-svgrepo-com.svg" alt="">
                        </button>
                    </div>
                    <button class="salvar" id="salvar">
                        <img id="img-save" name="naosalvo" src="img/bookmark-svgrepo-com.svg" alt="">
                    </button>

                </div>
                <div class="curtidas" id="salvar">
                    <p>12.434 curtidas</p>
                </div>
                <div class="bio">
                    <p class="nomepessoa">felipe</p>
                    <p class="descricao"> LastPass revela roubo de dados criptografados de usuários, como senhas e notas<samp class="lermais">...mais</samp></samp></p>
                </div>

            </div>
        `
        $('.pubs').append(projeto);

        // animações curtit e salvar //
            img = document.getElementById('img-coracao')
            img2 = document.getElementById('img-save')

            $("#curtio").click(function() {
                if(img.name =="semcutir"){
                    img.src = 'img/heart-pintado.svg'
                    img.name = 'curtido'
                }else{
                    img.src = 'img/heart-svgrepo-com.svg'
                    img.name = 'semcutir'
                }
            });
            $("#salvar").click(function() {
                if(img2.name =="naosalvo"){
                    img2.src = 'img/bookmark-pintado-com.svg' 
                    img2.name = 'salvo'
                }else{
                    img2.src = 'img/bookmark-svgrepo-com.svg'
                    img2.name = 'naosalvo'
                }
            });

        // fim //
        // tres pontos //
        card = document.querySelector('.cardtrespontos')

        $("#trespontos").click(function() {
            if(card.name == "fechado"){
                card.style.display = 'block'
                card.name = 'aberto'
               
            }else{
                card.style.display = 'none'
                card.name = 'fechado'
            }
        });

        // fim //
        //abrir chattttt

            abrir = document.getElementById('abre-publicacoes')
            conteiner2 = document.querySelector('.container')

            $("#chatpub").click(function() {
                conteiner2.style.display = 'none'
                abrir.style.display = 'flex'
            });

             $("#fechar-chat").click(function() {
                 conteiner2.style.display = 'flex'
                 abrir.style.display = 'none'
             });

             


            // animações curtit e salvar chat aberto //
            imgcurtir = document.getElementById('imgcoracao2')
            imgsalvar = document.getElementById('img-save2')

            $("#curtida").click(function() {
                if(imgcurtir.name =="semcurtir2"){
                    imgcurtir.src = 'img/heart-pintado.svg'
                    imgcurtir.name = 'curtido2'
                }else{
                    imgcurtir.src = 'img/heart-svgrepo-com.svg'
                    imgcurtir.name = 'semcurtir2'
                }
            });
            $("#salvar2").click(function() {
                if(imgsalvar.name =="naosalvo2"){
                    imgsalvar.src = 'img/bookmark-pintado-com.svg' 
                    imgsalvar.name = 'salvo2'
                }else{
                    imgsalvar.src = 'img/bookmark-svgrepo-com.svg'
                    imgsalvar.name = 'naosalvo2'
                }
            });

        // fim //
        
    }
})

// ${titulos[j - 1]}

