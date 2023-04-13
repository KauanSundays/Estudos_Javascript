// Seleciona todos os elementos do documento HTML com a classe .tecla e os armazena em uma variável
const teclas = document.querySelectorAll(".tecla");

// Seleciona todos os elementos <audio> do documento HTML e os armazena em uma variável
const sons = document.querySelectorAll("audio");

// Cria um loop para adicionar um ouvinte de evento de clique a cada elemento com a classe .tecla
for (let i = 0; i < teclas.length; i++) {
  teclas[i].addEventListener("click", function() {
    // Define o tempo atual do áudio como 0
    sons[i].currentTime = 0;
    // Inicia a reprodução do áudio
    sons[i].play();

  teclas.onkeydown = function() {
    teclas[i].classList.add('ativa');
  }

  })

  
}