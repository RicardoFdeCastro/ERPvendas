// Capturar o valor digitado pelo usuário no campo de nome do cliente
const clienteNome = document.getElementById('clienteNome').value;

// Capturar o valor digitado pelo usuário no campo de e-mail do cliente
const clienteEmail = document.getElementById('clienteEmail').value;

// Capturar o valor digitado pelo usuário no campo de telefone do cliente
const clienteTelefone = document.getElementById('clienteTelefone').value;

// Capturar o botão "Cadastrar Cliente"
const cadastrarClienteBtn = document.getElementById('cadastrarClienteBtn');

// Adicionar um evento de clique ao botão
cadastrarClienteBtn.addEventListener('click', cadastrarCliente);

// Função para cadastrar o cliente
function cadastrarCliente() {
  // Capturar os valores digitados pelo usuário
  const clienteNome = document.getElementById('clienteNome').value;
  const clienteEmail = document.getElementById('clienteEmail').value;
  const clienteTelefone = document.getElementById('clienteTelefone').value;

  // Executar a lógica de cadastro do cliente
  // ...
}

// Capturar a tabela de clientes
const tabelaClientes = document.getElementById('tabelaClientes');

// Função para adicionar uma linha na tabela de clientes
function adicionarClienteNaTabela(nome, email, telefone) {
  // Criar uma nova linha na tabela
  const novaLinha = tabelaClientes.insertRow();

  // Criar células para cada coluna
  const colunaNome = novaLinha.insertCell();
  const colunaEmail = novaLinha.insertCell();
  const colunaTelefone = novaLinha.insertCell();

  // Preencher as células com os valores do cliente
  colunaNome.textContent = nome;
  colunaEmail.textContent = email;
  colunaTelefone.textContent = telefone;
}

// Exemplo de uso da função adicionarClienteNaTabela
adicionarClienteNaTabela('John Doe', 'johndoe@example.com', '(123) 456-7890');
