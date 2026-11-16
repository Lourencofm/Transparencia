async function buscarDeputados() {

    const url = 'https://dadosabertos.camara.leg.br/api/v2/deputados?siglaUf=ES&itens=10';

    const resposta = await fetch(url, {
        headers: {
            'Accept': 'application/json'
        }
    });

    const {dados} = await resposta.json();

    return dados;

}
async function exibirDeputados() {
    const deputados = await buscarDeputados();
    const listaDeputados = document.querySelector('#deputados');
    deputados.forEach(deputado => {
        const li = document.createElement('li');
        li.textContent = `${deputado.nome} - ${deputado.siglaPartido}`;
        listaDeputados.appendChild(li);
    });
}
exibirDeputados();