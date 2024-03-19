
const produtos = [];

function listarTodos(req, res) {
    res.jon(produtos);
}

function buscarPeloId(req, res) {
    const { produtoId } = req.params; //{produtoId: 'valor'} tira só um pedaço do objeto
    const encontrado = produtos.find(item => item.id == produtoId);

    if (encontrado) {
        res.json(encontrado);
    } else {
        res.status(404).json({ msg: 'Produto não encontrado' })
    }
}

function criarProduto(req, res) {
    const { nome, preco } = req.body;
    const novo = { id: produtos.length + 1, nome, preco };
    produtos.push(novo);
    res.status(201).json(novo);
}

function atualizarProduto(req, res) {
    const { produtoId } = req.params; //{produtoId: 'valor'} tira só um pedaço do objeto
    const encontrado = produtos.find(item => item.id == produtoId);

    if (encontrado) {
        const { nome, preco } = req.body;
        encontrado.nome = nome;
        encontrado.preco = preco;
        res.json(encontrado);
    } else {
        res.status(404).json({ msg: 'Produto não encontrado' })
    }

}

function removerProduto(req, res) {
    const { produtoId } = req.params;
    const posicao = produtos.findIndex(item => item.id == produtoId)

    if (posicao >= 0) {
        produtos.splice(posicao, 1);
        res.status(204).end();
    } else {
        res.status(404).json({ msg: 'Produto não encontrado' })
    }
}

module.exports = { listarTodos, buscarPeloId, criarProduto, atualizarProduto, removerProduto };