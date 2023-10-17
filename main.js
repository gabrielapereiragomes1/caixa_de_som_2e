//criando/declarando a função tocaSomPom
function tocaSomPom() {
    document.querySelector('#som_tecla_pom').play();
}
//chamando/ivocando a função tocaSomPom
document.querySelector('.som_tecla_pom').onclick = tocaSomPom;

//criando a referência constante ListaDeTeclas
const ListaDeTeclas = document.querySelectorAll('.tecla');

//atribuindo o clique no botão "0" que é o 1º item da lista de teclas
listaDeTeclas[0].onclick = tocaSomPom;

//Criando o código de repetição WHILE
while() {

}