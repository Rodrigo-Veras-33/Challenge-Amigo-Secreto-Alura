//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. 
// Aqui você deverá desenvolver a lógica para resolver o problema.

// 1. Declarar uma variável do tipo array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    // 2. Capturar o valor do campo de entrada
    const inputAmigo = document.getElementById('amigo');
    const nome = inputAmigo.value.trim(); // Remove espaços em branco no início e no fim

    // 3. Validar a entrada
    if (nome === "") {
        alert("Por favor, insira um nome."); // Mensagem de erro
        return;
    }

    // 4. Atualizar o array de amigos
    amigos.push(nome);

    // 5. Limpar o campo de entrada
    inputAmigo.value = "";

    // 6. Obter o elemento da lista
    const listaAmigos = document.getElementById('listaAmigos');

    // 7. Limpar a lista existente
    listaAmigos.innerHTML = "";

    // 8. Percorrer o array e 9. Adicionar elementos à lista
    amigos.forEach((nome) => {
        const li = document.createElement('li'); // Criar um novo elemento <li>
        li.textContent = nome; // Definir o texto do <li>
        listaAmigos.appendChild(li); // Adicionar o <li> à lista
    });

    console.log("Nome adicionado:", nome); // Depuração: Verificar se o nome foi adicionado
    console.log("Lista atual:", amigos); // Depuração: Verificar a lista atual
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    // 10. Validar que há mais de 2 nomes na lista
    if (amigos.length < 3) {
        alert("Necessário no mínimo 3 nomes para que o sorteio seja válido.");
        return;
    }

    // 11. Gerar um índice aleatório
    const indiceSorteado = Math.floor(Math.random() * amigos.length);

    // 12. Obter o nome sorteado
    const amigoSorteado = amigos[indiceSorteado];

    // 13. Mostrar o resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amigo secreto: ${amigoSorteado}`;

    // Ocultar a lista de nomes
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.style.display = "none";

    console.log("Amigo sorteado:", amigoSorteado); // Depuração: Verificar o nome sorteado
}