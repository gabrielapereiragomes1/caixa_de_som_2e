function tocaSomPom() {
    document.querySelector('#som_tecla_pom')
}
document.querySelector('.som_tecla_pom').onclick = tocaSomPom;

function TocaSomClap(){
    document.querySelector('#som_tecla_pom').play();
}
document.querySelector('.tecla_clap').onclick = TocaSomClap;

const ListaDeTeclas = 