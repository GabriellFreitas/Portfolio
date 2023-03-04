

function copyEmail() {
  // Seleciona o elemento que contém o email
  const email = document.getElementById("email");

  // Cria um elemento temporário para copiar o conteúdo
  const tempElem = document.createElement("textarea");
  tempElem.value = email.innerText;
  document.body.appendChild(tempElem);

  // Copia o conteúdo para a área de transferência
  tempElem.select();
  document.execCommand("copy");
  document.body.removeChild(tempElem);

  // Exibe uma mensagem de sucesso para o usuário
  alert("Endereço de e-mail copiado com sucesso!");
}

