export const adicionar = document.getElementById('listarClientes');
export const apiFetch = "https://crudcrud.com/api/d8f5571561874ddbb54c31c74d078073/cadastro";
export const nomeInput = document.getElementById('name');
export const emailInput = document.getElementById('email');

export function criarElementoCliente(cliente) {
    const li = document.createElement('li');
    li.innerHTML = `${cliente.nome} - ${cliente.email} <button class="deletar" data-id="${cliente._id}">X</button>`;
    return li;
}




