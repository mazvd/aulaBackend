const readline = require('readline-sync');
const contatoControlador = require('./controlador');
function menu() {
    console.log('Menu de contatos');
    console.log('1. Adicionar contato');
    console.log('2. Listar contatos');
    console.log('3. Buscar contato');
    console.log('4. Atualizar contato');
    console.log('5. Remover contato');
    console.log('6. Sair');
};
function escolherOpcao(opcao) {
    switch (opcao) {
        case '1': {
            const nome = readline.question('Digite o nome do contato: ');
            const email = readline.question('Digite o email do contato: ');
            const telefone = readline.question('Digite o telefone do contato: ');
            contatoControlador.adicionarContato(nome, email, telefone);
            break;
        }
        case '2': {
            const contatos = contatoControlador.listarContato();
            contatos.forEach(contato => console.log(`Nome: ${contato.nome}, Email: ${contato.email}, Telefone: ${contato.telefone}`),
            );

            break;
        }
        case '3': {
            const nomeBusca = readline.question('Digite o nome do contato a ser buscado: ');
            const contatoBuscado = contatoControlador.buscarContato(nomeBusca);
            if (contatoBuscado) {
                console.log(`Nome: ${contatoBuscado.nome}, Email: ${contatoBuscado.email}, Telefone: ${contatoBuscado.telefone}`);
            } else {
                console.log('Contato não encontrado.');
            }
            break;
        }
        case '4': {
            const nomeAtualizar = readline.question('Digite o nome do contato a ser atualizado: ');
            const emailAtualizar = readline.question('Digite o novo email do contato: ');
            const telefoneAtualizar = readline.question('Digite o novo telefone do contato: ');
            contatoControlador.atualizarContato(nomeAtualizar, emailAtualizar, telefoneAtualizar);
            break;
        }
        case '5':
            const nomeRemover = readline.question('Digite o nome do contato a ser removido: ');
           contatoControlador.removerContato(nomeRemover);
            break;
        case '6':
            console.log('Encerrando o programa...');
            process.exit();
        default:
            console.log('Opção inválida. Por favor, escolha uma opção válida.');
    }
};
function main() {
    while (true) {
        menu();
        const opcao = readline.question('Escolha uma opção: ');
        escolherOpcao(opcao);
    }
};
main();