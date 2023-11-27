const começarGame = document.querySelector(".iniciar-quiz")
const questoesContainer = document.querySelector(".questoes-container")
const respostaContainer = document.querySelector(".resposta-container")
const textoQuestao = document.querySelector(".questoes")
const botaoProximo = document.querySelector(".proximo-quiz")
const bemVindo = document.querySelector(".desafio")

começarGame.addEventListener("click", start)
botaoProximo.addEventListener("click", displayProximaPergunta)

NomeUsuario.innerHTML = sessionStorage.getItem("NOME_USUARIO")

var questãoIndex = 0;
var acertos = 0;

function start() {
    começarGame.classList.add("hide")
    questoesContainer.classList.remove("hide")
    bemVindo.classList.add("hide")
    displayProximaPergunta()


}

function displayProximaPergunta() {
    resetar()

    if (perguntas.length == questãoIndex) {
        return fimDeJogo()
    }

    textoQuestao.textContent = perguntas[questãoIndex].question
    perguntas[questãoIndex].respostas.forEach(respostas => {
        const novaResposta = document.createElement("button")
        novaResposta.classList.add("button", "resposta")
        novaResposta.textContent = respostas.Text
        if (respostas.correct) {
            novaResposta.dataset.correct = respostas.correct
        }
        respostaContainer.appendChild(novaResposta)
        novaResposta.addEventListener("click", selectAnswer)
    });
}

function resetar() {
    while (respostaContainer.firstChild) {
        respostaContainer.removeChild(respostaContainer.firstChild)
    }
    document.body.removeAttribute("class")
    botaoProximo.classList.add("hide")

}

function selectAnswer(event) {
    const respostaClick = event.target

    if (respostaClick.dataset.correct) {
        document.body.classList.add("correct")
        acertos++
    } else {
        document.body.classList.add("incorrect")
    }
    document.querySelectorAll(".resposta").forEach(button => {
        if (button.dataset.correct) {
            button.classList.add("correct")
        } else {
            button.classList.add("incorrect")
        }
        button.disabled = true

    })
    botaoProximo.classList.remove("hide")
    questãoIndex++
}
function fimDeJogo() {
    var totalPerguntas = perguntas.length
    var desempenho = Math.floor(acertos * 100 / totalPerguntas)

    var mensagem = ""

    if (desempenho >= 90) {
        mensagem = "Você realmente conhece o timão"
    }
    else if (desempenho >= 70) {
        mensagem = "Você foi muito bem!"
    }
    else if (desempenho >= 50) {
        mensagem = "Eh... Tá na média"
    }
    else if (desempenho < 50) {
        mensagem = "Pelo amor do futebol... Você pode melhorar"
    }

    questoesContainer.innerHTML = `
<p class="mensagem-final">
Você <span style="color: green;"> acertou</span> ${acertos} questões de ${totalPerguntas}!
<span style="color: blue;">Feedback:</span>${mensagem}
</p>
<div class="botaoFinal">
<button onclick=window.location.reload() class="button">
Refazer Quiz
</button>
</div>
<div class="botaoFinal">
<button onclick=detalhar() class="button">
Detalhar
</button>
</div>
   `
}
var idUsuario= sessionStorage.ID_USUARIO
function detalhar(){
    var totalPerguntas = perguntas.length
    var desempenho = Math.floor(acertos * 100 / totalPerguntas)
    
    questoesContainer.innerHTML = `
    <p class="mensagem-final">
    Ao responder ${acertos} questões corretamente, você  <span style="color: green;"> acertou</span> ${desempenho}%
    do Quiz
    </p>
    <div class="graficoPai" >
    <div class="grafico" >
    <canvas id="myChart"></canvas>
  </div>
  </div>

    <div class="botaoFinal">
    <button onclick=window.location.reload() class="button">
    Refazer Quiz
    </button>
    </div>

       `
    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Errou', 'Acertou'],
        datasets: [{
          label: '# of Votes',
          data: [totalPerguntas-acertos, acertos],
          backgroundColor: ['#ff0000', '#33ff00'],
          borderWidth: 1
        }]
      },
      
    });


    fetch("/usuarios/quiz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // crie um atributo que recebe o valor recuperado aqui
          // Agora vá para o arquivo routes/usuario.js
          pontuacaoServer: acertos,
          IDServer: idUsuario
          
        }),
      })
        .then(function (resposta) {
          console.log("resposta: ", resposta);
  
        //   if (resposta.ok) {
  
        //     mensagem_erro.innerHTML =
        //       "Cadastro realizado com sucesso! Redirecionando para tela de Login...";
  
        //     setTimeout(() => {
        //       window.location = "login.html";
        //     }, "2000");
  
        //     limparFormulario();
        //     finalizarAguardar();
        //   } else {
        //     throw "Houve um erro ao tentar realizar o cadastro!";
        //   }
        })
        .catch(function (resposta) {
          console.log(`#ERRO: ${resposta}`);
       
        });
  
      return false;
    }


       


   
    




const perguntas = [
    {
        question: "Em que ano o Corinthians ganhou o seu mundial mais recente?",
        respostas: [
            { Text: "2012", correct: true },
            { Text: "2011", correct: false },
            { Text: "2009", correct: false },
            { Text: "2007", correct: false }
        ]
    },
    {
        question: "Quantas libertadores o Corinthians tem?",
        respostas: [
            { Text: "3", correct: false },
            { Text: "Nenhuma", correct: false },
            { Text: "2", correct: false},
            { Text: "1", correct: true }
        ]
    },
    {
        question: "Qual o nome do atual técnico do Corinthians? Data: 27/11/23",
        respostas: [
            { Text: "Mano Menezes", correct: true },
            { Text: "Tite", correct: false },
            { Text: "Luxemburgo", correct: false },
            { Text: "Fernando Lazaro", correct: false }
        ]
    },
    {
        question: "Qual desses tecnicos se tornou idolo do Corinthians?",
        respostas: [
            { Text: "Vitor Pereira", correct: false },
            { Text: "Tite", correct: true },
            { Text: "Luxemburgo", correct: false },
            { Text: "Fabio Carille", correct: false }
        ]
    },
    {
        question: "Em que ano o Corinthians foi fundado??",
        respostas: [
            { Text: "1912", correct: false },
            { Text: "1906", correct: false },
            { Text: "1910", correct: true },
            { Text: "1915", correct: false }
        ]
    },
    {
        question: "Em que bairro que o Corinthians foi fundado?",
        respostas: [
            { Text: "Itaquera", correct: false },
            { Text: "Morumbi", correct: false },
            { Text: "Bom Retiro", correct: true },
            { Text: "Pinheiros", correct: false }
        ]
    },
    {
        question: "Quantos títulos o Corinthians tem?",
        respostas: [
            { Text: "40", correct: false },
            { Text: "43", correct: true },
            { Text: "55", correct: false },
            { Text: "53", correct: false }
        ]
    },
    {
        question: "Em que ano o Corinthians ficou campeão da série B?",
        respostas: [
            { Text: "2010", correct: false },
            { Text: "2008", correct: true },
            { Text: "2006", correct: false },
            { Text: "Nunca foi rebaixado", correct: false }
        ]
    },
    {
        question: "Qual o único título que o Corinthians não tem?",
        respostas: [
            { Text: "Libertadores", correct: false },
            { Text: "Sul-Americana", correct: true },
            { Text: "CDB", correct: false },
            { Text: "Não faltam titulos", correct: false }
        ]
    },
    {
        question: "Qual o mascote oficial do Corinthians?",
        respostas: [
            { Text: "Mosqueteiro", correct: true },
            { Text: "Gavião", correct: false },
            { Text: "São Jorge", correct: false },
            { Text: "Fuleco", correct: false }
        ]
    }





]

