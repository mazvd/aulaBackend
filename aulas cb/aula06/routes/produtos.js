const express = require('express');

const produtosController = require('../controllers/controller_produto');

const router = express.Router();

router.get('/', produtosController.listarTodos);

router.get('/:produtoId', produtosController.buscarPeloId);

router.post('/', produtosController.criarProduto);

router.put('/:produtoId', produtosController.atualizarProduto);

router.delete('/:produtoId', produtosController.removerProduto);

module.exports = router;
