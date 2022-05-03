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

// ativar itens do orçamento

//puxa os parametros extras da url dada a location: search busca tudo dps do ? e URLSearchParams retorna os parametros
const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);

  if (elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarProduto);


