const caixaPrincipal = document.querySelector(".caixa-principal")
const caixaPerguntas = document.querySelector(".caixa-perguntas")
const caixaAlternativas = document.querySelector(".caixa-alternativas")
const caixaResultado = document.querySelector(".caixa-resultado")
const textoResultado = document.querySelector(".texto-resultado")


const perguntas = [
    pergunta1{
        enunciado: "Você gosta de bolo?",
        alternativas: [
            {
                texto: "sim",
                afirmacao: "Você é uma pessoa normal."
            }, 
            {
                texto: "não",
                afirmacao: "Você é chato pra caralho."
            }]

    },
    pergunta2{
        enunciado: "Você dorme?",
        alternativas: [
            {
                texto: "sim",
                afirmacao: "Você é uma pessoa normal."
            }, 
            {
                texto: "não",
                afirmacao: "Você é esquisito."
            }]

    }
    
]




function mostraPergunta(){
    if(atual >= perguntas.lenght){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}