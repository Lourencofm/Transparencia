async function buscarDeputados() {
    const url = 'https://dadosabertos.camara.leg.br/api/v2/deputados?itens=10&ordem=ASC&ordenarPor=nome';

    const resposta = await fetch(url, {
        headers: {
            'Accept': 'application/json'
        }
    });

    if (!resposta.ok) {
        throw new Error('Erro ao buscar deputados');
    }

    const { dados } = await resposta.json();
    return dados;
}

    function criarCartao(deputado) {
        const cartao = document.createElement('li');

        const imagem = document.createElement('img');
        imagem.src = deputado.urlFoto;
        imagem.alt = `Foto de ${deputado.nome}`;
        imagem.loading = 'lazy';

        const nome = document.createElement('h2');
        nome.textContent = deputado.nome;

        const partido = document.createElement('p');
        partido.textContent = `Partido: ${deputado.siglaPartido}`;

        const uf = document.createElement('p');
        uf.textContent = `UF: ${deputado.siglaUf}`;

        cartao.append(imagem, nome, partido, uf);

        return cartao;
    }

    async function exibirDeputados() {
        const deputados = await buscarDeputados();

        const listaDeputados = document.querySelector('#deputados');

        deputados.forEach(deputado => {
            const cartao = criarCartao(deputado);
            listaDeputados.appendChild(cartao);
        });
    }

    exibirDeputados()