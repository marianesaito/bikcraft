// links do menu

const links = document.querySelectorAll(".header-menu a");
function ativarLink(link) {
  // location puxa a url da janela atual e registra em "url"
  const url = location.href;

  // link.href puxa cada url do menu e registra em "href"
  const href = link.href;

  if (url.includes(href)) {
    // inclui a classe ativo a esse "a"
    link.classList.add("ativo");
  }
}

// para cada item dessa lista "links", ele roda a função ativarLink usando o item como argumento da função
links.forEach(ativarLink);

// ativar itens do orçamento seguro

//puxa os parametros extras da url dada a location: search busca tudo dps do ? e URLSearchParams retorna os parametros
const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);

  if (elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarProduto);

//perguntas frequentes

const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
  //puxa onde está sendo clicado e registra na constante pergunta
  const pergunta = event.currentTarget;

  //puxa dessa constante pergunta apenas o atributo "aria-controls" que seria o id da dd
  const controls = pergunta.getAttribute("aria-controls");

  //puxa a id com o mesmo string de controls de um elemento
  const resposta = document.getElementById(controls);

  //adiciona e remove a classe ativa (que esconde ou mostra a resposta) do elemento resposta
  resposta.classList.toggle("ativa");

  //verifica se na constante resposta possui a classe "ativa" e retorna um valor de "true" se ela tiver
  const ativa = resposta.classList.contains("ativa");

  //muda o atributo 'aria-expanded' para true na pergunta (esse true já é o valor da constate ativa)
  pergunta.setAttribute("aria-expanded", ativa);


}

//adiciona um event listener para todas as perguntas que estão como button
function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);
