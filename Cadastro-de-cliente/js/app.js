import { Cadastro } from "./classes.js";
import { adicionar, apiFetch, nomeInput, emailInput, criarElementoCliente } from "./utils.js";

function criarCadastro(nome, email) {
    return new Cadastro(nome, email);
}

function adicionarCliente(cliente) {
    const li = criarElementoCliente(cliente);
    adicionar.appendChild(li);
}

document.getElementById('adicionar').addEventListener('click', async () => {
    const usuario = criarCadastro(nomeInput.value, emailInput.value);

    try {
        const cadastroDeClientes = await usuario.enviarAPI(apiFetch);
        adicionarCliente(cadastroDeClientes);
    } catch (erro) {
        console.error('Erro ao cadastrar:', erro);

    }
});


async function carregarClientes() {
    try {
        const response = await fetch(apiFetch);
        const clientes = await response.json();

        clientes.forEach(cadastroDeClientes => {
            adicionarCliente(cadastroDeClientes);

        });

        const totalGmail = clientes.reduce((total, cliente) => {
            return cliente.email.endsWith('@gmail.com') ? total + 1 : total;
        }, 0);

        const contador = document.createElement('p');
        contador.textContent = `Total de clientes com Gmail: ${totalGmail}`;
        adicionar.appendChild(contador);

    }
    catch (erro) {
        console.error('Erro ao carregar clientes:', erro);
        alert('Erro ao carregar')
    }
}



window.addEventListener('DOMContentLoaded', carregarClientes);


document.addEventListener('click', async (evento) => {
    if (evento.target.classList.contains('deletar')) {
        const id = evento.target.getAttribute('data-id');

        try {
            await fetch(`${apiFetch}/${id}`, {
                method: "DELETE",
            });
            evento.target.parentElement.remove();
        } catch (error) {
            console.error('Erro ao deletar:', error);
            alert("Erro ao deletar")
        }
    }
})