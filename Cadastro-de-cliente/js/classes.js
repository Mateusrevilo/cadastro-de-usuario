export class Cadastro {
    constructor(nome, email) {
        this.nome = nome;
        this.email = email;
    }

    
    async enviarAPI(apiFetch) {
        const response = await fetch(apiFetch, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome: this.nome,
                email: this.email
            })
        });

        if (!response.ok) {
            throw new Error(`Erro ao enviar dados`);
        }

        return await response.json();
    }
}